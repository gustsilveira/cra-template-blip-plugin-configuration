import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import GeneralConfiguration from 'plugin-general-configuration';
import AttendanceTime from 'plugin-attendance-time';
import {
    createTrack,
    getApplicationDataAsync
} from '../../services/application-service';
import Header from './components/Header';
import config from '../../config/index';

const Home = () => {
    useEffect(() => {
        const application = getApplicationDataAsync();
        setInfoBot({
            botName: application.name,
            botIdentifier: application.shortName,
            tenantId: application.tenantId
        });
        createTrack(config.tracking.tracking_opened, {
            botName: application.name,
            botIdentifier: application.shortName,
            tenantId: application.tenantId
        });
    }, []);
    const { t } = useTranslation();
    const generalRef = useRef();
    const attendanceRef = useRef();
    const [step, setStep] = useState(0);
    const [infoBot, setInfoBot] = useState();

    const handleStep = async (type) => {
        try {
            const change = type === 'next' ? 1 : -1;
            if (change === 1) {
                createTrack(config.tracking.tracking_nextstep, infoBot);
            } else {
                createTrack(config.tracking.tracking_stepback, infoBot);
            }
            const stepperComponent = document.querySelector('bds-stepper');
            const activeStep = await stepperComponent.getActiveStep();
            stepperComponent.setActiveStep(activeStep + change);
            stepperComponent.setCompletedStep(activeStep);
            setStep(activeStep + change);
        } catch (error) {
            console.error(error);
        }
    };

    const saveResources = async () => {
        createTrack(config.tracking.tracking_finished, infoBot);
        generalRef.current.change();
        attendanceRef.current.change();
    };

    const getStepContentByIndex = (index) => {
        const content = {
            0: (
                <div className="container">
                    <GeneralConfiguration
                        ref={generalRef}
                    ></GeneralConfiguration>
                </div>
            ),
            1: (
                <div className="container">
                    <AttendanceTime ref={attendanceRef}></AttendanceTime>
                </div>
            ),
            2: t('stepper.step_three')
        };

        return content[index];
    };
    return (
        <div className="ph1 ph4-m ph5-ns pb5">
            <Header title={t('title.homePage')} />
            <div className="main">
                <div>
                    <bds-stepper>
                        <bds-step active="true">
                            {t('stepper.step_one')}
                        </bds-step>
                        <bds-step>{t('stepper.step_two')}</bds-step>
                        <bds-step>{t('stepper.step_three')}</bds-step>
                    </bds-stepper>
                    <bds-paper elevation="secondary">
                        {getStepContentByIndex(step)}
                        {step === 3 && 'Finished!'}
                    </bds-paper>
                    <div className="rightEnd">
                        {(step === 1 || step === 2) && (
                            <bds-button
                                style={{ marginRight: '8px' }}
                                onClick={() => handleStep('previous')}
                            >
                                {t('button.previous')}
                            </bds-button>
                        )}
                        {(step === 0 || step === 1) && (
                            <bds-button
                                onClick={() => handleStep('next')}
                                data-testid="next-button"
                            >
                                {t('button.next')}
                            </bds-button>
                        )}
                        {step === 2 && (
                            <bds-button onClick={() => saveResources()}>
                                {t('button.save')}
                            </bds-button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {};

export default Home;
