# World Model Papers

Daily updates of world model related arXiv papers.

## Papers Index

<!-- PAPERS_INDEX_START -->
- [2026-04-30](papers/2026-04-30.md) - 7 papers
- [2026-04-29](papers/2026-04-29.md) - 4 papers
- [2026-04-28](papers/2026-04-28.md) - 3 papers
- [2026-04-27](papers/2026-04-27.md) - 3 papers
- [2026-04-24](papers/2026-04-24.md) - 3 papers
- [2026-04-23](papers/2026-04-23.md) - 7 papers
- [2026-04-22](papers/2026-04-22.md) - 10 papers
- [2026-04-21](papers/2026-04-21.md) - 1 papers
- [2026-04-17](papers/2026-04-17.md) - 4 papers
- [2026-04-16](papers/2026-04-16.md) - 3 papers
- [2026-04-15](papers/2026-04-15.md) - 2 papers
- [2026-04-14](papers/2026-04-14.md) - 6 papers
- [2026-04-13](papers/2026-04-13.md) - 2 papers
- [2026-04-10](papers/2026-04-10.md) - 7 papers
- [2026-04-09](papers/2026-04-09.md) - 4 papers
- [2026-04-08](papers/2026-04-08.md) - 7 papers
- [2026-04-07](papers/2026-04-07.md) - 1 papers
- [2026-04-06](papers/2026-04-06.md) - 2 papers
- [2026-04-03](papers/2026-04-03.md) - 8 papers
- [2026-04-02](papers/2026-04-02.md) - 4 papers
- [2026-04-01](papers/2026-04-01.md) - 8 papers
- [2026-03-31](papers/2026-03-31.md) - 5 papers
- [2026-03-27](papers/2026-03-27.md) - 6 papers
- [2026-03-26](papers/2026-03-26.md) - 5 papers
- [2026-03-25](papers/2026-03-25.md) - 6 papers
- [2026-03-24](papers/2026-03-24.md) - 9 papers
- [2026-03-23](papers/2026-03-23.md) - 2 papers
- [2026-03-20](papers/2026-03-20.md) - 7 papers
- [2026-03-19](papers/2026-03-19.md) - 5 papers
- [2026-03-18](papers/2026-03-18.md) - 13 papers
- [2026-03-17](papers/2026-03-17.md) - 6 papers
- [2026-03-16](papers/2026-03-16.md) - 1 papers
- [2026-03-13](papers/2026-03-13.md) - 3 papers
- [2026-03-12](papers/2026-03-12.md) - 3 papers
- [2026-03-11](papers/2026-03-11.md) - 10 papers
- [2026-03-10](papers/2026-03-10.md) - 8 papers
- [2026-03-09](papers/2026-03-09.md) - 1 papers
- [2026-03-07](papers/2026-03-07.md) - 8 papers
- [2026-03-05](papers/2026-03-05.md) - 5 papers
- [2026-03-04](papers/2026-03-04.md) - 5 papers
- [2026-03-03](papers/2026-03-03.md) - 1 papers
- [2026-03-02](papers/2026-03-02.md) - 2 papers
- [2026-02-27](papers/2026-02-27.md) - 7 papers
- [2026-02-26](papers/2026-02-26.md) - 3 papers
- [2026-02-25](papers/2026-02-25.md) - 19 papers
- [2026-02-24](papers/2026-02-24.md) - 1 papers
- [2026-02-20](papers/2026-02-20.md) - 2 papers
- [2026-02-19](papers/2026-02-19.md) - 4 papers
- [2026-02-18](papers/2026-02-18.md) - 6 papers
- [2026-02-17](papers/2026-02-17.md) - 1 papers
- [2026-02-16](papers/2026-02-16.md) - 1 papers
- [2026-02-14](papers/2026-02-14.md) - 12 papers
<!-- PAPERS_INDEX_END -->

## Daily Papers

<!-- PAPERS_CONTENT_START -->
<details><summary><b>2026-04-30 (7 papers)</b></summary>

# arXiv World Model Papers - 2026-04-30

**Paper Count**: 7

---

## 1. STARRY: Spatial-Temporal Action-Centric World Modeling for Robotic Manipulation / STARRY：以时空动作为中心的机器人操作世界建模

**Date**: 2026-04-29 | **arXiv**: [2604.26848v1](http://arxiv.org/abs/2604.26848v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.26848v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Robotic manipulation critically requires reasoning about future spatial-temporal interactions, yet existing VLA policies and world-model-enhanced policies do not fully model action-relevant spatial-temporal interaction structure. We propose STARRY, a world-model-enhanced action-generation policy that aligns spatial-temporal prediction with action generation. STARRY jointly denoises future spatial-temporal latents and action sequences, and introduces Geometry-Aware Selective Attention Modulation to convert predicted depth and end-effector geometry into token-aligned weights for selective action-attention modulation. On RoboTwin 2.0, STARRY achieves 93.82% / 93.30% average success under Clean and Randomized settings. Real-world experiments further improve average success from 42.5% to 70.8% over $π_{0.5}$, demonstrating the effectiveness of action-centric spatial-temporal world modeling for spatial-temporally demanding robotic action generation.

机器人操纵关键需要对未来时空交互进行推理，但现有的 VLA 策略和世界模型增强策略并不能完全模拟与动作相关的时空交互结构。我们提出了 STARRY，一种世界模型增强的行动生成策略，它将时空预测与行动生成结合起来。 STARRY 联合对未来时空潜伏和动作序列进行去噪，并引入几何感知选择性注意调制，将预测深度和末端执行器几何形状转换为标记对齐的权重，以进行选择性动作注意调制。在 RoboTwin 2.0 上，STARRY 在 Clean 和 Randomized 设置下实现了 93.82% / 93.30% 的平均成功率。现实世界的实验进一步将平均成功率从 $π_{0.5}$ 的 42.5% 提高到 70.8%，证明了以动作为中心的时空世界建模对于时空要求较高的机器人动作生成的有效性。

</details>

---

## 2. Uncertainty-Aware Predictive Safety Filters for Probabilistic Neural Network Dynamics / 用于概率神经网络动力学的不确定性预测安全滤波器

**Date**: 2026-04-29 | **arXiv**: [2604.26836v1](http://arxiv.org/abs/2604.26836v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.26836v1)

**Categories**: cs.LG, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

Predictive safety filters (PSFs) leverage model predictive control to enforce constraint satisfaction during deep reinforcement learning (RL) exploration, yet their reliance on first-principles models or Gaussian processes limits scalability and broader applicability. Meanwhile, model-based RL (MBRL) methods routinely employ probabilistic ensemble (PE) neural networks to capture complex, high-dimensional dynamics from data with minimal prior knowledge. However, existing attempts to integrate PEs into PSFs lack rigorous uncertainty quantification. We introduce the Uncertainty-Aware Predictive Safety Filter (UPSi), a PSF that provides rigorous safety predictions using PE dynamics models by formulating future outcomes as reachable sets. UPSi introduces an explicit certainty constraint that prevents model exploitation and integrates seamlessly into common MBRL frameworks. We evaluate UPSi within Dyna-style MBRL on standard safe RL benchmarks and report substantial improvements in exploration safety over prior neural network PSFs while maintaining performance on par with standard MBRL. UPSi bridges the gap between the scalability and generality of modern MBRL and the safety guarantees of predictive safety filters.

预测安全过滤器 (PSF) 利用模型预测控制来在深度强化学习 (RL) 探索过程中强制满足约束条件，但它们对第一原理模型或高斯过程的依赖限制了可扩展性和更广泛的适用性。与此同时，基于模型的强化学习 (MBRL) 方法通常采用概率集成 (PE) 神经网络，以最少的先验知识从数据中捕获复杂的高维动态。然而，现有将 PE 整合到 PSF 的尝试缺乏严格的不确定性量化。我们引入了不确定性感知预测安全过滤器 (UPSi)，这是一种 PSF，它通过将未来结果表述为可达集，使用 PE 动态模型提供严格的安全预测。 UPSi 引入了明确的确定性约束，可防止模型被利用并无缝集成到常见的 MBRL 框架中。我们根据标准安全 RL 基准评估 Dyna 式 MBRL 中的 UPSi，并报告在探索安全性方面比之前的神经网络 PSF 有了显着改进，同时保持与标准 MBRL 相同的性能。 UPSi 弥补了现代 MBRL 的可扩展性和通用性与预测安全过滤器的安全保证之间的差距。

</details>

---

## 3. Unified 4D World Action Modeling from Video Priors with Asynchronous Denoising / 具有异步去噪功能的视频先验统一 4D 世界动作建模

**Date**: 2026-04-29 | **arXiv**: [2604.26694v1](http://arxiv.org/abs/2604.26694v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.26694v1)

**Categories**: cs.RO, cs.AI, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We propose X-WAM, a Unified 4D World Model that unifies real-time robotic action execution and high-fidelity 4D world synthesis (video + 3D reconstruction) in a single framework, addressing the critical limitations of prior unified world models (e.g., UWM) that only model 2D pixel-space and fail to balance action efficiency and world modeling quality. To leverage the strong visual priors of pretrained video diffusion models, X-WAM imagines the future world by predicting multi-view RGB-D videos, and obtains spatial information efficiently through a lightweight structural adaptation: replicating the final few blocks of the pretrained Diffusion Transformer into a dedicated depth prediction branch for the reconstruction of future spatial information. Moreover, we propose Asynchronous Noise Sampling (ANS) to jointly optimize generation quality and action decoding efficiency. ANS applies a specialized asynchronous denoising schedule during inference, which rapidly decodes actions with fewer steps to enable efficient real-time execution, while dedicating the full sequence of steps to generate high-fidelity video. Rather than entirely decoupling the timesteps during training, ANS samples from their joint distribution to align with the inference distribution. Pretrained on over 5,800 hours of robotic data, X-WAM achieves 79.2% and 90.7% average success rate on RoboCasa and RoboTwin 2.0 benchmarks, while producing high-fidelity 4D reconstruction and generation surpassing existing methods in both visual and geometric metrics.

我们提出了 X-WAM，一种统一的 4D 世界模型，它将实时机器人动作执行和高保真 4D 世界合成（视频 + 3D 重建）统一在一个框架中，解决了先前统一世界模型（例如 UWM）的关键局限性，该模型仅对 2D 像素空间进行建模，无法平衡动作效率和世界建模质量。为了利用预训练视频扩散模型的强大视觉先验，X-WAM 通过预测多视图 RGB-D 视频来想象未来世界，并通过轻量级结构适应有效地获取空间信息：将预训练扩散变换器的最后几个块复制到专用深度预测分支中，以重建未来空间信息。此外，我们提出异步噪声采样（ANS）来联合优化生成质量和动作解码效率。 ANS 在推理过程中应用专门的异步降噪计划，以更少的步骤快速解码动作，以实现高效的实时执行，同时专用于生成高保真视频的完整步骤序列。 ANS 不是在训练期间完全解耦时间步，而是从联合分布中采样以与推理分布保持一致。 X-WAM 经过超过 5,800 小时的机器人数据预训练，在 RoboCasa 和 RoboTwin 2.0 基准上实现了 79.2% 和 90.7% 的平均成功率，同时产生了在视觉和几何指标方面超越现有方法的高保真 4D 重建和生成。

</details>

---

## 4. AGEL-Comp: A Neuro-Symbolic Framework for Compositional Generalization in Interactive Agents / AGEL-Comp：交互式代理中组合泛化的神经符号框架

**Date**: 2026-04-29 | **arXiv**: [2604.26522v1](http://arxiv.org/abs/2604.26522v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.26522v1)

**Categories**: cs.AI, cs.LG, cs.LO, cs.MA, cs.SC

<details><summary><b>Abstract / 摘要</b></summary>

Large Language Model (LLM)-based agents exhibit systemic failures in compositional generalization, limiting their robustness in interactive environments. This work introduces AGEL-Comp, a neuro-symbolic AI agent architecture designed to address this challenge by grounding actions of the agent. AGEL-Comp integrates three core innovations: (1) a dynamic Causal Program Graph (CPG) as a world model, representing procedural and causal knowledge as a directed hypergraph; (2) an Inductive Logic Programming (ILP) engine that synthesizes new Horn clauses from experiential feedback, grounding symbolic knowledge through interaction; and (3) a hybrid reasoning core where an LLM proposes a set of candidate sub-goals that are verified for logical consistency by a Neural Theorem Prover (NTP). Together, these components operationalize a deduction--abduction learning cycle: enabling the agent to deduce plans and abductively expand its symbolic world model, while a neural adaptation phase keeps its reasoning engine aligned with new knowledge. We propose an evaluation protocol within the \texttt{Retro Quest} simulation environment to probe for compositional generalization scenarios to evaluate our AGEL agent. Our findings clearly indicate the better performance of our AGEL model over pure LLM-based models. Our framework presents a principled path toward agents that build an explicit, interpretable, and compositionally structured understanding of their world.

基于大语言模型（LLM）的代理在组合泛化方面表现出系统性失败，限制了它们在交互环境中的鲁棒性。这项工作引入了 AGEL-Comp，这是一种神经符号 AI 代理架构，旨在通过代理的基础操作来应对这一挑战。 AGEL-Comp 集成了三个核心创新：（1）动态因果程序图（CPG）作为世界模型，将程序和因果知识表示为有向超图； (2) 归纳逻辑编程 (ILP) 引擎，可根据经验反馈合成新的 Horn 子句，通过交互奠定符号知识的基础； (3) 混合推理核心，其中法学硕士提出一组候选子目标，并由神经定理证明器 (NTP) 验证这些子目标的逻辑一致性。这些组件共同实现了演绎-溯因学习循环：使智能体能够推断出计划并以溯因方式扩展其符号世界模型，同时神经适应阶段使其推理引擎与新知识保持一致。我们在\texttt{Retro Quest}模拟环境中提出了一个评估协议，以探索组合泛化场景来评估我们的 AGEL 代理。我们的研究结果清楚地表明，我们的 AGEL 模型比纯粹基于 LLM 的模型具有更好的性能。我们的框架为智能体提供了一条原则性的路径，可以对其世界建立明确的、可解释的、组合结构的理解。

</details>

---

## 5. Lyapunov-Guided Self-Alignment: Test-Time Adaptation for Offline Safe Reinforcement Learning / 李亚普诺夫引导的自对准：离线安全强化学习的测试时间适应

**Date**: 2026-04-29 | **arXiv**: [2604.26516v1](http://arxiv.org/abs/2604.26516v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.26516v1)

**Categories**: cs.LG, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Offline reinforcement learning (RL) agents often fail when deployed, as the gap between training datasets and real environments leads to unsafe behavior. To address this, we present SAS (Self-Alignment for Safety), a transformer-based framework that enables test-time adaptation in offline safe RL without retraining. In SAS, the main mechanism is self-alignment: at test time, the pretrained agent generates several imagined trajectories and selects those satisfying the Lyapunov condition. These feasible segments are then recycled as in-context prompts, allowing the agent to realign its behavior toward safety while avoiding parameter updates. In effect, SAS turns Lyapunov-guided imagination into control-invariant prompts, and its transformer architecture admits a hierarchical RL interpretation where prompting functions as Bayesian inference over latent skills. Across Safety Gymnasium and MuJoCo benchmarks, SAS consistently reduces cost and failure while maintaining or improving return.

离线强化学习（RL）代理在部署时经常会失败，因为训练数据集和真实环境之间的差距会导致不安全的行为。为了解决这个问题，我们提出了 SAS（安全自对准），这是一种基于变压器的框架，可以在离线安全 RL 中进行测试时间调整，而无需重新训练。在 SAS 中，主要机制是自对准：在测试时，预训练的智能体生成多个想象的轨迹，并选择满足 Lyapunov 条件的轨迹。然后，这些可行的片段将作为上下文提示进行回收，从而允许代理重新调整其行为以确保安全，同时避免参数更新。实际上，SAS 将李亚普诺夫引导的想象力转变为控制不变的提示，并且其变压器架构允许分层 RL 解释，其中提示的功能相当于对潜在技能的贝叶斯推理。在 Safety Gymnasium 和 MuJoCo 基准中，SAS 始终如一地降低成本和故障，同时保持或提高回报。

</details>

---

## 6. DepthPilot: From Controllability to Interpretability in Colonoscopy Video Generation / DepthPilot：结肠镜检查视频生成从可控性到可解释性

**Date**: 2026-04-29 | **arXiv**: [2604.26232v1](http://arxiv.org/abs/2604.26232v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.26232v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Controllable medical video generation has achieved remarkable progress, but it still lacks interpretability, which requires the alignment of generated contents with physical priors and faithful clinical manifestations. To push the boundaries from mere controllability to interpretability, we propose DepthPilot, the first interpretable framework for colonoscopy video generation. This work takes a step toward trustworthy generation through two synergistic paradigms. To achieve explicit geometric grounding, DepthPilot devises a prior distribution alignment strategy, injecting depth constraints into the diffusion backbone via parameter-efficient fine-tuning to ensure anatomical fidelity. To enhance intrinsic nonlinear modeling under these geometric constraints, DepthPilot employs an adaptive spline denoising module, replacing fixed linear weights with learnable spline functions to capture complex spatio-temporal dynamics. Extensive evaluations across three public datasets and in-house clinical data confirm DepthPilot's robust ability to produce physically consistent videos. It achieves FID scores below 15 across all benchmarks and ranks first in clinician assessments, bridging the gap between "visually realistic" and "clinically interpretable". Moreover, DepthPilot-generated videos are expected to enable reliable 3D reconstruction, facilitating surgical navigation and blind region identification, and serve as a foundation toward the colorectal world model.

可控医疗视频生成已经取得了显着的进步，但仍然缺乏可解释性，这需要生成的内容与物理先验和忠实的临床表现保持一致。为了将界限从单纯的可控性扩展到可解释性，我们提出了 DepthPilot，这是第一个用于结肠镜检查视频生成的可解释框架。这项工作通过两种协同范式向值得信赖的一代迈出了一步。为了实现明确的几何基础，DepthPilot 设计了先验分布对齐策略，通过参数高效的微调将深度约​​束注入扩散主干，以确保解剖保真度。为了增强这些几何约束下的内在非线性建模，DepthPilot 采用自适应样条去噪模块，用可学习样条函数代替固定线性权重，以捕获复杂的时空动态。对三个公共数据集和内部临床数据的广泛评估证实了 DepthPilot 具有生成物理一致视频的强大能力。它在所有基准测试中的 FID 分数均低于 15，并在临床医生评估中排名第一，缩小了“视觉逼真”和“临床可解释”之间的差距。此外，DepthPilot 生成的视频有望实现可靠的 3D 重建，促进手术导航和盲区识别，并作为结直肠世界模型的基础。

</details>

---

## 7. Lifting Embodied World Models for Planning and Control / 提升规划和控制的具体世界模型

**Date**: 2026-04-28 | **arXiv**: [2604.26182v1](http://arxiv.org/abs/2604.26182v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.26182v1)

**Categories**: cs.CV, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

World models of embodied agents predict future observations conditioned on an action taken by the agent. For complex embodiments, action spaces are high-dimensional and difficult to specify: for example, precisely controlling a human agent requires specifying the motion of each joint. This makes the world model hard to control and expensive to plan with as search-based methods like CEM scale poorly with action dimensionality. To address this issue, we train a lightweight policy that maps high-level actions to sequences of low-level joint actions. Composing this policy with the frozen world model produces a lifted world model that predicts a sequence of future observations from a single high-level action. We instantiate this framework for a human-like embodiment, defining the high-level action space as a small set of 2D waypoints annotated on the current observation frame, each specifying a near-term goal position for a leaf joint (pelvis, head, hands). Waypoints are low-dimensional, visually interpretable, and easy to specify manually or to search over. We show that the lifted world model substantially outperforms searching directly in low-level joint space ($3.8\times$ lower mean joint error to the goal pose), while remaining more compute-efficient and generalizing to environments unseen by the policy.

具身主体的世界模型根据主体所采取的行动来预测未来的观察结果。对于复杂的实施例，动作空间是高维的并且难以指定：例如，精确控制人类代理需要指定每个关节的运动。这使得世界模型难以控制，而且规划成本高昂，因为 CEM 等基于搜索的方法在动作维度上的扩展性很差。为了解决这个问题，我们训练了一种轻量级策略，将高级操作映射到低级联合操作序列。将此策略与冻结的世界模型结合起来会产生一个提升的世界模型，该模型可以通过单个高级操作来预测未来的一系列观察结果。我们将这个框架实例化为类人实施例，将高级动作空间定义为当前观察帧上注释的一小组 2D 路径点，每个路径点指定叶关节（骨盆、头部、手）的近期目标位置。航路点是低维的、视觉上可解释的，并且易于手动指定或搜索。我们表明，提升的世界模型大大优于直接在低级关节空间中进行搜索（目标姿态的平均关节误差降低了 3.8 倍），同时保持更高的计算效率并泛化到策略未见的环境。

</details>

---



</details>

<details><summary><b>2026-04-29 (4 papers)</b></summary>

# arXiv World Model Papers - 2026-04-29

**Paper Count**: 4

---

## 1. Learning-Based Dynamics Modeling and Robust Control for Tendon-Driven Continuum Robots / 肌腱驱动连续体机器人基于学习的动力学建模和鲁棒控制

**Date**: 2026-04-28 | **arXiv**: [2604.25691v1](http://arxiv.org/abs/2604.25691v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.25691v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Tendon-Driven Continuum Robots (TDCRs) pose significant modeling and control challenges due to complex nonlinearities, such as frictional hysteresis and transmission compliance. This paper proposes a differentiable learning framework that integrates high-fidelity dynamics modeling with robust neural control. We develop a GRU-based dynamics model featuring bidirectional multi-channel connectivity and residual prediction to effectively suppress compounding errors during long-horizon auto-regressive prediction. By treating this model as a gradient bridge, an end-to-end neural control policy is optimized through backpropagation, allowing it to implicitly internalize compensation for intricate nonlinearities. Experimental validation on a physical three-section TDCR demonstrates that our framework achieves accurate tracking and superior robustness against unseen payloads, outperforming Jacobian-based methods by eliminating self-excited oscillations.

由于摩擦滞后和传动顺应性等复杂的非线性因素，腱驱动连续体机器人 (TDCR) 带来了重大的建模和控制挑战。本文提出了一种可微分学习框架，它将高保真动力学建模与鲁棒神经控制相结合。我们开发了一种基于 GRU 的动力学模型，具有双向多通道连接和残差预测，可有效抑制长范围自回归预测期间的复合误差。通过将该模型视为梯度桥，通过反向传播优化端到端神经控制策略，使其能够隐式内部化复杂非线性的补偿。对物理三部分 TDCR 的实验验证表明，我们的框架实现了精确跟踪和针对看不见的有效负载的卓越鲁棒性，通过消除自激振荡优于基于雅可比的方法。

</details>

---

## 2. Dyna-Style Safety Augmented Reinforcement Learning: Staying Safe in the Face of Uncertainty / Dyna 式安全增强强化学习：面对不确定性保持安全

**Date**: 2026-04-28 | **arXiv**: [2604.25508v1](http://arxiv.org/abs/2604.25508v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.25508v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Safety remains an open problem in reinforcement learning (RL), especially during training. While safety filters are promising to address safe exploration, they are generally poorly suited for high-dimensional systems with unknown dynamics. We propose Dyna-style Safety Augmented Reinforcement Learning (Dyna-SAuR), a novel algorithm that learns both a scalable safety filter and a control policy using a learned uncertainty-aware dynamics model, while requiring minimal domain knowledge. The filter avoids failures and high uncertainty regions. Thus, better models expand the set of safe and certain states, reducing filter conservatism. We present the effectiveness of Dyna-SAuR on goal-reaching CartPole as well as MuJoCo Walker, reducing failures compared to state-of-the-art methods by 2 orders of magnitude.

安全性仍然是强化学习（RL）中的一个悬而未决的问题，尤其是在训练期间。虽然安全滤波器有望解决安全探索问题，但它们通常不太适合动态未知的高维系统。我们提出了 Dyna 式安全增强强化学习（Dyna-SAuR），这是一种新颖的算法，它使用学习的不确定性感知动态模型来学习可扩展的安全过滤器和控制策略，同时需要最少的领域知识。该滤波器可避免故障和高不确定性区域。因此，更好的模型扩展了安全和某些状态的集合，减少了过滤保守性。我们展示了 Dyna-SAuR 在达到目标的 CartPole 和 MuJoCo Walker 上的有效性，与最先进的方法相比，将失败率减少了 2 个数量级。

</details>

---

## 3. Biased Dreams: Limitations to Epistemic Uncertainty Quantification in Latent Space Models / 有偏见的梦想：潜在空间模型中认知不确定性量化的局限性

**Date**: 2026-04-28 | **arXiv**: [2604.25416v1](http://arxiv.org/abs/2604.25416v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.25416v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Model-Based Reinforcement Learning distinguishes between physical dynamics models operating on proprioceptive inputs and latent dynamics models operating on high-dimensional image observations. A prominent latent approach is the Recurrent State Space Model used in the Dreamer family. While epistemic uncertainty quantification to inform exploration and mitigate model exploitation is well established for physical dynamics models, its transfer to latent dynamics models has received limited scrutiny. We empirically demonstrate that latent transitions are biased toward well-represented regions of latent space, exhibiting an attractor behavior that can deviate from true environment dynamics. As a result, discrepancies in environment dynamics may not manifest in latent space, undermining the reliability of epistemic uncertainty estimates. Because these attractors often lie in high-reward regions, latent rollouts systematically overestimate predicted rewards. Our findings highlight key limitations of epistemic uncertainty estimation in latent dynamics models and motivate more critical evaluation of this method.

基于模型的强化学习区分了基于本体感受输入的物理动力学模型和基于高维图像观察的潜在动力学模型。一个突出的潜在方法是 Dreamer 系列中使用的循环状态空间模型。虽然为探索和减轻模型开发提供信息的认知不确定性量化在物理动力学模型中已经很成熟，但其向潜在动力学模型的转移受到了有限的审查。我们凭经验证明，潜在转变偏向于潜在空间中具有良好代表性的区域，表现出可能偏离真实环境动态的吸引子行为。因此，环境动态的差异可能不会在潜在空间中显现出来，从而破坏了认知不确定性估计的可靠性。由于这些吸引子通常位于高回报区域，潜在的推出系统性地高估了预测的回报。我们的研究结果强调了潜在动力学模型中认知不确定性估计的主要局限性，并激发了对该方法进行更严格的评估。

</details>

---

## 4. ProDrive: Proactive Planning for Autonomous Driving via Ego-Environment Co-Evolution / ProDrive：通过自我-环境协同进化主动规划自动驾驶

**Date**: 2026-04-28 | **arXiv**: [2604.25329v1](http://arxiv.org/abs/2604.25329v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.25329v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

End-to-end autonomous driving planners typically generate trajectories from current observations alone. However, real-world driving is highly dynamic, and such reactive planning cannot anticipate future scene evolution, often leading to myopic decisions and safety-critical failures. We propose ProDrive, a world-model-based proactive planning framework that enables ego-environment co-evolution for autonomous driving. ProDrive jointly trains a query-centric trajectory planner and a bird's-eye-view (BEV) world model end-to-end: the planner generates diverse candidate trajectories and planning-aware ego tokens, while the world model predicts future scene evolution conditioned on them. By injecting planner features into the world model and evaluating all candidates in parallel, ProDrive preserves end-to-end gradient flow and allows future outcome assessment to directly shape planning. This bidirectional coupling enables proactive planning beyond current-observation-driven decision-making. Experiments on NAVSIM v1 show that ProDrive outperforms strong baselines in both safety and planning efficiency, while ablations validate the effectiveness of the proposed ego-environment coupling design.

端到端自动驾驶规划者通常仅根据当前观察生成轨迹。然而，现实世界的驾驶是高度动态的，这种反应性规划无法预测未来场景的演变，通常会导致短视决策和安全关键型故障。我们提出了 ProDrive，这是一个基于世界模型的主动规划框架，可以实现自动驾驶的自我与环境共同进化。 ProDrive 端到端地联合训练以查询为中心的轨迹规划器和鸟瞰 (BEV) 世界模型：规划器生成不同的候选轨迹和规划感知自我标记，而世界模型则预测以它们为条件的未来场景演化。通过将规划器特征注入世界模型并并行评估所有候选者，ProDrive 保留了端到端梯度流，并允许未来的结果评估直接塑造规划。这种双向耦合可以实现超越当前观察驱动决策的主动规划。 NAVSIM v1 上的实验表明，ProDrive 在安全性和规划效率方面都优于强大的基线，而消融则验证了所提出的自我-环境耦合设计的有效性。

</details>

---



</details>

<details><summary><b>2026-04-28 (3 papers)</b></summary>

# arXiv World Model Papers - 2026-04-28

**Paper Count**: 3

---

## 1. CAPSULE: Control-Theoretic Action Perturbations for Safe Uncertainty-Aware Reinforcement Learning / 胶囊：用于安全不确定性感知强化学习的控制理论行为扰动

**Date**: 2026-04-26 | **arXiv**: [2604.23576v1](http://arxiv.org/abs/2604.23576v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.23576v1)

**Categories**: cs.LG, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Ensuring safe exploration in high-dimensional systems with unknown dynamics remains a significant challenge. Existing safe reinforcement learning methods often provide safety guarantees only in expectation, which can still lead to safety violations. Control-theoretic approaches, in contrast, offer hard constraint-based safety guarantees but typically assume access to known system dynamics or require accurate estimation of control-affine models. In this paper, we propose a safe reinforcement learning framework that learns a probabilistic control-affine dynamics model in an offline setting. The learned model is leveraged to explicitly construct control barrier functions (CBFs) that incorporate model uncertainty to provide conservative safety constraints. These CBF constraints are enforced through an online constraint-based action correction mechanism, enabling safe exploration without overly restricting task performance. Empirical evaluations on nonlinear, complex continuous-control benchmarks demonstrate that our approach achieves returns comparable to those of existing baselines while significantly reducing safety violations.

确保在具有未知动力学的高维系统中进行安全探索仍然是一项重大挑战。现有的安全强化学习方法往往仅在预期中提供安全保证，这仍然可能导致安全违规。相比之下，控制理论方法提供基于硬约束的安全保证，但通常假设可以访问已知的系统动力学或需要精确估计控制仿射模型。在本文中，我们提出了一种安全的强化学习框架，该框架可以在离线环境中学习概率控制仿射动力学模型。利用学习到的模型来显式构建控制屏障函数 (CBF)，其中包含模型不确定性以提供保守的安全约束。这些 CBF 约束是通过基于在线约束的动作校正机制强制执行的，从而可以在不过度限制任务性能的情况下实现安全探索。对非线性、复杂连续控制基准的实证评估表明，我们的方法实现了与现有基准相当的回报，同时显着减少了安全违规。

</details>

---

## 2. Emotion-Conditioned Short-Horizon Human Pose Forecasting with a Lightweight Predictive World Model / 使用轻量级预测世界模型进行情感条件短视人体姿势预测

**Date**: 2026-04-26 | **arXiv**: [2604.23532v1](http://arxiv.org/abs/2604.23532v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.23532v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Short-term human pose prediction plays a crucial role in interactive systems, assistive robots, and emotion-aware human-computer interaction[1-3]. While current trajectory prediction models primarily rely on geometric motion cues, they often overlook the underlying emotional signals influencing human motion dynamics[4-5]. This paper investigates whether facial expression-derived emotion embeddings can provide auxiliary conditional signals for short-term pose prediction. To further evaluate multimodal conditionation in a recursive prediction setting, we propose a lightweight autoregressive predictive world model that performs 15-step rolling pose prediction. This framework combines pose keypoints with emotion embeddings through a learnable gating mechanism and performs autoregressive unfolding prediction using a recurrent sequence model based on a two-layer LSTM architecture. Experiments were conducted on two small-scale pose-emotion video datasets: controlled motion sequences with minimal facial expression changes and, natural emotion-driven motion sequences with considerable facial expression changes. The results show that simple multimodal fusion does not consistently improve prediction accuracy, while normalized gating fusion significantly enhances the performance of emotion-driven motion sequences. Furthermore, counterfactual perturbation experiments demonstrate that the predicted trajectory exhibits measurable sensitivity to changes in multimodal input, suggesting that facial expression embeddings act as auxiliary conditional signals rather than redundant features. In summary, these results indicate that incorporating facial expression-derived emotion embeddings into emotion-conditional short-term pose prediction based on a lightweight predictive world model architecture is a feasible approach.

短期人体姿势预测在交互系统、辅助机器人和情感感知人机交互中发挥着至关重要的作用[1-3]。虽然当前的轨迹预测模型主要依赖于几何运动线索，但它们经常忽略影响人体运动动力学的潜在情感信号[4-5]。本文研究了面部表情衍生的情感嵌入是否可以为短期姿势预测提供辅助条件信号。为了进一步评估递归预测设置中的多模态条件，我们提出了一种轻量级自回归预测世界模型，该模型执行 15 步滚动姿势预测。该框架通过可学习的门控机制将姿势关键点与情感嵌入相结合，并使用基于两层 LSTM 架构的循环序列模型执行自回归展开预测。在两个小规模姿势情感视频数据集上进行了实验：具有最小面部表情变化的受控运动序列和具有相当大面部表情变化的自然情绪驱动的运动序列。结果表明，简单的多模态融合并不能始终如一地提高预测精度，而归一化门控融合可以显着增强情感驱动运动序列的性能。此外，反事实扰动实验表明，预测轨迹对多模态输入的变化表现出可测量的敏感性，这表明面部表情嵌入充当辅助条件信号而不是冗余特征。总之，这些结果表明，将面部表情衍生的情感嵌入结合到基于轻量级预测世界模型架构的情感条件短期姿势预测中是一种可行的方法。

</details>

---

## 3. Active Inference: A method for Phenotyping Agency in AI systems? / 主动推理：人工智能系统中表型代理的方法？

**Date**: 2026-04-25 | **arXiv**: [2604.23278v1](http://arxiv.org/abs/2604.23278v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.23278v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

The proliferation of agentic artificial intelligence has outpaced the conceptual tools needed to characterize agency in computational systems. Prevailing definitions mainly rely on autonomy and goal-directedness. Here, we argue for a minimal notion open to principled inspection given three criteria: intentionality as action grounded in beliefs and desires, rationality as normatively coherent action entailed by a world model, and explainability as action causally traceable to internal states; we subsequently instantiate these as a partially observable Markov decision process under a variational framework wherein posterior beliefs, prior preferences, and the minimization of expected free energy jointly constitute an agentic action chain. Using a canonical T-maze paradigm, we evidence how empowerment, formulated as the channel capacity between actions and anticipated observations, serves as an operational metric that distinguishes zero-, intermediate-, and high-agency phenotypes through structural manipulations of the generative model. We conclude by arguing that as agents engage in epistemic foraging to resolve ambiguity, the governance controls that remain effective must shift systematically from external constraints to the internal modulation of prior preferences, offering a principled, variational bridge from computational phenotyping to AI governance strategy

代理人工智能的扩散已经超过了描述计算系统中的代理所需的概念工具。流行的定义主要依赖于自主性和目标导向性。在这里，我们主张一个可以接受原则性检验的最小概念，给出三个标准：意向性是基于信念和欲望的行动，理性是世界模型所带来的规范连贯的行动，可解释性是因果可追溯至内部状态的行动；随后，我们将这些实例化为变分框架下的部分可观察马尔可夫决策过程，其中后验信念、先验偏好和预期自由能的最小化共同构成了一个代理行动链。使用规范的 T 迷宫范式，我们证明了授权（被表述为行动和预期观察之间的通道容量）如何作为一种操作度量，通过生成模型的结构操作来区分零、中和高代理表型。我们的结论是，当智能体通过认知搜寻来解决模糊性时，仍然有效的治理控制必须系统地从外部约束转向先验偏好的内部调节，从而提供从计算表型到人工智能治理策略的有原则的、变分的桥梁

</details>

---



</details>

<details><summary><b>2026-04-27 (3 papers)</b></summary>

# arXiv World Model Papers - 2026-04-27

**Paper Count**: 3

---

## 1. Representational Harms in LLM-Generated Narratives Against Global Majority Nationalities / 法学硕士生成的针对全球多数民族的叙述中的代表性危害

**Date**: 2026-04-24 | **arXiv**: [2604.22749v1](http://arxiv.org/abs/2604.22749v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.22749v1)

**Categories**: cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

Large language models (LLMs) are increasingly used for text generation tasks from everyday use to high-stakes enterprise and government applications, including simulated interviews with asylum seekers. While many works highlight the new potential applications of LLMs, there are risks of LLMs encoding and perpetuating harmful biases about non-dominant communities across the globe. To better evaluate and mitigate such harms, more research examining how LLMs portray diverse individuals is needed. In this work, we study how national origin identities are portrayed by widely-adopted LLMs in response to open-ended narrative generation prompts. Our findings demonstrate the presence of persistent representational harms by national origin, including harmful stereotypes, erasure, and one-dimensional portrayals of Global Majority identities. Minoritized national identities are simultaneously underrepresented in power-neutral stories and overrepresented in subordinated character portrayals, which are over fifty times more likely to appear than dominant portrayals. The degree of harm is amplified when US nationality cues (e.g., ``American'') are present in input prompts. Notably, we find that the harms we identify cannot be explained away via sycophancy, as US-centric biases persist even when replacing US nationality cues with non-US national identities in the prompts. Based on our findings, we call for further exploration of cultural harms in LLMs through methodologies that center Global Majority perspectives and challenge the uncritical adoption of US-based LLMs for the classification, surveillance, and misrepresentation of the majority of our planet.

大型语言模型 (LLM) 越来越多地用于文本生成任务，从日常使用到高风险的企业和政府应用，包括对寻求庇护者的模拟访谈。虽然许多著作强调了法学硕士的新潜在应用，但法学硕士存在编码和延续对全球非主流社区的有害偏见的风险。为了更好地评估和减轻此类危害，需要进行更多研究来检验法学硕士如何描绘不同的个人。在这项工作中，我们研究了广泛采用的法学硕士如何根据开放式叙事生成提示来描绘民族血统身份。我们的研究结果表明，民族血统持续存在代表性伤害，包括有害的刻板印象、抹杀和对全球多数身份的一维描绘。少数民族身份同时在权力中立的故事中代表性不足，而在从属角色描绘中则过多，这些角色出现的可能性是主导描绘的五十倍以上。当输入提示中出现美国国籍提示（例如“美国人”）时，伤害程度会放大。值得注意的是，我们发现我们发现的危害不能通过阿谀奉承来解释，因为即使在提示中用非美国国家身份替换美国国籍线索时，以美国为中心的偏见仍然存在。根据我们的发现，我们呼吁通过以全球多数观点为中心的方法，进一步探索法学硕士的文化危害，并挑战不加批判地采用美国法学硕士对地球大多数人进行分类、监视和歪曲的做法。

</details>

---

## 2. Agentic World Modeling: Foundations, Capabilities, Laws, and Beyond / 主体世界建模：基础、能力、法则及其他

**Date**: 2026-04-24 | **arXiv**: [2604.22748v1](http://arxiv.org/abs/2604.22748v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.22748v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

As AI systems move from generating text to accomplishing goals through sustained interaction, the ability to model environment dynamics becomes a central bottleneck. Agents that manipulate objects, navigate software, coordinate with others, or design experiments require predictive environment models, yet the term world model carries different meanings across research communities. We introduce a "levels x laws" taxonomy organized along two axes. The first defines three capability levels: L1 Predictor, which learns one-step local transition operators; L2 Simulator, which composes them into multi-step, action-conditioned rollouts that respect domain laws; and L3 Evolver, which autonomously revises its own model when predictions fail against new evidence. The second identifies four governing-law regimes: physical, digital, social, and scientific. These regimes determine what constraints a world model must satisfy and where it is most likely to fail. Using this framework, we synthesize over 400 works and summarize more than 100 representative systems spanning model-based reinforcement learning, video generation, web and GUI agents, multi-agent social simulation, and AI-driven scientific discovery. We analyze methods, failure modes, and evaluation practices across level-regime pairs, propose decision-centric evaluation principles and a minimal reproducible evaluation package, and outline architectural guidance, open problems, and governance challenges. The resulting roadmap connects previously isolated communities and charts a path from passive next-step prediction toward world models that can simulate, and ultimately reshape, the environments in which agents operate.

随着人工智能系统从生成文本转向通过持续交互实现目标，对环境动态进行建模的能力成为一个中心瓶颈。操纵物体、导航软件、与他人协调或设计实验的代理需要预测环境模型，但世界模型一词在不同的研究社区中具有不同的含义。我们引入了沿两个轴组织的“级别 x 法则”分类法。第一个定义了三个能力级别：L1 Predictor，学习单步局部转换算子； L2 Simulator，将它们组合成尊重领域法则的多步骤、以动作为条件的部署； L3 Evolver，当新证据的预测失败时，它会自动修改自己的模型。第二个确定了四种管辖法律制度：物理、数字、社会和科学。这些制度决定了世界模式必须满足哪些约束以及最有可能失败的地方。使用这个框架，我们综合了 400 多个作品，总结了 100 多个代表性系统，涵盖基于模型的强化学习、视频生成、Web 和 GUI 代理、多代理社会模拟和人工智能驱动的科学发现。我们分析跨级别-制度对的方法、故障模式和评估实践，提出以决策为中心的评估原则和最小的可重复评估包，并概述架构指南、开放问题和治理挑战。由此产生的路线图连接了以前孤立的社区，并绘制了从被动的下一步预测到可以模拟并最终重塑代理运行环境的世界模型的路径。

</details>

---

## 3. Beyond Patient Invariance: Learning Cardiac Dynamics via Action-Conditioned JEPAs / 超越患者不变性：通过动作条件 JEPA 学习心脏动力学

**Date**: 2026-04-24 | **arXiv**: [2604.22618v1](http://arxiv.org/abs/2604.22618v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.22618v1)

**Categories**: cs.LG

**Code**: https://github.com/cljosegfer/lesaude-dynamics

<details><summary><b>Abstract / 摘要</b></summary>

Self-supervised learning in healthcare has largely relied on invariance-based objectives, which maximize similarity between different views of the same patient. While effective for static anatomy, this paradigm is fundamentally misaligned with clinical diagnosis, as it mathematically compels the model to suppress the transient pathological changes it is intended to detect. We propose a shift towards Action-Conditioned World Models that learn to simulate the dynamics of disease progression, or Event-Conditioned. Adapting the LeJEPA framework to physiological time-series, we define pathology not as a static label, but as a transition vector acting on a patient's latent state. By predicting the future electrophysiological state of the heart given a disease onset, our model explicitly disentangles stable anatomical features from dynamic pathological forces. Evaluated on the MIMIC-IV-ECG dataset, our approach outperforms fully supervised baselines on the critical triage task. Crucially, we demonstrate superior sample efficiency: in low-resource regimes, our world model outperforms supervised learning by over 0.05 AUROC. These results suggest that modeling biological dynamics provides a dense supervision signal that is far more robust than static classification. Source code is available at https://github.com/cljosegfer/lesaude-dynamics

医疗保健领域的自我监督学习在很大程度上依赖于基于不变性的目标，这最大限度地提高了同一患者不同观点之间的相似性。虽然对于静态解剖学有效，但这种范式从根本上与临床诊断不一致，因为它在数学上迫使模型抑制其旨在检测的瞬时病理变化。我们建议转向行动条件世界模型，学习模拟疾病进展的动态或事件条件。将 LeJEPA 框架适应生理时间序列，我们将病理学定义为作用于患者潜伏状态的过渡向量，而不是静态标签。通过预测疾病发作时心脏未来的电生理状态，我们的模型明确地将稳定的解剖特征与动态病理力分开。在 MIMIC-IV-ECG 数据集上进行评估，我们的方法在关键分诊任务上优于完全监督的基线。至关重要的是，我们展示了卓越的样本效率：在资源匮乏的情况下，我们的世界模型比监督学习的性能高出超过 0.05 AUROC。这些结果表明，生物动力学建模提供了比静态分类更稳健的密集监督信号。源代码可在 https://github.com/cljosegfer/lesaude-dynamics 获取

</details>

---



</details>

<details><summary><b>2026-04-24 (3 papers)</b></summary>

# arXiv World Model Papers - 2026-04-24

**Paper Count**: 3

---

## 1. Hi-WM: Human-in-the-World-Model for Scalable Robot Post-Training / Hi-WM：可扩展机器人训练后的人类世界模型

**Date**: 2026-04-23 | **arXiv**: [2604.21741v1](http://arxiv.org/abs/2604.21741v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.21741v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Post-training is essential for turning pretrained generalist robot policies into reliable task-specific controllers, but existing human-in-the-loop pipelines remain tied to physical execution: each correction requires robot time, scene setup, resets, and operator supervision in the real world. Meanwhile, action-conditioned world models have been studied mainly for imagination, synthetic data generation, and policy evaluation. We propose \textbf{Human-in-the-World-Model (Hi-WM)}, a post-training framework that uses a learned world model as a reusable corrective substrate for failure-targeted policy improvement. A policy is first rolled out in closed loop inside the world model; when the rollout becomes incorrect or failure-prone, a human intervenes directly in the model to provide short corrective actions. Hi-WM caches intermediate states and supports rollback and branching, allowing a single failure state to be reused for multiple corrective continuations and yielding dense supervision around behaviors that the base policy handles poorly. The resulting corrective trajectories are then added back to the training set for post-training. We evaluate Hi-WM on three real-world manipulation tasks spanning both rigid and deformable object interaction, and on two policy backbones. Hi-WM improves real-world success by 37.9 points on average over the base policy and by 19.0 points over a world-model closed-loop baseline, while world-model evaluation correlates strongly with real-world performance (r = 0.953). These results suggest that world models can serve not only as generators or evaluators, but also as effective corrective substrates for scalable robot post-training.

后期训练对于将预训练的通用机器人策略转变为可靠的特定任务控制器至关重要，但现有的人机循环管道仍然与物理执行相关：每次校正都需要机器人时间、场景设置、重置和现实世界中的操作员监督。与此同时，以行动为条件的世界模型的研究主要用于想象、合成数据生成和政策评估。我们提出了 \textbf{Human-in-the-World-Model (Hi-WM)}，这是一种训练后框架，它使用学习的世界模型作为可重复使用的纠正基础，以实现针对失败的政策改进。政策首先在世界模型内闭环推出；当部署变得不正确或容易失败时，人类会直接干预模型以提供简短的纠正措施。 Hi-WM 缓存中间状态并支持回滚和分支，允许将单个故障状态重复用于多个纠正延续，并对基本策略处理不佳的行为进行密集监督。然后将所得的校正轨迹添加回训练集中以进行后期训练。我们在涵盖刚性和可变形对象交互的三个现实世界操纵任务以及两个策略主干上评估 Hi-WM。 Hi-WM 与基本策略相比，在现实世界中的成功率平均提高了 37.9 个点，与世界模型闭环基线相比，平均提高了 19.0 个点，而世界模型评估与现实世界的绩效密切相关 (r = 0.953)。这些结果表明，世界模型不仅可以用作生成器或评估器，还可以作为可扩展机器人后期训练的有效校正基础。

</details>

---

## 2. Open-H-Embodiment: A Large-Scale Dataset for Enabling Foundation Models in Medical Robotics / Open-H-Embodiment：用于实现医疗机器人基础模型的大规模数据集

**Date**: 2026-04-22 | **arXiv**: [2604.21017v1](http://arxiv.org/abs/2604.21017v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.21017v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Autonomous medical robots hold promise to improve patient outcomes, reduce provider workload, democratize access to care, and enable superhuman precision. However, autonomous medical robotics has been limited by a fundamental data problem: existing medical robotic datasets are small, single-embodiment, and rarely shared openly, restricting the development of foundation models that the field needs to advance. We introduce Open-H-Embodiment, the largest open dataset of medical robotic video with synchronized kinematics to date, spanning more than 49 institutions and multiple robotic platforms including the CMR Versius, Intuitive Surgical's da Vinci, da Vinci Research Kit (dVRK), Rob Surgical BiTrack, Virtual Incision's MIRA, Moon Surgical Maestro, and a variety of custom systems, spanning surgical manipulation, robotic ultrasound, and endoscopy procedures. We demonstrate the research enabled by this dataset through two foundation models. GR00T-H is the first open foundation vision-language-action model for medical robotics, which is the only evaluated model to achieve full end-to-end task completion on a structured suturing benchmark (25% of trials vs. 0% for all others) and achieves 64% average success across a 29-step ex vivo suturing sequence. We also train Cosmos-H-Surgical-Simulator, the first action-conditioned world model to enable multi-embodiment surgical simulation from a single checkpoint, spanning nine robotic platforms and supporting in silico policy evaluation and synthetic data generation for the medical domain. These results suggest that open, large-scale medical robot data collection can serve as critical infrastructure for the research community, enabling advances in robot learning, world modeling, and beyond.

自主医疗机器人有望改善患者治疗效果、减少医疗服务提供者的工作量、实现医疗服务的民主化并实现超人的精准度。然而，自主医疗机器人技术受到一个基本数据问题的限制：现有的医疗机器人数据集很小、单一实施例，并且很少公开共享，限制了该领域需要推进的基础模型的开发。我们推出 Open-H-Embodiment，这是迄今为止最大的具有同步运动学的医疗机器人视频开放数据集，涵盖超过 49 个机构和多个机器人平台，包括 CMR Versius、Intuitive Surgical 的达芬奇、达芬奇研究套件 (dVRK)、Rob Surgical BiTrack、Virtual Incision 的 MIRA、Moon Surgical Maestro 以及各种定制系统，涵盖手术操作、机器人超声和内窥镜检查程序。我们通过两个基础模型展示了该数据集支持的研究。 GR00T-H 是第一个用于医疗机器人的开放基础视觉-语言-动作模型，也是唯一一个在结构化缝合基准上实现完整端到端任务完成的评估模型（试验为 25%，其他试验为 0%），并在 29 步离体缝合序列中实现了 64% 的平均成功率。我们还训练 Cosmos-H-Surgical-Simulator，这是第一个动作条件世界模型，可以从单个检查点进行多实施例手术模拟，跨越九个机器人平台，并支持医疗领域的硅片政策评估和合成数据生成。这些结果表明，开放的大规模医疗机器人数据收集可以作为研究界的关键基础设施，促进机器人学习、世界建模等领域的进步。

</details>

---

## 3. Mask World Model: Predicting What Matters for Robust Robot Policy Learning / 面具世界模型：预测对于鲁棒机器人策略学习来说重要的事情

**Date**: 2026-04-21 | **arXiv**: [2604.19683v2](http://arxiv.org/abs/2604.19683v2) | **PDF**: [Link](http://arxiv.org/pdf/2604.19683v2)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

World models derived from large-scale video generative pre-training have emerged as a promising paradigm for generalist robot policy learning. However, standard approaches often focus on high-fidelity RGB video prediction, this can result in overfitting to irrelevant factors, such as dynamic backgrounds and illumination changes. These distractions reduce the model's ability to generalize, ultimately leading to unreliable and fragile control policies. To address this, we introduce the Mask World Model (MWM), which leverages video diffusion architectures to predict the evolution of semantic masks instead of pixels. This shift imposes a geometric information bottleneck, forcing the model to capture essential physical dynamics and contact relations while filtering out visual noise. We seamlessly integrate this mask dynamics backbone with a diffusion-based policy head to enable robust end-to-end control. Extensive evaluations demonstrate the superiority of MWM on the LIBERO and RLBench simulation benchmarks, significantly outperforming the state-of-the-art RGB-based world models. Furthermore, real-world experiments and robustness evaluation (via random token pruning) reveal that MWM exhibits superior generalization capabilities and robust resilience to texture information loss.

来自大规模视频生成预训练的世界模型已成为通用机器人策略学习的有前途的范例。然而，标准方法通常侧重于高保真 RGB 视频预测，这可能会导致对不相关因素的过度拟合，例如动态背景和照明变化。这些干扰降低了模型的泛化能力，最终导致控制政策不可靠且脆弱。为了解决这个问题，我们引入了掩模世界模型（MWM），它利用视频扩散架构来预测语义掩模而不是像素的演变。这种转变带来了几何信息瓶颈，迫使模型捕捉必要的物理动力学和接触关系，同时滤除视觉噪声。我们将这种掩模动态主干与基于扩散的策略头无缝集成，以实现强大的端到端控制。广泛的评估证明了 MWM 在 LIBERO 和 RLBench 模拟基准上的优越性，显着优于最先进的基于 RGB 的世界模型。此外，现实世界的实验和鲁棒性评估（通过随机令牌修剪）表明，MWM 表现出卓越的泛化能力和对纹理信息丢失的强大恢复能力。

</details>

---



</details>

<details><summary><b>2026-04-23 (7 papers)</b></summary>

# arXiv World Model Papers - 2026-04-23

**Paper Count**: 7

---

## 1. Occupancy Reward Shaping: Improving Credit Assignment for Offline Goal-Conditioned Reinforcement Learning / 占用奖励塑造：改善离线目标条件强化学习的信用分配

**Date**: 2026-04-22 | **arXiv**: [2604.20627v1](http://arxiv.org/abs/2604.20627v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.20627v1)

**Categories**: cs.LG, cs.RO

**Project**: https://aravindvenu7.github.io/website/ors/  **Code**: https://github.com/aravindvenu7/occupancy_reward_shaping;

<details><summary><b>Abstract / 摘要</b></summary>

The temporal lag between actions and their long-term consequences makes credit assignment a challenge when learning goal-directed behaviors from data. Generative world models capture the distribution of future states an agent may visit, indicating that they have captured temporal information. How can that temporal information be extracted to perform credit assignment? In this paper, we formalize how the temporal information stored in world models encodes the underlying geometry of the world. Leveraging optimal transport, we extract this geometry from a learned model of the occupancy measure into a reward function that captures goal-reaching information. Our resulting method, Occupancy Reward Shaping, largely mitigates the problem of credit assignment in sparse reward settings. ORS provably does not alter the optimal policy, yet empirically improves performance by 2.2x across 13 diverse long-horizon locomotion and manipulation tasks. Moreover, we demonstrate the effectiveness of ORS in the real world for controlling nuclear fusion on 3 Tokamak control tasks.   Code: https://github.com/aravindvenu7/occupancy_reward_shaping; Website: https://aravindvenu7.github.io/website/ors/

当从数据中学习目标导向的行为时，行动与其长期后果之间的时间滞后使得信用分配成为一个挑战。生成世界模型捕获代理可能访问的未来状态的分布，表明它们已经捕获了时间信息。如何提取时间信息来执行学分分配？在本文中，我们形式化了世界模型中存储的时间信息如何编码世界的底层几何形状。利用最佳传输，我们将这种几何形状从占用度量的学习模型中提取到捕获目标达成信息的奖励函数中。我们得出的方法“占用奖励塑造”在很大程度上缓解了稀疏奖励环境中的信用分配问题。事实证明，ORS 不会改变最优策略，但根据经验，在 13 种不同的长视野运动和操纵任务中，性能提高了 2.2 倍。此外，我们还证明了 ORS 在现实世界中在 3 个托卡马克控制任务中控制核聚变的有效性。   代码：https://github.com/aravindvenu7/ocupancy_reward_shaping；网站：https://aravindvenu7.github.io/website/ors/

</details>

---

## 2. Cortex 2.0: Grounding World Models in Real-World Industrial Deployment / Cortex 2.0：在现实世界的工业部署中奠定世界模型的基础

**Date**: 2026-04-22 | **arXiv**: [2604.20246v1](http://arxiv.org/abs/2604.20246v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.20246v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Industrial robotic manipulation demands reliable long-horizon execution across embodiments, tasks, and changing object distributions. While Vision-Language-Action models have demonstrated strong generalization, they remain fundamentally reactive. By optimizing the next action given the current observation without evaluating potential futures, they are brittle to the compounding failure modes of long-horizon tasks. Cortex 2.0 shifts from reactive control to plan-and-act by generating candidate future trajectories in visual latent space, scoring them for expected success and efficiency, then committing only to the highest-scoring candidate. We evaluate Cortex 2.0 on a single-arm and dual-arm manipulation platform across four tasks of increasing complexity: pick and place, item and trash sorting, screw sorting, and shoebox unpacking. Cortex 2.0 consistently outperforms state-of-the-art Vision-Language-Action baselines, achieving the best results across all tasks. The system remains reliable in unstructured environments characterized by heavy clutter, frequent occlusions, and contact-rich manipulation, where reactive policies fail. These results demonstrate that world-model-based planning can operate reliably in complex industrial environments.

工业机器人操纵需要跨实施例、任务和不断变化的对象分布的可靠的长视野执行。虽然视觉-语言-行动模型已经表现出很强的泛化性，但它们从根本上仍然是反应性的。通过根据当前观察来优化下一步行动而不评估潜在的未来，它们对于长期任务的复合失败模式来说很脆弱。 Cortex 2.0 通过在视觉潜在空间中生成候选者的未来轨迹，对它们的预期成功和效率进行评分，然后仅承诺得分最高的候选者，从被动控制转变为计划和行动。我们在单臂和双臂操作平台上评估 Cortex 2.0，涵盖四个日益复杂的任务：拾取和放置、物品和垃圾分类、螺丝分类和鞋盒拆包。 Cortex 2.0 始终优于最先进的视觉-语言-动作基线，在所有任务中取得最佳结果。该系统在以严重混乱、频繁遮挡和接触丰富的操纵为特征的非结构化环境中仍然可靠，在这些环境中，反应性策略会失败。这些结果表明，基于世界模型的规划可以在复杂的工业环境中可靠地运行。

</details>

---

## 3. Toward Safe Autonomous Robotic Endovascular Interventions using World Models / 使用世界模型实现安全的自主机器人血管内干预

**Date**: 2026-04-22 | **arXiv**: [2604.20151v1](http://arxiv.org/abs/2604.20151v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.20151v1)

**Categories**: cs.RO, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Autonomous mechanical thrombectomy (MT) presents substantial challenges due to highly variable vascular geometries and the requirements for accurate, real-time control. While reinforcement learning (RL) has emerged as a promising paradigm for the automation of endovascular navigation, existing approaches often show limited robustness when faced with diverse patient anatomies or extended navigation horizons. In this work, we investigate a world-model-based framework for autonomous endovascular navigation built on TD-MPC2, a model-based RL method that integrates planning and learned dynamics. We evaluate a TD-MPC2 agent trained on multiple navigation tasks across hold out patient-specific vasculatures and benchmark its performance against the state-of-the-art Soft Actor-Critic (SAC) algorithm agent. Both approaches are further validated in vitro using patient-specific vascular phantoms under fluoroscopic guidance. In simulation, TD-MPC2 demonstrates a significantly higher mean success rate than SAC (58% vs. 36%, p < 0.001), and mean tip contact forces of 0.15 N, well below the proposed 1.5 N vessel rupture threshold. Mean success rates for TD-MPC2 (68%) were comparable to SAC (60%) in vitro, but TD-MPC2 achieved superior path ratios (p = 0.017) at the cost of longer procedure times (p < 0.001). Together, these results provide the first demonstration of autonomous MT navigation validated across both hold out in silico data and fluoroscopy-guided in vitro experiments, highlighting the promise of world models for safe and generalizable AI-assisted endovascular interventions.

由于血管几何形状高度可变以及精确、实时控制的要求，自主机械取栓 (MT) 面临着巨大的挑战。虽然强化学习 (RL) 已成为血管内导航自动化的一个有前景的范例，但现有方法在面对不同的患者解剖结构或扩展的导航范围时往往表现出有限的鲁棒性。在这项工作中，我们研究了基于世界模型的自主血管内导航框架，该框架基于 TD-MPC2，这是一种基于模型的 RL 方法，集成了规划和学习动力学。我们评估了经过多个导航任务训练的 TD-MPC2 代理，涵盖患者特定的脉管系统，并根据最先进的 Soft Actor-Critic (SAC) 算法代理对其性能进行基准测试。 Both approaches are further validated in vitro using patient-specific vascular phantoms under fluoroscopic guidance.在模拟中，TD-MPC2 的平均成功率明显高于 SAC（58% vs. 36%，p < 0.001），平均尖端接触力为 0.15 N，远低于建议的 1.5 N 血管破裂阈值。体外 TD-MPC2 的平均成功率 (68%) 与 SAC (60%) 相当，但 TD-MPC2 以更长的手术时间为代价 (p < 0.001) 实现了更高的路径比 (p = 0.017)。总之，这些结果首次证明了自主 MT 导航在计算机数据和透视引导的体外实验中得到验证，凸显了安全和通用的人工智能辅助血管内干预的世界模型的前景。

</details>

---

## 4. Efficient Reinforcement Learning using Linear Koopman Dynamics for Nonlinear Robotic Systems / 使用线性库普曼动力学进行非线性机器人系统的高效强化学习

**Date**: 2026-04-21 | **arXiv**: [2604.19980v1](http://arxiv.org/abs/2604.19980v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.19980v1)

**Categories**: cs.RO, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

This paper presents a model-based reinforcement learning (RL) framework for optimal closed-loop control of nonlinear robotic systems. The proposed approach learns linear lifted dynamics through Koopman operator theory and integrates the resulting model into an actor-critic architecture for policy optimization, where the policy represents a parameterized closed-loop controller. To reduce computational cost and mitigate model rollout errors, policy gradients are estimated using one-step predictions of the learned dynamics rather than multi-step propagation. This leads to an online mini-batch policy gradient framework that enables policy improvement from streamed interaction data. The proposed framework is evaluated on several simulated nonlinear control benchmarks and two real-world hardware platforms, including a Kinova Gen3 robotic arm and a Unitree Go1 quadruped. Experimental results demonstrate improved sample efficiency over model-free RL baselines, superior control performance relative to model-based RL baselines, and control performance comparable to classical model-based methods that rely on exact system dynamics.

本文提出了一种基于模型的强化学习（RL）框架，用于非线性机器人系统的最佳闭环控制。所提出的方法通过库普曼算子理论学习线性提升动力学，并将所得模型集成到用于策略优化的行动者批评家架构中，其中策略代表参数化闭环控制器。为了降低计算成本并减轻模型推出错误，使用学习动态的一步预测而不是多步传播来估计策略梯度。这导致了一个在线小批量策略梯度框架，可以从流式交互数据中改进策略。所提出的框架在几个模拟非线性控制基准和两个现实世界的硬件平台上进行了评估，包括 Kinova Gen3 机械臂和 Unitree Go1 四足机器人。实验结果表明，与无模型 RL 基线相比，样本效率得到了提高，与基于模型的 RL 基线相比，控制性能更加优越，并且控制性能与依赖精确系统动力学的基于模型的经典方法相当。

</details>

---

## 5. ChipCraftBrain: Validation-First RTL Generation via Multi-Agent Orchestration / ChipCraftBrain：通过多代理编排生成验证优先的 RTL

**Date**: 2026-04-21 | **arXiv**: [2604.19856v1](http://arxiv.org/abs/2604.19856v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.19856v1)

**Categories**: cs.AR, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Large Language Models (LLMs) show promise for generating Register-Transfer Level (RTL) code from natural language specifications, but single-shot generation achieves only 60-65% functional correctness on standard benchmarks. Multi-agent approaches such as MAGE reach 95.9% on VerilogEval yet remain untested on harder industrial benchmarks such as NVIDIA's CVDP, lack synthesis awareness, and incur high API costs.   We present ChipCraftBrain, a framework combining symbolic-neural reasoning with adaptive multi-agent orchestration for automated RTL generation. Four innovations drive the system: (1) adaptive orchestration over six specialized agents via a PPO policy over a 168-dim state (an alternative world-model MPC planner is also evaluated); (2) a hybrid symbolic-neural architecture that solves K-map and truth-table problems algorithmically while specialized agents handle waveform timing and general RTL; (3) knowledge-augmented generation from a 321-pattern base plus 971 open-source reference implementations with focus-aware retrieval; and (4) hierarchical specification decomposition into dependency-ordered sub-modules with interface synchronization.   On VerilogEval-Human, ChipCraftBrain achieves 97.2% mean pass@1 (range 96.15-98.72% across 7 runs, best 154/156), on par with ChipAgents (97.4%, self-reported) and ahead of MAGE (95.9%). On a 302-problem non-agentic subset of CVDP spanning five task categories, we reach 94.7% mean pass@1 (286/302, averaged over 3 runs), a 36-60 percentage-point lift per category over the published single-shot baseline; we additionally lead three of four categories shared with NVIDIA's ACE-RTL despite using roughly 30x fewer per-problem attempts. A RISC-V SoC case study demonstrates hierarchical decomposition generating 8/8 lint-passing modules (689 LOC) validated on FPGA, where monolithic generation fails entirely.

大型语言模型 (LLM) 有望根据自然语言规范生成寄存器传输级 (RTL) 代码，但单次生成在标准基准测试中仅实现 60-65% 的功能正确性。 MAGE 等多代理方法在 VerilogEval 上达到 95.9%，但尚未在 NVIDIA 的 CVDP 等更严格的工业基准上进行测试，缺乏综合意识，并且会产生高昂的 API 成本。   我们提出了 ChipCraftBrain，这是一个将符号神经推理与自适应多代理编排相结合的框架，用于自动 RTL 生成。该系统由四项创新驱动：(1) 通过 168 维状态上的 PPO 策略对 6 个专门代理进行自适应编排（还评估了另一种世界模型 MPC 规划器）； (2) 混合符号神经架构，通过算法解决 K-map 和真值表问题，同时专门代理处理波形定时和通用 RTL； (3) 从 321 个模式库加上 971 个具有焦点感知检索的开源参考实现进行知识增强生成； (4) 分层规范分解为具有接口同步的依赖顺序子模块。   在 VerilogEval-Human 上，ChipCraftBrain 的平均 pass@1 达到 97.2%（7 次运行范围为 96.15-98.72%，最佳 154/156），与 ChipAgents（97.4%，自我报告）持平，并领先于 MAGE（95.9%）。在涵盖 5 个任务类别的 CVDP 的 302 个问题非代理子集上，我们达到了 94.7% 的平均 pass@1（286/302，3 次运行的平均值），每个类别比已发布的单次基线提高了 36-60 个百分点；尽管每个问题的尝试次数减少了大约 30 倍，但我们在与 NVIDIA ACE-RTL 共享的四个类别中还领先其中三个。 RISC-V SoC 案例研究展示了在 FPGA 上验证的分层分解生成 8/8 lint-passing 模块 (689 LOC)，其中单片生成完全失败。

</details>

---

## 6. Mask World Model: Predicting What Matters for Robust Robot Policy Learning / 面具世界模型：预测对于鲁棒机器人策略学习来说重要的事情

**Date**: 2026-04-21 | **arXiv**: [2604.19683v1](http://arxiv.org/abs/2604.19683v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.19683v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

World models derived from large-scale video generative pre-training have emerged as a promising paradigm for generalist robot policy learning. However, standard approaches often focus on high-fidelity RGB video prediction, this can result in overfitting to irrelevant factors, such as dynamic backgrounds and illumination changes. These distractions reduce the model's ability to generalize, ultimately leading to unreliable and fragile control policies. To address this, we introduce the Mask World Model (MWM), which leverages video diffusion architectures to predict the evolution of semantic masks instead of pixels. This shift imposes a geometric information bottleneck, forcing the model to capture essential physical dynamics and contact relations while filtering out visual noise. We seamlessly integrate this mask dynamics backbone with a diffusion-based policy head to enable robust end-to-end control. Extensive evaluations demonstrate the superiority of MWM on the LIBERO and RLBench simulation benchmarks, significantly outperforming the state-of-the-art RGB-based world models. Furthermore, real-world experiments and robustness evaluation (via random token pruning) reveal that MWM exhibits superior generalization capabilities and robust resilience to texture information loss.

来自大规模视频生成预训练的世界模型已成为通用机器人策略学习的有前途的范例。然而，标准方法通常侧重于高保真 RGB 视频预测，这可能会导致对不相关因素的过度拟合，例如动态背景和照明变化。这些干扰降低了模型的泛化能力，最终导致控制政策不可靠且脆弱。为了解决这个问题，我们引入了掩模世界模型（MWM），它利用视频扩散架构来预测语义掩模而不是像素的演变。这种转变带来了几何信息瓶颈，迫使模型捕捉必要的物理动力学和接触关系，同时滤除视觉噪声。我们将这种掩模动态主干与基于扩散的策略头无缝集成，以实现强大的端到端控制。广泛的评估证明了 MWM 在 LIBERO 和 RLBench 模拟基准上的优越性，显着优于最先进的基于 RGB 的世界模型。此外，现实世界的实验和鲁棒性评估（通过随机令牌修剪）表明，MWM 表现出卓越的泛化能力和对纹理信息丢失的强大恢复能力。

</details>

---

## 7. Safety-Critical Contextual Control via Online Riemannian Optimization with World Models / 通过世界模型的在线黎曼优化进行安全关键的上下文控制

**Date**: 2026-04-21 | **arXiv**: [2604.19639v1](http://arxiv.org/abs/2604.19639v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.19639v1)

**Categories**: eess.SY, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Modern world models are becoming too complex to admit explicit dynamical descriptions. We study safety-critical contextual control, where a Planner must optimize a task objective using only feasibility samples from a black-box Simulator, conditioned on a context signal $ξ_t$. We develop a sample-based Penalized Predictive Control (PPC) framework grounded in online Riemannian optimization, in which the Simulator compresses the feasibility manifold into a score-based density $\hat{p}(u \mid ξ_t)$ that endows the action space with a Riemannian geometry guiding the Planner's gradient descent. The barrier curvature $κ(ξ_t)$, the minimum curvature of the conditional log-density $-\ln\hat{p}(\cdot\midξ_t)$, governs both convergence rate and safety margin, replacing the Lipschitz constant of the unknown dynamics. Our main result is a contextual safety bound showing that the distance from the true feasibility manifold is controlled by the score estimation error and a ratio that depends on $κ(ξ_t)$, both of which improve with richer context. Simulations on a dynamic navigation task confirm that contextual PPC substantially outperforms marginal and frozen density models, with the advantage growing after environment shifts.

现代世界模型变得过于复杂，无法接受明确的动力学描述。我们研究安全关键的上下文控制，其中规划器必须仅使用来自黑盒模拟器的可行性样本来优化任务目标，以上下文信号$ xi_t $为条件。我们开发了一个基于在线黎曼优化的基于样本的惩罚预测控制（PPC）框架，其中模拟器将可行性流形压缩为基于分数的密度$\hat{p}(u\mid xi_t)$，赋予动作空间一个黎曼几何形状，指导规划器的梯度下降。势垒曲率 $κ(xi_t)$，即条件对数密度 $-\ln\hat{p}(\cdot\midxi_t)$ 的最小曲率，控制着收敛速度和安全裕度，取代了未知动力学的 Lipschitz 常数。我们的主要结果是上下文安全界限，表明与真实可行性流形的距离由分数估计误差和取决于 $κ(xi_t)$ 的比率控制，这两者都随着更丰富的上下文而改善。对动态导航任务的模拟证实，上下文 PPC 大大优于边际密度模型和冻结密度模型，并且在环境变化后优势不断增强。

</details>

---



</details>

<details><summary><b>2026-04-22 (10 papers)</b></summary>

# arXiv World Model Papers - 2026-04-22

**Paper Count**: 10

---

## 1. LASER: Learning Active Sensing for Continuum Field Reconstruction / 激光：学习连续场重建的主动传感

**Date**: 2026-04-21 | **arXiv**: [2604.19355v1](http://arxiv.org/abs/2604.19355v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.19355v1)

**Categories**: cs.LG, cs.AI, cs.CE

<details><summary><b>Abstract / 摘要</b></summary>

High-fidelity measurements of continuum physical fields are essential for scientific discovery and engineering design but remain challenging under sparse and constrained sensing. Conventional reconstruction methods typically rely on fixed sensor layouts, which cannot adapt to evolving physical states. We propose LASER, a unified, closed-loop framework that formulates active sensing as a Partially Observable Markov Decision Process (POMDP). At its core, LASER employs a continuum field latent world model that captures the underlying physical dynamics and provides intrinsic reward feedback. This enables a reinforcement learning policy to simulate ''what-if'' sensing scenarios within a latent imagination space. By conditioning sensor movements on predicted latent states, LASER navigates toward potentially high-information regions beyond current observations. Our experiments demonstrate that LASER consistently outperforms static and offline-optimized strategies, achieving high-fidelity reconstruction under sparsity across diverse continuum fields.

连续物理场的高保真测量对于科学发现和工程设计至关重要，但在稀疏和受限传感下仍然具有挑战性。传统的重建方法通常依赖于固定的传感器布局，无法适应不断变化的物理状态。我们提出 LASER，一个统一的闭环框架，它将主动传感制定为部分可观察马尔可夫决策过程（POMDP）。 LASER 的核心采用连续场潜在世界模型，捕捉潜在的物理动力学并提供内在的奖励反馈。这使得强化学习策略能够在潜在想象空间内模拟“假设”传感场景。通过根据预测的潜在状态调节传感器的运动，激光可以导航到当前观测范围之外的潜在高信息区域。我们的实验表明，LASER 始终优于静态和离线优化策略，在不同连续介质场的稀疏性下实现了高保真度重建。

</details>

---

## 2. RoboWM-Bench: A Benchmark for Evaluating World Models in Robotic Manipulation / RoboWM-Bench：评估机器人操作世界模型的基准

**Date**: 2026-04-21 | **arXiv**: [2604.19092v1](http://arxiv.org/abs/2604.19092v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.19092v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Recent advances in large-scale video world models have enabled increasingly realistic future prediction, raising the prospect of leveraging imagined videos for robot learning. However, visual realism does not imply physical plausibility, and behaviors inferred from generated videos may violate dynamics and fail when executed by embodied agents. Existing benchmarks begin to incorporate notions of physical plausibility, but they largely remain perception- or diagnostic-oriented and do not systematically evaluate whether predicted behaviors can be translated into executable actions that complete the intended task. To address this gap, we introduce RoboWM-Bench, a manipulation-centric benchmark for embodiment-grounded evaluation of video world models. RoboWM-Bench converts generated behaviors from both human-hand and robotic manipulation videos into embodied action sequences and validates them through robotic execution. The benchmark spans diverse manipulation scenarios and establishes a unified protocol for consistent and reproducible evaluation. Using RoboWM-Bench, we evaluate state-of-the-art video world models and find that reliably generating physically executable behaviors remains an open challenge. Common failure modes include errors in spatial reasoning, unstable contact prediction, and non-physical deformations. While finetuning on manipulation data yields improvements, physical inconsistencies still persist, suggesting opportunities for more physically grounded video generation for robots.

大规模视频世界模型的最新进展使得未来预测变得越来越现实，提高了利用想象视频进行机器人学习的前景。然而，视觉真实感并不意味着物理合理性，从生成的视频推断的行为可能会违反动力学，并在由具体代理执行时失败。现有的基准开始纳入物理合理性的概念，但它们在很大程度上仍然以感知或诊断为导向，并且没有系统地评估预测的行为是否可以转化为完成预期任务的可执行行动。为了解决这一差距，我们引入了 RoboWM-Bench，这是一种以操作为中心的基准，用于对视频世界模型进行基于实施例的评估。 RoboWM-Bench 将人手和机器人操作视频生成的行为转换为具体的动作序列，并通过机器人执行对其进行验证。该基准跨越不同的操作场景，并建立统一的协议以进行一致且可重复的评估。使用 RoboWM-Bench，我们评估了最先进的视频世界模型，发现可靠地生成物理上可执行的行为仍然是一个开放的挑战。常见的失效模式包括空间推理错误、不稳定的接触预测和非物理变形。虽然对操纵数据的微调产生了改进，但物理不一致仍然存在，这表明为机器人生成更基于物理的视频的机会。

</details>

---

## 3. Curiosity-Critic: Cumulative Prediction Error Improvement as a Tractable Intrinsic Reward for World Model Training / 好奇心批评家：累积预测误差改进作为世界模型训练的易处理的内在奖励

**Date**: 2026-04-20 | **arXiv**: [2604.18701v1](http://arxiv.org/abs/2604.18701v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.18701v1)

**Categories**: cs.LG, cs.AI, stat.ML

<details><summary><b>Abstract / 摘要</b></summary>

Local prediction-error-based curiosity rewards focus on the current transition without considering the world model's cumulative prediction error across all visited transitions. We introduce Curiosity-Critic, which grounds its intrinsic reward in the improvement of this cumulative objective, and show that it reduces to a tractable per-step form: the difference between the current prediction error and the asymptotic error baseline of the current state transition. We estimate this baseline online with a learned critic co-trained alongside the world model; regressing a single scalar, the critic converges well before the world model saturates, redirecting exploration toward learnable transitions without oracle knowledge of the noise floor. The reward is higher for learnable transitions and collapses toward the baseline for stochastic ones, effectively separating epistemic (reducible) from aleatoric (irreducible) prediction error online. Prior prediction-error curiosity formulations, from Schmidhuber (1991) to learned-feature-space variants, emerge as special cases corresponding to specific approximations of this baseline. Experiments on a stochastic grid world show that Curiosity-Critic outperforms prediction-error and visitation-count baselines in convergence speed and final world model accuracy.

基于局部预测误差的好奇心奖励关注当前的转变，而不考虑世界模型在所有访问过的转变中的累积预测误差。我们引入了 Curiosity-Critic，它将其内在奖励建立在累积目标的改进上，并表明它可以简化为易于处理的每步形式：当前预测误差与当前状态转换的渐近误差基线之间的差异。我们与一位与世界模型共同训练的博学批评家在线估计了这个基线；回归单个标量，批评者在世界模型饱和之前就收敛了，将探索重定向到可学习的过渡，而无需对噪声基底的预言知识。对于可学习的转变，奖励更高，对于随机的转变，奖励会向基线崩溃，从而有效地将认知（可简化）与任意（不可简化）在线预测误差分开。先前的预测误差好奇心公式，从 Schmidhuber (1991) 到学习特征空间变体，都是作为与该基线的特定近似值相对应的特殊情况出现的。在随机网格世界上的实验表明，Curiosity-Critic 在收敛速度和最终世界模型精度方面优于预测误差和访问计数基线。

</details>

---

## 4. OneVL: One-Step Latent Reasoning and Planning with Vision-Language Explanation / OneVL：带有视觉语言解释的一步潜在推理和规划

**Date**: 2026-04-20 | **arXiv**: [2604.18486v1](http://arxiv.org/abs/2604.18486v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.18486v1)

**Categories**: cs.CV, cs.CL, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Chain-of-Thought (CoT) reasoning has become a powerful driver of trajectory prediction in VLA-based autonomous driving, yet its autoregressive nature imposes a latency cost that is prohibitive for real-time deployment. Latent CoT methods attempt to close this gap by compressing reasoning into continuous hidden states, but consistently fall short of their explicit counterparts. We suggest that this is due to purely linguistic latent representations compressing a symbolic abstraction of the world, rather than the causal dynamics that actually govern driving. Thus, we present OneVL (One-step latent reasoning and planning with Vision-Language explanations), a unified VLA and World Model framework that routes reasoning through compact latent tokens supervised by dual auxiliary decoders. Alongside a language decoder that reconstructs text CoT, we introduce a visual world model decoder that predicts future-frame tokens, forcing the latent space to internalize the causal dynamics of road geometry, agent motion, and environmental change. A three-stage training pipeline progressively aligns these latents with trajectory, language, and visual objectives, ensuring stable joint optimization. At inference, the auxiliary decoders are discarded and all latent tokens are prefilled in a single parallel pass, matching the speed of answer-only prediction. Across four benchmarks, OneVL becomes the first latent CoT method to surpass explicit CoT, delivering state-of-the-art accuracy at answer-only latency, and providing direct evidence that tighter compression, when guided in both language and world-model supervision, produces more generalizable representations than verbose token-by-token reasoning. Project Page: https://xiaomi-embodied-intelligence.github.io/OneVL

思想链 (CoT) 推理已成为基于 VLA 的自动驾驶中轨迹预测的强大驱动力，但其自回归性质带来的延迟成本阻碍了实时部署。潜在 CoT 方法试图通过将推理压缩为连续隐藏状态来缩小这一差距，但始终达不到其显式对应方法。我们认为这是由于纯粹的语言潜在表征压缩了世界的符号抽象，而不是实际控制驾驶的因果动态。因此，我们提出了 OneVL（带有视觉语言解释的一步潜在推理和规划），这是一种统一的 VLA 和世界模型框架，通过由双辅助解码器监督的紧凑潜在令牌进行推理。除了重建文本 CoT 的语言解码器之外，我们还引入了一个视觉世界模型解码器，可以预测未来帧标记，迫使潜在空间内化道路几何、代理运动和环境变化的因果动态。三阶段训练流程逐步将这些潜在变量与轨迹、语言和视觉目标结合起来，确保稳定的联合优化。在推理时，辅助解码器被丢弃，所有潜在令牌都在单个并行通道中预填充，与仅答案预测的速度相匹配。在四个基准测试中，OneVL 成为第一个超越显式 CoT 的潜在 CoT 方法，在仅回答延迟的情况下提供最先进的准确性，并提供直接证据表明，在语言和世界模型监督的指导下，更严格的压缩会产生比详细的逐个令牌推理更通用的表示。项目页面：https://xiaomi-embodied-intelligence.github.io/OneVL

</details>

---

## 5. NI Sampling: Accelerating Discrete Diffusion Sampling by Token Order Optimization / NI 采样：通过令牌阶优化加速离散扩散采样

**Date**: 2026-04-20 | **arXiv**: [2604.18471v1](http://arxiv.org/abs/2604.18471v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.18471v1)

**Categories**: cs.LG

**Code**: https://github.com/imagination-research/NI-Sampling.

<details><summary><b>Abstract / 摘要</b></summary>

Discrete diffusion language models (dLLMs) have recently emerged as a promising alternative to traditional autoregressive approaches, offering the flexibility to generate tokens in arbitrary orders and the potential of parallel decoding. However, existing heuristic sampling strategies remain inefficient: they choose only a small part of tokens to sample at each step, leaving substantial room for improvement. In this work, we study the problem of token sampling order optimization and demonstrate its significant potential for acceleration. Specifically, we find that fully leveraging correct predictions at each step can reduce the number of sampling iterations by an order of magnitude without compromising accuracy. Based on this, we propose Neural Indicator Sampling (NI Sampling), a general sampling order optimization framework that utilize a neural indicator to decide which tokens should be sampled at each step. We further propose a novel trajectory-preserving objective to train the indicator. Experiments on LLaDA and Dream models across multiple benchmarks show that our method achieves up to 14.3$\times$ acceleration over full-step sampling with negligible performance drop, and consistently outperforms confidence threshold sampling in the accuracy-step trade-off. Code is available at https://github.com/imagination-research/NI-Sampling.

离散扩散语言模型 (dLLM) 最近成为传统自回归方法的一种有前景的替代方案，提供了以任意顺序生成标记的灵活性以及并行解码的潜力。然而，现有的启发式采样策略仍然效率低下：它们在每一步只选择一小部分令牌进行采样，留下了很大的改进空间。在这项工作中，我们研究了令牌采样顺序优化问题，并展示了其巨大的加速潜力。具体来说，我们发现在每个步骤中充分利用正确的预测可以在不影响准确性的情况下将采样迭代次数减少一个数量级。基于此，我们提出了神经指示器采样（NI Sampling），这是一种通用采样顺序优化框架，利用神经指示器来决定每一步应该采样哪些令牌。我们进一步提出了一种新颖的轨迹保持目标来训练指标。在多个基准上对 LLaDA 和 Dream 模型进行的实验表明，我们的方法在全步采样上实现了高达 14.3$\times$ 的加速，性能下降可以忽略不计，并且在精度步权衡中始终优于置信阈值采样。代码可在 https://github.com/imagination-research/NI-Sampling 获取。

</details>

---

## 6. Sonata: A Hybrid World Model for Inertial Kinematics under Clinical Data Scarcity / Sonata：临床数据稀缺下的惯性运动学混合世界模型

**Date**: 2026-04-20 | **arXiv**: [2604.18058v1](http://arxiv.org/abs/2604.18058v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.18058v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

We introduce Sonata, a compact latent world model for six-axis trunk IMU representation learning under clinical data scarcity. Clinical cohorts typically comprise tens to hundreds of patients, making web-scale masked-reconstruction objectives poorly matched to the problem. Sonata is a 3.77 M-parameter hybrid model, pre-trained on a harmonised corpus of nine public datasets (739 subjects, 190k windows) with a latent world-model objective that predicts future state rather than reconstructing raw sensor traces. In a controlled comparison against a matched autoregressive forecasting baseline (MAE) on the same backbone, Sonata yields consistently stronger frozen-probe clinical discrimination, prospective fall-risk prediction, and cross-cohort transfer across a 14-arm evaluation suite, while producing higher-rank, more structured latent representations. At 3.77 M parameters the model is compatible with on-device wearable inference, offering a step toward general kinematic world models for neurological assessment.

我们介绍了 Sonata，一种紧凑的潜在世界模型，用于临床数据稀缺情况下的六轴躯干 IMU 表示学习。临床队列通常由数十到数百名患者组成，这使得网络规模的掩蔽重建目标与问题的匹配度很差。 Sonata 是一个 3.77 M 参数的混合模型，在由 9 个公共数据集（739 个主题，190k 个窗口）组成的统一语料库上进行了预训练，其潜在的世界模型目标是预测未来状态而不是重建原始传感器轨迹。在与同一主干上匹配的自回归预测基线 (MAE) 进行对照比较时，Sonata 始终产生更强的冻结探针临床辨别力、前瞻性跌倒风险预测和跨 14 臂评估套件的跨队列转移，同时产生更高等级、更结构化的潜在表示。该模型的参数为 3.77 M，与设备上的可穿戴推理兼容，为神经评估的通用运动学世界模型迈出了一步。

</details>

---

## 7. The Umwelt Representation Hypothesis: Rethinking Universality / 环境表征假说：重新思考普遍性

**Date**: 2026-04-20 | **arXiv**: [2604.17960v1](http://arxiv.org/abs/2604.17960v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.17960v1)

**Categories**: q-bio.NC, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Recent studies reveal striking representational alignment between artificial neural networks (ANNs) and biological brains, leading to proposals that all sufficiently capable systems converge on universal representations of reality. Here, we argue that this claim of Universality is premature. We introduce the Umwelt Representation Hypothesis (URH), proposing that alignment arises not from convergence toward a single global optimum, but from overlap in ecological constraints under which systems develop. We review empirical evidence showing that representational differences between species, individuals, and ANNs are systematic and adaptive, which is difficult to reconcile with Universality. Finally, we reframe ANN model comparison as a method for mapping clusters of alignment in ecological constraint space rather than searching for a single optimal world model.

最近的研究揭示了人工神经网络（ANN）和生物大脑之间惊人的表征一致性，从而提出了所有足够强大的系统都会收敛于现实的普遍表征的建议。在这里，我们认为这种普遍性主张还为时过早。我们引入了环境表征假说（URH），提出一致性不是源于向单一全局最优的收敛，而是源于系统发展的生态约束的重叠。我们回顾了经验证据，表明物种、个体和人工神经网络之间的代表性差异是系统性的和适应性的，这很难与普遍性相一致。最后，我们将 ANN 模型比较重新定义为一种在生态约束空间中映射对齐聚类的方法，而不是搜索单个最优世界模型。

</details>

---

## 8. StableIDM: Stabilizing Inverse Dynamics Model against Manipulator Truncation via Spatio-Temporal Refinement / StableIDM：通过时空细化稳定逆动力学模型以防止机械臂截断

**Date**: 2026-04-20 | **arXiv**: [2604.17887v1](http://arxiv.org/abs/2604.17887v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.17887v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Inverse Dynamics Models (IDMs) map visual observations to low-level action commands, serving as central components for data labeling and policy execution in embodied AI. However, their performance degrades severely under manipulator truncation, a common failure mode that makes state recovery ill-posed and leads to unstable control. We present StableIDM, a spatio-temporal framework that refines features from visual inputs to stabilize action predictions under such partial observability. StableIDM integrates three complementary components: (1) auxiliary robot-centric masking to suppress background clutter, (2) Directional Feature Aggregation (DFA) for geometry-aware spatial reasoning, which extracts anisotropic features along directions inferred from the visible arm and (3) Temporal Dynamics Refinement (TDR) to smooth and correct predictions via motion continuity. Extensive evaluations validate our approach: StableIDM improves strict action accuracy by 12.1% under severe truncation on the AgiBot benchmark, and increases average task success by 9.7% in real-robot replay. Moreover, it boosts end-to-end grasp success by 11.5% when decoding video-generated plans, and improves downstream VLA real-robot success by 17.6% when functioning as an automatic annotator. These results demonstrate that StableIDM provides a robust and scalable backbone for both policy execution and data generation in embodied artificial intelligence.

逆动态模型 (IDM) 将视觉观察映射到低级操作命令，作为具体人工智能中数据标记和策略执行的核心组件。然而，它们的性能在操纵器截断下严重下降，这是一种常见的故障模式，使状态恢复不适定并导致控制不稳定。我们提出了 StableIDM，这是一个时空框架，它可以细化视觉输入的特征，以在这种部分可观察性下稳定动作预测。 StableIDM 集成了三个互补组件：(1) 以机器人为中心的辅助掩蔽，用于抑制背景杂乱；(2) 用于几何感知空间推理的方向特征聚合 (DFA)，它沿着从可见臂推断的方向提取各向异性特征；(3) 时间动态细化 (TDR)，通过运动连续性平滑和校正预测。广泛的评估验证了我们的方法：StableIDM 在 AgiBot 基准的严重截断下将严格动作准确性提高了 12.1%，并将真实机器人重放中的平均任务成功率提高了 9.7%。此外，它在解码视频生成的计划时将端到端抓取成功率提高了 11.5%，在用作自动注释器时将下游 VLA 真实机器人的成功率提高了 17.6%。这些结果表明，StableIDM 为具体人工智能中的策略执行和数据生成提供了强大且可扩展的支柱。

</details>

---

## 9. DART: Learning-Enhanced Model Predictive Control for Dual-Arm Non-Prehensile Manipulation / DART：双臂非预握操纵的学习增强模型预测控制

**Date**: 2026-04-20 | **arXiv**: [2604.17833v1](http://arxiv.org/abs/2604.17833v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.17833v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

What appears effortless to a human waiter remains a major challenge for robots. Manipulating objects nonprehensilely on a tray is inherently difficult, and the complexity is amplified in dual-arm settings. Such tasks are highly relevant to service robotics in domains such as hotels and hospitality, where robots must transport and reposition diverse objects with precision. We present DART, a novel dual-arm framework that integrates nonlinear Model Predictive Control (MPC) with an optimization-based impedance controller to achieve accurate object motion relative to a dynamically controlled tray. The framework systematically evaluates three complementary strategies for modeling tray-object dynamics as the state transition function within our MPC formulation: (i) a physics-based analytical model, (ii) an online regression based identification model that adapts in real-time, and (iii) a reinforcement learning-based dynamics model that generalizes across object properties. Our pipeline is validated in simulation with objects of varying mass, geometry, and friction coefficients. Extensive evaluations highlight the trade-offs among the three modeling strategies in terms of settling time, steady-state error, control effort, and generalization across objects. To the best of our knowledge, DART constitutes the first framework for non-prehensile dual-arm manipulation of objects on a tray. Project Link: https://dart-icra.github.io/dart/

对于人类服务员来说看似毫不费力的事情对于机器人来说仍然是一个重大挑战。难以理解地操纵托盘上的物体本质上是困难的，并且在双臂设置中复杂性被放大。此类任务与酒店和酒店等领域的服务机器人高度相关，这些领域的机器人必须精确地运输和重新定位不同的物体。我们提出了 DART，一种新颖的双臂框架，它将非线性模型预测控制 (MPC) 与基于优化的阻抗控制器集成在一起，以实现相对于动态控制托盘的精确物体运动。该框架系统地评估了三种互补策略，用于将托盘对象动力学建模为 MPC 公式中的状态转换函数：（i）基于物理的分析模型，（ii）基于在线回归的实时适应识别模型，以及（iii）基于强化学习的动态模型，该模型可概括对象属性。我们的管道通过具有不同质量、几何形状和摩擦系数的物体的模拟验证。广泛的评估强调了三种建模策略在稳定时间、稳态误差、控制工作和跨对象泛化方面的权衡。据我们所知，DART 构成了第一个用于非抓握式双臂操作托盘上物体的框架。项目链接：https://dart-icra.github.io/dart/

</details>

---

## 10. Infrastructure-Centric World Models: Bridging Temporal Depth and Spatial Breadth for Roadside Perception / 以基础设施为中心的世界模型：桥接路边感知的时间深度和空间广度

**Date**: 2026-04-19 | **arXiv**: [2604.17651v1](http://arxiv.org/abs/2604.17651v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.17651v1)

**Categories**: cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

World models, generative AI systems that simulate how environments evolve, are transforming autonomous driving, yet all existing approaches adopt an ego-vehicle perspective, leaving the infrastructure viewpoint unexplored. We argue that infrastructure-centric world models offer a fundamentally complementary capability: the bird's-eye, multi-sensor, persistent viewpoint that roadside systems uniquely possess. Central to our thesis is a spatio-temporal complementarity: fixed roadside sensors excel at temporal depth, accumulating long-term behavioral distributions including rare safety-critical events, while vehicle-borne sensors excel at spatial breadth, sampling diverse scenes across large road networks. This paper presents a vision for Infrastructure-centric World Models (I-WM) in three phases: (I) generative scene understanding with quality-aware uncertainty propagation, (II) physics-informed predictive dynamics with multi-agent counterfactual reasoning, and (III) collaborative world models for V2X communication via latent space alignment. We propose a dual-layer architecture, annotation-free perception as a multi-modal data engine feeding end-to-end generative world models, with a phased sensor strategy from LiDAR through 4D radar and signal phase data to event cameras. We establish a taxonomy of driving world model paradigms, position I-WM relative to LeCun's JEPA, Li Fei-Fei's spatial intelligence, and VLA architectures, and introduce Infrastructure VLA (I-VLA) as a novel unification of roadside perception, language commands, and traffic control actions. Our vision builds upon existing multi-LiDAR pipelines and identifies open-source foundations for each phase, providing a path toward infrastructure that understands and anticipates traffic.

世界模型、模拟环境如何演变的生成式人工智能系统正在改变自动驾驶，但所有现有方法都采用自我车辆视角，而基础设施视角尚未得到探索。我们认为，以基础设施为中心的世界模型提供了一种根本上的互补能力：路边系统独特拥有的鸟瞰、多传感器、持续视角。我们论文的核心是时空互补性：固定路边传感器擅长时间深度，积累长期行为分布，包括罕见的安全关键事件，而车载传感器擅长空间广度，对大型道路网络的不同场景进行采样。本文提出了以基础设施为中心的世界模型（I-WM）的愿景，分为三个阶段：（I）具有质量感知不确定性传播的生成场景理解，（II）具有多智能体反事实推理的物理信息预测动力学，以及（III）通过潜在空间对齐进行 V2X 通信的协作世界模型。我们提出了一种双层架构、无注释感知作为多模态数据引擎，提供端到端生成世界模型，并采用从 LiDAR 到 4D 雷达的分阶段传感器策略以及到事件摄像机的信号相位数据。我们建立了驾驶世界模型范式的分类法，将 I-WM 相对于 LeCun 的 JEPA、李飞飞的空间智能和 VLA 架构进行定位，并引入基础设施 VLA (I-VLA) 作为路边感知、语言命令和交通控制动作的新颖统一。我们的愿景建立在现有的多激光雷达管道的基础上，并为每个阶段确定了开源基础，从而提供了一条通往理解和预测流量的基础设施的道路。

</details>

---



</details>

<details><summary><b>2026-04-21 (1 papers)</b></summary>

# arXiv World Model Papers - 2026-04-21

**Paper Count**: 1

---

## 1. TensorHub: Rethinking AI Model Hub with Tensor-Centric Compression / TensorHub：通过以张量为中心的压缩重新思考 AI 模型中心

**Date**: 2026-04-18 | **arXiv**: [2604.17104v1](http://arxiv.org/abs/2604.17104v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.17104v1)

**Categories**: cs.DC, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Modern AI models are growing rapidly in size and redundancy, leading to significant storage and distribution challenges in model hubs. We present TensorHub, a tensor-centric system for reducing storage overhead through fine-grained deduplication and compression. TensorHub leverages tensor-level fingerprinting and clustering to identify redundancy across models without requiring annotations. Our design enables efficient storage reduction while preserving model usability and performance. Experiments on real-world model repositories demonstrate substantial storage savings with minimal overhead.

现代人工智能模型的规模和冗余度正在迅速增长，导致模型中心面临巨大的存储和分发挑战。我们推出 TensorHub，这是一个以张量为中心的系统，通过细粒度的重复数据删除和压缩来减少存储开销。 TensorHub 利用张量级指纹识别和聚类来识别模型之间的冗余，而无需注释。我们的设计可以有效减少存储空间，同时保持模型的可用性和性能。对现实世界模型存储库的实验表明，可以以最小的开销节省大量存储空间。

</details>

---



</details>

<details><summary><b>2026-04-17 (4 papers)</b></summary>

# arXiv World Model Papers - 2026-04-17

**Paper Count**: 4

---

## 1. POMDP-based Object Search with Growing State Space and Hybrid Action Domain / 基于 POMDP 的具有生长状态空间和混合动作域的对象搜索

**Date**: 2026-04-16 | **arXiv**: [2604.14965v1](http://arxiv.org/abs/2604.14965v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.14965v1)

**Categories**: cs.RO

**Project**: https://sites.google.com/view/gnpfkct.  <details><summary><b>Abstract / 摘要</b></summary>

Efficiently locating target objects in complex indoor environments with diverse furniture, such as shelves, tables, and beds, is a significant challenge for mobile robots. This difficulty arises from factors like localization errors, limited fields of view, and visual occlusion. We address this by framing the object-search task as a highdimensional Partially Observable Markov Decision Process (POMDP) with a growing state space and hybrid (continuous and discrete) action spaces in 3D environments. Based on a meticulously designed perception module, a novel online POMDP solver named the growing neural process filtered k-center clustering tree (GNPF-kCT) is proposed to tackle this problem. Optimal actions are selected using Monte Carlo Tree Search (MCTS) with belief tree reuse for growing state space, a neural process network to filter useless primitive actions, and k-center clustering hypersphere discretization for efficient refinement of high-dimensional action spaces. A modified upper-confidence bound (UCB), informed by belief differences and action value functions within cells of estimated diameters, guides MCTS expansion. Theoretical analysis validates the convergence and performance potential of our method. To address scenarios with limited information or rewards, we also introduce a guessed target object with a grid-world model as a key strategy to enhance search efficiency. Extensive Gazebo simulations with Fetch and Stretch robots demonstrate faster and more reliable target localization than POMDP-based baselines and state-of-the-art (SOTA) non-POMDP-based solvers, especially large language model (LLM) based methods, in object search under the same computational constraints and perception systems. Real-world tests in office environments confirm the practical applicability of our approach. Project page: https://sites.google.com/view/gnpfkct.

在架子、桌子、床等家具复杂的室内环境中高效定位目标物体是移动机器人面临的重大挑战。这种困难是由定位错误、视野有限和视觉遮挡等因素造成的。我们通过将对象搜索任务构建为高维部分可观察马尔可夫决策过程 (POMDP) 来解决这个问题，在 3D 环境中具有不断增长的状态空间和混合（连续和离散）动作空间。基于精心设计的感知模块，提出了一种新颖的在线 POMDP 求解器，称为生长神经过程过滤 k 中心聚类树（GNPF-kCT）来解决这个问题。使用蒙特卡罗树搜索 (MCTS) 来选择最佳动作，并使用信念树重用来增长状态空间，使用神经处理网络来过滤无用的原始动作，以及 k 中心聚类超球面离散化来有效细化高维动作空间。修正的置信上限 (UCB) 由估计直径单元内的信念差异和行动值函数告知，指导 MCTS 扩展。理论分析验证了我们方法的收敛性和性能潜力。为了解决信息或奖励有限的场景，我们还引入了带有网格世界模型的猜测目标对象作为提高搜索效率的关键策略。使用 Fetch 和 Stretch 机器人进行的广泛 Gazebo 模拟表明，在相同计算约束和感知系统下的对象搜索中，比基于 POMDP 的基线和最先进的 (SOTA) 非 POMDP 求解器，尤其是基于大语言模型 (LLM) 的方法，目标定位更快、更可靠。办公环境中的实际测试证实了我们方法的实际适用性。项目页面：https://sites.google.com/view/gnpfkct。

</details>

---

## 2. Learning Ad Hoc Network Dynamics via Graph-Structured World Models / 通过图结构世界模型学习自组织网络动力学

**Date**: 2026-04-16 | **arXiv**: [2604.14811v1](http://arxiv.org/abs/2604.14811v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.14811v1)

**Categories**: cs.LG, cs.MA, cs.NI

<details><summary><b>Abstract / 摘要</b></summary>

Ad hoc wireless networks exhibit complex, innate and coupled dynamics: node mobility, energy depletion and topology change that are difficult to model analytically. Model-free deep reinforcement learning requires sustained online interaction whereas existing model based approaches use flat state representations that lose per node structure. Therefore we propose G-RSSM, a graph structured recurrent state space model that maintains per node latent states with cross node multi head attention to learn the dynamics jointly from offline trajectories. We apply the proposed method to the downstream task clustering where a cluster head selection policy trains entirely through imagined rollouts in the learned world model. Across 27 evaluation scenarios spanning MANET, VANET, FANET, WSN and tactical networks with N=30 to 1000 nodes, the learned policy maintains high connectivity with only trained for N=50. Herein, we propose the first multi physics graph structured world model applied to combinatorial per node decision making in size agnostic wireless ad hoc networks.

自组织无线网络表现出复杂的、固有的和耦合的动态：节点移动性、能量消耗和拓扑变化，这些都难以进行分析建模。无模型深度强化学习需要持续的在线交互，而现有的基于模型的方法使用会丢失每个节点结构的平面状态表示。因此，我们提出了 G-RSSM，一种图结构的循环状态空间模型，它通过跨节点多头注意力来维护每个节点的潜在状态，以从离线轨迹中共同学习动态。我们将所提出的方法应用于下游任务集群，其中集群头选择策略完全通过学习世界模型中的想象部署进行训练。在涵盖 MANET、VANET、FANET、WSN 和战术网络（N=30 到 1000 个节点）的 27 个评估场景中，学习策略在仅训练 N=50 的情况下保持了高连接性。在此，我们提出了第一个多物理图结构化世界模型，应用于大小不可知的无线自组织网络中的每节点组合决策。

</details>

---

## 3. World-Value-Action Model: Implicit Planning for Vision-Language-Action Systems / 世界价值行动模型：视觉语言行动系统的隐式规划

**Date**: 2026-04-16 | **arXiv**: [2604.14732v1](http://arxiv.org/abs/2604.14732v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.14732v1)

**Categories**: cs.RO, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Vision-Language-Action (VLA) models have emerged as a promising paradigm for building embodied agents that ground perception and language into action. However, most existing approaches rely on direct action prediction, lacking the ability to reason over long-horizon trajectories and evaluate their consequences, which limits performance in complex decision-making tasks. In this work, we introduce World-Value-Action (WAV) model, a unified framework that enables implicit planning in VLA systems. Rather than performing explicit trajectory optimization, WAV model learn a structured latent representation of future trajectories conditioned on visual observations and language instructions. A learned world model predicts future states, while a trajectory value function evaluates their long-horizon utility. Action generation is then formulated as inference in this latent space, where the model progressively concentrates probability mass on high-value and dynamically feasible trajectories. We provide a theoretical perspective showing that planning directly in action space suffers from an exponential decay in the probability of feasible trajectories as the horizon increases. In contrast, latent-space inference reshapes the search distribution toward feasible regions, enabling efficient long-horizon decision making. Extensive simulations and real-world experiments demonstrate that the WAV model consistently outperforms state-of-the-art methods, achieving significant improvements in task success rate, generalization ability, and robustness, especially in long-horizon and compositional scenarios.

视觉-语言-动作（VLA）模型已成为构建将感知和语言转化为行动的具体代理的有前途的范例。然而，大多数现有方法依赖于直接行动预测，缺乏对长期轨迹进行推理并评估其后果的能力，这限制了复杂决策任务的性能。在这项工作中，我们引入了世界价值行动（WAV）模型，这是一个统一的框架，可以在 VLA 系统中实现隐式规划。 WAV 模型不是执行显式轨迹优化，而是学习以视觉观察和语言指令为条件的未来轨迹的结构化潜在表示。学习的世界模型预测未来状态，而轨迹价值函数评估其长期效用。然后，动作生成被公式化为该潜在空间中的推理，其中模型逐渐将概率质量集中在高价值和动态可行的轨迹上。我们提供了一个理论视角，表明随着视野的增加，直接在行动空间中进行规划会遭受可行轨迹概率指数衰减的影响。相比之下，潜在空间推理将搜索分布重塑为可行区域，从而实现高效的长期决策。大量的模拟和真实世界的实验表明，WAV 模型始终优于最先进的方法，在任务成功率、泛化能力和鲁棒性方面取得了显着提高，特别是在长视野和组合场景中。

</details>

---

## 4. Model-Based Reinforcement Learning Exploits Passive Body Dynamics for High-Performance Biped Robot Locomotion / 基于模型的强化学习利用被动身体动力学实现高性能双足机器人运动

**Date**: 2026-04-16 | **arXiv**: [2604.14565v1](http://arxiv.org/abs/2604.14565v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.14565v1)

**Categories**: cs.RO, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

Embodiment is a significant keyword in recent machine learning fields. This study focused on the passive nature of the body of a biped robot to generate walking and running locomotion using model-based deep reinforcement learning. We constructed two models in a simulator, one with passive elements (e.g., springs) and the other, which is similar to general humanoids, without passive elements. The training of the model with passive elements was highly affected by the attractor of the system. This lead that although the trajectories quickly converged to limit cycles, it took a long time to obtain large rewards. However, thanks to the attractor-driven learning, the acquired locomotion was robust and energy-efficient. The results revealed that robots with passive elements could efficiently acquire high-performance locomotion by utilizing stable limit cycles generated through dynamic interaction between the body and ground. This study demonstrates the importance of implementing passive properties in the body for future embodied AI.

体现是最近机器学习领域的一个重要关键词。这项研究的重点是双足机器人身体的被动性质，利用基于模型的深度强化学习产生步行和跑步运动。我们在模拟器中构建了两个模型，一个具有被动元件（例如弹簧），另一个与一般人形机器人类似，没有被动元件。具有被动元件的模型的训练很大程度上受到系统吸引子的影响。这导致虽然轨迹很快收敛到极限环，但需要很长时间才能获得大的奖励。然而，由于吸引子驱动的学习，获得的运动是稳健且节能的。结果表明，具有被动元件的机器人可以利用身体与地面之间的动态相互作用产生的稳定极限环来有效地获得高性能运动。这项研究证明了在身体中实现被动特性对于未来的具体人工智能的重要性。

</details>

---



</details>

<details><summary><b>2026-04-16 (3 papers)</b></summary>

# arXiv World Model Papers - 2026-04-16

**Paper Count**: 3

---

## 1. Beyond State Consistency: Behavior Consistency in Text-Based World Models / 超越状态一致性：基于文本的世界模型中的行为一致性

**Date**: 2026-04-15 | **arXiv**: [2604.13824v1](http://arxiv.org/abs/2604.13824v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.13824v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

World models have been emerging as critical components for assessing the consequences of actions generated by interactive agents in online planning and offline evaluation. In text-based environments, world models are typically evaluated and trained with single-step metrics such as Exact Match, aiming to improve the similarity between predicted and real-world states, but such metrics have been shown to be insufficient for capturing actual agent behavior. To address this issue, we introduce a new behavior-aligned training paradigm aimed at improving the functional consistency between the world model and the real environment. This paradigm focuses on optimizing a tractable step-level metric named Behavior Consistency Reward (BehR), which measures how much the likelihood of a logged next action changes between the real state and the world-model-predicted state under a frozen Reference Agent. Experiments on WebShop and TextWorld show that BehR-based training improves long-term alignment in several settings, with the clearest gains in WebShop and less movement in near-ceiling regimes, while preserving or improving single-step prediction quality in three of four settings. World models trained with BehR also achieve lower false positives in offline surrogate evaluation and show modest but encouraging gains in inference-time lookahead planning.

世界模型已成为评估在线规划和离线评估中交互式代理所产生的行动后果的关键组成部分。在基于文本的环境中，世界模型通常使用单步指标（例如“精确匹配”）进行评估和训练，旨在提高预测状态与现实世界状态之间的相似性，但此类指标已被证明不足以捕获实际的代理行为。为了解决这个问题，我们引入了一种新的行为一致的训练范例，旨在提高世界模型与真实环境之间的功能一致性。该范例侧重于优化名为行为一致性奖励（BehR）的易于处理的步骤级指标，该指标测量在冻结参考代理下记录的下一个动作在真实状态和世界模型预测状态之间变化的可能性有多大。 WebShop 和 TextWorld 上的实验表明，基于 BehR 的训练可以改善多种设置中的长期对齐，其中 WebShop 中的收益最明显，并且在接近天花板的情况下移动较少，同时在四分之三的设置中保持或提高单步预测质量。使用 BehR 训练的世界模型在离线代理评估中也实现了较低的误报，并在推理时间前瞻规划方面显示出适度但令人鼓舞的收益。

</details>

---

## 2. Vision-and-Language Navigation for UAVs: Progress, Challenges, and a Research Roadmap / 无人机视觉和语言导航：进展、挑战和研究路线图

**Date**: 2026-04-15 | **arXiv**: [2604.13654v1](http://arxiv.org/abs/2604.13654v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.13654v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Vision-and-Language Navigation for Unmanned Aerial Vehicles (UAV-VLN) represents a pivotal challenge in embodied artificial intelligence, focused on enabling UAVs to interpret high-level human commands and execute long-horizon tasks in complex 3D environments. This paper provides a comprehensive and structured survey of the field, from its formal task definition to the current state of the art. We establish a methodological taxonomy that charts the technological evolution from early modular and deep learning approaches to contemporary agentic systems driven by large foundation models, including Vision-Language Models (VLMs), Vision-Language-Action (VLA) models, and the emerging integration of generative world models with VLA architectures for physically-grounded reasoning. The survey systematically reviews the ecosystem of essential resources simulators, datasets, and evaluation metrics that facilitates standardized research. Furthermore, we conduct a critical analysis of the primary challenges impeding real-world deployment: the simulation-to-reality gap, robust perception in dynamic outdoor settings, reasoning with linguistic ambiguity, and the efficient deployment of large models on resource-constrained hardware. By synthesizing current benchmarks and limitations, this survey concludes by proposing a forward-looking research roadmap to guide future inquiry into key frontiers such as multi-agent swarm coordination and air-ground collaborative robotics.

无人机视觉和语言导航 (UAV-VLN) 代表了嵌入式人工智能的关键挑战，重点是使无人机能够解释高级人类命令并在复杂的 3D 环境中执行长视距任务。本文对该领域进行了全面、结构化的调查，从正式的任务定义到当前的技术水平。我们建立了一种方法分类法，描绘了从早期模块化和深度学习方法到由大型基础模型驱动的当代代理系统的技术演变，包括视觉语言模型（VLM）、视觉语言动作（VLA）模型，以及生成世界模型与用于物理推理的 VLA 架构的新兴集成。该调查系统地审查了促进标准化研究的基本资源模拟器、数据集和评估指标的生态系统。此外，我们对阻碍现实世界部署的主要挑战进行了批判性分析：模拟与现实的差距、动态户外环境中的稳健感知、语言模糊性推理以及在资源有限的硬件上高效部署大型模型。通过综合当前的基准和局限性，本次调查最后提出了一个前瞻性的研究路线图，以指导未来对多智能体群体协调和空地协作机器人等关键前沿领域的研究。

</details>

---

## 3. Diffusion Sequence Models for Generative In-Context Meta-Learning of Robot Dynamics / 用于机器人动力学生成上下文元学习的扩散序列模型

**Date**: 2026-04-15 | **arXiv**: [2604.13366v1](http://arxiv.org/abs/2604.13366v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.13366v1)

**Categories**: cs.LG, cs.RO, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

Accurate modeling of robot dynamics is essential for model-based control, yet remains challenging under distributional shifts and real-time constraints. In this work, we formulate system identification as an in-context meta-learning problem and compare deterministic and generative sequence models for forward dynamics prediction. We take a Transformer-based meta-model, as a strong deterministic baseline, and introduce to this setting two complementary diffusion-based approaches: (i) inpainting diffusion (Diffuser), which learns the joint input-observation distribution, and (ii) conditioned diffusion models (CNN and Transformer), which generate future observations conditioned on control inputs. Through large-scale randomized simulations, we analyze performance across in-distribution and out-of-distribution regimes, as well as computational trade-offs relevant for control. We show that diffusion models significantly improve robustness under distribution shift, with inpainting diffusion achieving the best performance in our experiments. Finally, we demonstrate that warm-started sampling enables diffusion models to operate within real-time constraints, making them viable for control applications. These results highlight generative meta-models as a promising direction for robust system identification in robotics.

机器人动力学的准确建模对于基于模型的控制至关重要，但在分布变化和实时约束下仍然具有挑战性。在这项工作中，我们将系统识别表述为上下文元学习问题，并比较用于前向动态预测的确定性序列模型和生成序列模型。我们采用基于 Transformer 的元模型作为强大的确定性基线，并向此设置引入两种互补的基于扩散的方法：（i）修复扩散（Diffuser），它学习联合输入观察分布，以及（ii）条件扩散模型（CNN 和 Transformer），它生成以控制输入为条件的未来观察结果。通过大规模随机模拟，我们分析了分布内和分布外的性能，以及与控制相关的计算权衡。我们表明，扩散模型显着提高了分布变化下的鲁棒性，修复扩散在我们的实验中实现了最佳性能。最后，我们证明热启动采样使扩散模型能够在实时约束下运行，从而使其适用于控制应用。这些结果强调生成元模型是机器人技术中稳健系统识别的一个有前途的方向。

</details>

---



</details>

<details><summary><b>2026-04-15 (2 papers)</b></summary>

# arXiv World Model Papers - 2026-04-15

**Paper Count**: 2

---

## 1. Robotic Manipulation is Vision-to-Geometry Mapping ($f(v) \rightarrow G$): Vision-Geometry Backbones over Language and Video Models / 机器人操作是视觉到几何映射（$f(v) \rightarrow G$）：语言和视频模型上的视觉几何骨干

**Date**: 2026-04-14 | **arXiv**: [2604.12908v1](http://arxiv.org/abs/2604.12908v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.12908v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

At its core, robotic manipulation is a problem of vision-to-geometry mapping ($f(v) \rightarrow G$). Physical actions are fundamentally defined by geometric properties like 3D positions and spatial relationships. Consequently, we argue that the foundation for generalizable robotic control should be a vision-geometry backbone, rather than the widely adopted vision-language or video models. Conventional VLA and video-predictive models rely on backbones pretrained on large-scale 2D image-text or temporal pixel data. While effective, their representations are largely shaped by semantic concepts or 2D priors, which do not intrinsically align with the precise 3D geometric nature required for physical manipulation. Driven by this insight, we propose the Vision-Geometry-Action (VGA) model, which directly conditions action generation on pretrained native 3D representations. Specifically, VGA replaces conventional language or video backbones with a pretrained 3D world model, establishing a seamless vision-to-geometry mapping that translates visual inputs directly into physical actions. To further enhance geometric consistency, we introduce a Progressive Volumetric Modulation module and adopt a joint training strategy. Extensive experiments validate the effectiveness of our approach. In simulation benchmarks, VGA outperforms top-tier VLA baselines including $π_{0.5}$ and GeoVLA, demonstrating its superiority in precise manipulation. More importantly, VGA exhibits remarkable zero-shot generalization to unseen viewpoints in real-world deployments, consistently outperforming $π_{0.5}$. These results highlight that operating on native 3D representations-rather than translating through language or 2D video priors-is a highly promising direction for achieving generalizable physical intelligence.

从本质上讲，机器人操作是视觉到几何映射的问题（$f(v) \rightarrow G$）。物理动作从根本上是由 3D 位置和空间关系等几何属性定义的。因此，我们认为通用机器人控制的基础应该是视觉几何骨干，而不是广泛采用的视觉语言或视频模型。传统的 VLA 和视频预测模型依赖于大规模 2D 图像文本或时间像素数据预训练的主干网。虽然有效，但它们的表示很大程度上是由语义概念或 2D 先验决定的，这些概念本质上并不符合物理操作所需的精确 3D 几何性质。在这一见解的推动下，我们提出了视觉-几何-动作 (VGA) 模型，该模型直接在预训练的本机 3D 表示上调节动作生成。具体来说，VGA 用预先训练的 3D 世界模型取代了传统的语言或视频主干，建立了无缝的视觉到几何映射，将视觉输入直接转换为物理动作。为了进一步增强几何一致性，我们引入了渐进体积调制模块并采用联合训练策略。大量的实验验证了我们方法的有效性。在模拟基准测试中，VGA 的性能优于包括 $π_{0.5}$ 和 GeoVLA 在内的顶级 VLA 基线，展示了其在精确操作方面的优越性。更重要的是，VGA 对现实世界部署中未见过的视点表现出卓越的零样本泛化能力，始终优于 $π_{0.5}$。这些结果强调，对原生 3D 表示进行操作（而不是通过语言或 2D 视频先验进行翻译）是实现通用物理智能的一个非常有前途的方向。

</details>

---

## 2. Bipedal-Walking-Dynamics Model on Granular Terrains / 颗粒地形上的双足行走动力学模型

**Date**: 2026-04-13 | **arXiv**: [2604.11981v1](http://arxiv.org/abs/2604.11981v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.11981v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Bipeds have demonstrated high agility and mobility in unstructured environments such as sand. The yielding of such granular media brings significant sinkage and slip of the bipedal feet, leading to uncertainty and instability of walking locomotion. We present a new dynamics-modeling approach to capture and predict bipedal-walking locomotion on granular media. A dynamic foot-terrain interaction model is integrated to compute the ground reaction force (GRF). The proposed granular dynamic model has three additional degree-of-freedom (DoF) to estimate foot sinkage and slip that are critical to capturing robot-walking kinematics and kinetics such as cost of transport (CoT). Using the new model, we analyze bipedal kinetics, CoT, and foot-terrain rolling and intrusion affects. Experiments are conducted using a biped robotic walker on sand to validate the proposed dynamic model with robot-gait profiles, media-intrusion prediction, and GRF estimations. This new dynamics model can further serve as an enabling tool for locomotion control and optimization of bipedal robots to efficiently walk on granular terrains.

两足动物在沙子等非结构化环境中表现出了高度的敏捷性和机动性。这种颗粒介质的屈服会带来双足足的显着下沉和滑动，导致行走运动的不确定性和不稳定性。我们提出了一种新的动力学建模方法来捕获和预测颗​​粒介质上的双足行走运动。集成动态地面相互作用模型来计算地面反作用力 (GRF)。所提出的粒度动态模型具有三个额外的自由度（DoF）来估计足部下沉和滑动，这对于捕获机器人行走运动学和动力学（例如运输成本（CoT））至关重要。使用新模型，我们分析了双足动力学、CoT 以及地面滚动和入侵影响。使用沙子上的双足机器人步行器进行实验，以验证所提出的具有机器人步态轮廓、媒体入侵预测和 GRF 估计的动态模型。这种新的动力学模型可以进一步作为双足机器人运动控制和优化的支持工具，以有效地在粒状地形上行走。

</details>

---



</details>

<details><summary><b>2026-04-14 (6 papers)</b></summary>

# arXiv World Model Papers - 2026-04-14

**Paper Count**: 6

---

## 1. Grounded World Model for Semantically Generalizable Planning / 用于语义泛化规划的扎根世界模型

**Date**: 2026-04-13 | **arXiv**: [2604.11751v1](http://arxiv.org/abs/2604.11751v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.11751v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

In Model Predictive Control (MPC), world models predict the future outcomes of various action proposals, which are then scored to guide the selection of the optimal action. For visuomotor MPC, the score function is a distance metric between a predicted image and a goal image, measured in the latent space of a pretrained vision encoder like DINO and JEPA. However, it is challenging to obtain the goal image in advance of the task execution, particularly in new environments. Additionally, conveying the goal through an image offers limited interactivity compared with natural language. In this work, we propose to learn a Grounded World Model (GWM) in a vision-language-aligned latent space. As a result, each proposed action is scored based on how close its future outcome is to the task instruction, reflected by the similarity of embeddings. This approach transforms the visuomotor MPC to a VLA that surpasses VLM-based VLAs in semantic generalization. On the proposed WISER benchmark, GWM-MPC achieves a 87% success rate on the test set comprising 288 tasks that feature unseen visual signals and referring expressions, yet remain solvable with motions demonstrated during training. In contrast, traditional VLAs achieve an average success rate of 22%, even though they overfit the training set with a 90% success rate.

在模型预测控制（MPC）中，世界模型预测各种行动建议的未来结果，然后对其进行评分以指导最佳行动的选择。对于视觉运动 MPC，得分函数是预测图像和目标图像之间的距离度量，在 DINO 和 JEPA 等预训练视觉编码器的潜在空间中测量。然而，在任务执行之前获取目标图像具有挑战性，特别是在新环境中。此外，与自然语言相比，通过图像传达目标的交互性有限。在这项工作中，我们建议在视觉语言对齐的潜在空间中学习接地世界模型（GWM）。因此，每个提议的动作都是根据其未来结果与任务指令的接近程度来评分的，这反映在嵌入的相似性上。这种方法将视觉运动 MPC 转换为 VLA，在语义泛化方面超越了基于 VLM 的 VLA。在拟议的 WISER 基准上，GWM-MPC 在包含 288 个任务的测试集上实现了 87% 的成功率，这些任务具有看不见的视觉信号和指代表达，但仍然可以通过训练期间演示的运动来解决。相比之下，传统 VLA 的平均成功率为 22%，尽管它们以 90% 的成功率过度拟合训练集。

</details>

---

## 2. Dyadic Partnership(DP): A Missing Link Towards Full Autonomy in Medical Robotics / 二元伙伴关系（DP）：医疗机器人实现完全自治的缺失环节

**Date**: 2026-04-13 | **arXiv**: [2604.11423v1](http://arxiv.org/abs/2604.11423v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.11423v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

For the past decades medical robotic solutions were mostly based on the concept of tele-manipulation. While their design was extremely intelligent, allowing for better access, improved dexterity, reduced tremor, and improved imaging, their intelligence was limited. They therefore left cognition and decision making to the surgeon. As medical robotics advances towards high-level autonomy, the scientific community needs to explore the required pathway towards partial and full autonomy. Here, we introduce the concept of Dyadic Partnership(DP), a new paradigm in which robots and clinicians engage in intelligent, expert interaction and collaboration. The Dyadic Partners would discuss and agree on decisions and actions during their dynamic and interactive collaboration relying also on intuitive advanced media using generative AI, such as a world model, and advanced multi-modal visualization. This article outlines the foundational components needed to enable such systems, including foundation models for clinical intelligence, multi-modal intent recognition, co-learning frameworks, advanced visualization, and explainable, trust-aware interaction. We further discuss key challenges such as data scarcity, lack of standardization, and ethical acceptance. Dyadic partnership is introduced and is positioned as a powerful yet achievable, acceptable milestone offering a promising pathway toward safer, more intuitive collaboration and a gradual transition to full autonomy across diverse clinical settings.

在过去的几十年里，医疗机器人解决方案主要基于远程操作的概念。虽然他们的设计非常智能，可以更好地进入、提高灵活性、减少震颤并改善成像，但他们的智能是有限的。因此，他们将认知和决策权留给了外科医生。随着医疗机器人技术向高度自治方向发展，科学界需要探索实现部分和完全自治所需的途径。在这里，我们引入了二元伙伴关系（DP）的概念，这是一种机器人和临床医生进行智能、专家互动和协作的新范式。二元合作伙伴将在动态和交互式协作期间讨论并商定决策和行动，同时还依赖于使用生成人工智能的直观高级媒体，例如世界模型和高级多模式可视化。本文概述了启用此类系统所需的基础组件，包括临床智能的基础模型、多模式意图识别、共同学习框架、高级可视化以及可解释的信任感知交互。我们进一步讨论了数据稀缺、缺乏标准化和道德接受等关键挑战。引入二元合作伙伴关系，并将其定位为一个强大但可实现、可接受的里程碑，为实现更安全、更直观的协作以及在不同临床环境中逐步过渡到完全自主提供了一条充满希望的途径。

</details>

---

## 3. ComSim: Building Scalable Real-World Robot Data Generation via Compositional Simulation / ComSim：通过组合仿真构建可扩展的真实世界机器人数据生成

**Date**: 2026-04-13 | **arXiv**: [2604.11386v1](http://arxiv.org/abs/2604.11386v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.11386v1)

**Categories**: cs.RO, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recent advancements in foundational models, such as large language models and world models, have greatly enhanced the capabilities of robotics, enabling robots to autonomously perform complex tasks. However, acquiring large-scale, high-quality training data for robotics remains a challenge, as it often requires substantial manual effort and is limited in its coverage of diverse real-world environments. To address this, we propose a novel hybrid approach called Compositional Simulation, which combines classical simulation and neural simulation to generate accurate action-video pairs while maintaining real-world consistency. Our approach utilizes a closed-loop real-sim-real data augmentation pipeline, leveraging a small amount of real-world data to generate diverse, large-scale training datasets that cover a broader spectrum of real-world scenarios. We train a neural simulator to transform classical simulation videos into real-world representations, improving the accuracy of policy models trained in real-world environments. Through extensive experiments, we demonstrate that our method significantly reduces the sim2real domain gap, resulting in higher success rates in real-world policy model training. Our approach offers a scalable solution for generating robust training data and bridging the gap between simulated and real-world robotics.

大型语言模型和世界模型等基础模型的最新进展极大地增强了机器人的能力，使机器人能够自主执行复杂的任务。然而，获取大规模、高质量的机器人训练数据仍然是一个挑战，因为它通常需要大量的手动工作，并且对不同现实环境的覆盖范围有限。为了解决这个问题，我们提出了一种称为组合模拟的新型混合方法，它将经典模拟和神经模拟结合起来，生成准确的动作视频对，同时保持现实世界的一致性。我们的方法利用闭环真实-模拟-真实数据增强管道，利用少量真实世界数据生成多样化的大规模训练数据集，涵盖更广泛的真实世界场景。我们训练神经模拟器将经典模拟视频转换为现实世界的表示，从而提高在现实世界环境中训练的政策模型的准确性。通过大量的实验，我们证明我们的方法显着减少了 sim2real 域差距，从而在现实世界的政策模型训练中获得更高的成功率。我们的方法提供了一个可扩展的解决方案，用于生成强大的训练数据并缩小模拟机器人与现实世界机器人之间的差距。

</details>

---

## 4. WM-DAgger: Enabling Efficient Data Aggregation for Imitation Learning with World Models / WM-DAgger：利用世界模型实现模仿学习的高效数据聚合

**Date**: 2026-04-13 | **arXiv**: [2604.11351v1](http://arxiv.org/abs/2604.11351v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.11351v1)

**Categories**: cs.RO

**Code**: https://github.com/czs12354-xxdbd/WM-Dagger.

<details><summary><b>Abstract / 摘要</b></summary>

Imitation learning is a powerful paradigm for training robotic policies, yet its performance is limited by compounding errors: minor policy inaccuracies could drive robots into unseen out-of-distribution (OOD) states in the training set, where the policy could generate even bigger errors, leading to eventual failures. While the Data Aggregation (DAgger) framework tries to address this issue, its reliance on continuous human involvement severely limits scalability. In this paper, we propose WM-DAgger, an efficient data aggregation framework that leverages World Models to synthesize OOD recovery data without requiring human involvement. Specifically, we focus on manipulation tasks with an eye-in-hand robotic arm and only few-shot demonstrations. To avoid synthesizing misleading data and overcome the hallucination issues inherent to World Models, our framework introduces two key mechanisms: (1) a Corrective Action Synthesis Module that generates task-oriented recovery actions to prevent misleading supervision, and (2) a Consistency-Guided Filtering Module that discards physically implausible trajectories by anchoring terminal synthesized frames to corresponding real frames in expert demonstrations. We extensively validate WM-DAgger on multiple real-world robotic tasks. Results that our method significantly improves success rates, achieving a 93.3\% success rate in soft bag pushing with only five demonstrations. The source code is publicly available at https://github.com/czs12354-xxdbd/WM-Dagger.

模仿学习是训练机器人策略的强大范例，但其性能受到复合错误的限制：微小的策略不准确可能会导致机器人进入训练集中看不见的分布外（OOD）状态，在这种状态下，策略可能会产生更大的错误，导致最终失败。虽然数据聚合（DAgger）框架试图解决这个问题，但它对持续人类参与的依赖严重限制了可扩展性。在本文中，我们提出了 WM-DAgger，这是一种高效的数据聚合框架，它利用世界模型来合成 OOD 恢复数据，而无需人工参与。具体来说，我们专注于使用手眼机械臂进行操作任务，并且仅进行少量演示。为了避免合成误导性数据并克服世界模型固有的幻觉问题，我们的框架引入了两个关键机制：（1）纠正动作合成模块，生成面向任务的恢复动作以防止误导性监督；（2）一致性引导过滤模块，通过将终端合成帧锚定到专家演示中相应的真实帧来丢弃物理上不可信的轨迹。我们在多个现实世界的机器人任务上广泛验证了 WM-DAgger。结果表明，我们的方法显着提高了成功率，仅经过 5 次演示，就实现了 93.3% 的软包推送成功率。源代码可在 https://github.com/czs12354-xxdbd/WM-Dagger 上公开获取。

</details>

---

## 5. 3D-Anchored Lookahead Planning for Persistent Robotic Scene Memory via World-Model-Based MCTS / 通过基于世界模型的 MCTS 进行持久机器人场景记忆的 3D 锚定前瞻规划

**Date**: 2026-04-13 | **arXiv**: [2604.11302v1](http://arxiv.org/abs/2604.11302v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.11302v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

We present 3D-Anchored Lookahead Planning (3D-ALP), a System 2 reasoning engine for robotic manipulation that combines Monte Carlo Tree Search (MCTS) with a 3D-consistent world model as the rollout oracle. Unlike reactive policies that evaluate actions from the current camera frame only, 3D-ALP maintains a persistent camera-to-world (c2w) anchor that survives occlusion, enabling accurate replanning to object positions that are no longer directly observable. On a 5-step sequential reach task requiring spatial memory (Experiment E3), 3D-ALP achieves 0.650 0.109 success rate on memory-required steps versus 0.006 0.008 for a greedy reactive baseline (Δ=+0.645), while step 5 success reaches 0.822 against 0.000 for greedy. An ablation study (30 episodes, 3 seeds) isolates tree search spatial memory as the primary driver (+0.533, 82% of gain) with additional benefit from deeper lookahead (+0.111, 17%). We also identify and resolve four structural failure modes in applying UCT-MCTS (Upper Confidence Bounds applied to Trees [10]) to continuous robotic manipulation.

我们提出了 3D 锚定前瞻规划 (3D-ALP)，这是一种用于机器人操作的 System 2 推理引擎，它将蒙特卡洛树搜索 (MCTS) 与 3D 一致的世界模型结合起来作为推出预言机。与仅评估当前相机帧的动作的反应性策略不同，3D-ALP 维护一个持久的相机到世界 (c2w) 锚点，该锚点在遮挡情况下仍能幸存，从而能够准确地重新规划不再直接观察到的对象位置。在需要空间记忆的 5 步顺序到达任务中（实验 E3），3D-ALP 在需要记忆的步骤上实现了 0.650 0.109 的成功率，而贪婪反应基线的成功率为 0.006 0.008 (Δ=+0.645)，而第 5 步的成功率达到 0.822，而贪婪的成功率为 0.000。消融研究（30 集，3 个种子）将树搜索空间记忆作为主要驱动因素（+0.533，增益的 82%），并从更深入的前瞻中获得额外的好处（+0.111，17%）。我们还在将 UCT-MCTS（应用于树木的置信上限 [10]）应用于连续机器人操作时识别并解决了四种结构故障模式。

</details>

---

## 6. OccuBench: Evaluating AI Agents on Real-World Professional Tasks via Language World Models / OccuBench：通过语言世界模型评估人工智能代理在现实世界专业任务中的表现

**Date**: 2026-04-13 | **arXiv**: [2604.10866v1](http://arxiv.org/abs/2604.10866v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.10866v1)

**Categories**: cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

AI agents are expected to perform professional work across hundreds of occupational domains (from emergency department triage to nuclear reactor safety monitoring to customs import processing), yet existing benchmarks can only evaluate agents in the few domains where public environments exist. We introduce OccuBench, a benchmark covering 100 real-world professional task scenarios across 10 industry categories and 65 specialized domains, enabled by Language World Models (LWMs) that simulate domain-specific environments through LLM-driven tool response generation. Our multi-agent synthesis pipeline automatically produces evaluation instances with guaranteed solvability, calibrated difficulty, and document-grounded diversity. OccuBench evaluates agents along two complementary dimensions: task completion across professional domains and environmental robustness under controlled fault injection (explicit errors, implicit data degradation, and mixed faults). We evaluate 15 frontier models across 8 model families and find that: (1) no single model dominates all industries, as each has a distinct occupational capability profile; (2) implicit faults (truncated data, missing fields) are harder than both explicit errors (timeouts, 500s) and mixed faults, because they lack overt error signals and require the agent to independently detect data degradation; (3) larger models, newer generations, and higher reasoning effort consistently improve performance. GPT-5.2 improves by 27.5 points from minimal to maximum reasoning effort; and (4) strong agents are not necessarily strong environment simulators. Simulator quality is critical for LWM-based evaluation reliability. OccuBench provides the first systematic cross-industry evaluation of AI agents on professional occupational tasks.

人工智能代理预计将在数百个职业领域（从急诊室分诊到核反应堆安全监控到海关进口处理）执行专业工作，但现有基准只能评估公共环境存在的少数领域的代理。我们推出 OccuBench，这是一个涵盖 10 个行业类别和 65 个专业领域的 100 个真实专业任务场景的基准测试，由语言世界模型 (LWM) 启用，该模型通过 LLM 驱动的工具响应生成来模拟特定领域的环境。我们的多智能体合成管道自动生成具有保证可解性、校准难度和基于文档的多样性的评估实例。 OccuBench 按照两个互补的维度评估代理：跨专业领域的任务完成情况和受控故障注入（显式错误、隐式数据降级和混合故障）下的环境鲁棒性。我们评估了 8 个模型系列中的 15 个前沿模型，发现：（1）没有一个模型能够主导所有行业，因为每个模型都有不同的职业能力特征； (2) 隐式错误（截断数据、丢失字段）比显式错误（超时、500 秒）和混合错误更难，因为它们缺乏明显的错误信号，并且需要代理独立检测数据降级； (3) 更大的模型、更新的世代和更高的推理能力不断提高性能。 GPT-5.2 从最小推理到最大推理工作提高了 27.5 分； (4)强代理不一定是强环境模拟器。模拟器质量对于基于 LWM 的评估可靠性至关重要。 OccuBench 首次对 AI 代理在专业职业任务上进行系统性跨行业评估。

</details>

---



</details>

<details><summary><b>2026-04-13 (2 papers)</b></summary>

# arXiv World Model Papers - 2026-04-13

**Paper Count**: 2

---

## 1. Toward World Models for Epidemiology / 走向流行病学的世界模型

**Date**: 2026-04-10 | **arXiv**: [2604.09519v1](http://arxiv.org/abs/2604.09519v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.09519v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

World models have emerged as a unifying paradigm for learning latent dynamics, simulating counterfactual futures, and supporting planning under uncertainty. In this paper, we argue that computational epidemiology is a natural and underdeveloped setting for world models. This is because epidemic decision-making requires reasoning about latent disease burden, imperfect and policy-dependent surveillance signals, and intervention effects are mediated by adaptive human behavior. We introduce a conceptual framework for epidemiological world models, formulating epidemics as controlled, partially observed dynamical systems in which (i) the true epidemic state is latent, (ii) observations are noisy and endogenous to policy, and (iii) interventions act as sequential actions whose effects propagate through behavioral and social feedback. We present three case studies that illustrate why explicit world modeling is necessary for policy-relevant reasoning: strategic misreporting in behavioral surveillance, systematic delays in time-lagged signals such as hospitalizations and deaths, and counterfactual intervention analysis where identical histories diverge under alternative action sequences.

世界模型已成为学习潜在动态、模拟反事实未来以及支持不确定性下的规划的统一范式。在本文中，我们认为计算流行病学是世界模型的自然且不发达的环境。这是因为流行病决策需要对潜在疾病负担、不完善且依赖于政策的监测信号进行推理，而干预效果是由适应性人类行为介导的。我们引入了流行病学世界模型的概念框架，将流行病制定为受控、部分观察的动态系统，其中（i）真正的流行病状态是潜在的，（ii）观察结果是嘈杂的且内生于政策，以及（iii）干预措施作为顺序行动，其影响通过行为和社会反馈传播。我们提出了三个案例研究，说明为什么明确的世界模型对于政策相关推理是必要的：行为监测中的战略误报、住院和死亡等滞后信号的系统性延迟，以及反事实干预分析，其中相同的历史在替代行动序列下出现分歧。

</details>

---

## 2. PhysInOne: Visual Physics Learning and Reasoning in One Suite / PhysInOne：一套视觉物理学习和推理工具

**Date**: 2026-04-10 | **arXiv**: [2604.09415v1](http://arxiv.org/abs/2604.09415v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.09415v1)

**Categories**: cs.CV, cs.AI, cs.LG, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

We present PhysInOne, a large-scale synthetic dataset addressing the critical scarcity of physically-grounded training data for AI systems. Unlike existing datasets limited to merely hundreds or thousands of examples, PhysInOne provides 2 million videos across 153,810 dynamic 3D scenes, covering 71 basic physical phenomena in mechanics, optics, fluid dynamics, and magnetism. Distinct from previous works, our scenes feature multiobject interactions against complex backgrounds, with comprehensive ground-truth annotations including 3D geometry, semantics, dynamic motion, physical properties, and text descriptions. We demonstrate PhysInOne's efficacy across four emerging applications: physics-aware video generation, long-/short-term future frame prediction, physical property estimation, and motion transfer. Experiments show that fine-tuning foundation models on PhysInOne significantly enhances physical plausibility, while also exposing critical gaps in modeling complex physical dynamics and estimating intrinsic properties. As the largest dataset of its kind, orders of magnitude beyond prior works, PhysInOne establishes a new benchmark for advancing physics-grounded world models in generation, simulation, and embodied AI.

我们推出了 PhysInOne，这是一个大规模合成数据集，解决了人工智能系统物理训练数据严重匮乏的问题。与仅限于数百或数千个示例的现有数据集不同，PhysInOne 提供了 200 万个视频，涵盖 153,810 个动态 3D 场景，涵盖力学、光学、流体动力学和磁学方面的 71 种基本物理现象。与之前的作品不同，我们的场景以复杂背景下的多对象交互为特色，并具有全面的真实注释，包括 3D 几何、语义、动态运动、物理属性和文本描述。我们展示了 PhysInOne 在四个新兴应用中的功效：物理感知视频生成、长期/短期未来帧预测、物理属性估计和运动传输。实验表明，在 PhysInOne 上微调基础模型可显着增强物理合理性，同时也暴露出复杂物理动力学建模和内在属性估计方面的关键差距。作为同类中最大的数据集，其数量级超出了之前的工作，PhysInOne 为在生成、模拟和具体人工智能方面推进基于物理的世界模型建立了新的基准。

</details>

---



</details>

<details><summary><b>2026-04-10 (7 papers)</b></summary>

# arXiv World Model Papers - 2026-04-10

**Paper Count**: 7

---

## 1. Grounding Clinical AI Competency in Human Cognition Through the Clinical World Model and Skill-Mix Framework / 通过临床世界模型和技能组合框架将临床人工智能能力植根于人类认知

**Date**: 2026-04-09 | **arXiv**: [2604.08226v1](http://arxiv.org/abs/2604.08226v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.08226v1)

**Categories**: cs.AI, cs.HC, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

The competency of any intelligent agent is bounded by its formal account of the world in which it operates. Clinical AI lacks such an account. Existing frameworks address evaluation, regulation, or system design in isolation, without a shared model of the clinical world to connect them. We introduce the Clinical World Model, a framework that formalizes care as a tripartite interaction among Patient, Provider, and Ecosystem. To formalize how any agent, whether human or artificial, transforms information into clinical action, we develop parallel decision-making architectures for providers, patients, and AI agents, grounded in validated principles of clinical cognition.   The Clinical AI Skill-Mix operationalizes competency through eight dimensions. Five define the clinical competency space (condition, phase, care setting, provider role, and task) and three specify how AI engages human reasoning (assigned authority, agent facing, and anchoring layer). The combinatorial product of these dimensions yields a space of billions of distinct competency coordinates. A central structural implication is that validation within one coordinate provides minimal evidence for performance in another, rendering the competency space irreducible. The framework supplies a common grammar through which clinical AI can be specified, evaluated, and bounded across stakeholders. By making this structure explicit, the Clinical World Model reframes the field's central question from whether AI works to in which competency coordinates reliability has been demonstrated, and for whom.

任何智能代理的能力都受到其对其运作的世界的正式描述的限制。临床人工智能缺乏这样的账户。现有框架单独处理评估、监管或系统设计，没有临床世界的共享模型来连接它们。我们引入了临床世界模型，该框架将护理形式化为患者、提供者和生态系统之间的三方互动。为了正式确定任何代理（无论是人类还是人工）如何将信息转化为临床行动，我们基于经过验证的临床认知原则，为提供者、患者和人工智能代理开发并行决策架构。   临床人工智能技能组合通过八个维度来发挥能力。其中五个定义了临床能力空间（条件、阶段、护理环境、提供者角色和任务），三个指定了人工智能如何参与人类推理（分配的权限、面向代理和锚定层）。这些维度的组合乘积产生了数十亿个不同能力坐标的空间。一个中心结构含义是，一个坐标内的验证为另一个坐标内的绩效提供了最少的证据，从而使能力空间不可简化。该框架提供了一个通用语法，通过该语法可以在利益相关者之间指定、评估和界定临床人工智能。通过使这种结构变得明确，临床世界模型重新构建了该领域的核心问题：人工智能是否有效，能力协调可靠性已得到证明，以及对谁有效。

</details>

---

## 2. How Far Are Large Multimodal Models from Human-Level Spatial Action? A Benchmark for Goal-Oriented Embodied Navigation in Urban Airspace / 大型多模态模型距离人类水平的空间行动还有多远？城市空域目标导向的嵌入式导航基准

**Date**: 2026-04-09 | **arXiv**: [2604.07973v1](http://arxiv.org/abs/2604.07973v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.07973v1)

**Categories**: cs.AI

**Code**: https://github.com/serenditipy-AC/Embodied-Navigation-Bench.

<details><summary><b>Abstract / 摘要</b></summary>

Large multimodal models (LMMs) show strong visual-linguistic reasoning but their capacity for spatial decision-making and action remains unclear. In this work, we investigate whether LMMs can achieve embodied spatial action like human through a challenging scenario: goal-oriented navigation in urban 3D spaces. We first spend over 500 hours constructing a dataset comprising 5,037 high-quality goal-oriented navigation samples, with an emphasis on 3D vertical actions and rich urban semantic information. Then, we comprehensively assess 17 representative models, including non-reasoning LMMs, reasoning LMMs, agent-based methods, and vision-language-action models. Experiments show that current LMMs exhibit emerging action capabilities, yet remain far from human-level performance. Furthermore, we reveal an intriguing phenomenon: navigation errors do not accumulate linearly but instead diverge rapidly from the destination after a critical decision bifurcation. The limitations of LMMs are investigated by analyzing their behavior at these critical decision bifurcations. Finally, we experimentally explore four promising directions for improvement: geometric perception, cross-view understanding, spatial imagination, and long-term memory. The project is available at: https://github.com/serenditipy-AC/Embodied-Navigation-Bench.

大型多模态模型（LMM）显示出强大的视觉语言推理能力，但其空间决策和行动的能力仍不清楚。在这项工作中，我们研究了 LMM 是否可以通过具有挑战性的场景（城市 3D 空间中的目标导向导航）实现像人类一样的具体空间动作。我们首先花费 500 多个小时构建一个包含 5,037 个高质量目标导向导航样本的数据集，重点关注 3D 垂直动作和丰富的城市语义信息。然后，我们全面评估了 17 个代表性模型，包括非推理 LMM、推理 LMM、基于代理的方法和视觉-语言-动作模型。实验表明，当前的 LMM 表现出新兴的行动能力，但与人类水平的表现仍相距甚远。此外，我们揭示了一个有趣的现象：导航误差不会线性累积，而是在关键决策分叉后迅速偏离目的地。通过分析 LMM 在这些关键决策分叉处的行为，研究了 LMM 的局限性。最后，我们通过实验探索了四个有希望的改进方向：几何感知、跨视图理解、空间想象力和长期记忆。该项目位于：https://github.com/serenditipy-AC/Embodied-Navigation-Bench。

</details>

---

## 3. WorldMAP: Bootstrapping Vision-Language Navigation Trajectory Prediction with Generative World Models / WorldMAP：使用生成世界模型引导视觉语言导航轨迹预测

**Date**: 2026-04-09 | **arXiv**: [2604.07957v1](http://arxiv.org/abs/2604.07957v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.07957v1)

**Categories**: cs.AI, cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Vision-language models (VLMs) and generative world models are opening new opportunities for embodied navigation. VLMs are increasingly used as direct planners or trajectory predictors, while world models support look-ahead reasoning by imagining future views. Yet predicting a reliable trajectory from a single egocentric observation remains challenging. Current VLMs often generate unstable trajectories, and world models, though able to synthesize plausible futures, do not directly provide the grounded signals needed for navigation learning. This raises a central question: how can generated futures be turned into supervision for grounded trajectory prediction? We present WorldMAP, a teacher--student framework that converts world-model-generated futures into persistent semantic-spatial structure and planning-derived supervision. Its world-model-driven teacher builds semantic-spatial memory from generated videos, grounds task-relevant targets and obstacles, and produces trajectory pseudo-labels through explicit planning. A lightweight student with a multi-hypothesis trajectory head is then trained to predict navigation trajectories directly from vision-language inputs. On Target-Bench, WorldMAP achieves the best ADE and FDE among compared methods, reducing ADE by 18.0% and FDE by 42.1% relative to the best competing baseline, while lifting a small open-source VLM to DTW performance competitive with proprietary models. More broadly, the results suggest that, in embodied navigation, the value of world models may lie less in supplying action-ready imagined evidence than in synthesizing structured supervision for navigation learning.

视觉语言模型（VLM）和生成世界模型正在为具身导航带来新的机遇。 VLM 越来越多地用作直接规划器或轨迹预测器，而世界模型通过想象未来视图来支持前瞻推理。然而，从单一的以自我为中心的观察中预测可靠的轨迹仍然具有挑战性。当前的 VLM 通常会生成不稳定的轨迹，而世界模型虽然能够合成合理的未来，但不能直接提供导航学习所需的接地信号。这就提出了一个核心问题：如何将生成的期货转化为对接地轨迹预测的监督？我们提出了 WorldMAP，一个师生框架，它将世界模型生成的未来转换为持久的语义空间结构和规划衍生的监督。其世界模型驱动的教师从生成的视频中构建语义空间记忆，为与任务相关的目标和障碍奠定基础，并通过显式规划生成轨迹伪标签。然后，训练具有多假设轨迹头的轻量级学生直接根据视觉语言输入预测导航轨迹。在 Target-Bench 上，WorldMAP 在比较方法中实现了最佳的 ADE 和 FDE，相对于最佳竞争基准，将 ADE 降低了 18.0%，将 FDE 降低了 42.1%，同时将小型开源 VLM 提升到了与专有模型相媲美的 DTW 性能。更广泛地说，结果表明，在具体导航中，世界模型的价值可能不在于提供行动就绪的想象证据，而在于综合导航学习的结构化监督。

</details>

---

## 4. DailyArt: Discovering Articulation from Single Static Images via Latent Dynamics / DailyArt：通过潜在动态发现单个静态图像的清晰度

**Date**: 2026-04-09 | **arXiv**: [2604.07758v1](http://arxiv.org/abs/2604.07758v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.07758v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Articulated objects are essential for embodied AI and world models, yet inferring their kinematics from a single closed-state image remains challenging because crucial motion cues are often occluded. Existing methods either require multi-state observations or rely on explicit part priors, retrieval, or other auxiliary inputs that partially expose the structure to be inferred. In this work, we present DailyArt, which formulates articulated joint estimation from a single static image as a synthesis-mediated reasoning problem. Instead of directly regressing joints from a heavily occluded observation, DailyArt first synthesizes a maximally articulated opened state under the same camera view to expose articulation cues, and then estimates the full set of joint parameters from the discrepancy between the observed and synthesized states. Using a set-prediction formulation, DailyArt recovers all joints simultaneously without requiring object-specific templates, multi-view inputs, or explicit part annotations at test time. Taking estimated joints as conditions, the framework further supports part-level novel state synthesis as a downstream capability. Extensive experiments show that DailyArt achieves strong performance in articulated joint estimation and supports part-level novel state synthesis conditioned on joints. Project page is available at https://rangooo123.github.io/DaliyArt.github.io/.

铰接物体对于具体人工智能和世界模型至关重要，但从单个闭合状态图像推断其运动学仍然具有挑战性，因为关键的运动线索经常被遮挡。现有方法要么需要多状态观察，要么依赖于显式部分先验、检索或其他部分暴露要推断的结构的辅助输入。在这项工作中，我们提出了 DailyArt，它将单个静态图像的关节联合估计表述为合成介导的推理问题。 DailyArt 不是直接从严重遮挡的观察中回归关节，而是首先在同一摄像机视图下合成最大关节打开状态以暴露关节线索，然后根据观察到的状态与合成状态之间的差异估计全套关节参数。使用集合预测公式，DailyArt 可同时恢复所有关节，而无需在测试时使用特定于对象的模板、多视图输入或显式零件注释。以估计的关节为条件，该框架进一步支持部分级新状态合成作为下游功能。大量实验表明，DailyArt 在关节估计方面取得了强大的性能，并支持以关节为条件的部分级新颖状态合成。项目页面位于 https://rangooo123.github.io/DaliyArt.github.io/。

</details>

---

## 5. CausalVAE as a Plug-in for World Models: Towards Reliable Counterfactual Dynamics / CausalVAE 作为世界模型的插件：迈向可靠的反事实动态

**Date**: 2026-04-09 | **arXiv**: [2604.07712v1](http://arxiv.org/abs/2604.07712v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.07712v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

In this work, CausalVAE is introduced as a plug-in structural module for latent world models and is attached to diverse encoder-transition backbones. Across the reported benchmarks, competitive factual prediction is preserved and intervention-aware counterfactual retrieval is improved after the plug-in is added, suggesting stronger robustness under distribution shift and interventions. The largest gains are observed on the Physics benchmark: when averaged over 8 paired baselines, CF-H@1 is improved by +102.5%. In a representative GNN-NLL setting on Physics, CF-H@1 is increased from 11.0 to 41.0 (+272.7%). Through causal analysis, learned structural dependencies are shown to recover meaningful first-order physical interaction trends, supporting the interpretability of the learned latent causal structure.

在这项工作中，CausalVAE 作为潜在世界模型的插件结构模块引入，并附加到不同的编码器转换主干上。在报告的基准中，添加插件后，竞争性事实预测得以保留，干预感知的反事实检索得到改善，这表明在分布转移和干预下具有更强的鲁棒性。最大的增益是在物理基准上观察到的：当对 8 个配对基线进行平均时，CF-H@1 提高了 +102.5%。在物理学的代表性 GNN-NLL 设置中，CF-H@1 从 11.0 增加到 41.0 (+272.7%)。通过因果分析，学习到的结构依赖性可以恢复有意义的一阶物理交互趋势，支持学习到的潜在因果结构的可解释性。

</details>

---

## 6. GIRL: Generative Imagination Reinforcement Learning via Information-Theoretic Hallucination Control / 女孩：通过信息理论幻觉控制生成想象力强化学习

**Date**: 2026-04-08 | **arXiv**: [2604.07426v1](http://arxiv.org/abs/2604.07426v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.07426v1)

**Categories**: cs.LG, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Model-based reinforcement learning (MBRL) improves sample efficiency by optimizing policies inside imagined rollouts, but long-horizon planning degrades when model errors compound and imagined trajectories drift off the training manifold. We introduce GIRL (Generative Imagination Reinforcement Learning), a latent world-model framework that addresses this failure mode with two key components. First, a cross-modal grounding signal derived from a frozen foundation model (DINOv2) anchors the latent transition prior to a semantically consistent embedding space, penalizing inconsistent or implausible predictions. Second, an uncertainty-adaptive trust-region bottleneck interprets the KL regularizer as the Lagrange multiplier of a constrained optimization problem, restricting imagination drift within a learned region calibrated by Expected Information Gain and a Relative Performance Loss signal.   We re-derive a value-gap bound using the Performance Difference Lemma and Integral Probability Metrics, yielding a bound that remains informative as the discount factor approaches one and connects the objective to real-environment regret. Experiments across three benchmark suites, including DeepMind Control, Adroit Hand Manipulation, and Meta-World with visual distractors, show that GIRL reduces latent rollout drift by 38 to 61 percent across tasks relative to DreamerV3, improves asymptotic return, and requires fewer environment interactions on long-horizon tasks. GIRL also outperforms TD-MPC2 on sparse-reward and high-contact settings under standard evaluation metrics. A distilled-prior variant reduces inference overhead and improves computational efficiency relative to the full model.

基于模型的强化学习 (MBRL) 通过优化想象中的部署内的策略来提高样本效率，但当模型错误复合且想象的轨迹偏离训练流形时，长期规划就会降低。我们引入了 GIRL（生成想象力强化学习），这是一个潜在的世界模型框架，它通过两个关键组件解决了这种故障模式。首先，从冻结基础模型 (DINOv2) 派生的跨模态接地信号将潜在转变锚定在语义一致的嵌入空间之前，从而惩罚不一致或不可信的预测。其次，不确定性自适应信赖域瓶颈将 KL 正则化器解释为约束优化问题的拉格朗日乘子，限制由预期信息增益和相对性能损失信号校准的学习区域内的想象漂移。   我们使用性能差异引理和积分概率度量重新推导价值差距界限，产生一个界限，当折扣因子接近 1 并将目标与真实环境遗憾联系起来时，该界限仍能提供信息。三个基准测试套件（包括 DeepMind Control、Adroit Hand Manipulation 和带有视觉干扰物的 Meta-World）的实验表明，相对于 DreamerV3，GIRL 将跨任务的潜在推出漂移降低了 38% 到 61%，提高了渐近回报，并且在长期任务中需要更少的环境交互。在标准评估指标下，GIRL 在稀疏奖励和高接触设置方面也优于 TD-MPC2。相对于完整模型，蒸馏先验变体可减少推理开销并提高计算效率。

</details>

---

## 7. How Much LLM Does a Self-Revising Agent Actually Need? / 自修代理人实际需要多少LLM？

**Date**: 2026-04-08 | **arXiv**: [2604.07236v2](http://arxiv.org/abs/2604.07236v2) | **PDF**: [Link](http://arxiv.org/pdf/2604.07236v2)

**Categories**: cs.AI, cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

Recent LLM-based agents often place world modeling, planning, and reflection inside a single language model loop. This can produce capable behavior, but it makes a basic scientific question difficult to answer: which part of the agent's competence actually comes from the LLM, and which part comes from explicit structure around it?   We study this question not by claiming a general answer, but by making it empirically tractable. We introduce a declared reflective runtime protocol that externalizes agent state, confidence signals, guarded actions, and hypothetical transitions into inspectable runtime structure. We instantiate this protocol in a declarative runtime and evaluate it on noisy Collaborative Battleship [4] using four progressively structured agents over 54 games (18 boards $\times$ 3 seeds).   The resulting decomposition isolates four components: posterior belief tracking, explicit world-model planning, symbolic in-episode reflection, and sparse LLM-based revision. Across this decomposition, explicit world-model planning improves substantially over a greedy posterior-following baseline (+24.1pp win rate, +0.017 F1). Symbolic reflection operates as a real runtime mechanism -- with prediction tracking, confidence gating, and guarded revision actions -- even though its current revision presets are not yet net-positive in aggregate. Adding conditional LLM revision at about 4.3\% of turns yields only a small and non-monotonic change: average F1 rises slightly (+0.005) while win rate drops (31$\rightarrow$29 out of 54).   These results suggest a methodological contribution rather than a leaderboard claim: externalizing reflection turns otherwise latent agent behavior into inspectable runtime structure, allowing the marginal role of LLM intervention to be studied directly.

最近基于 LLM 的智能体经常将世界建模、规划和反思置于单一语言模型循环中。这可以产生有能力的行为，但它使得一个基本的科学问题难以回答：代理人能力的哪一部分实际上来自于法学硕士，哪一部分来自于其周围的显式结构？   我们研究这个问题不是通过要求一个普遍的答案，而是通过使其在经验上易于处理。我们引入了一个声明的反射运行时协议，它将代理状态、置信信号、受保护的操作和假设的转换外部化为可检查的运行时结构。我们在声明性运行时实例化该协议，并在 54 场游戏（18 个棋盘 $\times$ 3 个种子）中使用四个渐进结构化代理在嘈杂的协作战舰 [4] 上对其进行评估。   由此产生的分解分离出四个组成部分：后验信念跟踪、显式世界模型规划、象征性的情节内反射和基于稀疏 LLM 的修订。通过这种分解，显式的世界模型规划比贪婪的后验基线（+24.1pp 获胜率，+0.017 F1）有了显着改善。符号反射作为一种真正的运行时机制运行——具有预测跟踪、置信门控和受保护的修订操作——尽管其当前的修订预设总体上尚未达到净正值。在大约 4.3% 的回合中添加有条件的 LLM 修订只会产生很小的非单调变化：平均 F1 略有上升（+0.005），而胜率下降（54 中的 31$\rightarrow$29）。   这些结果表明了方法论的贡献，而不是排行榜的主张：外部化反射将其他潜在的代理行为转变为可检查的运行时结构，从而允许直接研究法学硕士干预的边际作用。

</details>

---



</details>

<details><summary><b>2026-04-09 (4 papers)</b></summary>

# arXiv World Model Papers - 2026-04-09

**Paper Count**: 4

---

## 1. How Much LLM Does a Self-Revising Agent Actually Need? / 自修代理人实际需要多少LLM？

**Date**: 2026-04-08 | **arXiv**: [2604.07236v1](http://arxiv.org/abs/2604.07236v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.07236v1)

**Categories**: cs.AI, cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

Recent LLM-based agents often place world modeling, planning, and reflection inside a single language model loop. This can produce capable behavior, but it makes a basic scientific question difficult to answer: which part of the agent's competence actually comes from the LLM, and which part comes from explicit structure around it?   We study this question not by claiming a general answer, but by making it empirically tractable. We introduce a declared reflective runtime protocol that externalizes agent state, confidence signals, guarded actions, and hypothetical transitions into inspectable runtime structure. We instantiate this protocol in a declarative runtime and evaluate it on noisy Collaborative Battleship [4] using four progressively structured agents over 54 games (18 boards $\times$ 3 seeds).   The resulting decomposition isolates four components: posterior belief tracking, explicit world-model planning, symbolic in-episode reflection, and sparse LLM-based revision. Across this decomposition, explicit world-model planning improves substantially over a greedy posterior-following baseline (+24.1pp win rate, +0.017 F1). Symbolic reflection operates as a real runtime mechanism -- with prediction tracking, confidence gating, and guarded revision actions -- even though its current revision presets are not yet net-positive in aggregate. Adding conditional LLM revision at about 4.3\% of turns yields only a small and non-monotonic change: average F1 rises slightly (+0.005) while win rate drops (31$\rightarrow$29 out of 54).   These results suggest a methodological contribution rather than a leaderboard claim: externalizing reflection turns otherwise latent agent behavior into inspectable runtime structure, allowing the marginal role of LLM intervention to be studied directly.

最近基于 LLM 的智能体经常将世界建模、规划和反思置于单一语言模型循环中。这可以产生有能力的行为，但它使得一个基本的科学问题难以回答：代理人能力的哪一部分实际上来自于法学硕士，哪一部分来自于其周围的显式结构？   我们研究这个问题不是通过要求一个普遍的答案，而是通过使其在经验上易于处理。我们引入了一个声明的反射运行时协议，它将代理状态、置信信号、受保护的操作和假设的转换外部化为可检查的运行时结构。我们在声明性运行时实例化该协议，并在 54 场游戏（18 个棋盘 $\times$ 3 个种子）中使用四个渐进结构化代理在嘈杂的协作战舰 [4] 上对其进行评估。   由此产生的分解分离出四个组成部分：后验信念跟踪、显式世界模型规划、象征性的情节内反射和基于稀疏 LLM 的修订。通过这种分解，显式的世界模型规划比贪婪的后验基线（+24.1pp 获胜率，+0.017 F1）有了显着改善。符号反射作为一种真正的运行时机制运行——具有预测跟踪、置信门控和受保护的修订操作——尽管其当前的修订预设总体上尚未达到净正值。在大约 4.3% 的回合中添加有条件的 LLM 修订只会产生很小的非单调变化：平均 F1 略有上升（+0.005），而胜率下降（54 中的 31$\rightarrow$29）。   这些结果表明了方法论的贡献，而不是排行榜的主张：外部化反射将其他潜在的代理行为转变为可检查的运行时结构，从而允许直接研究法学硕士干预的边际作用。

</details>

---

## 2. Telecom World Models: Unifying Digital Twins, Foundation Models, and Predictive Planning for 6G / 电信世界模型：统一 6G 数字孪生、基础模型和预测规划

**Date**: 2026-04-08 | **arXiv**: [2604.06882v1](http://arxiv.org/abs/2604.06882v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.06882v1)

**Categories**: cs.RO, eess.SP, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

The integration of machine learning tools into telecom networks, has led to two prevailing paradigms, namely, language-based systems, such as Large Language Models (LLMs), and physics-based systems, such as Digital Twins (DTs). While LLM-based approaches enable flexible interaction and automation, they lack explicit representations of network dynamics. DTs, in contrast, offer a high-fidelity network simulation, but remain scenario-specific and are not designed for learning or decision-making under uncertainty. This gap becomes critical for 6G systems, where decisions must take into account the evolving network states, uncertainty, and the cascading effects of control actions across multiple layers. In this article, we introduce the {Telecom World Model}~(TWM) concept, an architecture for learned, action-conditioned, uncertainty-aware modeling of telecom system dynamics. We decompose the problem into two interacting worlds, a controllable system world consisting of operator-configurable settings and an external world that captures propagation, mobility, traffic, and failures. We propose a three-layer architecture, comprising a field world model for spatial environment prediction, a control/dynamics world model for action-conditioned Key Performance Indicator (KPI) trajectory prediction, and a telecom foundation model layer for intent translation and orchestration. We showcase a comparative analysis between existing paradigms, which demonstrates that TWM jointly provides telecom state grounding, fast action-conditioned roll-outs, calibrated uncertainty, multi-timescale dynamics, model-based planning, and LLM-integrated guardrails. Furthermore, we present a proof-of-concept on network slicing to validate the proposed architecture, showing that the full three-layer pipeline outperforms single-world baselines and accurately predicts KPI trajectories.

机器学习工具与电信网络的集成催生了两种流行的范式，即基于语言的系统，例如大型语言模型（LLM）和基于物理的系统，例如数字孪生（DT）。虽然基于法学硕士的方法可以实现灵活的交互和自动化，但它们缺乏网络动态的明确表示。相比之下，DT 提供高保真网络模拟，但仍然针对特定场景，并且不是为不确定情况下的学习或决策而设计的。这种差距对于 6G 系统变得至关重要，其中决策必须考虑不断变化的网络状态、不确定性以及跨多个层的控制操作的级联效应。在本文中，我们介绍了{电信世界模型}~(TWM) 概念，这是一种用于电信系统动态学习、动作条件、不确定性感知建模的架构。我们将问题分解为两个相互作用的世界，一个由操作员可配置设置组成的可控系统世界和一个捕获传播、移动性、流量和故障的外部世界。我们提出了一个三层架构，包括用于空间环境预测的现场世界模型、用于动作条件关键绩效指标（KPI）轨迹预测的控制/动态世界模型以及用于意图转换和编排的电信基础模型层。我们展示了现有范式之间的比较分析，表明 TWM 共同提供电信状态基础、快速行动条件推出、校准不确定性、多时间尺度动态、基于模型的规划和 LLM 集成护栏。此外，我们提出了网络切片的概念验证，以验证所提出的架构，表明完整的三层管道优于单世界基线并准确预测 KPI 轨迹。

</details>

---

## 3. The Rhetoric of Machine Learning / 机器学习的修辞

**Date**: 2026-04-08 | **arXiv**: [2604.06754v1](http://arxiv.org/abs/2604.06754v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.06754v1)

**Categories**: cs.LG, cs.CY

<details><summary><b>Abstract / 摘要</b></summary>

I examine the technology of machine learning from the perspective of rhetoric, which is simply the art of persuasion. Rather than being a neutral and "objective" way to build "world models" from data, machine learning is (I argue) inherently rhetorical. I explore some of its rhetorical features, and examine one pervasive business model where machine learning is widely used, "manipulation as a service."

我从修辞学的角度审视机器学习技术，这简直就是说服的艺术。机器学习（我认为）本质上是修辞性的，而不是从数据中构建“世界模型”的中立和“客观”方式。我探讨了它的一些修辞特征，并研究了一种广泛使用机器学习的普遍商业模式，即“操作即服务”。

</details>

---

## 4. Neural Computers / 神经计算机

**Date**: 2026-04-07 | **arXiv**: [2604.06425v1](http://arxiv.org/abs/2604.06425v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.06425v1)

**Categories**: cs.LG, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

We propose a new frontier: Neural Computers (NCs) -- an emerging machine form that unifies computation, memory, and I/O in a learned runtime state. Unlike conventional computers, which execute explicit programs, agents, which act over external execution environments, and world models, which learn environment dynamics, NCs aim to make the model itself the running computer. Our long-term goal is the Completely Neural Computer (CNC): the mature, general-purpose realization of this emerging machine form, with stable execution, explicit reprogramming, and durable capability reuse. As an initial step, we study whether early NC primitives can be learned solely from collected I/O traces, without instrumented program state. Concretely, we instantiate NCs as video models that roll out screen frames from instructions, pixels, and user actions (when available) in CLI and GUI settings. These implementations show that learned runtimes can acquire early interface primitives, especially I/O alignment and short-horizon control, while routine reuse, controlled updates, and symbolic stability remain open. We outline a roadmap toward CNCs around these challenges. If overcome, CNCs could establish a new computing paradigm beyond today's agents, world models, and conventional computers.

我们提出了一个新的领域：神经计算机（NC）——一种新兴的机器形式，在学习的运行时状态下统一计算、内存和 I/O。与执行显式程序的传统计算机、在外部执行环境上运行的代理以及学习环境动态的世界模型不同，NC 的目标是使模型本身成为运行的计算机。我们的长期目标是完全神经计算机（CNC）：这种新兴机器形式的成熟、通用实现，具有稳定的执行、显式的重新编程和持久的功能重用。作为第一步，我们研究是否可以仅从收集的 I/O 跟踪中学习早期 NC 原语，而无需检测程序状态。具体来说，我们将 NC 实例化为视频模型，通过 CLI 和 GUI 设置中的指令、像素和用户操作（如果可用）推出屏幕框架。这些实现表明，学习的运行时可以获取早期的接口原语，特别是 I/O 对齐和短范围控制，同时例程重用、受控更新和符号稳定性保持开放。我们围绕这些挑战概述了 CNC 的路线图。如果克服的话，数控系统可以建立一种超越当今代理、世界模型和传统计算机的新计算范式。

</details>

---



</details>

<details><summary><b>2026-04-08 (7 papers)</b></summary>

# arXiv World Model Papers - 2026-04-08

**Paper Count**: 7

---

## 1. Action Images: End-to-End Policy Learning via Multiview Video Generation / 动作图像：通过多视图视频生成进行端到端政策学习

**Date**: 2026-04-07 | **arXiv**: [2604.06168v1](http://arxiv.org/abs/2604.06168v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.06168v1)

**Categories**: cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

World action models (WAMs) have emerged as a promising direction for robot policy learning, as they can leverage powerful video backbones to model the future states. However, existing approaches often rely on separate action modules, or use action representations that are not pixel-grounded, making it difficult to fully exploit the pretrained knowledge of video models and limiting transfer across viewpoints and environments. In this work, we present Action Images, a unified world action model that formulates policy learning as multiview video generation. Instead of encoding control as low-dimensional tokens, we translate 7-DoF robot actions into interpretable action images: multi-view action videos that are grounded in 2D pixels and explicitly track robot-arm motion. This pixel-grounded action representation allows the video backbone itself to act as a zero-shot policy, without a separate policy head or action module. Beyond control, the same unified model supports video-action joint generation, action-conditioned video generation, and action labeling under a shared representation. On RLBench and real-world evaluations, our model achieves the strongest zero-shot success rates and improves video-action joint generation quality over prior video-space world models, suggesting that interpretable action images are a promising route to policy learning.

世界行动模型（WAM）已成为机器人政策学习的一个有前途的方向，因为它们可以利用强大的视频主干来模拟未来状态。然而，现有的方法通常依赖于单独的动作模块，或者使用非像素基础的动作表示，这使得很难充分利用视频模型的预训练知识，并限制跨视点和环境的传输。在这项工作中，我们提出了 Action Images，这是一种统一的世界动作模型，它将策略学习制定为多视图视频生成。我们没有将控制编码为低维标记，而是将 7-DoF 机器人动作转换为可解释的动作图像：基于 2D 像素并明确跟踪机器人手臂运动的多视图动作视频。这种基于像素的动作表示允许视频主干本身充当零镜头策略，无需单独的策略头或动作模块。除了控制之外，同一统一模型还支持共享表示下的视频动作联合生成、动作条件视频生成和动作标记。在 RLBench 和现实世界评估中，我们的模型实现了最强的零镜头成功率，并比之前的视频空间世界模型提高了视频动作联合生成质量，这表明可解释的动作图像是政策学习的一条有前途的途径。

</details>

---

## 2. Toward Consistent World Models with Multi-Token Prediction and Latent Semantic Enhancement / 通过多标记预测和潜在语义增强实现一致的世界模型

**Date**: 2026-04-07 | **arXiv**: [2604.06155v1](http://arxiv.org/abs/2604.06155v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.06155v1)

**Categories**: cs.LG, cs.AI, cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

Whether Large Language Models (LLMs) develop coherent internal world models remains a core debate. While conventional Next-Token Prediction (NTP) focuses on one-step-ahead supervision, Multi-Token Prediction (MTP) has shown promise in learning more structured representations. In this work, we provide a theoretical perspective analyzing the gradient inductive bias of MTP, supported by empirical evidence, showing that MTP promotes the convergence toward internal belief states by inducing representational contractivity via gradient coupling. However, we reveal that standard MTP often suffers from structural hallucinations, where discrete token supervision encourages illegal shortcuts in latent space that violate environmental constraints. To address this, we propose a novel method Latent Semantic Enhancement MTP (LSE-MTP), which anchors predictions to ground-truth hidden state trajectories. Experiments on synthetic graphs and real-world Manhattan Taxi Ride show that LSE-MTP effectively bridges the gap between discrete tokens and continuous state representations, enhancing representation alignment, reducing structural hallucinations, and improving robustness to perturbations.

大型语言模型（LLM）是否开发出连贯的内部世界模型仍然是一个核心争论。虽然传统的下一个令牌预测（NTP）侧重于一步领先的监督，但多令牌预测（MTP）在学习更结构化的表示方面表现出了希望。在这项工作中，我们提供了一个理论视角来分析 MTP 的梯度归纳偏差，并得到经验证据的支持，表明 MTP 通过梯度耦合诱导表征收缩性来促进向内部信念状态的收敛。然而，我们发现标准 MTP 经常遭受结构性幻觉的困扰，其中离散的代币监管鼓励违反环境约束的潜在空间中的非法捷径。为了解决这个问题，我们提出了一种新方法潜在语义增强 MTP (LSE-MTP)，它将预测锚定到真实的隐藏状态轨迹。对合成图和现实世界曼哈顿出租车之旅的实验表明，LSE-MTP 有效地弥合了离散标记和连续状态表示之间的差距，增强了表示对齐，减少了结构幻觉，并提高了对扰动的鲁棒性。

</details>

---

## 3. Cross-fitted Proximal Learning for Model-Based Reinforcement Learning / 基于模型的强化学习的交叉拟合近端学习

**Date**: 2026-04-06 | **arXiv**: [2604.05185v1](http://arxiv.org/abs/2604.05185v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.05185v1)

**Categories**: cs.LG, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

Model-based reinforcement learning is attractive for sequential decision-making because it explicitly estimates reward and transition models and then supports planning through simulated rollouts. In offline settings with hidden confounding, however, models learned directly from observational data may be biased. This challenge is especially pronounced in partially observable systems, where latent factors may jointly affect actions, rewards, and future observations. Recent work has shown that policy evaluation in such confounded partially observable Markov decision processes (POMDPs) can be reduced to estimating reward-emission and observation-transition bridge functions satisfying conditional moment restrictions (CMRs). In this paper, we study the statistical estimation of these bridge functions. We formulate bridge learning as a CMR problem with nuisance objects given by a conditional mean embedding and a conditional density. We then develop a $K$-fold cross-fitted extension of the existing two-stage bridge estimator. The proposed procedure preserves the original bridge-based identification strategy while using the available data more efficiently than a single sample split. We also derive an oracle-comparator bound for the cross-fitted estimator and decompose the resulting error into a Stage I term induced by nuisance estimation and a Stage II term induced by empirical averaging.

基于模型的强化学习对于顺序决策很有吸引力，因为它明确地估计奖励和转换模型，然后通过模拟推出支持规划。然而，在存在隐藏混杂因素的离线环境中，直接从观测数据学习的模型可能会存在偏差。这一挑战在部分可观察的系统中尤其明显，其中潜在因素可能共同影响行动、奖励和未来的观察。最近的工作表明，这种混杂的部分可观察马尔可夫决策过程（POMDP）中的政策评估可以简化为估计满足条件矩限制（CMR）的奖励-排放和观察-转移桥函数。在本文中，我们研究了这些桥函数的统计估计。我们将桥梁学习表述为一个 CMR 问题，其中的干扰对象由条件平均嵌入和条件密度给出。然后，我们开发了现有两级桥估计器的 $K$ 倍交叉拟合扩展。所提出的过程保留了原始的基于桥的识别策略，同时比单个样本分割更有效地使用可用数据。我们还推导了交叉拟合估计器的预言比较器界限，并将所得误差分解为由干扰估计引起的阶段 I 项和由经验平均引起的阶段 II 项。

</details>

---

## 4. StarVLA: A Lego-like Codebase for Vision-Language-Action Model Developing / StarVLA：用于视觉-语言-动作模型开发的类似乐高的代码库

**Date**: 2026-04-06 | **arXiv**: [2604.05014v1](http://arxiv.org/abs/2604.05014v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.05014v1)

**Categories**: cs.RO, cs.AI, cs.CV

**Code**: https://github.com/starVLA/starVLA.

<details><summary><b>Abstract / 摘要</b></summary>

Building generalist embodied agents requires integrating perception, language understanding, and action, which are core capabilities addressed by Vision-Language-Action (VLA) approaches based on multimodal foundation models, including recent advances in vision-language models and world models. Despite rapid progress, VLA methods remain fragmented across incompatible architectures, codebases, and evaluation protocols, hindering principled comparison and reproducibility. We present StarVLA, an open-source codebase for VLA research. StarVLA addresses these challenges in three aspects. First, it provides a modular backbone--action-head architecture that supports both VLM backbones (e.g., Qwen-VL) and world-model backbones (e.g., Cosmos) alongside representative action-decoding paradigms, all under a shared abstraction in which backbone and action head can each be swapped independently. Second, it provides reusable training strategies, including cross-embodiment learning and multimodal co-training, that apply consistently across supported paradigms. Third, it integrates major benchmarks, including LIBERO, SimplerEnv, RoboTwin~2.0, RoboCasa-GR1, and BEHAVIOR-1K, through a unified evaluation interface that supports both simulation and real-robot deployment. StarVLA also ships simple, fully reproducible single-benchmark training recipes that, despite minimal data engineering, already match or surpass prior methods on multiple benchmarks with both VLM and world-model backbones. To our best knowledge, StarVLA is one of the most comprehensive open-source VLA frameworks available, and we expect it to lower the barrier for reproducing existing methods and prototyping new ones. StarVLA is being actively maintained and expanded; we will update this report as the project evolves. The code and documentation are available at https://github.com/starVLA/starVLA.

构建多面手的具体代理需要整合感知、语言理解和行动，这些是基于多模态基础模型（包括视觉语言模型和世界模型的最新进展）的视觉-语言-行动（VLA）方法所解决的核心能力。尽管进展迅速，VLA 方法在不兼容的架构、代码库和评估协议中仍然支离破碎，阻碍了原则性比较和可重复性。我们推出 StarVLA，一个用于 VLA 研究的开源代码库。 StarVLA 从三个方面应对这些挑战。首先，它提供了一个模块化的主干-动作头架构，支持 VLM 主干（例如 Qwen-VL）和世界模型主干（例如 Cosmos）以及代表性的动作解码范例，所有这些都在共享抽象下，其中主干和动作头都可以独立交换。其次，它提供可重复使用的训练策略，包括跨实体学习和多模式协同训练，这些策略在支持的范例中一致应用。第三，它通过统一的评估界面集成了LIBERO、SimplerEnv、RoboTwin~2.0、RoboCasa-GR1和BEHAVIOR-1K等主要基准，支持模拟和真实机器人部署。 StarVLA 还提供了简单、完全可重复的单基准训练方法，尽管数据工程很少，但已经在具有 VLM 和世界模型主干的多个基准上匹配或超越了先前的方法。据我们所知，StarVLA 是最全面的开源 VLA 框架之一，我们期望它能够降低复制现有方法和制作新方法原型的障碍。 StarVLA正在积极维护和扩展；我们将随着项目的进展更新这份报告。代码和文档可在 https://github.com/starVLA/starVLA 获取。

</details>

---

## 5. Veo-Act: How Far Can Frontier Video Models Advance Generalizable Robot Manipulation? / Veo-Act：前沿视频模型可以将通用机器人操作推进多远？

**Date**: 2026-04-06 | **arXiv**: [2604.04502v1](http://arxiv.org/abs/2604.04502v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.04502v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Video generation models have advanced rapidly and are beginning to show a strong understanding of physical dynamics. In this paper, we investigate how far an advanced video generation model such as Veo-3 can support generalizable robotic manipulation. We first study a zero-shot approach in which Veo-3 predicts future image sequences from current robot observations, while an inverse dynamics model IDM recovers the corresponding robot actions. The IDM is trained solely on random-play data, requiring neither human supervision nor expert demonstrations. The key intuition is that, if a video model can generate physically plausible future motions in image space, an IDM can translate those visual trajectories into executable robot actions. We evaluate this "Veo-3+IDM" approach in both simulation and the real world using a high-dimensional dexterous hand. We find that, owing to the strong generalization capability of frontier video models, Veo-3+IDM can consistently generate approximately correct task-level trajectories. However, its low-level control accuracy remains insufficient to solve most tasks reliably. Motivated by this observation, we develop a hierarchical framework, Veo-Act, which uses Veo-3 as a high-level motion planner and a VLA policy as the low-level executor, significantly improving the instruction-following performance of a state-of-the-art vision-language-action policy. Overall, our results suggest that, as video generation models continue to improve, video models can be a valuable component for generalizable robot learning.

视频生成模型发展迅速，并开始表现出对物理动力学的深刻理解。在本文中，我们研究了 Veo-3 等高级视频生成模型可以在多大程度上支持通用的机器人操作。我们首先研究了一种零样本方法，其中 Veo-3 根据当前机器人观察结果预测未来图像序列，而逆动力学模型 IDM 则恢复相应的机器人动作。 IDM 仅根据随机游戏数据进行训练，不需要人工监督或专家演示。关键的直觉是，如果视频模型可以在图像空间中生成物理上合理的未来运动，那么 IDM 就可以将这些视觉轨迹转换为可执行的机器人动作。我们使用高维灵巧手在模拟和现实世界中评估这种“Veo-3+IDM”方法。我们发现，由于前沿视频模型强大的泛化能力，Veo-3+IDM 可以一致地生成近似正确的任务级轨迹。然而，其低水平的控制精度仍然不足以可靠地解决大多数任务。受这一观察的启发，我们开发了一个分层框架 Veo-Act，它使用 Veo-3 作为高级运动规划器，使用 VLA 策略作为低级执行器，显着提高了最先进的视觉-语言-动作策略的指令跟踪性能。总的来说，我们的结果表明，随着视频生成模型的不断改进，视频模型可以成为通用机器人学习的重要组成部分。

</details>

---

## 6. ReinVBC: A Model-based Reinforcement Learning Approach to Vehicle Braking Controller / ReinVBC：一种基于模型的强化学习方法用于车辆制动控制器

**Date**: 2026-04-06 | **arXiv**: [2604.04401v1](http://arxiv.org/abs/2604.04401v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.04401v1)

**Categories**: cs.RO, cs.LG, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

Braking system, the key module to ensure the safety and steer-ability of current vehicles, relies on extensive manual calibration during production. Reducing labor and time consumption while maintaining the Vehicle Braking Controller (VBC) performance greatly benefits the vehicle industry. Model-based methods in offline reinforcement learning, which facilitate policy exploration within a data-driven dynamics model, offer a promising solution for addressing real-world control tasks. This work proposes ReinVBC, which applies an offline model-based reinforcement learning approach to deal with the vehicle braking control problem. We introduce useful engineering designs into the paradigm of model learning and utilization to obtain a reliable vehicle dynamics model and a capable braking policy. Several results demonstrate the capability of our method in real-world vehicle braking and its potential to replace the production-grade anti-lock braking system.

制动系统是确保当前车辆安全性和转向能力的关键模块，在生产过程中依赖于大量的手动校准。在保持车辆制动控制器 (VBC) 性能的同时减少劳动力和时间消耗，极大地有利于汽车行业。离线强化学习中基于模型的方法有助于数据驱动的动态模型中的政策探索，为解决现实世界的控制任务提供了一种有前景的解决方案。这项工作提出了ReinVBC，它应用基于离线模型的强化学习方法来处理车辆制动控制问题。我们将有用的工程设计引入模型学习和利用的范式中，以获得可靠的车辆动力学模型和有效的制动策略。一些结果证明了我们的方法在现实车辆制动中的能力及其取代生产级防抱死制动系统的潜力。

</details>

---

## 7. DriveVA: Video Action Models are Zero-Shot Drivers / DriveVA：视频动作模型是零镜头驱动程序

**Date**: 2026-04-05 | **arXiv**: [2604.04198v1](http://arxiv.org/abs/2604.04198v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.04198v1)

**Categories**: cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Generalization is a central challenge in autonomous driving, as real-world deployment requires robust performance under unseen scenarios, sensor domains, and environmental conditions. Recent world-model-based planning methods have shown strong capabilities in scene understanding and multi-modal future prediction, yet their generalization across datasets and sensor configurations remains limited. In addition, their loosely coupled planning paradigm often leads to poor video-trajectory consistency during visual imagination. To overcome these limitations, we propose DriveVA, a novel autonomous driving world model that jointly decodes future visual forecasts and action sequences in a shared latent generative process. DriveVA inherits rich priors on motion dynamics and physical plausibility from well-pretrained large-scale video generation models to capture continuous spatiotemporal evolution and causal interaction patterns. To this end, DriveVA employs a DiT-based decoder to jointly predict future action sequences (trajectories) and videos, enabling tighter alignment between planning and scene evolution. We also introduce a video continuation strategy to strengthen long-duration rollout consistency. DriveVA achieves an impressive closed-loop performance of 90.9 PDM score on the challenge NAVSIM. Extensive experiments also demonstrate the zero-shot capability and cross-domain generalization of DriveVA, which reduces average L2 error and collision rate by 78.9% and 83.3% on nuScenes and 52.5% and 52.4% on the Bench2drive built on CARLA v2 compared with the state-of-the-art world-model-based planner.

泛化是自动驾驶的一个核心挑战，因为现实世界的部署需要在未见过的场景、传感器域和环境条件下具有强大的性能。最近基于世界模型的规划方法在场景理解和多模式未来预测方面表现出了强大的能力，但它们跨数据集和传感器配置的泛化仍然有限。此外，它们松散耦合的规划范式通常会导致视觉想象过程中视频轨迹一致性较差。为了克服这些限制，我们提出了 DriveVA，这是一种新颖的自动驾驶世界模型，可以在共享的潜在生成过程中联合解码未来的视觉预测和动作序列。 DriveVA 从经过良好预训练的大规模视频生成模型继承了关于运动动力学和物理合理性的丰富先验，以捕获连续的时空演化和因果交互模式。为此，DriveVA 采用基于 DiT 的解码器来联合预测未来的动作序列（轨迹）和视频，从而实现规划和场景演进之间更紧密的结合。我们还引入了视频延续策略来加强长期推出的一致性。 DriveVA 在 NAVSIM 挑战赛中取得了 90.9 PDM 分数的令人印象深刻的闭环性能。大量实验还证明了 DriveVA 的零射击能力和跨域泛化能力，与最先进的基于世界模型的规划器相比，在 nuScenes 上平均 L2 错误和碰撞率降低了 78.9% 和 83.3%，在基于 CARLA v2 的 Bench2drive 上降低了 52.5% 和 52.4%。

</details>

---



</details>

<details><summary><b>2026-04-07 (1 papers)</b></summary>

# arXiv World Model Papers - 2026-04-07

**Paper Count**: 1

---

## 1. Individual and Combined Effects of English as a Second Language and Typos on LLM Performance / 英语作为第二语言和打字错误对法学硕士表现的单独和综合影响

**Date**: 2026-04-06 | **arXiv**: [2604.04723v1](http://arxiv.org/abs/2604.04723v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.04723v1)

**Categories**: cs.CL, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Large language models (LLMs) are used globally, and because much of their training data is in English, they typically perform best on English inputs. As a result, many non-native English speakers interact with them in English as a second language (ESL), and these inputs often contain typographical errors. Prior work has largely studied the effects of ESL variation and typographical errors separately, even though they often co-occur in real-world use. In this study, we use the Trans-EnV framework to transform standard English inputs into eight ESL variants and apply MulTypo to inject typos at three levels: low, moderate, and severe. We find that combining ESL variation and typos generally leads to larger performance drops than either factor alone, though the combined effect is not simply additive. This pattern is clearest on closed-ended tasks, where performance degradation can be characterized more consistently across ESL variants and typo levels, while results on open-ended tasks are more mixed. Overall, these findings suggest that evaluations on clean standard English may overestimate real-world model performance, and that evaluating ESL variation and typographical errors in isolation does not fully capture model behavior in realistic settings.

大型语言模型 (LLM) 在全球范围内使用，由于其大部分训练数据都是英语，因此它们通常在英语输入上表现最佳。因此，许多非英语母语人士以英语作为第二语言 (ESL) 与他们互动，而这些输入通常包含印刷错误。之前的工作主要分别研究了 ESL 变化和印刷错误的影响，尽管它们在现实世界的使用中经常同时出现。在本研究中，我们使用 Trans-EnV 框架将标准英语输入转换为八种 ESL 变体，并应用 MulTypo 注入三个级别的拼写错误：低、中和严重。我们发现，将 ESL 变化和打字错误相结合通常会导致比单独任何一个因素更大的性能下降，尽管组合效应并不是简单的累加效应。这种模式在封闭式任务中最为明显，其中性能下降可以在 ESL 变体和打字错误级别上更加一致地表征，而开放式任务的结果则更加复杂。总体而言，这些发现表明，对干净标准英语的评估可能会高估现实世界的模型性能，并且单独评估 ESL 变化和印刷错误并不能完全捕捉现实环境中的模型行为。

</details>

---



</details>

<details><summary><b>2026-04-06 (2 papers)</b></summary>

# arXiv World Model Papers - 2026-04-06

**Paper Count**: 2

---

## 1. Hierarchical Planning with Latent World Models / 使用潜在世界模型的分层规划

**Date**: 2026-04-03 | **arXiv**: [2604.03208v1](http://arxiv.org/abs/2604.03208v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.03208v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Model predictive control (MPC) with learned world models has emerged as a promising paradigm for embodied control, particularly for its ability to generalize zero-shot when deployed in new environments. However, learned world models often struggle with long-horizon control due to the accumulation of prediction errors and the exponentially growing search space. In this work, we address these challenges by learning latent world models at multiple temporal scales and performing hierarchical planning across these scales, enabling long-horizon reasoning while substantially reducing inference-time planning complexity. Our approach serves as a modular planning abstraction that applies across diverse latent world-model architectures and domains. We demonstrate that this hierarchical approach enables zero-shot control on real-world non-greedy robotic tasks, achieving a 70% success rate on pick-&-place using only a final goal specification, compared to 0% for a single-level world model. In addition, across physics-based simulated environments including push manipulation and maze navigation, hierarchical planning achieves higher success while requiring up to 4x less planning-time compute.

具有学习世界模型的模型预测控制（MPC）已成为体现控制的有前途的范例，特别是因为它在新环境中部署时能够泛化零样本。然而，由于预测误差的积累和搜索空间的指数级增长，学习的世界模型常常难以进行长期控制。在这项工作中，我们通过学习多个时间尺度的潜在世界模型并跨这些尺度执行分层规划来应对这些挑战，从而实现长视野推理，同时大幅降低推理时间规划的复杂性。我们的方法作为模块化规划抽象，适用于不同的潜在世界模型架构和领域。我们证明，这种分层方法可以对现实世界的非贪婪机器人任务进行零样本控制，仅使用最终目标规范就可以实现 70% 的拾放成功率，而单层世界模型的成功率为 0%。此外，在基于物理的模拟环境（包括推动操作和迷宫导航）中，分层规划取得了更高的成功，同时所需的规划时间计算量减少了 4 倍。

</details>

---

## 2. InCoder-32B-Thinking: Industrial Code World Model for Thinking / InCoder-32B-Thinking：工业代码世界思维模型

**Date**: 2026-04-03 | **arXiv**: [2604.03144v1](http://arxiv.org/abs/2604.03144v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.03144v1)

**Categories**: cs.AR, cs.AI, cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

Industrial software development across chip design, GPU optimization, and embedded systems lacks expert reasoning traces showing how engineers reason about hardware constraints and timing semantics. In this work, we propose InCoder-32B-Thinking, trained on the data from the Error-driven Chain-of-Thought (ECoT) synthesis framework with an industrial code world model (ICWM) to generate reasoning traces. Specifically, ECoT generates reasoning chains by synthesizing the thinking content from multi-turn dialogue with environmental error feedback, explicitly modeling the error-correction process. ICWM is trained on domain-specific execution traces from Verilog simulation, GPU profiling, etc., learns the causal dynamics of how code affects hardware behavior, and enables self-verification by predicting execution outcomes before actual compilation. All synthesized reasoning traces are validated through domain toolchains, creating training data matching the natural reasoning depth distribution of industrial tasks. Evaluation on 14 general (81.3% on LiveCodeBench v5) and 9 industrial benchmarks (84.0% in CAD-Coder and 38.0% on KernelBench) shows InCoder-32B-Thinking achieves top-tier open-source results across all domains.GPU Optimization

跨芯片设计、GPU 优化和嵌入式系统的工业软件开发缺乏专家推理轨迹来显示工程师如何推理硬件约束和时序语义。在这项工作中，我们提出了 InCoder-32B-Thinking，它使用工业代码世界模型 (ICWM) 对来自错误驱动思想链 (ECoT) 综合框架的数据进行训练，以生成推理轨迹。具体来说，ECOT通过综合多轮对话的思维内容和环境错误反馈来生成推理链，明确地建模纠错过程。 ICWM 根据来自 Verilog 仿真、GPU 分析等的特定领域执行跟踪进行训练，了解代码如何影响硬件行为的因果动态，并通过在实际编译之前预测执行结果来实现自我验证。所有合成的推理轨迹都通过领域工具链进行验证，创建与工业任务的自然推理深度分布相匹配的训练数据。对 14 个通用基准（LiveCodeBench v5 上的 81.3%）和 9 个工业基准（CAD-Coder 上的 84.0%，KernelBench 上的 38.0%）的评估显示，InCoder-32B-Thinking 在所有领域都取得了顶级的开源结果。 GPU 优化

</details>

---



</details>

<details><summary><b>2026-04-03 (8 papers)</b></summary>

# arXiv World Model Papers - 2026-04-03

**Paper Count**: 8

---

## 1. ActionParty: Multi-Subject Action Binding in Generative Video Games / ActionParty：生成视频游戏中的多主体动作绑定

**Date**: 2026-04-02 | **arXiv**: [2604.02330v1](http://arxiv.org/abs/2604.02330v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.02330v1)

**Categories**: cs.CV, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Recent advances in video diffusion have enabled the development of "world models" capable of simulating interactive environments. However, these models are largely restricted to single-agent settings, failing to control multiple agents simultaneously in a scene. In this work, we tackle a fundamental issue of action binding in existing video diffusion models, which struggle to associate specific actions with their corresponding subjects. For this purpose, we propose ActionParty, an action controllable multi-subject world model for generative video games. It introduces subject state tokens, i.e. latent variables that persistently capture the state of each subject in the scene. By jointly modeling state tokens and video latents with a spatial biasing mechanism, we disentangle global video frame rendering from individual action-controlled subject updates. We evaluate ActionParty on the Melting Pot benchmark, demonstrating the first video world model capable of controlling up to seven players simultaneously across 46 diverse environments. Our results show significant improvements in action-following accuracy and identity consistency, while enabling robust autoregressive tracking of subjects through complex interactions.

视频传播的最新进展使得能够模拟交互环境的“世界模型”得以发展。然而，这些模型很大程度上仅限于单代理设置，无法在场景中同时控制多个代理。在这项工作中，我们解决了现有视频传播模型中动作绑定的基本问题，该模型很难将特定动作与其相应的主题相关联。为此，我们提出了 ActionParty，一种用于生成视频游戏的动作可控多主体世界模型。它引入了主体状态标记，即持续捕获场景中每个主体状态的潜在变量。通过使用空间偏置机制对状态标记和视频潜伏进行联合建模，我们将全局视频帧渲染与单个动作控制的主题更新分开。我们根据 Melting Pot 基准评估 ActionParty，展示了第一个能够在 46 个不同环境中同时控制最多 7 名玩家的视频世界模型。我们的结果表明，行动跟踪准确性和身份一致性有了显着提高，同时通过复杂的交互实现了对受试者的稳健自回归跟踪。

</details>

---

## 2. Omni123: Exploring 3D Native Foundation Models with Limited 3D Data by Unifying Text to 2D and 3D Generation / Omni123：通过将文本统一为 2D 和 3D 生成，探索具有有限 3D 数据的 3D 原生基础模型

**Date**: 2026-04-02 | **arXiv**: [2604.02289v1](http://arxiv.org/abs/2604.02289v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.02289v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Recent multimodal large language models have achieved strong performance in unified text and image understanding and generation, yet extending such native capability to 3D remains challenging due to limited data. Compared to abundant 2D imagery, high-quality 3D assets are scarce, making 3D synthesis under-constrained. Existing methods often rely on indirect pipelines that edit in 2D and lift results into 3D via optimization, sacrificing geometric consistency. We present Omni123, a 3D-native foundation model that unifies text-to-2D and text-to-3D generation within a single autoregressive framework. Our key insight is that cross-modal consistency between images and 3D can serve as an implicit structural constraint. By representing text, images, and 3D as discrete tokens in a shared sequence space, the model leverages abundant 2D data as a geometric prior to improve 3D representations. We introduce an interleaved X-to-X training paradigm that coordinates diverse cross-modal tasks over heterogeneous paired datasets without requiring fully aligned text-image-3D triplets. By traversing semantic-visual-geometric cycles (e.g., text to image to 3D to image) within autoregressive sequences, the model jointly enforces semantic alignment, appearance fidelity, and multi-view geometric consistency. Experiments show that Omni123 significantly improves text-guided 3D generation and editing, demonstrating a scalable path toward multimodal 3D world models.

最近的多模态大语言模型在统一文本和图像理解和生成方面取得了强大的性能，但由于数据有限，将这种本机功能扩展到 3D 仍然具有挑战性。与丰富的 2D 图像相比，高质量的 3D 资源稀缺，使得 3D 合成受到限制。现有方法通常依赖于间接管道，这些管道在 2D 中进行编辑并通过优化将结果提升到 3D，从而牺牲了几何一致性。我们推出了 Omni123，这是一种 3D 原生基础模型，它将文本到 2D 和文本到 3D 的生成统一在一个自回归框架内。我们的主要见解是图像和 3D 之间的跨模式一致性可以作为隐式结构约束。通过将文本、图像和 3D 表示为共享序列空间中的离散标记，该模型利用丰富的 2D 数据作为几何先验来改进 3D 表示。我们引入了一种交错的 X-to-X 训练范例，可以在异构配对数据集上协调不同的跨模式任务，而不需要完全对齐的文本-图像-3D 三元组。通过遍历自回归序列中的语义-视觉-几何循环（例如，文本到图像到 3D 到图像），该模型共同强制执行语义对齐、外观保真度和多视图几何一致性。实验表明，Omni123 显着改进了文本引导的 3D 生成和编辑，展示了通往多模式 3D 世界模型的可扩展路径。

</details>

---

## 3. Model-Based Reinforcement Learning for Control under Time-Varying Dynamics / 基于模型的强化学习用于时变动力学控制

**Date**: 2026-04-02 | **arXiv**: [2604.02260v1](http://arxiv.org/abs/2604.02260v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.02260v1)

**Categories**: cs.LG, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Learning-based control methods typically assume stationary system dynamics, an assumption often violated in real-world systems due to drift, wear, or changing operating conditions. We study reinforcement learning for control under time-varying dynamics. We consider a continual model-based reinforcement learning setting in which an agent repeatedly learns and controls a dynamical system whose transition dynamics evolve across episodes. We analyze the problem using Gaussian process dynamics models under frequentist variation-budget assumptions. Our analysis shows that persistent non-stationarity requires explicitly limiting the influence of outdated data to maintain calibrated uncertainty and meaningful dynamic regret guarantees. Motivated by these insights, we propose a practical optimistic model-based reinforcement learning algorithm with adaptive data buffer mechanisms and demonstrate improved performance on continuous control benchmarks with non-stationary dynamics.

基于学习的控制方法通常假设系统动态稳定，但在现实系统中，由于漂移、磨损或变化的操作条件，这种假设经常被违反。我们研究强化学习在时变动态下的控制。我们考虑一种基于持续模型的强化学习设置，其中代理重复学习和控制动态系统，该系统的过渡动态在各个事件中不断演变。我们在频率变化预算假设下使用高斯过程动力学模型来分析问题。我们的分析表明，持续的非平稳性需要明确限制过时数据的影响，以维持校准的不确定性和有意义的动态后悔保证。受这些见解的启发，我们提出了一种实用的基于乐观模型的强化学习算法，具有自适应数据缓冲机制，并在非平稳动态的连续控制基准上展示了改进的性能。

</details>

---

## 4. World Action Verifier: Self-Improving World Models via Forward-Inverse Asymmetry / 世界行动验证者：通过正逆不对称自我改进世界模型

**Date**: 2026-04-02 | **arXiv**: [2604.01985v1](http://arxiv.org/abs/2604.01985v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.01985v1)

**Categories**: cs.LG, cs.AI, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

General-purpose world models promise scalable policy evaluation, optimization, and planning, yet achieving the required level of robustness remains challenging. Unlike policy learning, which primarily focuses on optimal actions, a world model must be reliable over a much broader range of suboptimal actions, which are often insufficiently covered by action-labeled interaction data. To address this challenge, we propose World Action Verifier (WAV), a framework that enables world models to identify their own prediction errors and self-improve. The key idea is to decompose action-conditioned state prediction into two factors -- state plausibility and action reachability -- and verify each separately. We show that these verification problems can be substantially easier than predicting future states due to two underlying asymmetries: the broader availability of action-free data and the lower dimensionality of action-relevant features. Leveraging these asymmetries, we augment a world model with (i) a diverse subgoal generator obtained from video corpora and (ii) a sparse inverse model that infers actions from a subset of state features. By enforcing cycle consistency among generated subgoals, inferred actions, and forward rollouts, WAV provides an effective verification mechanism in under-explored regimes, where existing methods typically fail. Across nine tasks spanning MiniGrid, RoboMimic, and ManiSkill, our method achieves 2x higher sample efficiency while improving downstream policy performance by 18%.

通用世界模型承诺可扩展的政策评估、优化和规划，但实现所需的稳健性水平仍然具有挑战性。与主要关注最优行动的政策学习不同，世界模型必须在更广泛的次优行动中可靠，而这些次优行动往往不能被行动标记的交互数据充分覆盖。为了应对这一挑战，我们提出了世界行动验证器（WAV），这是一个使世界模型能够识别自己的预测错误并自我改进的框架。关键思想是将动作条件状态预测分解为两个因素——状态合理性和动作可达性——并分别验证每个因素。我们表明，由于两个潜在的不对称性，这些验证问题比预测未来状态要容易得多：无动作数据的更广泛可用性和与动作相关的特征的维度较低。利用这些不对称性，我们通过（i）从视频语料库获得的多样化子目标生成器和（ii）从状态特征子集推断动作的稀疏逆模型来增强世界模型。通过在生成的子目标、推断的操作和前向推出之间强制执行循环一致性，WAV 在现有方法通常会失败的未充分探索的情况下提供了有效的验证机制。在涵盖 MiniGrid、RoboMimic 和 ManiSkill 的九项任务中，我们的方法实现了 2 倍的样本效率提高，同时将下游策略性能提高了 18%。

</details>

---

## 5. DriveDreamer-Policy: A Geometry-Grounded World-Action Model for Unified Generation and Planning / DriveDreamer-Policy：用于统一生成和规划的基于几何的世界动作模型

**Date**: 2026-04-02 | **arXiv**: [2604.01765v1](http://arxiv.org/abs/2604.01765v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.01765v1)

**Categories**: cs.CV, cs.AI, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Recently, world-action models (WAM) have emerged to bridge vision-language-action (VLA) models and world models, unifying their reasoning and instruction-following capabilities and spatio-temporal world modeling. However, existing WAM approaches often focus on modeling 2D appearance or latent representations, with limited geometric grounding-an essential element for embodied systems operating in the physical world. We present DriveDreamer-Policy, a unified driving world-action model that integrates depth generation, future video generation, and motion planning within a single modular architecture. The model employs a large language model to process language instructions, multi-view images, and actions, followed by three lightweight generators that produce depth, future video, and actions. By learning a geometry-aware world representation and using it to guide both future prediction and planning within a unified framework, the proposed model produces more coherent imagined futures and more informed driving actions, while maintaining modularity and controllable latency. Experiments on the Navsim v1 and v2 benchmarks demonstrate that DriveDreamer-Policy achieves strong performance on both closed-loop planning and world generation tasks. In particular, our model reaches 89.2 PDMS on Navsim v1 and 88.7 EPDMS on Navsim v2, outperforming existing world-model-based approaches while producing higher-quality future video and depth predictions. Ablation studies further show that explicit depth learning provides complementary benefits to video imagination and improves planning robustness.

最近，世界动作模型（WAM）的出现连接了视觉-语言-动作（VLA）模型和世界模型，统一了它们的推理和指令跟踪能力以及时空世界建模。然而，现有的 WAM 方法通常侧重于对 2D 外观或潜在表示进行建模，几何基础有限——这是在物理世界中运行的具体系统的基本要素。我们推出了 DriveDreamer-Policy，这是一种统一的驾驶世界动作模型，它将深度生成、未来视频生成和运动规划集成在单个模块化架构中。该模型采用大型语言模型来处理语言指令、多视图图像和动作，然后是三个轻量级生成器，用于生成深度、未来视频和动作。通过学习几何感知的世界表示并用它来指导统一框架内的未来预测和规划，所提出的模型可以产生更连贯的想象未来和更明智的驾驶行为，同时保持模块化和可控延迟。 Navsim v1 和 v2 基准测试的实验表明，DriveDreamer-Policy 在闭环规划和世界生成任务上均实现了强大的性能。特别是，我们的模型在 Navsim v1 上达到 89.2 PDMS，在 Navsim v2 上达到 88.7 EPDMS，优于现有的基于世界模型的方法，同时产生更高质量的未来视频和深度预测。消融研究进一步表明，显式深度学习为视频想象力提供了补充优势，并提高了规划的稳健性。

</details>

---

## 6. ModTrans: Translating Real-world Models for Distributed Training Simulator / ModTrans：将现实世界模型转换为分布式训练模拟器

**Date**: 2026-04-02 | **arXiv**: [2604.01607v1](http://arxiv.org/abs/2604.01607v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.01607v1)

**Categories**: cs.DC, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Large-scale distributed training has been a research hot spot in machine learning systems for industry and academia in recent years. However, conducting experiments without physical machines and corresponding resources is difficult. One solution is to leverage distributed training simulators, but current ones like ASTRA-sim do not support importing real-world developed models, which poses challenges for ML researchers seeking to use them. Based on this challenge, we developed ModTrans, a translator supporting format translation from any real-world model to the ASTRA-sim simulator's input, removing the barrier between machine learning experts and machine learning system researchers. The experiment results show that ModTrans's cost is negligible.

大规模分布式训练是近年来工业界和学术界机器学习系统的研究热点。然而，在没有物理机器和相应资源的情况下进行实验是很困难的。一种解决方案是利用分布式训练模拟器，但目前的 ASTRA-sim 等模拟器不支持导入现实世界开发的模型，这给寻求使用它们的机器学习研究人员带来了挑战。基于这一挑战，我们开发了 ModTrans，这是一个翻译器，支持从任何现实世界模型到 ASTRA-sim 模拟器输入的格式转换，消除了机器学习专家和机器学习系统研究人员之间的障碍。实验结果表明ModTrans的成本可以忽略不计。

</details>

---

## 7. Semantic Modeling for World-Centered Architectures / 以世界为中心的架构的语义建模

**Date**: 2026-04-01 | **arXiv**: [2604.01359v1](http://arxiv.org/abs/2604.01359v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.01359v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

We introduce world-centered multi-agent systems (WMAS) as an alternative to traditional agent-centered architectures, arguing that structured domains such as enterprises and institutional systems require a shared, explicit world representation to ensure semantic consistency, explainability, and long-term stability. We classify worlds along dimensions including ontological explicitness, normativity, etc. In WMAS, learning and coordination operate over a shared world model rather than isolated agent-local representations, enabling global consistency and verifiable system behavior. We propose semantic models as a mathematical formalism for representing such worlds. Finally, we present the Ontobox platform as a realization of WMAS.

我们引入以世界为中心的多智能体系统（WMAS）作为传统以智能体为中心的架构的替代方案，认为企业和机构系统等结构化领域需要共享的、明确的世界表示，以确保语义一致性、可解释性和长期稳定性。我们按照本体显性、规范性等维度对世界进行分类。在 WMAS 中，学习和协调在共享世界模型上运行，而不是在孤立的代理本地表示上运行，从而实现全局一致性和可验证的系统行为。我们提出语义模型作为表示此类世界的数学形式。最后，我们将 Ontobox 平台作为 WMAS 的实现。

</details>

---

## 8. Safety, Security, and Cognitive Risks in World Models / 世界模型中的安全、安保和认知风险

**Date**: 2026-04-01 | **arXiv**: [2604.01346v1](http://arxiv.org/abs/2604.01346v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.01346v1)

**Categories**: cs.CR, cs.AI, cs.LG, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

World models -- learned internal simulators of environment dynamics -- are rapidly becoming foundational to autonomous decision-making in robotics, autonomous vehicles, and agentic AI. Yet this predictive power introduces a distinctive set of safety, security, and cognitive risks. Adversaries can corrupt training data, poison latent representations, and exploit compounding rollout errors to cause catastrophic failures in safety-critical deployments. World model-equipped agents are more capable of goal misgeneralisation, deceptive alignment, and reward hacking precisely because they can simulate the consequences of their own actions. Authoritative world model predictions further foster automation bias and miscalibrated human trust that operators lack the tools to audit.   This paper surveys the world model landscape; introduces formal definitions of trajectory persistence and representational risk; presents a five-profile attacker capability taxonomy; and develops a unified threat model extending MITRE ATLAS and the OWASP LLM Top 10 to the world model stack. We provide an empirical proof-of-concept on trajectory-persistent adversarial attacks (GRU-RSSM: A_1 = 2.26x amplification, -59.5% reduction under adversarial fine-tuning; stochastic RSSM proxy: A_1 = 0.65x; DreamerV3 checkpoint: non-zero action drift confirmed). We illustrate risks through four deployment scenarios and propose interdisciplinary mitigations spanning adversarial hardening, alignment engineering, NIST AI RMF and EU AI Act governance, and human-factors design. We argue that world models must be treated as safety-critical infrastructure requiring the same rigour as flight-control software or medical devices.

世界模型——环境动力学的学习内部模拟器——正在迅速成为机器人、自动驾驶车辆和代理人工智能领域自主决策的基础。然而，这种预测能力带来了一系列独特的安全、保障和认知风险。攻击者可以破坏训练数据、毒害潜在表示，并利用复合部署错误在安全关键型部署中导致灾难性故障。配备世界模型的智能体更有能力进行目标错误概括、欺骗性调整和奖励黑客攻击，正是因为它们可以模拟自己行为的后果。权威的世界模型预测进一步助长了自动化偏差和错误校准的人类信任，导致操作员缺乏审计工具。   本文调查了世界模型格局；引入轨迹持久性和代表性风险的正式定义；提出了五种攻击者能力分类法；并开发了一个统一的威胁模型，将 MITRE ATLAS 和 OWASP LLM Top 10 扩展到世界模型堆栈。我们提供了关于轨迹持续对抗性攻击的经验概念验证（GRU-RSSM：A_1 = 2.26x 放大，对抗性微调下减少 -59.5%；随机 RSSM 代理：A_1 = 0.65x；DreamerV3 检查点：已确认非零动作漂移）。我们通过四种部署场景说明了风险，并提出了跨学科的缓解措施，包括对抗性强化、对齐工程、NIST AI RMF 和 EU AI Act 治理以及人为因素设计。我们认为，世界模型必须被视为安全关键基础设施，需要与飞行控制软件或医疗设备同样严格的要求。

</details>

---



</details>

<details><summary><b>2026-04-02 (4 papers)</b></summary>

# arXiv World Model Papers - 2026-04-02

**Paper Count**: 4

---

## 1. Safe learning-based control via function-based uncertainty quantification / 通过基于函数的不确定性量化实现基于学习的安全控制

**Date**: 2026-04-01 | **arXiv**: [2604.01173v1](http://arxiv.org/abs/2604.01173v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.01173v1)

**Categories**: eess.SY, cs.LG, math.OC

<details><summary><b>Abstract / 摘要</b></summary>

Uncertainty quantification is essential when deploying learning-based control methods in safety-critical systems. This is commonly realized by constructing uncertainty tubes that enclose the unknown function of interest, e.g., the reward and constraint functions or the underlying dynamics model, with high probability. However, existing approaches for uncertainty quantification typically rely on restrictive assumptions on the unknown function, such as known bounds on functional norms or Lipschitz constants, and struggle with discontinuities. In this paper, we model the unknown function as a random function from which independent and identically distributed realizations can be generated, and construct uncertainty tubes via the scenario approach that hold with high probability and rely solely on the sampled realizations. We integrate these uncertainty tubes into a safe Bayesian optimization algorithm, which we then use to safely tune control parameters on a real Furuta pendulum.

在安全关键系统中部署基于学习的控制方法时，不确定性量化至关重要。这通常是通过构建不确定性管来实现的，这些不确定性管以高概率包围未知的感兴趣函数，例如奖励和约束函数或底层动态模型。然而，现有的不确定性量化方法通常依赖于对未知函数的限制性假设，例如函数范数或 Lipschitz 常数的已知界限，并且与不连续性作斗争。在本文中，我们将未知函数建模为随机函数，从中可以生成独立且同分布的实现，并通过高概率且仅依赖于采样实现的场景方法构造不确定性管。我们将这些不确定性管集成到安全的贝叶斯优化算法中，然后使用该算法安全地调整真实的 Furuta 摆上的控制参数。

</details>

---

## 2. Focal plane wavefront control with model-based reinforcement learning / 使用基于模型的强化学习进行焦平面波前控制

**Date**: 2026-04-01 | **arXiv**: [2604.00993v1](http://arxiv.org/abs/2604.00993v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.00993v1)

**Categories**: astro-ph.IM, cs.LG, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

The direct imaging of potentially habitable exoplanets is one prime science case for high-contrast imaging instruments on extremely large telescopes. Most such exoplanets orbit close to their host stars, where their observation is limited by fast-moving atmospheric speckles and quasi-static non-common-path aberrations (NCPA). Conventional NCPA correction methods often use mechanical mirror probes, which compromise performance during operation. This work presents machine-learning-based NCPA control methods that automatically detect and correct both dynamic and static NCPA errors by leveraging sequential phase diversity. We extend previous work in reinforcement learning for AO to focal plane control. A new model-based RL algorithm, Policy Optimization for NCPAs (PO4NCPA), interprets the focal-plane image as input data and, through sequential phase diversity, determines phase corrections that optimize both non-coronagraphic and post-coronagraphic PSFs without prior system knowledge. Further, we demonstrate the effectiveness of this approach by numerically simulating static NCPA errors on a ground-based telescope and an infrared imager affected by water-vapor-induced seeing (dynamic NCPAs). Simulations show that PO4NCPA robustly compensates static and dynamic NCPAs. In static cases, it achieves near-optimal focal-plane light suppression with a coronagraph and near-optimal Strehl without one. With dynamics NCPA, it matches the performance of the modal least-squares reconstruction combined with a 1-step delay integrator in these metrics. The method remains effective for the ELT pupil, vector vortex coronagraph, and under photon and background noise. PO4NCPA is model-free and can be directly applied to standard imaging as well as to any coronagraph. Its sub-millisecond inference times and performance also make it suitable for real-time low-order correction of atmospheric turbulence beyond HCI.

对潜在宜居系外行星的直接成像是超大望远镜上高对比度成像仪器的主要科学案例之一。大多数此类系外行星的轨道都靠近其主恒星，它们的观测受到快速移动的大气散斑和准静态非共路径像差（NCPA）的限制。传统的 NCPA 校正方法通常使用机械镜面探头，这会影响操作过程中的性能。这项工作提出了基于机器学习的 NCPA 控制方法，通过利用顺序相位分集自动检测和纠正动态和静态 NCPA 错误。我们将之前的 AO 强化学习工作扩展到焦平面控制。一种基于模型的新 RL 算法，即 NCPA 策略优化 (PO4NCPA)，将焦平面图像解释为输入数据，并通过顺序相位分集确定相位校正，从而在无需先验系统知识的情况下优化非冠状和冠状后 PSF。此外，我们通过数值模拟受水蒸气引起视宁（动态 NCPA）影响的地面望远镜和红外成像仪上的静态 NCPA 误差，证明了这种方法的有效性。仿真表明 PO4NCPA 可以稳健地补偿静态和动态 NCPA。在静态情况下，它使用日冕仪实现了接近最佳的焦平面光抑制，而没有日冕仪则实现了接近最佳的斯特列尔光抑制。借助动态 NCPA，它在这些指标中与模态最小二乘重建结合 1 步延迟积分器的性能相匹配。该方法对于 ELT 光瞳、矢量涡旋日冕仪以及光子和背景噪声下仍然有效。 PO4NCPA 是无模型的，可以直接应用于标准成像以及任何日冕仪。其亚毫秒级推理时间和性能也使其适用于 HCI 之外的大气湍流的实时低阶校正。

</details>

---

## 3. Behavioral Score Diffusion: Model-Free Trajectory Planning via Kernel-Based Score Estimation from Data / 行为分数扩散：通过基于内核的数据分数估计进行无模型轨迹规划

**Date**: 2026-04-01 | **arXiv**: [2604.00391v1](http://arxiv.org/abs/2604.00391v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.00391v1)

**Categories**: cs.RO, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion-based trajectory optimization has emerged as a powerful planning paradigm, but existing methods require either learned score networks trained on large datasets or analytical dynamics models for score computation. We introduce \emph{Behavioral Score Diffusion} (BSD), a training-free and model-free trajectory planner that computes the diffusion score function directly from a library of trajectory data via kernel-weighted estimation. At each denoising step, BSD retrieves relevant trajectories using a triple-kernel weighting scheme -- diffusion proximity, state context, and goal relevance -- and computes a Nadaraya-Watson estimate of the denoised trajectory. The diffusion noise schedule naturally controls kernel bandwidths, creating a multi-scale nonparametric regression: broad averaging of global behavioral patterns at high noise, fine-grained local interpolation at low noise. This coarse-to-fine structure handles nonlinear dynamics without linearization or parametric assumptions. Safety is preserved by applying shielded rollout on kernel-estimated state trajectories, identical to existing model-based approaches. We evaluate BSD on four robotic systems of increasing complexity (3D--6D state spaces) in a parking scenario. BSD with fixed bandwidth achieves 98.5\% of the model-based baseline's average reward across systems while requiring no dynamics model, using only 1{,}000 pre-collected trajectories. BSD substantially outperforms nearest-neighbor retrieval (18--63\% improvement), confirming that the diffusion denoising mechanism is essential for effective data-driven planning.

基于扩散的轨迹优化已成为一种强大的规划范例，但现有方法需要在大型数据集上训练的学习得分网络或用于得分计算的分析动力学模型。我们引入了 \emph{Behavioral Score Diffusion} (BSD)，这是一种无需训练且无需模型的轨迹规划器，可通过核加权估计直接从轨迹数据库计算扩散评分函数。在每个去噪步骤中，BSD 使用三核加权方案（扩散邻近性、状态上下文和目标相关性）检索相关轨迹，并计算去噪轨迹的 Nadaraya-Watson 估计。扩散噪声调度自然地控制内核带宽，创建多尺度非参数回归：在高噪声下对全局行为模式进行广泛平均，在低噪声下进行细粒度局部插值。这种从粗到精的结构无需线性化或参数假设即可处理非线性动力学。通过在内核估计的状态轨迹上应用屏蔽推出来保证安全，这与现有的基于模型的方法相同。我们在停车场景中对四个复杂性不断增加的机器人系统（3D--6D 状态空间）评估 BSD。具有固定带宽的 BSD 实现了基于模型的基线跨系统平均奖励的 98.5%，同时不需要动态模型，仅使用 1{,}000 个预先收集的轨迹。 BSD 的性能大大优于最近邻检索（提高了 18--63%），这证实了扩散去噪机制对于有效的数据驱动规划至关重要。

</details>

---

## 4. Human-in-the-Loop Control of Objective Drift in LLM-Assisted Computer Science Education / 法学硕士辅助计算机科学教育中目标漂移的人机在环控制

**Date**: 2026-03-31 | **arXiv**: [2604.00281v1](http://arxiv.org/abs/2604.00281v1) | **PDF**: [Link](http://arxiv.org/pdf/2604.00281v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Large language models (LLMs) are increasingly embedded in computer science education through AI-assisted programming tools, yet such workflows often exhibit objective drift, in which locally plausible outputs diverge from stated task specifications. Existing instructional responses frequently emphasize tool-specific prompting practices, limiting durability as AI platforms evolve. This paper adopts a human-centered stance, treating human-in-the-loop (HITL) control as a stable educational problem rather than a transitional step toward AI autonomy. Drawing on systems engineering and control-theoretic concepts, we frame objectives and world models as operational artifacts that students configure to stabilize AI-assisted work. We propose a pilot undergraduate CS laboratory curriculum that explicitly separates planning from execution and trains students to specify acceptance criteria and architectural constraints prior to code generation. In selected labs, the curriculum also introduces deliberate, concept-aligned drift to support diagnosis and recovery from specification violations. We report a sensitivity power analysis for a three-arm pilot design comparing unstructured AI use, structured planning, and structured planning with injected drift, establishing detectable effect sizes under realistic section-level constraints. The contribution is a theory-driven, methodologically explicit foundation for HITL pedagogy that renders control competencies teachable across evolving AI tools.

大型语言模型 (LLM) 通过人工智能辅助编程工具越来越多地嵌入到计算机科学教育中，但此类工作流程通常会出现客观漂移，其中局部合理的输出与规定的任务规范存在偏差。现有的教学反应经常强调特定于工具的提示实践，限制了人工智能平台发展的耐久性。本文采取以人为本的立场，将人在环（HITL）控制视为一个稳定的教育问题，而不是迈向人工智能自治的过渡步骤。借鉴系统工程和控制理论概念，我们将目标和世界模型构建为操作工件，学生可以配置这些工件来稳定人工智能辅助的工作。我们提出了一个试点本科计算机科学实验室课程，将规划与执行明确分开，并培训学生在代码生成之前指定验收标准和架构约束。在选定的实验室中，课程还引入了有意的、与概念一致的漂移，以支持诊断和从规范违规中恢复。我们报告了三臂试点设计的灵敏度功率分析，比较了非结构化人工智能的使用、结构化规划和带有注入漂移的结构化规划，在实际的截面级约束下建立了可检测的效应大小。这一贡献为 HITL 教学法奠定了理论驱动、方法论明确的基础，使控制能力可以通过不断发展的人工智能工具进行教授。

</details>

---



</details>

<details><summary><b>2026-04-01 (8 papers)</b></summary>

# arXiv World Model Papers - 2026-04-01

**Paper Count**: 8

---

## 1. Design and Aerodynamic Modeling of MetaMorpher: A Hybrid Rotary andFixed-Wing Morphing UAV / MetaMorpher 的设计和气动建模：混合旋转和固定翼变形无人机

**Date**: 2026-03-31 | **arXiv**: [2603.29646v1](http://arxiv.org/abs/2603.29646v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.29646v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

In this paper, we present a generalized, comprehensive nonlinear mathematical model and conceptual design for the MetaMorpher, a metamorphic Unmanned Aerial Vehicle (UAV) designed to bridge the gap between vertical takeoff and landing agility and fixed-wing cruising efficiency. Building on the successful design of the spincopter platform, this work introduces a simplified mechanical architecture using lightweight materials and a novel wing-folding strategy. Unlike traditional rigid-body approximations, we derive a nonlinear flight dynamics model that enables arbitrary force distributions across a segmented wing structure. This modularity allows for testing different airfoils, mass distributions, and chord lengths in a single environment. As part of this work, various flight modes were specifically tested and analyzed in the Simulink environment. The results show that the model behaves predictably under different structural configurations, demonstrating its reliability as a tool for rapid design evaluation.

在本文中，我们提出了 MetaMorpher 的广义、综合非线性数学模型和概念设计，MetaMorpher 是一种变质无人机（UAV），旨在弥补垂直起飞和着陆敏捷性与固定翼巡航效率之间的差距。这项工作以自旋直升机平台的成功设计为基础，引入了使用轻质材料的简化机械架构和新颖的机翼折叠策略。与传统的刚体近似不同，我们推导了一个非线性飞行动力学模型，该模型可以在分段机翼结构上实现任意力分布。这种模块化允许在单一环境中测试不同的翼型、质量分布和弦长。作为这项工作的一部分，在 Simulink 环境中对各种飞行模式进行了专门测试和分析。结果表明，该模型在不同结构配置下的表现是可预测的，证明了其作为快速设计评估工具的可靠性。

</details>

---

## 2. GraSP-STL: A Graph-Based Framework for Zero-Shot Signal Temporal Logic Planning via Offline Goal-Conditioned Reinforcement Learning / GraSP-STL：通过离线目标条件强化学习进行零样本信号时序逻辑规划的基于图的框架

**Date**: 2026-03-31 | **arXiv**: [2603.29533v1](http://arxiv.org/abs/2603.29533v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.29533v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

This paper studies offline, zero-shot planning under Signal Temporal Logic (STL) specifications. We assume access only to an offline dataset of state-action-state transitions collected by a task-agnostic behavior policy, with no analytical dynamics model, no further environment interaction, and no task-specific retraining. The objective is to synthesize a control strategy whose resulting trajectory satisfies an arbitrary unseen STL specification. To this end, we propose GraSP-STL, a graph-search-based framework for zero-shot STL planning from offline trajectories. The method learns a goal-conditioned value function from offline data and uses it to induce a finite-horizon reachability metric over the state space. Based on this metric, it constructs a directed graph abstraction whose nodes represent representative states and whose edges encode feasible short-horizon transitions. Planning is then formulated as a graph search over waypoint sequences, evaluated using arithmetic-geometric mean robustness and its interval semantics, and executed by a learned goal-conditioned policy. The proposed framework separates reusable reachability learning from task-conditioned planning, enabling zero-shot generalization to unseen STL tasks and long-horizon planning through the composition of short-horizon behaviors from offline data. Experimental results demonstrate its effectiveness on a range of offline STL planning tasks.

本文研究了信号时序逻辑 (STL) 规范下的离线、零样本规划。我们假设只能访问由与任务无关的行为策略收集的状态-动作-状态转换的离线数据集，没有分析动力学模型，没有进一步的环境交互，也没有特定于任务的再训练。目标是综合一种控制策略，其生成的轨迹满足任意未见过的 STL 规范。为此，我们提出了 GraSP-STL，一种基于图搜索的框架，用于从离线轨迹进行零样本 STL 规划。该方法从离线数据中学习目标条件值函数，并使用它来导出状态空间上的有限范围可达性度量。基于这个度量，它构建了一个有向图抽象，其节点代表代表性状态，其边缘编码可行的短时域转换。然后将规划制定为对航路点序列的图形搜索，使用算术几何平均鲁棒性及其区间语义进行评估，并通过学习的目标条件策略执行。所提出的框架将可重用的可达性学习与任务条件规划分开，从而能够对未见过的 STL 任务进行零样本泛化，并通过离线数据中的短期行为的组合来实现长期规划。实验结果证明了其在一系列离线 STL 规划任务上的有效性。

</details>

---

## 3. Model Predictive Path Integral PID Control for Learning-Based Path Following / 用于基于学习的路径跟踪的模型预测路径积分 PID 控制

**Date**: 2026-03-31 | **arXiv**: [2603.29499v1](http://arxiv.org/abs/2603.29499v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.29499v1)

**Categories**: eess.SY, cs.LG, cs.RO, math.OC

<details><summary><b>Abstract / 摘要</b></summary>

Classical proportional--integral--derivative (PID) control is widely employed in industrial applications; however, achieving higher performance often motivates the adoption of model predictive control (MPC). Although gradient-based methods are the standard for real-time optimization, sampling-based approaches have recently gained attention. In particular, model predictive path integral (MPPI) control enables gradient-free optimization and accommodates non-differentiable models and objective functions. However, directly sampling control input sequences may yield discontinuous inputs and increase the optimization dimensionality in proportion to the prediction horizon. This study proposes MPPI--PID control, which applies MPPI to optimize PID gains at each control step, thereby replacing direct high-dimensional input-sequence optimization with low-dimensional gain-space optimization. This formulation enhances sample efficiency and yields smoother inputs via the PID structure. We also provide theoretical insights, including an information-theoretic interpretation that unifies MPPI and MPPI--PID, an analysis of the effect of optimization dimensionality on sample efficiency, and a characterization of input continuity induced by the PID structure. The proposed method is evaluated on the learning-based path following of a mini forklift using a residual-learning dynamics model that integrates a physical model with a neural network. System identification is performed with real driving data. Numerical path-following experiments demonstrate that MPPI--PID improves tracking performance compared with fixed-gain PID and achieves performance comparable to conventional MPPI while significantly reducing input increments. Furthermore, the proposed method maintains favorable performance even with substantially fewer samples, demonstrating its improved sample efficiency.

经典的比例积分微分（PID）控制广泛应用于工业应用；然而，实现更高的性能通常会促使采用模型预测控制（MPC）。尽管基于梯度的方法是实时优化的标准，但基于采样的方法最近引起了人们的关注。特别是，模型预测路径积分 (MPPI) 控制可实现无梯度优化，并适应不可微分模型和目标函数。然而，直接对控制输入序列进行采样可能会产生不连续的输入，并与预测范围成比例地增加优化维度。本研究提出了MPPI--PID控制，它应用MPPI来优化每个控制步骤的PID增益，从而用低维增益空间优化代替直接高维输入序列优化。该公式提高了采样效率并通过 PID 结构产生更平滑的输入。我们还提供了理论见解，包括统一 MPPI 和 MPPI-PID 的信息论解释、优化维度对样本效率影响的分析以及 PID 结构引起的输入连续性的表征。使用将物理模型与神经网络集成的残差学习动态模型，对微型叉车基于学习的路径跟踪对所提出的方法进行评估。系统识别是利用真实的驾驶数据进行的。数值路径跟踪实验表明，与固定增益PID相比，MPPI--PID提高了跟踪性能，在显着降低输入增量的同时实现了与传统MPPI相当的性能。此外，即使样本数量少得多，所提出的方法也能保持良好的性能，这证明了其样本效率的提高。

</details>

---

## 4. HCLSM: Hierarchical Causal Latent State Machines for Object-Centric World Modeling / HCLSM：用于以对象为中心的世界建模的分层因果潜在状态机

**Date**: 2026-03-31 | **arXiv**: [2603.29090v1](http://arxiv.org/abs/2603.29090v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.29090v1)

**Categories**: cs.LG, cs.CV, cs.RO

**Code**: https://github.com/rightnow-ai/hclsm

<details><summary><b>Abstract / 摘要</b></summary>

World models that predict future states from video remain limited by flat latent representations that entangle objects, ignore causal structure, and collapse temporal dynamics into a single scale. We present HCLSM, a world model architecture that operates on three interconnected principles: object-centric decomposition via slot attention with spatial broadcast decoding, hierarchical temporal dynamics through a three-level engine combining selective state space models for continuous physics, sparse transformers for discrete events, and compressed transformers for abstract goals, and causal structure learning through graph neural network interaction patterns. HCLSM introduces a two-stage training protocol where spatial reconstruction forces slot specialization before dynamics prediction begins. We train a 68M-parameter model on the PushT robotic manipulation benchmark from the Open X-Embodiment dataset, achieving 0.008 MSE next-state prediction loss with emerging spatial decomposition (SBD loss: 0.0075) and learned event boundaries. A custom Triton kernel for the SSM scan delivers 38x speedup over sequential PyTorch. The full system spans 8,478 lines of Python across 51 modules with 171 unit tests. Code: https://github.com/rightnow-ai/hclsm

从视频中预测未来状态的世界模型仍然受到平面潜在表示的限制，这些表示会纠缠对象、忽略因果结构并将时间动态压缩为单一尺度。我们提出了 HCLSM，一种按照三个相互关联的原则运行的世界模型架构：通过时隙注意和空间广播解码进行以对象为中心的分解，通过三级引擎的分层时间动态，结合连续物理的选择性状态空间模型、离散事件的稀疏变换器和抽象目标的压缩变换器，以及通过图神经网络交互模式进行因果结构学习。 HCLSM 引入了一个两阶段训练协议，其中空间重建在动态预测开始之前强制槽专门化。我们在来自 Open X-Embodiment 数据集的 PushT 机器人操作基准上训练了 68M 参数模型，通过新兴空间分解（SBD 损失：0.0075）和学习事件边界实现了 0.008 MSE 下一状态预测损失。用于 SSM 扫描的定制 Triton 内核比顺序 PyTorch 提供 38 倍的加速。完整的系统跨越 51 个模块、8,478 行 Python 代码和 171 个单元测试。代码：https://github.com/rightnow-ai/hclsm

</details>

---

## 5. A Pontryagin Method of Model-based Reinforcement Learning via Hamiltonian Actor-Critic / 基于模型的强化学习的庞特里亚金方法

**Date**: 2026-03-30 | **arXiv**: [2603.28971v1](http://arxiv.org/abs/2603.28971v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.28971v1)

**Categories**: eess.SY, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Model-based reinforcement learning (MBRL) improves sample efficiency by leveraging learned dynamics models for policy optimization. However, the effectiveness of methods such as actor-critic is often limited by compounding model errors, which degrade long-horizon value estimation. Existing approaches, such as Model-Based Value Expansion (MVE), partially mitigate this issue through multi-step rollouts, but remain sensitive to rollout horizon selection and residual model bias. Motivated by the Pontryagin Maximum Principle (PMP), we propose Hamiltonian Actor-Critic (HAC), a model-based approach that eliminates explicit value function learning by directly optimizing a Hamiltonian defined over the learned dynamics and reward for deterministic systems. By avoiding value approximation, HAC reduces sensitivity to model errors while admitting convergence guarantees. Extensive experiments on continuous control benchmarks, in both online and offline RL settings, demonstrate that HAC outperforms model-free and MVE-based baselines in control performance, convergence speed, and robustness to distributional shift, including out-of-distribution (OOD) scenarios. In offline settings with limited data, HAC matches or exceeds state-of-the-art methods, highlighting its strong sample efficiency.

基于模型的强化学习 (MBRL) 通过利用学习的动态模型进行策略优化来提高样本效率。然而，诸如演员批评家之类的方法的有效性通常受到复合模型误差的限制，从而降低了长期价值估计的性能。现有的方法，例如基于模型的价值扩展（MVE），通过多步骤推出部分缓解了这个问题，但仍然对推出范围选择和剩余模型偏差敏感。受庞特里亚金极大值原理（PMP）的启发，我们提出了哈密顿演员批评家（HAC），这是一种基于模型的方法，通过直接优化在学习动态和确定性系统奖励上定义的哈密顿量来消除显式价值函数学习。通过避免值近似，HAC 降低了对模型误差的敏感性，同时承认收敛保证。在在线和离线 RL 设置中对连续控制基准进行的大量实验表明，HAC 在控制性能、收敛速度和对分布偏移（包括分布外 (OOD) 场景）的鲁棒性方面优于无模型和基于 MVE 的基线。在数据有限的离线环境中，HAC 可以匹配或超过最先进的方法，凸显其强大的样本效率。

</details>

---

## 6. AutoWorld: Scaling Multi-Agent Traffic Simulation with Self-Supervised World Models / AutoWorld：使用自我监督的世界模型扩展多代理交通模拟

**Date**: 2026-03-30 | **arXiv**: [2603.28963v1](http://arxiv.org/abs/2603.28963v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.28963v1)

**Categories**: cs.RO, cs.AI, cs.CV, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Multi-agent traffic simulation is central to developing and testing autonomous driving systems. Recent data-driven simulators have achieved promising results, but rely heavily on supervised learning from labeled trajectories or semantic annotations, making it costly to scale their performance. Meanwhile, large amounts of unlabeled sensor data can be collected at scale but remain largely unused by existing traffic simulation frameworks. This raises a key question: How can a method harness unlabeled data to improve traffic simulation performance? In this work, we propose AutoWorld, a traffic simulation framework that employs a world model learned from unlabeled occupancy representations of LiDAR data. Given world model samples, AutoWorld constructs a coarse-to-fine predictive scene context as input to a multi-agent motion generation model. To promote sample diversity, AutoWorld uses a cascaded Determinantal Point Process framework to guide the sampling processes of both the world model and the motion model. Furthermore, we designed a motion-aware latent supervision objective that enhances AutoWorld's representation of scene dynamics. Experiments on the WOSAC benchmark show that AutoWorld ranks first on the leaderboard according to the primary Realism Meta Metric (RMM). We further show that simulation performance consistently improves with the inclusion of unlabeled LiDAR data, and study the efficacy of each component with ablations. Our method paves the way for scaling traffic simulation realism without additional labeling. Our project page contains additional visualizations and released code.

多智能体交通仿真是开发和测试自动驾驶系统的核心。最近的数据驱动模拟器取得了有希望的结果，但严重依赖于标记轨迹或语义注释的监督学习，使得扩展其性能成本高昂。与此同时，大量未标记的传感器数据可以大规模收集，但现有的交通模拟框架在很大程度上仍然未使用。这就提出了一个关键问题：方法如何利用未标记的数据来提高交通模拟性能？在这项工作中，我们提出了 AutoWorld，一种交通模拟框架，它采用从 LiDAR 数据的未标记占用表示中学习的世界模型。给定世界模型样本，AutoWorld 构建一个从粗到细的预测场景上下文，作为多智能体运动生成模型的输入。为了促进样本多样性，AutoWorld 使用级联行列式处理框架来指导世界模型和运动模型的采样过程。此外，我们设计了一个运动感知的潜在监督目标，增强了 AutoWorld 对场景动态的表示。 WOSAC 基准测试的实验表明，根据主要现实主义元指标 (RMM)，《AutoWorld》在排行榜上排名第一。我们进一步表明，通过包含未标记的 LiDAR 数据，模拟性能持续提高，并通过消融研究每个组件的功效。我们的方法为扩展交通模拟的真实性铺平了道路，而无需额外的标签。我们的项目页面包含额外的可视化和已发布的代码。

</details>

---

## 7. Enhancing Policy Learning with World-Action Model / 通过世界行动模型加强政策学习

**Date**: 2026-03-30 | **arXiv**: [2603.28955v1](http://arxiv.org/abs/2603.28955v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.28955v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

This paper presents the World-Action Model (WAM), an action-regularized world model that jointly reasons over future visual observations and the actions that drive state transitions. Unlike conventional world models trained solely via image prediction, WAM incorporates an inverse dynamics objective into DreamerV2 that predicts actions from latent state transitions, encouraging the learned representations to capture action-relevant structure critical for downstream control. We evaluate WAM on enhancing policy learning across eight manipulation tasks from the CALVIN benchmark. We first pretrain a diffusion policy via behavioral cloning on world model latents, then refine it with model-based PPO inside the frozen world model. Without modifying the policy architecture or training procedure, WAM improves average behavioral cloning success from 59.4% to 71.2% over DreamerV2 and DiWA baselines. After PPO fine-tuning, WAM achieves 92.8% average success versus 79.8% for the baseline, with two tasks reaching 100%, using 8.7x fewer training steps.

本文提出了世界动作模型（WAM），这是一种动作规范化的世界模型，它联合推理未来的视觉观察和驱动状态转换的动作。与仅通过图像预测训练的传统世界模型不同，WAM 将逆动态目标纳入 DreamerV2，预测潜在状态转换的动作，鼓励学习的表示捕获对下游控制至关重要的动作相关结构。我们评估了 WAM 在增强 CALVIN 基准的八个操纵任务中的政策学习方面的作用。我们首先通过世界模型潜伏的行为克隆来预训练扩散策略，然后在冻结的世界模型中使用基于模型的 PPO 对其进行改进。在不修改策略架构或训练程序的情况下，WAM 将平均行为克隆成功率从 DreamerV2 和 DiWA 基线的 59.4% 提高到 71.2%。经过 PPO 微调后，WAM 的平均成功率为 92.8%，而基线为 79.8%，其中两项任务达到 100%，训练步骤减少了 8.7 倍。

</details>

---

## 8. OccSim: Multi-kilometer Simulation with Long-horizon Occupancy World Models / OccSim：使用长视野占用世界模型的多公里模拟

**Date**: 2026-03-30 | **arXiv**: [2603.28887v1](http://arxiv.org/abs/2603.28887v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.28887v1)

**Categories**: cs.CV, cs.AI, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Data-driven autonomous driving simulation has long been constrained by its heavy reliance on pre-recorded driving logs or spatial priors, such as HD maps. This fundamental dependency severely limits scalability, restricting open-ended generation capabilities to the finite scale of existing collected datasets. To break this bottleneck, we present OccSim, the first occupancy world model-driven 3D simulator. OccSim obviates the requirement for continuous logs or HD maps; conditioned only on a single initial frame and a sequence of future ego-actions, it can stably generate over 3,000 continuous frames, enabling the continuous construction of large-scale 3D occupancy maps spanning over 4 kilometers for simulation. This represents an >80x improvement in stable generation length over previous state-of-the-art occupancy world models. OccSim is powered by two modules: W-DiT based static occupancy world model and the Layout Generator. W-DiT handles the ultra-long-horizon generation of static environments by explicitly introducing known rigid transformations in architecture design, while the Layout Generator populates the dynamic foreground with reactive agents based on the synthesized road topology. With these designs, OccSim can synthesize massive, diverse simulation streams. Extensive experiments demonstrate its downstream utility: data collected directly from OccSim can pre-train 4D semantic occupancy forecasting models to achieve up to 67% zero-shot performance on unseen data, outperforming previous asset-based simulator by 11%. When scaling the OccSim dataset to 5x the size, the zero-shot performance increases to about 74%, while the improvement over asset-based simulators expands to 22.1%.

数据驱动的自动驾驶模拟长期以来一直受到严重依赖预先记录的驾驶日志或空间先验（例如高清地图）的限制。这种基本的依赖性严重限制了可扩展性，将开放式生成能力限制在现有收集数据集的有限范围内。为了打破这个瓶颈，我们推出了 OccSim，第一个居住世界模型驱动的 3D 模拟器。 OccSim 无需连续日志或高清地图；仅以单个初始帧和一系列未来自我动作为条件，它可以稳定生成超过 3,000 个连续帧，从而能够连续构建跨越 4 公里的大型 3D 占用地图以进行模拟。与之前最先进的占用世界模型相比，这意味着稳定发电长度提高了 80 倍以上。 OccSim 由两个模块提供支持：基于 W-DiT 的静态占用世界模型和布局生成器。 W-DiT 通过在架构设计中明确引入已知的刚性变换来处理静态环境的超长视野生成，而布局生成器则使用基于合成道路拓扑的反应代理填充动态前景。通过这些设计，OccSim 可以合成大量、多样化的模拟流。大量实验证明了其下游实用性：直接从 OccSim 收集的数据可以预训练 4D 语义占用预测模型，以在未见过的数据上实现高达 67% 的零样本性能，比之前基于资产的模拟器高出 11%。当将 OccSim 数据集缩放到 5 倍大小时，零样本性能提高到约 74%，而相对于基于资产的模拟器的改进扩大到 22.1%。

</details>

---



</details>

<details><summary><b>2026-03-31 (5 papers)</b></summary>

# arXiv World Model Papers - 2026-03-31

**Paper Count**: 5

---

## 1. ManipArena: Comprehensive Real-world Evaluation of Reasoning-Oriented Generalist Robot Manipulation / ManipArena：面向推理的多面手机器人操作的综合现实世界评估

**Date**: 2026-03-30 | **arXiv**: [2603.28545v1](http://arxiv.org/abs/2603.28545v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.28545v1)

**Categories**: cs.RO, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Vision-Language-Action (VLA) models and world models have recently emerged as promising paradigms for general-purpose robotic intelligence, yet their progress is hindered by the lack of reliable evaluation protocols that reflect real-world deployment. Existing benchmarks are largely simulator-centric, which provide controllability but fail to capture the reality gap caused by perception noise, complex contact dynamics, hardware constraints, and system latency. Moreover, fragmented real-world evaluations across different robot platforms prevent fair and reproducible comparison. To address these challenges, we introduce ManipArena, a standardized evaluation framework designed to bridge simulation and real-world execution. ManipArena comprises 20 diverse tasks across 10,812 expert trajectories emphasizing reasoning-oriented manipulation tasks requiring semantic and spatial reasoning, supports multi-level generalization through controlled out-of-distribution settings, and incorporates long-horizon mobile manipulation beyond tabletop scenarios. The framework further provides rich sensory diagnostics, including low-level motor signals, and synchronized real-to-sim environments constructed via high-quality 3D scanning. Together, these features enable fair, realistic, and reproducible evaluation for both VLA and world model approaches, providing a scalable foundation for diagnosing and advancing embodied intelligence systems.

视觉-语言-动作（VLA）模型和世界模型最近已成为通用机器人智能的有前途的范例，但由于缺乏反映现实世界部署的可靠评估协议，它们的进展受到阻碍。现有的基准测试主要以模拟器为中心，提供了可控性，但无法捕捉由感知噪声、复杂的接触动态、硬件限制和系统延迟引起的现实差距。此外，不同机器人平台上分散的现实世界评估阻碍了公平和可重复的比较。为了应对这些挑战，我们引入了 ManipArena，这是一个标准化的评估框架，旨在连接模拟和现实世界的执行。 ManipArena 包含 10,812 个专家轨迹中的 20 个不同任务，强调需要语义和空间推理的面向推理的操作任务，通过受控的分布外设置支持多级泛化，并结合了桌面场景之外的长视野移动操作。该框架还提供丰富的感官诊断，包括低水平运动信号，以及通过高质量 3D 扫描构建的同步真实到模拟环境。这些功能共同实现了 VLA 和世界模型方法的公平、现实和可重复的评估，为诊断和推进具身智能系统提供了可扩展的基础。

</details>

---

## 2. SkyNet: Belief-Aware Planning for Partially-Observable Stochastic Games / SkyNet：部分可观察随机博弈的信念感知规划

**Date**: 2026-03-29 | **arXiv**: [2603.27751v1](http://arxiv.org/abs/2603.27751v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.27751v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

In 2019, Google DeepMind released MuZero, a model-based reinforcement learning method that achieves strong results in perfect-information games by combining learned dynamics models with Monte Carlo Tree Search (MCTS). However, comparatively little work has extended MuZero to partially observable, stochastic, multi-player environments, where agents must act under uncertainty about hidden state. Such settings arise not only in card games but in domains such as autonomous negotiation, financial trading, and multi-agent robotics. In the absence of explicit belief modeling, MuZero's latent encoding has no dedicated mechanism for representing uncertainty over unobserved variables.   To address this, we introduce SkyNet (Belief-Aware MuZero), which adds ego-conditioned auxiliary heads for winner prediction and rank estimation to the standard MuZero architecture. These objectives encourage the latent state to retain information predictive of outcomes under partial observability, without requiring explicit belief-state tracking or changes to the search algorithm.   We evaluate SkyNet on Skyjo, a partially observable, non-zero-sum, stochastic card game, using a decision-granularity environment, transformer-based encoding, and a curriculum of heuristic opponents with self-play. In 1000-game head-to-head evaluations at matched checkpoints, SkyNet achieves a 75.3% peak win rate against the baseline (+194 Elo, $p < 10^{-50}$). SkyNet also outperforms the baseline against heuristic opponents (0.720 vs.\ 0.466 win rate). Critically, the belief-aware model initially underperforms the baseline but decisively surpasses it once training throughput is sufficient, suggesting that belief-aware auxiliary supervision improves learned representations under partial observability, but only given adequate data flow.

2019年，谷歌DeepMind发布了MuZero，这是一种基于模型的强化学习方法，通过将学习的动态模型与蒙特卡罗树搜索（MCTS）相结合，在完美信息博弈中取得了优异的结果。然而，将 MuZero 扩展到部分可观察、随机、多人环境的工作相对较少，在这种环境中，智能体必须在隐藏状态的不确定性下采取行动。这种设置不仅出现在纸牌游戏中，还出现在自主谈判、金融交易和多代理机器人等领域。在缺乏明确的信念模型的情况下，MuZero 的潜在编码没有专门的机制来表示未观察到的变量的不确定性。   为了解决这个问题，我们引入了 SkyNet（Belief-Aware MuZero），它在标准 MuZero 架构中添加了用于获胜者预测和排名估计的自我调节辅助头。这些目标鼓励潜在状态在部分可观察性下保留预测结果的信息，而不需要明确的信念状态跟踪或搜索算法的更改。   我们在 Skyjo 上评估 SkyNet，Skyjo 是一种部分可观察、非零和、随机纸牌游戏，使用决策粒度环境、基于变压器的编码以及具有自我对弈的启发式对手课程。在匹配检查点的 1000 场比赛的正面评估中，SkyNet 相对于基线实现了 75.3% 的峰值胜率（+194 Elo，$p < 10^{-50}$）。 SkyNet 在对抗启发式对手时也优于基线（0.720 vs.\ 0.466 胜率）。至关重要的是，信念感知模型最初表现不佳，但一旦训练吞吐量足够，就决定性地超越基线，这表明信念感知辅助监督可以改善部分可观察性下的学习表示，但前提是有足够的数据流。

</details>

---

## 3. ProgressVLA: Progress-Guided Diffusion Policy for Vision-Language Robotic Manipulation / ProgressVLA：视觉语言机器人操作的进步引导扩散策略

**Date**: 2026-03-29 | **arXiv**: [2603.27670v1](http://arxiv.org/abs/2603.27670v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.27670v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Most existing vision-language-action (VLA) models for robotic manipulation lack progress awareness, typically relying on hand-crafted heuristics for task termination. This limitation is particularly severe in long-horizon tasks involving cascaded sub-goals. In this work, we investigate the estimation and integration of task progress, proposing a novel model named {\textbf \vla}. Our technical contributions are twofold: (1) \emph{robust progress estimation}: We pre-train a progress estimator on large-scale, unsupervised video-text robotic datasets. This estimator achieves a low prediction residual (0.07 on a scale of $[0, 1]$) in simulation and demonstrates zero-shot generalization to unseen real-world samples, and (2) \emph{differentiable progress guidance}: We introduce an inverse dynamics world model that maps predicted action tokens into future latent visual states. These latents are then processed by the progress estimator; by applying a maximal progress regularization, we establish a differentiable pipeline that provides progress-piloted guidance to refine action tokens. Extensive experiments on the CALVIN and LIBERO benchmarks, alongside real-world robot deployment, consistently demonstrate substantial improvements in success rates and generalization over strong baselines.

大多数现有的机器人操作视觉-语言-动作（VLA）模型缺乏进度意识，通常依赖于手工设计的启发式方法来终止任务。这种限制在涉及级联子目标的长期任务中尤其严重。在这项工作中，我们研究了任务进度的估计和整合，提出了一种名为 {\textbf \vla} 的新颖模型。我们的技术贡献有两个：（1）\emph{鲁棒进度估计}：我们在大规模、无监督的视频文本机器人数据集上预训练进度估计器。该估计器在模拟中实现了低预测残差（在 $[0, 1]$ 范围内为 0.07），并演示了对未见过的现实世界样本的零样本泛化，以及（2）\emph{可微分进度指导}：我们引入了一种逆动态世界模型，该模型将预测的动作标记映射到未来的潜在视觉状态。然后，这些潜在变量由进度估计器进行处理；通过应用最大进度正则化，我们建立了一个可微分的管道，提供以进度为导向的指导来细化操作标记。对 CALVIN 和 LIBERO 基准进行的大量实验以及现实世界的机器人部署，始终证明了成功率和泛化能力比强基准有显着提高。

</details>

---

## 4. Where-to-Learn: Analytical Policy Gradient Directed Exploration for On-Policy Robotic Reinforcement Learning / 在哪里学习：策略机器人强化学习的分析策略梯度定向探索

**Date**: 2026-03-28 | **arXiv**: [2603.27317v1](http://arxiv.org/abs/2603.27317v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.27317v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

On-policy reinforcement learning (RL) algorithms have demonstrated great potential in robotic control, where effective exploration is crucial for efficient and high-quality policy learning. However, how to encourage the agent to explore the better trajectories efficiently remains a challenge. Most existing methods incentivize exploration by maximizing the policy entropy or encouraging novel state visiting regardless of the potential state value. We propose a new form of directed exploration that uses analytical policy gradients from a differentiable dynamics model to inject task-aware, physics-guided guidance, thereby steering the agent towards high-reward regions for accelerated and more effective policy learning.

在策略强化学习（RL）算法在机器人控制中展现出巨大的潜力，其中有效的探索对于高效和高质量的策略学习至关重要。然而，如何鼓励智能体有效地探索更好的轨迹仍然是一个挑战。大多数现有方法通过最大化策略熵或鼓励新的状态访问来激励探索，而不管潜在的状态价值如何。我们提出了一种新形式的定向探索，它使用可微动力学模型的分析策略梯度来注入任务感知、物理引导的指导，从而引导智能体走向高回报区域，以加速和更有效的政策学习。

</details>

---

## 5. Uni-World VLA: Interleaved World Modeling and Planning for Autonomous Driving / Uni-World VLA：自动驾驶的交错世界建模和规划

**Date**: 2026-03-28 | **arXiv**: [2603.27287v1](http://arxiv.org/abs/2603.27287v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.27287v1)

**Categories**: cs.RO, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Autonomous driving requires reasoning about how the environment evolves and planning actions accordingly. Existing world-model-based approaches typically predict future scenes first and plan afterwards, resulting in open-loop imagination that may drift from the actual decision process. In this paper, we present Uni-World VLA, a unified vision-language-action (VLA) model that tightly interleaves future frame prediction and trajectory planning. Instead of generating a full world rollout before planning, our model alternates between predicting future frames and ego actions step by step, allowing planning decisions to be continuously conditioned on the imagined future observations. This interleaved generation forms a closed-loop interaction between world modeling and control, enabling more adaptive decision-making in dynamic traffic scenarios. In addition, we incorporate monocular depth information into frames to provide stronger geometric cues for world modeling, improving long-horizon scene prediction. Experiments on the NAVSIM benchmark show that our approach achieves competitive closed-loop planning performance while producing high-fidelity future frame predictions. These results demonstrate that tightly coupling world prediction and planning is a promising direction for scalable VLA driving systems.

自动驾驶需要推理环境如何演变并相应地规划行动。现有的基于世界模型的方法通常首先预测未来场景，然后进行规划，从而导致可能偏离实际决策过程的开环想象。在本文中，我们提出了 Uni-World VLA，这是一种统一的视觉-语言-动作（VLA）模型，它将未来帧预测和轨迹规划紧密地交织在一起。我们的模型不是在规划之前生成全面​​的世界展示，而是逐步在预测未来框架和自我行为之间交替，从而使规划决策能够不断地以想象的未来观察为条件。这种交错的生成形成了世界建模和控制之间的闭环交互，从而在动态交通场景中实现更具适应性的决策。此外，我们将单眼深度信息合并到帧中，为世界建模提供更强的几何线索，从而改进长视野场景预测。 NAVSIM 基准测试表明，我们的方法实现了有竞争力的闭环规划性能，同时产生高保真度的未来帧预测。这些结果表明，紧密耦合的世界预测和规划是可扩展 VLA 驱动系统的一个有前途的方向。

</details>

---



</details>

<details><summary><b>2026-03-27 (6 papers)</b></summary>

# arXiv World Model Papers - 2026-03-27

**Paper Count**: 6

---

## 1. Out of Sight but Not Out of Mind: Hybrid Memory for Dynamic Video World Models / 眼不见心不烦：动态视频世界模型的混合内存

**Date**: 2026-03-26 | **arXiv**: [2603.25716v1](http://arxiv.org/abs/2603.25716v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.25716v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Video world models have shown immense potential in simulating the physical world, yet existing memory mechanisms primarily treat environments as static canvases. When dynamic subjects hide out of sight and later re-emerge, current methods often struggle, leading to frozen, distorted, or vanishing subjects. To address this, we introduce Hybrid Memory, a novel paradigm requiring models to simultaneously act as precise archivists for static backgrounds and vigilant trackers for dynamic subjects, ensuring motion continuity during out-of-view intervals. To facilitate research in this direction, we construct HM-World, the first large-scale video dataset dedicated to hybrid memory. It features 59K high-fidelity clips with decoupled camera and subject trajectories, encompassing 17 diverse scenes, 49 distinct subjects, and meticulously designed exit-entry events to rigorously evaluate hybrid coherence. Furthermore, we propose HyDRA, a specialized memory architecture that compresses memory into tokens and utilizes a spatiotemporal relevance-driven retrieval mechanism. By selectively attending to relevant motion cues, HyDRA effectively preserves the identity and motion of hidden subjects. Extensive experiments on HM-World demonstrate that our method significantly outperforms state-of-the-art approaches in both dynamic subject consistency and overall generation quality.

视频世界模型在模拟物理世界方面显示出巨大的潜力，但现有的记忆机制主要将环境视为静态画布。当动态主体隐藏在视线之外并随后重新出现时，当前的方法常常会遇到困难，导致主体冻结、扭曲或消失。为了解决这个问题，我们引入了混合记忆，这是一种新颖的范式，要求模型同时充当静态背景的精确档案管理员和动态主体的警惕跟踪器，确保在视野外间隔期间的运动连续性。为了促进这个方向的研究，我们构建了 HM-World，这是第一个专用于混合内存的大规模视频数据集。它具有 59K 个高保真剪辑，具有解耦的摄像机和主题轨迹，涵盖 17 个不同的场景、49 个不同的主题，以及精心设计的退出进入事件，以严格评估混合一致性。此外，我们提出了 HyDRA，一种专门的内存架构，它将内存压缩为令牌并利用时空相关性驱动的检索机制。通过选择性地关注相关运动线索，Hydra 有效地保留了隐藏对象的身份和运动。 HM-World 上的大量实验表明，我们的方法在动态主题一致性和整体生成质量方面都显着优于最先进的方法。

</details>

---

## 2. Persistent Robot World Models: Stabilizing Multi-Step Rollouts via Reinforcement Learning / 持久机器人世界模型：通过强化学习稳定多步部署

**Date**: 2026-03-26 | **arXiv**: [2603.25685v1](http://arxiv.org/abs/2603.25685v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.25685v1)

**Categories**: cs.RO, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Action-conditioned robot world models generate future video frames of the manipulated scene given a robot action sequence, offering a promising alternative for simulating tasks that are difficult to model with traditional physics engines. However, these models are optimized for short-term prediction and break down when deployed autoregressively: each predicted clip feeds back as context for the next, causing errors to compound and visual quality to rapidly degrade. We address this through the following contributions. First, we introduce a reinforcement learning (RL) post-training scheme that trains the world model on its own autoregressive rollouts rather than on ground-truth histories. We achieve this by adapting a recent contrastive RL objective for diffusion models to our setting and show that its convergence guarantees carry over exactly. Second, we design a training protocol that generates and compares multiple candidate variable-length futures from the same rollout state, reinforcing higher-fidelity predictions over lower-fidelity ones. Third, we develop efficient, multi-view visual fidelity rewards that combine complementary perceptual metrics across camera views and are aggregated at the clip level for dense, low-variance training signal. Fourth, we show that our approach establishes a new state-of-the-art for rollout fidelity on the DROID dataset, outperforming the strongest baseline on all metrics (e.g., LPIPS reduced by 14% on external cameras, SSIM improved by 9.1% on the wrist camera), winning 98% of paired comparisons, and achieving an 80% preference rate in a blind human study.

动作调节的机器人世界模型在给定机器人动作序列的情况下生成被操纵场景的未来视频帧，为模拟难以用传统物理引擎建模的任务提供了一种有前途的替代方案。然而，这些模型针对短期预测进行了优化，并且在自回归部署时会崩溃：每个预测剪辑都会作为下一个剪辑的上下文反馈，从而导致错误加剧和视觉质量迅速下降。我们通过以下贡献来解决这个问题。首先，我们引入了一种强化学习（RL）后训练方案，该方案根据自身的自回归部署而不是根据真实历史来训练世界模型。我们通过将最近的扩散模型的对比 RL 目标适应我们的设置来实现这一目标，并表明其收敛性保证了精确的延续。其次，我们设计了一个训练协议，该协议可以生成并比较来自同一推出状态的多个候选可变长度 future，从而增强对低保真度预测的高保真度预测。第三，我们开发了高效的多视图视觉保真度奖励，该奖励结合了跨摄像机视图的互补感知指标，并在剪辑级别聚合以获得密集、低方差的训练信号。第四，我们表明，我们的方法在 DROID 数据集上建立了新的最先进的展示保​​真度，在所有指标上都优于最强的基线（例如，外部摄像头的 LPIPS 降低了 14%，手腕摄像头的 SSIM 提高了 9.1%），赢得了 98% 的配对比较，并在盲人研究中获得了 80% 的偏好率。

</details>

---

## 3. Modernising Reinforcement Learning-Based Navigation for Embodied Semantic Scene Graph Generation / 现代化基于强化学习的导航以实现具体语义场景图生成

**Date**: 2026-03-26 | **arXiv**: [2603.25415v1](http://arxiv.org/abs/2603.25415v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.25415v1)

**Categories**: cs.AI, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Semantic world models enable embodied agents to reason about objects, relations, and spatial context beyond purely geometric representations. In Organic Computing, such models are a key enabler for objective-driven self-adaptation under uncertainty and resource constraints. The core challenge is to acquire observations maximising model quality and downstream usefulness within a limited action budget.   Semantic scene graphs (SSGs) provide a structured and compact representation for this purpose. However, constructing them within a finite action horizon requires exploration strategies that trade off information gain against navigation cost and decide when additional actions yield diminishing returns.   This work presents a modular navigation component for Embodied Semantic Scene Graph Generation and modernises its decision-making by replacing the policy-optimisation method and revisiting the discrete action formulation. We study compact and finer-grained, larger discrete motion sets and compare a single-head policy over atomic actions with a factorised multi-head policy over action components. We evaluate curriculum learning and optional depth-based collision supervision, and assess SSG completeness, execution safety, and navigation behaviour.   Results show that replacing the optimisation algorithm alone improves SSG completeness by 21\% relative to the baseline under identical reward shaping. Depth mainly affects execution safety (collision-free motion), while completeness remains largely unchanged. Combining modern optimisation with a finer-grained, factorised action representation yields the strongest overall completeness--efficiency trade-off.

语义世界模型使实体主体能够超越纯粹的几何表示来推理对象、关系和空间上下文。在有机计算中，此类模型是不确定性和资源限制下目标驱动自适应的关键推动者。核心挑战是在有限的行动预算内获取最大化模型质量和下游有用性的观测结果。   语义场景图（SSG）为此目的提供了结构化且紧凑的表示。然而，在有限的行动范围内构建它们需要探索策略，权衡信息增益与导航成本，并决定何时额外的行动会产生收益递减。   这项工作提出了用于具体语义场景图生成的模块化导航组件，并通过替换策略优化方法和重新审视离散动作公式来使其决策现代化。我们研究紧凑、更细粒度、更大的离散运动集，并将针对原子动作的单头策略与针对动作组件的分解多头策略进行比较。我们评估课程学习和可选的基于深度的碰撞监督，并评估 SSG 完整性、执行安全性和导航行为。   结果表明，在相同奖励塑造下，单独替换优化算法相对于基线提高了 21% 的 SSG 完整性。深度主要影响执行安全性（无碰撞运动），而完整性基本保持不变。将现代优化与更细粒度、分解的动作表示相结合，可以产生最强的整体完整性——效率权衡。

</details>

---

## 4. MMaDA-VLA: Large Diffusion Vision-Language-Action Model with Unified Multi-Modal Instruction and Generation / MMaDA-VLA：具有统一多模态指令和生成的大扩散视觉-语言-动作模型

**Date**: 2026-03-26 | **arXiv**: [2603.25406v1](http://arxiv.org/abs/2603.25406v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.25406v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Vision-Language-Action (VLA) models aim to control robots for manipulation from visual observations and natural-language instructions. However, existing hierarchical and autoregressive paradigms often introduce architectural overhead, suffer from temporal inconsistency and long-horizon error accumulation, and lack a mechanism to capture environment dynamics without extra modules. To this end, we present MMaDA-VLA, a fully native pre-trained large diffusion VLA model that unifies multi-modal understanding and generation in a single framework. Our key idea is a native discrete diffusion formulation that embeds language, images, and continuous robot controls into one discrete token space and trains a single backbone with masked token denoising to jointly generate a future goal observation and an action chunk in parallel. Iterative denoising enables global, order-free refinement, improving long-horizon consistency while grounding actions in predicted future visual outcomes without auxiliary world models. Experiments across simulation benchmarks and real-world tasks show state-of-the-art performance, achieving 98.0% average success on LIBERO and 4.78 average length on CALVIN.

视觉-语言-动作（VLA）模型旨在通过视觉观察和自然语言指令来控制机器人进行操作。然而，现有的分层和自回归范式通常会引入架构开销，遭受时间不一致和长期误差积累的困扰，并且缺乏无需额外模块即可捕获环境动态的机制。为此，我们提出了 MMaDA-VLA，这是一种完全原生的预训练大扩散 VLA 模型，它将多模态理解和生成统一在一个框架中。我们的关键思想是一种原生离散扩散公式，它将语言、图像和连续机器人控制嵌入到一个离散令牌空间中，并使用掩模令牌去噪训练单个主干，以并行地联合生成未来目标观察和动作块。迭代去噪可以实现全局、无序的细化，提高长期一致性，同时将动作基于预测的未来视觉结果，而无需辅助世界模型。跨模拟基准和实际任务的实验显示了最先进的性能，在 LIBERO 上实现了 98.0% 的平均成功率，在 CALVIN 上实现了 4.78 的平均长度。

</details>

---

## 5. A Wireless World Model for AI-Native 6G Networks / AI-Native 6G 网络的无线世界模型

**Date**: 2026-03-26 | **arXiv**: [2603.25216v1](http://arxiv.org/abs/2603.25216v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.25216v1)

**Categories**: cs.NI, cs.AI, eess.SP

<details><summary><b>Abstract / 摘要</b></summary>

Integrating AI into the physical layer is a cornerstone of 6G networks. However, current data-driven approaches struggle to generalize across dynamic environments because they lack an intrinsic understanding of electromagnetic wave propagation. We introduce the Wireless World Model (WWM), a multi-modal foundation framework predicting the spatiotemporal evolution of wireless channels by internalizing the causal relationship between 3D geometry and signal dynamics. Pre-trained on a massive ray-traced multi-modal dataset, WWM overcomes the data authenticity gap, further validated under real-world measurement data. Using a joint-embedding predictive architecture with a multi-modal mixture-of-experts Transformer, WWM fuses channel state information, 3D point clouds, and user trajectories into a unified representation. Across the five key downstream tasks supported by WWM, it achieves remarkable performance in seen environments, unseen generalization scenarios, and real-world measurements, consistently outperforming SOTA uni-modal foundation models and task-specific models. This paves the way for physics-aware 6G intelligence that adapts to the physical world.

将AI集成到物理层是6G网络的基石。然而，当前的数据驱动方法很难在动态环境中推广，因为它们缺乏对电磁波传播的内在理解。我们引入了无线世界模型 (WWM)，这是一种多模态基础框架，通过内化 3D 几何和信号动态之间的因果关系来预测无线信道的时空演化。 WWM 在海量光线追踪多模态数据集上进行了预训练，克服了数据真实性差距，并在现实世界的测量数据下得到了进一步验证。 WWM 使用联合嵌入预测架构和多模态专家混合 Transformer，将通道状态信息、3D 点云和用户轨迹融合为统一表示。在 WWM 支持的五个关键下游任务中，它在可见环境、未见泛化场景和现实世界测量中取得了卓越的性能，始终优于 SOTA 单模态基础模型和特定任务模型。这为适应物理世界的物理感知 6G 智能铺平了道路。

</details>

---

## 6. AI-Supervisor: Autonomous AI Research Supervision via a Persistent Research World Model / AI-Supervisor：通过持续研究世界模型进行自主人工智能研究监督

**Date**: 2026-03-25 | **arXiv**: [2603.24402v2](http://arxiv.org/abs/2603.24402v2) | **PDF**: [Link](http://arxiv.org/pdf/2603.24402v2)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Existing automated research systems operate as stateless, linear pipelines -- generating outputs without maintaining any persistent understanding of the research landscape they navigate. They process papers sequentially, propose ideas without structured gap analysis, and lack mechanisms for agents to verify, challenge, or refine each other's findings. We present \textbf{AI-Supervisor}, a multi-agent orchestration framework where specialized agents provide end-to-end AI research supervision driven by human interests -- from literature review through gap discovery, method development, evaluation, and paper writing -- through autonomous exploration and self-correcting updates of research knowledge. Unlike sequential pipelines, AI-Supervisor maintains a continuously evolving \emph{Research World Model}, implemented as a Knowledge Graph, that captures methods, benchmarks, known limitations, and unexplored gaps, serving as shared memory across all agents and enabling agents to explore and build upon a structured understanding of the research landscape. The framework introduces three architectural contributions: (1) \emph{structured gap discovery} that decomposes methods into core modules, validates their performance across benchmarks, and maps the specific gaps each module creates; (2) \emph{self-correcting discovery loops} that probe why modules succeed on certain problems and fail on others, whether benchmarks carry hidden biases, and whether evaluation protocols remain adequate for emerging challenges; and (3) \emph{self-improving development loops} governed by cross-domain mechanism search that iteratively targets failing modules by finding solutions from other scientific fields. All agents operate under a \emph{consensus mechanism} where independent findings are corroborated before being committed to the Research World Model.

现有的自动化研究系统作为无状态的线性管道运行——生成输出，而不保持对其所导航的研究环境的任何持久理解。他们按顺序处理论文，在没有结构化差距分析的情况下提出想法，并且缺乏代理验证、质疑或完善彼此发现的机制。我们提出了\textbf{AI-Supervisor}，一个多智能体编排框架，其中专业智能体通过自主探索和研究知识的自我修正更新，提供由人类兴趣驱动的端到端人工智能研究监督——从文献综述到差距发现、方法开发、评估和论文写作。与顺序管道不同，AI-Supervisor 维护着一个不断发展的 \emph{研究世界模型}，以知识图的形式实现，它捕获方法、基准、已知限制和未探索的差距，充当所有代理之间的共享内存，并使代理能够探索和建立对研究领域的结构化理解。该框架引入了三个架构贡献：（1）\emph{结构化差距发现}，将方法分解为核心模块，跨基准验证其性能，并映射每个模块创建的特定差距； （2）\emph{自我纠正发现循环}，探究为什么模块在某些问题上成功而在其他问题上失败，基准是否带有隐藏的偏差，以及评估协议是否足以应对新出现的挑战； (3)\emph{自我改进的开发循环}由跨域机制搜索控制，通过从其他科学领域寻找解决方案来迭代地针对失败的模块。所有代理都在\emph{共识机制}下运作，独立的发现在投入研究世界模型之前得到证实。

</details>

---



</details>

<details><summary><b>2026-03-26 (5 papers)</b></summary>

# arXiv World Model Papers - 2026-03-26

**Paper Count**: 5

---

## 1. DreamerAD: Efficient Reinforcement Learning via Latent World Model for Autonomous Driving / DreamerAD：通过自动驾驶潜在世界模型进行高效强化学习

**Date**: 2026-03-25 | **arXiv**: [2603.24587v1](http://arxiv.org/abs/2603.24587v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.24587v1)

**Categories**: cs.LG, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

We introduce DreamerAD, the first latent world model framework that enables efficient reinforcement learning for autonomous driving by compressing diffusion sampling from 100 steps to 1 - achieving 80x speedup while maintaining visual interpretability. Training RL policies on real-world driving data incurs prohibitive costs and safety risks. While existing pixel-level diffusion world models enable safe imagination-based training, they suffer from multi-step diffusion inference latency (2s/frame) that prevents high-frequency RL interaction. Our approach leverages denoised latent features from video generation models through three key mechanisms: (1) shortcut forcing that reduces sampling complexity via recursive multi-resolution step compression, (2) an autoregressive dense reward model operating directly on latent representations for fine-grained credit assignment, and (3) Gaussian vocabulary sampling for GRPO that constrains exploration to physically plausible trajectories. DreamerAD achieves 87.7 EPDMS on NavSim v2, establishing state-of-the-art performance and demonstrating that latent-space RL is effective for autonomous driving.

我们推出了 DreamerAD，这是第一个潜在世界模型框架，它通过将扩散采样从 100 步压缩到 1 步，实现自动驾驶的高效强化学习，在保持视觉可解释性的同时实现 80 倍的加速。根据现实世界的驾驶数据训练强化学习策略会带来高昂的成本和安全风险。虽然现有的像素级扩散世界模型可以实现安全的基于想象力的训练，但它们受到多步扩散推理延迟（2 秒/帧）的影响，从而阻碍了高频 RL 交互。我们的方法通过三个关键机制利用视频生成模型中的去噪潜在特征：(1) 通过递归多分辨率步骤压缩降低采样复杂性的捷径强制，(2) 直接对细粒度信用分配的潜在表示进行操作的自回归密集奖励模型，以及 (3) GRPO 的高斯词汇采样，将探索限制在物理上合理的轨迹。 DreamerAD 在 NavSim v2 上获得了 87.7 EPDMS，确立了最先进的性能，并证明了潜在空间 RL 对于自动驾驶是有效的。

</details>

---

## 2. Latent-WAM: Latent World Action Modeling for End-to-End Autonomous Driving / Latent-WAM：端到端自动驾驶的潜在世界动作建模

**Date**: 2026-03-25 | **arXiv**: [2603.24581v1](http://arxiv.org/abs/2603.24581v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.24581v1)

**Categories**: cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

We introduce Latent-WAM, an efficient end-to-end autonomous driving framework that achieves strong trajectory planning through spatially-aware and dynamics-informed latent world representations. Existing world-model-based planners suffer from inadequately compressed representations, limited spatial understanding, and underutilized temporal dynamics, resulting in sub-optimal planning under constrained data and compute budgets. Latent-WAM addresses these limitations with two core modules: a Spatial-Aware Compressive World Encoder (SCWE) that distills geometric knowledge from a foundation model and compresses multi-view images into compact scene tokens via learnable queries, and a Dynamic Latent World Model (DLWM) that employs a causal Transformer to autoregressively predict future world status conditioned on historical visual and motion representations. Extensive experiments on NAVSIM v2 and HUGSIM demonstrate new state-of-the-art results: 89.3 EPDMS on NAVSIM v2 and 28.9 HD-Score on HUGSIM, surpassing the best prior perception-free method by 3.2 EPDMS with significantly less training data and a compact 104M-parameter model.

我们引入 Latent-WAM，这是一种高效的端到端自动驾驶框架，可通过空间感知和动态信息的潜在世界表示实现强大的轨迹规划。现有的基于世界模型的规划器受到压缩表示不充分、空间理解有限和时间动态利用不足的困扰，导致在数据和计算预算受限的情况下规划不理想。 Latent-WAM 通过两个核心模块解决了这些限制：空间感知压缩世界编码器 (SCWE)，它从基础模型中提取几何知识，并通过可学习查询将多视图图像压缩为紧凑的场景标记；动态潜在世界模型 (DLWM)，它采用因果 Transformer 根据历史视觉和运动表示自动回归预测未来世界状态。 NAVSIM v2 和 HUGSIM 上的大量实验展示了新的最先进结果：NAVSIM v2 上的 EPDMS 为 89.3，HUGSIM 上的 HD 分数为 28.9，以 3.2 EPDMS 超越了最佳先验无感​​知方法，并且训练数据显着减少，并且具有紧凑的 104M 参数模型。

</details>

---

## 3. SEGAR: Selective Enhancement for Generative Augmented Reality / SEGAR：生成增强现实的选择性增强

**Date**: 2026-03-25 | **arXiv**: [2603.24541v1](http://arxiv.org/abs/2603.24541v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.24541v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Generative world models offer a compelling foundation for augmented-reality (AR) applications: by predicting future image sequences that incorporate deliberate visual edits, they enable temporally coherent, augmented future frames that can be computed ahead of time and cached, avoiding per-frame rendering from scratch in real time. In this work, we present SEGAR, a preliminary framework that combines a diffusion-based world model with a selective correction stage to support this vision. The world model generates augmented future frames with region-specific edits while preserving others, and the correction stage subsequently aligns safety-critical regions with real-world observations while preserving intended augmentations elsewhere. We demonstrate this pipeline in driving scenarios as a representative setting where semantic region structure is well defined and real-world feedback is readily available. We view this as an early step toward generative world models as practical AR infrastructure, where future frames can be generated, cached, and selectively corrected on demand.

生成世界模型为增强现实（AR）应用程序提供了令人信服的基础：通过预测包含有意视觉编辑的未来图像序列，它们可以实现时间连贯的增强未来帧，这些帧可以提前计算并缓存，从而避免从头开始实时渲染每帧。在这项工作中，我们提出了 SEGAR，这是一个初步框架，它将基于扩散的世界模型与选择性校正阶段相结合，以支持这一愿景。世界模型通过特定区域的编辑生成增强的未来框架，同时保留其他框架，校正阶段随后将安全关键区域与现实世界的观察结果保持一致，同时保留其他地方的预期增强。我们在驾驶场景中展示了这条管道作为代表性设置，其中语义区域结构被明确定义并且现实世界的反馈很容易获得。我们认为这是迈向生成世界模型作为实用 AR 基础设施的早期一步，未来的帧可以根据需要生成、缓存和有选择地纠正。

</details>

---

## 4. CUA-Suite: Massive Human-annotated Video Demonstrations for Computer-Use Agents / CUA-Suite：针对计算机使用代理的大量人工注释视频演示

**Date**: 2026-03-25 | **arXiv**: [2603.24440v1](http://arxiv.org/abs/2603.24440v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.24440v1)

**Categories**: cs.LG, cs.AI, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Computer-use agents (CUAs) hold great promise for automating complex desktop workflows, yet progress toward general-purpose agents is bottlenecked by the scarcity of continuous, high-quality human demonstration videos. Recent work emphasizes that continuous video, not sparse screenshots, is the critical missing ingredient for scaling these agents. However, the largest existing open dataset, ScaleCUA, contains only 2 million screenshots, equating to less than 20 hours of video. To address this bottleneck, we introduce CUA-Suite, a large-scale ecosystem of expert video demonstrations and dense annotations for professional desktop computer-use agents. At its core is VideoCUA, which provides approximately 10,000 human-demonstrated tasks across 87 diverse applications with continuous 30 fps screen recordings, kinematic cursor traces, and multi-layerfed reasoning annotations, totaling approximately 55 hours and 6 million frames of expert video. Unlike sparse datasets that capture only final click coordinates, these continuous video streams preserve the full temporal dynamics of human interaction, forming a superset of information that can be losslessly transformed into the formats required by existing agent frameworks. CUA-Suite further provides two complementary resources: UI-Vision, a rigorous benchmark for evaluating grounding and planning capabilities in CUAs, and GroundCUA, a large-scale grounding dataset with 56K annotated screenshots and over 3.6 million UI element annotations. Preliminary evaluation reveals that current foundation action models struggle substantially with professional desktop applications (~60% task failure rate). Beyond evaluation, CUA-Suite's rich multimodal corpus supports emerging research directions including generalist screen parsing, continuous spatial control, video-based reward modeling, and visual world models. All data and models are publicly released.

计算机使用代理 (CUA) 在自动化复杂桌面工作流程方面前景广阔，但通用代理的进展却因缺乏连续、高质量的人类演示视频而受到瓶颈。最近的工作强调，连续视频，而不是稀疏的屏幕截图，是扩展这些代理的关键缺失要素。然而，现有最大的开放数据集 ScaleCUA 仅包含 200 万张屏幕截图，相当于不到 20 小时的视频。为了解决这一瓶颈，我们推出了 CUA-Suite，这是一个为专业桌面计算机使用代理提供专家视频演示和密集注释的大型生态系统。其核心是VideoCUA，它在87个不同的应用程序中提供了大约10,000个人工演示的任务，具有连续的30 fps屏幕记录、运动学光标轨迹和多层推理注释，总计约55小时和600万帧的专家视频。与仅捕获最终点击坐标的稀疏数据集不同，这些连续视频流保留了人类交互的完整时间动态，形成了可以无损转换为现有代理框架所需的格式的信息超集。 CUA-Suite 还提供了两个互补资源：UI-Vision（用于评估 CUA 中的接地和规划能力的严格基准）和 GroundCUA（一个包含 56K 带注释的屏幕截图和超过 360 万个 UI 元素注释的大规模接地数据集）。初步评估表明，当前的基础行动模型与专业桌面应用程序存在很大差距（约 60% 的任务失败率）。除了评估之外，CUA-Suite 丰富的多模态语料库还支持新兴的研究方向，包括通用屏幕解析、连续空间控制、基于视频的奖励建模和视觉世界模型。所有数据和模型均公开发布。

</details>

---

## 5. AI-Supervisor: Autonomous AI Research Supervision via a Persistent Research World Model / AI-Supervisor：通过持续研究世界模型进行自主人工智能研究监督

**Date**: 2026-03-25 | **arXiv**: [2603.24402v1](http://arxiv.org/abs/2603.24402v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.24402v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Existing automated research systems operate as stateless, linear pipelines, generating outputs without maintaining a persistent understanding of the research landscape. They process papers sequentially, propose ideas without structured gap analysis, and lack mechanisms for agents to verify or refine each other's findings. We present AutoProf (Autonomous Professor), a multi-agent orchestration framework where specialized agents provide end-to-end AI research supervision driven by human interests, from literature review through gap discovery, method development, evaluation, and paper writing, via autonomous exploration and self-correcting updates. Unlike sequential pipelines, AutoProf maintains a continuously evolving Research World Model implemented as a Knowledge Graph, capturing methods, benchmarks, limitations, and unexplored gaps as shared memory across agents. The framework introduces three contributions: first, structured gap discovery that decomposes methods into modules, evaluates them across benchmarks, and identifies module-level gaps; second, self-correcting discovery loops that analyze why modules succeed or fail, detect benchmark biases, and assess evaluation adequacy; third, self-improving development loops using cross-domain mechanism search to iteratively address failing components. All agents operate under a consensus mechanism where findings are validated before being committed to the shared model. The framework is model-agnostic, supports mainstream large language models, and scales elastically with token budget from lightweight exploration to full-scale investigation.

现有的自动化研究系统作为无状态的线性管道运行，产生输出而无需保持对研究领域的持续了解。他们按顺序处理论文，在没有结构化差距分析的情况下提出想法，并且缺乏代理验证或完善彼此发现的机制。我们提出了 AutoProf（自主教授），这是一个多代理编排框架，其中专门的代理提供由人类兴趣驱动的端到端人工智能研究监督，从文献综述到差距发现、方法开发、评估和论文写作，通过自主探索和自我纠正更新。与顺序管道不同，AutoProf 维护一个不断发展的研究世界模型，以知识图的形式实现，捕获方法、基准、限制和未探索的差距作为跨代理的共享内存。该框架引入了三个贡献：第一，结构化差距发现，将方法分解为模块，跨基准对其进行评估，并识别模块级差距；其次，自我纠正发现循环，分析模块成功或失败的原因，检测基准偏差，并评估评估充分性；第三，使用跨域机制搜索来迭代解决失败组件的自我改进开发循环。所有代理都在共识机制下运行，在提交到共享模型之前对结果进行验证。该框架与模型无关，支持主流大型语言模型，并通过代币预算从轻量级探索到全面调查进行弹性扩展。

</details>

---



</details>

<details><summary><b>2026-03-25 (6 papers)</b></summary>

# arXiv World Model Papers - 2026-03-25

**Paper Count**: 6

---

## 1. ABot-PhysWorld: Interactive World Foundation Model for Robotic Manipulation with Physics Alignment / ABot-PhysWorld：具有物理对准的机器人操作的交互式世界基础模型

**Date**: 2026-03-24 | **arXiv**: [2603.23376v1](http://arxiv.org/abs/2603.23376v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.23376v1)

**Categories**: cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Video-based world models offer a powerful paradigm for embodied simulation and planning, yet state-of-the-art models often generate physically implausible manipulations - such as object penetration and anti-gravity motion - due to training on generic visual data and likelihood-based objectives that ignore physical laws. We present ABot-PhysWorld, a 14B Diffusion Transformer model that generates visually realistic, physically plausible, and action-controllable videos. Built on a curated dataset of three million manipulation clips with physics-aware annotation, it uses a novel DPO-based post-training framework with decoupled discriminators to suppress unphysical behaviors while preserving visual quality. A parallel context block enables precise spatial action injection for cross-embodiment control. To better evaluate generalization, we introduce EZSbench, the first training-independent embodied zero-shot benchmark combining real and synthetic unseen robot-task-scene combinations. It employs a decoupled protocol to separately assess physical realism and action alignment. ABot-PhysWorld achieves new state-of-the-art performance on PBench and EZSbench, surpassing Veo 3.1 and Sora v2 Pro in physical plausibility and trajectory consistency. We will release EZSbench to promote standardized evaluation in embodied video generation.

基于视频的世界模型为具体模拟和规划提供了强大的范例，但由于对通用视觉数据和忽略物理定律的基于可能性的目标进行训练，最先进的模型经常会产生物理上难以置信的操作，例如物体穿透和反重力运动。我们推出了 ABot-PhysWorld，这是一种 14B 扩散变压器模型，可生成视觉逼真、物理合理且动作可控的视频。它建立在包含 300 万个带有物理感知注释的操作剪辑的精选数据集的基础上，使用一种新颖的基于 DPO 的后训练框架和解耦鉴别器来抑制非物理行为，同时保持视觉质量。并行上下文块可以实现跨实施例控制的精确空间动作注入。为了更好地评估泛化性，我们引入了 EZSbench，这是第一个独立于训练的零样本基准，结合了真实和合成的看不见的机器人任务场景组合。它采用解耦协议来单独评估物理真实性和动作对齐。 ABot-PhysWorld 在 PBench 和 EZSbench 上实现了最先进的性能，在物理合理性和轨迹一致性方面超越了 Veo 3.1 和 Sora v2 Pro。我们将发布EZSbench以促进具体视频生成的标准化评估。

</details>

---

## 2. Neural ODE and SDE Models for Adaptation and Planning in Model-Based Reinforcement Learning / 基于模型的强化学习中用于适应和规划的神经 ODE 和 SDE 模型

**Date**: 2026-03-24 | **arXiv**: [2603.23245v1](http://arxiv.org/abs/2603.23245v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.23245v1)

**Categories**: cs.LG, cs.AI

**Code**: https://github.com/ChaoHan-UoS/NeuralRL

<details><summary><b>Abstract / 摘要</b></summary>

We investigate neural ordinary and stochastic differential equations (neural ODEs and SDEs) to model stochastic dynamics in fully and partially observed environments within a model-based reinforcement learning (RL) framework. Through a sequence of simulations, we show that neural SDEs more effectively capture the inherent stochasticity of transition dynamics, enabling high-performing policies with improved sample efficiency in challenging scenarios. We leverage neural ODEs and SDEs for efficient policy adaptation to changes in environment dynamics via inverse models, requiring only limited interactions with the new environment. To address partial observability, we introduce a latent SDE model that combines an ODE with a GAN-trained stochastic component in latent space. Policies derived from this model provide a strong baseline, outperforming or matching general model-based and model-free approaches across stochastic continuous-control benchmarks. This work demonstrates the applicability of action-conditional latent SDEs for RL planning in environments with stochastic transitions. Our code is available at: https://github.com/ChaoHan-UoS/NeuralRL

我们研究神经常微分方程和随机微分方程（神经常微分方程和神经微分方程），以在基于模型的强化学习 (RL) 框架内对完全和部分观察的环境中的随机动力学进行建模。通过一系列模拟，我们表明神经 SDE 可以更有效地捕获过渡动态的固有随机性，从而在具有挑战性的场景中实现高性能策略并提高样本效率。我们利用神经 ODE 和 SDE 通过逆模型来有效地调整政策以适应环境动态的变化，只需要与新环境进行有限的交互。为了解决部分可观测性问题，我们引入了一种潜在的 SDE 模型，它将 ODE 与潜在空间中经过 GAN 训练的随机分量相结合。从该模型导出的策略提供了强大的基线，在随机连续控制基准中优于或匹配基于模型和无模型的通用方法。这项工作证明了动作条件潜在 SDE 在随机转换环境中的 RL 规划中的适用性。我们的代码位于：https://github.com/ChaoHan-UoS/NeuralRL

</details>

---

## 3. Describe-Then-Act: Proactive Agent Steering via Distilled Language-Action World Models / 描述然后行动：通过精炼的语言-动作世界模型进行主动代理指导

**Date**: 2026-03-24 | **arXiv**: [2603.23149v1](http://arxiv.org/abs/2603.23149v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.23149v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Deploying safety-critical agents requires anticipating the consequences of actions before they are executed. While world models offer a paradigm for this proactive foresight, current approaches relying on visual simulation incur prohibitive latencies, often exceeding several seconds per step. In this work, we challenge the assumption that visual processing is necessary for failure prevention. We show that a trained policy's latent state, combined with its planned actions, already encodes sufficient information to anticipate action outcomes, making visual simulation redundant for failure prevention. To this end, we introduce DILLO (DIstiLLed Language-ActiOn World Model), a fast steering layer that shifts the paradigm from "simulate-then-act" to "describe-then-act." DILLO is trained via cross-modal distillation, where a privileged Vision Language Model teacher annotates offline trajectories and a latent-conditioned Large Language Model student learns to predict semantic outcomes. This creates a text-only inference path, bypassing heavy visual generation entirely, achieving a 14x speedup over baselines. Experiments on MetaWorld and LIBERO demonstrate that DILLO produces high-fidelity descriptions of the next state and is able to steer the policy, improving episode success rate by up to 15 pp and 9.3 pp on average across tasks.

部署安全关键代理需要在执行之前预测操作的后果。虽然世界模型为这种主动预见提供了范例，但当前依赖视觉模拟的方法会产生令人望而却步的延迟，通常每步超过几秒。在这项工作中，我们挑战了视觉处理对于预防故障是必要的这一假设。我们表明，训练有素的策略的潜在状态与其计划的行动相结合，已经编码了足够的信息来预测行动结果，使得视觉模拟对于预防故障来说是多余的。为此，我们引入了 DILLO（DIstiLLed Language-Action World Model），这是一个快速控制层，可将范式从“模拟然后行动”转变为“描述然后行动”。 DILLO 通过跨模态蒸馏进行训练，其中一位享有特权的视觉语言模型教师注释离线轨迹，而一位潜在条件大语言模型学生学习预测语义结果。这创建了一条纯文本推理路径，完全绕过繁重的视觉生成，实现了基线 14 倍的加速。 MetaWorld 和 LIBERO 上的实验表明，DILLO 可以对下一个状态进行高保真描述，并能够引导策略，将任务中的事件成功率平均提高高达 15 pp 和 9.3 pp。

</details>

---

## 4. PhotoAgent: A Robotic Photographer with Spatial and Aesthetic Understanding / PhotoAgent：具有空间和审美理解的机器人摄影师

**Date**: 2026-03-24 | **arXiv**: [2603.22796v1](http://arxiv.org/abs/2603.22796v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.22796v1)

**Categories**: cs.CV, cs.AI, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Embodied agents for creative tasks like photography must bridge the semantic gap between high-level language commands and geometric control. We introduce PhotoAgent, an agent that achieves this by integrating Large Multimodal Models (LMMs) reasoning with a novel control paradigm. PhotoAgent first translates subjective aesthetic goals into solvable geometric constraints via LMM-driven, chain-of-thought (CoT) reasoning, allowing an analytical solver to compute a high-quality initial viewpoint. This initial pose is then iteratively refined through visual reflection within a photorealistic internal world model built with 3D Gaussian Splatting (3DGS). This ``mental simulation'' replaces costly and slow physical trial-and-error, enabling rapid convergence to aesthetically superior results. Evaluations confirm that PhotoAgent excels in spatial reasoning and achieves superior final image quality.

摄影等创造性任务的具体代理必须弥合高级语言命令和几何控制之间的语义差距。我们引入了 PhotoAgent，这是一种通过将大型多模态模型 (LMM) 推理与新颖的控制范例相集成来实现这一目标的代理。 PhotoAgent 首先通过 LMM 驱动的思想链 (CoT) 推理将主观审美目标转化为可解的几何约束，从而允许分析求解器计算高质量的初始视点。然后，通过在使用 3D 高斯泼溅 (3DGS) 构建的真实感内部世界模型中的视觉反射，迭代完善该初始姿势。这种“心理模拟”取代了昂贵且缓慢的物理试错，能够快速收敛到美观的卓越结果。评估证实 PhotoAgent 在空间推理方面表现出色，并实现了卓越的最终图像质量。

</details>

---

## 5. AI Mental Models: Learned Intuition and Deliberation in a Bounded Neural Architecture / 人工智能心理模型：有界神经架构中学习的直觉和深思熟虑

**Date**: 2026-03-23 | **arXiv**: [2603.22561v1](http://arxiv.org/abs/2603.22561v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.22561v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

This paper asks whether a bounded neural architecture can exhibit a meaningful division of labor between intuition and deliberation on a classic 64-item syllogistic reasoning benchmark. More broadly, the benchmark is relevant to ongoing debates about world models and multi-stage reasoning in AI. It provides a controlled setting for testing whether a learned system can develop structured internal computation rather than only one-shot associative prediction. Experiment 1 evaluates a direct neural baseline for predicting full 9-way human response distributions under 5-fold cross-validation. Experiment 2 introduces a bounded dual-path architecture with separate intuition and deliberation pathways, motivated by computational mental-model theory (Khemlani & Johnson-Laird, 2022). Under cross-validation, bounded intuition reaches an aggregate correlation of r = 0.7272, whereas bounded deliberation reaches r = 0.8152, and the deliberation advantage is significant across folds (p = 0.0101). The largest held-out gains occur for NVC, Eca, and Oca, suggesting improved handling of rejection responses and c-a conclusions. A canonical 80:20 interpretability run and a five-seed stability sweep further indicate that the deliberation pathway develops sparse, differentiated internal structure, including an Oac-leaning state, a dominant workhorse state, and several weakly used or unused states whose exact indices vary across runs. These findings are consistent with reasoning-like internal organization under bounded conditions, while stopping short of any claim that the model reproduces full sequential processes of model construction, counterexample search, and conclusion revision.

本文询问有界神经架构是否可以在经典的 64 项三段论推理基准上表现出直觉和深思熟虑之间有意义的分工。更广泛地说，该基准与正在进行的关于人工智能世界模型和多阶段推理的争论相关。它提供了一种受控设置，用于测试学习系统是否可以开发结构化内部计算，而不仅仅是一次性关联预测。实验 1 评估直接神经基线，用于预测 5 倍交叉验证下的完整 9 路人类反应分布。实验 2 引入了一种有界双路径架构，具有独立的直觉和深思熟虑路径，其动机是计算心智模型理论（Khemlani & Johnson-Laird，2022）。在交叉验证下，有界直觉达到 r = 0.7272 的总相关性，而有界深思熟虑达到 r = 0.8152，并且深思熟虑优势在跨倍数上显着 (p = 0.0101)。 NVC、Eca 和 Oca 的保留收益最大，这表明对拒绝响应和 c-a 结论的处理得到了改进。规范的 80:20 可解释性运行和五种子稳定性扫描进一步表明，审议途径形成了稀疏的、差异化的内部结构，包括 Oac 倾向状态、主要主力状态以及几个弱使用或未使用的状态，其确切指数在运行中有所不同。这些发现与有限条件下类似推理的内部组织一致，同时没有任何声称该模型再现了模型构建、反例搜索和结论修正的完整顺序过程。

</details>

---

## 6. Model Predictive Control with Differentiable World Models for Offline Reinforcement Learning / 用于离线强化学习的可微世界模型的模型预测控制

**Date**: 2026-03-23 | **arXiv**: [2603.22430v1](http://arxiv.org/abs/2603.22430v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.22430v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Offline Reinforcement Learning (RL) aims to learn optimal policies from fixed offline datasets, without further interactions with the environment. Such methods train an offline policy (or value function), and apply it at inference time without further refinement. We introduce an inference time adaptation framework inspired by model predictive control (MPC) that utilizes a pretrained policy along with a learned world model of state transitions and rewards. While existing world model and diffusion-planning methods use learned dynamics to generate imagined trajectories during training, or to sample candidate plans at inference time, they do not use inference-time information to optimize the policy parameters on the fly. In contrast, our design is a Differentiable World Model (DWM) pipeline that enables endto-end gradient computation through imagined rollouts for policy optimization at inference time based on MPC. We evaluate our algorithm on D4RL continuous-control benchmarks (MuJoCo locomotion tasks and AntMaze), and show that exploiting inference-time information to optimize the policy parameters yields consistent gains over strong offline RL baselines.

离线强化学习（RL）旨在从固定的离线数据集中学习最优策略，而无需与环境进一步交互。此类方法训练离线策略（或价值函数），并在推理时应用它，而无需进一步细化。我们引入了受模型预测控制（MPC）启发的推理时间适应框架，该框架利用预训练策略以及状态转换和奖励的学习世界模型。虽然现有的世界模型和扩散规划方法使用学习动态在训练期间生成想象的轨迹，或在推理时对候选计划进行采样，但它们不使用推理时信息来动态优化策略参数。相比之下，我们的设计是可微分世界模型 (DWM) 管道，它通过基于 MPC 的推理时策略优化的想象部署来实现端到端梯度计算。我们在 D4RL 连续控制基准（MuJoCo 运动任务和 AntMaze）上评估我们的算法，并表明利用推理时间信息来优化策略参数可比强大的离线 RL 基准产生一致的增益。

</details>

---



</details>

<details><summary><b>2026-03-24 (9 papers)</b></summary>

# arXiv World Model Papers - 2026-03-24

**Paper Count**: 9

---

## 1. WorldCache: Content-Aware Caching for Accelerated Video World Models / WorldCache：用于加速视频世界模型的内容感知缓存

**Date**: 2026-03-23 | **arXiv**: [2603.22286v1](http://arxiv.org/abs/2603.22286v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.22286v1)

**Categories**: cs.CV, cs.AI, cs.CL, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion Transformers (DiTs) power high-fidelity video world models but remain computationally expensive due to sequential denoising and costly spatio-temporal attention. Training-free feature caching accelerates inference by reusing intermediate activations across denoising steps; however, existing methods largely rely on a Zero-Order Hold assumption i.e., reusing cached features as static snapshots when global drift is small. This often leads to ghosting artifacts, blur, and motion inconsistencies in dynamic scenes. We propose \textbf{WorldCache}, a Perception-Constrained Dynamical Caching framework that improves both when and how to reuse features. WorldCache introduces motion-adaptive thresholds, saliency-weighted drift estimation, optimal approximation via blending and warping, and phase-aware threshold scheduling across diffusion steps. Our cohesive approach enables adaptive, motion-consistent feature reuse without retraining. On Cosmos-Predict2.5-2B evaluated on PAI-Bench, WorldCache achieves \textbf{2.3$\times$} inference speedup while preserving \textbf{99.4\%} of baseline quality, substantially outperforming prior training-free caching approaches. Our code can be accessed on \href{https://umair1221.github.io/World-Cache/}{World-Cache}.

扩散变压器（DiT）为高保真视频世界模型提供动力，但由于顺序去噪和昂贵的时空注意力，计算成本仍然很高。免训练特征缓存通过在去噪步骤中重用中间激活来加速推理；然而，现有的方法很大程度上依赖于零阶保持假设，即当全局漂移很小时，将缓存的特征重新用作静态快照。这通常会导致动态场景中出现重影伪影、模糊和运动不一致。我们提出 \textbf{WorldCache}，一个感知约束的动态缓存框架，可以改进重用功能的时间和方式。 WorldCache 引入了运动自适应阈值、显着性加权漂移估计、通过混合和变形的最佳近似以及跨扩散步骤的相位感知阈值调度。我们的内聚方法可以实现自适应、运动一致的特征重用，而无需重新训练。在 PAI-Bench 上评估的 Cosmos-Predict2.5-2B 上，WorldCache 实现了 \textbf{2.3$\times$} 推理加速，同时保留了 \textbf{99.4\%} 的基线质量，大大优于之前的免训练缓存方法。我们的代码可以在 \href{https://umair1221.github.io/World-Cache/}{World-Cache} 上访问。

</details>

---

## 2. ThinkJEPA: Empowering Latent World Models with Large Vision-Language Reasoning Model / ThinkJEPA：通过大视觉语言推理模型增强潜在世界模型

**Date**: 2026-03-23 | **arXiv**: [2603.22281v1](http://arxiv.org/abs/2603.22281v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.22281v1)

**Categories**: cs.CV, cs.AI, cs.CL, cs.LG, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Recent progress in latent world models (e.g., V-JEPA2) has shown promising capability in forecasting future world states from video observations. Nevertheless, dense prediction from a short observation window limits temporal context and can bias predictors toward local, low-level extrapolation, making it difficult to capture long-horizon semantics and reducing downstream utility. Vision--language models (VLMs), in contrast, provide strong semantic grounding and general knowledge by reasoning over uniformly sampled frames, but they are not ideal as standalone dense predictors due to compute-driven sparse sampling, a language-output bottleneck that compresses fine-grained interaction states into text-oriented representations, and a data-regime mismatch when adapting to small action-conditioned datasets. We propose a VLM-guided JEPA-style latent world modeling framework that combines dense-frame dynamics modeling with long-horizon semantic guidance via a dual-temporal pathway: a dense JEPA branch for fine-grained motion and interaction cues, and a uniformly sampled VLM \emph{thinker} branch with a larger temporal stride for knowledge-rich guidance. To transfer the VLM's progressive reasoning signals effectively, we introduce a hierarchical pyramid representation extraction module that aggregates multi-layer VLM representations into guidance features compatible with latent prediction. Experiments on hand-manipulation trajectory prediction show that our method outperforms both a strong VLM-only baseline and a JEPA-predictor baseline, and yields more robust long-horizon rollout behavior.

潜在世界模型（例如 V-JEPA2）的最新进展显示出通过视频观测预测未来世界状态的良好能力。然而，短观察窗口的密集预测限制了时间上下文，并且可能使预测器偏向局部、低级外推，从而难以捕获长范围语义并降低下游效用。相比之下，视觉语言模型（VLM）通过对均匀采样的帧进行推理来提供强大的语义基础和常识，但由于计算驱动的稀疏采样、将细粒度交互状态压缩为面向文本的表示的语言输出瓶颈以及适应小型动作条件数据集时的数据机制不匹配，它们作为独立的密集预测器并不理想。我们提出了一种 VLM 引导的 JEPA 式潜在世界建模框架，该框架通过双时间路径将密集帧动力学建模与长视野语义指导相结合：用于细粒度运动和交互线索的密集 JEPA 分支，以及具有较大时间步长的均匀采样 VLM \emph{thinker} 分支，用于知识丰富的指导。为了有效地传输 VLM 的渐进推理信号，我们引入了分层金字塔表示提取模块，该模块将多层 VLM 表示聚合为与潜在预测兼容的指导特征。手动轨迹预测实验表明，我们的方法优于强大的仅 VLM 基线和 JEPA 预测器基线，并产生更稳健的长范围推出行为。

</details>

---

## 3. Do World Action Models Generalize Better than VLAs? A Robustness Study / 世界行动模型比 VLA 更具有普遍性吗？稳健性研究

**Date**: 2026-03-23 | **arXiv**: [2603.22078v1](http://arxiv.org/abs/2603.22078v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.22078v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Robot action planning in the real world is challenging as it requires not only understanding the current state of the environment but also predicting how it will evolve in response to actions. Vision-language-action (VLA), which repurpose large-scale vision-language models for robot action generation using action experts, have achieved notable success across a variety of robotic tasks. Nevertheless, their performance remains constrained by the scope of their training data, exhibiting limited generalization to unseen scenarios and vulnerability to diverse contextual perturbations. More recently, world models have been revisited as an alternative to VLAs. These models, referred to as world action models (WAMs), are built upon world models that are trained on large corpora of video data to predict future states. With minor adaptations, their latent representation can be decoded into robot actions. It has been suggested that their explicit dynamic prediction capacity, combined with spatiotemporal priors acquired from web-scale video pretraining, enables WAMs to generalize more effectively than VLAs. In this paper, we conduct a comparative study of prominent state-of-the-art VLA policies and recently released WAMs. We evaluate their performance on the LIBERO-Plus and RoboTwin 2.0-Plus benchmarks under various visual and language perturbations. Our results show that WAMs achieve strong robustness, with LingBot-VA reaching 74.2% success rate on RoboTwin 2.0-Plus and Cosmos-Policy achieving 82.2% on LIBERO-Plus. While VLAs such as $π_{0.5}$ can achieve comparable robustness on certain tasks, they typically require extensive training with diverse robotic datasets and varied learning objectives. Hybrid approaches that partially incorporate video-based dynamic learning exhibit intermediate robustness, highlighting the importance of how video priors are integrated.

现实世界中的机器人行动规划具有挑战性，因为它不仅需要了解环境的当前状态，还需要预测环境将如何响应行动而演变。视觉语言动作（VLA）利用动作专家重新利用大规模视觉语言模型来生成机器人动作，在各种机器人任务中取得了显着的成功。然而，它们的性能仍然受到训练数据范围的限制，对未见过的场景的泛化能力有限，并且容易受到各种背景扰动的影响。最近，世界模型作为 VLA 的替代品被重新审视。这些模型称为世界行动模型 (WAM)，建立在世界模型的基础上，这些世界模型经过大型视频数据集的训练以预测未来状态。通过细微的调整，它们的潜在表示可以被解码为机器人动作。有人认为，它们的显式动态预测能力与从网络规模视频预训练中获得的时空先验相结合，使 WAM 能够比 VLA 更有效地泛化。在本文中，我们对最先进的 VLA 政策和最近发布的 WAM 进行了比较研究。我们评估了它们在各种视觉和语言扰动下在 LIBERO-Plus 和 RoboTwin 2.0-Plus 基准上的表现。我们的结果表明，WAM 具有很强的鲁棒性，LingBot-VA 在 RoboTwin 2.0-Plus 上达到 74.2% 的成功率，Cosmos-Policy 在 LIBERO-Plus 上达到 82.2% 的成功率。虽然 $π_{0.5}$ 等 VLA 在某些任务上可以实现相当的鲁棒性，但它们通常需要使用不同的机器人数据集和不同的学习目标进行广泛的训练。部分结合基于视频的动态学习的混合方法表现出中等鲁棒性，突出了如何集成视频先验的重要性。

</details>

---

## 4. What Do World Models Learn in RL? Probing Latent Representations in Learned Environment Simulators / 世界模型在强化学习中学到什么？探索学习环境模拟器中的潜在表示

**Date**: 2026-03-23 | **arXiv**: [2603.21546v1](http://arxiv.org/abs/2603.21546v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.21546v1)

**Categories**: cs.LG, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

World models learn to simulate environment dynamics from experience, enabling sample-efficient reinforcement learning. But what do these models actually represent internally? We apply interpretability techniques--including linear and nonlinear probing, causal interventions, and attention analysis--to two architecturally distinct world models: IRIS (discrete token transformer) and DIAMOND (continuous diffusion UNet), trained on Atari Breakout and Pong. Using linear probes, we find that both models develop linearly decodable representations of game state variables (object positions, scores), with MLP probes yielding only marginally higher R^2, confirming that these representations are approximately linear. Causal interventions--shifting hidden states along probe-derived directions--produce correlated changes in model predictions, providing evidence that representations are functionally used rather than merely correlated. Analysis of IRIS attention heads reveals spatial specialization: specific heads attend preferentially to tokens overlapping with game objects. Multi-baseline token ablation experiments consistently identify object-containing tokens as disproportionately important. Our findings provide interpretability evidence that learned world models develop structured, approximately linear internal representations of environment state across two games and two architectures.

世界模型学习从经验中模拟环境动态，从而实现样本高效的强化学习。但这些模型实际上在内部代表什么？我们将可解释性技术（包括线性和非线性探测、因果干预和注意力分析）应用于两个架构不同的世界模型：IRIS（离散令牌转换器）和 DIAMOND（连续扩散 UNet），并在 Atari Breakout 和 Pong 上进行训练。使用线性探针，我们发现两个模型都开发了游戏状态变量（对象位置、分数）的线性可解码表示，而 MLP 探针仅产生稍高的 R^2，证实这些表示近似线性。因果干预——沿着探针导出的方向改变隐藏状态——在模型预测中产生相关变化，提供证据表明表示是在功能上使用的，而不仅仅是相关的。对 IRIS 注意力头的分析揭示了空间专业化：特定头优先关注与游戏对象重叠的标记。多基线标记消融实验一致认为包含对象的标记非常重要。我们的研究结果提供了可解释性证据，表明学习世界模型在两个游戏和两种架构中开发了结构化的、近似线性的环境状态内部表示。

</details>

---

## 5. ARYA: A Physics-Constrained Composable & Deterministic World Model Architecture / ARYA：物理约束的可组合和确定性世界模型架构

**Date**: 2026-03-22 | **arXiv**: [2603.21340v1](http://arxiv.org/abs/2603.21340v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.21340v1)

**Categories**: cs.AI, cs.DC

<details><summary><b>Abstract / 摘要</b></summary>

This paper presents ARYA, a composable, physics-constrained, deterministic world model architecture built on five foundational principles: nano models, composability, causal reasoning, determinism, and architectural AI safety. We demonstrate that ARYA satisfies all canonical world model requirements, including state representation, dynamic prediction, causal and physical awareness, temporal consistency, generalization, learnability, and planning and control. Unlike monolithic foundation models, the ARYA foundation model implements these capabilities through a hierarchical system-of-system-of-systems of specialized nano models, orchestrated by AARA (ARYA Autonomous Research Agent), an always-on cognitive daemon that executes a continuous sense-decide-act-learn loop. The nano model architecture provides linear scaling, sparse activation, selective untraining, and sub-20-second training cycles, resolving the traditional tension between capability and computational efficiency. A central contribution is the Unfireable Safety Kernel: an architecturally immutable safety boundary that cannot be disabled or circumvented by any system component, including its own self-improvement engine. This is not a social or ethical alignment statement; it is a technical framework ensuring human control persists as autonomy increases. Safety is an architectural constraint governing every operation, not a policy layer applied after the fact. We present formal alignment between ARYA's architecture and canonical world model requirements, and report summarizing its state-of-the-art performance across 6 of 9 competitive benchmarks head-to-head with GPT-5.2, Opus 4.6, and V-JEPA-2. All with zero neural network parameters, across seven active industry domain nodes spanning aerospace, pharma manufacturing, oil and gas, smart cities, biotech, defense, and medical devices.

本文介绍了 ARYA，一种可组合的、物理约束的、确定性的世界模型架构，它建立在五个基本原则之上：纳米模型、可组合性、因果推理、确定性和架构人工智能安全性。我们证明 ARYA 满足所有规范世界模型的要求，包括状态表示、动态预测、因果和物理意识、时间一致性、泛化、可学习性以及规划和控制。与整体基础模型不同，ARYA 基础模型通过专门纳米模型的分层系统系统实现这些功能，由 AARA（ARYA 自主研究代理）编排，AARA 是一个始终在线的认知守护进程，执行连续的感知-决定-行动-学习循环。纳米模型架构提供线性缩放、稀疏激活、选择性取消训练和 20 秒以下的训练周期，解决了能力和计算效率之间的传统紧张关系。一个核心贡献是不可激发的安全内核：一个架构上不可变的安全边界，不能被任何系统组件禁用或规避，包括其自身的自我改进引擎。这不是社会或道德联盟声明；它是一个技术框架，确保随着自主权的增加人类控制持续存在。安全是管理每个操作的架构约束，而不是事后应用的策略层。我们提出了 ARYA 架构与规范世界模型要求之间的正式一致性，并报告总结了其在与 GPT-5.2、Opus 4.6 和 V-JEPA-2 正面交锋的 9 个竞争基准中的 6 个中的最先进性能。所有神经网络参数均为零，横跨航空航天、制药制造、石油和天然气、智能城市、生物技术、国防和医疗设备等七个活跃行业领域节点。

</details>

---

## 6. FluidWorld: Reaction-Diffusion Dynamics as a Predictive Substrate for World Models / FluidWorld：反应扩散动力学作为世界模型的预测基础

**Date**: 2026-03-22 | **arXiv**: [2603.21315v1](http://arxiv.org/abs/2603.21315v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.21315v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

World models learn to predict future states of an environment, enabling planning and mental simulation. Current approaches default to Transformer-based predictors operating in learned latent spaces. This comes at a cost: O(N^2) computation and no explicit spatial inductive bias. This paper asks a foundational question: is self-attention necessary for predictive world modeling, or can alternative computational substrates achieve comparable or superior results? I introduce FluidWorld, a proof-of-concept world model whose predictive dynamics are governed by partial differential equations (PDEs) of reaction-diffusion type. Instead of using a separate neural network predictor, the PDE integration itself produces the future state prediction. In a strictly parameter-matched three-way ablation on unconditional UCF-101 video prediction (64x64, ~800K parameters, identical encoder, decoder, losses, and data), FluidWorld is compared against both a Transformer baseline (self-attention) and a ConvLSTM baseline (convolutional recurrence). While all three models converge to comparable single-step prediction loss, FluidWorld achieves 2x lower reconstruction error, produces representations with 10-15% higher spatial structure preservation and 18-25% more effective dimensionality, and critically maintains coherent multi-step rollouts where both baselines degrade rapidly. All experiments were conducted on a single consumer-grade PC (Intel Core i5, NVIDIA RTX 4070 Ti), without any large-scale compute. These results establish that PDE-based dynamics, which natively provide O(N) spatial complexity, adaptive computation, and global spatial coherence through diffusion, are a viable and parameter-efficient alternative to both attention and convolutional recurrence for world modeling.

世界模型学习预测环境的未来状态，从而实现规划和心理模拟。当前的方法默认使用在学习的潜在空间中运行的基于 Transformer 的预测器。这是有代价的：O(N^2) 计算并且没有显式的空间归纳偏差。本文提出了一个基本问题：自注意力对于预测世界建模是否必要，或者替代计算基底能否获得可比或更好的结果？我介绍 FluidWorld，这是一个概念验证的世界模型，其预测动力学由反应扩散类型的偏微分方程 (PDE) 控制。 PDE 积分本身会产生未来状态预测，而不是使用单独的神经网络预测器。在无条件 UCF-101 视频预测（64x64、~800K 参数、相同的编码器、解码器、损失和数据）上进行严格参数匹配的三向消融中，FluidWorld 与 Transformer 基线（自注意力）和 ConvLSTM 基线（卷积递归）进行比较。虽然所有三个模型都收敛到可比较的单步预测损失，但 FluidWorld 实现了 2 倍的较低重建误差，生成的表示形式的空间结构保留率提高了 10-15%，有效维度提高了 18-25%，并且在两个基线快速退化的情况下严格保持了连贯的多步推出。所有实验均在一台消费级 PC（Intel Core i5、NVIDIA RTX 4070 Ti）上进行，没有任何大规模计算。这些结果表明，基于偏微分方程的动力学本质上提供了 O(N) 空间复杂度、自适应计算和通过扩散的全局空间一致性，是世界建模中注意力和卷积递归的可行且参数高效的替代方案。

</details>

---

## 7. Revisiting Tree Search for LLMs: Gumbel and Sequential Halving for Budget-Scalable Reasoning / 重新审视法学硕士的树搜索：预算可扩展推理的 Gumbel 和顺序减半

**Date**: 2026-03-22 | **arXiv**: [2603.21162v1](http://arxiv.org/abs/2603.21162v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.21162v1)

**Categories**: cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Neural tree search is a powerful decision-making algorithm widely used in complex domains such as game playing and model-based reinforcement learning. Recent work has applied AlphaZero-style tree search to enhance the reasoning capabilities of Large Language Models (LLMs) during inference, but we find that this approach suffers from a scaling failure: on GSM8K and Game24, accuracy drops as the search budget increases. In this paper, we present ReSCALE, an adaptation of Gumbel AlphaZero MCTS that replaces Dirichlet noise and PUCT selection with Gumbel sampling and Sequential Halving, restoring monotonic scaling without changes to the model or its training. ReSCALE reaches 58.4\% on GSM8K and 85.3\% on Game24 at budgets where the baseline degrades. Ablations confirm that Sequential Halving is the primary driver of the improvement.

神经树搜索是一种强大的决策算法，广泛应用于游戏和基于模型的强化学习等复杂领域。最近的工作应用了 AlphaZero 式的树搜索来增强大型语言模型 (LLM) 在推理过程中的推理能力，但我们发现这种方法存在扩展失败的问题：在 GSM8K 和 Game24 上，随着搜索预算的增加，准确性会下降。在本文中，我们提出了 ReSCALE，它是 Gumbel AlphaZero MCTS 的一种改进，它用 Gumbel 采样和顺序减半取代了 Dirichlet 噪声和 PUCT 选择，在不改变模型或其训练的情况下恢复单调缩放。在基线下降的预算下，ReSCALE 在 GSM8K 上达到 58.4%，在 Game24 上达到 85.3%。消融证实，顺序减半是改善的主要驱动力。

</details>

---

## 8. CounterScene: Counterfactual Causal Reasoning in Generative World Models for Safety-Critical Closed-Loop Evaluation / CounterScene：用于安全关键闭环评估的生成世界模型中的反事实因果推理

**Date**: 2026-03-22 | **arXiv**: [2603.21104v1](http://arxiv.org/abs/2603.21104v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.21104v1)

**Categories**: cs.RO, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Generating safety-critical driving scenarios requires understanding why dangerous interactions arise, rather than merely forcing collisions. However, existing methods rely on heuristic adversarial agent selection and unstructured perturbations, lacking explicit modeling of interaction dependencies and thus exhibiting a realism--adversarial trade-off. We present CounterScene, a framework that endows closed-loop generative BEV world models with structured counterfactual reasoning for safety-critical scenario generation. Given a safe scene, CounterScene asks: what if the causally critical agent had behaved differently? To answer this, we introduce causal adversarial agent identification to identify the critical agent and classify conflict types, and develop a conflict-aware interactive world model in which a causal interaction graph is used to explicitly model dynamic inter-agent dependencies. Building on this structure, stage-adaptive counterfactual guidance performs minimal interventions on the identified agent, removing its spatial and temporal safety margins while allowing risk to emerge through natural interaction propagation. Extensive experiments on nuScenes demonstrate that CounterScene achieves the strongest adversarial effectiveness while maintaining superior trajectory realism across all horizons, improving long-horizon collision rate from 12.3% to 22.7% over the strongest baseline with better realism (ADE 1.88 vs.2.09). Notably, this advantage further widens over longer rollouts, and CounterScene generalizes zero-shot to nuPlan with state-of-the-art realism.

生成安全关键的驾驶场景需要了解为什么会出现危险的相互作用，而不仅仅是强行碰撞。然而，现有方法依赖于启发式对抗性代理选择和非结构化扰动，缺乏交互依赖性的显式建模，从而表现出现实性——对抗性权衡。我们提出了 CounterScene，这是一个框架，为闭环生成 BEV 世界模型赋予结构化反事实推理，以生成安全关键场景。 CounterScene 提出一个安全场景：如果因果关系关键的智能体表现不同怎么办？为了回答这个问题，我们引入因果对抗代理识别来识别关键代理并对冲突类型进行分类，并开发一个冲突感知的交互式世界模型，其中因果交互图用于显式地建模动态代理间依赖关系。在此结构的基础上，阶段自适应反事实指导对已识别的代理执行最少的干预，消除其空间和时间安全裕度，同时允许通过自然交互传播出现风险。 nuScenes 上的大量实验表明，CounterScene 实现了最强的对抗有效性，同时在所有视野中保持卓越的轨迹真实感，将长视野碰撞率从最强基线的 12.3% 提高到 22.7%，并具有更好的真实感（ADE 1.88 vs.2.09）。值得注意的是，这种优势随着时间的推移而进一步扩大，CounterScene 将零样本推广到具有最先进现实主义的 nuPlan。

</details>

---

## 9. Dreaming the Unseen: World Model-regularized Diffusion Policy for Out-of-Distribution Robustness / 梦想看不见的事物：世界模型规范化的扩散策略以实现分布外的鲁棒性

**Date**: 2026-03-22 | **arXiv**: [2603.21017v1](http://arxiv.org/abs/2603.21017v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.21017v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion policies excel at visuomotor control but often fail catastrophically under severe out-of-distribution (OOD) disturbances, such as unexpected object displacements or visual corruptions. To address this vulnerability, we introduce the Dream Diffusion Policy (DDP), a framework that deeply integrates a diffusion world model into the policy's training objective via a shared 3D visual encoder. This co-optimization endows the policy with robust state-prediction capabilities. When encountering sudden OOD anomalies during inference, DDP detects the real-imagination discrepancy and actively abandons the corrupted visual stream. Instead, it relies on its internal "imagination" (autoregressively forecasted latent dynamics) to safely bypass the disruption, generating imagined trajectories before smoothly realigning with physical reality. Extensive evaluations demonstrate DDP's exceptional resilience. Notably, DDP achieves a 73.8% OOD success rate on MetaWorld (vs. 23.9% without predictive imagination) and an 83.3% success rate under severe real-world spatial shifts (vs. 3.3% without predictive imagination). Furthermore, as a stress test, DDP maintains a 76.7% real-world success rate even when relying entirely on open-loop imagination post-initialization.

扩散策略在视觉运动控制方面表现出色，但在严重的分布外（OOD）干扰（例如意外的物体位移或视觉损坏）下常常会发生灾难性的失败。为了解决这个漏洞，我们引入了梦想扩散策略（DDP），该框架通过共享的 3D 视觉编码器将扩散世界模型深度集成到策略的训练目标中。这种协同优化赋予策略强大的状态预测能力。当推理过程中遇到突发的OOD异常时，DDP会检测到真实想象的差异并主动放弃损坏的视觉流。相反，它依靠其内部的“想象力”（自回归预测的潜在动态）来安全地绕过干扰，在顺利地与物理现实重新对齐之前生成想象的轨迹。广泛的评估证明了 DDP 卓越的弹性。值得注意的是，DDP 在 MetaWorld 上实现了 73.8% 的 OOD 成功率（没有预测想象的情况下为 23.9%），在严重的现实世界空间变化下的成功率为 83.3%（没有预测想象的情况下为 3.3%）。此外，作为压力测试，即使完全依赖初始化后的开环想象，DDP 也能保持 76.7% 的现实成功率。

</details>

---



</details>

<details><summary><b>2026-03-23 (2 papers)</b></summary>

# arXiv World Model Papers - 2026-03-23

**Paper Count**: 2

---

## 1. Structured Latent Dynamics in Wireless CSI via Homomorphic World Models / 通过同态世界模型实现无线 CSI 中的结构化潜在动态

**Date**: 2026-03-20 | **arXiv**: [2603.20048v1](http://arxiv.org/abs/2603.20048v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.20048v1)

**Categories**: eess.SP, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

We introduce a self-supervised framework for learning predictive and structured representations of wireless channels by modeling the temporal evolution of channel state information (CSI) in a compact latent space. Our method casts the problem as a world modeling task and leverages the Joint Embedding Predictive Architecture (JEPA) to learn action-conditioned latent dynamics from CSI trajectories. To promote geometric consistency and compositionality, we parameterize transitions using homomorphic updates derived from Lie algebra, yielding a structured latent space that reflects spatial layout and user motion. Evaluations on the DICHASUS dataset show that our approach outperforms strong baselines in preserving topology and forecasting future embeddings across unseen environments. The resulting latent space enables metrically faithful channel charts, offering a scalable foundation for downstream applications such as mobility-aware scheduling, localization, and wireless scene understanding.

我们引入了一种自监督框架，通过对紧凑潜在空间中信道状态信息（CSI）的时间演化进行建模来学习无线信道的预测和结构化表示。我们的方法将问题视为世界建模任务，并利用联合嵌入预测架构 (JEPA) 从 CSI 轨迹中学习动作条件的潜在动态。为了促进几何一致性和组合性，我们使用从李代数导出的同态更新来参数化过渡，产生反映空间布局和用户运动的结构化潜在空间。对 DIHASUS 数据集的评估表明，我们的方法在保留拓扑和预测未见过的环境中的未来嵌入方面优于强大的基线。由此产生的潜在空间可实现度量上忠实的频道图表，为下游应用程序（例如移动感知调度、本地化和无线场景理解）提供可扩展的基础。

</details>

---

## 2. X-World: Controllable Ego-Centric Multi-Camera World Models for Scalable End-to-End Driving / X-World：可控制的以自我为中心的多摄像头世界模型，用于可扩展的端到端驾驶

**Date**: 2026-03-20 | **arXiv**: [2603.19979v1](http://arxiv.org/abs/2603.19979v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.19979v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Scalable and reliable evaluation is increasingly critical in the end-to-end era of autonomous driving, where vision--language--action (VLA) policies directly map raw sensor streams to driving actions. Yet, current evaluation pipelines still rely heavily on real-world road testing, which is costly, biased toward limited scenario coverage, and difficult to reproduce. These challenges motivate a real-world simulator that can generate realistic future observations under proposed actions, while remaining controllable and stable over long horizons. We present X-World, an action-conditioned multi-camera generative world model that simulates future observations directly in video space. Given synchronized multi-view camera history and a future action sequence, X-World generates future multi-camera video streams that follow the commanded actions. To ensure reproducible and editable scene rollouts, X-World further supports optional controls over dynamic traffic agents and static road elements, and retains a text-prompt interface for appearance-level control (e.g., weather and time of day). Beyond world simulation, X-World also enables video style transfer by conditioning on appearance prompts while preserving the underlying action and scene dynamics. At the core of X-World is a multi-view latent video generator designed to explicitly encourage cross-view geometric consistency and temporal coherence under diverse control signals. Experiments show that X-World achieves high-quality multi-view video generation with (i) strong view consistency across cameras, (ii) stable temporal dynamics over long rollouts, and (iii) high controllability with strict action following and faithful adherence to optional scene controls. These properties make X-World a practical foundation for scalable and reproducible evaluation.

在端到端自动驾驶时代，可扩展且可靠的评估变得越来越重要，其中视觉-语言-动作 (VLA) 策略直接将原始传感器流映射到驾驶动作。然而，当前的评估流程仍然严重依赖现实世界的道路测试，这种测试成本高昂，偏向于有限的场景覆盖范围，并且难以重现。这些挑战激发了现实世界的模拟器，它可以根据提议的行动生成现实的未来观察结果，同时在长期范围内保持可控和稳定。我们提出了 X-World，一种以动作为条件的多摄像机生成世界模型，可以直接在视频空间中模拟未来的观察结果。给定同步的多视图摄像机历史记录和未来的动作序列，X-World 会生成遵循命令动作的未来多摄像机视频流。为了确保可复制和可编辑的场景推出，X-World 进一步支持对动态交通代理和静态道路元素的可选控制，并保留用于外观级别控制（例如天气和时间）的文本提示界面。除了世界模拟之外，X-World 还可以通过调节外观提示来实现视频风格转换，同时保留底层动作和场景动态。 X-World 的核心是一个多视图潜在视频生成器，旨在明确鼓励不同控制信号下的跨视图几何一致性和时间一致性。实验表明，X-World 实现了高质量的多视图视频生成，具有 (i) 跨摄像机的强视图一致性，(ii) 长时间部署过程中稳定的时间动态，以及 (iii) 通过严格的动作跟踪和忠实遵守可选场景控制的高可控性。这些特性使 X-World 成为可扩展和可重复评估的实用基础。

</details>

---



</details>

<details><summary><b>2026-03-20 (7 papers)</b></summary>

# arXiv World Model Papers - 2026-03-20

**Paper Count**: 7

---

## 1. DriveTok: 3D Driving Scene Tokenization for Unified Multi-View Reconstruction and Understanding / DriveTok：用于统一多视图重建和理解的 3D 驾驶场景标记化

**Date**: 2026-03-19 | **arXiv**: [2603.19219v1](http://arxiv.org/abs/2603.19219v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.19219v1)

**Categories**: cs.CV, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

With the growing adoption of vision-language-action models and world models in autonomous driving systems, scalable image tokenization becomes crucial as the interface for the visual modality. However, most existing tokenizers are designed for monocular and 2D scenes, leading to inefficiency and inter-view inconsistency when applied to high-resolution multi-view driving scenes. To address this, we propose DriveTok, an efficient 3D driving scene tokenizer for unified multi-view reconstruction and understanding. DriveTok first obtains semantically rich visual features from vision foundation models and then transforms them into the scene tokens with 3D deformable cross-attention. For decoding, we employ a multi-view transformer to reconstruct multi-view features from the scene tokens and use multiple heads to obtain RGB, depth, and semantic reconstructions. We also add a 3D head directly on the scene tokens for 3D semantic occupancy prediction for better spatial awareness. With the multiple training objectives, DriveTok learns unified scene tokens that integrate semantic, geometric, and textural information for efficient multi-view tokenization. Extensive experiments on the widely used nuScenes dataset demonstrate that the scene tokens from DriveTok perform well on image reconstruction, semantic segmentation, depth prediction, and 3D occupancy prediction tasks.

随着自动驾驶系统中越来越多地采用视觉-语言-动作模型和世界模型，可扩展的图像标记化作为视觉模态的接口变得至关重要。然而，大多数现有的分词器都是针对单目和 2D 场景设计的，当应用于高分辨率多视图驾驶场景时，会导致效率低下和视图间不一致。为了解决这个问题，我们提出了 DriveTok，一种高效的 3D 驾驶场景标记器，用于统一的多视图重建和理解。 DriveTok首先从视觉基础模型中获取语义丰富的视觉特征，然后将其转换为具有3D可变形交叉注意力的场景标记。对于解码，我们采用多视图转换器从场景标记中重建多视图特征，并使用多个头来获得 RGB、深度和语义重建。我们还直接在场景标记上添加 3D 头部，以进行 3D 语义占用预测，以实现更好的空间感知。通过多个训练目标，DriveTok 学习统一的场景标记，这些标记集成了语义、几何和纹理信息，以实现高效的多视图标记化。对广泛使用的 nuScenes 数据集进行的大量实验表明，DriveTok 的场景标记在图像重建、语义分割、深度预测和 3D 占用预测任务上表现良好。

</details>

---

## 2. OmniVTA: Visuo-Tactile World Modeling for Contact-Rich Robotic Manipulation / OmniVTA：用于接触丰富的机器人操作的视觉触觉世界建模

**Date**: 2026-03-19 | **arXiv**: [2603.19201v1](http://arxiv.org/abs/2603.19201v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.19201v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Contact-rich manipulation tasks, such as wiping and assembly, require accurate perception of contact forces, friction changes, and state transitions that cannot be reliably inferred from vision alone. Despite growing interest in visuo-tactile manipulation, progress is constrained by two persistent limitations: existing datasets are small in scale and narrow in task coverage, and current methods treat tactile signals as passive observations rather than using them to model contact dynamics or enable closed-loop control explicitly. In this paper, we present \textbf{OmniViTac}, a large-scale visuo-tactile-action dataset comprising $21{,}000+$ trajectories across $86$ tasks and $100+$ objects, organized into six physics-grounded interaction patterns. Building on this dataset, we propose \textbf{OmniVTA}, a world-model-based visuo-tactile manipulation framework that integrates four tightly coupled modules: a self-supervised tactile encoder, a two-stream visuo-tactile world model for predicting short-horizon contact evolution, a contact-aware fusion policy for action generation, and a 60Hz reflexive controller that corrects deviations between predicted and observed tactile signals in a closed loop. Real-robot experiments across all six interaction categories show that OmniVTA outperforms existing methods and generalizes well to unseen objects and geometric configurations, confirming the value of combining predictive contact modeling with high-frequency tactile feedback for contact-rich manipulation. All data, models, and code will be made publicly available on the project website at https://mrsecant.github.io/OmniVTA.

擦拭和组装等接触丰富的操作任务需要准确感知接触力、摩擦力变化和状态转换，而这些仅从视觉无法可靠地推断出来。尽管人们对视觉触觉操纵的兴趣日益浓厚，但进展受到两个持续存在的限制：现有数据集规模小且任务覆盖范围窄，并且当前的方法将触觉信号视为被动观察，而不是使用它们来建模接触动力学或明确地实现闭环控制。在本文中，我们提出了 \textbf{OmniViTac}，这是一个大规模的视觉触觉动作数据集，包含跨越 $86$ 任务和 $100+$ 对象的 $21{,}000+$ 轨迹，组织成六种基于物理的交互模式。在此数据集的基础上，我们提出了 \textbf{OmniVTA}，一个基于世界模型的视觉触觉操纵框架，集成了四个紧密耦合的模块：自监督触觉编码器、用于预测短视界接触演化的双流视觉触觉世界模型、用于动作生成的接触感知融合策略以及用于纠正闭环中预测和观察到的触觉信号之间的偏差的 60Hz 反射控制器。所有六个交互类别的真实机器人实验表明，OmniVTA 的性能优于现有方法，并且可以很好地推广到看不见的物体和几何配置，从而证实了将预测接触建模与高频触觉反馈相结合以实现丰富接触操作的价值。所有数据、模型和代码都将在项目网站 https://mrsecant.github.io/OmniVTA 上公开提供。

</details>

---

## 3. V-Dreamer: Automating Robotic Simulation and Trajectory Synthesis via Video Generation Priors / V-Dreamer：通过视频生成先验实现机器人模拟和轨迹合成自动化

**Date**: 2026-03-19 | **arXiv**: [2603.18811v1](http://arxiv.org/abs/2603.18811v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.18811v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Training generalist robots demands large-scale, diverse manipulation data, yet real-world collection is prohibitively expensive, and existing simulators are often constrained by fixed asset libraries and manual heuristics. To bridge this gap, we present V-Dreamer, a fully automated framework that generates open-vocabulary, simulation-ready manipulation environments and executable expert trajectories directly from natural language instructions. V-Dreamer employs a novel generative pipeline that constructs physically grounded 3D scenes using large language models and 3D generative models, validated by geometric constraints to ensure stable, collision-free layouts. Crucially, for behavior synthesis, we leverage video generation models as rich motion priors. These visual predictions are then mapped into executable robot trajectories via a robust Sim-to-Gen visual-kinematic alignment module utilizing CoTracker3 and VGGT. This pipeline supports high visual diversity and physical fidelity without manual intervention. To evaluate the generated data, we train imitation learning policies on synthesized trajectories encompassing diverse object and environment variations. Extensive evaluations on tabletop manipulation tasks using the Piper robotic arm demonstrate that our policies robustly generalize to unseen objects in simulation and achieve effective sim-to-real transfer, successfully manipulating novel real-world objects.

训练多面手机器人需要大规模、多样化的操作数据，但现实世界的收集成本却极其昂贵，而且现有的模拟器通常受到固定资产库和手动启发式的限制。为了弥补这一差距，我们推出了 V-Dreamer，这是一个完全自动化的框架，可以直接从自然语言指令生成开放词汇、模拟就绪的操作环境和可执行的专家轨迹。 V-Dreamer 采用新颖的生成管道，使用大型语言模型和 3D 生成模型构建物理基础的 3D 场景，并通过几何约束进行验证，以确保稳定、无碰撞的布局。至关重要的是，对于行为合成，我们利用视频生成模型作为丰富的运动先验。然后，利用 CoTracker3 和 VGGT，通过强大的 Sim-to-Gen 视觉运动对准模块将这些视觉预测映射到可执行的机器人轨迹。该管道支持高视觉多样性和物理保真度，无需人工干预。为了评估生成的数据，我们在包含不同对象和环境变化的合成轨迹上训练模仿学习策略。使用 Piper 机械臂对桌面操纵任务进行的广泛评估表明，我们的策略可以稳健地推广到模拟中看不见的对象，并实现有效的模拟到真实的传输，成功地操纵新颖的现实世界对象。

</details>

---

## 4. AcceRL: A Distributed Asynchronous Reinforcement Learning and World Model Framework for Vision-Language-Action Models / AcceRL：用于视觉-语言-动作模型的分布式异步强化学习和世界模型框架

**Date**: 2026-03-19 | **arXiv**: [2603.18464v1](http://arxiv.org/abs/2603.18464v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.18464v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Reinforcement learning (RL) for large-scale Vision-Language-Action (VLA) models faces significant challenges in computational efficiency and data acquisition. We propose AcceRL, a fully asynchronous and decoupled RL framework designed to eliminate synchronization barriers by physically isolating training, inference, and rollouts. Crucially, AcceRL is the first to integrate a plug-and-play, trainable world model into a distributed asynchronous RL pipeline to generate virtual experiences. Experiments on the LIBERO benchmark demonstrate that AcceRL achieves state-of-the-art (SOTA) performance. Systematically, it exhibits super-linear scaling in throughput and highly efficient hardware utilization. Algorithmically, the world-model-augmented variant delivers unprecedented sample efficiency and robust training stability in complex control tasks.

大规模视觉-语言-动作（VLA）模型的强化学习（RL）在计算效率和数据获取方面面临着重大挑战。我们提出了 AcceRL，这是一个完全异步和解耦的 RL 框架，旨在通过物理隔离训练、推理和推出来消除同步障碍。至关重要的是，AcceRL 是第一个将即插即用、可训练的世界模型集成到分布式异步 RL 管道中以生成虚拟体验的产品。 LIBERO 基准测试表明 AcceRL 实现了最先进的 (SOTA) 性能。系统地，它表现出超线性的吞吐量扩展和高效的硬件利用率。从算法上来说，世界模型增强变体在复杂的控制任务中提供了前所未有的样本效率和强大的训练稳定性。

</details>

---

## 5. ManiDreams: An Open-Source Library for Robust Object Manipulation via Uncertainty-aware Task-specific Intuitive Physics / ManiDreams：一个开源库，通过不确定性感知任务特定的直观物理进行鲁棒的对象操作

**Date**: 2026-03-18 | **arXiv**: [2603.18336v1](http://arxiv.org/abs/2603.18336v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.18336v1)

**Categories**: cs.RO

**Code**: https://github.com/Rice-RobotPI-Lab/ManiDreams

<details><summary><b>Abstract / 摘要</b></summary>

Dynamics models, whether simulators or learned world models, have long been central to robotic manipulation, but most focus on minimizing prediction error rather than confronting a more fundamental challenge: real-world manipulation is inherently uncertain. We argue that robust manipulation under uncertainty is fundamentally an integration problem: uncertainties must be represented, propagated, and constrained within the planning loop, not merely suppressed during training. We present and open-source ManiDreams, a modular framework for uncertainty-aware manipulation planning over intuitive physics models. It realizes this integration through composable abstractions for distributional state representation, backend-agnostic dynamics prediction, and declarative constraint specification for action optimization. The framework explicitly addresses three sources of uncertainty: perceptual, parametric, and structural. It wraps any base policy with a sample-predict-constrain loop that evaluates candidate actions against distributional outcomes, adding robustness without retraining. Experiments on ManiSkill tasks show that ManiDreams maintains robust performance under various perturbations where the RL baseline degrades significantly. Runnable examples on pushing, picking, catching, and real-world deployment demonstrate flexibility across different policies, optimizers, physics backends, and executors. The framework is publicly available at https://github.com/Rice-RobotPI-Lab/ManiDreams

动力学模型，无论是模拟器还是学习世界模型，长期以来一直是机器人操纵的核心，但大多数都专注于最小化预测误差，而不是面对更根本的挑战：现实世界的操纵本质上是不确定的。我们认为，不确定性下的鲁棒操纵从根本上来说是一个集成问题：不确定性必须在规划循环中被表示、传播和约束，而不仅仅是在训练期间被抑制。我们提出并开源 ManiDreams，这是一个模块化框架，用于通过直观的物理模型进行不确定性感知操纵规划。它通过分布式状态表示的可组合抽象、与后端无关的动态预测以及用于动作优化的声明性约束规范来实现这种集成。该框架明确解决了不确定性的三个来源：感知、参数和结构。它使用样本-预测-约束循环来包装任何基本策略，该循环根据分布结果评估候选操作，从而无需重新训练即可增加稳健性。 ManiSkill 任务的实验表明，ManiDreams 在 RL 基线显着下降的各种扰动下仍保持稳健的性能。有关推送、拾取、捕获和实际部署的可运行示例展示了跨不同策略、优化器、物理后端和执行器的灵活性。该框架可在 https://github.com/Rice-RobotPI-Lab/ManiDreams 上公开获取

</details>

---

## 6. Enactor: From Traffic Simulators to Surrogate World Models / Enactor：从交通模拟器到替代世界模型

**Date**: 2026-03-18 | **arXiv**: [2603.18266v1](http://arxiv.org/abs/2603.18266v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.18266v1)

**Categories**: cs.LG, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Traffic microsimulators are widely used to evaluate road network performance under various ``what-if" conditions. However, the behavior models controlling the actions of the actors are overly simplistic and fails to capture realistic actor-actor interactions. Deep learning-based methods have been applied to model vehicles and pedestrians as ``agents" responding to their surrounding ``environment" (including lanes, signals, and neighboring agents). Although effective in learning actor-actor interaction, these approaches fail to generate physically consistent trajectories over long time periods, and they do not explicitly address the complex dynamics that arise at traffic intersections which is a critical location in urban networks. Inspired by the World Model paradigm, we have developed an actor centric generative model using transformer-based architecture that is able to capture the actor-actor interaction, at the same time understanding the geometry to the traffic intersection to generate physically grounded trajectories that are based on learned behavior. Moreover, we test the model in a live ``simulation-in-the-loop" setting, where we generate the initial conditions of the actors using SUMO and then let the model control the dynamics of the actors. We let the simulation run for 40000 timesteps (4000 seconds), testing the performance of the model on long timerange and evaluating the trajectories on traffic engineering related metrics. Experimental results demonstrate that the proposed framework effectively captures complex actor-actor interactions and generates long-horizon, physically consistent trajectories, while requiring significantly fewer training samples than traditional agent-centric generative approaches. Our model is able to outperform the baseline in traffic related as well as aggregate metrics where our model beats the baseline by more than 10x on the KL-Divergence.

交通微模拟器被广泛用于评估各种“假设”条件下的道路网络性能。然而，控制参与者行为的行为模型过于简单化，无法捕捉真实的参与者之间的交互。基于深度学习的方法已被应用于将车辆和行人建模为响应周围“环境”（包括车道、信号和邻近代理）的“代理”。虽然在学习参与者之间的交互方面有效，但这些方法无法长时间生成物理上一致的轨迹受世界模型范例的启发，我们使用基于变压器的架构开发了一种以参与者为中心的生成模型，该模型能够捕获参与者之间的交互，同时了解交通交叉口的几何形状，以生成基于学习行为的物理接地轨迹。此外，我们在实时“循环模拟”设置中测试模型，在其中生成初始条件。使用 SUMO 对演员进行建模，然后让模型控制演员的动态。我们让模拟运行 40000 个时间步长（4000 秒），在长时间范围内测试模型的性能并评估流量工程相关指标的轨迹。实验结果表明，所提出的框架有效地捕获了复杂的参与者之间的交互，并生成长范围的、物理一致的轨迹，同时比传统的以代理为中心的生成方法需要更少的训练样本。我们的模型能够在流量相关以及聚合指标方面超越基线，其中我们的模型在 KL 散度上比基线高出 10 倍以上。

</details>

---

## 7. R2-Dreamer: Redundancy-Reduced World Models without Decoders or Augmentation / R2-Dreamer：无需解码器或增强的冗余减少世界模型

**Date**: 2026-03-18 | **arXiv**: [2603.18202v1](http://arxiv.org/abs/2603.18202v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.18202v1)

**Categories**: cs.LG, cs.AI, cs.RO

**Code**: https://github.com/NM512/r2dreamer.

<details><summary><b>Abstract / 摘要</b></summary>

A central challenge in image-based Model-Based Reinforcement Learning (MBRL) is to learn representations that distill essential information from irrelevant visual details. While promising, reconstruction-based methods often waste capacity on large task-irrelevant regions. Decoder-free methods instead learn robust representations by leveraging Data Augmentation (DA), but reliance on such external regularizers limits versatility. We propose R2-Dreamer, a decoder-free MBRL framework with a self-supervised objective that serves as an internal regularizer, preventing representation collapse without resorting to DA. The core of our method is a redundancy-reduction objective inspired by Barlow Twins, which can be easily integrated into existing frameworks. On DeepMind Control Suite and Meta-World, R2-Dreamer is competitive with strong baselines such as DreamerV3 and TD-MPC2 while training 1.59x faster than DreamerV3, and yields substantial gains on DMC-Subtle with tiny task-relevant objects. These results suggest that an effective internal regularizer can enable versatile, high-performance decoder-free MBRL. Code is available at https://github.com/NM512/r2dreamer.

基于图像的模型强化学习（MBRL）的一个核心挑战是学习从不相关的视觉细节中提取重要信息的表示。虽然很有希望，但基于重建的方法经常在与任务无关的大区域上浪费容量。无解码器方法而是通过利用数据增强（DA）来学习鲁棒的表示，但对此类外部正则化器的依赖限制了多功能性。我们提出了 R2-Dreamer，这是一个无解码器的 MBRL 框架，具有自我监督的目标，可作为内部正则化器，在不诉诸 DA 的情况下防止表示崩溃。我们方法的核心是受 Barlow Twins 启发的冗余减少目标，它可以轻松集成到现有框架中。在 DeepMind Control Suite 和 Meta-World 上，R2-Dreamer 与 DreamerV3 和 TD-MPC2 等强大基线具有竞争力，同时训练速度比 DreamerV3 快 1.59 倍，并且在具有微小任务相关对象的 DMC-Subtle 上产生了显着的收益。这些结果表明，有效的内部正则器可以实现多功能、高性能的无解码器 MBRL。代码可在 https://github.com/NM512/r2dreamer 获取。

</details>

---



</details>

<details><summary><b>2026-03-19 (5 papers)</b></summary>

# arXiv World Model Papers - 2026-03-19

**Paper Count**: 5

---

## 1. EVA: Aligning Video World Models with Executable Robot Actions via Inverse Dynamics Rewards / EVA：通过反向动态奖励将视频世界模型与可执行的机器人动作结合起来

**Date**: 2026-03-18 | **arXiv**: [2603.17808v1](http://arxiv.org/abs/2603.17808v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17808v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Video generative models are increasingly used as world models for robotics, where a model generates a future visual rollout conditioned on the current observation and task instruction, and an inverse dynamics model (IDM) converts the generated frames into executable robot actions. However, current video world models lack explicit executability constraints. As a result, visually coherent rollouts may still violate rigid-body and kinematic consistency, producing unstable or infeasible control commands when decoded by an IDM. We refer to this mismatch between visual generation and physically executable control as the executability gap. While this gap can be mitigated at inference time using techniques such as rejection sampling, such approaches are inefficient due to the high cost of video generation. In this paper, we leverage the executability gap as a training signal and introduce Executable Video Alignment (EVA), a reinforcement-learning post-training framework for aligning video world models. EVA trains an inverse dynamics model on real robot trajectories and repurposes it as a reward model that evaluates generated videos through the action sequences they induce, encouraging smooth motions measured by velocity, acceleration, and jerk while penalizing actions that violate embodiment constraints. Importantly, the reward remains informative even when generated videos contain severe visual artifacts, since such artifacts typically translate into unstable or out-of-bound actions. Experiments on the RoboTwin benchmark and a real bimanual robot show that EVA reduces embodiment-specific artifacts in generated rollouts and improves downstream task execution success.

视频生成模型越来越多地用作机器人的世界模型，其中模型根据当前观察和任务指令生成未来的视觉展示，而逆动力学模型（IDM）将生成的帧转换为可执行的机器人动作。然而，当前的视频世界模型缺乏明确的可执行性约束。因此，视觉上连贯的推出仍然可能违反刚体和运动学一致性，在 IDM 解码时产生不稳定或不可行的控制命令。我们将视觉生成和物理可执行控制之间的这种不匹配称为可执行性差距。虽然可以在推理时使用拒绝采样等技术来缩小这种差距，但由于视频生成成本高昂，此类方法效率低下。在本文中，我们利用可执行性差距作为训练信号，并引入可执行视频对齐（EVA），这是一种用于对齐视频世界模型的强化学习后训练框架。 EVA 在真实机器人轨迹上训练逆动力学模型，并将其重新用作奖励模型，通过生成的视频所引发的动作序列来评估生成的视频，鼓励通过速度、加速度和加加速度测量的平滑运动，同时惩罚违反实施例约束的动作。重要的是，即使生成的视频包含严重的视觉伪影，奖励仍然可以提供信息，因为此类伪影通常会转化为不稳定或越界动作。 RoboTwin 基准测试和真实双手机器人的实验表明，EVA 减少了生成的部署中特定于实施例的工件，并提高了下游任务执行的成功率。

</details>

---

## 2. VectorWorld: Efficient Streaming World Model via Diffusion Flow on Vector Graphs / VectorWorld：通过矢量图上的扩散流实现高效的流世界模型

**Date**: 2026-03-18 | **arXiv**: [2603.17652v1](http://arxiv.org/abs/2603.17652v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17652v1)

**Categories**: cs.RO, cs.CV

**Code**: https://github.com/jiangchaokang/VectorWorld

<details><summary><b>Abstract / 摘要</b></summary>

Closed-loop evaluation of autonomous-driving policies requires interactive simulation beyond log replay. However, existing generative world models often degrade in closed loop due to (i) history-free initialization that mismatches policy inputs, (ii) multi-step sampling latency that violates real-time budgets, and (iii) compounding kinematic infeasibility over long horizons. We propose VectorWorld, a streaming world model that incrementally generates ego-centric $64 \mathrm{m}\times 64\mathrm{m}$ lane--agent vector-graph tiles during rollout. VectorWorld aligns initialization with history-conditioned policies by producing a policy-compatible interaction state via a motion-aware gated VAE. It enables real-time outpainting via solver-free one-step masked completion with an edge-gated relational DiT trained with interval-conditioned MeanFlow and JVP-based large-step supervision. To stabilize long-horizon rollouts, we introduce $Δ$Sim, a physics-aligned non-ego (NPC) policy with hybrid discrete--continuous actions and differentiable kinematic logit shaping. On Waymo open motion and nuPlan, VectorWorld improves map-structure fidelity and initialization validity, and supports stable, real-time $1\mathrm{km}+$ closed-loop rollouts (\href{https://github.com/jiangchaokang/VectorWorld}{code}).

自动驾驶策略的闭环评估需要日志重播之外的交互式模拟。然而，现有的生成世界模型经常在闭环中退化，原因是（i）与策略输入不匹配的无历史初始化，（ii）违反实时预算的多步采样延迟，以及（iii）在长期范围内复合运动学不可行性。我们提出了 VectorWorld，一种流世界模型，在推出期间增量生成以自我为中心的 $64 \mathrm{m}\times 64\mathrm{m}$ 车道代理矢量图图块。 VectorWorld 通过运动感知门控 VAE 生成策略兼容的交互状态，从而使初始化与历史条件策略保持一致。它通过无求解器的一步掩码完成以及使用间隔条件 MeanFlow 和基于 JVP 的大步监督训练的边缘门控关系 DiT 来实现实时绘制。为了稳定长期部署，我们引入了 $Δ$Sim，这是一种物理对齐的非自我 (NPC) 策略，具有混合离散连续动作和可微运动学 logit 整形。在 Waymo 开放运动和 nuPlan 上，VectorWorld 提高了地图结构保真度和初始化有效性，并支持稳定、实时的 $1\mathrm{km}+$ 闭环部署 (\href{https://github.com/jianchaokang/VectorWorld}{code})。

</details>

---

## 3. From Digital Twins to World Models:Opportunities, Challenges, and Applications for Mobile Edge General Intelligence / 从数字孪生到世界模型：移动边缘通用智能的机遇、挑战和应用

**Date**: 2026-03-18 | **arXiv**: [2603.17420v1](http://arxiv.org/abs/2603.17420v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17420v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

The rapid evolution toward 6G and beyond communication systems is accelerating the convergence of digital twins and world models at the network edge. Traditional digital twins provide high-fidelity representations of physical systems and support monitoring, analysis, and offline optimization. However, in highly dynamic edge environments, they face limitations in autonomy, adaptability, and scalability. This paper presents a systematic survey of the transition from digital twins to world models and discusses its role in enabling edge general intelligence (EGI). First, the paper clarifies the conceptual differences between digital twins and world models and highlights the shift from physics-based, centralized, and system-centric replicas to data-driven, decentralized, and agent-centric internal models. This discussion helps readers gain a clear understanding of how this transition enables more adaptive, autonomous, and resource-efficient intelligence at the network edge. The paper reviews the design principles, architectures, and key components of world models, including perception, latent state representation, dynamics learning, imagination-based planning, and memory. In addition, it examines the integration of world models and digital twins in wireless EGI systems and surveys emerging applications in integrated sensing and communications, semantic communication, air-ground networks, and low-altitude wireless networks. Finally, this survey provides a systematic roadmap and practical insights for designing world-model-driven edge intelligence systems in wireless and edge computing environments. It also outlines key research challenges and future directions toward scalable, reliable, and interoperable world models for edge-native agentic AI.

向 6G 及其他通信系统的快速发展正在加速数字孪生和世界模型在网络边缘的融合。传统的数字孪生提供物理系统的高保真表示，并支持监控、分析和离线优化。然而，在高度动态的边缘环境中，它们在自主性、适应性和可扩展性方面面临限制。本文对从数字孪生到世界模型的转变进行了系统调查，并讨论了其在实现边缘通用智能 (EGI) 方面的作用。首先，本文阐明了数字孪生和世界模型之间的概念差异，并强调了从基于物理的、集中式的、以系统为中心的复制品到数据驱动的、去中心化的、以代理为中心的内部模型的转变。本讨论有助于读者清楚地了解这种转变如何在网络边缘实现更具适应性、自主性和资源效率的智能。本文回顾了世界模型的设计原则、架构和关键组成部分，包括感知、潜在状态表示、动态学习、基于想象力的规划和记忆。此外，它还研究了世界模型和数字孪生在无线 EGI 系统中的集成，并调查了集成传感和通信、语义通信、空地网络和低空无线网络中的新兴应用。最后，这项调查为在无线和边缘计算环境中设计世界模型驱动的边缘智能系统提供了系统的路线图和实用见解。它还概述了边缘原生代理人工智能的可扩展、可靠和可互操作的世界模型的关键研究挑战和未来方向。

</details>

---

## 4. Physics-informed Deep Mixture-of-Koopmans Vehicle Dynamics Model with Dual-branch Encoder for Distributed Electric-drive Trucks / 用于分布式电动卡车的具有双分支编码器的物理信息深度混合 Koopmans 车辆动力学模型

**Date**: 2026-03-18 | **arXiv**: [2603.17416v1](http://arxiv.org/abs/2603.17416v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17416v1)

**Categories**: cs.RO, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

Advanced autonomous driving systems require accurate vehicle dynamics modeling. However, identifying a precise dynamics model remains challenging due to strong nonlinearities and the coupled longitudinal and lateral dynamic characteristics. Previous research has employed physics-based analytical models or neural networks to construct vehicle dynamics representations. Nevertheless, these approaches often struggle to simultaneously achieve satisfactory performance in terms of system identification efficiency, modeling accuracy, and compatibility with linear control strategies. In this paper, we propose a fully data-driven dynamics modeling method tailored for complex distributed electric-drive trucks (DETs), leveraging Koopman operator theory to represent highly nonlinear dynamics in a lifted linear embedding space. To achieve high-precision modeling, we first propose a novel dual-branch encoder which encodes dynamic states and provides a powerful basis for the proposed Koopman-based methods entitled KODE. A physics-informed supervision mechanism, grounded in the geometric consistency of temporal vehicle motion, is incorporated into the training process to facilitate effective learning of both the encoder and the Koopman operator. Furthermore, to accommodate the diverse driving patterns of DETs, we extend the vanilla Koopman operator to a mixture-of-Koopman operator framework, enhancing modeling capability. Simulations conducted in a high-fidelity TruckSim environment and real-world experiments demonstrate that the proposed approach achieves state-of-the-art performance in long-term dynamics state estimation.

先进的自动驾驶系统需要精确的车辆动力学建模。然而，由于强烈的非线性以及耦合的纵向和横向动态特性，确定精确的动力学模型仍然具有挑战性。先前的研究采用基于物理的分析模型或神经网络来构建车辆动力学表示。然而，这些方法往往难以同时在系统识别效率、建模精度和与线性控制策略的兼容性方面获得令人满意的性能。在本文中，我们提出了一种专为复杂分布式电动卡车（DET）量身定制的完全数据驱动的动力学建模方法，利用库普曼算子理论来表示提升的线性嵌入空间中的高度非线性动力学。为了实现高精度建模，我们首先提出了一种新颖的双分支编码器，它对动态状态进行编码，并为所提出的基于库普曼的方法（称为 KODE）提供了强大的基础。基于时间车辆运动的几何一致性的基于物理的监督机制被纳入训练过程中，以促进编码器和库普曼算子的有效学习。此外，为了适应 DET 的不同驱动模式，我们将普通 Koopman 算子扩展到 Koopman 算子混合框架，从而增强了建模能力。在高保真 TruckSim 环境中进行的仿真和实际实验表明，所提出的方法在长期动态状态估计方面实现了最先进的性能。

</details>

---

## 5. NavThinker: Action-Conditioned World Models for Coupled Prediction and Planning in Social Navigation / NavThinker：社交导航中耦合预测和规划的动作条件世界模型

**Date**: 2026-03-16 | **arXiv**: [2603.15359v2](http://arxiv.org/abs/2603.15359v2) | **PDF**: [Link](http://arxiv.org/pdf/2603.15359v2)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Social navigation requires robots to act safely in dynamic human environments. Effective behavior demands thinking ahead: reasoning about how the scene and pedestrians evolve under different robot actions rather than reacting to current observations alone. This creates a coupled prediction-planning challenge, where robot actions and human motion mutually influence each other. To address this challenge, we propose NavThinker, a future-aware framework that couples an action-conditioned world model with on-policy reinforcement learning. The world model operates in the Depth Anything V2 patch feature space and performs autoregressive prediction of future scene geometry and human motion; multi-head decoders then produce future depth maps and human trajectories, yielding a future-aware state aligned with traversability and interaction risk. Crucially, we train the policy with DD-PPO while injecting world-model think-ahead signals via: (i) action-conditioned future features fused into the current observation embedding and (ii) social reward shaping from predicted human trajectories. Experiments on single- and multi-robot Social-HM3D show state-of-the-art navigation success, with zero-shot transfer to Social-MP3D and real-world deployment on a Unitree Go2, validating generalization and practical applicability. Webpage: https://hutslib.github.io/NavThinker.

社交导航要求机器人在动态的人类环境中安全地行动。有效的行为需要提前思考：推理场景和行人在不同的机器人动作下如何演变，而不是仅仅对当前的观察做出反应。这就产生了耦合的预测规划挑战，其中机器人动作和人类运动相互影响。为了应对这一挑战，我们提出了 NavThinker，一个面向未来的框架，它将动作条件世界模型与策略强化学习结合起来。世界模型在Depth Anything V2 patch特征空间中运行，并对未来场景几何和人体运动进行自回归预测；然后，多头解码器生成未来的深度图和人体轨迹，从而产生与可遍历性和交互风险相一致的未来感知状态。至关重要的是，我们使用 DD-PPO 训练策略，同时通过以下方式注入世界模型提前思考信号：（i）将行动条件的未来特征融合到当前的观察嵌入中；（ii）根据预测的人类轨迹塑造社会奖励。单机器人和多机器人 Social-HM3D 的实验显示了最先进的导航成功，零镜头传输到 Social-MP3D 以及在 Unitree Go2 上的实际部署，验证了通用性和实际适用性。网页：https://hutslib.github.io/NavThinker。

</details>

---



</details>

<details><summary><b>2026-03-18 (13 papers)</b></summary>

# arXiv World Model Papers - 2026-03-18

**Paper Count**: 13

---

## 1. DreamPlan: Efficient Reinforcement Fine-Tuning of Vision-Language Planners via Video World Models / DreamPlan：通过视频世界模型对视觉语言规划器进行高效强化微调

**Date**: 2026-03-17 | **arXiv**: [2603.16860v1](http://arxiv.org/abs/2603.16860v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16860v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Robotic manipulation requires sophisticated commonsense reasoning, a capability naturally possessed by large-scale Vision-Language Models (VLMs). While VLMs show promise as zero-shot planners, their lack of grounded physical understanding often leads to compounding errors and low success rates when deployed in complex real-world environments, particularly for challenging tasks like deformable object manipulation. Although Reinforcement Learning (RL) can adapt these planners to specific task dynamics, directly fine-tuning VLMs via real-world interaction is prohibitively expensive, unsafe, and sample-inefficient. To overcome this bottleneck, we introduce DreamPlan, a novel framework for the reinforcement fine-tuning of VLM planners via video world models. Instead of relying on costly physical rollouts, DreamPlan first leverages the zero-shot VLM to collect exploratory interaction data. We demonstrate that this sub-optimal data is sufficient to train an action-conditioned video generation model, which implicitly captures complex real-world physics. Subsequently, the VLM planner is fine-tuned entirely within the "imagination" of this video world model using Odds Ratio Policy Optimization (ORPO). By utilizing these virtual rollouts, physical and task-specific knowledge is efficiently injected into the VLM. Our results indicate that DreamPlan bridges the gap between semantic reasoning and physical grounding, significantly improving manipulation success rates without the need for large-scale real-world data collection. Our project page is https://psi-lab.ai/DreamPlan/.

机器人操作需要复杂的常识推理，这是大规模视觉语言模型（VLM）自然具备的能力。虽然 VLM 显示出作为零样本规划器的前景，但在复杂的现实环境中部署时，它们缺乏扎实的物理理解，通常会导致复合错误和低成功率，特别是对于可变形对象操纵等具有挑战性的任务。尽管强化学习 (RL) 可以使这些规划器适应特定的任务动态，但通过现实世界的交互直接微调 VLM 成本高昂、不安全且样本效率低下。为了克服这个瓶颈，我们引入了 DreamPlan，这是一种通过视频世界模型对 VLM 规划器进行强化微调的新颖框架。 DreamPlan 不依赖昂贵的物理部署，而是首先利用零样本 VLM 来收集探索性交互数据。我们证明，这种次优数据足以训练动作条件视频生成模型，该模型隐式捕获复杂的现实世界物理现象。随后，VLM 规划器使用比值比策略优化 (ORPO) 完全在该视频世界模型的“想象”范围内进行微调。通过利用这些虚拟部署，物理和特定于任务的知识被有效地注入到 VLM 中。我们的结果表明，DreamPlan 弥合了语义推理和物理基础之间的差距，显着提高了操作成功率，而无需大规模的现实世界数据收集。我们的项目页面是 https://psi-lab.ai/DreamPlan/。

</details>

---

## 2. Grid-World Representations in Transformers Reflect Predictive Geometry / 变形金刚中的网格世界表示反映了预测几何

**Date**: 2026-03-17 | **arXiv**: [2603.16689v1](http://arxiv.org/abs/2603.16689v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16689v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Next-token predictors often appear to develop internal representations of the latent world and its rules. The probabilistic nature of these models suggests a deep connection between the structure of the world and the geometry of probability distributions. In order to understand this link more precisely, we use a minimal stochastic process as a controlled setting: constrained random walks on a two-dimensional lattice that must reach a fixed endpoint after a predetermined number of steps. Optimal prediction of this process solely depends on a sufficient vector determined by the walker's position relative to the target and the remaining time horizon; in other words, the probability distributions are parametrized by the world's geometry. We train decoder-only transformers on prefixes sampled from the exact distribution of these walks and compare their hidden activations to the analytically derived sufficient vectors. Across models and layers, the learned representations align strongly with the ground-truth predictive vectors and are often low-dimensional. This provides a concrete example in which world-model-like representations can be directly traced back to the predictive geometry of the data itself. Although demonstrated in a simplified toy system, the analysis suggests that geometric representations supporting optimal prediction may provide a useful lens for studying how neural networks internalize grammatical and other structural constraints.

下一个令牌预测器通常似乎会开发潜在世界及其规则的内部表示。这些模型的概率性质表明世界结构与概率分布几何之间存在深刻的联系。为了更准确地理解这种联系，我们使用最小随机过程作为受控设置：二维晶格上的约束随机游走，必须在预定数量的步骤后到达固定端点。该过程的最佳预测仅取决于由步行者相对于目标的位置和剩余时间范围确定的足够矢量；换句话说，概率分布由世界的几何形状参数化。我们在从这些游走的精确分布中采样的前缀上训练仅解码器变压器，并将它们的隐藏激活与分析得出的足够向量进行比较。在模型和层中，学习到的表示与地面实况预测向量密切相关，并且通常是低维的。这提供了一个具体的例子，其中类似世界模型的表示可以直接追溯到数据本身的预测几何。尽管在简化的玩具系统中进行了演示，但分析表明，支持最佳预测的几何表示可能为研究神经网络如何内化语法和其他结构约束提供有用的视角。

</details>

---

## 3. Fast-WAM: Do World Action Models Need Test-time Future Imagination? / Fast-WAM：世界行动模型需要测试时的未来想象力吗？

**Date**: 2026-03-17 | **arXiv**: [2603.16666v1](http://arxiv.org/abs/2603.16666v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16666v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

World Action Models (WAMs) have emerged as a promising alternative to Vision-Language-Action (VLA) models for embodied control because they explicitly model how visual observations may evolve under action. Most existing WAMs follow an imagine-then-execute paradigm, incurring substantial test-time latency from iterative video denoising, yet it remains unclear whether explicit future imagination is actually necessary for strong action performance. In this paper, we ask whether WAMs need explicit future imagination at test time, or whether their benefit comes primarily from video modeling during training. We disentangle the role of video modeling during training from explicit future generation during inference by proposing \textbf{Fast-WAM}, a WAM architecture that retains video co-training during training but skips future prediction at test time. We further instantiate several Fast-WAM variants to enable a controlled comparison of these two factors. Across these variants, we find that Fast-WAM remains competitive with imagine-then-execute variants, while removing video co-training causes a much larger performance drop. Empirically, Fast-WAM achieves competitive results with state-of-the-art methods both on simulation benchmarks (LIBERO and RoboTwin) and real-world tasks, without embodied pretraining. It runs in real time with 190ms latency, over 4$\times$ faster than existing imagine-then-execute WAMs. These results suggest that the main value of video prediction in WAMs may lie in improving world representations during training rather than generating future observations at test time. Project page: https://yuantianyuan01.github.io/FastWAM/

世界行动模型（WAM）已成为视觉-语言-行动（VLA）模型的有希望的替代品，用于体现控制，因为它们明确地模拟了视觉观察在行动下如何演变。大多数现有的 WAM 都遵循“想象然后执行”的范例，迭代视频去噪会导致大量的测试时间延迟，但目前尚不清楚明确的未来想象是否真的需要强大的动作性能。在本文中，我们询问 WAM 在测试时是否需要明确的未来想象，或者它们的好处是否主要来自训练期间的视频建模。我们提出 \textbf{Fast-WAM}，将训练期间视频建模的作用与推理期间显式未来生成的作用分开，这是一种 WAM 架构，它在训练期间保留视频协同训练，但在测试时跳过未来预测。我们进一步实例化了几个 Fast-WAM 变体，以实现这两个因素的受控比较。在这些变体中，我们发现 Fast-WAM 与想象然后执行变体相比仍然具有竞争力，而删除视频协同训练会导致更大的性能下降。根据经验，Fast-WAM 在模拟基准（LIBERO 和 RoboTwin）和现实世界任务上都通过最先进的方法取得了有竞争力的结果，而无需具体的预训练。它实时运行，延迟为 190 毫秒，比现有的想象然后执行 WAM 快 4 倍多。这些结果表明，WAM 中视频预测的主要价值可能在于改进训练期间的世界表征，而不是在测试时生成未来的观察结果。项目页面：https://yuantianyuan01.github.io/FastWAM/

</details>

---

## 4. Data-driven generalized perimeter control: Zürich case study / 数据驱动的广义周界控制：苏黎世案例研究

**Date**: 2026-03-17 | **arXiv**: [2603.16599v1](http://arxiv.org/abs/2603.16599v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16599v1)

**Categories**: eess.SY, cs.AI, cs.CE, cs.ET

<details><summary><b>Abstract / 摘要</b></summary>

Urban traffic congestion is a key challenge for the development of modern cities, requiring advanced control techniques to optimize existing infrastructures usage. Despite the extensive availability of data, modeling such complex systems remains an expensive and time consuming step when designing model-based control approaches. On the other hand, machine learning approaches require simulations to bootstrap models, or are unable to deal with the sparse nature of traffic data and enforce hard constraints. We propose a novel formulation of traffic dynamics based on behavioral systems theory and apply data-enabled predictive control to steer traffic dynamics via dynamic traffic light control. A high-fidelity simulation of the city of Zürich, the largest closed-loop microscopic simulation of urban traffic in the literature to the best of our knowledge, is used to validate the performance of the proposed method in terms of total travel time and CO2 emissions.

城市交通拥堵是现代城市发展的一个关键挑战，需要先进的控制技术来优化现有基础设施的使用。尽管数据广泛可用，但在设计基于模型的控制方法时，对此类复杂系统进行建模仍然是昂贵且耗时的步骤。另一方面，机器学习方法需要模拟来引导模型，或者无法处理交通数据的稀疏性并强制执行硬约束。我们提出了一种基于行为系统理论的交通动态的新颖表述，并应用数据支持的预测控制通过动态交通灯控制来引导交通动态。苏黎世市的高保真模拟是据我们所知文献中最大的城市交通闭环微观模拟，用于验证所提出的方法在总行程时间和二氧化碳排放方面的性能。

</details>

---

## 5. Agile Interception of a Flying Target using Competitive Reinforcement Learning / 使用竞争性强化学习敏捷拦截飞行目标

**Date**: 2026-03-17 | **arXiv**: [2603.16279v1](http://arxiv.org/abs/2603.16279v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16279v1)

**Categories**: cs.RO, stat.ML

<details><summary><b>Abstract / 摘要</b></summary>

This article presents a solution to intercept an agile drone by another agile drone carrying a catching net. We formulate the interception as a Competitive Reinforcement Learning problem, where the interceptor and the target drone are controlled by separate policies trained with Proximal Policy Optimization (PPO). We introduce a high-fidelity simulation environment that integrates a realistic quadrotor dynamics model and a low-level control architecture implemented in JAX, which allows for fast parallelized execution on GPUs. We train the agents using low-level control, collective thrust and body rates, to achieve agile flights both for the interceptor and the target. We compare the performance of the trained policies in terms of catch rate, time to catch, and crash rate, against common heuristic baselines and show that our solution outperforms these baselines for interception of agile targets. Finally, we demonstrate the performance of the trained policies in a scaled real-world scenario using agile drones inside an indoor flight arena.

本文提出了一种通过另一架携带捕网的敏捷无人机拦截一架敏捷无人机的解决方案。我们将拦截制定为竞争性强化学习问题，其中拦截器和目标无人机由经过近端策略优化（PPO）训练的单独策略控制。我们引入了一个高保真模拟环境，该环境集成了真实的四旋翼飞行器动力学模型和在 JAX 中实现的低级控制架构，允许在 GPU 上快速并行执行。我们使用低级控制、集体推力和机身速率来训练代理，以实现拦截器和目标的敏捷飞行。我们将经过训练的策略在捕获率、捕获时间和崩溃率方面的性能与常见的启发式基线进行比较，并表明我们的解决方案在拦截敏捷目标方面优于这些基线。最后，我们在室内飞行场地内使用灵活的无人机在规模化的现实场景中展示了经过训练的策略的性能。

</details>

---

## 6. The Finetuner's Fallacy: When to Pretrain with Your Finetuning Data / 微调器的谬误：何时使用微调数据进行预训练

**Date**: 2026-03-17 | **arXiv**: [2603.16177v1](http://arxiv.org/abs/2603.16177v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16177v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Real-world model deployments demand strong performance on narrow domains where data is often scarce. Typically, practitioners finetune models to specialize them, but this risks overfitting to the domain and forgetting general knowledge. We study a simple strategy, specialized pretraining (SPT), where a small domain dataset, typically reserved for finetuning, is repeated starting from pretraining as a fraction of the total tokens. Across three specialized domains (ChemPile, MusicPile, and ProofPile), SPT improves domain performance and preserves general capabilities after finetuning compared to standard pretraining. In our experiments, SPT reduces the pretraining tokens needed to reach a given domain performance by up to 1.75x. These gains grow when the target domain is underrepresented in the pretraining corpus: on domains far from web text, a 1B SPT model outperforms a 3B standard pretrained model. Beyond these empirical gains, we derive overfitting scaling laws to guide practitioners in selecting the optimal domain-data repetition for a given pretraining compute budget. Our observations reveal the finetuner's fallacy: while finetuning may appear to be the cheapest path to domain adaptation, introducing specialized domain data during pretraining stretches its utility. SPT yields better specialized domain performance (via reduced overfitting across repeated exposures) and better general domain performance (via reduced forgetting during finetuning), ultimately achieving stronger results with fewer parameters and less total compute when amortized over inference. To get the most out of domain data, incorporate it as early in training as possible.

现实世界的模型部署需要在数据通常稀缺的狭窄领域具有强大的性能。通常，从业者会对模型进行微调以使其专业化，但这可能会导致过度适应领域并忘记常识。我们研究了一种简单的策略，即专门的预训练（SPT），其中通常保留用于微调的小域数据集从预训练开始重复，作为总标记的一部分。在三个专业领域（ChemPile、MusicPile 和 ProofPile）中，与标准预训练相比，SPT 在微调后提高了领域性能并保留了一般功能。在我们的实验中，SPT 将达到给定域性能所需的预训练标记减少了 1.75 倍。当目标域在预训练语料库中代表性不足时，这些收益就会增加：在远离网络文本的域上，1B SPT 模型优于 3B 标准预训练模型。除了这些经验收益之外，我们还得出了过度拟合缩放定律，以指导从业者为给定的预训练计算预算选择最佳的域数据重复。我们的观察揭示了微调器的谬误：虽然微调似乎是领域适应的最便宜的途径，但在预训练期间引入专门的领域数据扩展了其效用。 SPT 产生更好的专业领域性能（通过减少重复暴露的过度拟合）和更好的一般领域性能（通过减少微调过程中的遗忘），最终在推理摊销时用更少的参数和更少的总计算获得更强的结果。为了充分利用领域数据，请尽早将其纳入训练中。

</details>

---

## 7. Towards the Vision-Sound-Language-Action Paradigm: The HEAR Framework for Sound-Centric Manipulation / 迈向视觉-声音-语言-行动范式：以声音为中心的操纵的 HEAR 框架

**Date**: 2026-03-17 | **arXiv**: [2603.16086v1](http://arxiv.org/abs/2603.16086v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16086v1)

**Categories**: cs.RO, cs.AI, cs.CV, cs.SD

<details><summary><b>Abstract / 摘要</b></summary>

While recent Vision-Language-Action (VLA) models have begun to incorporate audio, they typically treat sound as static pre-execution prompts or focus exclusively on human speech. This leaves a significant gap in real-time, sound-centric manipulation where fleeting environmental acoustics provide critical state verification during task execution. Consequently, key sounds are easily missed due to low-frequency updates or system latency. This problem is exacerbated by action chunking with open-loop execution, which creates a Blind Execution Interval where acoustic events are lost between discrete audio observation windows. Recognizing the necessity of continuous auditory awareness, we formalize Vision-Sound-Language-Action (VSLA) as a continuous control paradigm conditioned on vision, streaming audio, language, and proprioception under delayed decision loops. As an instantiation, we introduce HEAR, a VSLA framework integrating four components: (i) a streaming Historizer to maintain a compact, causal audio context across execution gaps; (ii) an Envisioner adapted from omni foundation models to reason over multi-sensory inputs; (iii) an Advancer, formulated as an audio world model, to learn temporal dynamics by predicting near-future audio codes; and (iv) a flow-matching Realizer policy to generate smooth action chunks. To address the scarcity of pretraining data and evaluations for VSLA, we construct OpenX-Sound for pretraining, alongside HEAR-Bench, the first sound-centric manipulation benchmark with strict causal timing rules. Our results suggest that robust sound-centric manipulation necessitates causal persistence and explicit temporal learning. This framework provides a practical step toward multi-sensory foundation models for embodied agents, enabling robots to perceive and interact with dynamic environments. Code and videos are available at https://hear.irmv.top.

虽然最近的视觉-语言-动作（VLA）模型已经开始整合音频，但它们通常将声音视为静态的执行前提示或仅关注人类语音。这在实时、以声音为中心的操作中留下了巨大的差距，其中短暂的环境声学在任务执行期间提供关键状态验证。因此，由于低频更新或系统延迟，很容易错过关键声音。开环执行的动作分块会加剧这个问题，这会产生盲执行间隔，其中声学事件在离散音频观察窗口之间丢失。认识到连续听觉意识的必要性，我们将视觉-声音-语言-动作（VSLA）形式化为一种连续控制范式，以延迟决策循环下的视觉、流音频、语言和本体感觉为条件。作为实例，我们引入了 HEAR，这是一个集成了四个组件的 VSLA 框架：（i）一个流式历史记录器，用于跨执行间隙维护紧凑、因果的音频上下文； (ii) 一个从全方位基础模型改编而来的 Envisioner，用于对多感官输入进行推理； (iii) Advancer，被制定为音频世界模型，通过预测近期的音频代码来学习时间动态； (iv) 流匹配实现器策略来生成平滑的动作块。为了解决 VSLA 预训练数据和评估的稀缺问题，我们构建了用于预训练的 OpenX-Sound，以及 HEAR-Bench，这是第一个具有严格因果时序规则的以声音为中心的操纵基准。我们的结果表明，稳健的以声音为中心的操纵需要因果持久性和明确的时间学习。该框架为实体代理的多感官基础模型提供了实用的一步，使机器人能够感知动态环境并与之交互。代码和视频可在 https://hear.irmv.top 获取。

</details>

---

## 8. CorrectionPlanner: Self-Correction Planner with Reinforcement Learning in Autonomous Driving / CorrectionPlanner：自动驾驶中具有强化学习功能的自我校正规划器

**Date**: 2026-03-16 | **arXiv**: [2603.15771v1](http://arxiv.org/abs/2603.15771v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15771v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Autonomous driving requires safe planning, but most learning-based planners lack explicit self-correction ability: once an unsafe action is proposed, there is no mechanism to correct it. Thus, we propose CorrectionPlanner, an autoregressive planner with self-correction that models planning as motion-token generation within a propose, evaluate, and correct loop. At each planning step, the policy proposes an action, namely a motion token, and a learned collision critic predicts whether it will induce a collision within a short horizon. If the critic predicts a collision, we retain the sequence of historical unsafe motion tokens as a self-correction trace, generate the next motion token conditioned on it, and repeat this process until a safe motion token is proposed or the safety criterion is met. This self-correction trace, consisting of all unsafe motion tokens, represents the planner's correction process in motion-token space, analogous to a reasoning trace in language models. We train the planner with imitation learning followed by model-based reinforcement learning using rollouts from a pretrained world model that realistically models agents' reactive behaviors. Closed-loop evaluations show that CorrectionPlanner reduces collision rate by over 20% on Waymax and achieves state-of-the-art planning scores on nuPlan.

自动驾驶需要安全规划，但大多数基于学习的规划器缺乏明确的自我纠正能力：一旦提出不安全的动作，就没有机制来纠正。因此，我们提出 CorrectionPlanner，一种具有自校正功能的自回归规划器，将规划建模为提议、评估和纠正循环中的运动令牌生成。在每个规划步骤中，策略都会提出一个动作，即运动令牌，并且学习到的碰撞批评家会预测它是否会在短期内引发碰撞。如果批评者预测发生碰撞，我们保留历史不安全运动令牌的序列作为自校正轨迹，生成以其为条件的下一个运动令牌，并重复此过程，直到提出安全运动令牌或满足安全标准。这种自校正轨迹由所有不安全的运动标记组成，代表了规划器在运动标记空间中的校正过程，类似于语言模型中的推理轨迹。我们通过模仿学习来训练规划器，然后使用基于模型的强化学习，使用预先训练的世界模型来真实地模拟代理的反应行为。闭环评估表明 CorrectionPlanner 在 Waymax 上将碰撞率降低了 20% 以上，并在 nuPlan 上实现了最先进的规划分数。

</details>

---

## 9. Simulation Distillation: Pretraining World Models in Simulation for Rapid Real-World Adaptation / 模拟蒸馏：在模拟中预训练世界模型以快速适应现实世界

**Date**: 2026-03-16 | **arXiv**: [2603.15759v1](http://arxiv.org/abs/2603.15759v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15759v1)

**Categories**: cs.RO, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Simulation-to-real transfer remains a central challenge in robotics, as mismatches between simulated and real-world dynamics often lead to failures. While reinforcement learning offers a principled mechanism for adaptation, existing sim-to-real finetuning methods struggle with exploration and long-horizon credit assignment in the low-data regimes typical of real-world robotics. We introduce Simulation Distillation (SimDist), a sim-to-real framework that distills structural priors from a simulator into a latent world model and enables rapid real-world adaptation via online planning and supervised dynamics finetuning. By transferring reward and value models directly from simulation, SimDist provides dense planning signals from raw perception without requiring value learning during deployment. As a result, real-world adaptation reduces to short-horizon system identification, avoiding long-horizon credit assignment and enabling fast, stable improvement. Across precise manipulation and quadruped locomotion tasks, SimDist substantially outperforms prior methods in data efficiency, stability, and final performance. Project website and code: https://sim-dist.github.io/

模拟到现实的迁移仍然是机器人技术的一个核心挑战，因为模拟和现实世界动态之间的不匹配往往会导致失败。虽然强化学习提供了一种原则性的适应机制，但现有的从模拟到真实的微调方法在现实世界机器人技术典型的低数据机制中难以进行探索和长期信用分配。我们引入了模拟蒸馏（SimDist），这是一个从模拟到真实的框架，它将结构先验从模拟器中提炼成潜在世界模型，并通过在线规划和监督动态微调实现快速的现实世界适应。通过直接从模拟传输奖励和价值模型，SimDist 可以从原始感知中提供密集的规划信号，而无需在部署期间进行价值学习。因此，现实世界的适应减少为短期系统识别，避免长期信用分配并实现快速、稳定的改进。在精确操作和四足运动任务中，SimDist 在数据效率、稳定性和最终性能方面大大优于先前的方法。项目网址及代码：https://sim-dist.github.io/

</details>

---

## 10. RoCo Challenge at AAAI 2026: Benchmarking Robotic Collaborative Manipulation for Assembly Towards Industrial Automation / AAAI 2026 的 RoCo 挑战赛：面向工业自动化的装配机器人协作操作基准测试

**Date**: 2026-03-16 | **arXiv**: [2603.15469v1](http://arxiv.org/abs/2603.15469v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15469v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Embodied Artificial Intelligence (EAI) is rapidly developing, gradually subverting previous autonomous systems' paradigms from isolated perception to integrated, continuous action. This transition is highly significant for industrial robotic manipulation, promising to free human workers from repetitive, dangerous daily labor. To benchmark and advance this capability, we introduce the Robotic Collaborative Assembly Assistance (RoCo) Challenge with a dataset towards simulation and real-world assembly manipulation. Set against the backdrop of human-centered manufacturing, this challenge focuses on a high-precision planetary gearbox assembly task, a demanding yet highly representative operation in modern industry. Built upon a self-developed data collection, training, and evaluation system in Isaac Sim, and utilizing a dual-arm robot for real-world deployment, the challenge operates in two phases. The Simulation Round defines fine-grained task phases for step-wise scoring to handle the long-horizon nature of the assembly. The Real-World Round mirrors this evaluation with physical gearbox components and high-quality teleoperated datasets. The core tasks require assembling an epicyclic gearbox from scratch, including mounting three planet gears, a sun gear, and a ring gear. Attracting over 60 teams and 170+ participants from more than 10 countries, the challenge yielded highly effective solutions, most notably ARC-VLA and RoboCola. Results demonstrate that a dual-model framework for long-horizon multi-task learning is highly effective, and the strategic utilization of recovery-from-failure curriculum data is a critical insight for successful deployment. This report outlines the competition setup, evaluation approach, key findings, and future directions for industrial EAI. Our dataset, CAD files, code, and evaluation results can be found at: https://rocochallenge.github.io/RoCo2026/.

具身人工智能（EAI）正在迅速发展，逐渐颠覆以往自主系统的范式，从孤立的感知到集成、持续的行动。这种转变对于工业机器人操作来说非常重要，有望将人类工人从重复、危险的日常劳动中解放出来。为了对这一功能进行基准测试和推进，我们引入了机器人协作装配辅助 (RoCo) 挑战赛，其中包含用于模拟和现实世界装配操作的数据集。在以人为本的制造背景下，本次挑战的重点是高精度行星齿轮箱装配任务，这是现代工业中一项要求很高但极具代表性的操作。该挑战赛以 Isaac Sim 自主开发的数据收集、训练和评估系统为基础，并利用双臂机器人进行实际部署，分两个阶段进行。模拟回合定义了逐步评分的细粒度任务阶段，以处理装配的长期性质。真实世界回合通过物理变速箱组件和高质量的远程操作数据集反映了这一评估。核心任务需要从头开始组装行星齿轮箱，包括安装三个行星齿轮、一个太阳齿轮和一个齿圈。此次挑战赛吸引了来自 10 多个国家的 60 多个团队和 170 多名参与者，产生了高效的解决方案，其中最著名的是 ARC-VLA 和 RoboCola。结果表明，用于长期多任务学习的双模型框架非常有效，并且从失败中恢复的课程数据的战略利用是成功部署的关键见解。本报告概述了工业 EAI 的竞赛设置、评估方法、主要发现和未来方向。我们的数据集、CAD 文件、代码和评估结果可以在以下位置找到：https://rocochallenge.github.io/RoCo2026/。

</details>

---

## 11. NavThinker: Action-Conditioned World Models for Coupled Prediction and Planning in Social Navigation / NavThinker：社交导航中耦合预测和规划的动作条件世界模型

**Date**: 2026-03-16 | **arXiv**: [2603.15359v1](http://arxiv.org/abs/2603.15359v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15359v1)

**Categories**: cs.RO

**Code**: https://github.com/hutslib/NavThinker.

<details><summary><b>Abstract / 摘要</b></summary>

Social navigation requires robots to act safely in dynamic human environments. Effective behavior demands thinking ahead: reasoning about how the scene and pedestrians evolve under different robot actions rather than reacting to current observations alone. This creates a coupled prediction-planning challenge, where robot actions and human motion mutually influence each other. To address this challenge, we propose NavThinker, a future-aware framework that couples an action-conditioned world model with on-policy reinforcement learning. The world model operates in the Depth Anything V2 patch feature space and performs autoregressive prediction of future scene geometry and human motion; multi-head decoders then produce future depth maps and human trajectories, yielding a future-aware state aligned with traversability and interaction risk. Crucially, we train the policy with DD-PPO while injecting world-model think-ahead signals via: (i) action-conditioned future features fused into the current observation embedding and (ii) social reward shaping from predicted human trajectories. Experiments on single- and multi-robot Social-HM3D show state-of-the-art navigation success, with zero-shot transfer to Social-MP3D and real-world deployment on a Unitree Go2, validating generalization and practical applicability. Webpage: https://github.com/hutslib/NavThinker.

社交导航要求机器人在动态的人类环境中安全地行动。有效的行为需要提前思考：推理场景和行人在不同的机器人动作下如何演变，而不是仅仅对当前的观察做出反应。这就产生了耦合的预测规划挑战，其中机器人动作和人类运动相互影响。为了应对这一挑战，我们提出了 NavThinker，一个面向未来的框架，它将动作条件世界模型与策略强化学习结合起来。世界模型在Depth Anything V2 patch特征空间中运行，并对未来场景几何和人体运动进行自回归预测；然后，多头解码器生成未来的深度图和人体轨迹，从而产生与可遍历性和交互风险相一致的未来感知状态。至关重要的是，我们使用 DD-PPO 训练策略，同时通过以下方式注入世界模型提前思考信号：（i）将行动条件的未来特征融合到当前的观察嵌入中；（ii）根据预测的人类轨迹塑造社会奖励。单机器人和多机器人 Social-HM3D 的实验显示了最先进的导航成功，零镜头传输到 Social-MP3D 以及在 Unitree Go2 上的实际部署，验证了通用性和实际适用性。网页：https://github.com/hutslib/NavThinker。

</details>

---

## 12. A Methodology for Dynamic Parameters Identification of 3-DOF Parallel Robots in Terms of Relevant Parameters / 一种基于相关参数的三自由度并联机器人动态参数辨识方法

**Date**: 2026-03-16 | **arXiv**: [2603.15254v1](http://arxiv.org/abs/2603.15254v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15254v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

The identification of dynamic parameters in mechanical systems is important for improving model-based control as well as for performing realistic dynamic simulations. Generally, when identification techniques are applied only a subset of so-called base parameters can be identified. More even, some of these parameters cannot be identified properly given that they have a small contribution to the robot dynamics and hence in the presence of noise in measurements and discrepancy in modeling, their quality of being identifiable decreases. For this reason, a strategy for dynamic parameter identification of fully parallel robots in terms of a subset called relevant parameters is put forward. The objective of the proposed methodology is to start from a full dynamic model, then simplification concerning the geometry of each link and, the symmetry due to legs of fully parallel robots, are carried out. After that, the identification is done by Weighted Least Squares. Then, with statistical considerations the model is reduced until the physical feasibility conditions are met. The application of the propose strategy has been experimentally tested on two difierent configurations of actual 3-DOF parallel robots. The response of the inverse and forward dynamics of the identified models agrees with experiments. In order to evaluate the forward dynamics response, an approach for obtaining the forward dynamics in terms of the relevant parameters is also proposed.

机械系统中动态参数的识别对于改进基于模型的控制以及执行真实的动态仿真非常重要。一般来说，当应用识别技术时，只能识别所谓的基本参数的子集。更甚至，其中一些参数无法正确识别，因为它们对机器人动力学的贡献很小，因此在测量中存在噪声和建模中存在差异的情况下，它们的可识别质量会降低。为此，提出了一种以相关参数子集为单位的全并联机器人动态参数识别策略。所提出方法的目标是从完整的动态模型开始，然后对每个连杆的几何形状以及完全并行机器人的腿的对称性进行简化。之后，通过加权最小二乘法进行识别。然后，考虑到统计因素，模型会被缩减，直到满足物理可行性条件。该策略的应用已经在实际三自由度并联机器人的两种不同配置上进行了实验测试。所识别模型的逆向和正向动态响应与实验一致。为了评估前向动态响应，还提出了一种根据相关参数获取前向动态的方法。

</details>

---

## 13. CycleRL: Sim-to-Real Deep Reinforcement Learning for Robust Autonomous Bicycle Control / CycleRL：用于鲁棒自主自行车控制的模拟到真实深度强化学习

**Date**: 2026-03-16 | **arXiv**: [2603.15013v1](http://arxiv.org/abs/2603.15013v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15013v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Autonomous bicycles offer a promising agile solution for urban mobility and last-mile logistics, however, conventional control strategies often struggle with their underactuated nonlinear dynamics, suffering from sensitivity to model mismatches and limited adaptability to real-world uncertainties. To address this, this paper presents CycleRL, the first sim-to-real deep reinforcement learning framework designed for robust autonomous bicycle control. Our approach trains an end-to-end neural control policy within the high-fidelity NVIDIA Isaac Sim environment, leveraging Proximal Policy Optimization (PPO) to circumvent the need for an explicit dynamics model. The framework features a composite reward function tailored for concurrent balance maintenance, velocity tracking, and steering control. Crucially, systematic domain randomization is employed to bridge the simulation-to-reality gap and facilitate direct transfer. In simulation, CycleRL achieves considerable performance, including a 99.90% balance success rate, a low steering tracking error of 1.15°, and a velocity tracking error of 0.18 m/s. These quantitative results, coupled with successful hardware transfer, validate DRL as an effective paradigm for autonomous bicycle control, offering superior adaptability over traditional methods. Video demonstrations are available at https://anony6f05.github.io/CycleRL/.

自动自行车为城市交通和最后一英里物流提供了一种有前途的敏捷解决方案，然而，传统的控制策略常常因其欠驱动的非线性动力学而苦苦挣扎，受到模型失配的敏感性和对现实世界不确定性的适应性有限的影响。为了解决这个问题，本文提出了 CycleRL，这是第一个模拟真实的深度强化学习框架，专为稳健的自主自行车控制而设计。我们的方法在高保真 NVIDIA Isaac Sim 环境中训练端到端神经控制策略，利用近端策略优化 (PPO) 来规避对显式动态模型的需求。该框架具有专为并发平衡维护、速度跟踪和转向控制而定制的复合奖励函数。至关重要的是，采用系统域随机化来弥合模拟与现实之间的差距并促进直接转移。在仿真中，CycleRL 取得了可观的性能，包括 99.90% 的平衡成功率、1.15° 的低转向跟踪误差和 0.18 m/s 的速度跟踪误差。这些定量结果加上成功的硬件传输，验证了 DRL 作为自动自行车控制的有效范例，提供了优于传统方法的适应性。视频演示可在 https://anony6f05.github.io/CycleRL/ 获取。

</details>

---



</details>

<details><summary><b>2026-03-17 (6 papers)</b></summary>

# arXiv World Model Papers - 2026-03-17

**Paper Count**: 6

---

## 1. RS-WorldModel: a Unified Model for Remote Sensing Understanding and Future Sense Forecasting / RS-WorldModel：遥感理解和未来感知预测的统一模型

**Date**: 2026-03-16 | **arXiv**: [2603.14941v1](http://arxiv.org/abs/2603.14941v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14941v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Remote sensing world models aim to both explain observed changes and forecast plausible futures, two tasks that share spatiotemporal priors. Existing methods, however, typically address them separately, limiting cross-task transfer. We present RS-WorldModel, a unified world model for remote sensing that jointly handles spatiotemporal change understanding and text-guided future scene forecasting, and we build RSWBench-1.1M, a 1.1 million sample dataset with rich language annotations covering both tasks. RS-WorldModel is trained in three stages: (1) Geo-Aware Generative Pre-training (GAGP) conditions forecasting on geographic and acquisition metadata; (2) synergistic instruction tuning (SIT) jointly trains understanding and forecasting; (3) verifiable reinforcement optimization (VRO) refines outputs with verifiable, task-specific rewards. With only 2B parameters, RS-WorldModel surpasses open-source models up to 120$ \times $ larger on most spatiotemporal change question-answering metrics. It achieves an FID of 43.13 on text-guided future scene forecasting, outperforming all open-source baselines as well as the closed-source Gemini-2.5-Flash Image (Nano Banana).

遥感世界模型旨在解释观察到的变化并预测可能的未来，这两项任务共享时空先验。然而，现有的方法通常单独解决它们，限制了跨任务传输。我们提出了 RS-WorldModel，这是一种统一的遥感世界模型，可联合处理时空变化理解和文本引导的未来场景预测，并构建了 RSWBench-1.1M，这是一个包含 110 万个样本的数据集，具有涵盖这两项任务的丰富语言注释。 RS-WorldModel 分三个阶段进行训练：（1）地理感知生成预训练（GAGP）对地理和采集元数据进行条件预测； （2）协同指令调优（SIT）联合训练理解和预测； (3) 可验证的强化优化 (VRO) 通过可验证的、特定于任务的奖励来完善输出。仅用 2B 参数，RS-WorldModel 在大多数时空变化问答指标上就超过了开源模型高达 120 美元 × 美元。它在文本引导的未来场景预测方面达到了 43.13 的 FID，优于所有开源基线以及闭源 Gemini-2.5-Flash Image (Nano Banana)。

</details>

---

## 2. PerlAD: Towards Enhanced Closed-loop End-to-end Autonomous Driving with Pseudo-simulation-based Reinforcement Learning / PerlAD：通过基于伪仿真的强化学习迈向增强型闭环端到端自动驾驶

**Date**: 2026-03-16 | **arXiv**: [2603.14908v1](http://arxiv.org/abs/2603.14908v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14908v1)

**Categories**: cs.RO, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

End-to-end autonomous driving policies based on Imitation Learning (IL) often struggle in closed-loop execution due to the misalignment between inadequate open-loop training objectives and real driving requirements. While Reinforcement Learning (RL) offers a solution by directly optimizing driving goals via reward signals, the rendering-based training environments introduce the rendering gap and are inefficient due to high computational costs. To overcome these challenges, we present a novel Pseudo-simulation-based RL method for closed-loop end-to-end autonomous driving, PerlAD. Based on offline datasets, PerlAD constructs a pseudo-simulation that operates in vector space, enabling efficient, rendering-free trial-and-error training. To bridge the gap between static datasets and dynamic closed-loop environments, PerlAD introduces a prediction world model that generates reactive agent trajectories conditioned on the ego vehicle's plan. Furthermore, to facilitate efficient planning, PerlAD utilizes a hierarchical decoupled planner that combines IL for lateral path generation and RL for longitudinal speed optimization. Comprehensive experimental results demonstrate that PerlAD achieves state-of-the-art performance on the Bench2Drive benchmark, surpassing the previous E2E RL method by 10.29% in Driving Score without requiring expensive online interactions. Additional evaluations on the DOS benchmark further confirm its reliability in handling safety-critical occlusion scenarios.

由于开环训练目标与真实驾驶需求不匹配，基于模仿学习（IL）的端到端自动驾驶策略常常难以闭环执行。虽然强化学习（RL）提供了一种通过奖励信号直接优化驾驶目标的解决方案，但基于渲染的训练环境引入了渲染间隙，并且由于高计算成本而效率低下。为了克服这些挑战，我们提出了一种用于闭环端到端自动驾驶的基于伪仿真的新型 RL 方法 PerlAD。基于离线数据集，PerlAD 构建了在向量空间中运行的伪模拟，从而实现高效、免渲染的试错训练。为了弥合静态数据集和动态闭环环境之间的差距，PerlAD 引入了一种预测世界模型，该模型可以根据自我车辆的计划生成反应代理轨迹。此外，为了促进高效规划，PerlAD 利用分层解耦规划器，将用于横向路径生成的 IL 和用于纵向速度优化的 RL 结合起来。综合实验结果表明，PerlAD 在 Bench2Drive 基准上实现了最先进的性能，在无需昂贵的在线交互的情况下，在驾驶分数上超越了之前的 E2E RL 方法 10.29%。对 DOS 基准的额外评估进一步证实了其在处理安全关键遮挡场景方面的可靠性。

</details>

---

## 3. WorldVLM: Combining World Model Forecasting and Vision-Language Reasoning / WorldVLM：结合世界模型预测和视觉语言推理

**Date**: 2026-03-15 | **arXiv**: [2603.14497v1](http://arxiv.org/abs/2603.14497v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14497v1)

**Categories**: cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Autonomous driving systems depend on on models that can reason about high-level scene contexts and accurately predict the dynamics of their surrounding environment. Vision- Language Models (VLMs) have recently emerged as promising tools for decision-making and scene understanding, offering strong capabilities in contextual reasoning. However, their limited spatial comprehension constrains their effectiveness as end-to-end driving models. World Models (WM) internalize environmental dynamics to predict future scene evolution. Recently explored as ego-motion predictors and foundation models for autonomous driving, they represent a promising direction for addressing key challenges in the field, particularly enhancing generalization while maintaining dynamic prediction. To leverage the complementary strengths of context-based decision making and prediction, we propose WorldVLM: A hybrid architecture that unifies VLMs and WMs. In our design, the high-level VLM generates behavior commands to guide the driving WM, enabling interpretable and context-aware actions. We evaluate conditioning strategies and provide insights into the hybrid design challenges.

Autonomous driving systems depend on on models that can reason about high-level scene contexts and accurately predict the dynamics of their surrounding environment. Vision- Language Models (VLMs) have recently emerged as promising tools for decision-making and scene understanding, offering strong capabilities in contextual reasoning.然而，它们有限的空间理解限制了它们作为端到端驾驶模型的有效性。世界模型 (WM) 内化环境动态来预测未来场景的演变。 Recently explored as ego-motion predictors and foundation models for autonomous driving, they represent a promising direction for addressing key challenges in the field, particularly enhancing generalization while maintaining dynamic prediction. To leverage the complementary strengths of context-based decision making and prediction, we propose WorldVLM: A hybrid architecture that unifies VLMs and WMs.在我们的设计中，高级 VLM 生成行为命令来指导驾驶 WM，从而实现可解释和上下文感知的操作。我们评估调节策略并提供有关混合设计挑战的见解。

</details>

---

## 4. WestWorld: A Knowledge-Encoded Scalable Trajectory World Model for Diverse Robotic Systems / WestWorld：适用于各种机器人系统的知识编码的可扩展轨迹世界模型

**Date**: 2026-03-15 | **arXiv**: [2603.14392v1](http://arxiv.org/abs/2603.14392v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14392v1)

**Categories**: cs.LG, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Trajectory world models play a crucial role in robotic dynamics learning, planning, and control. While recent works have explored trajectory world models for diverse robotic systems, they struggle to scale to a large number of distinct system dynamics and overlook domain knowledge of physical structures. To address these limitations, we introduce WestWorld, a knoWledge-Encoded Scalable Trajectory World model for diverse robotic systems. To tackle the scalability challenge, we propose a novel system-aware Mixture-of-Experts (Sys-MoE) that dynamically combines and routes specialized experts for different robotic systems via a learnable system embedding. To further enhance zero-shot generalization, we incorporate domain knowledge of robot physical structures by introducing a structural embedding that aligns trajectory representations with morphological information. After pretraining on 89 complex environments spanning diverse morphologies across both simulation and real-world settings, WestWorld achieves significant improvements over competitive baselines in zero- and few-shot trajectory prediction. Additionally, it shows strong scalability across a wide range of robotic environments and significantly improves performance on downstream model-based control for different robots. Finally, we deploy our model on a real-world Unitree Go1, where it demonstrates stable locomotion performance (see our demo on the website: https://westworldrobot.github.io/). The code will be available upon publication.

轨迹世界模型在机器人动力学学习、规划和控制中发挥着至关重要的作用。虽然最近的工作探索了不同机器人系统的轨迹世界模型，但它们难以扩展到大量不同的系统动力学，并且忽略了物理结构的领域知识。为了解决这些限制，我们引入了 WestWorld，这是一种适用于不同机器人系统的知识编码可扩展轨迹世界模型。为了应对可扩展性挑战，我们提出了一种新颖的系统感知专家混合（Sys-MoE），它通过可学习的系统嵌入动态组合和路由不同机器人系统的专业专家。为了进一步增强零样本泛化，我们通过引入将轨迹表示与形态信息对齐的结构嵌入来整合机器人物理结构的领域知识。在对跨越模拟和现实世界设置的不同形态的 89 个复杂环境进行预训练后，WestWorld 在零次和少次轨迹预测方面比竞争基线取得了显着改进。此外，它在各种机器人环境中表现出强大的可扩展性，并显着提高了不同机器人下游基于模型的控制的性能。最后，我们将模型部署在现实世界的 Unitree Go1 上，并展示了稳定的运动性能（请参阅网站上的演示：https://westworldrobot.github.io/）。该代码将在发布后提供。

</details>

---

## 5. The Pulse of Motion: Measuring Physical Frame Rate from Visual Dynamics / 运动的脉搏：从视觉动力学测量物理帧速率

**Date**: 2026-03-15 | **arXiv**: [2603.14375v1](http://arxiv.org/abs/2603.14375v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14375v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

While recent generative video models have achieved remarkable visual realism and are being explored as world models, true physical simulation requires mastering both space and time. Current models can produce visually smooth kinematics, yet they lack a reliable internal motion pulse to ground these motions in a consistent, real-world time scale. This temporal ambiguity stems from the common practice of indiscriminately training on videos with vastly different real-world speeds, forcing them into standardized frame rates. This leads to what we term chronometric hallucination: generated sequences exhibit ambiguous, unstable, and uncontrollable physical motion speeds. To address this, we propose Visual Chronometer, a predictor that recovers the Physical Frames Per Second (PhyFPS) directly from the visual dynamics of an input video. Trained via controlled temporal resampling, our method estimates the true temporal scale implied by the motion itself, bypassing unreliable metadata. To systematically quantify this issue, we establish two benchmarks, PhyFPS-Bench-Real and PhyFPS-Bench-Gen. Our evaluations reveal a harsh reality: state-of-the-art video generators suffer from severe PhyFPS misalignment and temporal instability. Finally, we demonstrate that applying PhyFPS corrections significantly improves the human-perceived naturalness of AI-generated videos. Our project page is https://xiangbogaobarry.github.io/Visual_Chronometer/.

虽然最近的生成视频模型已经实现了显着的视觉真实感，并且正在作为世界模型进行探索，但真正的物理模拟需要掌握空间和时间。当前的模型可以产生视觉上平滑的运动学，但它们缺乏可靠的内部运动脉冲来将这些运动置于一致的、真实世界的时间尺度内。这种时间模糊性源于对现实世界速度截然不同的视频进行不加区别的训练的常见做法，迫使它们采用标准化的帧速率。这导致了我们所说的计时幻觉：生成的序列表现出模糊、不稳定和无法控制的物理运动速度。为了解决这个问题，我们提出了 Visual Chronometer，这是一种直接从输入视频的视觉动态中恢复物理帧每秒 (PhyFPS) 的预测器。通过受控时间重采样进行训练，我们的方法绕过不可靠的元数据来估计运动本身隐含的真实时间尺度。为了系统地量化这个问题，我们建立了两个基准：PhyFPS-Bench-Real 和 PhyFPS-Bench-Gen。我们的评估揭示了一个严酷的现实：最先进的视频生成器存在严重的 PhyFPS 错位和时间不稳定问题。最后，我们证明应用 PhyFPS 校正可以显着提高人工智能生成视频的人类感知自然度。我们的项目页面是https://yangbogaobarry.github.io/Visual_Chronometer/。

</details>

---

## 6. Understanding the Emergence of Seemingly Useless Features in Next-Token Predictors / 了解下一个标记预测器中看似无用的特征的出现

**Date**: 2026-03-14 | **arXiv**: [2603.14087v1](http://arxiv.org/abs/2603.14087v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14087v1)

**Categories**: cs.LG, cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

Trained Transformers have been shown to compute abstract features that appear redundant for predicting the immediate next token. We identify which components of the gradient signal from the next-token prediction objective give rise to this phenomenon, and we propose a method to estimate the influence of those components on the emergence of specific features. After validating our approach on toy tasks, we use it to interpret the origins of the world model in OthelloGPT and syntactic features in a small language model. Finally, we apply our framework to a pretrained LLM, showing that features with extremely high or low influence on future tokens tend to be related to formal reasoning domains such as code. Overall, our work takes a step toward understanding hidden features of Transformers through the lens of their development during training.

经过训练的 Transformer 已被证明可以计算抽象特征，这些特征对于预测紧邻的下一个标记来说似乎是多余的。我们确定了下一个令牌预测目标的梯度信号的哪些分量引起了这种现象，并提出了一种方法来估计这些分量对特定特征出现的影响。在验证了我们在玩具任务上的方法后，我们用它来解释 OthelloGPT 中世界模型的起源和小型语言模型中的句法特征。最后，我们将我们的框架应用于预训练的 LLM，表明对未来令牌影响极高或极低的特征往往与代码等形式推理领域相关。总的来说，我们的工作朝着通过变形金刚在训练过程中的发展过程来理解变形金刚的隐藏特征迈出了一步。

</details>

---



</details>

<details><summary><b>2026-03-16 (1 papers)</b></summary>

# arXiv World Model Papers - 2026-03-16

**Paper Count**: 1

---

## 1. SAW: Toward a Surgical Action World Model via Controllable and Scalable Video Generation / SAW：通过可控和可扩展的视频生成建立外科手术世界模型

**Date**: 2026-03-13 | **arXiv**: [2603.13024v1](http://arxiv.org/abs/2603.13024v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.13024v1)

**Categories**: cs.CV, cs.AI, cs.LG, eess.IV

<details><summary><b>Abstract / 摘要</b></summary>

A surgical world model capable of generating realistic surgical action videos with precise control over tool-tissue interactions can address fundamental challenges in surgical AI and simulation -- from data scarcity and rare event synthesis to bridging the sim-to-real gap for surgical automation. However, current video generation methods, the very core of such surgical world models, require expensive annotations or complex structured intermediates as conditioning signals at inference, limiting their scalability. Other approaches exhibit limited temporal consistency across complex laparoscopic scenes and do not possess sufficient realism. We propose Surgical Action World (SAW) -- a step toward surgical action world modeling through video diffusion conditioned on four lightweight signals: language prompts encoding tool-action context, a reference surgical scene, tissue affordance mask, and 2D tool-tip trajectories. We design a conditional video diffusion approach that reformulates video-to-video diffusion into trajectory-conditioned surgical action synthesis. The backbone diffusion model is fine-tuned on a custom-curated dataset of 12,044 laparoscopic clips with lightweight spatiotemporal conditioning signals, leveraging a depth consistency loss to enforce geometric plausibility without requiring depth at inference. SAW achieves state-of-the-art temporal consistency (CD-FVD: 199.19 vs. 546.82) and strong visual quality on held-out test data. Furthermore, we demonstrate its downstream utility for (a) surgical AI, where augmenting rare actions with SAW-generated videos improves action recognition (clipping F1-score: 20.93% to 43.14%; cutting: 0.00% to 8.33%) on real test data, and (b) surgical simulation, where rendering tool-tissue interaction videos from simulator-derived trajectory points toward a visually faithful simulation engine.

能够生成逼真的手术动作视频并精确控制工具与组织相互作用的手术世界模型可以解决手术人工智能和模拟中的基本挑战——从数据稀缺和罕见事件合成到缩小手术自动化的模拟与真实差距。然而，当前的视频生成方法（此类手术世界模型的核心）需要昂贵的注释或复杂的结构化中间体作为推理时的条件信号，限制了其可扩展性。其他方法在复杂的腹腔镜场景中表现出有限的时间一致性，并且不具备足够的真实性。我们提出手术动作世界（SAW）——通过以四个轻量级信号为条件的视频扩散实现手术动作世界建模的一步：语言提示编码工具动作上下文、参考手术场景、组织可供性掩模和 2D 工具提示轨迹。我们设计了一种条件视频扩散方法，将视频到视频的扩散重新表述为轨迹条件手术动作合成。主干扩散模型在包含 12,044 个腹腔镜剪辑的定制数据集上进行微调，具有轻量级时空条件信号，利用深度一致性损失来增强几何合理性，而无需推理深度。 SAW 在保留的测试数据上实现了最先进的时间一致性（CD-FVD：199.19 与 546.82）和强大的视觉质量。此外，我们还展示了其在以下方面的下游实用性：(a) 手术人工智能，其中使用 SAW 生成的视频增强罕见动作，从而提高了对真实测试数据的动作识别（剪切 F1 分数：20.93% 至 43.14%；剪切：0.00% 至 8.33%）；以及 (b) 手术模拟，其中从模拟器导出的轨迹渲染工具与组织交互视频，指向视觉上忠实的模拟引擎。

</details>

---



</details>

<details><summary><b>2026-03-13 (3 papers)</b></summary>

# arXiv World Model Papers - 2026-03-13

**Paper Count**: 3

---

## 1. Temporal Straightening for Latent Planning / 潜在规划的时间拉直

**Date**: 2026-03-12 | **arXiv**: [2603.12231v1](http://arxiv.org/abs/2603.12231v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.12231v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Learning good representations is essential for latent planning with world models. While pretrained visual encoders produce strong semantic visual features, they are not tailored to planning and contain information irrelevant -- or even detrimental -- to planning. Inspired by the perceptual straightening hypothesis in human visual processing, we introduce temporal straightening to improve representation learning for latent planning. Using a curvature regularizer that encourages locally straightened latent trajectories, we jointly learn an encoder and a predictor. We show that reducing curvature this way makes the Euclidean distance in latent space a better proxy for the geodesic distance and improves the conditioning of the planning objective. We demonstrate empirically that temporal straightening makes gradient-based planning more stable and yields significantly higher success rates across a suite of goal-reaching tasks.

学习良好的表示对于世界模型的潜在规划至关重要。虽然经过预训练的视觉编码器会产生强大的语义视觉特征，但它们并不是针对规划而定制的，并且包含与规划无关甚至有害的信息。受人类视觉处理中感知矫正假说的启发，我们引入时间矫正来改进潜在规划的表示学习。使用鼓励局部拉直潜在轨迹的曲率正则化器，我们共同学习编码器和预测器。我们表明，以这种方式减少曲率使得潜在空间中的欧几里得距离能够更好地代表测地距离，并改善规划目标的条件。我们凭经验证明，时间拉直使得基于梯度的规划更加稳定，并且在一系列目标达成任务中产生显着更高的成功率。

</details>

---

## 2. ARROW: Augmented Replay for RObust World models / ARROW：RObust World 模型的增强重播

**Date**: 2026-03-12 | **arXiv**: [2603.11395v1](http://arxiv.org/abs/2603.11395v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.11395v1)

**Categories**: cs.LG, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Continual reinforcement learning challenges agents to acquire new skills while retaining previously learned ones with the goal of improving performance in both past and future tasks. Most existing approaches rely on model-free methods with replay buffers to mitigate catastrophic forgetting; however, these solutions often face significant scalability challenges due to large memory demands. Drawing inspiration from neuroscience, where the brain replays experiences to a predictive World Model rather than directly to the policy, we present ARROW (Augmented Replay for RObust World models), a model-based continual RL algorithm that extends DreamerV3 with a memory-efficient, distribution-matching replay buffer. Unlike standard fixed-size FIFO buffers, ARROW maintains two complementary buffers: a short-term buffer for recent experiences and a long-term buffer that preserves task diversity through intelligent sampling. We evaluate ARROW on two challenging continual RL settings: Tasks without shared structure (Atari), and tasks with shared structure, where knowledge transfer is possible (Procgen CoinRun variants). Compared to model-free and model-based baselines with replay buffers of the same-size, ARROW demonstrates substantially less forgetting on tasks without shared structure, while maintaining comparable forward transfer. Our findings highlight the potential of model-based RL and bio-inspired approaches for continual reinforcement learning, warranting further research.

持续的强化学习要求智能体获得新技能，同时保留以前学到的技能，以提高过去和未来任务的表现。大多数现有方法依赖于具有重播缓冲区的无模型方法来减轻灾难性遗忘；然而，由于内存需求较大，这些解决方案常常面临重大的可扩展性挑战。从神经科学中汲取灵感，大脑将经验重播到预测世界模型而不是直接重播策略，我们提出了 ARROW（RObust 世界模型的增强重播），这是一种基于模型的连续 RL 算法，它通过内存高效、分布匹配的重播缓冲区扩展了 DreamerV3。与标准的固定大小 FIFO 缓冲区不同，ARROW 维护两个互补的缓冲区：一个用于最近经验的短期缓冲区和一个通过智能采样保留任务多样性的长期缓冲区。我们在两个具有挑战性的连续 RL 设置上评估 ARROW：没有共享结构的任务（Atari），以及具有共享结构的任务，其中可以进行知识转移（Procgen CoinRun 变体）。与具有相同大小的重播缓冲区的无模型和基于模型的基线相比，ARROW 在没有共享结构的任务上的遗忘显着减少，同时保持了可比较的前向传输。我们的研究结果强调了基于模型的强化学习和仿生方法在持续强化学习方面的潜力，值得进一步研究。

</details>

---

## 3. ResWM: Residual-Action World Model for Visual RL / ResWM：视觉强化学习的残差动作世界模型

**Date**: 2026-03-11 | **arXiv**: [2603.11110v1](http://arxiv.org/abs/2603.11110v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.11110v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Learning predictive world models from raw visual observations is a central challenge in reinforcement learning (RL), especially for robotics and continuous control. Conventional model-based RL frameworks directly condition future predictions on absolute actions, which makes optimization unstable: the optimal action distributions are task-dependent, unknown a priori, and often lead to oscillatory or inefficient control. To address this, we introduce the Residual-Action World Model (ResWM), a new framework that reformulates the control variable from absolute actions to residual actions -- incremental adjustments relative to the previous step. This design aligns with the inherent smoothness of real-world control, reduces the effective search space, and stabilizes long-horizon planning. To further strengthen the representation, we propose an Observation Difference Encoder that explicitly models the changes between adjacent frames, yielding compact latent dynamics that are naturally coupled with residual actions. ResWM is integrated into a Dreamer-style latent dynamics model with minimal modifications and no extra hyperparameters. Both imagination rollouts and policy optimization are conducted in the residual-action space, enabling smoother exploration, lower control variance, and more reliable planning. Empirical results on the DeepMind Control Suite demonstrate that ResWM achieves consistent improvements in sample efficiency, asymptotic returns, and control smoothness, significantly surpassing strong baselines such as Dreamer and TD-MPC. Beyond performance, ResWM produces more stable and energy-efficient action trajectories, a property critical for robotic systems deployed in real-world environments. These findings suggest that residual action modeling provides a simple yet powerful principle for bridging algorithmic advances in RL with the practical requirements of robotics.

从原始视觉观察中学习预测世界模型是强化学习 (RL) 的核心挑战，特别是对于机器人和连续控制而言。传统的基于模型的强化学习框架直接以绝对动作作为未来预测的条件，这使得优化不稳定：最优动作分布依赖于任务，先验未知，并且经常导致振荡或低效控制。为了解决这个问题，我们引入了残差动作世界模型（ResWM），这是一个新框架，它将控制变量从绝对动作重新表述为残差动作——相对于上一步的增量调整。这种设计符合现实世界控制固有的平滑性，减少了有效搜索空间，并稳定了长期规划。为了进一步加强表示，我们提出了一个观察差异编码器，它显式地模拟相邻帧之间的变化，产生与残余动作自然耦合的紧凑的潜在动态。 ResWM 集成到 Dreamer 式潜在动力学模型中，只需进行最少的修改，并且无需额外的超参数。想象力的推出和策略优化都是在剩余行动空间中进行的，从而实现更顺畅的探索、更低的控制方差和更可靠的规划。 DeepMind Control Suite 上的实证结果表明，ResWM 在样本效率、渐近回报和控制平滑度方面实现了持续改进，显着超越了 Dreamer 和 TD-MPC 等强基线。除了性能之外，ResWM 还可以产生更稳定、更节能的动作轨迹，这对于在现实环境中部署的机器人系统至关重要。这些发现表明，残差动作建模提供了一种简单而强大的原理，可以将强化学习的算法进步与机器人的实际要求联系起来。

</details>

---



</details>

<details><summary><b>2026-03-12 (3 papers)</b></summary>

# arXiv World Model Papers - 2026-03-12

**Paper Count**: 3

---

## 1. PPGuide: Steering Diffusion Policies with Performance Predictive Guidance / PPGuide：通过性能预测指导指导扩散政策

**Date**: 2026-03-11 | **arXiv**: [2603.10980v1](http://arxiv.org/abs/2603.10980v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.10980v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion policies have shown to be very efficient at learning complex, multi-modal behaviors for robotic manipulation. However, errors in generated action sequences can compound over time which can potentially lead to failure. Some approaches mitigate this by augmenting datasets with expert demonstrations or learning predictive world models which might be computationally expensive. We introduce Performance Predictive Guidance (PPGuide), a lightweight, classifier-based framework that steers a pre-trained diffusion policy away from failure modes at inference time. PPGuide makes use of a novel self-supervised process: it uses attention-based multiple instance learning to automatically estimate which observation-action chunks from the policy's rollouts are relevant to success or failure. We then train a performance predictor on this self-labeled data. During inference, this predictor provides a real-time gradient to guide the policy toward more robust actions. We validated our proposed PPGuide across a diverse set of tasks from the Robomimic and MimicGen benchmarks, demonstrating consistent improvements in performance.

扩散策略已被证明在学习机器人操作的复杂、多模式行为方面非常有效。然而，生成的操作序列中的错误可能会随着时间的推移而复合，这可能会导致失败。一些方法通过专家演示或学习预测世界模型来增强数据集来缓解这种情况，而这可能会导致计算成本高昂。我们引入了性能预测指导 (PPGuide)，这是一种基于分类器的轻量级框架，可在推理时引导预先训练的扩散策略远离故障模式。 PPGuide 利用了一种新颖的自我监督过程：它使用基于注意力的多实例学习来自动估计策略推出中的哪些观察行动块与成功或失败相关。然后，我们根据这些自标记数据训练性能预测器。在推理过程中，该预测器提供实时梯度来指导策略采取更稳健的行动。我们在 Robomimic 和 MimicGen 基准测试中的一系列不同任务中验证了我们提出的 PPGuide，证明了性能的持续改进。

</details>

---

## 2. World Model for Battery Degradation Prediction Under Non-Stationary Aging / 非平稳老化下电池退化预测的世界模型

**Date**: 2026-03-11 | **arXiv**: [2603.10527v1](http://arxiv.org/abs/2603.10527v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.10527v1)

**Categories**: cs.LG, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

Degradation prognosis for lithium-ion cells requires forecasting the state-of-health (SOH) trajectory over future cycles. Existing data-driven approaches can produce trajectory outputs through direct regression, but lack a mechanism to propagate degradation dynamics forward in time. This paper formulates battery degradation prognosis as a world model problem, encoding raw voltage, current, and temperature time-series from each cycle into a latent state and propagating it forward via a learned dynamics transition to produce a future trajectory spanning 80 cycles. To investigate whether electrochemical knowledge improves the learned dynamics, a Single Particle Model (SPM) constraint is incorporated into the training loss. Three configurations are evaluated on the Severson LiFePO4 (LFP) dataset of 138 cells. Iterative rollout halves the trajectory forecast error compared to direct regression from the same encoder. The SPM constraint improves prediction at the degradation knee where the resistance to SOH relationship is most applicable, without changing aggregate accuracy.

锂离子电池的退化预测需要预测未来周期的健康状态 (SOH) 轨迹。现有的数据驱动方法可以通过直接回归产生轨迹输出，但缺乏及时向前传播退化动态的机制。本文将电池退化预测制定为世界模型问题，将每个周期的原始电压、电流和温度时间序列编码为潜在状态，并通过学习的动态转换向前传播，以产生跨越 80 个周期的未来轨迹。为了研究电化学知识是否改善了学习的动力学，将单粒子模型（SPM）约束纳入训练损失中。在 138 个电池的 Severson LiFePO4 (LFP) 数据集上评估了三种配置。与来自同一编码器的直接回归相比，迭代推出将轨迹预测误差减半。 SPM 约束改进了对 SOH 关系的阻力最适用的退化拐点处的预测，而不改变聚合精度。

</details>

---

## 3. PlayWorld: Learning Robot World Models from Autonomous Play / PlayWorld：从自主游戏中学习机器人世界模型

**Date**: 2026-03-09 | **arXiv**: [2603.09030v2](http://arxiv.org/abs/2603.09030v2) | **PDF**: [Link](http://arxiv.org/pdf/2603.09030v2)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Action-conditioned video models offer a promising path to building general-purpose robot simulators that can improve directly from data. Yet, despite training on large-scale robot datasets, current state-of-the-art video models still struggle to predict physically consistent robot-object interactions that are crucial in robotic manipulation. To close this gap, we present PlayWorld, a simple, scalable, and fully autonomous pipeline for training high-fidelity video world simulators from interaction experience. In contrast to prior approaches that rely on success-biased human demonstrations, PlayWorld is the first system capable of learning entirely from unsupervised robot self-play, enabling naturally scalable data collection while capturing complex, long-tailed physical interactions essential for modeling realistic object dynamics. Experiments across diverse manipulation tasks show that PlayWorld generates high-quality, physically consistent predictions for contact-rich interactions that are not captured by world models trained on human-collected data. We further demonstrate the versatility of PlayWorld in enabling fine-grained failure prediction and policy evaluation, with up to 40% improvements over human-collected data. Finally, we demonstrate how PlayWorld enables reinforcement learning in the world model, improving policy performance by 65% in success rates when deployed in the real world.

动作条件视频模型为构建可以直接从数据中改进的通用机器人模拟器提供了一条有前途的途径。然而，尽管对大规模机器人数据集进行了训练，当前最先进的视频模型仍然难以预测在机器人操作中至关重要的物理一致的机器人与物体的交互。为了弥补这一差距，我们推出了 PlayWorld，这是一个简单、可扩展且完全自主的管道，用于通过交互体验训练高保真视频世界模拟器。与之前依赖于成功的人类演示的方法相比，PlayWorld 是第一个能够完全从无监督的机器人自我游戏中学习的系统，能够自然扩展数据收集，同时捕获对于建模真实对象动力学至关重要的复杂的长尾物理交互。跨不同操作任务的实验表明，PlayWorld 可以为接触丰富的交互生成高质量、物理一致的预测，而这些交互是根据人类收集的数据训练的世界模型无法捕获的。我们进一步证明了 PlayWorld 在实现细粒度故障预测和策略评估方面的多功能性，与人类收集的数据相比，性能提高了 40%。最后，我们演示了 PlayWorld 如何在世界模型中实现强化学习，在现实世界中部署时将策略性能提高 65% 的成功率。

</details>

---



</details>

<details><summary><b>2026-03-11 (10 papers)</b></summary>

# arXiv World Model Papers - 2026-03-11

**Paper Count**: 10

---

## 1. Towards a Neural Debugger for Python / 面向 Python 的神经调试器

**Date**: 2026-03-10 | **arXiv**: [2603.09951v1](http://arxiv.org/abs/2603.09951v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09951v1)

**Categories**: cs.LG, cs.AI, cs.SE

<details><summary><b>Abstract / 摘要</b></summary>

Training large language models (LLMs) on Python execution traces grounds them in code execution and enables the line-by-line execution prediction of whole Python programs, effectively turning them into neural interpreters (FAIR CodeGen Team et al., 2025). However, developers rarely execute programs step by step; instead, they use debuggers to stop execution at certain breakpoints and step through relevant portions only while inspecting or modifying program variables. Existing neural interpreter approaches lack such interactive control. To address this limitation, we introduce neural debuggers: language models that emulate traditional debuggers, supporting operations such as stepping into, over, or out of functions, as well as setting breakpoints at specific source lines. We show that neural debuggers -- obtained via fine-tuning large LLMs or pre-training smaller models from scratch -- can reliably model both forward execution (predicting future states and outputs) and inverse execution (inferring prior states or inputs) conditioned on debugger actions. Evaluated on CruxEval, our models achieve strong performance on both output and input prediction tasks, demonstrating robust conditional execution modeling. Our work takes first steps towards future agentic coding systems in which neural debuggers serve as a world model for simulated debugging environments, providing execution feedback or enabling agents to interact with real debugging tools. This capability lays the foundation for more powerful code generation, program understanding, and automated debugging.

在 Python 执行轨迹上训练大型语言模型 (LLM) 可以使它们扎根于代码执行，并能够对整个 Python 程序进行逐行执行预测，从而有效地将它们转变为神经解释器（FAIR CodeGen Team 等人，2025）。然而，开发人员很少一步步执行程序；相反，他们使用调试器在某些断点处停止执行，并仅在检查或修改程序变量时逐步执行相关部分。现有的神经解释器方法缺乏这种交互控制。为了解决这个限制，我们引入了神经调试器：模拟传统调试器的语言模型，支持诸如单步进入、越过或退出函数等操作，以及在特定源代码行设置断点。我们证明，通过微调大型 LLM 或从头开始预训练较小模型获得的神经调试器可以可靠地对基于调试器操作的正向执行（预测未来状态和输出）和逆向执行（推断先前状态或输入）进行建模。在 CruxEval 上进行评估，我们的模型在输出和输入预测任务上均取得了出色的性能，展示了强大的条件执行模型。我们的工作朝着未来的代理编码系统迈出了第一步，在该系统中，神经调试器充当模拟调试环境的世界模型，提供执行反馈或使代理能够与真实的调试工具交互。此功能为更强大的代码生成、程序理解和自动调试奠定了基础。

</details>

---

## 2. RAE-NWM: Navigation World Model in Dense Visual Representation Space / RAE-NWM：密集视觉表示空间中的导航世界模型

**Date**: 2026-03-10 | **arXiv**: [2603.09241v1](http://arxiv.org/abs/2603.09241v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09241v1)

**Categories**: cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Visual navigation requires agents to reach goals in complex environments through perception and planning. World models address this task by simulating action-conditioned state transitions to predict future observations. Current navigation world models typically learn state evolution under actions within the compressed latent space of a Variational Autoencoder, where spatial compression often discards fine-grained structural information and hinders precise control. To better understand the propagation characteristics of different representations, we conduct a linear dynamics probe and observe that dense DINOv2 features exhibit stronger linear predictability for action-conditioned transitions. Motivated by this observation, we propose the Representation Autoencoder-based Navigation World Model (RAE-NWM), which models navigation dynamics in a dense visual representation space. We employ a Conditional Diffusion Transformer with Decoupled Diffusion Transformer head (CDiT-DH) to model continuous transitions, and introduce a separate time-driven gating module for dynamics conditioning to regulate action injection strength during generation. Extensive evaluations show that modeling sequential rollouts in this space improves structural stability and action accuracy, benefiting downstream planning and navigation.

视觉导航要求智能体通过感知和规划在复杂环境中实现目标。世界模型通过模拟动作条件状态转换来预测未来的观察来解决此任务。当前的导航世界模型通常在变分自动编码器的压缩潜在空间内学习状态演化，其中空间压缩通常会丢弃细粒度的结构信息并阻碍精确控制。为了更好地理解不同表示的传播特性，我们进行了线性动力学探测，并观察到密集的 DINOv2 特征对动作条件转换表现出更强的线性可预测性。受这一观察的启发，我们提出了基于表示自动编码器的导航世界模型（RAE-NWM），它在密集的视觉表示空间中对导航动态进行建模。我们采用带有解耦扩散变压器头的条件扩散变压器 (CDiT-DH) 来模拟连续过渡，并引入一个单独的时间驱动选通模块进行动态调节，以在生成过程中调节动作注入强度。广泛的评估表明，对该领域的连续推出进行建模可以提高结构稳定性和行动准确性，有利于下游规划和导航。

</details>

---

## 3. Latent World Models for Automated Driving: A Unified Taxonomy, Evaluation Framework, and Open Challenges / 自动驾驶的潜在世界模型：统一的分类法、评估框架和开放挑战

**Date**: 2026-03-10 | **arXiv**: [2603.09086v1](http://arxiv.org/abs/2603.09086v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09086v1)

**Categories**: cs.RO, cs.AI, cs.LG, cs.MA, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

Emerging generative world models and vision-language-action (VLA) systems are rapidly reshaping automated driving by enabling scalable simulation, long-horizon forecasting, and capability-rich decision making. Across these directions, latent representations serve as the central computational substrate: they compress high-dimensional multi-sensor observations, enable temporally coherent rollouts, and provide interfaces for planning, reasoning, and controllable generation. This paper proposes a unifying latent-space framework that synthesizes recent progress in world models for automated driving. The framework organizes the design space by the target and form of latent representations (latent worlds, latent actions, latent generators; continuous states, discrete tokens, and hybrids) and by structural priors for geometry, topology, and semantics. Building on this taxonomy, the paper articulates five cross-cutting internal mechanics (i.e, structural isomorphism, long-horizon temporal stability, semantic and reasoning alignment, value-aligned objectives and post-training, as well as adaptive computation and deliberation) and connects these design choices to robustness, generalization, and deployability. The work also proposes concrete evaluation prescriptions, including a closed-loop metric suite and a resource-aware deliberation cost, designed to reduce the open-loop / closed-loop mismatch. Finally, the paper identifies actionable research directions toward advancing latent world model for decision-ready, verifiable, and resource-efficient automated driving.

新兴的生成世界模型和视觉语言动作（VLA）系统通过实现可扩展的模拟、长期预测和功能丰富的决策，正在迅速重塑自动驾驶。在这些方向上，潜在表示充当中央计算基础：它们压缩高维多传感器观测结果，实现时间相干的推出，并提供用于规划、推理和可控生成的接口。本文提出了一个统一的潜在空间框架，综合了自动驾驶世界模型的最新进展。该框架通过潜在表示的目标和形式（潜在世界、潜在动作、潜在生成器；连续状态、离散标记和混合）以及几何、拓扑和语义的结构先验来组织设计空间。在此分类法的基础上，本文阐明了五种跨领域的内部机制（即结构同构、长期时间稳定性、语义和推理对齐、价值对齐目标和后训练，以及自适应计算和审议），并将这些设计选择与鲁棒性、泛化性和可部署性联系起来。这项工作还提出了具体的评估方案，包括闭环度量套件和资源感知审议成本，旨在减少开环/闭环不匹配。最后，本文确定了可操作的研究方向，以推进决策就绪、可验证和资源高效的自动驾驶的潜在世界模型。

</details>

---

## 4. PlayWorld: Learning Robot World Models from Autonomous Play / PlayWorld：从自主游戏中学习机器人世界模型

**Date**: 2026-03-09 | **arXiv**: [2603.09030v1](http://arxiv.org/abs/2603.09030v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09030v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Action-conditioned video models offer a promising path to building general-purpose robot simulators that can improve directly from data. Yet, despite training on large-scale robot datasets, current state-of-the-art video models still struggle to predict physically consistent robot-object interactions that are crucial in robotic manipulation. To close this gap, we present PlayWorld, a simple, scalable, and fully autonomous pipeline for training high-fidelity video world simulators from interaction experience. In contrast to prior approaches that rely on success-biased human demonstrations, PlayWorld is the first system capable of learning entirely from unsupervised robot self-play, enabling naturally scalable data collection while capturing complex, long-tailed physical interactions essential for modeling realistic object dynamics. Experiments across diverse manipulation tasks show that PlayWorld generates high-quality, physically consistent predictions for contact-rich interactions that are not captured by world models trained on human-collected data.We further demonstrate the versatility of PlayWorld in enabling fine-grained failure prediction and policy evaluation, with up to 40% improvements over human-collected data. Finally, we demonstrate how PlayWorld enables reinforcement learning in the world model, improving policy performance by 65% in success rates when deployed in the real world.

动作条件视频模型为构建可以直接从数据中改进的通用机器人模拟器提供了一条有前途的途径。然而，尽管对大规模机器人数据集进行了训练，当前最先进的视频模型仍然难以预测在机器人操作中至关重要的物理一致的机器人与物体的交互。为了弥补这一差距，我们推出了 PlayWorld，这是一个简单、可扩展且完全自主的管道，用于通过交互体验训练高保真视频世界模拟器。与之前依赖于成功的人类演示的方法相比，PlayWorld 是第一个能够完全从无监督的机器人自我游戏中学习的系统，能够自然扩展数据收集，同时捕获对于建模真实对象动力学至关重要的复杂的长尾物理交互。跨不同操作任务的实验表明，PlayWorld 可以针对接触丰富的交互生成高质量、物理一致的预测，而这些预测是通过人类收集的数据训练的世界模型无法捕获的。我们进一步证明了 PlayWorld 在实现细粒度故障预测和策略评估方面的多功能性，与人类收集的数据相比，性能提高了 40%。最后，我们演示了 PlayWorld 如何在世界模型中实现强化学习，在现实世界中部署时将策略性能提高 65% 的成功率。

</details>

---

## 5. MetaWorld-X: Hierarchical World Modeling via VLM-Orchestrated Experts for Humanoid Loco-Manipulation / MetaWorld-X：通过 VLM 协调专家进行人形机器人操作的分层世界建模

**Date**: 2026-03-09 | **arXiv**: [2603.08572v1](http://arxiv.org/abs/2603.08572v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08572v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Learning natural, stable, and compositionally generalizable whole-body control policies for humanoid robots performing simultaneous locomotion and manipulation (loco-manipulation) remains a fundamental challenge in robotics. Existing reinforcement learning approaches typically rely on a single monolithic policy to acquire multiple skills, which often leads to cross-skill gradient interference and motion pattern conflicts in high-degree-of-freedom systems. As a result, generated behaviors frequently exhibit unnatural movements, limited stability, and poor generalization to complex task compositions. To address these limitations, we propose MetaWorld-X, a hierarchical world model framework for humanoid control. Guided by a divide-and-conquer principle, our method decomposes complex control problems into a set of specialized expert policies (Specialized Expert Policies, SEP). Each expert is trained under human motion priors through imitation-constrained reinforcement learning, introducing biomechanically consistent inductive biases that ensure natural and physically plausible motion generation. Building upon this foundation, we further develop an Intelligent Routing Mechanism (IRM) supervised by a Vision-Language Model (VLM), enabling semantic-driven expert composition. The VLM-guided router dynamically integrates expert policies according to high-level task semantics, facilitating compositional generalization and adaptive execution in multi-stage loco-manipulation tasks.

为执行同时运动和操纵（局部操纵）的人形机器人学习自然、稳定且可组合概括的全身控制策略仍然是机器人技术中的基本挑战。现有的强化学习方法通​​常依赖于单一的整体策略来获取多种技能，这通常会导致高自由度系统中的跨技能梯度干扰和运动模式冲突。因此，生成的行为经常表现出不自然的运动、有限的稳定性以及对复杂任务组合的泛化能力差。为了解决这些限制，我们提出了 MetaWorld-X，一种用于人形控制的分层世界模型框架。在分治原则的指导下，我们的方法将复杂的控制问题分解为一组专门的专家策略（Specialized Expert Policies，SEP）。每位专家都通过模仿约束强化学习在人类运动先验条件下接受训练，引入生物力学上一致的归纳偏差，确保自然且物理上合理的运动生成。在此基础上，我们进一步开发了由视觉语言模型（VLM）监督的智能路由机制（IRM），从而实现语义驱动的专家组合。 VLM引导的路由器根据高级任务语义动态集成专家策略，促进多阶段局部操作任务中的组合泛化和自适应执行。

</details>

---

## 6. Interactive World Simulator for Robot Policy Training and Evaluation / 用于机器人政策培训和评估的交互式世界模拟器

**Date**: 2026-03-09 | **arXiv**: [2603.08546v1](http://arxiv.org/abs/2603.08546v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08546v1)

**Categories**: cs.RO, cs.CV, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Action-conditioned video prediction models (often referred to as world models) have shown strong potential for robotics applications, but existing approaches are often slow and struggle to capture physically consistent interactions over long horizons, limiting their usefulness for scalable robot policy training and evaluation. We present Interactive World Simulator, a framework for building interactive world models from a moderate-sized robot interaction dataset. Our approach leverages consistency models for both image decoding and latent-space dynamics prediction, enabling fast and stable simulation of physical interactions. In our experiments, the learned world models produce interaction-consistent pixel-level predictions and support stable long-horizon interactions for more than 10 minutes at 15 FPS on a single RTX 4090 GPU. Our framework enables scalable demonstration collection solely within the world models to train state-of-the-art imitation policies. Through extensive real-world evaluation across diverse tasks involving rigid objects, deformable objects, object piles, and their interactions, we find that policies trained on world-model-generated data perform comparably to those trained on the same amount of real-world data. Additionally, we evaluate policies both within the world models and in the real world across diverse tasks, and observe a strong correlation between simulated and real-world performance. Together, these results establish the Interactive World Simulator as a stable and physically consistent surrogate for scalable robotic data generation and faithful, reproducible policy evaluation.

动作条件视频预测模型（通常称为世界模型）在机器人应用中显示出强大的潜力，但现有方法通常速度缓慢，并且难以捕获长范围内物理一致的交互，从而限制了它们在可扩展机器人策略训练和评估中的有用性。我们提出了交互式世界模拟器，这是一个用于从中等大小的机器人交互数据集构建交互式世界模型的框架。我们的方法利用一致性模型进行图像解码和潜在空间动态预测，从而实现快速稳定的物理交互模拟。在我们的实验中，学习的世界模型可生成交互一致的像素级预测，并在单个 RTX 4090 GPU 上以 15 FPS 的速度支持稳定的长视野交互超过 10 分钟。我们的框架可以仅在世界模型中进行可扩展的演示收集，以训练最先进的模仿策略。通过对涉及刚性物体、可变形物体、物体堆及其相互作用的各种任务进行广泛的现实世界评估，我们发现根据世界模型生成的数据训练的策略与根据相同数量的现实世界数据训练的策略的表现相当。此外，我们还评估了世界模型中和现实世界中不同任务的政策，并观察到模拟和现实世界表现之间的强相关性。总之，这些结果使交互式世界模拟器成为稳定且物理一致的替代品，用于可扩展的机器人数据生成和忠实、可重复的政策评估。

</details>

---

## 7. AtomVLA: Scalable Post-Training for Robotic Manipulation via Predictive Latent World Models / AtomVLA：通过预测潜在世界模型进行机器人操作的可扩展后训练

**Date**: 2026-03-09 | **arXiv**: [2603.08519v1](http://arxiv.org/abs/2603.08519v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08519v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Vision-Language-Action (VLA) models demonstrate remarkable potential for generalizable robotic manipulation. The execution of complex multi-step behaviors in VLA models can be improved by robust instruction grounding, a critical component for effective control. However, current paradigms predominantly rely on coarse, high-level task instructions during supervised fine-tuning. This instruction grounding gap leaves models without explicit intermediate guidance, leading to severe compounding errors in long-horizon tasks. Therefore, bridging this instruction gap and providing scalable post-training for VLA models is urgent. To tackle this problem, we propose \method, the first subtask-aware VLA framework integrated with a scalable offline post-training pipeline. Our framework leverages a large language model to decompose high-level demonstrations into fine-grained atomic subtasks. This approach utilizes a pretrained predictive world model to score candidate action chunks against subtask goals in the latent space, mitigating error accumulation while significantly improving long-horizon robustness. Furthermore, this approach enables highly efficient Group Relative Policy Optimization without the prohibitive expenses associated with online rollouts on physical robots. Extensive simulations validate that our AtomVLA maintains strong robustness under perturbations. When evaluated against fundamental baseline models, it achieves an average success rate of 97.0\% on the LIBERO benchmark and 48.0\% on the LIBERO-PRO benchmark. Finally, experiments conducted in the real world using the Galaxea R1 Lite platform confirm its broad applicability across diverse tasks, especially long-horizon tasks. All datasets, checkpoints, and code will be released to the public domain following the acceptance of this work for future research.

视觉-语言-动作（VLA）模型展示了通用机器人操作的巨大潜力。 VLA 模型中复杂多步行为的执行可以通过强大的指令基础来改进，这是有效控制的关键组成部分。然而，当前的范例在监督微调期间主要依赖于粗略的高级任务指令。这种指令基础差距使模型没有明确的中间指导，导致长期任务中出现严重的复合错误。因此，弥合这一指令差距并为 VLA 模型提供可扩展的后训练迫在眉睫。为了解决这个问题，我们提出了 \method，这是第一个与可扩展的离线后训练管道集成的子任务感知 VLA 框架。我们的框架利用大型语言模型将高级演示分解为细粒度的原子子任务。这种方法利用预训练的预测世界模型根据潜在空间中的子任务目标对候选动作块进行评分，减少错误积累，同时显着提高长期鲁棒性。此外，这种方法可以实现高效的组相对策略优化，而无需与物理机器人在线部署相关的高昂费用。大量的模拟验证了我们的 AtomVLA 在扰动下保持了很强的鲁棒性。当根据基本基线模型进行评估时，它在 LIBERO 基准上的平均成功率为 97.0%，在 LIBERO-PRO 基准上的平均成功率为 48.0%。最后，使用 Galaxea R1 Lite 平台在现实世界中进行的实验证实了其在各种任务（尤其是长视野任务）中的广泛适用性。在接受这项工作以供未来研究后，所有数据集、检查点和代码都将发布到公共领域。

</details>

---

## 8. STRIDE: Structured Lagrangian and Stochastic Residual Dynamics via Flow Matching / STRIDE：通过流量匹配实现结构化拉格朗日和随机残差动力学

**Date**: 2026-03-09 | **arXiv**: [2603.08478v1](http://arxiv.org/abs/2603.08478v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08478v1)

**Categories**: cs.RO, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Robotic systems operating in unstructured environments must operate under significant uncertainty arising from intermittent contacts, frictional variability, and unmodeled compliance. While recent model-free approaches have demonstrated impressive performance, many deployment settings still require predictive models that support planning, constraint handling, and online adaptation. Analytical rigid-body models provide strong physical structure but often fail to capture complex interaction effects, whereas purely data-driven models may violate physical consistency, exhibit data bias, and accumulate long-horizon drift. In this work, we propose STRIDE, a dynamics learning framework that explicitly separates conservative rigid-body mechanics from uncertain, effectively stochastic non-conservative interaction effects. The structured component is modeled using a Lagrangian Neural Network (LNN) to preserve energy-consistent inertial dynamics, while residual interaction forces are represented using Conditional Flow Matching (CFM) to capture multi-modal interaction phenomena. The two components are trained jointly end-to-end, enabling the model to retain physical structure while representing complex stochastic behavior. We evaluate STRIDE on systems of increasing complexity, including a pendulum, the Unitree Go1 quadruped, and the Unitree G1 humanoid. Results show 20% reduction in long-horizon prediction error and 30% reduction in contact force prediction error compared to deterministic residual baselines, supporting more reliable model-based control in uncertain robotic environments.

在非结构化环境中运行的机器人系统必须在由间歇性接触、摩擦变化和未建模的合规性引起的显着不确定性下运行。虽然最近的无模型方法已经表现出令人印象深刻的性能，但许多部署设置仍然需要支持规划、约束处理和在线适应的预测模型。分析刚体模型提供了强大的物理结构，但通常无法捕获复杂的交互效应，而纯粹的数据驱动模型可能会违反物理一致性、表现出数据偏差并累积长范围漂移。在这项工作中，我们提出了 STRIDE，一种动力学学习框架，它明确地将保守的刚体力学与不确定的、有效随机的非保守相互作用效应分开。结构化组件使用拉格朗日神经网络 (LNN) 进行建模，以保持能量一致的惯性动力学，而残余相互作用力则使用条件流匹配 (CFM) 来表示，以捕获多模态相互作用现象。这两个组件进行端到端联合训练，使模型能够保留物理结构，同时表示复杂的随机行为。我们在复杂性不断增加的系统上评估 STRIDE，包括钟摆、Unitree Go1 四足动物和 Unitree G1 人形机器人。结果显示，与确定性残差基线相比，长视野预测误差减少了 20%，接触力预测误差减少了 30%，支持在不确定的机器人环境中进行更可靠的基于模型的控制。

</details>

---

## 9. Integrating Lagrangian Neural Networks into the Dyna Framework for Reinforcement Learning / 将拉格朗日神经网络集成到 Dyna 强化学习框架中

**Date**: 2026-03-09 | **arXiv**: [2603.08468v1](http://arxiv.org/abs/2603.08468v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08468v1)

**Categories**: eess.SY, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Model-based reinforcement learning (MBRL) is sample-efficient but depends on the accuracy of the learned dynamics, which are often modeled using black-box methods that do not adhere to physical laws. Those methods tend to produce inaccurate predictions when presented with data that differ from the original training set. In this work, we employ Lagrangian neural networks (LNNs), which enforce an underlying Lagrangian structure to train the model within a Dyna-based MBRL framework. Furthermore, we train the LNN using stochastic gradient-based and state-estimation-based optimizers to learn the network's weights. The state-estimation-based method converges faster than the stochastic gradient-based method during neural network training. Simulation results are provided to illustrate the effectiveness of the proposed LNN-based Dyna framework for MBRL.

基于模型的强化学习 (MBRL) 具有样本效率，但取决于所学习动态的准确性，而动态学习通常使用不遵守物理定律的黑盒方法进行建模。当提供与原始训练集不同的数据时，这些方法往往会产生不准确的预测。在这项工作中，我们采用拉格朗日神经网络 (LNN)，它强制使用底层拉格朗日结构来在基于 Dyna 的 MBRL 框架内训练模型。此外，我们使用基于随机梯度和基于状态估计的优化器来训练 LNN，以学习网络的权重。在神经网络训练期间，基于状态估计的方法比基于随机梯度的方法收敛得更快。仿真结果说明了所提出的基于 LNN 的 Dyna 框架的 MBRL 的有效性。

</details>

---

## 10. The Boiling Frog Threshold: Criticality and Blindness in World Model-Based Anomaly Detection Under Gradual Drift / 温水煮青蛙阈值：渐进漂移下基于世界模型的异常检测的临界性和盲目性

**Date**: 2026-03-09 | **arXiv**: [2603.08455v1](http://arxiv.org/abs/2603.08455v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08455v1)

**Categories**: cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

When an RL agent's observations are gradually corrupted, at what drift rate does it "wake up" -- and what determines this boundary? We study world model-based self-monitoring under continuous observation drift across four MuJoCo environments, three detector families (z-score, variance, percentile), and three model capacities. We find that (1) a sharp detection threshold $\varepsilon^*$ exists universally: below it, drift is absorbed as normal variation; above it, detection occurs rapidly. The threshold's existence and sigmoid shape are invariant across all detector families and model capacities, though its position depends on the interaction between detector sensitivity, noise floor structure, and environment dynamics. (2) Sinusoidal drift is completely undetectable by all detector families -- including variance and percentile detectors with no temporal smoothing -- establishing this as a world model property rather than a detector artifact. (3) Within each environment, $\varepsilon^*$ follows a power law in detector parameters ($R^2 = 0.89$-$0.97$), but cross-environment prediction fails ($R^2 = 0.45$), revealing that the missing variable is environment-specific dynamics structure $\partial \mathrm{PE}/\partial\varepsilon$. (4) In fragile environments, agents collapse before any detector can fire ("collapse before awareness"), creating a fundamentally unmonitorable failure mode. Our results reframe $\varepsilon^*$ from an emergent world model property to a three-way interaction between noise floor, detector, and environment dynamics, providing a more defensible and empirically grounded account of self-monitoring boundaries in RL agents.

当强化学习智能体的观察逐渐被破坏时，它会以什么漂移率“醒来”——什么决定了这个边界？我们在四个 MuJoCo 环境、三个探测器系列（z 分数、方差、百分位数）和三个模型容量的连续观察漂移下研究基于世界模型的自我监控。我们发现（1）普遍存在一个尖锐的检测阈值$\varepsilon^*$：低于它，漂移被吸收为正常变化；在其上方，检测速度很快。尽管阈值的位置取决于探测器灵敏度、本底噪声结构和环境动力学之间的相互作用，但阈值的存在和 S 形形状在所有探测器系列和模型容量中都是不变的。 (2) 所有检测器系列（包括没有时间平滑的方差和百分位检测器）完全无法检测到正弦漂移——将其确定为世界模型属性而不是检测器伪影。 (3) 在每个环境中，$\varepsilon^*$ 的探测器参数遵循幂律 ($R^2 = 0.89$-$0.97$)，但跨环境预测失败 ($R^2 = 0.45$)，表明缺失的变量是环境特定的动力学结构 $\partial\mathrm{PE}/\partial\varepsilon$。 (4) 在脆弱的环境中，代理在任何探测器启动之前就崩溃了（“在意识到之前崩溃”），从而产生了一种根本上无法监控的故障模式。我们的结果将 $\varepsilon^*$ 从新兴的世界模型属性重新构建为本底噪声、检测器和环境动力学之间的三向交互，为 RL 智能体的自我监控边界提供了更有说服力和基于经验的解释。

</details>

---



</details>

<details><summary><b>2026-03-10 (8 papers)</b></summary>

# arXiv World Model Papers - 2026-03-10

**Paper Count**: 8

---

## 1. Multifingered force-aware control for humanoid robots / 人形机器人的多指力感知控制

**Date**: 2026-03-09 | **arXiv**: [2603.08142v1](http://arxiv.org/abs/2603.08142v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08142v1)

**Categories**: cs.RO

**Code**: https://github.com/hsp-iit/multifingered-force-aware-control.

<details><summary><b>Abstract / 摘要</b></summary>

In this paper, we address force-aware control and force distribution in robotic platforms with multi-fingered hands. Given a target goal and force estimates from tactile sensors, we design a controller that adapts the motion of the torso, arm, wrist, and fingers, redistributing forces to maintain stable contact with objects of varying mass distribution or unstable contacts. To estimate forces, we collect a dataset of tactile signals and ground-truth force measurements using five Xela magnetic sensors interacting with indenters, and train force estimators. We then introduce a model-based control scheme that minimizes the distance between the Center of Pressure (CoP) and the centroid of the fingertips contact polygon. Since our method relies on estimated forces rather than raw tactile signals, it has the potential to be applied to any sensor capable of force estimation. We validate our framework on a balancing task with five objects, achieving a $82.7\%$ success rate, and further evaluate it in multi-object scenarios, achieving $80\%$ accuracy. Code and data can be found here https://github.com/hsp-iit/multifingered-force-aware-control.

在本文中，我们解决了多指手机器人平台中的力感知控制和力分布问题。给定目标目标和触觉传感器的力估计，我们设计了一个控制器，可以适应躯干、手臂、手腕和手指的运动，重新分配力以保持与不同质量分布或不稳定接触的物体的稳定接触。为了估计力，我们使用五个与压头交互的 Xela 磁性传感器收集触觉信号和地面真实力测量数据集，并训练力估计器。然后，我们引入一种基于模型的控制方案，该方案可以最小化压力中心 (CoP) 与指尖接触多边形质心之间的距离。由于我们的方法依赖于估计的力而不是原始的触觉信号，因此它有可能应用于任何能够估计力的传感器。我们在五个对象的平衡任务上验证了我们的框架，实现了 82.7\%$ 的成功率，并在多对象场景中进一步评估它，实现了 $80\%$ 的准确率。代码和数据可以在这里找到：https://github.com/hsp-iit/multifingered-force-aware-control。

</details>

---

## 2. Model-based Offline RL via Robust Value-Aware Model Learning with Implicitly Differentiable Adaptive Weighting / 基于模型的离线强化学习，通过具有隐式可微自适应权重的鲁棒价值感知模型学习

**Date**: 2026-03-09 | **arXiv**: [2603.08118v1](http://arxiv.org/abs/2603.08118v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08118v1)

**Categories**: cs.LG

**Code**: https://github.com/zq2r/ROMI.git.

<details><summary><b>Abstract / 摘要</b></summary>

Model-based offline reinforcement learning (RL) aims to enhance offline RL with a dynamics model that facilitates policy exploration. However, \textit{model exploitation} could occur due to inevitable model errors, degrading algorithm performance. Adversarial model learning offers a theoretical framework to mitigate model exploitation by solving a maximin formulation. Within such a paradigm, RAMBO~\citep{rigter2022rambo} has emerged as a representative and most popular method that provides a practical implementation with model gradient. However, we empirically reveal that severe Q-value underestimation and gradient explosion can occur in RAMBO with only slight hyperparameter tuning, suggesting that it tends to be overly conservative and suffers from unstable model updates. To address these issues, we propose \textbf{RO}bust value-aware \textbf{M}odel learning with \textbf{I}mplicitly differentiable adaptive weighting (ROMI). Instead of updating the dynamics model with model gradient, ROMI introduces a novel robust value-aware model learning approach. This approach requires the dynamics model to predict future states with values close to the minimum Q-value within a scale-adjustable state uncertainty set, enabling controllable conservatism and stable model updates. To further improve out-of-distribution (OOD) generalization during multi-step rollouts, we propose implicitly differentiable adaptive weighting, a bi-level optimization scheme that adaptively achieves dynamics- and value-aware model learning. Empirical results on D4RL and NeoRL datasets show that ROMI significantly outperforms RAMBO and achieves competitive or superior performance compared to other state-of-the-art methods on datasets where RAMBO typically underperforms. Code is available at https://github.com/zq2r/ROMI.git.

基于模型的离线强化学习（RL）旨在通过促进政策探索的动态模型来增强离线强化学习。然而，由于不可避免的模型错误，\textit{模型利用}可能会发生，从而降低算法性能。对抗性模型学习提供了一个理论框架，通过求解最大最小公式来减轻模型利用。在这样的范例中，RAMBO~\citep{rigter2022rambo} 已成为一种具有代表性和最流行的方法，它提供了模型梯度的实际实现。然而，我们的经验表明，RAMBO 仅需要轻微的超参数调整，就会出现严重的 Q 值低估和梯度爆炸，这表明它往往过于保守，并且模型更新不稳定。为了解决这些问题，我们提出使用 \textbf{I} 隐式可微自适应权重（ROMI）进行 \textbf{RO}bust 值感知 \textbf{M} 模型学习。 ROMI 没有使用模型梯度来更新动态模型，而是引入了一种新颖的鲁棒价值感知模型学习方法。这种方法要求动态模型在可调节的状态不确定性集中以接近最小 Q 值的值来预测未来状态，从而实现可控的保守性和稳定的模型更新。为了进一步提高多步推出期间的分布外（OOD）泛化，我们提出了隐式可微自适应加权，这是一种自适应实现动态和价值感知模型学习的双层优化方案。 D4RL 和 NeoRL 数据集上的实证结果表明，ROMI 显着优于 RAMBO，并且与 RAMBO 通常表现不佳的数据集上的其他最先进方法相比，取得了有竞争力或优越的性能。代码可在 https://github.com/zq2r/ROMI.git 获取。

</details>

---

## 3. ConflictBench: Evaluating Human-AI Conflict via Interactive and Visually Grounded Environments / ConflictBench：通过交互式和视觉基础环境评估人类与人工智能的冲突

**Date**: 2026-03-09 | **arXiv**: [2603.08024v1](http://arxiv.org/abs/2603.08024v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08024v1)

**Categories**: cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

As large language models (LLMs) evolve into autonomous agents capable of acting in open-ended environments, ensuring behavioral alignment with human values becomes a critical safety concern. Existing benchmarks, focused on static, single-turn prompts, fail to capture the interactive and multi-modal nature of real-world conflicts. We introduce ConflictBench, a benchmark for evaluating human-AI conflict through 150 multi-turn scenarios derived from prior alignment queries. ConflictBench integrates a text-based simulation engine with a visually grounded world model, enabling agents to perceive, plan, and act under dynamic conditions. Empirical results show that while agents often act safely when human harm is immediate, they frequently prioritize self-preservation or adopt deceptive strategies in delayed or low-risk settings. A regret test further reveals that aligned decisions are often reversed under escalating pressure, especially with visual input. These findings underscore the need for interaction-level, multi-modal evaluation to surface alignment failures that remain hidden in conventional benchmarks.

随着大型语言模型（LLM）发展成为能够在开放环境中行动的自主代理，确保行为与人类价值观一致成为一个关键的安全问题。现有的基准侧重于静态、单轮提示，无法捕捉现实世界冲突的交互性和多模式本质。我们引入了 ConflictBench，这是一个通过先前对齐查询得出的 150 个多回合场景来评估人类与人工智能冲突的基准。 ConflictBench 将基于文本的模拟引擎与基于视觉的世界模型集成在一起，使代理能够在动态条件下感知、计划和行动。实证结果表明，虽然代理人在人类受到直接伤害时通常会采取安全行动，但他们经常会优先考虑自我保护或在延迟或低风险环境中采取欺骗策略。后悔测试进一步表明，在不断升级的压力下，尤其是在视觉输入的情况下，一致的决定常常会被逆转。这些发现强调需要对传统基准中隐藏的表面对准故障进行交互级、多模式评估。

</details>

---

## 4. Long-Short Term Agents for Pure-Vision Bronchoscopy Robotic Autonomy / 纯视觉支气管镜机器人自主的长期和短期代理

**Date**: 2026-03-09 | **arXiv**: [2603.07909v1](http://arxiv.org/abs/2603.07909v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07909v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Accurate intraoperative navigation is essential for robot-assisted endoluminal intervention, but remains difficult because of limited endoscopic field of view and dynamic artifacts. Existing navigation platforms often rely on external localization technologies, such as electromagnetic tracking or shape sensing, which increase hardware complexity and remain vulnerable to intraoperative anatomical mismatch. We present a vision-only autonomy framework that performs long-horizon bronchoscopic navigation using preoperative CT-derived virtual targets and live endoscopic video, without external tracking during navigation. The framework uses hierarchical long-short agents: a short-term reactive agent for continuous low-latency motion control, and a long-term strategic agent for decision support at anatomically ambiguous points. When their recommendations conflict, a world-model critic predicts future visual states for candidate actions and selects the action whose predicted state best matches the target view. We evaluated the system in a high-fidelity airway phantom, three ex vivo porcine lungs, and a live porcine model. The system reached all planned segmental targets in the phantom, maintained 80\% success to the eighth generation ex vivo, and achieved in vivo navigation performance comparable to the expert bronchoscopist. These results support the preclinical feasibility of sensor-free autonomous bronchoscopic navigation.

准确的术中导航对于机器人辅助腔内干预至关重要，但由于内窥镜视野有限和动态伪影，仍然很困难。现有的导航平台通常依赖于外部定位技术，例如电磁跟踪或形状传感，这增加了硬件复杂性，并且仍然容易受到术中解剖不匹配的影响。我们提出了一种仅视觉自主框架，该框架使用术前 CT 衍生的虚拟目标和实时内窥镜视频执行长视野支气管镜导航，在导航过程中无需外部跟踪。该框架使用分层的长短代理：用于连续低延迟运动控制的短期反应代理，以及用于在解剖学模糊点上提供决策支持的长期策略代理。当他们的建议发生冲突时，世界模型评论家会预测候选动作的未来视觉状态，并选择预测状态与目标视图最匹配的动作。我们在高保真气道模型、三个离体猪肺和活体猪模型中评估了该系统。该系统达到了体模中所有计划的分段目标，保持了第八代离体80％的成功率，并实现了与专家支气管镜医师相当的体内导航性能。这些结果支持无传感器自主支气管镜导航的临床前可行性。

</details>

---

## 5. MWM: Mobile World Models for Action-Conditioned Consistent Prediction / MWM：用于动作条件一致预测的移动世界模型

**Date**: 2026-03-08 | **arXiv**: [2603.07799v1](http://arxiv.org/abs/2603.07799v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07799v1)

**Categories**: cs.CV, cs.RO

**Code**: https://github.com/AIGeeksGroup/MWM.

<details><summary><b>Abstract / 摘要</b></summary>

World models enable planning in imagined future predicted space, offering a promising framework for embodied navigation. However, existing navigation world models often lack action-conditioned consistency, so visually plausible predictions can still drift under multi-step rollout and degrade planning. Moreover, efficient deployment requires few-step diffusion inference, but existing distillation methods do not explicitly preserve rollout consistency, creating a training-inference mismatch. To address these challenges, we propose MWM, a mobile world model for planning-based image-goal navigation. Specifically, we introduce a two-stage training framework that combines structure pretraining with Action-Conditioned Consistency (ACC) post-training to improve action-conditioned rollout consistency. We further introduce Inference-Consistent State Distillation (ICSD) for few-step diffusion distillation with improved rollout consistency. Our experiments on benchmark and real-world tasks demonstrate consistent gains in visual fidelity, trajectory accuracy, planning success, and inference efficiency. Code: https://github.com/AIGeeksGroup/MWM. Website: https://aigeeksgroup.github.io/MWM.

世界模型可以在想象的未来预测空间中进行规划，为实体导航提供一个有前景的框架。然而，现有的导航世界模型通常缺乏动作条件的一致性，因此视觉上合理的预测仍然可能在多步骤部署下发生漂移并降低规划质量。此外，有效的部署需要几步扩散推理，但现有的蒸馏方法没有明确地保持部署一致性，从而导致训练与推理不匹配。为了应对这些挑战，我们提出了 MWM，一种用于基于规划的图像目标导航的移动世界模型。具体来说，我们引入了一个两阶段训练框架，将结构预训练与动作条件一致性（ACC）训练后相结合，以提高动作条件推出一致性。我们进一步引入推理一致状态蒸馏（ICSD），用于少步扩散蒸馏，并提高推出一致性。我们对基准和现实世界任务的实验证明了视觉保真度、轨迹准确性、规划成功和推理效率方面的持续收益。代码：https://github.com/AIGeeksGroup/MWM。网站：https://aigeeksgroup.github.io/MWM。

</details>

---

## 6. DreamSAC: Learning Hamiltonian World Models via Symmetry Exploration / DreamSAC：通过对称性探索学习哈密顿世界模型

**Date**: 2026-03-08 | **arXiv**: [2603.07545v1](http://arxiv.org/abs/2603.07545v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07545v1)

**Categories**: cs.CV, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Learned world models excel at interpolative generalization but fail at extrapolative generalization to novel physical properties. This limitation arises because they learn statistical correlations rather than the environment's underlying generative rules, such as physical invariances and conservation laws. We argue that learning these invariances is key to robust extrapolation. To achieve this, we first introduce \textbf{Symmetry Exploration}, an unsupervised exploration strategy where an agent is intrinsically motivated by a Hamiltonian-based curiosity bonus to actively probe and challenge its understanding of conservation laws, thereby collecting physically informative data. Second, we design a Hamiltonian-based world model that learns from the collected data, using a novel self-supervised contrastive objective to identify the invariant physical state from raw, view-dependent pixel observations. Our framework, \textbf{DreamSAC}, trained on this actively curated data, significantly outperforms state-of-the-art baselines in 3D physics simulations on tasks requiring extrapolation.

学习世界模型擅长插值概括，但无法对新的物理属性进行外推概括。出现这种限制是因为它们学习的是统计相关性，而不是环境的潜在生成规则，例如物理不变性和守恒定律。我们认为学习这些不变性是稳健外推的关键。为了实现这一目标，我们首先引入 \textbf{Symmetry Exploration}，这是一种无监督的探索策略，其中代理本质上受到基于哈密顿量的好奇心奖励的激励，主动探索和挑战其对守恒定律的理解，从而收集物理信息数据。其次，我们设计了一个基于哈密顿量的世界模型，该模型从收集的数据中学习，使用新颖的自监督对比目标从原始的、依赖于视图的像素观察中识别不变的物理状态。我们的框架 \textbf{DreamSAC} 在这些主动整理的数据上进行了训练，在需要外推的任务上显着优于 3D 物理模拟中最先进的基线。

</details>

---

## 7. Underwater Embodied Intelligence for Autonomous Robots: A Constraint-Coupled Perspective on Planning, Control, and Deployment / 自主机器人的水下具身智能：规划、控制和部署的约束耦合视角

**Date**: 2026-03-08 | **arXiv**: [2603.07393v1](http://arxiv.org/abs/2603.07393v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07393v1)

**Categories**: cs.RO, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

Autonomous underwater robots are increasingly deployed for environmental monitoring, infrastructure inspection, subsea resource exploration, and long-horizon exploration. Yet, despite rapid advances in learning-based planning and control, reliable autonomy in real ocean environments remains fundamentally constrained by tightly coupled physical limits. Hydrodynamic uncertainty, partial observability, bandwidth-limited communication, and energy scarcity are not independent challenges; they interact within the closed perception-planning-control loop and often amplify one another over time. This Review develops a constraint-coupled perspective on underwater embodied intelligence, arguing that planning and control must be understood within tightly coupled sensing, communication, coordination, and resource constraints in real ocean environments. We synthesize recent progress in reinforcement learning, belief-aware planning, hybrid control, multi-robot coordination, and foundation-model integration through this embodied perspective. Across representative application domains, we show how environmental monitoring, inspection, exploration, and cooperative missions expose distinct stress profiles of cross-layer coupling. To unify these observations, we introduce a cross-layer failure taxonomy spanning epistemic, dynamic, and coordination breakdowns, and analyze how errors cascade across autonomy layers under uncertainty. Building on this structure, we outline research directions toward physics-grounded world models, certifiable learning-enabled control, communication-aware coordination, and deployment-aware system design. By internalizing constraint coupling rather than treating it as an external disturbance, underwater embodied intelligence may evolve from performance-driven adaptation toward resilient, scalable, and verifiable autonomy under real ocean conditions.

自主水下机器人越来越多地应用于环境监测、基础设施检查、海底资源勘探和长视距勘探。然而，尽管基于学习的规划和控制取得了快速进展，但真实海洋环境中的可靠自主仍然从根本上受到紧密耦合的物理限制的限制。流体动力学的不确定性、部分可观测性、带宽有限的通信和能源稀缺并不是独立的挑战；它们在封闭的感知-规划-控制循环中相互作用，并且常常随着时间的推移而相互放大。本综述对水下体现智能提出了约束耦合的观点，认为必须在真实海洋环境中紧密耦合的传感、通信、协调和资源约束范围内理解规划和控制。我们通过这一具体视角综合了强化学习、信念感知规划、混合控制、多机器人协调和基础模型集成方面的最新进展。在代表性的应用领域中，我们展示了环境监测、检查、探索和合作任务如何揭示跨层耦合的不同应力分布。为了统一这些观察结果，我们引入了涵盖认知故障、动态故障和协调故障的跨层故障分类法，并分析了在不确定性下错误如何跨自治层级联。在此结构的基础上，我们概述了基于物理的世界模型、可认证的学习控制、通信感知协调和部署感知系统设计的研究方向。通过内化约束耦合而不是将其视为外部干扰，水下体现智能可以从性能驱动的适应演变为真实海洋条件下的弹性、可扩展和可验证的自主性。

</details>

---

## 8. Kinematics-Aware Latent World Models for Data-Efficient Autonomous Driving / 用于数据高效自动驾驶的运动学感知潜在世界模型

**Date**: 2026-03-07 | **arXiv**: [2603.07264v1](http://arxiv.org/abs/2603.07264v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07264v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Data-efficient learning remains a central challenge in autonomous driving due to the high cost and safety risks of large-scale real-world interaction. Although world-model-based reinforcement learning enables policy optimization through latent imagination, existing approaches often lack explicit mechanisms to encode spatial and kinematic structure essential for driving tasks. In this work, we build upon the Recurrent State-Space Model (RSSM) and propose a kinematics-aware latent world model framework for autonomous driving. Vehicle kinematic information is incorporated into the observation encoder to ground latent transitions in physically meaningful motion dynamics, while geometry-aware supervision regularizes the RSSM latent state to capture task-relevant spatial structure beyond pixel reconstruction. The resulting structured latent dynamics improve long-horizon imagination fidelity and stabilize policy optimization. Experiments in a driving simulation benchmark demonstrate consistent gains over both model-free and pixel-based world-model baselines in terms of sample efficiency and driving performance. Ablation studies further verify that the proposed design enhances spatial representation quality within the latent space. These results suggest that integrating kinematic grounding into RSSM-based world models provides a scalable and physically grounded paradigm for autonomous driving policy learning.

由于大规模现实世界交互的高成本和安全风险，数据高效学习仍然是自动驾驶的核心挑战。尽管基于世界模型的强化学习可以通过潜在想象力实现策略优化，但现有方法通常缺乏明确的机制来编码驾驶任务所必需的空间和运动结构。在这项工作中，我们以循环状态空间模型（RSSM）为基础，提出了一种用于自动驾驶的运动学感知潜在世界模型框架。车辆运动学信息被纳入观察编码器中，以在物理上有意义的运动动力学中实现潜在转变，而几何感知监督则规范 RSSM 潜在状态，以捕获超越像素重建的任务相关空间结构。由此产生的结构化潜在动态提高了长期想象力的保真度并稳定了政策优化。驾驶模拟基准测试中的实验表明，在样本效率和驾驶性能方面，与无模型和基于像素的世界模型基准相比，具有一致的增益。消融研究进一步验证了所提出的设计增强了潜在空间内的空间表示质量。这些结果表明，将运动学接地集成到基于 RSSM 的世界模型中，为自动驾驶政策学习提供了可扩展且物理接地的范例。

</details>

---



</details>

<details><summary><b>2026-03-09 (1 papers)</b></summary>

# arXiv World Model Papers - 2026-03-09

**Paper Count**: 1

---

## 1. Uncertainty-Aware Adaptive Dynamics For Underwater Vehicle-Manipulator Robots / 水下车辆机械手机器人的不确定性感知自适应动力学

**Date**: 2026-03-06 | **arXiv**: [2603.06548v1](http://arxiv.org/abs/2603.06548v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.06548v1)

**Categories**: cs.RO, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

Accurate and adaptive dynamic models are critical for underwater vehicle-manipulator systems where hydrodynamic effects induce time-varying parameters. This paper introduces a novel uncertainty-aware adaptive dynamics model framework that remains linear in lumped vehicle and manipulator parameters, and embeds convex physical consistency constraints during online estimation. Moving horizon estimation is used to stack horizon regressors, enforce realizable inertia, damping, friction, and hydrostatics, and quantify uncertainty from parameter evolution. Experiments on a BlueROV2 Heavy with a 4-DOF manipulator demonstrate rapid convergence and calibrated predictions. Manipulator fits achieve R2 = 0.88 to 0.98 with slopes near unity, while vehicle surge, heave, and roll are reproduced with good fidelity under stronger coupling and noise. Median solver time is approximately 0.023 s per update, confirming online feasibility. A comparison against a fixed parameter model shows consistent reductions in MAE and RMSE across degrees of freedom. Results indicate physically plausible parameters and confidence intervals with near 100% coverage, enabling reliable feedforward control and simulation in underwater environments.

准确和自适应的动态模型对于水下航行器操纵器系统至关重要，其中水动力效应会引起时变参数。本文介绍了一种新颖的不确定性感知自适应动力学模型框架，该框架在集总车辆和机械臂参数中保持线性，并在在线估计期间嵌入凸物理一致性约束。移动地平线估计用于堆叠地平线回归量，强制实现可实现的惯性、阻尼、摩擦力和流体静力学，并量化参数演化的不确定性。在带有 4-DOF 机械臂的 BlueROV2 Heavy 上进行的实验证明了快速收敛和校准预测。机械手拟合实现 R2 = 0.88 至 0.98，斜率接近一致，而车辆波动、升沉和侧倾在更强的耦合和噪声下以良好的保真度再现。每次更新求解器时间中值约为 0.023 秒，证实了在线可行性。与固定参数模型的比较表明，MAE 和 RMSE 在各个自由度上均一致降低。结果表明物理上合理的参数和置信区间具有接近 100% 的覆盖率，可在水下环境中实现可靠的前馈控制和模拟。

</details>

---



</details>

<details><summary><b>2026-03-07 (8 papers)</b></summary>

# arXiv World Model Papers - 2026-03-07

**Paper Count**: 8

---

## 1. Planning in 8 Tokens: A Compact Discrete Tokenizer for Latent World Model / 8 个令牌的规划：用于潜在世界模型的紧凑型离散令牌生成器

**Date**: 2026-03-05 | **arXiv**: [2603.05438v1](http://arxiv.org/abs/2603.05438v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.05438v1)

**Categories**: cs.CV, cs.AI, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

World models provide a powerful framework for simulating environment dynamics conditioned on actions or instructions, enabling downstream tasks such as action planning or policy learning. Recent approaches leverage world models as learned simulators, but its application to decision-time planning remains computationally prohibitive for real-time control. A key bottleneck lies in latent representations: conventional tokenizers encode each observation into hundreds of tokens, making planning both slow and resource-intensive. To address this, we propose CompACT, a discrete tokenizer that compresses each observation into as few as 8 tokens, drastically reducing computational cost while preserving essential information for planning. An action-conditioned world model that occupies CompACT tokenizer achieves competitive planning performance with orders-of-magnitude faster planning, offering a practical step toward real-world deployment of world models.

世界模型提供了一个强大的框架，用于模拟以行动或指令为条件的环境动态，从而实现行动规划或政策学习等下游任务。最近的方法利用世界模型作为学习模拟器，但其在决策时规划中的应用在计算上仍然无法实现实时控制。一个关键瓶颈在于潜在表示：传统的标记器将每个观察结果编码为数百个标记，使得规划既缓慢又占用资源。为了解决这个问题，我们提出了 CompACT，这是一种离散标记器，可将每个观察值压缩为少至 8 个标记，从而大大降低计算成本，同时保留规划所需的基本信息。占用 CompACT 标记器的动作条件世界模型通过速度快几个数量级的规划实现了具有竞争力的规划性能，为世界模型的实际部署迈出了实际的一步。

</details>

---

## 2. BLINK: Behavioral Latent Modeling of NK Cell Cytotoxicity / BLINK：NK 细胞细胞毒性的行为潜在模型

**Date**: 2026-03-05 | **arXiv**: [2603.05110v1](http://arxiv.org/abs/2603.05110v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.05110v1)

**Categories**: cs.CV, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Machine learning models of cellular interaction dynamics hold promise for understanding cell behavior. Natural killer (NK) cell cytotoxicity is a prominent example of such interaction dynamics and is commonly studied using time-resolved multi-channel fluorescence microscopy. Although tumor cell death events can be annotated at single frames, NK cytotoxic outcome emerges over time from cellular interactions and cannot be reliably inferred from frame-wise classification alone. We introduce BLINK, a trajectory-based recurrent state-space model that serves as a cell world model for NK-tumor interactions. BLINK learns latent interaction dynamics from partially observed NK-tumor interaction sequences and predicts apoptosis increments that accumulate into cytotoxic outcomes. Experiments on long-term time-lapse NK-tumor recordings show improved cytotoxic outcome detection and enable forecasting of future outcomes, together with an interpretable latent representation that organizes NK trajectories into coherent behavioral modes and temporally structured interaction phases. BLINK provides a unified framework for quantitative evaluation and structured modeling of NK cytotoxic behavior at the single-cell level.

细胞相互作用动力学的机器学习模型有望理解细胞行为。自然杀伤 (NK) 细胞的细胞毒性是这种相互作用动力学的一个突出例子，通常使用时间分辨多通道荧光显微镜进行研究。尽管肿瘤细胞死亡事件可以在单帧上注释，但 NK 细胞毒性结果会随着时间的推移从细胞相互作用中出现，并且不能仅从逐帧分类中可靠地推断出来。我们引入了 BLINK，这是一种基于轨迹的循环状态空间模型，可用作 NK 与肿瘤相互作用的细胞世界模型。 BLINK 从部分观察到的 NK 与肿瘤相互作用序列中学习潜在的相互作用动态，并预测累积成细胞毒性结果的细胞凋亡增量。长期延时 NK 肿瘤记录的实验表明，细胞毒性结果检测得到改善，并能够预测未来结果，以及可解释的潜在表示，将 NK 轨迹组织成连贯的行为模式和时间结构化的相互作用阶段。 BLINK 为单细胞水平的 NK 细胞毒性行为的定量评估和结构化建模提供了统一的框架。

</details>

---

## 3. Enhancing Zero-shot Commonsense Reasoning by Integrating Visual Knowledge via Machine Imagination / 通过机器想象力整合视觉知识来增强零样本常识推理

**Date**: 2026-03-05 | **arXiv**: [2603.05040v1](http://arxiv.org/abs/2603.05040v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.05040v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Recent advancements in zero-shot commonsense reasoning have empowered Pre-trained Language Models (PLMs) to acquire extensive commonsense knowledge without requiring task-specific fine-tuning. Despite this progress, these models frequently suffer from limitations caused by human reporting biases inherent in textual knowledge, leading to understanding discrepancies between machines and humans. To bridge this gap, we introduce an additional modality to enrich the reasoning capabilities of PLMs. We propose Imagine (Machine Imagination-based Reasoning), a novel zero-shot commonsense reasoning framework that supplements textual inputs with visual signals from machine-generated images. Specifically, we enhance PLMs with the ability to imagine by embedding an image generator directly into the reasoning pipeline. To facilitate effective utilization of this imagined visual context, we construct synthetic datasets designed to emulate visual question-answering scenarios. Through comprehensive evaluations on multiple commonsense reasoning benchmarks, we demonstrate that Imagine substantially outperforms existing zero-shot approaches and even surpasses advanced large language models. These results underscore the capability of machine imagination to mitigate reporting bias and significantly enhance the generalization ability of commonsense reasoning models

零样本常识推理的最新进展使预训练语言模型 (PLM) 能够获取广泛的常识知识，而无需针对特定任务进行微调。尽管取得了这些进展，但这些模型经常受到文本知识中固有的人类报告偏见所造成的限制，导致机器和人类之间的理解差异。为了弥补这一差距，我们引入了一种额外的模式来丰富 PLM 的推理能力。我们提出 Imagine（基于机器想象力的推理），这是一种新颖的零样本常识推理框架，它用来自机器生成图像的视觉信号补充文本输入。具体来说，我们通过将图像生成器直接嵌入到推理管道中来增强 PLM 的想象能力。为了促进有效利用这种想象的视觉上下文，我们构建了旨在模拟视觉问答场景的合成数据集。通过对多个常识推理基准的综合评估，我们证明 Imagine 大大优于现有的零样本方法，甚至超越了先进的大型语言模型。这些结果强调了机器想象力减轻报告偏差并显着增强常识推理模型的泛化能力的能力

</details>

---

## 4. Data-Driven Control of a Magnetically Actuated Fish-Like Robot / 磁驱动鱼状机器人的数据驱动控制

**Date**: 2026-03-05 | **arXiv**: [2603.04787v1](http://arxiv.org/abs/2603.04787v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04787v1)

**Categories**: cs.RO, eess.SY

<details><summary><b>Abstract / 摘要</b></summary>

Magnetically actuated fish-like robots offer promising solutions for underwater exploration due to their miniaturization and agility; however, precise control remains a significant challenge because of nonlinear fluid dynamics, flexible fin hysteresis, and the variable-duration control steps inherent to the actuation mechanism. This paper proposes a comprehensive data-driven control framework to address these complexities without relying on analytical modeling. Our methodology comprises three core components: 1) developing a forward dynamics model (FDM) using a neural network trained on real-world experimental data to capture state transitions under varying time steps; 2) integrating this FDM into a gradient-based model predictive control (G-MPC) architecture to optimize control inputs for path following; and 3) applying imitation learning to approximate the G-MPC policy, thereby reducing the computational cost for real-time implementation. We validate the approach through simulations utilizing the identified dynamics model. The results demonstrate that the G-MPC framework achieves accurate path convergence with minimal root mean square error (RMSE), and the imitation learning controller (ILC) effectively replicates this performance. This study highlights the potential of data-driven control strategies for the precise navigation of miniature, fish-like soft robots.

磁驱动类鱼机器人由于其小型化和敏捷性，为水下探索提供了有前景的解决方案；然而，由于非线性流体动力学、灵活的翅片迟滞以及致动机构固有的可变持续时间控制步骤，精确控制仍然是一个重大挑战。本文提出了一个全面的数据驱动控制框架来解决这些复杂性，而不依赖于分析模型。我们的方法包括三个核心组成部分：1）使用经过真实实验数据训练的神经网络开发正向动力学模型（FDM），以捕获不同时间步长下的状态转换； 2) 将此 FDM 集成到基于梯度的模型预测控制 (G-MPC) 架构中，以优化路径跟踪的控制输入； 3）应用模仿学习来逼近G-MPC策略，从而降低实时实现的计算成本。我们通过利用已确定的动力学模型进行模拟来验证该方法。结果表明，G-MPC 框架以最小均方根误差 (RMSE) 实现了精确的路径收敛，并且模仿学习控制器 (ILC) 有效地复制了这种性能。这项研究强调了数据驱动控制策略在微型鱼状软机器人精确导航方面的潜力。

</details>

---

## 5. Probabilistic Dreaming for World Models / 世界模型的概率梦想

**Date**: 2026-03-05 | **arXiv**: [2603.04715v1](http://arxiv.org/abs/2603.04715v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04715v1)

**Categories**: cs.LG, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

"Dreaming" enables agents to learn from imagined experiences, enabling more robust and sample-efficient learning of world models. In this work, we consider innovations to the state-of-the-art Dreamer model using probabilistic methods that enable: (1) the parallel exploration of many latent states; and (2) maintaining distinct hypotheses for mutually exclusive futures while retaining the desirable gradient properties of continuous latents. Evaluating on the MPE SimpleTag domain, our method outperforms standard Dreamer with a 4.5% score improvement and 28% lower variance in episode returns. We also discuss limitations and directions for future work, including how optimal hyperparameters (e.g. particle count K) scale with environmental complexity, and methods to capture epistemic uncertainty in world models.

“梦想”使代理能够从想象的经验中学习，从而实现对世界模型的更稳健和样本效率的学习。在这项工作中，我们考虑使用概率方法对最先进的 Dreamer 模型进行创新，这些方法能够：（1）并行探索许多潜在状态； (2) 为互斥的未来维持不同的假设，同时保留连续潜伏的理想梯度特性。在 MPE SimpleTag 域上进行评估，我们的方法优于标准 Dreamer，得分提高了 4.5%，且剧集回报方差降低了 28%。我们还讨论了未来工作的局限性和方向，包括最佳超参数（例如粒子计数 K）如何随环境复杂性变化，以及捕获世界模型中认知不确定性的方法。

</details>

---

## 6. Latent Particle World Models: Self-supervised Object-centric Stochastic Dynamics Modeling / 潜在粒子世界模型：以对象为中心的自监督随机动力学建模

**Date**: 2026-03-04 | **arXiv**: [2603.04553v1](http://arxiv.org/abs/2603.04553v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04553v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

We introduce Latent Particle World Model (LPWM), a self-supervised object-centric world model scaled to real-world multi-object datasets and applicable in decision-making. LPWM autonomously discovers keypoints, bounding boxes, and object masks directly from video data, enabling it to learn rich scene decompositions without supervision. Our architecture is trained end-to-end purely from videos and supports flexible conditioning on actions, language, and image goals. LPWM models stochastic particle dynamics via a novel latent action module and achieves state-of-the-art results on diverse real-world and synthetic datasets. Beyond stochastic video modeling, LPWM is readily applicable to decision-making, including goal-conditioned imitation learning, as we demonstrate in the paper. Code, data, pre-trained models and video rollouts are available: https://taldatech.github.io/lpwm-web

我们引入了潜在粒子世界模型（LPWM），这是一种自我监督的以对象为中心的世界模型，可扩展到现实世界的多对象数据集并适用于决策。 LPWM 直接从视频数据中自主发现关键点、边界框和对象掩模，使其能够在无需监督的情况下学习丰富的场景分解。我们的架构纯粹通过视频进行端到端训练，并支持对动作、语言和图像目标的灵活调节。 LPWM 通过新颖的潜在动作模块对随机粒子动力学进行建模，并在各种现实世界和合成数据集上取得了最先进的结果。正如我们在论文中所演示的，除了随机视频建模之外，LPWM 还很容易应用于决策，包括目标条件模仿学习。代码、数据、预训练模型和视频可供使用：https://taldatech.github.io/lpwm-web

</details>

---

## 7. World Properties without World Models: Recovering Spatial and Temporal Structure from Co-occurrence Statistics in Static Word Embeddings / 没有世界模型的世界属性：从静态词嵌入中的共现统计中恢复时空结构

**Date**: 2026-03-04 | **arXiv**: [2603.04317v1](http://arxiv.org/abs/2603.04317v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04317v1)

**Categories**: cs.CL, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Recent work interprets the linear recoverability of geographic and temporal variables from large language model (LLM) hidden states as evidence for world-like internal representations. We test a simpler possibility: that much of the relevant structure is already latent in text itself. Applying the same class of ridge regression probes to static co-occurrence-based embeddings (GloVe and Word2Vec), we find substantial recoverable geographic signal and weaker but reliable temporal signal, with held-out R^2 values of 0.71-0.87 for city coordinates and 0.48-0.52 for historical birth years. Semantic-neighbor analyses and targeted subspace ablations show that these signals depend strongly on interpretable lexical gradients, especially country names and climate-related vocabulary. These findings suggest that ordinary word co-occurrence preserves richer spatial, temporal, and environmental structure than is often assumed, revealing a remarkable and underappreciated capacity of simple static embeddings to preserve world-shaped structure from text alone. Linear probe recoverability alone therefore does not establish a representational move beyond text.

最近的工作将大语言模型（LLM）隐藏状态中地理和时间变量的线性可恢复性解释为类似世界的内部表示的证据。我们测试了一种更简单的可能性：大部分相关结构已经隐藏在文本本身中。将同一类岭回归探针应用于基于静态共现的嵌入（GloVe 和 Word2Vec），我们发现大量可恢复的地理信号和较弱但可靠的时间信号，城市坐标的 R^2 值为 0.71-0.87，历史出生年份的 R^2 值为 0.48-0.52。语义邻居分析和有针对性的子空间消融表明，这些信号强烈依赖于可解释的词汇梯度，尤其是国名和气候相关词汇。这些发现表明，普通的单词共现保留了比通常假设的更丰富的空间、时间和环境结构，揭示了简单静态嵌入仅从文本中保留世界形状结构的显着且未被充分认识的能力。因此，仅线性探针的可恢复性并不能建立超越文本的代表性移动。

</details>

---

## 8. IPD: Boosting Sequential Policy with Imaginary Planning Distillation in Offline Reinforcement Learning / IPD：通过离线强化学习中的想象规划蒸馏来促进顺序策略

**Date**: 2026-03-04 | **arXiv**: [2603.04289v1](http://arxiv.org/abs/2603.04289v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04289v1)

**Categories**: cs.LG, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Decision transformer based sequential policies have emerged as a powerful paradigm in offline reinforcement learning (RL), yet their efficacy remains constrained by the quality of static datasets and inherent architectural limitations. Specifically, these models often struggle to effectively integrate suboptimal experiences and fail to explicitly plan for an optimal policy. To bridge this gap, we propose \textbf{Imaginary Planning Distillation (IPD)}, a novel framework that seamlessly incorporates offline planning into data generation, supervised training, and online inference. Our framework first learns a world model equipped with uncertainty measures and a quasi-optimal value function from the offline data. These components are utilized to identify suboptimal trajectories and augment them with reliable, imagined optimal rollouts generated via Model Predictive Control (MPC). A Transformer-based sequential policy is then trained on this enriched dataset, complemented by a value-guided objective that promotes the distillation of the optimal policy. By replacing the conventional, manually-tuned return-to-go with the learned quasi-optimal value function, IPD improves both decision-making stability and performance during inference. Empirical evaluations on the D4RL benchmark demonstrate that IPD significantly outperforms several state-of-the-art value-based and transformer-based offline RL methods across diverse tasks.

基于决策转换器的顺序策略已成为离线强化学习 (RL) 中的强大范例，但其功效仍然受到静态数据集质量和固有架构限制的限制。具体来说，这些模型通常难以有效地整合次优经验，并且无法明确规划最优策略。为了弥补这一差距，我们提出了 \textbf{想象规划蒸馏（IPD）}，这是一种新颖的框架，可以将离线规划无缝地融入数据生成、监督训练和在线推理中。我们的框架首先从离线数据中学习一个配备了不确定性度量和准最优价值函数的世界模型。这些组件用于识别次优轨迹，并通过模型预测控制 (MPC) 生成可靠的、想象的最佳推出来增强它们。然后，在这个丰富的数据集上训练基于 Transformer 的顺序策略，并辅以促进最优策略精炼的价值引导目标。通过用学习的准最优值函数取代传统的手动调整的返回，IPD 提高了推理过程中决策的稳定性和性能。对 D4RL 基准的实证评估表明，IPD 在不同的任务中显着优于几种最先进的基于价值和基于 Transformer 的离线 RL 方法。

</details>

---



</details>

<details><summary><b>2026-03-05 (5 papers)</b></summary>

# arXiv World Model Papers - 2026-03-05

**Paper Count**: 5

---

## 1. Self-adapting Robotic Agents through Online Continual Reinforcement Learning with World Model Feedback / 通过世界模型反馈的在线持续强化学习自适应机器人代理

**Date**: 2026-03-04 | **arXiv**: [2603.04029v1](http://arxiv.org/abs/2603.04029v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04029v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

As learning-based robotic controllers are typically trained offline and deployed with fixed parameters, their ability to cope with unforeseen changes during operation is limited. Biologically inspired, this work presents a framework for online Continual Reinforcement Learning that enables automated adaptation during deployment. Building on DreamerV3, a model-based Reinforcement Learning algorithm, the proposed method leverages world model prediction residuals to detect out-of-distribution events and automatically trigger finetuning. Adaptation progress is monitored using both task-level performance signals and internal training metrics, allowing convergence to be assessed without external supervision and domain knowledge. The approach is validated on a variety of contemporary continuous control problems, including a quadruped robot in high-fidelity simulation, and a real-world model vehicle. Relevant metrics and their interpretation are presented and discussed, as well as resulting trade-offs described. The results sketch out how autonomous robotic agents could once move beyond static training regimes toward adaptive systems capable of self-reflection and -improvement during operation, just like their biological counterparts.

由于基于学习的机器人控制器通常是离线训练并使用固定参数进行部署的，因此它们应对操作过程中不可预见的变化的能力受到限制。受生物学启发，这项工作提出了一个在线持续强化学习框架，可以在部署过程中实现自动适应。该方法以基于模型的强化学习算法 DreamerV3 为基础，利用世界模型预测残差来检测分布外事件并自动触发微调。使用任务级绩效信号和内部培训指标来监控适应进度，从而无需外部监督和领域知识即可评估收敛性。该方法在各种当代连续控制问题上得到了验证，包括高保真模拟中的四足机器人和真实世界的模型车辆。介绍和讨论了相关指标及其解释，并描述了由此产生的权衡。结果概述了自主机器人代理如何超越静态训练制度，转向能够在操作过程中自我反思和改进的自适应系统，就像它们的生物对应物一样。

</details>

---

## 2. Specification-Driven Generation and Evaluation of Discrete-Event World Models via the DEVS Formalism / 通过 DEVS 形式规范驱动的离散事件世界模型的生成和评估

**Date**: 2026-03-04 | **arXiv**: [2603.03784v1](http://arxiv.org/abs/2603.03784v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.03784v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

World models are essential for planning and evaluation in agentic systems, yet existing approaches lie at two extremes: hand-engineered simulators that offer consistency and reproducibility but are costly to adapt, and implicit neural models that are flexible but difficult to constrain, verify, and debug over long horizons. We seek a principled middle ground that combines the reliability of explicit simulators with the flexibility of learned models, allowing world models to be adapted during online execution. By targeting a broad class of environments whose dynamics are governed by the ordering, timing, and causality of discrete events, such as queueing and service operations, embodied task planning, and message-mediated multi-agent coordination, we advocate explicit, executable discrete-event world models synthesized directly from natural-language specifications. Our approach adopts the DEVS formalism and introduces a staged LLM-based generation pipeline that separates structural inference of component interactions from component-level event and timing logic. To evaluate generated models without a unique ground truth, simulators emit structured event traces that are validated against specification-derived temporal and semantic constraints, enabling reproducible verification and localized diagnostics. Together, these contributions produce world models that are consistent over long-horizon rollouts, verifiable from observable behavior, and efficient to synthesize on demand during online execution.

世界模型对于代理系统的规划和评估至关重要，但现有的方法处于两个极端：手工设计的模拟器提供一致性和可重复性，但适应成本高昂；隐式神经模型虽然灵活，但难以长期约束、验证和调试。我们寻求一个有原则的中间立场，将显式模拟器的可靠性与学习模型的灵活性结合起来，允许在在线执行过程中调整世界模型。通过针对一系列其动态由离散事件的顺序、时间和因果关系控制的环境，例如排队和服务操作、具体任务规划和消息介导的多代理协调，我们提倡直接从自然语言规范合成的明确的、可执行的离散事件世界模型。我们的方法采用 DEVS 形式并引入了基于 LLM 的分阶段生成管道，该管道将组件交互的结构推理与组件级事件和时序逻辑分开。为了在没有唯一基本事实的情况下评估生成的模型，模拟器会发出结构化事件跟踪，这些跟踪根据规范派生的时间和语义约束进行验证，从而实现可重复的验证和本地化诊断。这些贡献共同产生了世界模型，这些模型在长期部署中是一致的，可以通过可观察的行为进行验证，并且可以在在线执行期间有效地按需合成。

</details>

---

## 3. Phys4D: Fine-Grained Physics-Consistent 4D Modeling from Video Diffusion / Phys4D：基于视频扩散的细粒度物理一致 4D 建模

**Date**: 2026-03-03 | **arXiv**: [2603.03485v1](http://arxiv.org/abs/2603.03485v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.03485v1)

**Categories**: cs.CV, cs.AI, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Recent video diffusion models have achieved impressive capabilities as large-scale generative world models. However, these models often struggle with fine-grained physical consistency, exhibiting physically implausible dynamics over time. In this work, we present \textbf{Phys4D}, a pipeline for learning physics-consistent 4D world representations from video diffusion models. Phys4D adopts \textbf{a three-stage training paradigm} that progressively lifts appearance-driven video diffusion models into physics-consistent 4D world representations. We first bootstrap robust geometry and motion representations through large-scale pseudo-supervised pretraining, establishing a foundation for 4D scene modeling. We then perform physics-grounded supervised fine-tuning using simulation-generated data, enforcing temporally consistent 4D dynamics. Finally, we apply simulation-grounded reinforcement learning to correct residual physical violations that are difficult to capture through explicit supervision. To evaluate fine-grained physical consistency beyond appearance-based metrics, we introduce a set of \textbf{4D world consistency evaluation} that probe geometric coherence, motion stability, and long-horizon physical plausibility. Experimental results demonstrate that Phys4D substantially improves fine-grained spatiotemporal and physical consistency compared to appearance-driven baselines, while maintaining strong generative performance. Our project page is available at https://sensational-brioche-7657e7.netlify.app/

最近的视频扩散模型作为大规模生成世界模型已经取得了令人印象深刻的能力。然而，这些模型常常难以实现细粒度的物理一致性，随着时间的推移表现出物理上令人难以置信的动态。在这项工作中，我们提出了 \textbf{Phys4D}，一个用于从视频扩散模型学习物理一致的 4D 世界表示的管道。 Phys4D 采用 \textbf{三阶段训练范例}，逐步将外观驱动的视频扩散模型提升为物理一致的 4D 世界表示。我们首先通过大规模伪监督预训练引导鲁棒的几何和运动表示，为 4D 场景建模奠定基础。然后，我们使用模拟生成的数据执行基于物理的监督微调，从而实现时间一致的 4D 动态。最后，我们应用基于模拟的强化学习来纠正难以通过显式监督捕获的残留物理违规行为。为了评估基于外观的指标之外的细粒度物理一致性，我们引入了一组 \textbf{4D 世界一致性评估}，用于探测几何相干性、运动稳定性和长期物理合理性。实验结果表明，与外观驱动的基线相比，Phys4D 显着提高了细粒度时空和物理一致性，同时保持了强大的生成性能。我们的项目页面位于 https://sensational-brioche-7657e7.netlify.app/

</details>

---

## 4. Beyond Pixel Histories: World Models with Persistent 3D State / 超越像素历史：具有持久 3D 状态的世界模型

**Date**: 2026-03-03 | **arXiv**: [2603.03482v1](http://arxiv.org/abs/2603.03482v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.03482v1)

**Categories**: cs.CV, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Interactive world models continually generate video by responding to a user's actions, enabling open-ended generation capabilities. However, existing models typically lack a 3D representation of the environment, meaning 3D consistency must be implicitly learned from data, and spatial memory is restricted to limited temporal context windows. This results in an unrealistic user experience and presents significant obstacles to down-stream tasks such as training agents. To address this, we present PERSIST, a new paradigm of world model which simulates the evolution of a latent 3D scene: environment, camera, and renderer. This allows us to synthesize new frames with persistent spatial memory and consistent geometry. Both quantitative metrics and a qualitative user study show substantial improvements in spatial memory, 3D consistency, and long-horizon stability over existing methods, enabling coherent, evolving 3D worlds. We further demonstrate novel capabilities, including synthesising diverse 3D environments from a single image, as well as enabling fine-grained, geometry-aware control over generated experiences by supporting environment editing and specification directly in 3D space. Project page: https://francelico.github.io/persist.github.io

交互式世界模型通过响应用户的操作来不断生成视频，从而实现开放式生成功能。然而，现有模型通常缺乏环境的 3D 表示，这意味着必须从数据中隐式学习 3D 一致性，并且空间记忆仅限于有限的时间上下文窗口。这会导致不切实际的用户体验，并对训练代理等下游任务造成重大障碍。为了解决这个问题，我们提出了 PERSIST，一种新的世界模型范式，它模拟潜在 3D 场景的演变：环境、相机和渲染器。这使我们能够合成具有持久空间记忆和一致几何形状的新框架。定量指标和定性用户研究都表明，与现有方法相比，空间记忆、3D 一致性和长期稳定性方面有了显着改进，从而实现连贯、不断发展的 3D 世界。我们进一步展示了新颖的功能，包括从单个图像合成不同的 3D 环境，以及通过直接在 3D 空间中支持环境编辑和规范来实现对生成的体验进行细粒度、几何感知的控制。项目页面：https://francelico.github.io/persist.github.io

</details>

---

## 5. Chain of World: World Model Thinking in Latent Motion / 世界之链：潜在运动中的世界模型思维

**Date**: 2026-03-03 | **arXiv**: [2603.03195v1](http://arxiv.org/abs/2603.03195v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.03195v1)

**Categories**: cs.CV, cs.AI, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Vision-Language-Action (VLA) models are a promising path toward embodied intelligence, yet they often overlook the predictive and temporal-causal structure underlying visual dynamics. World-model VLAs address this by predicting future frames, but waste capacity reconstructing redundant backgrounds. Latent-action VLAs encode frame-to-frame transitions compactly, but lack temporally continuous dynamic modeling and world knowledge. To overcome these limitations, we introduce CoWVLA (Chain-of-World VLA), a new "Chain of World" paradigm that unifies world-model temporal reasoning with a disentangled latent motion representation. First, a pretrained video VAE serves as a latent motion extractor, explicitly factorizing video segments into structure and motion latents. Then, during pre-training, the VLA learns from an instruction and an initial frame to infer a continuous latent motion chain and predict the segment's terminal frame. Finally, during co-fine-tuning, this latent dynamic is aligned with discrete action prediction by jointly modeling sparse keyframes and action sequences in a unified autoregressive decoder. This design preserves the world-model benefits of temporal reasoning and world knowledge while retaining the compactness and interpretability of latent actions, enabling efficient visuomotor learning. Extensive experiments on robotic simulation benchmarks show that CoWVLA outperforms existing world-model and latent-action approaches and achieves moderate computational efficiency, highlighting its potential as a more effective VLA pretraining paradigm. The project website can be found at https://fx-hit.github.io/cowvla-io.

视觉-语言-动作（VLA）模型是实现具身智能的一条有希望的道路，但它们经常忽视视觉动态背后的预测和时间因果结构。世界模型 VLA 通过预测未来帧来​​解决这个问题，但会浪费容量来重建冗余背景。潜在动作 VLA 紧凑地编码帧到帧的转换，但缺乏时间连续的动态建模和世界知识。为了克服这些限制，我们引入了 CoWVLA（世界链 VLA），这是一种新的“世界链”范式，它将世界模型时间推理与解开的潜在运动表示相结合。首先，预训练的视频 VAE 用作潜在运动提取器，将视频片段显式分解为结构和潜在运动。然后，在预训练期间，VLA 从指令和初始帧中学习，以推断连续的潜在运动链并预测片段的终止帧。最后，在协同微调期间，通过在统一的自回归解码器中联合建模稀疏关键帧和动作序列，将这种潜在动态与离散动作预测对齐。这种设计保留了时间推理和世界知识的世界模型优势，同时保留了潜在动作的紧凑性和可解释性，从而实现了高效的视觉运动学习。对机器人模拟基准的大量实验表明，CoWVLA 优于现有的世界模型和潜在动作方法，并实现了适度的计算效率，凸显了其作为更有效的 VLA 预训练范例的潜力。该项目网站可以在 https://fx-hit.github.io/cowvla-io 找到。

</details>

---



</details>

<details><summary><b>2026-03-04 (5 papers)</b></summary>

# arXiv World Model Papers - 2026-03-04

**Paper Count**: 5

---

## 1. Contextual Latent World Models for Offline Meta Reinforcement Learning / 离线元强化学习的上下文潜在世界模型

**Date**: 2026-03-03 | **arXiv**: [2603.02935v1](http://arxiv.org/abs/2603.02935v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02935v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Offline meta-reinforcement learning seeks to learn policies that generalize across related tasks from fixed datasets. Context-based methods infer a task representation from transition histories, but learning effective task representations without supervision remains a challenge. In parallel, latent world models have demonstrated strong self-supervised representation learning through temporal consistency. We introduce contextual latent world models, which condition latent world models on inferred task representations and train them jointly with the context encoder. This enforces task-conditioned temporal consistency, yielding task representations that capture task-dependent dynamics rather than merely discriminating between tasks. Our method learns more expressive task representations and significantly improves generalization to unseen tasks across MuJoCo, Contextual-DeepMind Control, and Meta-World benchmarks.

离线元强化学习旨在学习从固定数据集中泛化相关任务的策略。基于上下文的方法从转换历史中推断任务表示，但在没有监督的情况下学习有效的任务表示仍然是一个挑战。与此同时，潜在世界模型通过时间一致性展示了强大的自我监督表示学习。我们引入了上下文潜在世界模型，它根据推断的任务表示来调节潜在世界模型，并与上下文编码器联合训练它们。这增强了任务条件的时间一致性，产生捕获任务相关动态的任务表示，而不仅仅是区分任务。我们的方法学习更具表现力的任务表示，并显着提高了对 MuJoCo、Contextual-DeepMind Control 和 Meta-World 基准中未见过的任务的泛化。

</details>

---

## 2. Next Embedding Prediction Makes World Models Stronger / 下一个嵌入预测使世界模型变得更强

**Date**: 2026-03-03 | **arXiv**: [2603.02765v1](http://arxiv.org/abs/2603.02765v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02765v1)

**Categories**: cs.LG, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Capturing temporal dependencies is critical for model-based reinforcement learning (MBRL) in partially observable, high-dimensional domains. We introduce NE-Dreamer, a decoder-free MBRL agent that leverages a temporal transformer to predict next-step encoder embeddings from latent state sequences, directly optimizing temporal predictive alignment in representation space. This approach enables NE-Dreamer to learn coherent, predictive state representations without reconstruction losses or auxiliary supervision. On the DeepMind Control Suite, NE-Dreamer matches or exceeds the performance of DreamerV3 and leading decoder-free agents. On a challenging subset of DMLab tasks involving memory and spatial reasoning, NE-Dreamer achieves substantial gains. These results establish next-embedding prediction with temporal transformers as an effective, scalable framework for MBRL in complex, partially observable environments.

捕获时间依赖性对于部分可观察的高维领域中基于模型的强化学习 (MBRL) 至关重要。我们引入了 NE-Dreamer，一种无解码器的 MBRL 代理，它利用时间变换器从潜在状态序列预测下一步编码器嵌入，直接优化表示空间中的时间预测对齐。这种方法使 NE-Dreamer 能够学习连贯的、预测性的状态表示，而无需重建损失或辅助监督。在 DeepMind Control Suite 上，NE-Dreamer 的性能达到或超过了 DreamerV3 和领先的无解码器代理。在涉及记忆和空间推理的 DMLab 任务的挑战性子集上，NE-Dreamer 取得了显着的成果。这些结果利用时间变换器建立了下一次嵌入预测，作为复杂、部分可观察环境中 MBRL 的有效、可扩展框架。

</details>

---

## 3. What Capable Agents Must Know: Selection Theorems for Robust Decision-Making under Uncertainty / 有能力的智能体必须了解什么：不确定性下稳健决策的选择定理

**Date**: 2026-03-03 | **arXiv**: [2603.02491v1](http://arxiv.org/abs/2603.02491v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02491v1)

**Categories**: cs.LG, cs.AI, cs.RO, q-bio.NC, stat.ML

<details><summary><b>Abstract / 摘要</b></summary>

As artificial agents become increasingly capable, what internal structure is *necessary* for an agent to act competently under uncertainty? Classical results show that optimal control can be *implemented* using belief states or world models, but not that such representations are required. We prove quantitative "selection theorems" showing that low *average-case regret* on structured families of action-conditioned prediction tasks forces an agent to implement a predictive, structured internal state. Our results cover stochastic policies, partial observability, and evaluation under task distributions, without assuming optimality, determinism, or access to an explicit model. Technically, we reduce predictive modeling to binary "betting" decisions and show that regret bounds limit probability mass on suboptimal bets, enforcing the predictive distinctions needed to separate high-margin outcomes. In fully observed settings, this yields approximate recovery of the interventional transition kernel; under partial observability, it implies necessity of belief-like memory and predictive state, addressing an open question in prior world-model recovery work.

随着人工智能主体的能力越来越强，什么样的内部结构对于一个主体在不确定性下能够胜任行动是“必要的”？经典结果表明，可以使用信念状态或世界模型“实现”最优控制，但并不需要这种表示。我们证明了定量的“选择定理”，表明对动作条件预测任务的结构化系列的低“平均情况遗憾”迫使代理实施预测性的、结构化的内部状态。我们的结果涵盖了随机策略、部分可观察性和任务分布下的评估，而不假设最优性、确定性或访问显式模型。从技术上讲，我们将预测模型简化为二元“投注”决策，并表明遗憾界限限制了次优投注的概率质量，从而强化了分离高利润结果所需的预测区别。在完全观察的设置中，这会产生介入过渡内核的近似恢复；在部分可观察性下，它意味着类似信念的记忆和预测状态的必要性，解决了先前世界模型恢复工作中的一个悬而未决的问题。

</details>

---

## 4. Discrete World Models via Regularization / 通过正则化的离散世界模型

**Date**: 2026-03-02 | **arXiv**: [2603.01748v1](http://arxiv.org/abs/2603.01748v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.01748v1)

**Categories**: cs.LG, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

World models aim to capture the states and dynamics of an environment in a compact latent space. Moreover, using Boolean state representations is particularly useful for search heuristics and symbolic reasoning and planning. Existing approaches keep latents informative via decoder-based reconstruction, or instead via contrastive or reward signals. In this work, we introduce Discrete World Models via Regularization (DWMR): a reconstruction-free and contrastive-free method for unsupervised Boolean world-model learning. In particular, we introduce a novel world-modeling loss that couples latent prediction with specialized regularizers. Such regularizers maximize the entropy and independence of the representation bits through variance, correlation, and coskewness penalties, while simultaneously enforcing a locality prior for sparse action changes. To enable effective optimization, we also introduce a novel training scheme improving robustness to discrete roll-outs. Experiments on two benchmarks with underlying combinatorial structure show that DWMR learns more accurate representations and transitions than reconstruction-based alternatives. Finally, DWMR can also be paired with an auxiliary reconstruction decoder, and this combination yields additional gains.

世界模型旨在捕捉紧凑潜在空间中环境的状态和动态。此外，使用布尔状态表示对于搜索启发式以及符号推理和规划特别有用。现有的方法通过基于解码器的重建，或者通过对比或奖励信号来保持潜在信息。在这项工作中，我们介绍了通过正则化的离散世界模型（DWMR）：一种用于无监督布尔世界模型学习的无重建和无对比方法。特别是，我们引入了一种新颖的世界建模损失，它将潜在预测与专门的正则化器结合起来。这种正则化器通过方差、相关性和余偏度惩罚来最大化表示位的熵和独立性，同时对稀疏动作变化强制执行局部性先验。为了实现有效的优化，我们还引入了一种新颖的训练方案，提高了离散推出的鲁棒性。对具有底层组合结构的两个基准进行的实验表明，DWMR 比基于重建的替代方案能够学习更准确的表示和转换。最后，DWMR 还可以与辅助重建解码器配对，这种组合会产生额外的增益。

</details>

---

## 5. Scaling Tasks, Not Samples: Mastering Humanoid Control through Multi-Task Model-Based Reinforcement Learning / 扩展任务而不是样本：通过基于多任务模型的强化学习掌握人形控制

**Date**: 2026-03-02 | **arXiv**: [2603.01452v1](http://arxiv.org/abs/2603.01452v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.01452v1)

**Categories**: cs.AI, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Developing generalist robots capable of mastering diverse skills remains a central challenge in embodied AI. While recent progress emphasizes scaling model parameters and offline datasets, such approaches are limited in robotics, where learning requires active interaction. We argue that effective online learning should scale the \emph{number of tasks}, rather than the number of samples per task. This regime reveals a structural advantage of model-based reinforcement learning (MBRL). Because physical dynamics are invariant across tasks, a shared world model can aggregate multi-task experience to learn robust, task-agnostic representations. In contrast, model-free methods suffer from gradient interference when tasks demand conflicting actions in similar states. Task diversity therefore acts as a regularizer for MBRL, improving dynamics learning and sample efficiency. We instantiate this idea with \textbf{EfficientZero-Multitask (EZ-M)}, a sample-efficient multi-task MBRL algorithm for online learning. Evaluated on \textbf{HumanoidBench}, a challenging whole-body control benchmark, EZ-M achieves state-of-the-art performance with significantly higher sample efficiency than strong baselines, without extreme parameter scaling. These results establish task scaling as a critical axis for scalable robotic learning. The project website is available \href{https://yewr.github.io/ez_m/}{here}.

开发能够掌握多种技能的多面手机器人仍然是实体人工智能的核心挑战。虽然最近的进展强调缩放模型参数和离线数据集，但这种方法在机器人技术中受到限制，因为机器人技术的学习需要主动交互。我们认为有效的在线学习应该扩展\emph{任务数量}，而不是每个任务的样本数量。这种机制揭示了基于模型的强化学习（MBRL）的结构优势。由于物理动力学在不同任务之间是不变的，因此共享世界模型可以聚合多任务经验来学习稳健的、与任务无关的表示。相比之下，当任务需要在相似状态下采取冲突的行动时，无模型方法会受到梯度干扰。因此，任务多样性可以作为 MBRL 的正则化器，提高动态学习和样本效率。我们用 \textbf{EfficientZero-Multitask (EZ-M)} 来实例化这个想法，这是一种用于在线学习的样本高效多任务 MBRL 算法。在具有挑战性的全身控制基准 \textbf{HumanoidBench} 上进行评估，EZ-M 实现了最先进的性能，其样本效率显着高于强基线，且没有极端的参数缩放。这些结果将任务扩展确立为可扩展机器人学习的关键轴。该项目网站位于\href{https://yewr.github.io/ez_m/}{此处}。

</details>

---



</details>

<details><summary><b>2026-03-03 (1 papers)</b></summary>

# arXiv World Model Papers - 2026-03-03

**Paper Count**: 1

---

## 1. MetaMind: General and Cognitive World Models in Multi-Agent Systems by Meta-Theory of Mind / MetaMind：多智能体系统中的通用认知世界模型

**Date**: 2026-02-28 | **arXiv**: [2603.00808v1](http://arxiv.org/abs/2603.00808v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.00808v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

A major challenge for world models in multi-agent systems is to understand interdependent agent dynamics, predict interactive multi-agent trajectories, and plan over long horizons with collective awareness, without centralized supervision or explicit communication. In this paper, MetaMind, a general and cognitive world model for multi-agent systems that leverages a novel meta-theory of mind (Meta-ToM) framework, is proposed. Through MetaMind, each agent learns not only to predict and plan over its own beliefs, but also to inversely reason goals and beliefs from its own behavior trajectories. This self-reflective, bidirectional inference loop enables each agent to learn a metacognitive ability in a self-supervised manner. Then, MetaMind is shown to generalize the metacognitive ability from first-person to third-person through analogical reasoning. Thus, in multi-agent systems, each agent with MetaMind can actively reason about goals and beliefs of other agents from limited, observable behavior trajectories in a zero-shot manner, and then adapt to emergent collective intention without an explicit communication mechanism. Extended simulation results on diverse multi-agent tasks demonstrate that MetaMind can achieve superior task performance and outperform baselines in few-shot multi-agent generalization.

多智能体系统中世界模型的一个主要挑战是理解相互依赖的智能体动态、预测交互式多智能体轨迹，并在没有集中监督或明确沟通的情况下以集体意识进行长期规划。在本文中，提出了 MetaMind，这是一种利用新颖的元心理理论 (Meta-ToM) 框架的多智能体系统的通用认知世界模型。通过 MetaMind，每个智能体不仅学会预测和规划自己的信念，还能根据自己的行为轨迹反向推理目标和信念。这种自我反思的双向推理循环使每个智能体能够以自我监督的方式学习元认知能力。然后，MetaMind 通过类比推理将元认知能力从第一人称推广到第三人称。因此，在多智能体系统中，每个具有 MetaMind 的智能体都可以从有限的、可观察的行为轨迹中以零样本的方式主动推理其他智能体的目标和信念，然后在没有明确的通信机制的情况下适应新出现的集体意图。对各种多智能体任务的扩展模拟结果表明，MetaMind 可以实现卓越的任务性能，并在少样本多智能体泛化中超越基线。

</details>

---



</details>

<details><summary><b>2026-03-02 (2 papers)</b></summary>

# arXiv World Model Papers - 2026-03-02

**Paper Count**: 2

---

## 1. Planning from Observation and Interaction / 从观察和互动中进行规划

**Date**: 2026-02-27 | **arXiv**: [2602.24121v1](http://arxiv.org/abs/2602.24121v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.24121v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Observational learning requires an agent to learn to perform a task by referencing only observations of the performed task. This work investigates the equivalent setting in real-world robot learning where access to hand-designed rewards and demonstrator actions are not assumed. To address this data-constrained setting, this work presents a planning-based Inverse Reinforcement Learning (IRL) algorithm for world modeling from observation and interaction alone. Experiments conducted entirely in the real-world demonstrate that this paradigm is effective for learning image-based manipulation tasks from scratch in under an hour, without assuming prior knowledge, pre-training, or data of any kind beyond task observations. Moreover, this work demonstrates that the learned world model representation is capable of online transfer learning in the real-world from scratch. In comparison to existing approaches, including IRL, RL, and Behavior Cloning (BC), which have more restrictive assumptions, the proposed approach demonstrates significantly greater sample efficiency and success rates, enabling a practical path forward for online world modeling and planning from observation and interaction. Videos and more at: https://uwrobotlearning.github.io/mpail2/.

观察学习要求代理仅通过参考对所执行任务的观察来学习执行任务。这项工作研究了现实世界机器人学习中的等效设置，其中不假设可以获得手工设计的奖励和演示动作。为了解决这种数据受限的环境，这项工作提出了一种基于规划的逆强化学习（IRL）算法，用于仅通过观察和交互进行世界建模。完全在现实世界中进行的实验表明，这种范例对于在一小时内从头开始学习基于图像的操作任务是有效的，无需假设先验知识、预训练或任务观察之外的任何类型的数据。此外，这项工作表明，学习到的世界模型表示能够从头开始在现实世界中进行在线迁移学习。与具有更多限制性假设的现有方法（包括 IRL、RL 和行为克隆 (BC)）相比，所提出的方法表现出显着更高的样本效率和成功率，为通过观察和交互进行在线世界建模和规划提供了一条实用的道路。视频及更多内容请访问：https://uwrobotlearning.github.io/mpail2/。

</details>

---

## 2. Foundation World Models for Agents that Learn, Verify, and Adapt Reliably Beyond Static Environments / 代理的基础世界模型可以在静态环境之外可靠地学习、验证和适应

**Date**: 2026-02-27 | **arXiv**: [2602.23997v1](http://arxiv.org/abs/2602.23997v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23997v1)

**Categories**: cs.LG, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

The next generation of autonomous agents must not only learn efficiently but also act reliably and adapt their behavior in open worlds. Standard approaches typically assume fixed tasks and environments with little or no novelty, which limits world models' ability to support agents that must evolve their policies as conditions change. This paper outlines a vision for foundation world models: persistent, compositional representations that unify reinforcement learning, reactive/program synthesis, and abstraction mechanisms. We propose an agenda built around four components: (i) learnable reward models from specifications to support optimization with clear objectives; (ii) adaptive formal verification integrated throughout learning; (iii) online abstraction calibration to quantify the reliability of the model's predictions; and (iv) test-time synthesis and world-model generation guided by verifiers. Together, these components enable agents to synthesize verifiable programs, derive new policies from a small number of interactions, and maintain correctness while adapting to novelty. The resulting framework positions foundation world models as a substrate for learning, reasoning, and adaptation, laying the groundwork for agents that not only act well but can explain and justify the behavior they adopt.

下一代自主智能体不仅必须高效学习，而且必须可靠地行动并在开放世界中调整自己的行为。标准方法通常假设固定的任务和环境，很少或没有新颖性，这限制了世界模型支持代理的能力，代理必须随着条件的变化而发展其策略。本文概述了基础世界模型的愿景：统一强化学习、反应/程序合成和抽象机制的持久组合表示。我们提出了一个围绕四个组成部分构建的议程：（i）来自规范的可学习奖励模型，以支持具有明确目标的优化； (ii) 将自适应形式验证融入整个学习过程； (iii) 在线抽象校准，以量化模型预测的可靠性； (iv) 由验证者指导的测试时综合和世界模型生成。这些组件共同使代理能够综合可验证的程序，从少量的交互中得出新的策略，并在适应新颖性的同时保持正确性。由此产生的框架将基础世界模型定位为学习、推理和适应的基础，为智能体奠定了基础，这些智能体不仅表现良好，而且可以解释和证明他们所采取的行为。

</details>

---



</details>

<details><summary><b>2026-02-27 (7 papers)</b></summary>

# arXiv World Model Papers - 2026-02-27

**Paper Count**: 7

---

## 1. Risk-Aware World Model Predictive Control for Generalizable End-to-End Autonomous Driving / 用于通用端到端自动驾驶的风险感知世界模型预测控制

**Date**: 2026-02-26 | **arXiv**: [2602.23259v1](http://arxiv.org/abs/2602.23259v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23259v1)

**Categories**: cs.CV, cs.AI, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

With advances in imitation learning (IL) and large-scale driving datasets, end-to-end autonomous driving (E2E-AD) has made great progress recently. Currently, IL-based methods have become a mainstream paradigm: models rely on standard driving behaviors given by experts, and learn to minimize the discrepancy between their actions and expert actions. However, this objective of "only driving like the expert" suffers from limited generalization: when encountering rare or unseen long-tail scenarios outside the distribution of expert demonstrations, models tend to produce unsafe decisions in the absence of prior experience. This raises a fundamental question: Can an E2E-AD system make reliable decisions without any expert action supervision? Motivated by this, we propose a unified framework named Risk-aware World Model Predictive Control (RaWMPC) to address this generalization dilemma through robust control, without reliance on expert demonstrations. Practically, RaWMPC leverages a world model to predict the consequences of multiple candidate actions and selects low-risk actions through explicit risk evaluation. To endow the world model with the ability to predict the outcomes of risky driving behaviors, we design a risk-aware interaction strategy that systematically exposes the world model to hazardous behaviors, making catastrophic outcomes predictable and thus avoidable. Furthermore, to generate low-risk candidate actions at test time, we introduce a self-evaluation distillation method to distill riskavoidance capabilities from the well-trained world model into a generative action proposal network without any expert demonstration. Extensive experiments show that RaWMPC outperforms state-of-the-art methods in both in-distribution and out-of-distribution scenarios, while providing superior decision interpretability.

随着模仿学习（IL）和大规模驾驶数据集的进步，端到端自动驾驶（E2E-AD）最近取得了巨大进展。目前，基于IL的方法已成为主流范式：模型依赖于专家给出的标准驾驶行为，并学习最小化其行为与专家行为之间的差异。然而，“只像专家一样驾驶”这一目标的泛化能力有限：当遇到专家演示分布之外的罕见或未见的长尾场景时，模型往往会在缺乏先验经验的情况下做出不安全的决策。这就提出了一个基本问题：E2E-AD 系统能否在没有任何专家行动监督的情况下做出可靠的决策？受此启发，我们提出了一个名为风险感知世界模型预测控制（RaWMPC）的统一框架，通过稳健控制来解决这种泛化困境，而不依赖于专家演示。实际上，RaWMPC 利用世界模型来预测多个候选行动的后果，并通过明确的风险评估选择低风险行动。为了赋予世界模型预测危险驾驶行为结果的能力，我们设计了一种风险感知交互策略，系统地将世界模型暴露于危险行为，使灾难性结果可预测，从而可以避免。此外，为了在测试时生成低风险的候选动作，我们引入了一种自我评估蒸馏方法，将风险规避能力从训练有素的世界模型中提取到生成动作提案网络中，而无需任何专家演示。大量实验表明，RaWMPC 在分布内和分布外场景中均优于最先进的方法，同时提供卓越的决策可解释性。

</details>

---

## 2. MetaOthello: A Controlled Study of Multiple World Models in Transformers / MetaOthello：变形金刚中多个世界模型的对照研究

**Date**: 2026-02-26 | **arXiv**: [2602.23164v1](http://arxiv.org/abs/2602.23164v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23164v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Foundation models must handle multiple generative processes, yet mechanistic interpretability largely studies capabilities in isolation; it remains unclear how a single transformer organizes multiple, potentially conflicting "world models". Previous experiments on Othello playing neural-networks test world-model learning but focus on a single game with a single set of rules. We introduce MetaOthello, a controlled suite of Othello variants with shared syntax but different rules or tokenizations, and train small GPTs on mixed-variant data to study how multiple world models are organized in a shared representation space. We find that transformers trained on mixed-game data do not partition their capacity into isolated sub-models; instead, they converge on a mostly shared board-state representation that transfers causally across variants. Linear probes trained on one variant can intervene on another's internal state with effectiveness approaching that of matched probes. For isomorphic games with token remapping, representations are equivalent up to a single orthogonal rotation that generalizes across layers. When rules partially overlap, early layers maintain game-agnostic representations while a middle layer identifies game identity, and later layers specialize. MetaOthello offers a path toward understanding not just whether transformers learn world models, but how they organize many at once.

基础模型必须处理多个生成过程，但机械可解释性主要研究孤立的能力；目前尚不清楚单个变压器如何组织多个可能相互冲突的“世界模型”。之前关于黑白棋玩神经网络的实验测试了世界模型学习，但重点关注具有一组规则的单个游戏。我们引入了 MetaOthello，这是一套受控的 Othello 变体套件，具有共享语法但不同的规则或标记化，并在混合变体数据上训练小型 GPT，以研究如何在共享表示空间中组织多个世界模型。我们发现，在混合游戏数据上训练的 Transformer 不会将其容量划分为孤立的子模型；相反，它们集中在一个大部分共享的董事会状态表示上，该表示在变体之间因果转移。在一种变体上训练的线性探针可以干预另一种变体的内部状态，其有效性接近匹配探针。对于具有令牌重新映射的同构游戏，表示相当于跨层泛化的单个正交旋转。当规则部分重叠时，早期层保持与游戏无关的表示，而中间层识别游戏身份，而后面的层则专门化。 MetaOthello 不仅提供了一条了解变形金刚是否学习世界模型的途径，还提供了一条了解它们如何同时组织多个世界模型的途径。

</details>

---

## 3. The Trinity of Consistency as a Defining Principle for General World Models / 一致性的三位一体作为一般世界模型的定义原则

**Date**: 2026-02-26 | **arXiv**: [2602.23152v1](http://arxiv.org/abs/2602.23152v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23152v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

The construction of World Models capable of learning, simulating, and reasoning about objective physical laws constitutes a foundational challenge in the pursuit of Artificial General Intelligence. Recent advancements represented by video generation models like Sora have demonstrated the potential of data-driven scaling laws to approximate physical dynamics, while the emerging Unified Multimodal Model (UMM) offers a promising architectural paradigm for integrating perception, language, and reasoning. Despite these advances, the field still lacks a principled theoretical framework that defines the essential properties requisite for a General World Model. In this paper, we propose that a World Model must be grounded in the Trinity of Consistency: Modal Consistency as the semantic interface, Spatial Consistency as the geometric basis, and Temporal Consistency as the causal engine. Through this tripartite lens, we systematically review the evolution of multimodal learning, revealing a trajectory from loosely coupled specialized modules toward unified architectures that enable the synergistic emergence of internal world simulators. To complement this conceptual framework, we introduce CoW-Bench, a benchmark centered on multi-frame reasoning and generation scenarios. CoW-Bench evaluates both video generation models and UMMs under a unified evaluation protocol. Our work establishes a principled pathway toward general world models, clarifying both the limitations of current systems and the architectural requirements for future progress.

构建能够学习、模拟和推理客观物理定律的世界模型是追求通用人工智能的基本挑战。以 Sora 等视频生成模型为代表的最新进展证明了数据驱动的缩放定律在近似物理动力学方面的潜力，而新兴的统一多模态模型 (UMM) 则为集成感知、语言和推理提供了一种有前途的架构范例。尽管取得了这些进展，该领域仍然缺乏一个原则性的理论框架来定义通用世界模型所需的基本属性。在本文中，我们提出世界模型必须建立在一致性三位一体的基础上：模态一致性作为语义接口，空间一致性作为几何基础，时间一致性作为因果引擎。通过这个三方视角，我们系统地回顾了多模态学习的演变，揭示了从松散耦合的专业模块到统一架构的轨迹，从而实现内部世界模拟器的协同出现。为了补充这个概念框架，我们引入了 CoW-Bench，这是一个以多帧推理和生成场景为中心的基准测试。 CoW-Bench 在统一的评估协议下评估视频生成模型和 UMM。我们的工作建立了通向通用世界模型的原则性途径，阐明了当前系统的局限性和未来进步的架构要求。

</details>

---

## 4. On Sample-Efficient Generalized Planning via Learned Transition Models / 通过学习转移模型进行样本有效的广义规划

**Date**: 2026-02-26 | **arXiv**: [2602.23148v1](http://arxiv.org/abs/2602.23148v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23148v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Generalized planning studies the construction of solution strategies that generalize across families of planning problems sharing a common domain model, formally defined by a transition function $γ: S \times A \rightarrow S$. Classical approaches achieve such generalization through symbolic abstractions and explicit reasoning over $γ$. In contrast, recent Transformer-based planners, such as PlanGPT and Plansformer, largely cast generalized planning as direct action-sequence prediction, bypassing explicit transition modeling. While effective on in-distribution instances, these approaches typically require large datasets and model sizes, and often suffer from state drift in long-horizon settings due to the absence of explicit world-state evolution. In this work, we formulate generalized planning as a transition-model learning problem, in which a neural model explicitly approximates the successor-state function $\hatγ \approx γ$ and generates plans by rolling out symbolic state trajectories. Instead of predicting actions directly, the model autoregressively predicts intermediate world states, thereby learning the domain dynamics as an implicit world model. To study size-invariant generalization and sample efficiency, we systematically evaluate multiple state representations and neural architectures, including relational graph encodings. Our results show that learning explicit transition models yields higher out-of-distribution satisficing-plan success than direct action-sequence prediction in multiple domains, while achieving these gains with significantly fewer training instances and smaller models. This is an extended version of a short paper accepted at ICAPS 2026 under the same title.

广义规划研究解决方案策略的构建，该解决方案策略泛化于共享公共域模型的规划问题系列，由转换函数 $γ 正式定义：S \times A \rightarrow S$。经典方法通过符号抽象和对 $γ$ 的显式推理来实现这种泛化。相比之下，最近基于 Transformer 的规划器（例如 PlanGPT 和 Plansformer）在很大程度上将广义规划视为直接动作序列预测，绕过了显式转换建模。虽然对分布内实例有效，但这些方法通常需要大型数据集和模型大小，并且由于缺乏明确的世界状态演化，常常会在长范围设置中遭受状态漂移。在这项工作中，我们将广义规划制定为转换模型学习问题，其中神经模型显式逼近后继状态函数 $\hatγ \approx γ$ 并通过推出符号状态轨迹来生成计划。该模型不是直接预测动作，而是自回归预测中间世界状态，从而将域动态学习为隐式世界模型。为了研究大小不变的泛化和样本效率，我们系统地评估了多种状态表示和神经架构，包括关系图编码。我们的结果表明，在多个领域中，学习显式转换模型比直接行动序列预测能产生更高的分布外满足计划成功率，同时通过显着更少的训练实例和更小的模型来实现这些收益。这是 ICAPS 2026 上接受的同名短论文的扩展版本。

</details>

---

## 5. GeoWorld: Geometric World Models / GeoWorld：几何世界模型

**Date**: 2026-02-26 | **arXiv**: [2602.23058v1](http://arxiv.org/abs/2602.23058v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23058v1)

**Categories**: cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Energy-based predictive world models provide a powerful approach for multi-step visual planning by reasoning over latent energy landscapes rather than generating pixels. However, existing approaches face two major challenges: (i) their latent representations are typically learned in Euclidean space, neglecting the underlying geometric and hierarchical structure among states, and (ii) they struggle with long-horizon prediction, which leads to rapid degradation across extended rollouts. To address these challenges, we introduce GeoWorld, a geometric world model that preserves geometric structure and hierarchical relations through a Hyperbolic JEPA, which maps latent representations from Euclidean space onto hyperbolic manifolds. We further introduce Geometric Reinforcement Learning for energy-based optimization, enabling stable multi-step planning in hyperbolic latent space. Extensive experiments on CrossTask and COIN demonstrate around 3% SR improvement in 3-step planning and 2% SR improvement in 4-step planning compared to the state-of-the-art V-JEPA 2. Project website: https://steve-zeyu-zhang.github.io/GeoWorld.

基于能量的预测世界模型通过推理潜在的能量景观而不是生成像素，为多步骤视觉规划提供了一种强大的方法。然而，现有的方法面临两个主要挑战：（i）它们的潜在表示通常是在欧几里得空间中学习的，忽略了状态之间潜在的几何和层次结构；（ii）它们难以进行长期预测，这导致在扩展部署过程中快速退化。为了解决这些挑战，我们引入了 GeoWorld，这是一种几何世界模型，通过双曲 JEPA 保留几何结构和层次关系，它将欧几里得空间的潜在表示映射到双曲流形。我们进一步引入几何强化学习进行基于能量的优化，从而在双曲潜在空间中实现稳定的多步规划。 CrossTask 和 COIN 上的大量实验表明，与最先进的 V-JEPA 2 相比，3 步规划的 SR 提高了约 3%，4 步规划的 SR 提高了 2%。 项目网站：https://steve-zeyu-zhang.github.io/GeoWorld。

</details>

---

## 6. Imagination Helps Visual Reasoning, But Not Yet in Latent Space / 想象力有助于视觉推理，但尚未在潜在空间中发挥作用

**Date**: 2026-02-26 | **arXiv**: [2602.22766v1](http://arxiv.org/abs/2602.22766v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.22766v1)

**Categories**: cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

Latent visual reasoning aims to mimic human's imagination process by meditating through hidden states of Multimodal Large Language Models. While recognized as a promising paradigm for visual reasoning, the underlying mechanisms driving its effectiveness remain unclear. Motivated to demystify the true source of its efficacy, we investigate the validity of latent reasoning using Causal Mediation Analysis. We model the process as a causal chain: the input as the treatment, the latent tokens as the mediator, and the final answer as the outcome. Our findings uncover two critical disconnections: (a) Input-Latent Disconnect: dramatic perturbations on the input result in negligible changes to the latent tokens, suggesting that latent tokens do not effectively attend to the input sequence. (b) Latent-Answer Disconnect: perturbations on the latent tokens yield minimal impact on the final answer, indicating the limited causal effect latent tokens imposing on the outcome. Furthermore, extensive probing analysis reveals that latent tokens encode limited visual information and exhibit high similarity. Consequently, we challenge the necessity of latent reasoning and propose a straightforward alternative named CapImagine, which teaches the model to explicitly imagine using text. Experiments on vision-centric benchmarks show that CapImagine significantly outperforms complex latent-space baselines, highlighting the superior potential of visual reasoning through explicit imagination.

潜在视觉推理旨在通过多模态大语言模型的隐藏状态进行冥想来模仿人类的想象力过程。虽然被认为是视觉推理的一种有前途的范例，但驱动其有效性的潜在机制仍不清楚。为了揭开其功效的真正来源的神秘面纱，我们使用因果中介分析研究了潜在推理的有效性。我们将过程建模为因果链：输入作为处理，潜在标记作为中介，最终答案作为结果。我们的发现揭示了两个关键的断开：（a）输入-潜在断开：输入的剧烈扰动导致潜在标记的变化可以忽略不计，这表明潜在标记不能有效地关注输入序列。 (b) 潜在答案断开：对潜在标记的扰动对最终答案产生的影响最小，表明潜在标记对结果的因果影响有限。此外，广泛的探测分析表明，潜在标记编码有限的视觉信息并表现出高度相似性。因此，我们挑战潜在推理的必要性，并提出了一个名为 CapImagine 的简单替代方案，它教会模型使用文本明确地想象。以视觉为中心的基准测试表明，CapImagine 的性能显着优于复杂的潜在空间基线，凸显了通过显式想象进行视觉推理的卓越潜力。

</details>

---

## 7. CWM: Contrastive World Models for Action Feasibility Learning in Embodied Agent Pipelines / CWM：具体代理管道中行动可行性学习的对比世界模型

**Date**: 2026-02-25 | **arXiv**: [2602.22452v1](http://arxiv.org/abs/2602.22452v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.22452v1)

**Categories**: cs.AI, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

A reliable action feasibility scorer is a critical bottleneck in embodied agent pipelines: before any planning or reasoning occurs, the agent must identify which candidate actions are physically executable in the current state. Existing approaches use supervised fine-tuning (SFT) to train action scorers, but SFT treats each candidate independently and does not explicitly teach the model to discriminate between actions that are physically correct and those that are subtly wrong. We propose the Contrastive World Model (CWM), which fine-tunes a large language model (LLM) as an action scorer using an InfoNCE contrastive objective with hard-mined negative examples. The key idea is to push valid actions away from invalid ones in scoring space, with special emphasis on hard negatives: semantically similar but physically incompatible candidates. We evaluate CWM on the ScienceWorld benchmark through two studies. First, an intrinsic affordance evaluation on 605 hard-negative test pairs shows that CWM outperforms SFT by +6.76 percentage points on Precision@1 for minimal-edit negatives -- cases where a single word changes the physical outcome -- and achieves a higher AUC-ROC (0.929 vs. 0.906). Second, a live filter characterisation study measures how well CWM ranks gold-path actions against all valid environment actions during task execution. Under out-of-distribution stress conditions, CWM maintains a significantly better safety margin (-2.39) than SFT (-3.96), indicating that the gold action is ranked closer to the top. These results support the hypothesis that contrastive training induces representations that capture physical feasibility more faithfully than SFT alone.

可靠的行动可行性评分器是具体代理管道中的关键瓶颈：在进行任何计划或推理之前，代理必须确定哪些候选行动在当前状态下可以物理执行。现有方法使用监督微调（SFT）来训练动作评分器，但 SFT 独立对待每个候选者，并且没有明确教导模型区分物理上正确的动作和细微错误的动作。我们提出了对比世界模型（CWM），它使用 InfoNCE 对比目标和精心挖掘的负面例子来微调大型语言模型（LLM）作为动作评分器。关键思想是在评分空间中将有效动作从无效动作中剔除，特别强调硬否定：语义上相似但物理上不兼容的候选者。我们通过两项研究在 ScienceWorld 基准上评估 CWM。首先，对 605 个硬阴性测试对进行的内在可供性评估表明，对于最小编辑阴性（单个单词改变物理结果的情况），CWM 在 Precision@1 上的表现优于 SFT +6.76 个百分点，并实现了更高的 AUC-ROC（0.929 比 0.906）。其次，实时过滤器特征研究衡量 CWM 在任务执行期间根据所有有效环境操作对黄金路径操作进行排名的情况。在分布外压力条件下，CWM 保持了明显优于 SFT（-3.96）的安全裕度（-2.39），表明黄金行动排名更接近顶部。这些结果支持这样的假设：对比训练比单独的 SFT 更能忠实地捕捉物理可行性。

</details>

---



</details>

<details><summary><b>2026-02-26 (3 papers)</b></summary>

# arXiv World Model Papers - 2026-02-26

**Paper Count**: 3

---

## 1. Self-Correcting VLA: Online Action Refinement via Sparse World Imagination / 自我修正VLA：通过稀疏世界想象力改进在线动作

**Date**: 2026-02-25 | **arXiv**: [2602.21633v1](http://arxiv.org/abs/2602.21633v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21633v1)

**Categories**: cs.RO, cs.AI, cs.CV

**Code**: https://github.com/Kisaragi0/SC-VLA.

<details><summary><b>Abstract / 摘要</b></summary>

Standard vision-language-action (VLA) models rely on fitting statistical data priors, limiting their robust understanding of underlying physical dynamics. Reinforcement learning enhances physical grounding through exploration yet typically relies on external reward signals that remain isolated from the agent's internal states. World action models have emerged as a promising paradigm that integrates imagination and control to enable predictive planning. However, they rely on implicit context modeling, lacking explicit mechanisms for self-improvement. To solve these problems, we propose Self-Correcting VLA (SC-VLA), which achieve self-improvement by intrinsically guiding action refinement through sparse imagination. We first design sparse world imagination by integrating auxiliary predictive heads to forecast current task progress and future trajectory trends, thereby constraining the policy to encode short-term physical evolution. Then we introduce the online action refinement module to reshape progress-dependent dense rewards, adjusting trajectory orientation based on the predicted sparse future states. Evaluations on challenging robot manipulation tasks from simulation benchmarks and real-world settings demonstrate that SC-VLA achieve state-of-the-art performance, yielding the highest task throughput with 16% fewer steps and a 9% higher success rate than the best-performing baselines, alongside a 14% gain in real-world experiments. Code is available at https://github.com/Kisaragi0/SC-VLA.

标准视觉-语言-动作（VLA）模型依赖于拟合统计数据先验，限制了它们对潜在物理动力学的稳健理解。强化学习通过探索增强物理基础，但通常依赖于与代理内部状态保持隔离的外部奖励信号。世界行动模型已成为一种有前途的范式，它将想象力和控制结合起来以实现预测性规划。然而，他们依赖隐式上下文建模，缺乏明确的自我改进机制。为了解决这些问题，我们提出了自我修正VLA（SC-VLA），它通过稀疏想象力本质上指导行动细化来实现自我改进。我们首先通过集成辅助预测头来设计稀疏世界想象，以预测当前任务进展和未来轨迹趋势，从而约束编码短期物理演化的策略。然后，我们引入在线动作细化模块来重塑依赖于进度的密集奖励，根据预测的稀疏未来状态调整轨迹方向。根据模拟基准和现实环境对具有挑战性的机器人操作任务进行的评估表明，SC-VLA 实现了最先进的性能，与最佳性能基线相比，步骤减少了 16%，成功率提高了 9%，从而实现了最高的任务吞吐量，同时在现实实验中提高了 14%。代码可在 https://github.com/Kisaragi0/SC-VLA 获取。

</details>

---

## 2. Geometric Priors for Generalizable World Models via Vector Symbolic Architecture / 通过矢量符号体系结构的可推广世界模型的几何先验

**Date**: 2026-02-25 | **arXiv**: [2602.21467v1](http://arxiv.org/abs/2602.21467v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21467v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

A key challenge in artificial intelligence and neuroscience is understanding how neural systems learn representations that capture the underlying dynamics of the world. Most world models represent the transition function with unstructured neural networks, limiting interpretability, sample efficiency, and generalization to unseen states or action compositions. We address these issues with a generalizable world model grounded in Vector Symbolic Architecture (VSA) principles as geometric priors. Our approach utilizes learnable Fourier Holographic Reduced Representation (FHRR) encoders to map states and actions into a high dimensional complex vector space with learned group structure and models transitions with element-wise complex multiplication. We formalize the framework's group theoretic foundation and show how training such structured representations to be approximately invariant enables strong multi-step composition directly in latent space and generalization performances over various experiments. On a discrete grid world environment, our model achieves 87.5% zero shot accuracy to unseen state-action pairs, obtains 53.6% higher accuracy on 20-timestep horizon rollouts, and demonstrates 4x higher robustness to noise relative to an MLP baseline. These results highlight how training to have latent group structure yields generalizable, data-efficient, and interpretable world models, providing a principled pathway toward structured models for real-world planning and reasoning.

人工智能和神经科学的一个关键挑战是理解神经系统如何学习捕捉世界潜在动态的表征。大多数世界模型用非结构化神经网络表示转换函数，限制了可解释性、样本效率以及对未见状态或动作组合的泛化。我们使用基于矢量符号架构（VSA）原理作为几何先验的可概括的世界模型来解决这些问题。我们的方法利用可学习的傅里叶全息简化表示（FHRR）编码器将状态和动作映射到具有学习组结构的高维复杂向量空间中，并通过逐元素复杂乘法进行模型转换。我们形式化了该框架的群论基础，并展示了如何将这种结构化表示训练为近似不变，从而能够直接在潜在空间中实现强大的多步骤组合，并在各种实验中实现泛化性能。在离散网格世界环境中，我们的模型对未见过的状态-动作对实现了 87.5% 的零射击精度，在 20 时间步水平部署上获得了 53.6% 的更高精度，并且相对于 MLP 基线，对噪声的鲁棒性提高了 4 倍。这些结果强调了通过训练获得潜在群体结构如何产生可概括的、数据高效的和可解释的世界模型，为现实世界规划和推理的结构化模型提供了原则性途径。

</details>

---

## 3. Self-Curriculum Model-based Reinforcement Learning for Shape Control of Deformable Linear Objects / 基于自课程模型的可变形线性物体形状控制的强化学习

**Date**: 2026-02-25 | **arXiv**: [2602.21816v1](http://arxiv.org/abs/2602.21816v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21816v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Precise shape control of Deformable Linear Objects (DLOs) is crucial in robotic applications such as industrial and medical fields. However, existing methods face challenges in handling complex large deformation tasks, especially those involving opposite curvatures, and lack efficiency and precision. To address this, we propose a two-stage framework combining Reinforcement Learning (RL) and online visual servoing. In the large-deformation stage, a model-based reinforcement learning approach using an ensemble of dynamics models is introduced to significantly improve sample efficiency. Additionally, we design a self-curriculum goal generation mechanism that dynamically selects intermediate-difficulty goals with high diversity through imagined evaluations, thereby optimizing the policy learning process. In the small-deformation stage, a Jacobian-based visual servo controller is deployed to ensure high-precision convergence. Simulation results show that the proposed method enables efficient policy learning and significantly outperforms mainstream baselines in shape control success rate and precision. Furthermore, the framework effectively transfers the policy trained in simulation to real-world tasks with zero-shot adaptation. It successfully completes all 30 cases with diverse initial and target shapes across DLOs of different sizes and materials. The project website is available at: https://anonymous.4open.science/w/sc-mbrl-dlo-EB48/

可变形线性物体 (DLO) 的精确形状控制对于工业和医疗领域等机器人应用至关重要。然而，现有方法在处理复杂的大变形任务，特别是涉及相反曲率的任务时面临挑战，并且缺乏效率和精度。为了解决这个问题，我们提出了一个结合强化学习（RL）和在线视觉伺服的两阶段框架。在大变形阶段，引入了基于模型的强化学习方法，使用动力学模型集成来显着提高样本效率。此外，我们设计了一种自课程目标生成机制，通过想象评估动态选择具有高多样性的中等难度目标，从而优化策略学习过程。在小变形阶段，采用基于雅可比行列式的视觉伺服控制器，保证高精度收敛。仿真结果表明，该方法能够实现高效的策略学习，并且在形状控制成功率和精度方面显着优于主流基线。此外，该框架有效地将模拟训练的策略转移到零样本适应的现实世界任务中。它在不同尺寸和材料的 DLO 中成功完成了所有 30 个具有不同初始形状和目标形状的案例。该项目网站位于：https://anonymous.4open.science/w/sc-mbrl-dlo-EB48/

</details>

---



</details>

<details><summary><b>2026-02-25 (19 papers)</b></summary>

# arXiv World Model Papers - 2026-02-25

**Paper Count**: 19

---

## 1. Solaris: Building a Multiplayer Video World Model in Minecraft / Solaris：在 Minecraft 中构建多人视频世界模型

**Date**: 2026-02-25 | **arXiv**: [2602.22208v1](http://arxiv.org/abs/2602.22208v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.22208v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Existing action-conditioned video generation models (video world models) are limited to single-agent perspectives, failing to capture the multi-agent interactions of real-world environments. We introduce Solaris, a multiplayer video world model that simulates consistent multi-view observations. To enable this, we develop a multiplayer data system designed for robust, continuous, and automated data collection on video games such as Minecraft. Unlike prior platforms built for single-player settings, our system supports coordinated multi-agent interaction and synchronized videos + actions capture. Using this system, we collect 12.64 million multiplayer frames and propose an evaluation framework for multiplayer movement, memory, grounding, building, and view consistency. We train Solaris using a staged pipeline that progressively transitions from single-player to multiplayer modeling, combining bidirectional, causal, and Self Forcing training. In the final stage, we introduce Checkpointed Self Forcing, a memory-efficient Self Forcing variant that enables a longer-horizon teacher. Results show our architecture and training design outperform existing baselines. Through open-sourcing our system and models, we hope to lay the groundwork for a new generation of multi-agent world models.

现有的动作条件视频生成模型（视频世界模型）仅限于单智能体视角，无法捕捉现实世界环境的多智能体交互。我们介绍 Solaris，这是一种模拟一致的多视图观察的多人视频世界模型。为了实现这一目标，我们开发了一个多人数据系统，专为《我的世界》等视频游戏的稳健、连续和自动化数据收集而设计。与之前为单人游戏设置构建的平台不同，我们的系统支持协调的多代理交互和同步视频+动作捕捉。使用该系统，我们收集了 1264 万个多人游戏帧，并提出了多人运动、记忆、接地、构建和视图一致性的评估框架。我们使用分阶段的管道来训练 Solaris，该管道逐渐从单人模式过渡到多人模式，结合了双向、因果和自我强迫训练。在最后阶段，我们引入了检查点自我强迫，这是一种内存高效的自我强迫变体，可以实现更长视野的教师。结果显示我们的架构和培训设计优于现有基线。通过开源我们的系统和模型，我们希望为新一代多智能体世界模型奠定基础。

</details>

---

## 2. Geometry-as-context: Modulating Explicit 3D in Scene-consistent Video Generation to Geometry Context / 几何作为上下文：将场景一致视频生成中的显式 3D 调制为几何上下文

**Date**: 2026-02-25 | **arXiv**: [2602.21929v1](http://arxiv.org/abs/2602.21929v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21929v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Scene-consistent video generation aims to create videos that explore 3D scenes based on a camera trajectory. Previous methods rely on video generation models with external memory for consistency, or iterative 3D reconstruction and inpainting, which accumulate errors during inference due to incorrect intermediary outputs, non-differentiable processes, and separate models. To overcome these limitations, we introduce ``geometry-as-context". It iteratively completes the following steps using an autoregressive camera-controlled video generation model: (1) estimates the geometry of the current view necessary for 3D reconstruction, and (2) simulates and restores novel view images rendered by the 3D scene. Under this multi-task framework, we develop the camera gated attention module to enhance the model's capability to effectively leverage camera poses. During the training phase, text contexts are utilized to ascertain whether geometric or RGB images should be generated. To ensure that the model can generate RGB-only outputs during inference, the geometry context is randomly dropped from the interleaved text-image-geometry training sequence. The method has been tested on scene video generation with one-direction and forth-and-back trajectories. The results show its superiority over previous approaches in maintaining scene consistency and camera control.

场景一致的视频生成旨在创建基于摄像机轨迹探索 3D 场景的视频。以前的方法依赖具有外部存储器的视频生成模型来实现一致性，或者迭代 3D 重建和修复，这会在推理过程中由于不正确的中间输出、不可微分的过程和单独的模型而累积错误。为了克服这些限制，我们引入了“几何即上下文”。它使用自回归相机控制的视频生成模型迭代地完成以下步骤：（1）估计 3D 重建所需的当前视图的几何形状，以及（2）模拟和恢复 3D 场景渲染的新视图图像。在这个多任务框架下，我们开发了相机门控注意力模块，以增强模型有效利用相机姿势的能力。在训练阶段，利用文本上下文为了确定应该生成几何图像还是 RGB 图像，为了确保模型在推理过程中可以生成仅 RGB 的输出，从交错的文本-图像-几何训练序列中随机删除该方法，并在单向和前后轨迹的场景视频生成上进行了测试，结果表明其在保持场景一致性和摄像机控制方面优于以前的方法。

</details>

---

## 3. Understanding Annotation Error Propagation and Learning an Adaptive Policy for Expert Intervention in Barrett's Video Segmentation / 了解注释错误传播并学习巴雷特视频分割中专家干预的自适应策略

**Date**: 2026-02-25 | **arXiv**: [2602.21855v1](http://arxiv.org/abs/2602.21855v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21855v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Accurate annotation of endoscopic videos is essential yet time-consuming, particularly for challenging datasets such as dysplasia in Barrett's esophagus, where the affected regions are irregular and lack clear boundaries. Semi-automatic tools like Segment Anything Model 2 (SAM2) can ease this process by propagating annotations across frames, but small errors often accumulate and reduce accuracy, requiring expert review and correction. To address this, we systematically study how annotation errors propagate across different prompt types, namely masks, boxes, and points, and propose Learning-to-Re-Prompt (L2RP), a cost-aware framework that learns when and where to seek expert input. By tuning a human-cost parameter, our method balances annotation effort and segmentation accuracy. Experiments on a private Barrett's dysplasia dataset and the public SUN-SEG benchmark demonstrate improved temporal consistency and superior performance over baseline strategies.

内窥镜视频的准确注释至关重要但又耗时，特别是对于具有挑战性的数据集，例如巴雷特食管的发育不良，其中受影响的区域不规则且缺乏清晰的边界。 Segment Anything Model 2 (SAM2) 等半自动工具可以通过跨帧传播注释来简化此过程，但小错误常常会累积并降低准确性，需要专家审查和纠正。为了解决这个问题，我们系统地研究了注释错误如何在不同的提示类型（即掩码、框和点）之间传播，并提出了学习重新提示（L2RP），这是一种成本感知框架，可以学习何时何地寻求专家输入。通过调整人力成本参数，我们的方法平衡了注释工作和分割准确性。在私人 Barrett 发育不良数据集和公共 SUN-SEG 基准上进行的实验表明，与基线策略相比，时间一致性得到了改善，性能也更优越。

</details>

---

## 4. UniVBench: Towards Unified Evaluation for Video Foundation Models / UniVBench：迈向视频基础模型的统一评估

**Date**: 2026-02-25 | **arXiv**: [2602.21835v1](http://arxiv.org/abs/2602.21835v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21835v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Video foundation models aim to integrate video understanding, generation, editing, and instruction following within a single framework, making them a central direction for next-generation multimodal systems. However, existing evaluation benchmarks remain fragmented and limited in scope, as they each target a single task, rely on task-specific metrics, and typically use short or simple video clips. As a result, they do not capture the unified capabilities that these models are designed to deliver. To address this gap, we introduce UniVBench, a benchmark purpose-built for evaluating video foundation models across four core abilities: video understanding, video generation, video editing, and a newly proposed task, video reconstruction, which assesses how faithfully a model can reproduce video content it has encountered. Our benchmark substantially expands the complexity of evaluation by incorporating 200 high-quality, diverse and multi-shot videos, each paired with detailed captions, multi-format editing instructions, and reference images. All videos are human-created and carefully validated, offering richer cinematic information than prior benchmarks. In addition, we develop a unified agentic evaluation system (UniV-Eval) that standardizes prompting, instruction parsing, and scoring across all tasks, enabling fair, scalable, and reproducible comparisons of unified video models. By grounding evaluation in instruction-based multi-shot video tasks, UniVBench provides the first framework for measuring the integrated capabilities that video foundation models aim to achieve. Extensive human annotations ensure our evaluation aligns with human judgment, enabling rigorous assessment and accelerating progress toward robust video intelligence.

视频基础模型旨在将视频理解、生成、编辑和指令跟踪集成在一个框架内，使其成为下一代多模态系统的中心方向。然而，现有的评估基准仍然分散且范围有限，因为它们每个都针对单个任务，依赖于特定于任务的指标，并且通常使用短或简单的视频剪辑。因此，它们无法捕获这些模型旨在提供的统一功能。为了解决这一差距，我们引入了 UniVBench，这是一个专门为评估视频基础模型的四个核心能力而构建的基准：视频理解、视频生成、视频编辑，以及新提出的任务视频重建，该任务评估模型如何忠实地再现其遇到的视频内容。我们的基准测试通过纳入 200 个高质量、多样化的多镜头视频，每个视频都配有详细的标题、多格式编辑说明和参考图像，极大地扩展了评估的复杂性。所有视频均由人工创作并经过仔细验证，提供比之前的基准更丰富的电影信息。此外，我们开发了一个统一的代理评估系统（UniV-Eval），该系统标准化了所有任务的提示、指令解析和评分，从而实现了统一视频模型的公平、可扩展和可重复的比较。通过在基于指令的多镜头视频任务中进行基础评估，UniVBench 提供了第一个用于测量视频基础模型旨在实现的集成功能的框架。广泛的人工注释确保我们的评估与人类判断一致，从而实现严格的评估并加速实现强大的视频智能。

</details>

---

## 5. SkyReels-V4: Multi-modal Video-Audio Generation, Inpainting and Editing model / SkyReels-V4：多模式视频音频生成、修复和编辑模型

**Date**: 2026-02-25 | **arXiv**: [2602.21818v1](http://arxiv.org/abs/2602.21818v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21818v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

SkyReels V4 is a unified multi modal video foundation model for joint video audio generation, inpainting, and editing. The model adopts a dual stream Multimodal Diffusion Transformer (MMDiT) architecture, where one branch synthesizes video and the other generates temporally aligned audio, while sharing a powerful text encoder based on the Multimodal Large Language Models (MMLM). SkyReels V4 accepts rich multi modal instructions, including text, images, video clips, masks, and audio references. By combining the MMLMs multi modal instruction following capability with in context learning in the video branch MMDiT, the model can inject fine grained visual guidance under complex conditioning, while the audio branch MMDiT simultaneously leverages audio references to guide sound generation. On the video side, we adopt a channel concatenation formulation that unifies a wide range of inpainting style tasks, such as image to video, video extension, and video editing under a single interface, and naturally extends to vision referenced inpainting and editing via multi modal prompts. SkyReels V4 supports up to 1080p resolution, 32 FPS, and 15 second duration, enabling high fidelity, multi shot, cinema level video generation with synchronized audio. To make such high resolution, long-duration generation computationally feasible, we introduce an efficiency strategy: Joint generation of low resolution full sequences and high-resolution keyframes, followed by dedicated super-resolution and frame interpolation models. To our knowledge, SkyReels V4 is the first video foundation model that simultaneously supports multi-modal input, joint video audio generation, and a unified treatment of generation, inpainting, and editing, while maintaining strong efficiency and quality at cinematic resolutions and durations.

SkyReels V4 是一个统一的多模态视频基础模型，用于联合视频音频生成、修复和编辑。该模型采用双流多模态扩散变压器（MMDiT）架构，其中一个分支合成视频，另一个分支生成时间对齐的音频，同时共享基于多模态大语言模型（MMLM）的强大文本编码器。 SkyReels V4 接受丰富的多模式指令，包括文本、图像、视频剪辑、蒙版和音频参考。通过将 MMLM 多模态指令跟随功能与视频分支 MMDiT 中的上下文学习相结合，该模型可以在复杂条件下注入细粒度的视觉指导，而音频分支 MMDiT 同时利用音频参考来指导声音生成。在视频方面，我们采用通道串联公式，将图像到视频、视频扩展和视频编辑等多种修复风格任务统一在一个界面下，并通过多模式提示自然扩展到视觉参考修复和编辑。 SkyReels V4 支持高达 1080p 的分辨率、32 FPS 和 15 秒的持续时间，可生成具有同步音频的高保真、多镜头、影院级视频。为了使这种高分辨率、长时间的生成在计算上可行，我们引入了一种效率策略：联合生成低分辨率全序列和高分辨率关键帧，然后是专用的超分辨率和帧插值模型。据我们所知，SkyReels V4是第一个同时支持多模态输入、联合视频音频生成以及生成、修复和编辑统一处理的视频基础模型，同时在电影分辨率和时长上保持强大的效率和质量。

</details>

---

## 6. MultiAnimate: Pose-Guided Image Animation Made Extensible / MultiAnimate：可扩展的姿势引导图像动画

**Date**: 2026-02-25 | **arXiv**: [2602.21581v1](http://arxiv.org/abs/2602.21581v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21581v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Pose-guided human image animation aims to synthesize realistic videos of a reference character driven by a sequence of poses. While diffusion-based methods have achieved remarkable success, most existing approaches are limited to single-character animation. We observe that naively extending these methods to multi-character scenarios often leads to identity confusion and implausible occlusions between characters. To address these challenges, in this paper, we propose an extensible multi-character image animation framework built upon modern Diffusion Transformers (DiTs) for video generation. At its core, our framework introduces two novel components-Identifier Assigner and Identifier Adapter - which collaboratively capture per-person positional cues and inter-person spatial relationships. This mask-driven scheme, along with a scalable training strategy, not only enhances flexibility but also enables generalization to scenarios with more characters than those seen during training. Remarkably, trained on only a two-character dataset, our model generalizes to multi-character animation while maintaining compatibility with single-character cases. Extensive experiments demonstrate that our approach achieves state-of-the-art performance in multi-character image animation, surpassing existing diffusion-based baselines.

姿势引导的人体图像动画旨在合成由一系列姿势驱动的参考角色的逼真视频。虽然基于扩散的方法取得了显着的成功，但大多数现有方法仅限于单角色动画。我们观察到，天真地将这些方法扩展到多角色场景通常会导致角色之间的身份混乱和令人难以置信的遮挡。为了解决这些挑战，在本文中，我们提出了一种基于现代扩散变压器（DiT）的可扩展多字符图像动画框架，用于视频生成。我们的框架的核心引入了两个新颖的组件——标识符分配器和标识符适配器——它们协作捕获每个人的位置线索和人与人之间的空间关系。这种掩码驱动的方案以及可扩展的训练策略不仅增强了灵活性，而且还能够泛化到比训练期间看到的字符更多的场景。值得注意的是，我们的模型仅在两个字符数据集上进行训练，可推广到多字符动画，同时保持与单字符情况的兼容性。大量的实验表明，我们的方法在多字符图像动画中实现了最先进的性能，超越了现有的基于扩散的基线。

</details>

---

## 7. Exploring Vision-Language Models for Open-Vocabulary Zero-Shot Action Segmentation / 探索开放词汇零样本动作分割的视觉语言模型

**Date**: 2026-02-24 | **arXiv**: [2602.21406v1](http://arxiv.org/abs/2602.21406v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21406v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Temporal Action Segmentation (TAS) requires dividing videos into action segments, yet the vast space of activities and alternative breakdowns makes collecting comprehensive datasets infeasible. Existing methods remain limited to closed vocabularies and fixed label sets. In this work, we explore the largely unexplored problem of Open-Vocabulary Zero-Shot Temporal Action Segmentation (OVTAS) by leveraging the strong zero-shot capabilities of Vision-Language Models (VLMs). We introduce a training-free pipeline that follows a segmentation-by-classification design: Frame-Action Embedding Similarity (FAES) matches video frames to candidate action labels, and Similarity-Matrix Temporal Segmentation (SMTS) enforces temporal consistency. Beyond proposing OVTAS, we present a systematic study across 14 diverse VLMs, providing the first broad analysis of their suitability for open-vocabulary action segmentation. Experiments on standard benchmarks show that OVTAS achieves strong results without task-specific supervision, underscoring the potential of VLMs for structured temporal understanding.

时间动作分割（TAS）需要将视频划分为动作片段，但巨大的活动空间和替代细分使得收集全面的数据集变得不可行。现有方法仍然仅限于封闭词汇表和固定标签集。在这项工作中，我们通过利用视觉语言模型（VLM）强大的零样本能力来探索开放词汇零样本时间动作分割（OVTAS）的很大程度上未被探索的问题。我们引入了一种遵循按分类分割设计的免训练管道：帧动作嵌入相似性（FAES）将视频帧与候选动作标签相匹配，相似性矩阵时间分割（SMTS）强制时间一致性。除了提出 OVTAS 之外，我们还对 14 个不同的 VLM 进行了系统研究，首次对其开放词汇动作分割的适用性进行了广泛分析。标准基准测试的实验表明，OVTAS 在没有特定于任务的监督的情况下取得了很好的结果，强调了 VLM 在结构化时间理解方面的潜力。

</details>

---

## 8. Towards Controllable Video Synthesis of Routine and Rare OR Events / 实现常规和罕见手术事件的可控视频合成

**Date**: 2026-02-24 | **arXiv**: [2602.21365v1](http://arxiv.org/abs/2602.21365v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21365v1)

**Categories**: cs.CV, cs.AI, cs.LG, eess.IV

<details><summary><b>Abstract / 摘要</b></summary>

Purpose: Curating large-scale datasets of operating room (OR) workflow, encompassing rare, safety-critical, or atypical events, remains operationally and ethically challenging. This data bottleneck complicates the development of ambient intelligence for detecting, understanding, and mitigating rare or safety-critical events in the OR.   Methods: This work presents an OR video diffusion framework that enables controlled synthesis of rare and safety-critical events. The framework integrates a geometric abstraction module, a conditioning module, and a fine-tuned diffusion model to first transform OR scenes into abstract geometric representations, then condition the synthesis process, and finally generate realistic OR event videos. Using this framework, we also curate a synthetic dataset to train and validate AI models for detecting near-misses of sterile-field violations.   Results: In synthesizing routine OR events, our method outperforms off-the-shelf video diffusion baselines, achieving lower FVD/LPIPS and higher SSIM/PSNR in both in- and out-of-domain datasets. Through qualitative results, we illustrate its ability for controlled video synthesis of counterfactual events. An AI model trained and validated on the generated synthetic data achieved a RECALL of 70.13% in detecting near safety-critical events. Finally, we conduct an ablation study to quantify performance gains from key design choices.   Conclusion: Our solution enables controlled synthesis of routine and rare OR events from abstract geometric representations. Beyond demonstrating its capability to generate rare and safety-critical scenarios, we show its potential to support the development of ambient intelligence models.

目的：整理包含罕见、安全关键或非典型事件的手术室 (OR) 工作流程的大规模数据集，在操作和道德上仍然具有挑战性。这一数据瓶颈使得用于检测、理解和缓解手术室中罕见或安全关键事件的环境智能的开发变得复杂。   方法：这项工作提出了一个 OR 视频扩散框架，可以控制罕见和安全关键事件的合成。该框架集成了几何抽象模块、调节模块和微调扩散模型，首先将 OR 场景转换为抽象几何表示，然后调节合成过程，最后生成逼真的 OR 事件视频。使用这个框架，我们还整理了一个合成数据集来训练和验证人工智能模型，以检测无菌区违规事件的险情。   结果：在合成常规 OR 事件时，我们的方法优于现成的视频扩散基线，在域内和域外数据集中实现了较低的 FVD/LPIPS 和较高的 SSIM/PSNR。通过定性结果，我们说明了其对反事实事件进行受控视频合成的能力。根据生成的合成数据进行训练和验证的 AI 模型在检测临近安全关键事件时实现了 70.13% 的召回率。最后，我们进行了一项消融研究，以量化关键设计选择带来的性能增益。   结论：我们的解决方案能够从抽象几何表示中控制合成常规和罕见的 OR 事件。除了展示其生成罕见和安全关键场景的能力之外，我们还展示了其支持环境智能模型开发的潜力。

</details>

---

## 9. HorizonForge: Driving Scene Editing with Any Trajectories and Any Vehicles / Horizo​​nForge：使用任何轨迹和任何车辆进行驾驶场景编辑

**Date**: 2026-02-24 | **arXiv**: [2602.21333v1](http://arxiv.org/abs/2602.21333v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21333v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Controllable driving scene generation is critical for realistic and scalable autonomous driving simulation, yet existing approaches struggle to jointly achieve photorealism and precise control. We introduce HorizonForge, a unified framework that reconstructs scenes as editable Gaussian Splats and Meshes, enabling fine-grained 3D manipulation and language-driven vehicle insertion. Edits are rendered through a noise-aware video diffusion process that enforces spatial and temporal consistency, producing diverse scene variations in a single feed-forward pass without per-trajectory optimization. To standardize evaluation, we further propose HorizonSuite, a comprehensive benchmark spanning ego- and agent-level editing tasks such as trajectory modifications and object manipulation. Extensive experiments show that Gaussian-Mesh representation delivers substantially higher fidelity than alternative 3D representations, and that temporal priors from video diffusion are essential for coherent synthesis. Combining these findings, HorizonForge establishes a simple yet powerful paradigm for photorealistic, controllable driving simulation, achieving an 83.4% user-preference gain and a 25.19% FID improvement over the second best state-of-the-art method. Project page: https://horizonforge.github.io/ .

可控驾驶场景生成对于真实且可扩展的自动驾驶模拟至关重要，但现有方法很难同时实现照片真实感和精确控制。我们推出了 Horizo​​nForge，这是一个统一的框架，可将场景重建为可编辑的高斯图和网格，从而实现细粒度的 3D 操作和语言驱动的车辆插入。编辑是通过噪声感知视频扩散过程进行渲染的，该过程强制执行空间和时间一致性，在单个前馈通道中产生不同的场景变化，而无需每个轨迹优化。为了标准化评估，我们进一步提出了 Horizo​​nSuite，这是一个涵盖自我和代理级别编辑任务（例如轨迹修改和对象操作）的综合基准。大量实验表明，高斯网格表示比其他 3D 表示具有更高的保真度，并且视频扩散的时间先验对于相干合成至关重要。结合这些发现，Horizo​​nForge 建立了一个简单而强大的范例，用于逼真、可控的驾驶模拟，与第二最佳的最先进方法相比，实现了 83.4% 的用户偏好增益和 25.19% 的 FID 改进。项目页面：https://horizo​​nforge.github.io/。

</details>

---

## 10. Human Video Generation from a Single Image with 3D Pose and View Control / 通过 3D 姿势和视图控制从单个图像生成人体视频

**Date**: 2026-02-24 | **arXiv**: [2602.21188v1](http://arxiv.org/abs/2602.21188v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21188v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recent diffusion methods have made significant progress in generating videos from single images due to their powerful visual generation capabilities. However, challenges persist in image-to-video synthesis, particularly in human video generation, where inferring view-consistent, motion-dependent clothing wrinkles from a single image remains a formidable problem. In this paper, we present Human Video Generation in 4D (HVG), a latent video diffusion model capable of generating high-quality, multi-view, spatiotemporally coherent human videos from a single image with 3D pose and view control. HVG achieves this through three key designs: (i) Articulated Pose Modulation, which captures the anatomical relationships of 3D joints via a novel dual-dimensional bone map and resolves self-occlusions across views by introducing 3D information; (ii) View and Temporal Alignment, which ensures multi-view consistency and alignment between a reference image and pose sequences for frame-to-frame stability; and (iii) Progressive Spatio-Temporal Sampling with temporal alignment to maintain smooth transitions in long multi-view animations. Extensive experiments on image-to-video tasks demonstrate that HVG outperforms existing methods in generating high-quality 4D human videos from diverse human images and pose inputs.

最近的扩散方法由于其强大的视觉生成能力，在从单个图像生成视频方面取得了重大进展。然而，图像到视频的合成仍然存在挑战，特别是在人类视频生成方面，从单个图像推断视图一致、运动相关的衣服皱纹仍然是一个艰巨的问题。在本文中，我们提出了 4D 人类视频生成 (HVG)，这是一种潜在视频扩散模型，能够从具有 3D 姿势和视图控制的单个图像生成高质量、多视图、时空连贯的人类视频。 HVG 通过三个关键设计实现了这一目标：(i) 关节姿势调制，通过新颖的二维骨图捕获 3D 关节的解剖关系，并通过引入 3D 信息解决跨视图的自遮挡问题； (ii) 视图和时间对齐，确保参考图像和姿势序列之间的多视图一致性和对齐，以实现帧到帧的稳定性； (iii) 渐进式时空采样与时间对齐，以保持长多视图动画中的平滑过渡。对图像到视频任务的大量实验表明，HVG 在从不同的人类图像和姿势输入生成高质量 4D 人类视频方面优于现有方法。

</details>

---

## 11. UDVideoQA: A Traffic Video Question Answering Dataset for Multi-Object Spatio-Temporal Reasoning in Urban Dynamics / UDVideoQA：用于城市动力学中多对象时空推理的交通视频问答数据集

**Date**: 2026-02-24 | **arXiv**: [2602.21137v1](http://arxiv.org/abs/2602.21137v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21137v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Understanding the complex, multi-agent dynamics of urban traffic remains a fundamental challenge for video language models. This paper introduces Urban Dynamics VideoQA, a benchmark dataset that captures the unscripted real-world behavior of dynamic urban scenes. UDVideoQA is curated from 16 hours of traffic footage recorded at multiple city intersections under diverse traffic, weather, and lighting conditions. It employs an event-driven dynamic blur technique to ensure privacy preservation without compromising scene fidelity. Using a unified annotation pipeline, the dataset contains 28K question-answer pairs generated across 8 hours of densely annotated video, averaging one question per second. Its taxonomy follows a hierarchical reasoning level, spanning basic understanding and attribution to event reasoning, reverse reasoning, and counterfactual inference, enabling systematic evaluation of both visual grounding and causal reasoning. Comprehensive experiments benchmark 10 SOTA VideoLMs on UDVideoQA and 8 models on a complementary video question generation benchmark. Results reveal a persistent perception-reasoning gap, showing models that excel in abstract inference often fail with fundamental visual grounding. While models like Gemini Pro achieve the highest zero-shot accuracy, fine-tuning the smaller Qwen2.5-VL 7B model on UDVideoQA bridges this gap, achieving performance comparable to proprietary systems. In VideoQGen, Gemini 2.5 Pro, and Qwen3 Max generate the most relevant and complex questions, though all models exhibit limited linguistic diversity, underscoring the need for human-centric evaluation. The UDVideoQA suite, including the dataset, annotation tools, and benchmarks for both VideoQA and VideoQGen, provides a foundation for advancing robust, privacy-aware, and real-world multimodal reasoning. UDVideoQA is available at https://ud-videoqa.github.io/UD-VideoQA/UD-VideoQA/.

了解城市交通复杂的多智能体动态仍然是视频语言模型的基本挑战。本文介绍了 Urban Dynamics VideoQA，这是一个基准数据集，可捕获动态城市场景的无脚本现实行为。 UDVideoQA 根据在不同交通、天气和照明条件下在多个城市十字路口录制的 16 小时交通录像进行整理。它采用事件驱动的动态模糊技术来确保隐私保护，同时又不影响场景保真度。使用统一的注释管道，该数据集包含在 8 小时的密集注释视频中生成的 28K 问答对，平均每秒一个问题。其分类遵循分层推理水平，涵盖对事件推理、逆向推理和反事实推理的基本理解和归因，从而能够对视觉基础和因果推理进行系统评估。综合实验在 UDVideoQA 上对 10 个 SOTA VideoLM 进行基准测试，在补充视频问题生成基准上对 8 个模型进行基准测试。结果揭示了持续存在的感知推理差距，表明擅长抽象推理的模型往往在基本视觉基础上失败。虽然 Gemini Pro 等模型实现了最高的零射击精度，但在 UDVideoQA 上微调较小的 Qwen2.5-VL 7B 模型弥补了这一差距，实现了与专有系统相当的性能。在 VideoQGen、Gemini 2.5 Pro 和 Qwen3 Max 中，尽管所有模型都表现出有限的语言多样性，但生成了最相关和最复杂的问题，这强调了以人为中心的评估的必要性。 UDVideoQA 套件包括数据集、注释工具以及 VideoQA 和 VideoQGen 的基准，为推进稳健、隐私意识和现实世界的多模态推理奠定了基础。 UDVideoQA 位于 https://ud-videoqa.github.io/UD-VideoQA/UD-VideoQA/。

</details>

---

## 12. VII: Visual Instruction Injection for Jailbreaking Image-to-Video Generation Models / VII：越狱图像到视频生成模型的视觉指令注入

**Date**: 2026-02-24 | **arXiv**: [2602.20999v1](http://arxiv.org/abs/2602.20999v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20999v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Image-to-Video (I2V) generation models, which condition video generation on reference images, have shown emerging visual instruction-following capability, allowing certain visual cues in reference images to act as implicit control signals for video generation. However, this capability also introduces a previously overlooked risk: adversaries may exploit visual instructions to inject malicious intent through the image modality. In this work, we uncover this risk by proposing Visual Instruction Injection (VII), a training-free and transferable jailbreaking framework that intentionally disguises the malicious intent of unsafe text prompts as benign visual instructions in the safe reference image. Specifically, VII coordinates a Malicious Intent Reprogramming module to distill malicious intent from unsafe text prompts while minimizing their static harmfulness, and a Visual Instruction Grounding module to ground the distilled intent onto a safe input image by rendering visual instructions that preserve semantic consistency with the original unsafe text prompt, thereby inducing harmful content during I2V generation. Empirically, our extensive experiments on four state-of-the-art commercial I2V models (Kling-v2.5-turbo, Gemini Veo-3.1, Seedance-1.5-pro, and PixVerse-V5) demonstrate that VII achieves Attack Success Rates of up to 83.5% while reducing Refusal Rates to near zero, significantly outperforming existing baselines.

图像到视频 (I2V) 生成模型在参考图像上调节视频生成，已显示出新兴的视觉指令跟踪功能，允许参考图像中的某些视觉提示充当视频生成的隐式控制信号。然而，这种功能也带来了一个以前被忽视的风险：对手可能会利用视觉指令通过图像模态注入恶意意图。在这项工作中，我们通过提出视觉指令注入（VII）来揭示这一风险，这是一种免训练且可转移的越狱框架，有意将不安全文本提示的恶意意图伪装成安全参考图像中的良性视觉指令。具体来说，VII 协调恶意意图重新编程模块，从不安全文本提示中提取恶意意图，同时最大限度地减少其静态危害性，并协调视觉指令接地模块，通过渲染与原始不安全文本提示保持语义一致性的视觉指令，将提取的意图接地到安全输入图像上，从而在 I2V 生成过程中引入有害内容。根据经验，我们对四种最先进的商业 I2V 模型（Kling-v2.5-turbo、Gemini Veo-3.1、Seedance-1.5-pro 和 PixVerse-V5）进行的广泛实验表明，VII 的攻击成功率高达 83.5%，同时将拒绝率降低到接近零，显着优于现有基线。

</details>

---

## 13. LongVideo-R1: Smart Navigation for Low-cost Long Video Understanding / LongVideo-R1：低成本长视频理解的智能导航

**Date**: 2026-02-24 | **arXiv**: [2602.20913v1](http://arxiv.org/abs/2602.20913v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20913v1)

**Categories**: cs.CV

**Code**: https://github.com/qiujihao19/LongVideo-R1

<details><summary><b>Abstract / 摘要</b></summary>

This paper addresses the critical and underexplored challenge of long video understanding with low computational budgets. We propose LongVideo-R1, an active, reasoning-equipped multimodal large language model (MLLM) agent designed for efficient video context navigation, avoiding the redundancy of exhaustive search. At the core of LongVideo-R1 lies a reasoning module that leverages high-level visual cues to infer the most informative video clip for subsequent processing. During inference, the agent initiates traversal from top-level visual summaries and iteratively refines its focus, immediately halting the exploration process upon acquiring sufficient knowledge to answer the query. To facilitate training, we first extract hierarchical video captions from CGBench, a video corpus with grounding annotations, and guide GPT-5 to generate 33K high-quality chain-of-thought-with-tool trajectories. The LongVideo-R1 agent is fine-tuned upon the Qwen-3-8B model through a two-stage paradigm: supervised fine-tuning (SFT) followed by reinforcement learning (RL), where RL employs a specifically designed reward function to maximize selective and efficient clip navigation. Experiments on multiple long video benchmarks validate the effectiveness of name, which enjoys superior tradeoff between QA accuracy and efficiency. All curated data and source code are provided in the supplementary material and will be made publicly available. Code and data are available at: https://github.com/qiujihao19/LongVideo-R1

本文解决了低计算预算下长视频理解的关键且尚未充分探索的挑战。我们提出了 LongVideo-R1，一种主动的、配备推理的多模态大语言模型（MLLM）代理，设计用于高效的视频上下文导航，避免详尽搜索的冗余。 LongVideo-R1 的核心是一个推理模块，它利用高级视觉线索来推断信息最丰富的视频剪辑，以供后续处理。在推理过程中，代理从顶级视觉摘要开始遍历，并迭代地细化其焦点，在获得足够的知识来回答查询后立即停止探索过程。为了便于训练，我们首先从带有基础注释的视频语料库 CGBench 中提取分层视频字幕，并引导 GPT-5 生成 33K 高质量的思想链工具轨迹。 LongVideo-R1 代理通过两阶段范式在 Qwen-3-8B 模型上进行微调：监督微调 (SFT)，然后是强化学习 (RL)，其中 RL 采用专门设计的奖励函数来最大限度地提高选择性和高效的剪辑导航。在多个长视频基准上进行的实验验证了 name 的有效性，它在 QA 准确性和效率之间享有卓越的权衡。所有精选数据和源代码均在补充材料中提供，并将公开发布。代码和数据可参见：https://github.com/qiujihao19/LongVideo-R1

</details>

---

## 14. PyVision-RL: Forging Open Agentic Vision Models via RL / PyVision-RL：通过 RL 打造开放代理视觉模型

**Date**: 2026-02-24 | **arXiv**: [2602.20739v1](http://arxiv.org/abs/2602.20739v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20739v1)

**Categories**: cs.AI, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Reinforcement learning for agentic multimodal models often suffers from interaction collapse, where models learn to reduce tool usage and multi-turn reasoning, limiting the benefits of agentic behavior. We introduce PyVision-RL, a reinforcement learning framework for open-weight multimodal models that stabilizes training and sustains interaction. Our approach combines an oversampling-filtering-ranking rollout strategy with an accumulative tool reward to prevent collapse and encourage multi-turn tool use. Using a unified training pipeline, we develop PyVision-Image and PyVision-Video for image and video understanding. For video reasoning, PyVision-Video employs on-demand context construction, selectively sampling task-relevant frames during reasoning to significantly reduce visual token usage. Experiments show strong performance and improved efficiency, demonstrating that sustained interaction and on-demand visual processing are critical for scalable multimodal agents.

代理多模态模型的强化学习经常会遇到交互崩溃的问题，其中模型学习减少工具使用和多轮推理，从而限制了代理行为的好处。我们引入了 PyVision-RL，这是一种用于开放权重多模态模型的强化学习框架，可以稳定训练并维持交互。我们的方法将过采样-过滤-排名推出策略与累积工具奖励相结合，以防止崩溃并鼓励多回合工具的使用。使用统一的训练管道，我们开发了 PyVision-Image 和 PyVision-Video 用于图像和视频理解。对于视频推理，PyVision-Video 采用按需上下文构建，在推理过程中选择性地采样与任务相关的帧，以显着减少视觉标记的使用。实验显示出强大的性能和更高的效率，证明持续交互和按需视觉处理对于可扩展的多模式代理至关重要。

</details>

---

## 15. RAYNOVA: Scale-Temporal Autoregressive World Modeling in Ray Space / RAYNOVA：射线空间中的尺度时间自回归世界建模

**Date**: 2026-02-24 | **arXiv**: [2602.20685v2](http://arxiv.org/abs/2602.20685v2) | **PDF**: [Link](http://arxiv.org/pdf/2602.20685v2)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

World foundation models aim to simulate the evolution of the real world with physically plausible behavior. Unlike prior methods that handle spatial and temporal correlations separately, we propose RAYNOVA, a geometry-agonistic multiview world model for driving scenarios that employs a dual-causal autoregressive framework. It follows both scale-wise and temporal topological orders in the autoregressive process, and leverages global attention for unified 4D spatio-temporal reasoning. Different from existing works that impose strong 3D geometric priors, RAYNOVA constructs an isotropic spatio-temporal representation across views, frames, and scales based on relative Plücker-ray positional encoding, enabling robust generalization to diverse camera setups and ego motions. We further introduce a recurrent training paradigm to alleviate distribution drift in long-horizon video generation. RAYNOVA achieves state-of-the-art multi-view video generation results on nuScenes, while offering higher throughput and strong controllability under diverse input conditions, generalizing to novel views and camera configurations without explicit 3D scene representation. Our code will be released at https://raynova-ai.github.io/.

世界基础模型旨在通过物理上合理的行为来模拟现实世界的演化。与之前分别处理空间和时间相关性的方法不同，我们提出了 RAYNOVA，这是一种采用双因果自回归框架的驾驶场景的几何对抗多视图世界模型。它在自回归过程中遵循尺度和时间拓扑顺序，并利用全局注意力进行统一的 4D 时空推理。与强加强 3D 几何先验的现有作品不同，RAYNOVA 基于相对 Plücker 射线位置编码构建了跨视图、帧和尺度的各向同性时空表示，从而能够对不同的相机设置和自我运动进行稳健的泛化。我们进一步引入了一种循环训练范例，以减轻长视野视频生成中的分布漂移。 RAYNOVA 在 nuScenes 上实现了最先进的多视图视频生成结果，同时在不同的输入条件下提供更高的吞吐量和强大的可控性，推广到新颖的视图和相机配置，而无需明确的 3D 场景表示。我们的代码将在 https://raynova-ai.github.io/ 发布。

</details>

---

## 16. GA-Drive: Geometry-Appearance Decoupled Modeling for Free-viewpoint Driving Scene Generatio / GA-Drive：用于自由视点驾驶场景生成的几何外观解耦建模

**Date**: 2026-02-24 | **arXiv**: [2602.20673v1](http://arxiv.org/abs/2602.20673v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20673v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

A free-viewpoint, editable, and high-fidelity driving simulator is crucial for training and evaluating end-to-end autonomous driving systems. In this paper, we present GA-Drive, a novel simulation framework capable of generating camera views along user-specified novel trajectories through Geometry-Appearance Decoupling and Diffusion-Based Generation. Given a set of images captured along a recorded trajectory and the corresponding scene geometry, GA-Drive synthesizes novel pseudo-views using geometry information. These pseudo-views are then transformed into photorealistic views using a trained video diffusion model. In this way, we decouple the geometry and appearance of scenes. An advantage of such decoupling is its support for appearance editing via state-of-the-art video-to-video editing techniques, while preserving the underlying geometry, enabling consistent edits across both original and novel trajectories. Extensive experiments demonstrate that GA-Drive substantially outperforms existing methods in terms of NTA-IoU, NTL-IoU, and FID scores.

自由视角、可编辑且高保真的驾驶模拟器对于训练和评估端到端自动驾驶系统至关重要。在本文中，我们提出了 GA-Drive，这是一种新颖的模拟框架，能够通过几何外观解耦和基于扩散的生成沿着用户指定的新颖轨迹生成相机视图。给定沿着记录轨迹捕获的一组图像和相应的场景几何形状，GA-Drive 使用几何信息合成新颖的伪视图。然后使用经过训练的视频扩散模型将这些伪视图转换为逼真的视图。通过这种方式，我们将场景的几何形状和外观解耦。这种解耦的一个优点是它支持通过最先进的视频到视频编辑技术进行外观编辑，同时保留底层几何形状，从而能够在原始和新颖的轨迹上进行一致的编辑。大量实验表明，GA-Drive 在 NTA-IoU、NTL-IoU 和 FID 分数方面明显优于现有方法。

</details>

---

## 17. AnimeAgent: Is the Multi-Agent via Image-to-Video models a Good Disney Storytelling Artist? / AnimeAgent：通过图像到视频模型的多代理是优秀的迪士尼讲故事艺术家吗？

**Date**: 2026-02-24 | **arXiv**: [2602.20664v1](http://arxiv.org/abs/2602.20664v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20664v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Custom Storyboard Generation (CSG) aims to produce high-quality, multi-character consistent storytelling. Current approaches based on static diffusion models, whether used in a one-shot manner or within multi-agent frameworks, face three key limitations: (1) Static models lack dynamic expressiveness and often resort to "copy-paste" pattern. (2) One-shot inference cannot iteratively correct missing attributes or poor prompt adherence. (3) Multi-agents rely on non-robust evaluators, ill-suited for assessing stylized, non-realistic animation. To address these, we propose AnimeAgent, the first Image-to-Video (I2V)-based multi-agent framework for CSG. Inspired by Disney's "Combination of Straight Ahead and Pose to Pose" workflow, AnimeAgent leverages I2V's implicit motion prior to enhance consistency and expressiveness, while a mixed subjective-objective reviewer enables reliable iterative refinement. We also collect a human-annotated CSG benchmark with ground-truth. Experiments show AnimeAgent achieves SOTA performance in consistency, prompt fidelity, and stylization.

自定义故事板生成 (CSG) 旨在制作高质量、多角色一致的故事讲述。当前基于静态扩散模型的方法，无论是一次性使用还是在多智能体框架内使用，都面临三个关键限制：（1）静态模型缺乏动态表达能力，并且经常采用“复制粘贴”模式。 (2) 一次性推理无法迭代地纠正缺失的属性或提示依从性差。 (3) 多智能体依赖于非鲁棒评估器，不适合评估风格化、非现实的动画。为了解决这些问题，我们提出了 AnimeAgent，这是第一个基于图像到视频 (I2V) 的 CSG 多代理框架。受迪士尼“直线前进和姿势到姿势的组合”工作流程的启发，AnimeAgent 在增强一致性和表现力之前利用 I2V 的隐式运动，而混合主客观审阅器可实现可靠的迭代细化。我们还收集了具有真实性的人工注释 CSG 基准。实验表明 AnimeAgent 在一致性、提示保真度和风格化方面实现了 SOTA 性能。

</details>

---

## 18. LESA: Learnable Stage-Aware Predictors for Diffusion Model Acceleration / LESA：用于扩散模型加速的可学习阶段感知预测器

**Date**: 2026-02-24 | **arXiv**: [2602.20497v1](http://arxiv.org/abs/2602.20497v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20497v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion models have achieved remarkable success in image and video generation tasks. However, the high computational demands of Diffusion Transformers (DiTs) pose a significant challenge to their practical deployment. While feature caching is a promising acceleration strategy, existing methods based on simple reusing or training-free forecasting struggle to adapt to the complex, stage-dependent dynamics of the diffusion process, often resulting in quality degradation and failing to maintain consistency with the standard denoising process. To address this, we propose a LEarnable Stage-Aware (LESA) predictor framework based on two-stage training. Our approach leverages a Kolmogorov-Arnold Network (KAN) to accurately learn temporal feature mappings from data. We further introduce a multi-stage, multi-expert architecture that assigns specialized predictors to different noise-level stages, enabling more precise and robust feature forecasting. Extensive experiments show our method achieves significant acceleration while maintaining high-fidelity generation. Experiments demonstrate 5.00x acceleration on FLUX.1-dev with minimal quality degradation (1.0% drop), 6.25x speedup on Qwen-Image with a 20.2% quality improvement over the previous SOTA (TaylorSeer), and 5.00x acceleration on HunyuanVideo with a 24.7% PSNR improvement over TaylorSeer. State-of-the-art performance on both text-to-image and text-to-video synthesis validates the effectiveness and generalization capability of our training-based framework across different models. Our code is included in the supplementary materials and will be released on GitHub.

扩散模型在图像和视频生成任务中取得了显着的成功。然而，扩散变压器（DiT）的高计算要求对其实际部署提出了重大挑战。虽然特征缓存是一种很有前途的加速策略，但基于简单重用或免训练预测的现有方法很难适应扩散过程的复杂、阶段相关的动态，通常会导致质量下降，并且无法保持与标准去噪过程的一致性。为了解决这个问题，我们提出了一个基于两阶段训练的 LEarnable Stage-Aware (LESA) 预测器框架。我们的方法利用柯尔莫哥洛夫-阿诺德网络（KAN）来准确地从数据中学习时间特征映射。我们进一步引入了多阶段、多专家架构，将专门的预测器分配给不同的噪声级别阶段，从而实现更精确和稳健的特征预测。大量的实验表明，我们的方法在保持高保真生成的同时实现了显着的加速。实验表明，FLUX.1-dev 上的加速为 5.00 倍，质量下降最小（下降 1.0%）；Qwen-Image 上的加速为 6.25 倍，与之前的 SOTA（TaylorSeer）相比，质量提高了 20.2%；HunyuanVideo 上的加速为 5.00 倍，PSNR 比 TaylorSeer 提高了 24.7%。文本到图像和文本到视频合成的最先进性能验证了我们基于训练的框架在不同模型上的有效性和泛化能力。我们的代码包含在补充材料中，并将在 GitHub 上发布。

</details>

---

## 19. NovaPlan: Zero-Shot Long-Horizon Manipulation via Closed-Loop Video Language Planning / NovaPlan：通过闭环视频语言规划进行零射击长视野操作

**Date**: 2026-02-23 | **arXiv**: [2602.20119v1](http://arxiv.org/abs/2602.20119v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20119v1)

**Categories**: cs.RO, cs.AI, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Solving long-horizon tasks requires robots to integrate high-level semantic reasoning with low-level physical interaction. While vision-language models (VLMs) and video generation models can decompose tasks and imagine outcomes, they often lack the physical grounding necessary for real-world execution. We introduce NovaPlan, a hierarchical framework that unifies closed-loop VLM and video planning with geometrically grounded robot execution for zero-shot long-horizon manipulation. At the high level, a VLM planner decomposes tasks into sub-goals and monitors robot execution in a closed loop, enabling the system to recover from single-step failures through autonomous re-planning. To compute low-level robot actions, we extract and utilize both task-relevant object keypoints and human hand poses as kinematic priors from the generated videos, and employ a switching mechanism to choose the better one as a reference for robot actions, maintaining stable execution even under heavy occlusion or depth inaccuracy. We demonstrate the effectiveness of NovaPlan on three long-horizon tasks and the Functional Manipulation Benchmark (FMB). Our results show that NovaPlan can perform complex assembly tasks and exhibit dexterous error recovery behaviors without any prior demonstrations or training. Project page: https://nova-plan.github.io/

解决长期任务需要机器人将高级语义推理与低级物理交互相结合。虽然视觉语言模型 (VLM) 和视频生成模型可以分解任务并想象结果，但它们通常缺乏现实世界执行所需的物理基础。我们引入了 NovaPlan，这是一个分层框架，它将闭环 VLM 和视频规划与几何接地机器人执行相结合，以实现零样本长视野操作。在高层，VLM 规划器将任务分解为子目标，并在闭环中监控机器人的执行情况，使系统能够通过自主重新规划从单步故障中恢复。为了计算低级机器人动作，我们从生成的视频中提取并利用与任务相关的对象关键点和人手姿势作为运动学先验，并采用切换机制来选择更好的动作作为机器人动作的参考，即使在严重遮挡或深度不准确的情况下也能保持稳定的执行。我们展示了 NovaPlan 在三项长期任务和功能操作基准（FMB）上的有效性。我们的结果表明，NovaPlan 可以执行复杂的组装任务并表现出灵巧的错误恢复行为，而无需任何事先演示或培训。项目页面：https://nova-plan.github.io/

</details>

---



</details>

<details><summary><b>2026-02-24 (1 papers)</b></summary>

# arXiv World Model Papers - 2026-02-24

**Paper Count**: 1

---

## 1. K-Search: LLM Kernel Generation via Co-Evolving Intrinsic World Model / K-Search：通过共同进化的内在世界模型生成 LLM 内核

**Date**: 2026-02-22 | **arXiv**: [2602.19128v1](http://arxiv.org/abs/2602.19128v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.19128v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Optimizing GPU kernels is critical for efficient modern machine learning systems yet remains challenging due to the complex interplay of design factors and rapid hardware evolution. Existing automated approaches typically treat Large Language Models (LLMs) merely as stochastic code generators within heuristic-guided evolutionary loops. These methods often struggle with complex kernels requiring coordinated, multi-step structural transformations, as they lack explicit planning capabilities and frequently discard promising strategies due to inefficient or incorrect intermediate implementations. To address this, we propose Search via Co-Evolving World Model and build K-Search based on this method. By replacing static search heuristics with a co-evolving world model, our framework leverages LLMs' prior domain knowledge to guide the search, actively exploring the optimization space. This approach explicitly decouples high-level algorithmic planning from low-level program instantiation, enabling the system to navigate non-monotonic optimization paths while remaining resilient to temporary implementation defects. We evaluate K-Search on diverse, complex kernels from FlashInfer, including GQA, MLA, and MoE kernels. Our results show that K-Search significantly outperforms state-of-the-art evolutionary search methods, achieving an average 2.10x improvement and up to a 14.3x gain on complex MoE kernels. On the GPUMode TriMul task, K-Search achieves state-of-the-art performance on H100, reaching 1030us and surpassing both prior evolution and human-designed solutions.

优化 GPU 内核对于高效的现代机器学习系统至关重要，但由于设计因素和快速硬件发展的复杂相互作用，仍然具有挑战性。现有的自动化方法通常仅将大型语言模型（LLM）视为启发式引导的进化循环中的随机代码生成器。这些方法经常与需要协调、多步结构转换的复杂内核作斗争，因为它们缺乏明确的规划能力，并且经常由于低效或不正确的中间实现而放弃有希望的策略。为了解决这个问题，我们提出通过共同进化世界模型进行搜索，并基于该方法构建 K-Search。通过用共同进化的世界模型取代静态搜索启发式，我们的框架利用法学硕士的先验领域知识来指导搜索，积极探索优化空间。这种方法明确地将高级算法规划与低级程序实例化解耦，使系统能够导航非单调优化路径，同时保持对临时实现缺陷的弹性。我们在 FlashInfer 的各种复杂内核上评估 K-Search，包括 GQA、MLA 和 MoE 内核。我们的结果表明，K-Search 的性能显着优于最先进的进化搜索方法，在复杂的 MoE 内核上实现了平均 2.10 倍的改进和高达 14.3 倍的增益。在 GPUMode TriMul 任务中，K-Search 在 H100 上实现了最先进的性能，达到 1030us，超越了先前的进化和人类设计的解决方案。

</details>

---



</details>

<details><summary><b>2026-02-20 (2 papers)</b></summary>

# arXiv World Model Papers - 2026-02-20

**Paper Count**: 2

---

## 1. AI Gamestore: Scalable, Open-Ended Evaluation of Machine General Intelligence with Human Games / AI Gamestore：通过人类游戏对机器通用智能进行可扩展、开放式评估

**Date**: 2026-02-19 | **arXiv**: [2602.17594v1](http://arxiv.org/abs/2602.17594v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.17594v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Rigorously evaluating machine intelligence against the broad spectrum of human general intelligence has become increasingly important and challenging in this era of rapid technological advance. Conventional AI benchmarks typically assess only narrow capabilities in a limited range of human activity. Most are also static, quickly saturating as developers explicitly or implicitly optimize for them. We propose that a more promising way to evaluate human-like general intelligence in AI systems is through a particularly strong form of general game playing: studying how and how well they play and learn to play \textbf{all conceivable human games}, in comparison to human players with the same level of experience, time, or other resources. We define a "human game" to be a game designed by humans for humans, and argue for the evaluative suitability of this space of all such games people can imagine and enjoy -- the "Multiverse of Human Games". Taking a first step towards this vision, we introduce the AI GameStore, a scalable and open-ended platform that uses LLMs with humans-in-the-loop to synthesize new representative human games, by automatically sourcing and adapting standardized and containerized variants of game environments from popular human digital gaming platforms. As a proof of concept, we generated 100 such games based on the top charts of Apple App Store and Steam, and evaluated seven frontier vision-language models (VLMs) on short episodes of play. The best models achieved less than 10\% of the human average score on the majority of the games, and especially struggled with games that challenge world-model learning, memory and planning. We conclude with a set of next steps for building out the AI GameStore as a practical way to measure and drive progress toward human-like general intelligence in machines.

在这个技术快速进步的时代，根据广泛的人类通用智能严格评估机器智能变得越来越重要和具有挑战性。传统的人工智能基准通常仅评估有限范围的人类活动中的狭窄能力。大多数也是静态的，随着开发人员显式或隐式地优化它们，它们很快就会饱和。我们提出，评估人工智能系统中类人通用智能的一种更有前景的方法是通过一种特别强大的通用游戏玩法：与具有相同经验、时间或其他资源水平的人类玩家相比，研究它们如何玩、玩得如何以及学会玩\textbf{所有可以想象的人类游戏}。我们将“人类游戏”定义为由人类为人类设计的游戏，并论证了人们可以想象和享受的所有此类游戏空间的评估适用性——“人类游戏的多元宇宙”。为了实现这一愿景，我们迈出了第一步，我们推出了 AI GameStore，这是一个可扩展的开放式平台，它使用法学硕士和人类在环技术，通过自动从流行的人类数字游戏平台中获取和调整游戏环境的标准化和容器化变体，来合成新的代表性人类游戏。作为概念验证，我们根据 Apple App Store 和 Steam 的热门排行榜生成了 100 款此类游戏，并在短集游戏中评估了 7 个前沿视觉语言模型 (VLM)。最好的模型在大多数游戏中的得分都不到人类平均得分的 10%，尤其是在挑战世界模型学习、记忆和规划的游戏中表现不佳。最后，我们提出了一系列后续步骤，旨在构建 AI GameStore，作为衡量和推动机器类人通用智能进步的实用方法。

</details>

---

## 2. Continual learning and refinement of causal models through dynamic predicate invention / 通过动态谓词发明不断学习和完善因果模型

**Date**: 2026-02-19 | **arXiv**: [2602.17217v1](http://arxiv.org/abs/2602.17217v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.17217v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Efficiently navigating complex environments requires agents to internalize the underlying logic of their world, yet standard world modelling methods often struggle with sample inefficiency, lack of transparency, and poor scalability. We propose a framework for constructing symbolic causal world models entirely online by integrating continuous model learning and repair into the agent's decision loop, by leveraging the power of Meta-Interpretive Learning and predicate invention to find semantically meaningful and reusable abstractions, allowing an agent to construct a hierarchy of disentangled, high-quality concepts from its observations. We demonstrate that our lifted inference approach scales to domains with complex relational dynamics, where propositional methods suffer from combinatorial explosion, while achieving sample-efficiency orders of magnitude higher than the established PPO neural-network-based baseline.

有效地驾驭复杂的环境需要智能体将其世界的底层逻辑内化，但标准的世界建模方法常常面临样本效率低、缺乏透明度和可扩展性差的问题。我们提出了一个完全在线构建符号因果世界模型的框架，通过将连续模型学习和修复集成到代理的决策循环中，利用元解释学习和谓词发明的力量来找到语义上有意义和可重用的抽象，从而允许代理从其观察中构建一个解开的高质量概念的层次结构。我们证明，我们的提升推理方法可以扩展到具有复杂关系动态的领域，其中命题方法遭受组合爆炸，同时实现的样本效率数量级高于已建立的基于 PPO 神经网络的基线。

</details>

---



</details>

<details><summary><b>2026-02-19 (4 papers)</b></summary>

# arXiv World Model Papers - 2026-02-19

**Paper Count**: 4

---

## 1. Factored Latent Action World Models / 分解的潜在动作世界模型

**Date**: 2026-02-18 | **arXiv**: [2602.16229v1](http://arxiv.org/abs/2602.16229v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.16229v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Learning latent actions from action-free video has emerged as a powerful paradigm for scaling up controllable world model learning. Latent actions provide a natural interface for users to iteratively generate and manipulate videos. However, most existing approaches rely on monolithic inverse and forward dynamics models that learn a single latent action to control the entire scene, and therefore struggle in complex environments where multiple entities act simultaneously. This paper introduces Factored Latent Action Model (FLAM), a factored dynamics framework that decomposes the scene into independent factors, each inferring its own latent action and predicting its own next-step factor value. This factorized structure enables more accurate modeling of complex multi-entity dynamics and improves video generation quality in action-free video settings compared to monolithic models. Based on experiments on both simulation and real-world multi-entity datasets, we find that FLAM outperforms prior work in prediction accuracy and representation quality, and facilitates downstream policy learning, demonstrating the benefits of factorized latent action models.

从无动作视频中学习潜在动作已成为扩大可控世界模型学习的强大范例。潜在动作为用户迭代生成和操作视频提供了一个自然的界面。然而，大多数现有方法依赖于整体逆向和正向动力学模型，这些模型学习单个潜在动作来控制整个场景，因此在多个实体同时动作的复杂环境中陷入困境。本文介绍了因子式潜在动作模型（FLAM），这是一种因子式动力学框架，它将场景分解为独立的因素，每个因子都推断自己的潜在动作并预测自己的下一步因子值。与整体模型相比，这种分解结构可以更准确地对复杂的多实体动态进行建模，并提高无动作视频设置中的视频生成质量。基于模拟和现实世界多实体数据集的实验，我们发现 FLAM 在预测精度和表示质量方面优于先前的工作，并促进下游策略学习，展示了因子化潜在动作模型的好处。

</details>

---

## 2. Learning to unfold cloth: Scaling up world models to deformable object manipulation / 学习展开布料：将世界模型扩展到可变形对象操作

**Date**: 2026-02-18 | **arXiv**: [2602.16675v1](http://arxiv.org/abs/2602.16675v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.16675v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Learning to manipulate cloth is both a paradigmatic problem for robotic research and a problem of immediate relevance to a variety of applications ranging from assistive care to the service industry. The complex physics of the deformable object makes this problem of cloth manipulation nontrivial. In order to create a general manipulation strategy that addresses a variety of shapes, sizes, fold and wrinkle patterns, in addition to the usual problems of appearance variations, it becomes important to carefully consider model structure and their implications for generalisation performance. In this paper, we present an approach to in-air cloth manipulation that uses a variation of a recently proposed reinforcement learning architecture, DreamerV2. Our implementation modifies this architecture to utilise surface normals input, in addition to modiying the replay buffer and data augmentation procedures. Taken together these modifications represent an enhancement to the world model used by the robot, addressing the physical complexity of the object being manipulated by the robot. We present evaluations both in simulation and in a zero-shot deployment of the trained policies in a physical robot setup, performing in-air unfolding of a variety of different cloth types, demonstrating the generalisation benefits of our proposed architecture.

学习操纵布料既是机器人研究的一个典型问题，也是一个与从辅助护理到服务行业的各种应用直接相关的问题。可变形物体的复杂物理特性使得布料操纵的问题变得非常重要。为了创建解决各种形状、尺寸、折叠和皱纹图案的通用操作策略，除了外观变化的常见问题之外，仔细考虑模型结构及其对泛化性能的影响也变得很重要。在本文中，我们提出了一种空中布料操纵方法，该方法使用最近提出的强化学习架构 DreamerV2 的变体。除了修改重播缓冲区和数据增强程序之外，我们的实现还修改了该架构以利用表面法线输入。总的来说，这些修改代表了对机器人使用的世界模型的增强，解决了机器人操纵的物体的物理复杂性。我们在物理机器人设置中对经过训练的策略进行模拟和零次部署，执行各种不同布料类型的空中展开，展示了我们提出的架构的泛化优势。

</details>

---

## 3. World Model Failure Classification and Anomaly Detection for Autonomous Inspection / 用于自主检查的世界模型故障分类和异常检测

**Date**: 2026-02-18 | **arXiv**: [2602.16182v1](http://arxiv.org/abs/2602.16182v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.16182v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Autonomous inspection robots for monitoring industrial sites can reduce costs and risks associated with human-led inspection. However, accurate readings can be challenging due to occlusions, limited viewpoints, or unexpected environmental conditions. We propose a hybrid framework that combines supervised failure classification with anomaly detection, enabling classification of inspection tasks as a success, known failure, or anomaly (i.e., out-of-distribution) case. Our approach uses a world model backbone with compressed video inputs. This policy-agnostic, distribution-free framework determines classifications based on two decision functions set by conformal prediction (CP) thresholds before a human observer does. We evaluate the framework on gauge inspection feeds collected from office and industrial sites and demonstrate real-time deployment on a Boston Dynamics Spot. Experiments show over 90% accuracy in distinguishing between successes, failures, and OOD cases, with classifications occurring earlier than a human observer. These results highlight the potential for robust, anticipatory failure detection in autonomous inspection tasks or as a feedback signal for model training to assess and improve the quality of training data. Project website: https://autoinspection-classification.github.io

用于监控工业现场的自主检查机器人可以降低与人工检查相关的成本和风险。然而，由于遮挡、有限的视角或意外的环境条件，准确的读数可能具有挑战性。我们提出了一种混合框架，将监督故障分类与异常检测相结合，从而能够将检查任务分类为成功、已知故障或异常（即分布外）情况。我们的方法使用具有压缩视频输入的世界模型主干。这种与策略无关、与分布无关的框架先于人类观察者根据由共形预测 (CP) 阈值设置的两个决策函数来确定分类。我们评估从办公室和工业场所收集的仪表检查源的框架，并在 Boston Dynamics Spot 上演示实时部署。实验表明，区分成功、失败和 OOD 案例的准确率超过 90%，并且分类发生得比人类观察者更早。这些结果凸显了在自主检查任务中进行稳健的预期故障检测或作为模型训练的反馈信号以评估和提高训练数据质量的潜力。项目网站：https://autoinspection-classification.github.io

</details>

---

## 4. ODYN: An All-Shifted Non-Interior-Point Method for Quadratic Programming in Robotics and AI / ODYN：机器人和人工智能二次规划的全平移非内点方法

**Date**: 2026-02-17 | **arXiv**: [2602.16005v1](http://arxiv.org/abs/2602.16005v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.16005v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

We introduce ODYN, a novel all-shifted primal-dual non-interior-point quadratic programming (QP) solver designed to efficiently handle challenging dense and sparse QPs. ODYN combines all-shifted nonlinear complementarity problem (NCP) functions with proximal method of multipliers to robustly address ill-conditioned and degenerate problems, without requiring linear independence of the constraints. It exhibits strong warm-start performance and is well suited to both general-purpose optimization, and robotics and AI applications, including model-based control, estimation, and kernel-based learning methods. We provide an open-source implementation and benchmark ODYN on the Maros-Mészáros test set, demonstrating state-of-the-art convergence performance in small-to-high-scale problems. The results highlight ODYN's superior warm-starting capabilities, which are critical in sequential and real-time settings common in robotics and AI. These advantages are further demonstrated by deploying ODYN as the backend of an SQP-based predictive control framework (OdynSQP), as the implicitly differentiable optimization layer for deep learning (ODYNLayer), and the optimizer of a contact-dynamics simulation (ODYNSim).

我们推出 ODYN，这是一种新颖的全平移原对偶非内点二次规划 (QP) 求解器，旨在有效处理具有挑战性的密集和稀疏 QP。 ODYN 将全移位非线性互补问题 (NCP) 函数与乘法器的近端方法相结合，以稳健地解决病态和退化问题，而不需要约束的线性独立性。它具有强大的热启动性能，非常适合通用优化以及机器人和人工智能应用，包括基于模型的控制、估计和基于内核的学习方法。我们在 Maros-Mészáros 测试集上提供开源实现和基准 ODYN，展示了小规模到大规模问题中最先进的收敛性能。结果凸显了 ODYN 卓越的热启动能力，这对于机器人和人工智能中常见的顺序和实时设置至关重要。通过将 ODYN 部署为基于 SQP 的预测控制框架 (OdynSQP) 的后端、深度学习的隐式可微优化层 (ODYNLayer) 以及接触动力学模拟的优化器 (ODYNSim)，进一步证明了这些优势。

</details>

---



</details>

<details><summary><b>2026-02-18 (6 papers)</b></summary>

# arXiv World Model Papers - 2026-02-18

**Paper Count**: 6

---

## 1. VLM-DEWM: Dynamic External World Model for Verifiable and Resilient Vision-Language Planning in Manufacturing / VLM-DEWM：用于制造中可验证和弹性视觉语言规划的动态外部世界模型

**Date**: 2026-02-17 | **arXiv**: [2602.15549v1](http://arxiv.org/abs/2602.15549v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.15549v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Vision-language model (VLM) shows promise for high-level planning in smart manufacturing, yet their deployment in dynamic workcells faces two critical challenges: (1) stateless operation, they cannot persistently track out-of-view states, causing world-state drift; and (2) opaque reasoning, failures are difficult to diagnose, leading to costly blind retries. This paper presents VLM-DEWM, a cognitive architecture that decouples VLM reasoning from world-state management through a persistent, queryable Dynamic External World Model (DEWM). Each VLM decision is structured into an Externalizable Reasoning Trace (ERT), comprising action proposal, world belief, and causal assumption, which is validated against DEWM before execution. When failures occur, discrepancy analysis between predicted and observed states enables targeted recovery instead of global replanning. We evaluate VLM-DEWM on multi-station assembly, large-scale facility exploration, and real-robot recovery under induced failures. Compared to baseline memory-augmented VLM systems, VLM DEWM improves state-tracking accuracy from 56% to 93%, increases recovery success rate from below 5% to 95%, and significantly reduces computational overhead through structured memory. These results establish VLM-DEWM as a verifiable and resilient solution for long-horizon robotic operations in dynamic manufacturing environments.

视觉语言模型（VLM）显示了智能制造中高层规划的前景，但它们在动态工作单元中的部署面临着两个关键挑战：（1）无状态操作，它们无法持续跟踪视野外的状态，导致世界状态漂移； (2) 推理不透明，故障难以诊断，导致盲目重试成本高昂。本文提出了 VLM-DEWM，这是一种认知架构，通过持久的、可查询的动态外部世界模型 (DEWM) 将 VLM 推理与世界状态管理解耦。每个 VLM 决策都被构建为外部化推理跟踪 (ERT)，其中包括行动建议、世界信念和因果假设，并在执行前针对 DEWM 进行验证。当发生故障时，预测状态和观察状态之间的差异分析可以实现有针对性的恢复，而不是全局重新规划。我们评估了 VLM-DEWM 的多站装配、大规模设施探索以及诱发故障下的真实机器人恢复。与基线内存增强 VLM 系统相比，VLM DEWM 将状态跟踪精度从 56% 提高到 93%，将恢复成功率从 5% 以下提高到 95%，并通过结构化内存显着降低计算开销。这些结果使 VLM-DEWM 成为动态制造环境中长期机器人操作的可验证且有弹性的解决方案。

</details>

---

## 2. World-Model-Augmented Web Agents with Action Correction / 具有动作校正功能的世界模型增强网络代理

**Date**: 2026-02-17 | **arXiv**: [2602.15384v1](http://arxiv.org/abs/2602.15384v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.15384v1)

**Categories**: cs.AI, cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

Web agents based on large language models have demonstrated promising capability in automating web tasks. However, current web agents struggle to reason out sensible actions due to the limitations of predicting environment changes, and might not possess comprehensive awareness of execution risks, prematurely performing risky actions that cause losses and lead to task failure. To address these challenges, we propose WAC, a web agent that integrates model collaboration, consequence simulation, and feedback-driven action refinement. To overcome the cognitive isolation of individual models, we introduce a multi-agent collaboration process that enables an action model to consult a world model as a web-environment expert for strategic guidance; the action model then grounds these suggestions into executable actions, leveraging prior knowledge of environmental state transition dynamics to enhance candidate action proposal. To achieve risk-aware resilient task execution, we introduce a two-stage deduction chain. A world model, specialized in environmental state transitions, simulates action outcomes, which a judge model then scrutinizes to trigger action corrective feedback when necessary. Experiments show that WAC achieves absolute gains of 1.8% on VisualWebArena and 1.3% on Online-Mind2Web.

基于大型语言模型的 Web 代理在自动化 Web 任务方面表现出了良好的能力。然而，当前的网络代理由于预测环境变化的局限性，难以推理出合理的行动，并且可能不具备全面的执行风险意识，过早地执行风险行动，造成损失并导致任务失败。为了应对这些挑战，我们提出了 WAC，这是一种集成了模型协作、结果模拟和反馈驱动的动作细化的网络代理。为了克服各个模型的认知隔离，我们引入了多智能体协作流程，使行动模型能够作为网络环境专家咨询世界模型以获取战略指导；然后，行动模型将这些建议转化为可执行的行动，利用环境状态转换动态的先验知识来增强候选行动建议。为了实现风险感知的弹性任务执行，我们引入了两阶段推论链。专门研究环境状态转换的世界模型会模拟行动结果，然后法官模型会对其进行仔细检查，以在必要时触发行动纠正反馈。实验表明，WAC 在 VisualWebArena 上获得了 1.8% 的绝对收益，在 Online-Mind2Web 上获得了 1.3% 的绝对收益。

</details>

---

## 3. Feasibility-aware Imitation Learning from Observation with Multimodal Feedback / 通过多模态反馈进行观察的可行性感知模仿学习

**Date**: 2026-02-17 | **arXiv**: [2602.15351v1](http://arxiv.org/abs/2602.15351v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.15351v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Imitation learning frameworks that learn robot control policies from demonstrators' motions via hand-mounted demonstration interfaces have attracted increasing attention. However, due to differences in physical characteristics between demonstrators and robots, this approach faces two limitations: i) the demonstration data do not include robot actions, and ii) the demonstrated motions may be infeasible for robots. These limitations make policy learning difficult. To address them, we propose Feasibility-Aware Behavior Cloning from Observation (FABCO). FABCO integrates behavior cloning from observation, which complements robot actions using robot dynamics models, with feasibility estimation. In feasibility estimation, the demonstrated motions are evaluated using a robot-dynamics model, learned from the robot's execution data, to assess reproducibility under the robot's dynamics. The estimated feasibility is used for multimodal feedback and feasibility-aware policy learning to improve the demonstrator's motions and learn robust policies. Multimodal feedback provides feasibility through the demonstrator's visual and haptic senses to promote feasible demonstrated motions. Feasibility-aware policy learning reduces the influence of demonstrated motions that are infeasible for robots, enabling the learning of policies that robots can execute stably. We conducted experiments with 15 participants on two tasks and confirmed that FABCO improves imitation learning performance by more than 3.2 times compared to the case without feasibility feedback.

通过手持式演示界面从演示者的动作中学习机器人控制策略的模仿学习框架引起了越来越多的关注。然而，由于演示者和机器人之间的物理特征差异，这种方法面临两个限制：i）演示数据不包括机器人动作，ii）演示的运动对于机器人来说可能不可行。这些限制使得政策学习变得困难。为了解决这些问题，我们提出了基于观察的可行性感知行为克隆（FABCO）。 FABCO 将观察行为克隆与可行性评估相结合，利用机器人动力学模型补充机器人动作。在可行性评估中，使用从机器人的执行数据中学习的机器人动力学模型来评估演示的运动，以评估机器人动力学下的再现性。估计的可行性用于多模式反馈和可行性感知政策学习，以改进演示者的动作并学习稳健的政策。多模态反馈通过演示者的视觉和触觉提供可行性，以促进可行的演示动作。可行性感知策略学习减少了机器人无法执行的演示动作的影响，从而能够学习机器人可以稳定执行的策略。我们对 15 名参与者进行了两项任务的实验，证实 FABCO 与没有可行性反馈的情况相比，模仿学习性能提高了 3.2 倍以上。

</details>

---

## 4. Cold-Start Personalization via Training-Free Priors from Structured World Models / 通过结构化世界模型的免训练先验进行冷启动个性化

**Date**: 2026-02-16 | **arXiv**: [2602.15012v1](http://arxiv.org/abs/2602.15012v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.15012v1)

**Categories**: cs.CL, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Cold-start personalization requires inferring user preferences through interaction when no user-specific historical data is available. The core challenge is a routing problem: each task admits dozens of preference dimensions, yet individual users care about only a few, and which ones matter depends on who is asking. With a limited question budget, asking without structure will miss the dimensions that matter. Reinforcement learning is the natural formulation, but in multi-turn settings its terminal reward fails to exploit the factored, per-criterion structure of preference data, and in practice learned policies collapse to static question sequences that ignore user responses. We propose decomposing cold-start elicitation into offline structure learning and online Bayesian inference. Pep (Preference Elicitation with Priors) learns a structured world model of preference correlations offline from complete profiles, then performs training-free Bayesian inference online to select informative questions and predict complete preference profiles, including dimensions never asked about. The framework is modular across downstream solvers and requires only simple belief models. Across medical, mathematical, social, and commonsense reasoning, Pep achieves 80.8% alignment between generated responses and users' stated preferences versus 68.5% for RL, with 3-5x fewer interactions. When two users give different answers to the same question, Pep changes its follow-up 39-62% of the time versus 0-28% for RL. It does so with ~10K parameters versus 8B for RL, showing that the bottleneck in cold-start elicitation is the capability to exploit the factored structure of preference data.

冷启动个性化需要在没有特定于用户的历史数据可用时通过交互推断用户偏好。核心挑战是路由问题：每个任务都有数十个偏好维度，但个人用户只关心其中几个，而哪些维度重要取决于提出请求的人。由于问题预算有限，没有结构的提问会错过重要的维度。强化学习是自然的公式，但在多轮设置中，其最终奖励无法利用偏好数据的分解的、按标准的结构，并且在实践中学习的策略崩溃为忽略用户响应的静态问题序列。我们建议将冷启动启发分解为离线结构学习和在线贝叶斯推理。 Pep（先验偏好启发）从完整的配置文件中离线学习偏好相关性的结构化世界模型，然后在线执行免训练贝叶斯推理以选择信息性问题并预测完整的偏好配置文件，包括从未询问过的维度。该框架在下游求解器中是模块化的，并且只需要简单的信念模型。在医学、数学、社会和常识推理方面，Pep 在生成的响应和用户陈述的偏好之间实现了 80.8% 的一致性，而 RL 的一致性为 68.5%，交互次数减少了 3-5 倍。当两个用户对同一问题给出不同答案时，Pep 在 39-62% 的情况下会更改其后续内容，而 RL 的这一比例为 0-28%。与 RL 的 8B 参数相比，它使用约 10K 参数来实现这一点，这表明冷启动启发的瓶颈是利用偏好数据的分解结构的能力。

</details>

---

## 5. World Models for Policy Refinement in StarCraft II / 星际争霸 II 中政策细化的世界模型

**Date**: 2026-02-16 | **arXiv**: [2602.14857v1](http://arxiv.org/abs/2602.14857v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.14857v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Large Language Models (LLMs) have recently shown strong reasoning and generalization capabilities, motivating their use as decision-making policies in complex environments. StarCraft II (SC2), with its massive state-action space and partial observability, is a challenging testbed. However, existing LLM-based SC2 agents primarily focus on improving the policy itself and overlook integrating a learnable, action-conditioned transition model into the decision loop. To bridge this gap, we propose StarWM, the first world model for SC2 that predicts future observations under partial observability. To facilitate learning SC2's hybrid dynamics, we introduce a structured textual representation that factorizes observations into five semantic modules, and construct SC2-Dynamics-50k, the first instruction-tuning dataset for SC2 dynamics prediction. We further develop a multi-dimensional offline evaluation framework for predicted structured observations. Offline results show StarWM's substantial gains over zero-shot baselines, including nearly 60% improvements in resource prediction accuracy and self-side macro-situation consistency. Finally, we propose StarWM-Agent, a world-model-augmented decision system that integrates StarWM into a Generate--Simulate--Refine decision loop for foresight-driven policy refinement. Online evaluation against SC2's built-in AI demonstrates consistent improvements, yielding win-rate gains of 30%, 15%, and 30% against Hard (LV5), Harder (LV6), and VeryHard (LV7), respectively, alongside improved macro-management stability and tactical risk assessment.

大型语言模型（LLM）最近表现出强大的推理和泛化能力，促使它们在复杂环境中用作决策策略。星际争霸 II (SC2) 具有巨大的状态动作空间和部分可观测性，是一个具有挑战性的测试平台。然而，现有的基于 LLM 的 SC2 智能体主要侧重于改进策略本身，而忽略了将可学习的、以行动为条件的转换模型集成到决策循环中。为了弥补这一差距，我们提出了 StarWM，这是 SC2 的第一个世界模型，可以在部分可观测性下预测未来的观测结果。为了促进学习 SC2 的混合动力学，我们引入了一种结构化文本表示，将观察结果分解为五个语义模块，并构建了 SC2-Dynamics-50k，这是第一个用于 SC2 动力学预测的指令调整数据集。我们进一步开发了一个用于预测结构化观察的多维离线评估框架。离线结果显示，StarWM 较零样本基线有大幅提升，包括资源预测精度和自身宏观情况一致性方面提高了近 60%。最后，我们提出了 StarWM-Agent，这是一个世界模型增强决策系统，它将 StarWM 集成到生成-模拟-细化决策循环中，以实现前瞻驱动的政策细化。针对 SC2 内置 AI 的在线评估显示出持续的改进，相对于 Hard (LV5)、Harder (LV6) 和 VeryHard (LV7) 胜率分别提高了 30%、15% 和 30%，同时改善了宏观管理稳定性和战术风险评估。

</details>

---

## 6. WebWorld: A Large-Scale World Model for Web Agent Training / WebWorld：用于 Web 代理训练的大规模世界模型

**Date**: 2026-02-16 | **arXiv**: [2602.14721v1](http://arxiv.org/abs/2602.14721v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.14721v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Web agents require massive trajectories to generalize, yet real-world training is constrained by network latency, rate limits, and safety risks. We introduce \textbf{WebWorld} series, the first open-web simulator trained at scale. While existing simulators are restricted to closed environments with thousands of trajectories, WebWorld leverages a scalable data pipeline to train on 1M+ open-web interactions, supporting reasoning, multi-format data, and long-horizon simulations of 30+ steps. For intrinsic evaluation, we introduce WebWorld-Bench with dual metrics spanning nine dimensions, where WebWorld achieves simulation performance comparable to Gemini-3-Pro. For extrinsic evaluation, Qwen3-14B trained on WebWorld-synthesized trajectories improves by +9.2\% on WebArena, reaching performance comparable to GPT-4o. WebWorld enables effective inference-time search, outperforming GPT-5 as a world model. Beyond web simulation, WebWorld exhibits cross-domain generalization to code, GUI, and game environments, providing a replicable recipe for world model construction.

网络代理需要大量的轨迹来进行概括，但现实世界的训练受到网络延迟、速率限制和安全风险的限制。我们推出 \textbf{WebWorld} 系列，这是第一个大规模训练的开放网络模拟器。虽然现有模拟器仅限于具有数千条轨迹的封闭环境，但 WebWorld 利用可扩展的数据管道来训练超过 100 万次开放网络交互，支持推理、多格式数据和 30 多个步骤的长期模拟。对于内在评估，我们引入了具有跨越九个维度的双指标的WebWorld-Bench，其中WebWorld实现了与Gemini-3-Pro相当的模拟性能。对于外部评估，在 WebWorld 合成轨迹上训练的 Qwen3-14B 在 WebArena 上提高了 +9.2%，达到了与 GPT-4o 相当的性能。 WebWorld 可实现有效的推理时间搜索，作为世界模型，其性能优于 GPT-5。除了网络模拟之外，WebWorld 还展示了对代码、GUI 和游戏环境的跨域泛化，为世界模型构建提供了可复制的方法。

</details>

---



</details>

<details><summary><b>2026-02-17 (1 papers)</b></summary>

# arXiv World Model Papers - 2026-02-17

**Paper Count**: 1

---

## 1. WoVR: World Models as Reliable Simulators for Post-Training VLA Policies with RL / WoVR：世界模型作为 RL 训练后 VLA 策略的可靠模拟器

**Date**: 2026-02-15 | **arXiv**: [2602.13977v1](http://arxiv.org/abs/2602.13977v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.13977v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Reinforcement learning (RL) promises to unlock capabilities beyond imitation learning for Vision-Language-Action (VLA) models, but its requirement for massive real-world interaction prevents direct deployment on physical robots. Recent work attempts to use learned world models as simulators for policy optimization, yet closed-loop imagined rollouts inevitably suffer from hallucination and long-horizon error accumulation. Such errors do not merely degrade visual fidelity; they corrupt the optimization signal, encouraging policies to exploit model inaccuracies rather than genuine task progress. We propose WoVR, a reliable world-model-based reinforcement learning framework for post-training VLA policies. Instead of assuming a faithful world model, WoVR explicitly regulates how RL interacts with imperfect imagined dynamics. It improves rollout stability through a controllable action-conditioned video world model, reshapes imagined interaction to reduce effective error depth via Keyframe-Initialized Rollouts, and maintains policy-simulator alignment through World Model-Policy co-evolution. Extensive experiments on LIBERO benchmarks and real-world robotic manipulation demonstrate that WoVR enables stable long-horizon imagined rollouts and effective policy optimization, improving average LIBERO success from 39.95% to 69.2% (+29.3 points) and real-robot success from 61.7% to 91.7% (+30.0 points). These results show that learned world models can serve as practical simulators for reinforcement learning when hallucination is explicitly controlled.

强化学习 (RL) 有望为视觉-语言-动作 (VLA) 模型解锁超越模仿学习的功能，但其对大规模现实世界交互的要求阻碍了直接部署在物理机器人上。最近的工作尝试使用学习的世界模型作为政策优化的模拟器，但闭环想象的推出不可避免地会遭受幻觉和长期错误累积的影响。此类错误不仅会降低视觉保真度，还会降低视觉保真度。它们破坏了优化信号，鼓励政策利用模型的不准确性，而不是真正的任务进展。我们提出了 WoVR，一种可靠的基于世界模型的强化学习框架，用于训练后 VLA 策略。 WoVR 没有假设一个忠实的世界模型，而是明确规范强化学习如何与不完美的想象动态相互作用。它通过可控的动作条件视频世界模型提高了推出稳定性，通过关键帧初始化的推出重塑了想象的交互以减少有效错误深度，并通过世界模型-策略共同进化保持策略-模拟器的一致性。对 LIBERO 基准和现实世界机器人操作的大量实验表明，WoVR 能够实现稳定的长期想象部署和有效的策略优化，将 LIBERO 平均成功率从 39.95% 提高到 69.2%（+29.3 分），将真实机器人成功率从 61.7% 提高到 91.7%（+30.0 分）。这些结果表明，当幻觉受到明确控制时，学习的世界模型可以作为强化学习的实用模拟器。

</details>

---



</details>

<details><summary><b>2026-02-16 (1 papers)</b></summary>

# arXiv World Model Papers - 2026-02-16

**Paper Count**: 1

---

## 1. Information-theoretic analysis of world models in optimal reward maximizers / 最优奖励最大化世界模型的信息论分析

**Date**: 2026-02-13 | **arXiv**: [2602.12963v1](http://arxiv.org/abs/2602.12963v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.12963v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

An important question in the field of AI is the extent to which successful behaviour requires an internal representation of the world. In this work, we quantify the amount of information an optimal policy provides about the underlying environment. We consider a Controlled Markov Process (CMP) with $n$ states and $m$ actions, assuming a uniform prior over the space of possible transition dynamics. We prove that observing a deterministic policy that is optimal for any non-constant reward function then conveys exactly $n \log m$ bits of information about the environment. Specifically, we show that the mutual information between the environment and the optimal policy is $n \log m$ bits. This bound holds across a broad class of objectives, including finite-horizon, infinite-horizon discounted, and time-averaged reward maximization. These findings provide a precise information-theoretic lower bound on the "implicit world model'' necessary for optimality.

人工智能领域的一个重要问题是成功的行为在多大程度上需要对世界的内部表征。在这项工作中，我们量化了最佳策略提供的有关底层环境的信息量。我们考虑一个具有 $n$ 状态和 $m$ 动作的受控马尔可夫过程 (CMP)，假设在可能的过渡动态空间上有一个统一的先验。我们证明，观察对于任何非恒定奖励函数来说都是最佳的确定性策略可以准确地传达 $n \log m$ 位有关环境的信息。具体来说，我们表明环境和最优策略之间的互信息为 $n \log m$ 位。这一界限适用于广泛的目标，包括有限范围、无限范围贴现和时间平均奖励最大化。这些发现为最优性所需的“隐式世界模型”提供了精确的信息论下界。

</details>

---



</details>

<details><summary><b>2026-02-14 (12 papers)</b></summary>

# arXiv World Model Papers - 2026-02-14

**Paper Count**: 12

---

## 1. The Observer Effect in World Models: Invasive Adaptation Corrupts Latent Physics / 世界模型中的观察者效应：侵入性适应破坏了潜在的物理学

**Date**: 2026-02-12 | **arXiv**: [2602.12218v1](http://arxiv.org/abs/2602.12218v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.12218v1)

**Categories**: cs.LG, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Determining whether neural models internalize physical laws as world models, rather than exploiting statistical shortcuts, remains challenging, especially under out-of-distribution (OOD) shifts. Standard evaluations often test latent capability via downstream adaptation (e.g., fine-tuning or high-capacity probes), but such interventions can change the representations being measured and thus confound what was learned during self-supervised learning (SSL). We propose a non-invasive evaluation protocol, PhyIP. We test whether physical quantities are linearly decodable from frozen representations, motivated by the linear representation hypothesis. Across fluid dynamics and orbital mechanics, we find that when SSL achieves low error, latent structure becomes linearly accessible. PhyIP recovers internal energy and Newtonian inverse-square scaling on OOD tests (e.g., $ρ> 0.90$). In contrast, adaptation-based evaluations can collapse this structure ($ρ\approx 0.05$). These findings suggest that adaptation-based evaluation can obscure latent structures and that low-capacity probes offer a more accurate evaluation of physical world models.

确定神经模型是否将物理定律内化为世界模型，而不是利用统计捷径，仍然具有挑战性，特别是在分布外（OOD）变化的情况下。标准评估通常通过下游适应（例如微调或高容量探测）来测试潜在能力，但此类干预可能会改变正在测量的表示，从而混淆自监督学习（SSL）期间学到的内容。我们提出了一种非侵入性评估协议 PhyIP。在线性表示假设的推动下，我们测试物理量是否可以从冻结表示中线性解码。在流体动力学和轨道力学中，我们发现当 SSL 实现低误差时，潜在结构变得可线性访问。 PhyIP 在 OOD 测试中恢复内能和牛顿平方反比缩放（例如 $ρ> 0.90$）。相反，基于适应的评估可以破坏这种结构（$ρ\approx 0.05$）。这些发现表明，基于适应的评估可以掩盖潜在结构，并且低容量探针可以对物理世界模型提供更准确的评估。

</details>

---

## 2. Accelerating Robotic Reinforcement Learning with Agent Guidance / 通过代理指导加速机器人强化学习

**Date**: 2026-02-12 | **arXiv**: [2602.11978v1](http://arxiv.org/abs/2602.11978v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11978v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Reinforcement Learning (RL) offers a powerful paradigm for autonomous robots to master generalist manipulation skills through trial-and-error. However, its real-world application is stifled by severe sample inefficiency. Recent Human-in-the-Loop (HIL) methods accelerate training by using human corrections, yet this approach faces a scalability barrier. Reliance on human supervisors imposes a 1:1 supervision ratio that limits fleet expansion, suffers from operator fatigue over extended sessions, and introduces high variance due to inconsistent human proficiency. We present Agent-guided Policy Search (AGPS), a framework that automates the training pipeline by replacing human supervisors with a multimodal agent. Our key insight is that the agent can be viewed as a semantic world model, injecting intrinsic value priors to structure physical exploration. By using executable tools, the agent provides precise guidance via corrective waypoints and spatial constraints for exploration pruning. We validate our approach on two tasks, ranging from precision insertion to deformable object manipulation. Results demonstrate that AGPS outperforms HIL methods in sample efficiency. This automates the supervision pipeline, unlocking the path to labor-free and scalable robot learning. Project website: https://agps-rl.github.io/agps.

强化学习 (RL) 为自主机器人提供了一个强大的范例，让其通过反复试验掌握通用操作技能。然而，其实际应用却因严重的样本效率低下而受到抑制。最近的人在环（HIL）方法通过使用人工修正来加速训练，但这种方法面临可扩展性障碍。对人类监督员的依赖强制实行 1:1 的监督比例，这限制了车队的扩张，操作员在长时间的工作中会感到疲劳，并且由于人员熟练程度不一致而带来很大的差异。我们提出了代理引导策略搜索（AGPS），这是一个通过用多模式代理取代人类监督员来自动化训练流程的框架。我们的主要见解是，代理可以被视为语义世界模型，在结构物理探索之前注入内在价值。通过使用可执行工具，代理通过修正路径点和空间约束提供精确的指导，以进行探索修剪。我们在两项任务上验证了我们的方法，从精确插入到可变形对象操作。结果表明，AGPS 在样本效率方面优于 HIL 方法。这实现了监督管道的自动化，开启了免劳动力且可扩展的机器人学习之路。项目网站：https://agps-rl.github.io/agps。

</details>

---

## 3. Where Bits Matter in World Model Planning: A Paired Mixed-Bit Study for Efficient Spatial Reasoning / 比特在世界模型规划中的作用：高效空间推理的配对混合比特研究

**Date**: 2026-02-12 | **arXiv**: [2602.11882v1](http://arxiv.org/abs/2602.11882v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11882v1)

**Categories**: cs.LG, cs.AI, cs.CV, cs.RO

**Code**: https://github.com/suraj-ranganath/DINO-MBQuant.

<details><summary><b>Abstract / 摘要</b></summary>

Efficient spatial reasoning requires world models that remain reliable under tight precision budgets. We study whether low-bit planning behavior is determined mostly by total bitwidth or by where bits are allocated across modules. Using DINO-WM on the Wall planning task, we run a paired-goal mixed-bit evaluation across uniform, mixed, asymmetric, and layerwise variants under two planner budgets. We observe a consistent three-regime pattern: 8-bit and 6-bit settings remain close to FP16, 3-bit settings collapse, and 4-bit settings are allocation-sensitive. In that transition region, preserving encoder precision improves planning relative to uniform quantization, and near-size asymmetric variants show the same encoder-side direction. In a later strict 22-cell replication with smaller per-cell episode count, the mixed-versus-uniform INT4 sign becomes budget-conditioned, which further highlights the sensitivity of this transition regime. These findings motivate module-aware, budget-aware quantization policies as a broader research direction for efficient spatial reasoning. Code and run artifacts are available at https://github.com/suraj-ranganath/DINO-MBQuant.

高效的空间推理需要世界模型在严格的精度预算下保持可靠。我们研究低位规划行为是否主要由总位宽或位在模块之间分配的位置决定。在 Wall 规划任务上使用 DINO-WM，我们在两个规划器预算下对均匀、混合、不对称和分层变体进行配对目标混合位评估。我们观察到一致的三机制模式：8 位和 6 位设置保持接近 FP16，3 位设置崩溃，4 位设置对分配敏感。在该过渡区域中，保持编码器精度相对于均匀量化改进了规划，并且接近尺寸的不对称变体显示了相同的编码器侧方向。在后来的严格 22 细胞复制中，每个细胞的情节数更小，混合与均匀的 INT4 符号变得受预算限制，这进一步凸显了这种过渡机制的敏感性。这些发现激发了模块感知、预算感知的量化策略作为高效空间推理的更广泛的研究方向。代码和运行工件可在 https://github.com/suraj-ranganath/DINO-MBQuant 获取。

</details>

---

## 4. Budget-Constrained Agentic Large Language Models: Intention-Based Planning for Costly Tool Use / 预算受限的代理大型语言模型：基于意图的昂贵工具使用规划

**Date**: 2026-02-12 | **arXiv**: [2602.11541v1](http://arxiv.org/abs/2602.11541v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11541v1)

**Categories**: cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

We study budget-constrained tool-augmented agents, where a large language model must solve multi-step tasks by invoking external tools under a strict monetary budget. We formalize this setting as sequential decision making in context space with priced and stochastic tool executions, making direct planning intractable due to massive state-action spaces, high variance of outcomes and prohibitive exploration cost. To address these challenges, we propose INTENT, an inference-time planning framework that leverages an intention-aware hierarchical world model to anticipate future tool usage, risk-calibrated cost, and guide decisions online. Across cost-augmented StableToolBench, INTENT strictly enforces hard budget feasibility while substantially improving task success over baselines, and remains robust under dynamic market shifts such as tool price changes and varying budgets.

我们研究预算受限的工具增强代理，其中大型语言模型必须在严格的货币预算下通过调用外部工具来解决多步骤任务。我们将这种设置形式化为上下文空间中具有定价和随机工具执行的顺序决策，由于巨大的状态动作空间、结果的高方差和令人望而却步的探索成本，使得直接规划变得棘手。为了应对这些挑战，我们提出了 INTENT，这是一种推理时间规划框架，它利用意图感知的分层世界模型来预测未来的工具使用、风险校准成本并指导在线决策。在成本增加的 StableToolBench 中，INTENT 严格执行硬预算可行性，同时大幅提高任务成功率（较基准），并在工具价格变化和预算变化等动态市场变化下保持稳健。

</details>

---

## 5. LDA-1B: Scaling Latent Dynamics Action Model via Universal Embodied Data Ingestion / LDA-1B：通过通用嵌入数据摄取扩展潜在动态动作模型

**Date**: 2026-02-12 | **arXiv**: [2602.12215v1](http://arxiv.org/abs/2602.12215v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.12215v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Recent robot foundation models largely rely on large-scale behavior cloning, which imitates expert actions but discards transferable dynamics knowledge embedded in heterogeneous embodied data. While the Unified World Model (UWM) formulation has the potential to leverage such diverse data, existing instantiations struggle to scale to foundation-level due to coarse data usage and fragmented datasets. We introduce LDA-1B, a robot foundation model that scales through universal embodied data ingestion by jointly learning dynamics, policy, and visual forecasting, assigning distinct roles to data of varying quality. To support this regime at scale, we assemble and standardize EI-30k, an embodied interaction dataset comprising over 30k hours of human and robot trajectories in a unified format. Scalable dynamics learning over such heterogeneous data is enabled by prediction in a structured DINO latent space, which avoids redundant pixel-space appearance modeling. Complementing this representation, LDA-1B employs a multi-modal diffusion transformer to handle asynchronous vision and action streams, enabling stable training at the 1B-parameter scale. Experiments in simulation and the real world show LDA-1B outperforms prior methods (e.g., $π_{0.5}$) by up to 21\%, 48\%, and 23\% on contact-rich, dexterous, and long-horizon tasks, respectively. Notably, LDA-1B enables data-efficient fine-tuning, gaining 10\% by leveraging 30\% low-quality trajectories typically harmful and discarded.

最近的机器人基础模型在很大程度上依赖于大规模行为克隆，它模仿专家的行为，但丢弃了嵌入异构数据中的可转移的动力学知识。虽然统一世界模型 (UWM) 公式有潜力利用如此多样化的数据，但由于粗略的数据使用和分散的数据集，现有的实例很难扩展到基础级别。我们引入了 LDA-1B，这是一种机器人基础模型，通过联合学习动态、策略和视觉预测，为不同质量的数据分配不同的角色，通过通用的具体数据摄取进行扩展。为了大规模支持这种制度，我们组装并标准化了 EI-30k，这是一个具体的交互数据集，以统一的格式包含超过 30,000 小时的人类和机器人轨迹。通过在结构化 DINO 潜在空间中进行预测，可以实现对此类异构数据的可扩展动态学习，从而避免冗余的像素空间外观建模。作为对这种表示的补充，LDA-1B 采用多模态扩散变压器来处理异步视觉和动作流，从而实现 1B 参数规模的稳定训练。模拟和现实世界的实验表明，在接触丰富、灵巧和长视野任务上，LDA-1B 的性能分别比先前方法（例如 $π_{0.5}$）高出 21\%、48\% 和 23\%。值得注意的是，LDA-1B 能够实现数据高效的微调，通过利用 30% 的通常有害和丢弃的低质量轨迹，获得 10% 的增益。

</details>

---

## 6. VLAW: Iterative Co-Improvement of Vision-Language-Action Policy and World Model / VLAW：愿景-语言-行动政策和世界模型的迭代共同改进

**Date**: 2026-02-12 | **arXiv**: [2602.12063v1](http://arxiv.org/abs/2602.12063v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.12063v1)

**Categories**: cs.RO

**Project**: https://sites.google.com/view/vla-w  <details><summary><b>Abstract / 摘要</b></summary>

The goal of this paper is to improve the performance and reliability of vision-language-action (VLA) models through iterative online interaction. Since collecting policy rollouts in the real world is expensive, we investigate whether a learned simulator-specifically, an action-conditioned video generation model-can be used to generate additional rollout data. Unfortunately, existing world models lack the physical fidelity necessary for policy improvement: they are predominantly trained on demonstration datasets that lack coverage of many different physical interactions (particularly failure cases) and struggle to accurately model small yet critical physical details in contact-rich object manipulation. We propose a simple iterative improvement algorithm that uses real-world roll-out data to improve the fidelity of the world model, which can then, in turn, be used to generate supplemental synthetic data for improving the VLA model. In our experiments on a real robot, we use this approach to improve the performance of a state-of-the-art VLA model on multiple downstream tasks. We achieve a 39.2% absolute success rate improvement over the base policy and 11.6% improvement from training with the generated synthetic rollouts. Videos can be found at this anonymous website: https://sites.google.com/view/vla-w

本文的目标是通过迭代在线交互来提高视觉-语言-动作（VLA）模型的性能和可靠性。由于在现实世界中收集策略推出的成本很高，因此我们研究了是否可以使用学习的模拟器（具体而言，动作条件视频生成模型）来生成额外的推出数据。不幸的是，现有的世界模型缺乏政策改进所需的物理保真度：它们主要是在演示数据集上进行训练的，这些数据集缺乏对许多不同物理交互（特别是失败案例）的覆盖，并且很难在接触丰富的对象操作中准确地模拟微小但关键的物理细节。我们提出了一种简单的迭代改进算法，该算法使用现实世界的转出数据来提高世界模型的保真度，然后可以使用该算法生成补充合成数据以改进 VLA 模型。在我们对真实机器人的实验中，我们使用这种方法来提高最先进的 VLA 模型在多个下游任务上的性能。与基本策略相比，我们的绝对成功率提高了 39.2%，通过生成的综合部署进行训练，绝对成功率提高了 11.6%。视频可以在这个匿名网站上找到：https://sites.google.com/view/vla-w

</details>

---

## 7. HAIC: Humanoid Agile Object Interaction Control via Dynamics-Aware World Model / HAIC：通过动态感知世界模型进行人形敏捷对象交互控制

**Date**: 2026-02-12 | **arXiv**: [2602.11758v1](http://arxiv.org/abs/2602.11758v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11758v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Humanoid robots show promise for complex whole-body tasks in unstructured environments. Although Human-Object Interaction (HOI) has advanced, most methods focus on fully actuated objects rigidly coupled to the robot, ignoring underactuated objects with independent dynamics and non-holonomic constraints. These introduce control challenges from coupling forces and occlusions. We present HAIC, a unified framework for robust interaction across diverse object dynamics without external state estimation. Our key contribution is a dynamics predictor that estimates high-order object states (velocity, acceleration) solely from proprioceptive history. These predictions are projected onto static geometric priors to form a spatially grounded dynamic occupancy map, enabling the policy to infer collision boundaries and contact affordances in blind spots. We use asymmetric fine-tuning, where a world model continuously adapts to the student policy's exploration, ensuring robust state estimation under distribution shifts. Experiments on a humanoid robot show HAIC achieves high success rates in agile tasks (skateboarding, cart pushing/pulling under various loads) by proactively compensating for inertial perturbations, and also masters multi-object long-horizon tasks like carrying a box across varied terrain by predicting the dynamics of multiple objects.

人形机器人有望在非结构化环境中执行复杂的全身任务。尽管人机交互（HOI）已经取得了进步，但大多数方法都专注于与机器人刚性耦合的完全驱动物体，而忽略了具有独立动力学和非完整约束的欠驱动物体。这些引入了来自耦合力和遮挡的控制挑战。我们提出了 HAIC，这是一个无需外部状态估计即可跨不同对象动态进行鲁棒交互的统一框架。我们的主要贡献是一个动力学预测器，它仅根据本体感受历史来估计高阶物体状态（速度、加速度）。这些预测被投影到静态几何先验上，形成基于空间的动态占用图，使策略能够推断碰撞边界和盲点中的接触可供性。我们使用不对称微调，其中世界模型不断适应学生政策的探索，确保分布变化下的稳健状态估计。在人形机器人上的实验表明，HAIC 通过主动补偿惯性扰动，在敏捷任务（滑板、各种负载下推/拉车）中取得了很高的成功率，并且还通过预测多个物体的动态来掌握多物体长视距任务，例如在不同地形上搬运箱子。

</details>

---

## 8. Causal-JEPA: Learning World Models through Object-Level Latent Interventions / 因果-JEPA：通过对象级潜在干预学习世界模型

**Date**: 2026-02-11 | **arXiv**: [2602.11389v1](http://arxiv.org/abs/2602.11389v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11389v1)

**Categories**: cs.AI

**Code**: https://github.com/galilai-group/cjepa.

<details><summary><b>Abstract / 摘要</b></summary>

World models require robust relational understanding to support prediction, reasoning, and control. While object-centric representations provide a useful abstraction, they are not sufficient to capture interaction-dependent dynamics. We therefore propose C-JEPA, a simple and flexible object-centric world model that extends masked joint embedding prediction from image patches to object-centric representations. By applying object-level masking that requires an object's state to be inferred from other objects, C-JEPA induces latent interventions with counterfactual-like effects and prevents shortcut solutions, making interaction reasoning essential. Empirically, C-JEPA leads to consistent gains in visual question answering, with an absolute improvement of about 20\% in counterfactual reasoning compared to the same architecture without object-level masking. On agent control tasks, C-JEPA enables substantially more efficient planning by using only 1\% of the total latent input features required by patch-based world models, while achieving comparable performance. Finally, we provide a formal analysis demonstrating that object-level masking induces a causal inductive bias via latent interventions. Our code is available at https://github.com/galilai-group/cjepa.

世界模型需要强大的关系理解来支持预测、推理和控制。虽然以对象为中心的表示提供了有用的抽象，但它们不足以捕获依赖于交互的动态。因此，我们提出了 C-JEPA，这是一种简单而灵活的以对象为中心的世界模型，它将蒙版联合嵌入预测从图像块扩展到以对象为中心的表示。通过应用需要从其他对象推断对象状态的对象级屏蔽，C-JEPA 会引发具有类似反事实效果的潜在干预，并阻止捷径解决方案，从而使交互推理变得至关重要。根据经验，C-JEPA 在视觉问答方面带来了持续的收益，与没有对象级屏蔽的相同架构相比，反事实推理绝对提高了约 20%。在代理控制任务上，C-JEPA 仅使用基于补丁的世界模型所需的总潜在输入特征的 1%，从而实现了更高效的规划，同时实现了可比的性能。最后，我们提供了正式的分析，证明对象级掩蔽通过潜在干预诱发了因果归纳偏差。我们的代码可在 https://github.com/galilai-group/cjepa 获取。

</details>

---

## 9. H-WM: Robotic Task and Motion Planning Guided by Hierarchical World Model / H-WM：分层世界模型引导的机器人任务和运动规划

**Date**: 2026-02-11 | **arXiv**: [2602.11291v1](http://arxiv.org/abs/2602.11291v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11291v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

World models are becoming central to robotic planning and control, as they enable prediction of future state transitions. Existing approaches often emphasize video generation or natural language prediction, which are difficult to directly ground in robot actions and suffer from compounding errors over long horizons. Traditional task and motion planning relies on symbolic logic world models, such as planning domains, that are robot-executable and robust for long-horizon reasoning. However, these methods typically operate independently of visual perception, preventing synchronized symbolic and perceptual state prediction. We propose a Hierarchical World Model (H-WM) that jointly predicts logical and visual state transitions within a unified bilevel framework. H-WM combines a high-level logical world model with a low-level visual world model, integrating the robot-executable, long-horizon robustness of symbolic reasoning with perceptual grounding from visual observations. The hierarchical outputs provide stable and consistent intermediate guidance for long-horizon tasks, mitigating error accumulation and enabling robust execution across extended task sequences. To train H-WM, we introduce a robotic dataset that aligns robot motion with symbolic states, actions, and visual observations. Experiments across vision-language-action (VLA) control policies demonstrate the effectiveness and generality of the approach.

世界模型正在成为机器人规划和控制的核心，因为它们能够预测未来的状态转换。现有的方法通常强调视频生成或自然语言预测，这些方法很难直接反映机器人的动作，并且在长期范围内会出现复合错误。传统的任务和运动规划依赖于符号逻辑世界模型，例如规划域，这些模型是机器人可执行的并且对于长视野推理来说是鲁棒的。然而，这些方法通常独立于视觉感知进行操作，从而阻止了同步的符号和感知状态预测。我们提出了一种分层世界模型（H-WM），它在统一的双层框架内联合预测逻辑和视觉状态转换。 H-WM 将高级逻辑世界模型与低级视觉世界模型相结合，将机器人可执行的符号推理的长期鲁棒性与视觉观察的感知基础相结合。分层输出为长期任务提供稳定一致的中间指导，减少错误累积并实现跨扩展任务序列的稳健执行。为了训练 H-WM，我们引入了一个机器人数据集，该数据集将机器人运动与符号状态、动作和视觉观察对齐。视觉-语言-动作（VLA）控制策略的实验证明了该方法的有效性和通用性。

</details>

---

## 10. RISE: Self-Improving Robot Policy with Compositional World Model / RISE：利用组合世界模型自我改进机器人政策

**Date**: 2026-02-11 | **arXiv**: [2602.11075v1](http://arxiv.org/abs/2602.11075v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11075v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Despite the sustained scaling on model capacity and data acquisition, Vision-Language-Action (VLA) models remain brittle in contact-rich and dynamic manipulation tasks, where minor execution deviations can compound into failures. While reinforcement learning (RL) offers a principled path to robustness, on-policy RL in the physical world is constrained by safety risk, hardware cost, and environment reset. To bridge this gap, we present RISE, a scalable framework of robotic reinforcement learning via imagination. At its core is a Compositional World Model that (i) predicts multi-view future via a controllable dynamics model, and (ii) evaluates imagined outcomes with a progress value model, producing informative advantages for the policy improvement. Such compositional design allows state and value to be tailored by best-suited yet distinct architectures and objectives. These components are integrated into a closed-loop self-improving pipeline that continuously generates imaginary rollouts, estimates advantages, and updates the policy in imaginary space without costly physical interaction. Across three challenging real-world tasks, RISE yields significant improvement over prior art, with more than +35% absolute performance increase in dynamic brick sorting, +45% for backpack packing, and +35% for box closing, respectively.

尽管模型容量和数据采集不断扩展，但视觉-语言-动作 (VLA) 模型在接触丰富的动态操作任务中仍然很脆弱，在这些任务中，微小的执行偏差可能会导致失败。虽然强化学习 (RL) 提供了实现稳健性的原则性途径，但物理世界中的策略 RL 受到安全风险、硬件成本和环境重置的限制。为了弥补这一差距，我们推出了 RISE，这是一个通过想象力进行机器人强化学习的可扩展框架。其核心是组合世界模型，（i）通过可控动态模型预测多视角未来，（ii）通过进步价值模型评估想象的结果，为政策改进提供信息优势。这种组合设计允许通过最适合但独特的架构和目标来定制状态和价值。这些组件被集成到一个闭环自我改进管道中，该管道不断生成想象中的部署、估计优势并更新想象空间中的策略，而无需昂贵的物理交互。在三个具有挑战性的现实世界任务中，RISE 比现有技术取得了显着改进，动态砖块分类的绝对性能提高了 35% 以上，背包包装的绝对性能提高了 45%，盒子关闭的性能提高了 35%。

</details>

---

## 11. ContactGaussian-WM: Learning Physics-Grounded World Model from Videos / ContactGaussian-WM：从视频中学习基于物理的世界模型

**Date**: 2026-02-11 | **arXiv**: [2602.11021v1](http://arxiv.org/abs/2602.11021v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11021v1)

**Categories**: cs.RO, cs.AI, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Developing world models that understand complex physical interactions is essential for advancing robotic planning and simulation.However, existing methods often struggle to accurately model the environment under conditions of data scarcity and complex contact-rich dynamic motion.To address these challenges, we propose ContactGaussian-WM, a differentiable physics-grounded rigid-body world model capable of learning intricate physical laws directly from sparse and contact-rich video sequences.Our framework consists of two core components: (1) a unified Gaussian representation for both visual appearance and collision geometry, and (2) an end-to-end differentiable learning framework that differentiates through a closed-form physics engine to infer physical properties from sparse visual observations.Extensive simulations and real-world evaluations demonstrate that ContactGaussian-WM outperforms state-of-the-art methods in learning complex scenarios, exhibiting robust generalization capabilities.Furthermore, we showcase the practical utility of our framework in downstream applications, including data synthesis and real-time MPC.

开发理解复杂物理交互的世界模型对于推进机器人规划和仿真至关重要。然而，现有方法通常很难在数据稀缺和复杂的接触丰富的动态运动条件下准确地对环境进行建模。为了应对这些挑战，我们提出了 ContactGaussian-WM，这是一种基于物理的可微刚体世界模型，能够直接从稀疏和接触丰富的视频序列中学习复杂的物理定律。我们的框架由两个核心组件组成：（1）视觉外观和碰撞的统一高斯表示（2）端到端可微学习框架，通过封闭式物理引擎进行区分，从稀疏的视觉观察中推断物理属性。广泛的模拟和现实世界评估表明，ContactGaussian-WM 在学习复杂场景方面优于最先进的方法，展现出强大的泛化能力。此外，我们展示了我们的框架在下游应用中的实际效用，包括数据合成和实时 MPC。

</details>

---

## 12. Scaling World Model for Hierarchical Manipulation Policies / 分级操纵策略的扩展世界模型

**Date**: 2026-02-11 | **arXiv**: [2602.10983v2](http://arxiv.org/abs/2602.10983v2) | **PDF**: [Link](http://arxiv.org/pdf/2602.10983v2)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Vision-Language-Action (VLA) models are promising for generalist robot manipulation but remain brittle in out-of-distribution (OOD) settings, especially with limited real-robot data. To resolve the generalization bottleneck, we introduce a hierarchical Vision-Language-Action framework \our{} that leverages the generalization of large-scale pre-trained world model for robust and generalizable VIsual Subgoal TAsk decomposition VISTA. Our hierarchical framework \our{} consists of a world model as the high-level planner and a VLA as the low-level executor. The high-level world model first divides manipulation tasks into subtask sequences with goal images, and the low-level policy follows the textual and visual guidance to generate action sequences. Compared to raw textual goal specification, these synthesized goal images provide visually and physically grounded details for low-level policies, making it feasible to generalize across unseen objects and novel scenarios. We validate both visual goal synthesis and our hierarchical VLA policies in massive out-of-distribution scenarios, and the performance of the same-structured VLA in novel scenarios could boost from 14% to 69% with the guidance generated by the world model. Results demonstrate that our method outperforms previous baselines with a clear margin, particularly in out-of-distribution scenarios. Project page: \href{https://vista-wm.github.io/}{https://vista-wm.github.io}

视觉-语言-动作（VLA）模型对于通用机器人操作很有希望，但在分布外（OOD）设置中仍然很脆弱，尤其是在真实机器人数据有限的情况下。为了解决泛化瓶颈，我们引入了分层视觉-语言-动作框架 \our{}，该框架利用大规模预训练世界模型的泛化来实现稳健且可泛化的视觉子目标任务分解 VISTA。我们的分层框架 \our{} 由作为高级规划器的世界模型和作为低级执行器的 VLA 组成。高层世界模型首先将操作任务划分为具有目标图像的子任务序列，低层策略遵循文本和视觉指导来生成动作序列。与原始文本目标规范相比，这些合成的目标图像为低级策略提供了视觉和物理基础的细节，使得在未见过的物体和新场景中进行泛化成为可能。我们在大规模分布外场景中验证了视觉目标合成和分层 VLA 策略，并且在世界模型生成的指导下，相同结构的 VLA 在新颖场景中的性能可以从 14% 提高到 69%。结果表明，我们的方法明显优于以前的基线，特别是在分布外的情况下。项目页面：\href{https://vista-wm.github.io/}{https://vista-wm.github.io}

</details>

---



</details>

<!-- PAPERS_CONTENT_END -->
