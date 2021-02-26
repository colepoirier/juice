(function() {var implementors = {};
implementors["coaster"] = [{"text":"impl&lt;F&gt; RefUnwindSafe for Backend&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as IFramework&gt;::D: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, F&gt; RefUnwindSafe for BackendConfig&lt;'a, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as IFramework&gt;::H: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HardwareType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Native","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Cpu","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FlatBox","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Hardware","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Function","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Binary","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for API","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Cuda","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Device","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DeviceInfo","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Context","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Function","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Memory","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Module","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !RefUnwindSafe for SharedTensor&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]}];
implementors["coaster_blas"] = [{"text":"impl RefUnwindSafe for Transpose","synthetic":true,"types":[]}];
implementors["coaster_nn"] = [{"text":"impl RefUnwindSafe for ConvForwardAlgo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConvBackwardFilterAlgo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConvBackwardDataAlgo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RnnNetworkMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RnnInputMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DirectionMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RnnAlgorithm","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RnnPaddingMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MathType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NormalizationConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PoolingConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DropoutConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConvolutionConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RnnConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RnnSequenceDescriptors","synthetic":true,"types":[]}];
implementors["example_mnist_classification"] = [{"text":"impl RefUnwindSafe for Args","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MnistType","synthetic":true,"types":[]}];
implementors["example_rnn_regression"] = [{"text":"impl RefUnwindSafe for Args","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DataMode","synthetic":true,"types":[]}];
implementors["greenglas"] = [{"text":"impl RefUnwindSafe for TransformerError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Image","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Resize","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Crop","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Grayscale","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Word","synthetic":true,"types":[]}];
implementors["juice"] = [{"text":"impl&lt;B&gt; !RefUnwindSafe for Layer&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LayerConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LayerType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReLU","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sigmoid","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TanH","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !RefUnwindSafe for Convolution&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConvolutionConfig","synthetic":true,"types":[]},{"text":"impl&lt;T, B&gt; !RefUnwindSafe for Dropout&lt;T, B&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DropoutConfig","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Linear","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LinearConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LogSoftmax","synthetic":true,"types":[]},{"text":"impl&lt;T, B&gt; !RefUnwindSafe for Pooling&lt;T, B&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PoolingConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PoolingMode","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !RefUnwindSafe for Rnn&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RnnConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Softmax","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !RefUnwindSafe for Sequential&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SequentialConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MeanSquaredError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NegativeLogLikelihood","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NegativeLogLikelihoodConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Flatten","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Reshape","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReshapeConfig","synthetic":true,"types":[]},{"text":"impl&lt;SolverB, B&gt; !RefUnwindSafe for Solver&lt;SolverB, B&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SolverConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SolverKind","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SGDKind","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LRPolicy","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RegularizationMethod","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConfusionMatrix","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sample","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Accuracy","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RegressionEvaluator","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sample","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MeanSquaredErrorAccuracy","synthetic":true,"types":[]},{"text":"impl&lt;SolverB&gt; !RefUnwindSafe for Momentum&lt;SolverB&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WeightConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DimCheckMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FillerType","synthetic":true,"types":[]}];
implementors["rcublas"] = [{"text":"impl RefUnwindSafe for Context","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for API","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Operation","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PointerMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]}];
implementors["rcublas_sys"] = [{"text":"impl RefUnwindSafe for float2","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for double2","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for dim3","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaChannelFormatDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaArray","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMipmappedArray","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaPitchedPtr","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExtent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaPos","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemcpy3DParms","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemcpy3DPeerParms","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemsetParams","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaHostNodeParams","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaGraphicsResource","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_4","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceViewDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaPointerAttributes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaFuncAttributes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUuuid_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaDeviceProp","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaIpcEventHandle_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaIpcMemHandle_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalMemoryHandleDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalMemoryHandleDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalMemoryBufferDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalMemoryMipmappedArrayDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreHandleDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreHandleDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreSignalParams","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreWaitParams","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUstream_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUevent_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUexternalMemory_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUexternalSemaphore_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUgraph_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUgraphNode_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaLaunchParams","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaKernelNodeParams","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUgraphExec_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cublasContext","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalMemoryHandleDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreHandleDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaChannelFormatKind","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemoryType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemcpyKind","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaStreamCaptureStatus","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaStreamCaptureMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaGraphicsRegisterFlags","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaGraphicsMapFlags","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaGraphicsCubeFace","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceViewFormat","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaFuncAttribute","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaFuncCache","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaSharedMemConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaSharedCarveout","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaComputeMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaLimit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemoryAdvise","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemRangeAttribute","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaOutputMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaDeviceAttr","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaDeviceP2PAttr","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalMemoryHandleType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreHandleType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaCGScope","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaGraphNodeType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaGraphExecUpdateResult","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaDataType_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cublasStatus_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cublasFillMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cublasDiagType_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cublasSideMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cublasOperation_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cublasPointerMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cublasAtomicsMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cublasGemmAlgo_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cublasMath_t","synthetic":true,"types":[]}];
implementors["rcudnn"] = [{"text":"impl RefUnwindSafe for ActivationDescriptor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConvolutionDescriptor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Cudnn","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DropoutDescriptor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FilterDescriptor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NormalizationDescriptor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PoolingDescriptor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TensorDescriptor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RnnDescriptor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for API","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CudaDeviceMemory","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConvolutionConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NormalizationConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PoolingConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActivationConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DropoutConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RnnConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for ScalParams&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DataType","synthetic":true,"types":[]}];
implementors["rcudnn_sys"] = [{"text":"impl RefUnwindSafe for dim3","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaChannelFormatDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaArray","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMipmappedArray","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaPitchedPtr","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExtent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaPos","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemcpy3DParms","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemcpy3DPeerParms","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemsetParams","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaHostNodeParams","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaGraphicsResource","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_4","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceViewDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaPointerAttributes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaFuncAttributes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUuuid_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaDeviceProp","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaIpcEventHandle_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaIpcMemHandle_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalMemoryHandleDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalMemoryHandleDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalMemoryBufferDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalMemoryMipmappedArrayDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreHandleDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreHandleDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreSignalParams","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreWaitParams","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUstream_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUevent_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUexternalMemory_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUexternalSemaphore_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUgraph_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUgraphNode_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaLaunchParams","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaKernelNodeParams","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CUgraphExec_st","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for surfaceReference","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for textureReference","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaTextureDesc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnContext","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnRuntimeTag_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnTensorStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnConvolutionStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnPoolingStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnFilterStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnLRNStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnActivationStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnSpatialTransformerStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnOpTensorStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnReduceTensorStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnCTCLossStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnTensorTransformStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnConvolutionFwdAlgoPerf_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnConvolutionBwdFilterAlgoPerf_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnConvolutionBwdDataAlgoPerf_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnDropoutStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnRNNStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnPersistentRNNPlan","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnRNNDataStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnAlgorithmStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnAlgorithmPerformanceStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnSeqDataStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnAttnStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnAlgorithm_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnDebug_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnFusedOpsConstParamStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnFusedOpsVariantParamStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnFusedOpsPlanStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalMemoryHandleDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreHandleDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnAlgorithm_t_Algorithm","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaChannelFormatKind","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemoryType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemcpyKind","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaStreamCaptureStatus","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaStreamCaptureMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaGraphicsRegisterFlags","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaGraphicsMapFlags","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaGraphicsCubeFace","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaResourceViewFormat","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaFuncAttribute","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaFuncCache","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaSharedMemConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaSharedCarveout","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaComputeMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaLimit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemoryAdvise","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaMemRangeAttribute","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaOutputMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaDeviceAttr","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaDeviceP2PAttr","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalMemoryHandleType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaExternalSemaphoreHandleType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaCGScope","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaGraphNodeType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaGraphExecUpdateResult","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaRoundMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaSurfaceBoundaryMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaSurfaceFormatMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaTextureAddressMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaTextureFilterMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaTextureReadMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudaDataType_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnStatus_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnErrQueryMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnDataType_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnMathType_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnNanPropagation_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnDeterminism_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnReorderType_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnTensorFormat_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnFoldingDirection_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnOpTensorOp_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnReduceTensorOp_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnReduceTensorIndices_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnIndicesType_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnConvolutionMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnConvolutionFwdPreference_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnConvolutionFwdAlgo_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnConvolutionBwdFilterPreference_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnConvolutionBwdFilterAlgo_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnConvolutionBwdDataPreference_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnConvolutionBwdDataAlgo_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnSoftmaxAlgorithm_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnSoftmaxMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnPoolingMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnActivationMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnLRNMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnDivNormMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnBatchNormMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnBatchNormOps_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnSamplerType_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnRNNAlgo_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnRNNMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnRNNBiasMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnDirectionMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnRNNInputMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnRNNClipMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnRNNDataLayout_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnRNNPaddingMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnSeqDataAxis_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnMultiHeadAttnWeightKind_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnWgradMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnCTCLossAlgo_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnLossNormalizationMode_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnSeverity_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnFusedOps_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnFusedOpsConstParamLabel_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnFusedOpsPointerPlaceHolder_t","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for cudnnFusedOpsVariantParamLabel_t","synthetic":true,"types":[]}];
implementors["rust_blas"] = [{"text":"impl RefUnwindSafe for Order","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Transpose","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Symmetry","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Diagonal","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Side","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; RefUnwindSafe for Trans&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Marker","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Mat&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for BandMat&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()