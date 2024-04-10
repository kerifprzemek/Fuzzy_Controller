(*
 *
 * File: porownanie_algorytmow.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "porownanie_algorytmow/ADRC"
 *
 * Model name                      : porownanie_algorytmow
 * Model version                   : 1.23
 * Model creator                   : kerif
 * Model last modified by          : kerif
 * Model last modified on          : Mon Mar 18 20:22:25 2024
 * Model sample time               : 0.02s
 * Subsystem name                  : porownanie_algorytmow/ADRC
 * Subsystem sample time           : 0.02s
 * Simulink PLC Coder version      : 23.2 (R2023b) 01-Aug-2023
 * ST code generated on            : Mon Mar 18 20:50:19 2024
 *
 * Target IDE selection            : 3S CoDeSys 3.5
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK ADRC
VAR_INPUT
    ssMethodType: SINT;
    Ref: LREAL;
    fdbck: LREAL;
    b: LREAL;
    obs_band: LREAL;
    ctrl_band: LREAL;
END_VAR
VAR_OUTPUT
    y: LREAL;
END_VAR
VAR
    c_DiscreteTimeIntegrator_DS: ARRAY [0..1] OF LREAL;
END_VAR
VAR_TEMP
    usedInputGain: LREAL;
    b_controllerBandwidth: LREAL;
    b_observerBandwidth: LREAL;
    c_idx_2: LREAL;
    c_idx_1: LREAL;
END_VAR
CASE ssMethodType OF
    SS_INITIALIZE: 
        (* SystemInitialize for Atomic SubSystem: '<Root>/ADRC' *)
        (* InitializeConditions for DiscreteIntegrator: '<S3>/Discrete-Time Integrator' *)
        c_DiscreteTimeIntegrator_DS[0] := 0.0;
        c_DiscreteTimeIntegrator_DS[1] := 0.0;
        (* End of SystemInitialize for SubSystem: '<Root>/ADRC' *)
    SS_STEP: 
        (* Outputs for Atomic SubSystem: '<Root>/ADRC' *)
        (* MATLAB Function: '<S5>/Extended state feedback robust controller' incorporates:
         *  DiscreteIntegrator: '<S3>/Discrete-Time Integrator' *)
        (* MATLAB Function 'ADRC/ADRC controller/State feedback robust controller/Extended state feedback robust controller': '<S10>:1' *)
        (* '<S10>:1:8' usedInputGain = evaluateSource(inputGainParameter, externalInputGainParameter); *)
        (* '<S10>:1:17' if(external == 0) *)
        IF b = 0.0 THEN 
            (* '<S10>:1:18' output = internal; *)
            usedInputGain := 0.005862;
        ELSE 
            (* '<S10>:1:19' else *)
            (* '<S10>:1:20' output = external; *)
            usedInputGain := b;
        END_IF;
        (* '<S10>:1:9' usedControllerBandwidth = evaluateSource(controllerBandwidth, externalControllerBandwidth); *)
        (* '<S10>:1:17' if(external == 0) *)
        IF ctrl_band = 0.0 THEN 
            (* '<S10>:1:18' output = internal; *)
            b_controllerBandwidth := 0.5;
        ELSE 
            (* '<S10>:1:19' else *)
            (* '<S10>:1:20' output = external; *)
            b_controllerBandwidth := ctrl_band;
        END_IF;
        (* '<S10>:1:10' K = calculateControllerGain(usedControllerBandwidth, dynamicsOrder); *)
        (* '<S10>:1:25' extendedControllerGain = poly(-controllerBandwidth * ones(1, dynamicsOrder)); *)
        (* '<S10>:1:26' controllerGain = flip(extendedControllerGain(2:end)); *)
        (* '<S10>:1:12' controlSignal = 1/usedInputGain * (estimatedExtendedState(end) +... *)
        (* '<S10>:1:13'             K * estimatedExtendedState(1:end-1)); *)
        y := ((b_controllerBandwidth * c_DiscreteTimeIntegrator_DS[0]) + c_DiscreteTimeIntegrator_DS[1]) * (1.0 / usedInputGain);
        (* End of MATLAB Function: '<S5>/Extended state feedback robust controller' *)
        
        (* Saturate: '<S13>/Saturation' *)
        IF y > 100.0 THEN 
            y := 100.0;
        ELSIF y < 0.0 THEN 
            y := 0.0;
        END_IF;
        (* End of Saturate: '<S13>/Saturation' *)
        
        (* MATLAB Function: '<S3>/Linear extended state observer' incorporates:
         *  DiscreteIntegrator: '<S3>/Discrete-Time Integrator'
         *  Sum: '<S1>/Sum' *)
        (* MATLAB Function 'ADRC/ADRC controller/Linear extended state observer/Linear extended state observer': '<S6>:1' *)
        (* '<S6>:1:10' usedInputGain = evaluateSource(inputGainParameter, externalInputGainParameter); *)
        (* '<S6>:1:22' if(external == 0) *)
        IF b = 0.0 THEN 
            (* '<S6>:1:23' output = internal; *)
            b_controllerBandwidth := 0.005862;
        ELSE 
            (* '<S6>:1:24' else *)
            (* '<S6>:1:25' output = external; *)
            b_controllerBandwidth := b;
        END_IF;
        (* '<S6>:1:11' usedObserverBandwidth = evaluateSource(observerBandwidth, externalObserverBandwidth); *)
        (* '<S6>:1:22' if(external == 0) *)
        IF obs_band = 0.0 THEN 
            (* '<S6>:1:23' output = internal; *)
            b_observerBandwidth := 3.0;
        ELSE 
            (* '<S6>:1:24' else *)
            (* '<S6>:1:25' output = external; *)
            b_observerBandwidth := obs_band;
        END_IF;
        (* '<S6>:1:12' A = calculateObserverStateMatrix(dynamicsOrder); *)
        (* '<S6>:1:13' B = calculateObserverInputMatrix(usedInputGain, dynamicsOrder); *)
        (* '<S6>:1:35' observerInputMatrix = [zeros(dynamicsOrder-1,1); -inputGainParameter; 0]; *)
        (* '<S6>:1:14' L = calculateObserverGainVector(usedObserverBandwidth, dynamicsOrder); *)
        (* '<S6>:1:39' extendedGainVector = poly(-observerBandwidth * ones(1, dynamicsOrder+1))'; *)
        c_idx_2 := b_observerBandwidth * b_observerBandwidth;
        c_idx_1 := b_observerBandwidth - ( -b_observerBandwidth);
        (* '<S6>:1:40' observerGainVector = extendedGainVector(2:end); *)
        (* '<S6>:1:16' estimatedExtendedStateDerivative = A * previousEstimatedExtendedState +... *)
        (* '<S6>:1:17'         B * controlSignal +... *)
        (* '<S6>:1:18'         L * (controlError - previousEstimatedExtendedState(1)); *)
        b_observerBandwidth := (Ref - fdbck) - c_DiscreteTimeIntegrator_DS[0];
        (* Update for DiscreteIntegrator: '<S3>/Discrete-Time Integrator' incorporates:
         *  MATLAB Function: '<S3>/Linear extended state observer' *)
        (* MATLAB Function 'ADRC/ADRC controller/Observer output/Only estimated total disturbance/Last element of estimated extended state': '<S8>:1' *)
        (* '<S8>:1:2' y = u(end); *)
        c_DiscreteTimeIntegrator_DS[0] := ((((( -b_controllerBandwidth) * y) + c_DiscreteTimeIntegrator_DS[1]) + (c_idx_1 * b_observerBandwidth)) * 0.02) + c_DiscreteTimeIntegrator_DS[0];
        c_DiscreteTimeIntegrator_DS[1] := ((c_idx_2 * b_observerBandwidth) * 0.02) + c_DiscreteTimeIntegrator_DS[1];
        (* End of Outputs for SubSystem: '<Root>/ADRC' *)
END_CASE;
END_FUNCTION_BLOCK
VAR_GLOBAL CONSTANT
    SS_INITIALIZE: SINT := 0;
    SS_STEP: SINT := 1;
END_VAR
