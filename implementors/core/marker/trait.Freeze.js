(function() {var implementors = {};
implementors["coaster"] = [{"text":"impl&lt;F&gt; Freeze for Backend&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as IFramework&gt;::D: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, F&gt; Freeze for BackendConfig&lt;'a, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for HardwareType","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for Native","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for Cpu","synthetic":true,"types":[]},{"text":"impl Freeze for FlatBox","synthetic":true,"types":[]},{"text":"impl Freeze for Hardware","synthetic":true,"types":[]},{"text":"impl Freeze for Function","synthetic":true,"types":[]},{"text":"impl Freeze for Binary","synthetic":true,"types":[]},{"text":"impl Freeze for API","synthetic":true,"types":[]},{"text":"impl Freeze for Cuda","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for Device","synthetic":true,"types":[]},{"text":"impl Freeze for DeviceInfo","synthetic":true,"types":[]},{"text":"impl Freeze for Context","synthetic":true,"types":[]},{"text":"impl Freeze for Function","synthetic":true,"types":[]},{"text":"impl Freeze for Memory","synthetic":true,"types":[]},{"text":"impl Freeze for Module","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Freeze for SharedTensor&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
implementors["coaster_blas"] = [{"text":"impl Freeze for Transpose","synthetic":true,"types":[]}];
implementors["coaster_nn"] = [{"text":"impl Freeze for ConvForwardAlgo","synthetic":true,"types":[]},{"text":"impl Freeze for ConvBackwardFilterAlgo","synthetic":true,"types":[]},{"text":"impl Freeze for ConvBackwardDataAlgo","synthetic":true,"types":[]},{"text":"impl Freeze for RnnNetworkMode","synthetic":true,"types":[]},{"text":"impl Freeze for RnnInputMode","synthetic":true,"types":[]},{"text":"impl Freeze for DirectionMode","synthetic":true,"types":[]},{"text":"impl Freeze for RnnAlgorithm","synthetic":true,"types":[]},{"text":"impl Freeze for RnnPaddingMode","synthetic":true,"types":[]},{"text":"impl Freeze for MathType","synthetic":true,"types":[]},{"text":"impl Freeze for NormalizationConfig","synthetic":true,"types":[]},{"text":"impl Freeze for PoolingConfig","synthetic":true,"types":[]},{"text":"impl Freeze for DropoutConfig","synthetic":true,"types":[]},{"text":"impl Freeze for ConvolutionConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RnnConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RnnSequenceDescriptors","synthetic":true,"types":[]}];
implementors["example_mnist_classification"] = [{"text":"impl Freeze for Args","synthetic":true,"types":[]},{"text":"impl Freeze for MnistType","synthetic":true,"types":[]}];
implementors["example_rnn_regression"] = [{"text":"impl Freeze for Args","synthetic":true,"types":[]},{"text":"impl Freeze for DataMode","synthetic":true,"types":[]}];
implementors["greenglas"] = [{"text":"impl Freeze for TransformerError","synthetic":true,"types":[]},{"text":"impl Freeze for Image","synthetic":true,"types":[]},{"text":"impl Freeze for Resize","synthetic":true,"types":[]},{"text":"impl Freeze for Crop","synthetic":true,"types":[]},{"text":"impl Freeze for Grayscale","synthetic":true,"types":[]},{"text":"impl Freeze for Word","synthetic":true,"types":[]}];
implementors["juice"] = [{"text":"impl&lt;B&gt; Freeze for Layer&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for LayerConfig","synthetic":true,"types":[]},{"text":"impl Freeze for LayerType","synthetic":true,"types":[]},{"text":"impl Freeze for ReLU","synthetic":true,"types":[]},{"text":"impl Freeze for Sigmoid","synthetic":true,"types":[]},{"text":"impl Freeze for TanH","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Freeze for Convolution&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ConvolutionConfig","synthetic":true,"types":[]},{"text":"impl&lt;T, B&gt; Freeze for Dropout&lt;T, B&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for DropoutConfig","synthetic":true,"types":[]},{"text":"impl !Freeze for Linear","synthetic":true,"types":[]},{"text":"impl Freeze for LinearConfig","synthetic":true,"types":[]},{"text":"impl Freeze for LogSoftmax","synthetic":true,"types":[]},{"text":"impl&lt;T, B&gt; Freeze for Pooling&lt;T, B&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for PoolingConfig","synthetic":true,"types":[]},{"text":"impl Freeze for PoolingMode","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Freeze for Rnn&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for RnnConfig","synthetic":true,"types":[]},{"text":"impl Freeze for Softmax","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Freeze for Sequential&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SequentialConfig","synthetic":true,"types":[]},{"text":"impl Freeze for MeanSquaredError","synthetic":true,"types":[]},{"text":"impl Freeze for NegativeLogLikelihood","synthetic":true,"types":[]},{"text":"impl Freeze for NegativeLogLikelihoodConfig","synthetic":true,"types":[]},{"text":"impl Freeze for Flatten","synthetic":true,"types":[]},{"text":"impl Freeze for Reshape","synthetic":true,"types":[]},{"text":"impl Freeze for ReshapeConfig","synthetic":true,"types":[]},{"text":"impl&lt;SolverB, B&gt; Freeze for Solver&lt;SolverB, B&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SolverConfig","synthetic":true,"types":[]},{"text":"impl Freeze for SolverKind","synthetic":true,"types":[]},{"text":"impl Freeze for SGDKind","synthetic":true,"types":[]},{"text":"impl Freeze for LRPolicy","synthetic":true,"types":[]},{"text":"impl Freeze for RegularizationMethod","synthetic":true,"types":[]},{"text":"impl Freeze for ConfusionMatrix","synthetic":true,"types":[]},{"text":"impl Freeze for Sample","synthetic":true,"types":[]},{"text":"impl Freeze for Accuracy","synthetic":true,"types":[]},{"text":"impl Freeze for RegressionEvaluator","synthetic":true,"types":[]},{"text":"impl Freeze for Sample","synthetic":true,"types":[]},{"text":"impl Freeze for MeanSquaredErrorAccuracy","synthetic":true,"types":[]},{"text":"impl&lt;SolverB&gt; !Freeze for Momentum&lt;SolverB&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for WeightConfig","synthetic":true,"types":[]},{"text":"impl Freeze for DimCheckMode","synthetic":true,"types":[]},{"text":"impl Freeze for FillerType","synthetic":true,"types":[]}];
implementors["rcublas"] = [{"text":"impl Freeze for Context","synthetic":true,"types":[]},{"text":"impl Freeze for API","synthetic":true,"types":[]},{"text":"impl Freeze for Operation","synthetic":true,"types":[]},{"text":"impl Freeze for PointerMode","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
implementors["rcublas_sys"] = [{"text":"impl Freeze for float2","synthetic":true,"types":[]},{"text":"impl Freeze for double2","synthetic":true,"types":[]},{"text":"impl Freeze for dim3","synthetic":true,"types":[]},{"text":"impl Freeze for cudaChannelFormatDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaArray","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMipmappedArray","synthetic":true,"types":[]},{"text":"impl Freeze for cudaPitchedPtr","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExtent","synthetic":true,"types":[]},{"text":"impl Freeze for cudaPos","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemcpy3DParms","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemcpy3DPeerParms","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemsetParams","synthetic":true,"types":[]},{"text":"impl Freeze for cudaHostNodeParams","synthetic":true,"types":[]},{"text":"impl Freeze for cudaGraphicsResource","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceDesc__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceDesc__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceDesc__bindgen_ty_1__bindgen_ty_4","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceViewDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaPointerAttributes","synthetic":true,"types":[]},{"text":"impl Freeze for cudaFuncAttributes","synthetic":true,"types":[]},{"text":"impl Freeze for CUuuid_st","synthetic":true,"types":[]},{"text":"impl Freeze for cudaDeviceProp","synthetic":true,"types":[]},{"text":"impl Freeze for cudaIpcEventHandle_st","synthetic":true,"types":[]},{"text":"impl Freeze for cudaIpcMemHandle_st","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalMemoryHandleDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalMemoryHandleDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalMemoryBufferDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalMemoryMipmappedArrayDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreHandleDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreHandleDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreSignalParams","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreSignalParams__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreWaitParams","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreWaitParams__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl Freeze for CUstream_st","synthetic":true,"types":[]},{"text":"impl Freeze for CUevent_st","synthetic":true,"types":[]},{"text":"impl Freeze for CUexternalMemory_st","synthetic":true,"types":[]},{"text":"impl Freeze for CUexternalSemaphore_st","synthetic":true,"types":[]},{"text":"impl Freeze for CUgraph_st","synthetic":true,"types":[]},{"text":"impl Freeze for CUgraphNode_st","synthetic":true,"types":[]},{"text":"impl Freeze for cudaLaunchParams","synthetic":true,"types":[]},{"text":"impl Freeze for cudaKernelNodeParams","synthetic":true,"types":[]},{"text":"impl Freeze for CUgraphExec_st","synthetic":true,"types":[]},{"text":"impl Freeze for cublasContext","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalMemoryHandleDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreHandleDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl Freeze for cudaError","synthetic":true,"types":[]},{"text":"impl Freeze for cudaChannelFormatKind","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemoryType","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemcpyKind","synthetic":true,"types":[]},{"text":"impl Freeze for cudaStreamCaptureStatus","synthetic":true,"types":[]},{"text":"impl Freeze for cudaStreamCaptureMode","synthetic":true,"types":[]},{"text":"impl Freeze for cudaGraphicsRegisterFlags","synthetic":true,"types":[]},{"text":"impl Freeze for cudaGraphicsMapFlags","synthetic":true,"types":[]},{"text":"impl Freeze for cudaGraphicsCubeFace","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceType","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceViewFormat","synthetic":true,"types":[]},{"text":"impl Freeze for cudaFuncAttribute","synthetic":true,"types":[]},{"text":"impl Freeze for cudaFuncCache","synthetic":true,"types":[]},{"text":"impl Freeze for cudaSharedMemConfig","synthetic":true,"types":[]},{"text":"impl Freeze for cudaSharedCarveout","synthetic":true,"types":[]},{"text":"impl Freeze for cudaComputeMode","synthetic":true,"types":[]},{"text":"impl Freeze for cudaLimit","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemoryAdvise","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemRangeAttribute","synthetic":true,"types":[]},{"text":"impl Freeze for cudaOutputMode","synthetic":true,"types":[]},{"text":"impl Freeze for cudaDeviceAttr","synthetic":true,"types":[]},{"text":"impl Freeze for cudaDeviceP2PAttr","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalMemoryHandleType","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreHandleType","synthetic":true,"types":[]},{"text":"impl Freeze for cudaCGScope","synthetic":true,"types":[]},{"text":"impl Freeze for cudaGraphNodeType","synthetic":true,"types":[]},{"text":"impl Freeze for cudaGraphExecUpdateResult","synthetic":true,"types":[]},{"text":"impl Freeze for cudaDataType_t","synthetic":true,"types":[]},{"text":"impl Freeze for cublasStatus_t","synthetic":true,"types":[]},{"text":"impl Freeze for cublasFillMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cublasDiagType_t","synthetic":true,"types":[]},{"text":"impl Freeze for cublasSideMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cublasOperation_t","synthetic":true,"types":[]},{"text":"impl Freeze for cublasPointerMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cublasAtomicsMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cublasGemmAlgo_t","synthetic":true,"types":[]},{"text":"impl Freeze for cublasMath_t","synthetic":true,"types":[]}];
implementors["rcudnn"] = [{"text":"impl Freeze for ActivationDescriptor","synthetic":true,"types":[]},{"text":"impl Freeze for ConvolutionDescriptor","synthetic":true,"types":[]},{"text":"impl Freeze for Cudnn","synthetic":true,"types":[]},{"text":"impl Freeze for DropoutDescriptor","synthetic":true,"types":[]},{"text":"impl Freeze for FilterDescriptor","synthetic":true,"types":[]},{"text":"impl Freeze for NormalizationDescriptor","synthetic":true,"types":[]},{"text":"impl Freeze for PoolingDescriptor","synthetic":true,"types":[]},{"text":"impl Freeze for TensorDescriptor","synthetic":true,"types":[]},{"text":"impl Freeze for RnnDescriptor","synthetic":true,"types":[]},{"text":"impl Freeze for API","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for CudaDeviceMemory","synthetic":true,"types":[]},{"text":"impl Freeze for ConvolutionConfig","synthetic":true,"types":[]},{"text":"impl Freeze for NormalizationConfig","synthetic":true,"types":[]},{"text":"impl Freeze for PoolingConfig","synthetic":true,"types":[]},{"text":"impl Freeze for ActivationConfig","synthetic":true,"types":[]},{"text":"impl Freeze for DropoutConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RnnConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ScalParams&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for DataType","synthetic":true,"types":[]}];
implementors["rcudnn_sys"] = [{"text":"impl Freeze for dim3","synthetic":true,"types":[]},{"text":"impl Freeze for cudaChannelFormatDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaArray","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMipmappedArray","synthetic":true,"types":[]},{"text":"impl Freeze for cudaPitchedPtr","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExtent","synthetic":true,"types":[]},{"text":"impl Freeze for cudaPos","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemcpy3DParms","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemcpy3DPeerParms","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemsetParams","synthetic":true,"types":[]},{"text":"impl Freeze for cudaHostNodeParams","synthetic":true,"types":[]},{"text":"impl Freeze for cudaGraphicsResource","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceDesc__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceDesc__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceDesc__bindgen_ty_1__bindgen_ty_4","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceViewDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaPointerAttributes","synthetic":true,"types":[]},{"text":"impl Freeze for cudaFuncAttributes","synthetic":true,"types":[]},{"text":"impl Freeze for CUuuid_st","synthetic":true,"types":[]},{"text":"impl Freeze for cudaDeviceProp","synthetic":true,"types":[]},{"text":"impl Freeze for cudaIpcEventHandle_st","synthetic":true,"types":[]},{"text":"impl Freeze for cudaIpcMemHandle_st","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalMemoryHandleDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalMemoryHandleDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalMemoryBufferDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalMemoryMipmappedArrayDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreHandleDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreHandleDesc__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreSignalParams","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreSignalParams__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreWaitParams","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreWaitParams__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_3","synthetic":true,"types":[]},{"text":"impl Freeze for CUstream_st","synthetic":true,"types":[]},{"text":"impl Freeze for CUevent_st","synthetic":true,"types":[]},{"text":"impl Freeze for CUexternalMemory_st","synthetic":true,"types":[]},{"text":"impl Freeze for CUexternalSemaphore_st","synthetic":true,"types":[]},{"text":"impl Freeze for CUgraph_st","synthetic":true,"types":[]},{"text":"impl Freeze for CUgraphNode_st","synthetic":true,"types":[]},{"text":"impl Freeze for cudaLaunchParams","synthetic":true,"types":[]},{"text":"impl Freeze for cudaKernelNodeParams","synthetic":true,"types":[]},{"text":"impl Freeze for CUgraphExec_st","synthetic":true,"types":[]},{"text":"impl Freeze for surfaceReference","synthetic":true,"types":[]},{"text":"impl Freeze for textureReference","synthetic":true,"types":[]},{"text":"impl Freeze for cudaTextureDesc","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnContext","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnRuntimeTag_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnTensorStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnConvolutionStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnPoolingStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnFilterStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnLRNStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnActivationStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnSpatialTransformerStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnOpTensorStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnReduceTensorStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnCTCLossStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnTensorTransformStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnConvolutionFwdAlgoPerf_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnConvolutionBwdFilterAlgoPerf_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnConvolutionBwdDataAlgoPerf_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnDropoutStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnRNNStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnPersistentRNNPlan","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnRNNDataStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnAlgorithmStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnAlgorithmPerformanceStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnSeqDataStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnAttnStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnAlgorithm_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnDebug_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnFusedOpsConstParamStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnFusedOpsVariantParamStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnFusedOpsPlanStruct","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalMemoryHandleDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreHandleDesc__bindgen_ty_1","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreSignalParams__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreWaitParams__bindgen_ty_1__bindgen_ty_2","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnAlgorithm_t_Algorithm","synthetic":true,"types":[]},{"text":"impl Freeze for cudaError","synthetic":true,"types":[]},{"text":"impl Freeze for cudaChannelFormatKind","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemoryType","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemcpyKind","synthetic":true,"types":[]},{"text":"impl Freeze for cudaStreamCaptureStatus","synthetic":true,"types":[]},{"text":"impl Freeze for cudaStreamCaptureMode","synthetic":true,"types":[]},{"text":"impl Freeze for cudaGraphicsRegisterFlags","synthetic":true,"types":[]},{"text":"impl Freeze for cudaGraphicsMapFlags","synthetic":true,"types":[]},{"text":"impl Freeze for cudaGraphicsCubeFace","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceType","synthetic":true,"types":[]},{"text":"impl Freeze for cudaResourceViewFormat","synthetic":true,"types":[]},{"text":"impl Freeze for cudaFuncAttribute","synthetic":true,"types":[]},{"text":"impl Freeze for cudaFuncCache","synthetic":true,"types":[]},{"text":"impl Freeze for cudaSharedMemConfig","synthetic":true,"types":[]},{"text":"impl Freeze for cudaSharedCarveout","synthetic":true,"types":[]},{"text":"impl Freeze for cudaComputeMode","synthetic":true,"types":[]},{"text":"impl Freeze for cudaLimit","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemoryAdvise","synthetic":true,"types":[]},{"text":"impl Freeze for cudaMemRangeAttribute","synthetic":true,"types":[]},{"text":"impl Freeze for cudaOutputMode","synthetic":true,"types":[]},{"text":"impl Freeze for cudaDeviceAttr","synthetic":true,"types":[]},{"text":"impl Freeze for cudaDeviceP2PAttr","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalMemoryHandleType","synthetic":true,"types":[]},{"text":"impl Freeze for cudaExternalSemaphoreHandleType","synthetic":true,"types":[]},{"text":"impl Freeze for cudaCGScope","synthetic":true,"types":[]},{"text":"impl Freeze for cudaGraphNodeType","synthetic":true,"types":[]},{"text":"impl Freeze for cudaGraphExecUpdateResult","synthetic":true,"types":[]},{"text":"impl Freeze for cudaRoundMode","synthetic":true,"types":[]},{"text":"impl Freeze for cudaSurfaceBoundaryMode","synthetic":true,"types":[]},{"text":"impl Freeze for cudaSurfaceFormatMode","synthetic":true,"types":[]},{"text":"impl Freeze for cudaTextureAddressMode","synthetic":true,"types":[]},{"text":"impl Freeze for cudaTextureFilterMode","synthetic":true,"types":[]},{"text":"impl Freeze for cudaTextureReadMode","synthetic":true,"types":[]},{"text":"impl Freeze for cudaDataType_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnStatus_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnErrQueryMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnDataType_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnMathType_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnNanPropagation_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnDeterminism_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnReorderType_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnTensorFormat_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnFoldingDirection_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnOpTensorOp_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnReduceTensorOp_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnReduceTensorIndices_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnIndicesType_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnConvolutionMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnConvolutionFwdPreference_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnConvolutionFwdAlgo_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnConvolutionBwdFilterPreference_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnConvolutionBwdFilterAlgo_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnConvolutionBwdDataPreference_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnConvolutionBwdDataAlgo_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnSoftmaxAlgorithm_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnSoftmaxMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnPoolingMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnActivationMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnLRNMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnDivNormMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnBatchNormMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnBatchNormOps_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnSamplerType_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnRNNAlgo_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnRNNMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnRNNBiasMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnDirectionMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnRNNInputMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnRNNClipMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnRNNDataLayout_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnRNNPaddingMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnSeqDataAxis_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnMultiHeadAttnWeightKind_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnWgradMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnCTCLossAlgo_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnLossNormalizationMode_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnSeverity_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnFusedOps_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnFusedOpsConstParamLabel_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnFusedOpsPointerPlaceHolder_t","synthetic":true,"types":[]},{"text":"impl Freeze for cudnnFusedOpsVariantParamLabel_t","synthetic":true,"types":[]}];
implementors["rust_blas"] = [{"text":"impl Freeze for Order","synthetic":true,"types":[]},{"text":"impl Freeze for Transpose","synthetic":true,"types":[]},{"text":"impl Freeze for Symmetry","synthetic":true,"types":[]},{"text":"impl Freeze for Diagonal","synthetic":true,"types":[]},{"text":"impl Freeze for Side","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for Trans&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Marker","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Mat&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for BandMat&lt;T&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()