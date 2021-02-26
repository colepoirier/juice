(function() {var implementors = {};
implementors["coaster"] = [{"text":"impl&lt;F&gt; UnwindSafe for Backend&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as IFramework&gt;::D: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, F&gt; UnwindSafe for BackendConfig&lt;'a, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as IFramework&gt;::H: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HardwareType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Native","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Cpu","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FlatBox","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Hardware","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Function","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Binary","synthetic":true,"types":[]},{"text":"impl UnwindSafe for API","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Cuda","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Device","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DeviceInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Context","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Function","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Memory","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Module","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !UnwindSafe for SharedTensor&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["coaster_blas"] = [{"text":"impl UnwindSafe for Transpose","synthetic":true,"types":[]}];
implementors["coaster_nn"] = [{"text":"impl UnwindSafe for ConvForwardAlgo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConvBackwardFilterAlgo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConvBackwardDataAlgo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RnnNetworkMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RnnInputMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DirectionMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RnnAlgorithm","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RnnPaddingMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MathType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NormalizationConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PoolingConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DropoutConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConvolutionConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RnnConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RnnSequenceDescriptors","synthetic":true,"types":[]}];
implementors["example_mnist_classification"] = [{"text":"impl UnwindSafe for Args","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MnistType","synthetic":true,"types":[]}];
implementors["example_rnn_regression"] = [{"text":"impl UnwindSafe for Args","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataMode","synthetic":true,"types":[]}];
implementors["greenglas"] = [{"text":"impl UnwindSafe for TransformerError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Image","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Resize","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Crop","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Grayscale","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Word","synthetic":true,"types":[]}];
implementors["juice"] = [{"text":"impl&lt;B&gt; !UnwindSafe for Layer&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LayerConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LayerType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReLU","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sigmoid","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TanH","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; UnwindSafe for Convolution&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as NN&lt;f32&gt;&gt;::CC: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConvolutionConfig","synthetic":true,"types":[]},{"text":"impl&lt;T, B&gt; UnwindSafe for Dropout&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as NN&lt;T&gt;&gt;::CDROP: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DropoutConfig","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Linear","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LinearConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LogSoftmax","synthetic":true,"types":[]},{"text":"impl&lt;T, B&gt; UnwindSafe for Pooling&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as NN&lt;T&gt;&gt;::CPOOL: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PoolingConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PoolingMode","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; UnwindSafe for Rnn&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as NN&lt;f32&gt;&gt;::CRNN: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RnnConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Softmax","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !UnwindSafe for Sequential&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SequentialConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MeanSquaredError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NegativeLogLikelihood","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NegativeLogLikelihoodConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Flatten","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Reshape","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReshapeConfig","synthetic":true,"types":[]},{"text":"impl&lt;SolverB, B&gt; !UnwindSafe for Solver&lt;SolverB, B&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SolverConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SolverKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SGDKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LRPolicy","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RegularizationMethod","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConfusionMatrix","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sample","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Accuracy","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RegressionEvaluator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sample","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MeanSquaredErrorAccuracy","synthetic":true,"types":[]},{"text":"impl&lt;SolverB&gt; !UnwindSafe for Momentum&lt;SolverB&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WeightConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DimCheckMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FillerType","synthetic":true,"types":[]}];
implementors["rcublas"] = [{"text":"impl UnwindSafe for Context","synthetic":true,"types":[]},{"text":"impl UnwindSafe for API","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Operation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PointerMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["rcublas_sys"] = [{"text":"impl UnwindSafe for float2","synthetic":true,"types":[]},{"text":"impl UnwindSafe for double2","synthetic":true,"types":[]},{"text":"impl UnwindSafe for dim3","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaChannelFormatDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaArray","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMipmappedArray","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaPitchedPtr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExtent","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaPos","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemcpy3DParms","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemcpy3DPeerParms","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemsetParams","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaHostNodeParams","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaGraphicsResource","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_4","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceViewDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaPointerAttributes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaFuncAttributes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUuuid_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaDeviceProp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaIpcEventHandle_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaIpcMemHandle_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalMemoryHandleDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalMemoryHandleDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalMemoryBufferDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalMemoryMipmappedArrayDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreHandleDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreHandleDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreSignalParams","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreWaitParams","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUstream_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUevent_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUexternalMemory_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUexternalSemaphore_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUgraph_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUgraphNode_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaLaunchParams","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaKernelNodeParams","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUgraphExec_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cublasContext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalMemoryHandleDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreHandleDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaChannelFormatKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemoryType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemcpyKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaStreamCaptureStatus","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaStreamCaptureMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaGraphicsRegisterFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaGraphicsMapFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaGraphicsCubeFace","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceViewFormat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaFuncAttribute","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaFuncCache","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaSharedMemConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaSharedCarveout","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaComputeMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaLimit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemoryAdvise","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemRangeAttribute","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaOutputMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaDeviceAttr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaDeviceP2PAttr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalMemoryHandleType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreHandleType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaCGScope","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaGraphNodeType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaGraphExecUpdateResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaDataType_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cublasStatus_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cublasFillMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cublasDiagType_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cublasSideMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cublasOperation_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cublasPointerMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cublasAtomicsMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cublasGemmAlgo_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cublasMath_t","synthetic":true,"types":[]}];
implementors["rcudnn"] = [{"text":"impl UnwindSafe for ActivationDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConvolutionDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Cudnn","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DropoutDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FilterDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NormalizationDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PoolingDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TensorDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RnnDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for API","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CudaDeviceMemory","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConvolutionConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NormalizationConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PoolingConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ActivationConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DropoutConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RnnConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for ScalParams&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataType","synthetic":true,"types":[]}];
implementors["rcudnn_sys"] = [{"text":"impl UnwindSafe for dim3","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaChannelFormatDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaArray","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMipmappedArray","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaPitchedPtr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExtent","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaPos","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemcpy3DParms","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemcpy3DPeerParms","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemsetParams","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaHostNodeParams","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaGraphicsResource","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceDesc__bindgen_ty_1__bindgen_ty_4","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceViewDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaPointerAttributes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaFuncAttributes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUuuid_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaDeviceProp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaIpcEventHandle_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaIpcMemHandle_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalMemoryHandleDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalMemoryHandleDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalMemoryBufferDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalMemoryMipmappedArrayDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreHandleDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreHandleDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreSignalParams","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreWaitParams","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUstream_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUevent_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUexternalMemory_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUexternalSemaphore_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUgraph_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUgraphNode_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaLaunchParams","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaKernelNodeParams","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CUgraphExec_st","synthetic":true,"types":[]},{"text":"impl UnwindSafe for surfaceReference","synthetic":true,"types":[]},{"text":"impl UnwindSafe for textureReference","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaTextureDesc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnContext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnRuntimeTag_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnTensorStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnConvolutionStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnPoolingStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnFilterStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnLRNStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnActivationStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnSpatialTransformerStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnOpTensorStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnReduceTensorStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnCTCLossStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnTensorTransformStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnConvolutionFwdAlgoPerf_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnConvolutionBwdFilterAlgoPerf_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnConvolutionBwdDataAlgoPerf_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnDropoutStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnRNNStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnPersistentRNNPlan","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnRNNDataStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnAlgorithmStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnAlgorithmPerformanceStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnSeqDataStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnAttnStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnAlgorithm_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnDebug_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnFusedOpsConstParamStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnFusedOpsVariantParamStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnFusedOpsPlanStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalMemoryHandleDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreHandleDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnAlgorithm_t_Algorithm","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaChannelFormatKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemoryType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemcpyKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaStreamCaptureStatus","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaStreamCaptureMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaGraphicsRegisterFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaGraphicsMapFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaGraphicsCubeFace","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaResourceViewFormat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaFuncAttribute","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaFuncCache","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaSharedMemConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaSharedCarveout","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaComputeMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaLimit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemoryAdvise","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaMemRangeAttribute","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaOutputMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaDeviceAttr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaDeviceP2PAttr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalMemoryHandleType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaExternalSemaphoreHandleType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaCGScope","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaGraphNodeType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaGraphExecUpdateResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaRoundMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaSurfaceBoundaryMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaSurfaceFormatMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaTextureAddressMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaTextureFilterMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaTextureReadMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudaDataType_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnStatus_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnErrQueryMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnDataType_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnMathType_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnNanPropagation_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnDeterminism_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnReorderType_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnTensorFormat_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnFoldingDirection_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnOpTensorOp_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnReduceTensorOp_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnReduceTensorIndices_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnIndicesType_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnConvolutionMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnConvolutionFwdPreference_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnConvolutionFwdAlgo_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnConvolutionBwdFilterPreference_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnConvolutionBwdFilterAlgo_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnConvolutionBwdDataPreference_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnConvolutionBwdDataAlgo_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnSoftmaxAlgorithm_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnSoftmaxMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnPoolingMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnActivationMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnLRNMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnDivNormMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnBatchNormMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnBatchNormOps_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnSamplerType_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnRNNAlgo_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnRNNMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnRNNBiasMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnDirectionMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnRNNInputMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnRNNClipMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnRNNDataLayout_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnRNNPaddingMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnSeqDataAxis_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnMultiHeadAttnWeightKind_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnWgradMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnCTCLossAlgo_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnLossNormalizationMode_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnSeverity_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnFusedOps_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnFusedOpsConstParamLabel_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnFusedOpsPointerPlaceHolder_t","synthetic":true,"types":[]},{"text":"impl UnwindSafe for cudnnFusedOpsVariantParamLabel_t","synthetic":true,"types":[]}];
implementors["rust_blas"] = [{"text":"impl UnwindSafe for Order","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Transpose","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Symmetry","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Diagonal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Side","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; UnwindSafe for Trans&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Marker","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Mat&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for BandMat&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()