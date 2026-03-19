# Daily Video Papers 🎥

?? **Website**: https://greasebig.github.io/daily-video-papers/

![Actions](https://github.com/greasebig/daily-video-papers/actions/workflows/daily-update.yml/badge.svg) ![Pages](https://img.shields.io/badge/pages-online-brightgreen) ![Visitors](https://visitor-badge.laobi.icu/badge?page_id=greasebig.daily-video-papers)

## 📚 论文索引

<!-- PAPERS_INDEX_START -->
- [2026-03-19](papers/2026-03-19.md) - 31 papers
- [2026-03-18](papers/2026-03-18.md) - 24 papers
- [2026-03-17](papers/2026-03-17.md) - 22 papers
- [2026-03-16](papers/2026-03-16.md) - 2 papers
- [2026-03-13](papers/2026-03-13.md) - 18 papers
- [2026-03-12](papers/2026-03-12.md) - 11 papers
- [2026-03-11](papers/2026-03-11.md) - 22 papers
- [2026-03-10](papers/2026-03-10.md) - 12 papers
- [2026-03-09](papers/2026-03-09.md) - 9 papers
- [2026-03-07](papers/2026-03-07.md) - 18 papers
- [2026-03-05](papers/2026-03-05.md) - 7 papers
- [2026-03-04](papers/2026-03-04.md) - 23 papers
- [2026-03-03](papers/2026-03-03.md) - 2 papers
- [2026-03-02](papers/2026-03-02.md) - 6 papers
- [2026-02-27](papers/2026-02-27.md) - 18 papers
- [2026-02-26](papers/2026-02-26.md) - 11 papers
- [2026-02-25](papers/2026-02-25.md) - 12 papers
- [2026-02-24](papers/2026-02-24.md) - 8 papers
- [2026-02-23](papers/2026-02-23.md) - 2 papers
- [2026-02-20](papers/2026-02-20.md) - 2 papers
- [2026-02-19](papers/2026-02-19.md) - 8 papers
- [2026-02-18](papers/2026-02-18.md) - 8 papers
- [2026-02-17](papers/2026-02-17.md) - 3 papers
- [2026-02-16](papers/2026-02-16.md) - 4 papers
- [2026-02-14](papers/2026-02-14.md) - 16 papers
<!-- PAPERS_INDEX_END -->

## Other Topics

- [World Model Papers](world-model/README.md)
- [Agent Papers](agent/README.md)

## Daily Papers

<!-- PAPERS_CONTENT_START -->
<details><summary><b>2026-03-19 (31 papers)</b></summary>

# arXiv Video Papers - 2026-03-19

**Paper Count**: 31

---

## 1. Unified Spatio-Temporal Token Scoring for Efficient Video VLMs / 高效视频 VLM 的统一时空令牌评分

**Date**: 2026-03-18 | **arXiv**: [2603.18004v1](http://arxiv.org/abs/2603.18004v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.18004v1)

**Categories**: cs.CV, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Token pruning is essential for enhancing the computational efficiency of vision-language models (VLMs), particularly for video-based tasks where temporal redundancy is prevalent. Prior approaches typically prune tokens either (1) within the vision transformer (ViT) exclusively for unimodal perception tasks such as action recognition and object segmentation, without adapting to downstream vision-language tasks; or (2) only within the LLM while leaving the ViT output intact, often requiring complex text-conditioned token selection mechanisms. In this paper, we introduce Spatio-Temporal Token Scoring (STTS), a simple and lightweight module that prunes vision tokens across both the ViT and the LLM without text conditioning or token merging, and is fully compatible with end-to-end training. By learning how to score temporally via an auxiliary loss and spatially via LLM downstream gradients, aided by our efficient packing algorithm, STTS prunes 50% of vision tokens throughout the entire architecture, resulting in a 62% improvement in efficiency during both training and inference with only a 0.7% drop in average performance across 13 short and long video QA tasks. Efficiency gains increase with more sampled frames per video. Applying test-time scaling for long-video QA further yields performance gains of 0.5-1% compared to the baseline. Overall, STTS represents a novel, simple yet effective technique for unified, architecture-wide vision token pruning.

令牌修剪对于提高视觉语言模型（VLM）的计算效率至关重要，特别是对于普遍存在时间冗余的基于视频的任务。先前的方法通常会修剪（1）在视觉转换器（ViT）内专门用于单模态感知任务（例如动作识别和对象分割）的令牌，而不适应下游视觉语言任务； (2) 仅在 LLM 内，同时保持 ViT 输出完整，通常需要复杂的文本条件令牌选择机制。在本文中，我们介绍了时空令牌评分（STTS），这是一个简单而轻量级的模块，可以在 ViT 和 LLM 之间修剪视觉令牌，无需文本条件或令牌合并，并且与端到端训练完全兼容。通过学习如何通过辅助损失进行时间评分以及通过 LLM 下游梯度进行空间评分，在我们高效的打包算法的帮助下，STTS 在整个架构中修剪了 50% 的视觉标记，从而使训练和推理期间的效率提高了 62%，而 13 个短视频和长视频 QA 任务的平均性能仅下降了 0.7%。每个视频的采样帧数越多，效率就会越高。与基线相比，对长视频 QA 应用测试时间缩放可进一步提高 0.5-1% 的性能。总的来说，STTS 代表了一种新颖、简单但有效的技术，用于统一的、架构范围的视觉令牌修剪。

</details>

---

## 2. The Unreasonable Effectiveness of Text Embedding Interpolation for Continuous Image Steering / 连续图像转向的文本嵌入插值的不合理效果

**Date**: 2026-03-18 | **arXiv**: [2603.17998v1](http://arxiv.org/abs/2603.17998v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17998v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We present a training-free framework for continuous and controllable image editing at test time for text-conditioned generative models. In contrast to prior approaches that rely on additional training or manual user intervention, we find that a simple steering in the text-embedding space is sufficient to produce smooth edit control. Given a target concept (e.g., enhancing photorealism or changing facial expression), we use a large language model to automatically construct a small set of debiased contrastive prompt pairs, from which we compute a steering vector in the generator's text-encoder space. We then add this vector directly to the input prompt representation to control generation along the desired semantic axis. To obtain a continuous control, we propose an elastic range search procedure that automatically identifies an effective interval of steering magnitudes, avoiding both under-steering (no-edit) and over-steering (changing other attributes). Adding the scaled versions of the same vector within this interval yields smooth and continuous edits. Since our method modifies only textual representations, it naturally generalizes across text-conditioned modalities, including image and video generation. To quantify the steering continuity, we introduce a new evaluation metric that measures the uniformity of semantic change across edit strengths. We compare the continuous editing behavior across methods and find that, despite its simplicity and lightweight design, our approach is comparable to training-based alternatives, outperforming other training-free methods.

我们提出了一个免训练框架，用于在测试时对文本条件生成模型进行连续且可控的图像编辑。与依赖额外训练或手动用户干预的先前方法相比，我们发现文本嵌入空间中的简单转向足以产生平滑的编辑控制。给定一个目标概念（例如，增强照片真实感或改变面部表情），我们使用大型语言模型自动构建一小组去偏对比提示对，从中计算生成器文本编码器空间中的转向向量。然后，我们将该向量直接添加到输入提示表示中，以控制沿所需语义轴的生成。为了获得连续控制，我们提出了一种弹性范围搜索程序，该程序自动识别转向幅度的有效间隔，避免转向不足（无编辑）和转向过度（更改其他属性）。在此间隔内添加同一向量的缩放版本可产生平滑且连续的编辑。由于我们的方法仅修改文本表示，因此它自然地可以推广到文本条件模式，包括图像和视频生成。为了量化转向连续性，我们引入了一种新的评估指标，用于衡量编辑强度之间语义变化的一致性。我们比较了不同方法的连续编辑行为，发现尽管我们的方法简单且轻量级设计，但它与基于训练的替代方法相当，优于其他免训练方法。

</details>

---

## 3. Versatile Editing of Video Content, Actions, and Dynamics without Training / 无需培训即可对视频内容、动作和动态进行多功能编辑

**Date**: 2026-03-18 | **arXiv**: [2603.17989v1](http://arxiv.org/abs/2603.17989v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17989v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Controlled video generation has seen drastic improvements in recent years. However, editing actions and dynamic events, or inserting contents that should affect the behaviors of other objects in real-world videos, remains a major challenge. Existing trained models struggle with complex edits, likely due to the difficulty of collecting relevant training data. Similarly, existing training-free methods are inherently restricted to structure- and motion-preserving edits and do not support modification of motion or interactions. Here, we introduce DynaEdit, a training-free editing method that unlocks versatile video editing capabilities with pretrained text-to-video flow models. Our method relies on the recently introduced inversion-free approach, which does not intervene in the model internals, and is thus model-agnostic. We show that naively attempting to adapt this approach to general unconstrained editing results in severe low-frequency misalignment and high-frequency jitter. We explain the sources for these phenomena and introduce novel mechanisms for overcoming them. Through extensive experiments, we show that DynaEdit achieves state-of-the-art results on complex text-based video editing tasks, including modifying actions, inserting objects that interact with the scene, and introducing global effects.

近年来，受控视频生成取得了巨大的进步。然而，编辑动作和动态事件，或插入影响现实视频中其他对象行为的内容，仍然是一个重大挑战。现有的经过训练的模型难以进行复杂的编辑，这可能是由于收集相关训练数据的困难所致。同样，现有的免训练方法本质上仅限于结构和运动保留编辑，并且不支持运动或交互的修改。在这里，我们介绍 DynaEdit，这是一种免训练的编辑方法，可通过预训练的文本到视频流模型解锁多功能视频编辑功能。我们的方法依赖于最近引入的无反演方法，该方法不会干预模型内部，因此与模型无关。我们表明，天真地尝试将此方法应用于一般无约束编辑会导致严重的低频未对准和高频抖动。我们解释了这些现象的根源，并引入了克服这些现象的新机制。通过大量的实验，我们表明 DynaEdit 在复杂的基于文本的视频编辑任务上实现了最先进的结果，包括修改动作、插入与场景交互的对象以及引入全局效果。

</details>

---

## 4. AHOY! Animatable Humans under Occlusion from YouTube Videos with Gaussian Splatting and Video Diffusion Priors / 哎哟！使用高斯泼溅和视频扩散先验的 YouTube 视频遮挡下的可动画人体

**Date**: 2026-03-18 | **arXiv**: [2603.17975v1](http://arxiv.org/abs/2603.17975v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17975v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We present AHOY, a method for reconstructing complete, animatable 3D Gaussian avatars from in-the-wild monocular video despite heavy occlusion. Existing methods assume unoccluded input-a fully visible subject, often in a canonical pose-excluding the vast majority of real-world footage where people are routinely occluded by furniture, objects, or other people. Reconstructing from such footage poses fundamental challenges: large body regions may never be observed, and multi-view supervision per pose is unavailable. We address these challenges with four contributions: (i) a hallucination-as-supervision pipeline that uses identity-finetuned diffusion models to generate dense supervision for previously unobserved body regions; (ii) a two-stage canonical-to-pose-dependent architecture that bootstraps from sparse observations to full pose-dependent Gaussian maps; (iii) a map-pose/LBS-pose decoupling that absorbs multi-view inconsistencies from the generated data; (iv) a head/body split supervision strategy that preserves facial identity. We evaluate on YouTube videos and on multi-view capture data with significant occlusion and demonstrate state-of-the-art reconstruction quality. We also demonstrate that the resulting avatars are robust enough to be animated with novel poses and composited into 3DGS scenes captured using cell-phone video. Our project page is available at https://miraymen.github.io/ahoy/

我们提出了 AHOY，一种在存在严重遮挡的情况下从野外单眼视频重建完整、可动画的 3D 高斯化身的方法。现有的方法假设未遮挡的输入——一个完全可见的主题，通常处于规范的姿势——排除绝大多数现实世界的镜头，在这些镜头中，人们通常被家具、物体或其他人遮挡。从这些镜头中进行重建提出了根本性的挑战：可能永远无法观察到大的身体区域，并且无法对每个姿势进行多视图监督。我们通过四个贡献来应对这些挑战：（i）幻觉作为监督管道，使用身份微调的扩散模型为以前未观察到的身体区域生成密集的监督； (ii) 两阶段规范到姿态相关的架构，从稀疏观测引导到完全姿态相关的高斯图； (iii) 地图姿态/LBS姿态解耦，吸收生成数据中的多视图不一致； (iv) 保留面部身份的头部/身体分离监督策略。我们对 YouTube 视频和具有明显遮挡的多视图捕获数据进行评估，并展示最先进的重建质量。我们还证明，生成的头像足够强大，可以用新颖的姿势进行动画处理，并合成到使用手机视频捕获的 3DGS 场景中。我们的项目页面位于 https://miraymen.github.io/ahoy/

</details>

---

## 5. VideoAtlas: Navigating Long-Form Video in Logarithmic Compute / VideoAtlas：在对数计算中导航长格式视频

**Date**: 2026-03-18 | **arXiv**: [2603.17948v1](http://arxiv.org/abs/2603.17948v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17948v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Extending language models to video introduces two challenges: representation, where existing methods rely on lossy approximations, and long-context, where caption- or agent-based pipelines collapse video into text and lose visual fidelity. To overcome this, we introduce \textbf{VideoAtlas}, a task-agnostic environment to represent video as a hierarchical grid that is simultaneously lossless, navigable, scalable, caption- and preprocessing-free. An overview of the video is available at a glance, and any region can be recursively zoomed into, with the same visual representation used uniformly for the video, intermediate investigations, and the agent's memory, eliminating lossy text conversion end-to-end. This hierarchical structure ensures access depth grows only logarithmically with video length. For long-context, Recursive Language Models (RLMs) recently offered a powerful solution for long text, but extending them to visual domain requires a structured environment to recurse into, which \textbf{VideoAtlas} provides. \textbf{VideoAtlas} as a Markov Decision Process unlocks Video-RLM: a parallel Master-Worker architecture where a Master coordinates global exploration while Workers concurrently drill into assigned regions to accumulate lossless visual evidence. We demonstrate three key findings: (1)~logarithmic compute growth with video duration, further amplified by a 30-60\% multimodal cache hit rate arising from the grid's structural reuse. (2)~environment budgeting, where bounding the maximum exploration depth provides a principled compute-accuracy hyperparameter. (3)~emergent adaptive compute allocation that scales with question granularity. When scaling from 1-hour to 10-hour benchmarks, Video-RLM remains the most duration-robust method with minimal accuracy degradation, demonstrating that structured environment navigation is a viable and scalable paradigm for video understanding.

将语言模型扩展到视频带来了两个挑战：表示（现有方法依赖于有损近似）和长上下文（基于字幕或基于代理的管道将视频压缩为文本并失去视觉保真度）。为了克服这个问题，我们引入了 \textbf{VideoAtlas}，这是一个与任务无关的环境，将视频表示为分层网格，同时无损、可导航、可扩展、无需字幕和预处理。视频概览一目了然，任何区域都可以递归放大，视频、中间调查和代理记忆统一使用相同的视觉表示，从而消除端到端的有损文本转换。这种分层结构确保访问深度仅随视频长度呈对数增长。对于长上下文，递归语言模型（RLM）最近为长文本提供了强大的解决方案，但将它们扩展到视觉领域需要递归到结构化环境，而 \textbf{VideoAtlas} 提供了这种环境。 \textbf{VideoAtlas} 作为马尔可夫决策过程解锁了 Video-RLM：一种并行的主从架构，其中主控协调全局探索，而工人同时深入到指定区域以积累无损视觉证据。我们展示了三个关键发现：(1)~计算量随视频持续时间呈对数增长，并因网格结构重用而产生的 30-60% 多模式缓存命中率进一步放大。 (2)~环境预算，其中限制最大探索深度提供了有原则的计算精度超参数。 (3)~随问题粒度扩展的紧急自适应计算分配。当基准从 1 小时扩展到 10 小时时，Video-RLM 仍然是持续时间最稳健的方法，且精度下降最小，这表明结构化环境导航是视频理解的可行且可扩展的范例。

</details>

---

## 6. TransText: Transparency Aware Image-to-Video Typography Animation / TransText：透明度感知的图像到视频排版动画

**Date**: 2026-03-18 | **arXiv**: [2603.17944v1](http://arxiv.org/abs/2603.17944v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17944v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We introduce the first method, to the best of our knowledge, for adapting image-to-video models to layer-aware text (glyph) animation, a capability critical for practical dynamic visual design. Existing approaches predominantly handle the transparency-encoding (alpha channel) as an extra latent dimension appended to the RGB space, necessitating the reconstruction of the underlying RGB-centric variational autoencoder (VAE). However, given the scarcity of high-quality transparent glyph data, retraining the VAE is computationally expensive and may erode the robust semantic priors learned from massive RGB corpora, potentially leading to latent pattern mixing. To mitigate these limitations, we propose TransText, a framework based on a novel Alpha-as-RGB paradigm to jointly model appearance and transparency without modifying the pre-trained generative manifold. TransText embeds the alpha channel as an RGB-compatible visual signal through latent spatial concatenation, explicitly ensuring strict cross-modal (RGB-and-Alpha) consistency while preventing feature entanglement. Our experiments demonstrate that TransText significantly outperforms baselines, generating coherent, high-fidelity transparent animations with diverse, fine-grained effects.

据我们所知，我们介绍第一种方法，用于使图像到视频模型适应分层感知文本（字形）动画，这是实际动态视觉设计的关键功能。现有方法主要将透明度编码（Alpha 通道）作为附加到 RGB 空间的额外潜在维度进行处理，因此需要重建底层以 RGB 为中心的变分自动编码器 (VAE)。然而，鉴于高质量透明字形数据的稀缺，重新训练 VAE 的计算成本很高，并且可能会侵蚀从大量 RGB 语料库中学到的强大语义先验，从而可能导致潜在模式混合。为了减轻这些限制，我们提出了 TransText，这是一个基于新颖的 Alpha-as-RGB 范式的框架，可以联合建模外观和透明度，而无需修改预先训练的生成流形。 TransText 通过潜在空间串联将 Alpha 通道嵌入为 RGB 兼容的视觉信号，明确确保严格的跨模式（RGB 和 Alpha）一致性，同时防止特征纠缠。我们的实验表明，TransText 的性能显着优于基线，可生成具有多样化、细粒度效果的连贯、高保真透明动画。

</details>

---

## 7. Identity as Presence: Towards Appearance and Voice Personalized Joint Audio-Video Generation / 身份即存在：走向外观和语音个性化联合音视频生成

**Date**: 2026-03-18 | **arXiv**: [2603.17889v1](http://arxiv.org/abs/2603.17889v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17889v1)

**Categories**: cs.CV

**Project**: https://chen-yingjie.github.io/projects/Identity-as-Presence  <details><summary><b>Abstract / 摘要</b></summary>

Recent advances have demonstrated compelling capabilities in synthesizing real individuals into generated videos, reflecting the growing demand for identity-aware content creation. Nevertheless, an openly accessible framework enabling fine-grained control over facial appearance and voice timbre across multiple identities remains unavailable. In this work, we present a unified and scalable framework for identity-aware joint audio-video generation, enabling high-fidelity and consistent personalization. Specifically, we introduce a data curation pipeline that automatically extracts identity-bearing information with paired annotations across audio and visual modalities, covering diverse scenarios from single-subject to multi-subject interactions. We further propose a flexible and scalable identity injection mechanism for single- and multi-subject scenarios, in which both facial appearance and vocal timbre act as identity-bearing control signals. Moreover, in light of modality disparity, we design a multi-stage training strategy to accelerate convergence and enforce cross-modal coherence. Experiments demonstrate the superiority of the proposed framework. For more details and qualitative results, please refer to our webpage: \href{https://chen-yingjie.github.io/projects/Identity-as-Presence}{Identity-as-Presence}.

最近的进展展示了将真实个体合成到生成视频方面的引人注目的能力，反映了对身份识别内容创建日益增长的需求。然而，仍然无法提供一个可公开访问的框架，能够对多个身份的面部外观和语音音色进行细粒度控制。在这项工作中，我们提出了一个统一且可扩展​​的框架，用于身份感知联合音频视频生成，从而实现高保真和一致的个性化。具体来说，我们引入了一个数据管理管道，它可以自动提取带有跨音频和视觉模式的配对注释的身份信息，涵盖从单主体到多主体交互的不同场景。我们进一步提出了一种适用于单主体和多主体场景的灵活且可扩展的身份注入机制，其中面部外观和音色都充当身份承载控制信号。此外，鉴于模态差异，我们设计了一种多阶段训练策略来加速收敛并加强跨模态一致性。实验证明了所提出框架的优越性。有关更多详细信息和定性结果，请参阅我们的网页：\href{https://chen-yingjie.github.io/projects/Identity-as-Presence}{Identity-as-Presence}。

</details>

---

## 8. Video Understanding: From Geometry and Semantics to Unified Models / 视频理解：从几何和语义到统一模型

**Date**: 2026-03-18 | **arXiv**: [2603.17840v1](http://arxiv.org/abs/2603.17840v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17840v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Video understanding aims to enable models to perceive, reason about, and interact with the dynamic visual world. In contrast to image understanding, video understanding inherently requires modeling temporal dynamics and evolving visual context, placing stronger demands on spatiotemporal reasoning and making it a foundational problem in computer vision. In this survey, we present a structured overview of video understanding by organizing the literature into three complementary perspectives: low-level video geometry understanding, high-level semantic understanding, and unified video understanding models. We further highlight a broader shift from isolated, task-specific pipelines toward unified modeling paradigms that can be adapted to diverse downstream objectives, enabling a more systematic view of recent progress. By consolidating these perspectives, this survey provides a coherent map of the evolving video understanding landscape, summarizes key modeling trends and design principles, and outlines open challenges toward building robust, scalable, and unified video foundation models.

视频理解旨在使模型能够感知、推理动态视觉世界并与之交互。与图像理解相反，视频理解本质上需要对时间动态进行建模和不断变化的视觉上下文，这对时空推理提出了更严格的要求，并使其成为计算机视觉的基础问题。在本次调查中，我们通过将文献组织为三个互补的视角来呈现视频理解的结构化概述：低级视频几何理解、高级语义理解和统一视频理解模型。我们进一步强调了从孤立的、特定于任务的管道到统一建模范式的更广泛转变，该范式可以适应不同的下游目标，从而能够更系统地了解最近的进展。通过整合这些观点，本次调查提供了不断发展的视频理解格局的连贯图，总结了关键建模趋势和设计原则，并概述了构建稳健、可扩展和统一视频基础模型的开放挑战。

</details>

---

## 9. Steering Video Diffusion Transformers with Massive Activations / 通过大量激活控制视频扩散变压器

**Date**: 2026-03-18 | **arXiv**: [2603.17825v1](http://arxiv.org/abs/2603.17825v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17825v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Despite rapid progress in video diffusion transformers, how their internal model signals can be leveraged with minimal overhead to enhance video generation quality remains underexplored. In this work, we study the role of Massive Activations (MAs), which are rare, high-magnitude hidden state spikes in video diffusion transformers. We observed that MAs emerge consistently across all visual tokens, with a clear magnitude hierarchy: first-frame tokens exhibit the largest MA magnitudes, latent-frame boundary tokens (the head and tail portions of each temporal chunk in the latent space) show elevated but slightly lower MA magnitudes than the first frame, and interior tokens within each latent frame remain elevated, yet are comparatively moderate in magnitude. This structured pattern suggests that the model implicitly prioritizes token positions aligned with the temporal chunking in the latent space. Based on this observation, we propose Structured Activation Steering (STAS), a training-free self-guidance-like method that steers MA values at first-frame and boundary tokens toward a scaled global maximum reference magnitude. STAS achieves consistent improvements in terms of video quality and temporal coherence across different text-to-video models, while introducing negligible computational overhead.

尽管视频扩散变压器取得了快速进展，但如何以最小的开销利用其内部模型信号来提高视频生成质量仍然尚未得到充分探索。在这项工作中，我们研究了大规模激活（MA）的作用，这是视频扩散变压器中罕见的高幅度隐藏状态尖峰。我们观察到，MA 在所有视觉标记中一致出现，具有清晰的幅度层次结构：第一帧标记表现出最大的 MA 幅度，潜在帧边界标记（潜在空间中每个时间块的头部和尾部）显示出比第一帧升高但略低的 MA 幅度，每个潜在帧内的内部标记保持升高，但幅度相对适中。这种结构化模式表明，该模型隐式优先考虑与潜在空间中的时间分块对齐的标记位置。基于这一观察，我们提出了结构化激活转向（STAS），这是一种免训练的类似自引导的方法，可将第一帧和边界标记的 MA 值引导至缩放的全局最大参考幅度。 STAS 在不同的文本到视频模型中实现了视频质量和时间一致性方面的持续改进，同时引入的计算开销可以忽略不计。

</details>

---

## 10. M2P: Improving Visual Foundation Models with Mask-to-Point Weakly-Supervised Learning for Dense Point Tracking / M2P：通过用于密集点跟踪的掩模到点弱监督学习改进视觉基础模型

**Date**: 2026-03-18 | **arXiv**: [2603.17813v1](http://arxiv.org/abs/2603.17813v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17813v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Tracking Any Point (TAP) has emerged as a fundamental tool for video understanding. Current approaches adapt Vision Foundation Models (VFMs) like DINOv2 via offline finetuning or test-time optimization. However, these VFMs rely on static image pre-training, which is inherently sub-optimal for capturing dense temporal correspondence in videos. To address this, we propose Mask-to-Point (M2P) learning, which leverages rich video object segmentation (VOS) mask annotations to improve VFMs for dense point tracking. Our M2P introduces three new mask-based constraints for weakly-supervised representation learning. First, we propose a local structure consistency loss, which leverages Procrustes analysis to model the cohesive motion of points lying within a local structure, achieving more reliable point-to-point matching learning. Second, we propose a mask label consistency (MLC) loss, which enforces that sampled foreground points strictly match foreground regions across frames. The proposed MLC loss can be regarded as a regularization, which stabilizes training and prevents convergence to trivial solutions. Finally, mask boundary constrain is applied to explicitly supervise boundary points. We show that our weaklysupervised M2P models significantly outperform baseline VFMs with efficient training by using only 3.6K VOS training videos. Notably, M2P achieves 12.8% and 14.6% performance gains over DINOv2-B/14 and DINOv3-B/16 on the TAP-Vid-DAVIS benchmark, respectively. Moreover, the proposed M2P models are used as pre-trained backbones for both test-time optimized and offline fine-tuned TAP tasks, demonstrating its potential to serve as general pre-trained models for point tracking. Code will be made publicly available upon acceptance.

跟踪任意点 (TAP) 已成为视频理解的基本工具。当前的方法通过离线微调或测试时间优化来适应 DINOv2 等视觉基础模型 (VFM)。然而，这些 VFM 依赖于静态图像预训练，这对于捕获视频中的密集时间对应关系本质上不是最佳选择。为了解决这个问题，我们提出了掩模到点（M2P）学习，它利用丰富的视频对象分割（VOS）掩模注释来改进用于密集点跟踪的 VFM。我们的 M2P 为弱监督表示学习引入了三个新的基于掩码的约束。首先，我们提出了一种局部结构一致性损失，它利用 Procrustes 分析来模拟局部结构内点的内聚运动，实现更可靠的点对点匹配学习。其次，我们提出了掩模标签一致性（MLC）损失，它强制采样的前景点严格匹配帧间的前景区域。所提出的 MLC 损失可以被视为一种正则化，它可以稳定训练并防止收敛到平凡的解决方案。最后，应用掩模边界约束来显式监督边界点。我们表明，我们的弱监督 M2P 模型通过仅使用 3.6K VOS 训练视频进行高效训练，显着优于基线 VFM。值得注意的是，在 TAP-Vid-DAVIS 基准测试中，M2P 比 DINOv2-B/14 和 DINOv3-B/16 分别实现了 12.8% 和 14.6% 的性能提升。此外，所提出的 M2P 模型被用作测试时间优化和离线微调 TAP 任务的预训练主干，展示了其作为点跟踪的通用预训练模型的潜力。代码将在接受后公开发布。

</details>

---

## 11. ChopGrad: Pixel-Wise Losses for Latent Video Diffusion via Truncated Backpropagation / ChopGrad：通过截断反向传播实现潜在视频扩散的逐像素损失

**Date**: 2026-03-18 | **arXiv**: [2603.17812v1](http://arxiv.org/abs/2603.17812v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17812v1)

**Categories**: cs.CV, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Recent video diffusion models achieve high-quality generation through recurrent frame processing where each frame generation depends on previous frames. However, this recurrent mechanism means that training such models in the pixel domain incurs prohibitive memory costs, as activations accumulate across the entire video sequence. This fundamental limitation also makes fine-tuning these models with pixel-wise losses computationally intractable for long or high-resolution videos. This paper introduces ChopGrad, a truncated backpropagation scheme for video decoding, limiting gradient computation to local frame windows while maintaining global consistency. We provide a theoretical analysis of this approximation and show that it enables efficient fine-tuning with frame-wise losses. ChopGrad reduces training memory from scaling linearly with the number of video frames (full backpropagation) to constant memory, and compares favorably to existing state-of-the-art video diffusion models across a suite of conditional video generation tasks with pixel-wise losses, including video super-resolution, video inpainting, video enhancement of neural-rendered scenes, and controlled driving video generation.

最近的视频扩散模型通过循环帧处理实现高质量生成，其中每个帧的生成都取决于先前的帧。然而，这种循环机制意味着在像素域中训练此类模型会产生过高的内存成本，因为激活会在整个视频序列中累积。对于长视频或高分辨率视频来说，这一基本限制还使得通过像素损失来微调这些模型在计算上变得困难。本文介绍了 ChopGrad，一种用于视频解码的截断反向传播方案，将梯度计算限制在局部帧窗口，同时保持全局一致性。我们提供了这种近似的理论分析，并表明它可以通过逐帧损失进行有效的微调。 ChopGrad 将训练内存从随视频帧数量线性缩放（完全反向传播）减少到恒定内存，并且在一系列具有像素损失的条件视频生成任务中与现有最先进的视频扩散模型相比，包括视频超分辨率、视频修复、神经渲染场景的视频增强和受控驾驶视频生成。

</details>

---

## 12. EVA: Aligning Video World Models with Executable Robot Actions via Inverse Dynamics Rewards / EVA：通过反向动态奖励将视频世界模型与可执行的机器人动作结合起来

**Date**: 2026-03-18 | **arXiv**: [2603.17808v1](http://arxiv.org/abs/2603.17808v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17808v1)

**Categories**: cs.RO, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Video generative models are increasingly used as world models for robotics, where a model generates a future visual rollout conditioned on the current observation and task instruction, and an inverse dynamics model (IDM) converts the generated frames into executable robot actions. However, current video world models lack explicit executability constraints. As a result, visually coherent rollouts may still violate rigid-body and kinematic consistency, producing unstable or infeasible control commands when decoded by an IDM. We refer to this mismatch between visual generation and physically executable control as the executability gap. While this gap can be mitigated at inference time using techniques such as rejection sampling, such approaches are inefficient due to the high cost of video generation. In this paper, we leverage the executability gap as a training signal and introduce Executable Video Alignment (EVA), a reinforcement-learning post-training framework for aligning video world models. EVA trains an inverse dynamics model on real robot trajectories and repurposes it as a reward model that evaluates generated videos through the action sequences they induce, encouraging smooth motions measured by velocity, acceleration, and jerk while penalizing actions that violate embodiment constraints. Importantly, the reward remains informative even when generated videos contain severe visual artifacts, since such artifacts typically translate into unstable or out-of-bound actions. Experiments on the RoboTwin benchmark and a real bimanual robot show that EVA reduces embodiment-specific artifacts in generated rollouts and improves downstream task execution success.

视频生成模型越来越多地用作机器人的世界模型，其中模型根据当前观察和任务指令生成未来的视觉展示，而逆动力学模型（IDM）将生成的帧转换为可执行的机器人动作。然而，当前的视频世界模型缺乏明确的可执行性约束。因此，视觉上连贯的推出仍然可能违反刚体和运动学一致性，在 IDM 解码时产生不稳定或不可行的控制命令。我们将视觉生成和物理可执行控制之间的这种不匹配称为可执行性差距。虽然可以在推理时使用拒绝采样等技术来缩小这种差距，但由于视频生成成本高昂，此类方法效率低下。在本文中，我们利用可执行性差距作为训练信号，并引入可执行视频对齐（EVA），这是一种用于对齐视频世界模型的强化学习后训练框架。 EVA 在真实机器人轨迹上训练逆动力学模型，并将其重新用作奖励模型，通过生成的视频所引发的动作序列来评估生成的视频，鼓励通过速度、加速度和加加速度测量的平滑运动，同时惩罚违反实施例约束的动作。重要的是，即使生成的视频包含严重的视觉伪影，奖励仍然可以提供信息，因为此类伪影通常会转化为不稳定或越界动作。 RoboTwin 基准测试和真实双手机器人的实验表明，EVA 减少了生成的部署中特定于实施例的工件，并提高了下游任务执行的成功率。

</details>

---

## 13. TAPESTRY: From Geometry to Appearance via Consistent Turntable Videos / TAPESTRY：通过一致的转盘视频从几何形状到外观

**Date**: 2026-03-18 | **arXiv**: [2603.17735v1](http://arxiv.org/abs/2603.17735v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17735v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Automatically generating photorealistic and self-consistent appearances for untextured 3D models is a critical challenge in digital content creation. The advancement of large-scale video generation models offers a natural approach: directly synthesizing 360-degree turntable videos (TTVs), which can serve not only as high-quality dynamic previews but also as an intermediate representation to drive texture synthesis and neural rendering. However, existing general-purpose video diffusion models struggle to maintain strict geometric consistency and appearance stability across the full range of views, making their outputs ill-suited for high-quality 3D reconstruction. To this end, we introduce TAPESTRY, a framework for generating high-fidelity TTVs conditioned on explicit 3D geometry. We reframe the 3D appearance generation task as a geometry-conditioned video diffusion problem: given a 3D mesh, we first render and encode multi-modal geometric features to constrain the video generation process with pixel-level precision, thereby enabling the creation of high-quality and consistent TTVs. Building upon this, we also design a method for downstream reconstruction tasks from the TTV input, featuring a multi-stage pipeline with 3D-Aware Inpainting. By rotating the model and performing a context-aware secondary generation, this pipeline effectively completes self-occluded regions to achieve full surface coverage. The videos generated by TAPESTRY are not only high-quality dynamic previews but also serve as a reliable, 3D-aware intermediate representation that can be seamlessly back-projected into UV textures or used to supervise neural rendering methods like 3DGS. This enables the automated creation of production-ready, complete 3D assets from untextured meshes. Experimental results demonstrate that our method outperforms existing approaches in both video consistency and final reconstruction quality.

自动为无纹理 3D 模型生成逼真且一致的外观是数字内容创建中的一项关键挑战。大规模视频生成模型的进步提供了一种自然的方法：直接合成360度转盘视频（TTV），它不仅可以用作高质量的动态预览，还可以作为驱动纹理合成和神经渲染的中间表示。然而，现有的通用视频扩散模型很难在整个视图范围内保持严格的几何一致性和外观稳定性，从而使其输出不适合高质量的 3D 重建。为此，我们引入了 TAPESTRY，一个用于生成以显式 3D 几何为条件的高保真 TTV 的框架。我们将 3D 外观生成任务重新定义为几何条件视频扩散问题：给定 3D 网格，我们首先渲染和编码多模态几何特征，以像素级精度约束视频生成过程，从而能够创建高质量且一致的 TTV。在此基础上，我们还设计了一种从 TTV 输入进行下游重建任务的方法，具有具有 3D 感知修复功能的多级管道。通过旋转模型并执行上下文感知的二次生成，该管道有效地完成了自遮挡区域，以实现完整的表面覆盖。 TAPESTRY 生成的视频不仅是高质量的动态预览，而且还可以作为可靠的 3D 感知中间表示，可以无缝反投影到 UV 纹理或用于监督 3DGS 等神经渲染方法。这使得能够从无纹理的网格自动创建可用于生产的完整 3D 资源。实验结果表明，我们的方法在视频一致性和最终重建质量方面均优于现有方法。

</details>

---

## 14. Learning Transferable Temporal Primitives for Video Reasoning via Synthetic Videos / 通过合成视频学习用于视频推理的可转移时间原语

**Date**: 2026-03-18 | **arXiv**: [2603.17693v1](http://arxiv.org/abs/2603.17693v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17693v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

The transition from image to video understanding requires vision-language models (VLMs) to shift from recognizing static patterns to reasoning over temporal dynamics such as motion trajectories, speed changes, and state transitions. Yet current post-training methods fall short due to two critical limitations: (1) existing datasets often lack temporal-centricity, where answers can be inferred from isolated keyframes rather than requiring holistic temporal integration; and (2) training data generated by proprietary models contains systematic errors in fundamental temporal perception, such as confusing motion directions or misjudging speeds. We introduce SynRL, a post-training framework that teaches models temporal primitives, the fundamental building blocks of temporal understanding including direction, speed, and state tracking. Our key insight is that these abstract primitives, learned from programmatically generated synthetic videos, transfer effectively to real-world scenarios. We decompose temporal understanding into short-term perceptual primitives (speed, direction) and long-term cognitive primitives, constructing 7.7K CoT and 7K RL samples with ground-truth frame-level annotations through code-based video generation. Despite training on simple geometric shapes, SynRL achieves substantial improvements across 15 benchmarks spanning temporal grounding, complex reasoning, and general video understanding. Remarkably, our 7.7K synthetic CoT samples outperform Video-R1 with 165K real-world samples. We attribute this to fundamental temporal skills, such as tracking frame by frame changes and comparing velocity, that transfer effectively from abstract synthetic patterns to complex real-world scenarios. This establishes a new paradigm for video post-training: video temporal learning through carefully designed synthetic data provides a more cost efficient scaling path.

从图像理解到视频理解的转变需要视觉语言模型（VLM）从识别静态模式转变为对时间动态（例如运动轨迹、速度变化和状态转换）进行推理。然而，当前的后训练方法由于两个关键限制而存在不足：（1）现有数据集通常缺乏时间中心性，可以从孤立的关键帧中推断出答案，而不需要整体时间集成； （2）专有模型生成的训练数据包含基本时间感知的系统错误，例如混淆运动方向或误判速度。我们介绍 SynRL，这是一个训练后框架，用于教授模型时间原语，即时间理解的基本构建块，包括方向、速度和状态跟踪。我们的主要见解是，这些从以编程方式生成的合成视频中学习的抽象原语可以有效地转移到现实世界的场景中。我们将时间理解分解为短期感知基元（速度、方向）和长期认知基元，通过基于代码的视频生成构建具有真实帧级注释的 7.7K CoT 和 7K RL 样本。尽管使用简单的几何形状进行训练，SynRL 在涵盖时间基础、复杂推理和一般视频理解的 15 个基准测试中取得了实质性改进。值得注意的是，我们的 7.7K 合成 CoT 样本的性能优于具有 165K 真实世界样本的 Video-R1。我们将此归因于基本的时间技能，例如逐帧跟踪变化和比较速度，这些技能可以有效地从抽象的合成模式转移到复杂的现实世界场景。这为视频后训练建立了一个新的范例：通过精心设计的合成数据进行视频时间学习提供了更具成本效益的扩展路径。

</details>

---

## 15. FrescoDiffusion: 4K Image-to-Video with Prior-Regularized Tiled Diffusion / FrescoDiffusion：具有先验正则化平铺扩散的 4K 图像到视频

**Date**: 2026-03-18 | **arXiv**: [2603.17555v1](http://arxiv.org/abs/2603.17555v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17555v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion-based image-to-video (I2V) models are increasingly effective, yet they struggle to scale to ultra-high-resolution inputs (e.g., 4K). Generating videos at the model's native resolution often loses fine-grained structure, whereas high-resolution tiled denoising preserves local detail but breaks global layout consistency. This failure mode is particularly severe in the fresco animation setting: monumental artworks containing many distinct characters, objects, and semantically different sub-scenes that must remain spatially coherent over time. We introduce FrescoDiffusion, a training-free method for coherent large-format I2V generation from a single complex image. The key idea is to augment tiled denoising with a precomputed latent prior: we first generate a low-resolution video at the underlying model resolution and upsample its latent trajectory to obtain a global reference that captures long-range temporal and spatial structure. For 4K generation, we compute per-tile noise predictions and fuse them with this reference at every diffusion timestep by minimizing a single weighted least-squares objective in model-output space. The objective combines a standard tile-merging criterion with our regularization term, yielding a closed-form fusion update that strengthens global coherence while retaining fine detail. We additionally provide a spatial regularization variable that enables region-level control over where motion is allowed. Experiments on the VBench-I2V dataset and our proposed fresco I2V dataset show improved global consistency and fidelity over tiled baselines, while being computationally efficient. Our regularization enables explicit controllability of the trade-off between creativity and consistency.

基于扩散的图像到视频 (I2V) 模型越来越有效，但它们难以扩展到超高分辨率输入（例如 4K）。以模型的原始分辨率生成视频通常会丢失细粒度结构，而高分辨率平铺去噪可以保留局部细节，但会破坏全局布局一致性。这种失败模式在壁画动画设置中尤其严重：包含许多不同角色、物体和语义上不同的子场景的纪念性艺术品必须随着时间的推移保持空间连贯性。我们引入了 FrescoDiffusion，这是一种无需训练的方法，可从单个复杂图像生成连贯的大幅面 I2V。关键思想是通过预先计算的潜在先验来增强平铺去噪：我们首先以底层模型分辨率生成低分辨率视频，并对其潜在轨迹进行上采样以获得捕获长范围时间和空间结构的全局参考。对于 4K 生成，我们计算每个图块的噪声预测，并通过最小化模型输出空间中的单个加权最小二乘目标，在每个扩散时间步将它们与此参考融合。该目标将标准图块合并标准与我们的正则化项相结合，产生封闭形式的融合更新，增强全局一致性，同时保留精细细节。我们还提供了一个空间正则化变量，可以对允许运动的区域进行区域级控制。 VBench-I2V 数据集和我们提出的 fresco I2V 数据集上的实验表明，与平铺基线相比，全局一致性和保真度有所提高，同时计算效率较高。我们的正则化使得创造力和一致性之间的权衡具有明确的可控性。

</details>

---

## 16. ProGVC: Progressive-based Generative Video Compression via Auto-Regressive Context Modeling / ProGVC：通过自回归上下文建模进行基于渐进的生成视频压缩

**Date**: 2026-03-18 | **arXiv**: [2603.17546v1](http://arxiv.org/abs/2603.17546v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17546v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Perceptual video compression leverages generative priors to reconstruct realistic textures and motions at low bitrates. However, existing perceptual codecs often lack native support for variable bitrate and progressive delivery, and their generative modules are weakly coupled with entropy coding, limiting bitrate reduction. Inspired by the next-scale prediction in the Visual Auto-Regressive (VAR) models, we propose ProGVC, a Progressive-based Generative Video Compression framework that unifies progressive transmission, efficient entropy coding, and detail synthesis within a single codec. ProGVC encodes videos into hierarchical multi-scale residual token maps, enabling flexible rate adaptation by transmitting a coarse-to-fine subset of scales in a progressive manner. A Transformer-based multi-scale autoregressive context model estimates token probabilities, utilized both for efficient entropy coding of the transmitted tokens and for predicting truncated fine-scale tokens at the decoder to restore perceptual details. Extensive experiments demonstrate that as a new coding paradigm, ProGVC delivers promising perceptual compression performance at low bitrates while offering practical scalability at the same time.

感知视频压缩利用生成先验以低比特率重建真实的纹理和运动。然而，现有的感知编解码器通常缺乏对可变比特率和渐进式交付的原生支持，并且它们的生成模块与熵编码的耦合较弱，限制了比特率的降低。受到视觉自回归 (VAR) 模型中下一个规模预测的启发，我们提出了 ProGVC，这是一种基于渐进式的生成视频压缩框架，它将渐进式传输、高效熵编码和细节合成统一在单个编解码器中。 ProGVC 将视频编码为分层多尺度残差标记图，通过以渐进方式传输从粗到细的尺度子集来实现灵活的速率自适应。基于 Transformer 的多尺度自回归上下文模型可估计令牌概率，既可用于传输令牌的高效熵编码，又可用于预测解码器处截断的精细尺度令牌以恢复感知细节。大量实验表明，作为一种新的编码范例，ProGVC 在低比特率下提供了有前景的感知压缩性能，同时提供了实用的可扩展性。

</details>

---

## 17. AR-CoPO: Align Autoregressive Video Generation with Contrastive Policy Optimization / AR-CoPO：将自回归视频生成与对比策略优化结合起来

**Date**: 2026-03-18 | **arXiv**: [2603.17461v1](http://arxiv.org/abs/2603.17461v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17461v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Streaming autoregressive (AR) video generators combined with few-step distillation achieve low-latency, high-quality synthesis, yet remain difficult to align via reinforcement learning from human feedback (RLHF). Existing SDE-based GRPO methods face challenges in this setting: few-step ODEs and consistency model samplers deviate from standard flow-matching ODEs, and their short, low-stochasticity trajectories are highly sensitive to initialization noise, rendering intermediate SDE exploration ineffective. We propose AR-CoPO (AutoRegressive Contrastive Policy Optimization), a framework that adapts the Neighbor GRPO contrastive perspective to streaming AR generation. AR-CoPO introduces chunk-level alignment via a forking mechanism that constructs neighborhood candidates at a randomly selected chunk, assigns sequence-level rewards, and performs localized GRPO updates. We further propose a semi-on-policy training strategy that complements on-policy exploration with exploitation over a replay buffer of reference rollouts, improving generation quality across domains. Experiments on Self-Forcing demonstrate that AR-CoPO improves both out-of-domain generalization and in-domain human preference alignment over the baseline, providing evidence of genuine alignment rather than reward hacking.

流式自回归 (AR) 视频生成器与几步蒸馏相结合，可实现低延迟、高质量的合成，但仍然难以通过人类反馈的强化学习 (RLHF) 进行对齐。现有的基于 SDE 的 GRPO 方法在这种情况下面临挑战：少步 ODE 和一致性模型采样器偏离标准流匹配 ODE，并且它们的短、低随机性轨迹对初始化噪声高度敏感，导致中间 SDE 探索无效。我们提出 AR-CoPO（自回归对比策略优化），这是一个将 Neighbor GRPO 对比视角应用于流式 AR 生成的框架。 AR-CoPO 通过分叉机制引入块级对齐，该分叉机制在随机选择的块上构建邻域候选，分配序列级奖励，并执行本地化 GRPO 更新。我们进一步提出了一种半策略训练策略，通过利用参考推出的重放缓冲区来补充策略探索，从而提高跨域的生成质量。 Self-Forcing 实验表明，AR-CoPO 在基线上改善了域外泛化和域内人类偏好对齐，提供了真正对齐的证据，而不是奖励黑客。

</details>

---

## 18. FACE-net: Factual Calibration and Emotion Augmentation for Retrieval-enhanced Emotional Video Captioning / FACE-net：用于检索增强情感视频字幕的事实校准和情感增强

**Date**: 2026-03-18 | **arXiv**: [2603.17455v1](http://arxiv.org/abs/2603.17455v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17455v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Emotional Video Captioning (EVC) is an emerging task, which aims to describe factual content with the intrinsic emotions expressed in videos. Existing works perceive global emotional cues and then combine with video content to generate descriptions. However, insufficient factual and emotional cues mining and coordination during generation make their methods difficult to deal with the factual-emotional bias, which refers to the factual and emotional requirements being different in different samples on generation. To this end, we propose a retrieval-enhanced framework with FActual Calibration and Emotion augmentation (FACE-net), which through a unified architecture collaboratively mines factual-emotional semantics and provides adaptive and accurate guidance for generation, breaking through the compromising tendency of factual-emotional descriptions in all sample learning. Technically, we firstly introduces an external repository and retrieves the most relevant sentences with the video content to augment the semantic information. Subsequently, our factual calibration via uncertainty estimation module splits the retrieved information into subject-predicate-object triplets, and self-refines and cross-refines different components through video content to effectively mine the factual semantics; while our progressive visual emotion augmentation module leverages the calibrated factual semantics as experts, interacts with the video content and emotion dictionary to generate visual queries and candidate emotions, and then aggregates them to adaptively augment emotions to each factual semantics. Moreover, to alleviate the factual-emotional bias, we design a dynamic bias adjustment routing module to predict and adjust the degree of bias of a sample.

情感视频字幕（EVC）是一项新兴任务，旨在用视频中表达的内在情感来描述事实内容。现有作品感知全局情感线索，然后与视频内容结合生成描述。然而，生成过程中事实和情感线索的挖掘和协调不足，使得他们的方法难以处理事实情感偏差，即不同样本在生成时的事实和情感要求不同。为此，我们提出了一种具有FActual Calibration and Emotion Augmentation（FACE-net）的检索增强框架，通过统一的架构协同挖掘事实情感语义并为生成提供自适应和准确的指导，突破了所有样本学习中事实情感描述的妥协倾向。从技术上讲，我们首先引入外部存储库并检索与视频内容最相关的句子以增强语义信息。随后，我们通过不确定性估计模块进行事实校准，将检索到的信息拆分为主谓宾三元组，并通过视频内容自提炼和交叉提炼不同的组件，以有效挖掘事实语义；而我们的渐进式视觉情感增强模块则利用校准的事实语义作为专家，与视频内容和情感词典交互以生成视觉查询和候选情感，然后将它们聚合以自适应地将情感增强到每个事实语义。此外，为了减轻事实情感偏差，我们设计了动态偏差调整路由模块来预测和调整样本的偏差程度。

</details>

---

## 19. SHIFT: Motion Alignment in Video Diffusion Models with Adversarial Hybrid Fine-Tuning / SHIFT：具有对抗性混合微调的视频扩散模型中的运动对齐

**Date**: 2026-03-18 | **arXiv**: [2603.17426v1](http://arxiv.org/abs/2603.17426v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17426v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Image-conditioned Video diffusion models achieve impressive visual realism but often suffer from weakened motion fidelity, e.g., reduced motion dynamics or degraded long-term temporal coherence, especially after fine-tuning. We study the problem of motion alignment in video diffusion models post-training. To address this, we introduce pixel-motion rewards based on pixel flux dynamics, capturing both instantaneous and long-term motion consistency. We further propose Smooth Hybrid Fine-tuning (SHIFT), a scalable reward-driven fine-tuning framework for video diffusion models. SHIFT fuses the normal supervised fine-tuning and advantage weighted fine-tuning into a unified framework. Benefiting from novel adversarial advantages, SHIFT improves convergence speed and mitigates reward hacking. Experiments show that our approach efficiently resolves dynamic-degree collapse in modern video diffusion models supervised fine-tuning.

图像条件视频扩散模型实现了令人印象深刻的视觉真实感，但经常受到运动保真度减弱的影响，例如，运动动态性降低或长期时间相干性降低，尤其是在微调之后。我们研究视频扩散模型训练后的运动对齐问题。为了解决这个问题，我们引入了基于像素通量动态的像素运动奖励，捕获瞬时和长期运动一致性。我们进一步提出了平滑混合微调（SHIFT），这是一种用于视频扩散模型的可扩展奖励驱动微调框架。 SHIFT 将普通的监督微调和优势加权微调融合到一个统一的框架中。受益于新颖的对抗优势，SHIFT 提高了收敛速度并减少了奖励黑客行为。实验表明，我们的方法有效地解决了现代视频扩散模型监督微调中的动态度崩溃。

</details>

---

## 20. Motion-Adaptive Temporal Attention for Lightweight Video Generation with Stable Diffusion / 用于具有稳定扩散的轻量级视频生成的运动自适应时间注意力

**Date**: 2026-03-18 | **arXiv**: [2603.17398v1](http://arxiv.org/abs/2603.17398v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17398v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We present a motion-adaptive temporal attention mechanism for parameter-efficient video generation built upon frozen Stable Diffusion models. Rather than treating all video content uniformly, our method dynamically adjusts temporal attention receptive fields based on estimated motion content: high-motion sequences attend locally across frames to preserve rapidly changing details, while low-motion sequences attend globally to enforce scene consistency. We inject lightweight temporal attention modules into all UNet transformer blocks via a cascaded strategy -- global attention in down-sampling and middle blocks for semantic stabilization, motion-adaptive attention in up-sampling blocks for fine-grained refinement. Combined with temporally correlated noise initialization and motion-aware gating, the system adds only 25.8M trainable parameters (2.9\% of the base UNet) while achieving competitive results on WebVid validation when trained on 100K videos. We demonstrate that the standard denoising objective alone provides sufficient implicit temporal regularization, outperforming approaches that add explicit temporal consistency losses. Our ablation studies reveal a clear trade-off between noise correlation and motion amplitude, providing a practical inference-time control for diverse generation behaviors.

我们提出了一种基于冻结稳定扩散模型的运动自适应时间注意机制，用于参数有效的视频生成。我们的方法不是统一处理所有视频内容，而是根据估计的运动内容动态调整时间注意感受域：高运动序列在跨帧中局部参与以保留快速变化的细节，而低运动序列则全局参与以强制场景一致性。我们通过级联策略将轻量级时间注意力模块注入到所有 UNet 变换器块中——下采样和中间块中的全局注意力用于语义稳定，上采样块中的运动自适应注意力用于细粒度细化。结合时间相关噪声初始化和运动感知门控，该系统仅添加 25.8M 可训练参数（基础 UNet 的 2.9%），同时在 100K 视频上训练时在 WebVid 验证上取得有竞争力的结果。我们证明，标准去噪目标本身就提供了足够的隐式时间正则化，优于增加显式时间一致性损失的方法。我们的消融研究揭示了噪声相关性和运动幅度之间的明显权衡，为不同的生成行为提供了实用的推理时间控制。

</details>

---

## 21. Stereo World Model: Camera-Guided Stereo Video Generation / 立体世界模型：摄像机引导的立体视频生成

**Date**: 2026-03-18 | **arXiv**: [2603.17375v1](http://arxiv.org/abs/2603.17375v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17375v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We present StereoWorld, a camera-conditioned stereo world model that jointly learns appearance and binocular geometry for end-to-end stereo video generation.Unlike monocular RGB or RGBD approaches, StereoWorld operates exclusively within the RGB modality, while simultaneously grounding geometry directly from disparity. To efficiently achieve consistent stereo generation, our approach introduces two key designs: (1) a unified camera-frame RoPE that augments latent tokens with camera-aware rotary positional encoding, enabling relative, view- and time-consistent conditioning while preserving pretrained video priors via a stable attention initialization; and (2) a stereo-aware attention decomposition that factors full 4D attention into 3D intra-view attention plus horizontal row attention, leveraging the epipolar prior to capture disparity-aligned correspondences with substantially lower compute. Across benchmarks, StereoWorld improves stereo consistency, disparity accuracy, and camera-motion fidelity over strong monocular-then-convert pipelines, achieving more than 3x faster generation with an additional 5% gain in viewpoint consistency. Beyond benchmarks, StereoWorld enables end-to-end binocular VR rendering without depth estimation or inpainting, enhances embodied policy learning through metric-scale depth grounding, and is compatible with long-video distillation for extended interactive stereo synthesis.

我们推出了 StereoWorld，一种相机调节的立体世界模型，它共同学习外观和双目几何形状以生成端到端立体视频。与单目 RGB 或 RGBD 方法不同，StereoWorld 专门在 RGB 模态内运行，同时直接根据视差来基础几何形状。为了有效地实现一致的立体生成，我们的方法引入了两个关键设计：（1）统一的相机框架 RoPE，通过相机感知的旋转位置编码增强潜在标记，实现相对、视图和时间一致的调节，同时通过稳定的注意力初始化保留预先训练的视频先验； (2) 立体感知注意力分解，将完整的 4D 注意力分解为 3D 视图内注意力和水平行注意力，利用极线先于以低得多的计算捕获视差对齐对应关系。在各个基准测试中，StereoWorld 比强大的单目然后转换管道提高了立体一致性、视差精度和相机运动保真度，实现了 3 倍以上的生成速度，并且视点一致性额外提高了 5%。除了基准之外，StereoWorld 还可以实现端到端双目 VR 渲染，无需深度估计或修复，通过公制尺度深度基础增强具体策略学习，并与长视频蒸馏兼容以扩展交互式立体合成。

</details>

---

## 22. Shot-Aware Frame Sampling for Video Understanding / 用于视频理解的镜头感知帧采样

**Date**: 2026-03-18 | **arXiv**: [2603.17374v1](http://arxiv.org/abs/2603.17374v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17374v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Video frame sampling is essential for efficient long-video understanding with Vision-Language Models (VLMs), since dense inputs are costly and often exceed context limits. Yet when only a small number of frames can be retained, existing samplers often fail to balance broad video coverage with brief but critical events, which can lead to unreliable downstream predictions. To address this issue, we present InfoShot, a task-agnostic, shot-aware frame sampler for long-video understanding. InfoShot first partitions a video into semantically consistent shots, and then selects two complementary keyframes from each shot: one to represent the main content and one to capture unusual within-shot changes. This design is guided by an information-theoretic objective that encourages the sampled set to retain high information about both shot structure and sparse within-shot deviations. In this way, it improves the chance of preserving both overall video context and short decision-critical moments without requiring any retraining. To better evaluate such short-lived events, we further introduce SynFlash, a synthetic benchmark with controllable sub-second anomaly patterns and frame-level ground truth, and we also evaluate InfoShot on existing anomaly datasets and general video understanding tasks. Experiments show that InfoShot improves anomaly hit rate and downstream Video-QA accuracy under frame number constraints, while matching or outperforming strong baselines on standard video understanding benchmarks.

视频帧采样对于使用视觉语言模型 (VLM) 进行高效的长视频理解至关重要，因为密集输入成本高昂，而且通常会超出上下文限制。然而，当只能保留少量帧时，现有采样器通常无法平衡广泛的视频覆盖范围与简短但关键的事件，这可能导致下游预测不可靠。为了解决这个问题，我们推出了 InfoShot，这是一种与任务无关、镜头感知的帧采样器，用于长视频理解。 InfoShot 首先将视频划分为语义一致的镜头，然后从每个镜头中选择两个互补的关键帧：一个表示主要内容，一个用于捕获镜头内不寻常的变化。该设计以信息论目标为指导，鼓励采样集保留有关镜头结构和稀疏镜头内偏差的大量信息。通过这种方式，它提高了保留整体视频上下文和简短决策关键时刻的机会，而无需任何重新训练。为了更好地评估此类短暂事件，我们进一步引入了 SynFlash，这是一种具有可控亚秒级异常模式和帧级地面实况的综合基准，我们还在现有异常数据集和一般视频理解任务上评估了 InfoShot。实验表明，InfoShot 在帧数限制下提高了异常命中率和下游视频 QA 准确性，同时匹配或优于标准视频理解基准的强基线。

</details>

---

## 23. Recurrent Reasoning with Vision-Language Models for Estimating Long-Horizon Embodied Task Progress / 使用视觉语言模型进行循环推理来估计长期具体任务进度

**Date**: 2026-03-18 | **arXiv**: [2603.17312v1](http://arxiv.org/abs/2603.17312v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17312v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Accurately estimating task progress is critical for embodied agents to plan and execute long-horizon, multi-step tasks. Despite promising advances, existing Vision-Language Models (VLMs) based methods primarily leverage their video understanding capabilities, while neglecting their complex reasoning potential. Furthermore, processing long video trajectories with VLMs is computationally prohibitive for real-world deployment. To address these challenges, we propose the Recurrent Reasoning Vision-Language Model ($\text{R}^2$VLM). Our model features a recurrent reasoning framework that processes local video snippets iteratively, maintaining a global context through an evolving Chain of Thought (CoT). This CoT explicitly records task decomposition, key steps, and their completion status, enabling the model to reason about complex temporal dependencies. This design avoids the high cost of processing long videos while preserving essential reasoning capabilities. We train $\text{R}^2$VLM on large-scale, automatically generated datasets from ALFRED and Ego4D. Extensive experiments on progress estimation and downstream applications, including progress-enhanced policy learning, reward modeling for reinforcement learning, and proactive assistance, demonstrate that $\text{R}^2$VLM achieves strong performance and generalization, achieving a new state-of-the-art in long-horizon task progress estimation. The models and benchmarks are publicly available at \href{https://huggingface.co/collections/zhangyuelin/r2vlm}{huggingface}.

准确估计任务进度对于实体代理计划和执行长期、多步骤的任务至关重要。尽管取得了令人鼓舞的进展，但现有的基于视觉语言模型（VLM）的方法主要利用其视频理解能力，而忽略了其复杂的推理潜力。此外，使用 VLM 处理长视频轨迹在计算上对于现实世界的部署来说是令人望而却步的。为了应对这些挑战，我们提出了循环推理视觉语言模型（$\text{R}^2$VLM）。我们的模型具有一个循环推理框架，可以迭代处理本地视频片段，通过不断发展的思想链（CoT）维护全局上下文。该 CoT 显式记录任务分解、关键步骤及其完成状态，使模型能够推理复杂的时间依赖性。这种设计避免了处理长视频的高成本，同时保留了基本的推理能力。我们在 ALFRED 和 Ego4D 自动生成的大规模数据集上训练 $\text{R}^2$VLM。关于进度估计和下游应用的大量实验，包括进度增强的策略学习、强化学习的奖励建模和主动协助，表明 $\text{R}^2$VLM 实现了强大的性能和泛化能力，在长期任务进度估计方面达到了新的最先进水平。这些模型和基准可在 \href{https://huggingface.co/collections/zhangyuelin/r2vlm}{huggingface} 上公开获取。

</details>

---

## 24. Symphony: A Cognitively-Inspired Multi-Agent System for Long-Video Understanding / Symphony：用于长视频理解的认知启发多智能体系统

**Date**: 2026-03-18 | **arXiv**: [2603.17307v1](http://arxiv.org/abs/2603.17307v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17307v1)

**Categories**: cs.CV, cs.AI

**Code**: https://github.com/Haiyang0226/Symphony.

<details><summary><b>Abstract / 摘要</b></summary>

Despite rapid developments and widespread applications of MLLM agents, they still struggle with long-form video understanding (LVU) tasks, which are characterized by high information density and extended temporal spans. Recent research on LVU agents demonstrates that simple task decomposition and collaboration mechanisms are insufficient for long-chain reasoning tasks. Moreover, directly reducing the time context through embedding-based retrieval may lose key information of complex problems. In this paper, we propose Symphony, a multi-agent system, to alleviate these limitations. By emulating human cognition patterns, Symphony decomposes LVU into fine-grained subtasks and incorporates a deep reasoning collaboration mechanism enhanced by reflection, effectively improving the reasoning capability. Additionally, Symphony provides a VLM-based grounding approach to analyze LVU tasks and assess the relevance of video segments, which significantly enhances the ability to locate complex problems with implicit intentions and large temporal spans. Experimental results show that Symphony achieves state-of-the-art performance on LVBench, LongVideoBench, VideoMME, and MLVU, with a 5.0% improvement over the prior state-of-the-art method on LVBench. Code is available at https://github.com/Haiyang0226/Symphony.

尽管 MLLM 代理得到了快速发展和广泛应用，但它们仍然难以应对长格式视频理解（LVU）任务，这些任务的特点是信息密度高和时间跨度长。最近对 LVU 智能体的研究表明，简单的任务分解和协作机制不足以完成长链推理任务。此外，通过基于嵌入的检索直接减少时间上下文可能会丢失复杂问题的关键信息。在本文中，我们提出了 Symphony，一个多代理系统，来缓解这些限制。 Symphony 通过模仿人类认知模式，将 LVU 分解为细粒度的子任务，并融入反射增强的深度推理协作机制，有效提高推理能力。此外，Symphony 还提供了基于 VLM 的基础方法来分析 LVU 任务并评估视频片段的相关性，这显着增强了定位具有隐式意图和大时间跨度的复杂问题的能力。实验结果表明，Symphony 在 LVBench、LongVideoBench、VideoMME 和 MLVU 上实现了 state-of-the-art 的性能，比之前在 LVBench 上的 state-of-the-art 方法提高了 5.0%。代码可在 https://github.com/Haiyang0226/Symphony 获取。

</details>

---

## 25. GigaWorld-Policy: An Efficient Action-Centered World--Action Model / GigaWorld-政策：一个以行动为中心的高效世界-行动模型

**Date**: 2026-03-18 | **arXiv**: [2603.17240v1](http://arxiv.org/abs/2603.17240v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17240v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

World-Action Models (WAM) initialized from pre-trained video generation backbones have demonstrated remarkable potential for robot policy learning. However, existing approaches face two critical bottlenecks that hinder performance and deployment. First, jointly reasoning over future visual dynamics and corresponding actions incurs substantial inference overhead. Second, joint modeling often entangles visual and motion representations, making motion prediction accuracy heavily dependent on the quality of future video forecasts. To address these issues, we introduce GigaWorld-Policy, an action-centered WAM that learns 2D pixel-action dynamics while enabling efficient action decoding, with optional video generation. Specifically, we formulate policy training into two coupled components: the model predicts future action sequences conditioned on the current observation, and simultaneously generates future videos conditioned on the predicted actions and the same observation. The policy is supervised by both action prediction and video generation, providing richer learning signals and encouraging physically plausible actions through visual-dynamics constraints. With a causal design that prevents future-video tokens from influencing action tokens, explicit future-video generation is optional at inference time, allowing faster action prediction during deployment. To support this paradigm, we curate a diverse, large-scale robot dataset to pre-train an action-centered video generation model, which is then adapted as the backbone for robot policy learning. Experimental results on real-world robotic platforms show that GigaWorld-Policy runs 9x faster than the leading WAM baseline, Motus, while improving task success rates by 7%. Moreover, compared with pi-0.5, GigaWorld-Policy improves performance by 95% on RoboTwin 2.0.

从预先训练的视频生成主干初始化的世界动作模型（WAM）已经证明了机器人策略学习的巨大潜力。然而，现有方法面临两个阻碍性能和部署的关键瓶颈。首先，对未来视觉动态和相应动作的联合推理会产生大量的推理开销。其次，联合建模通常将视觉和运动表示纠缠在一起，使得运动预测的准确性在很大程度上取决于未来视频预测的质量。为了解决这些问题，我们引入了 GigaWorld-Policy，这是一种以动作为中心的 WAM，它可以学习 2D 像素动作动态，同时实现高效的动作解码，并具有可选的视频生成功能。具体来说，我们将策略训练制定为两个耦合的组件：模型根据当前观察预测未来的动作序列，并同时根据预测的动作和相同的观察生成未来的视频。该策略受到动作预测和视频生成的监督，提供更丰富的学习信号并通过视觉动态约束鼓励物理上合理的动作。通过防止未来视频令牌影响动作令牌的因果设计，在推理时可以选择显式的未来视频生成，从而在部署期间实现更快的动作预测。为了支持这种范例，我们策划了一个多样化的大规模机器人数据集来预训练以动作为中心的视频生成模型，然后将其用作机器人策略学习的骨干。现实世界机器人平台上的实验结果表明，GigaWorld-Policy 的运行速度比领先的 WAM 基线 Motus 快 9 倍，同时将任务成功率提高 7%。此外，与pi-0.5相比，GigaWorld-Policy在RoboTwin 2.0上的性能提高了95%。

</details>

---

## 26. MosaicMem: Hybrid Spatial Memory for Controllable Video World Models / MosaicMem：用于可控视频世界模型的混合空间内存

**Date**: 2026-03-17 | **arXiv**: [2603.17117v1](http://arxiv.org/abs/2603.17117v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17117v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Video diffusion models are moving beyond short, plausible clips toward world simulators that must remain consistent under camera motion, revisits, and intervention. Yet spatial memory remains a key bottleneck: explicit 3D structures can improve reprojection-based consistency but struggle to depict moving objects, while implicit memory often produces inaccurate camera motion even with correct poses. We propose Mosaic Memory (MosaicMem), a hybrid spatial memory that lifts patches into 3D for reliable localization and targeted retrieval, while exploiting the model's native conditioning to preserve prompt-following generation. MosaicMem composes spatially aligned patches in the queried view via a patch-and-compose interface, preserving what should persist while allowing the model to inpaint what should evolve. With PRoPE camera conditioning and two new memory alignment methods, experiments show improved pose adherence compared to implicit memory and stronger dynamic modeling than explicit baselines. MosaicMem further enables minute-level navigation, memory-based scene editing, and autoregressive rollout.

视频传播模型正在超越简短、合理的剪辑，转向世界模拟器，在摄像机运动、重访和干预下必须保持一致。然而，空间记忆仍然是一个关键瓶颈：显式 3D 结构可以提高基于重投影的一致性，但难以描绘移动物体，而隐式记忆即使在正确的姿势下也经常产生不准确的相机运动。我们提出了马赛克记忆 (MosaicMem)，这是一种混合空间记忆，可将补丁提升为 3D，以实现可靠的定位和有针对性的检索，同时利用模型的本机调节来保留后续生成。 MosaicMem 通过补丁和组合接口在查询视图中组合空间对齐的补丁，保留应该持续存在的内容，同时允许模型修复应该发展的内容。通过 PRoPE 相机调节和两种新的记忆对齐方法，实验表明，与隐式记忆相比，姿势依从性得到了改善，动态建模也比显式基线更强。 MosaicMem 进一步实现了分钟级导航、基于内存的场景编辑和自回归推出。

</details>

---

## 27. HopChain: Multi-Hop Data Synthesis for Generalizable Vision-Language Reasoning / HopChain：用于泛化视觉语言推理的多跳数据合成

**Date**: 2026-03-17 | **arXiv**: [2603.17024v1](http://arxiv.org/abs/2603.17024v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.17024v1)

**Categories**: cs.CV, cs.AI, cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

VLMs show strong multimodal capabilities, but they still struggle with fine-grained vision-language reasoning. We find that long CoT reasoning exposes diverse failure modes, including perception, reasoning, knowledge, and hallucination errors, which can compound across intermediate steps. However, most existing vision-language data used for RLVR does not involve complex reasoning chains that rely on visual evidence throughout, leaving these weaknesses largely unexposed. We therefore propose HopChain, a scalable framework for synthesizing multi-hop vision-language reasoning data specifically for RLVR training of VLMs. Each synthesized multi-hop query forms a logically dependent chain of instance-grounded hops, where earlier hops establish the instances, sets, or conditions needed for later hops, while the final answer remains a specific, unambiguous number suitable for verifiable rewards. We add the multi-hop data synthesized by HopChain to the original RLVR data used to train Qwen3.5-35B-A3B and Qwen3.5-397B-A17B, and compare against RLVR on the original RLVR data alone across 24 benchmarks spanning STEM and Puzzle, General VQA, Text Recognition and Document Understanding, and Video Understanding. Although this multi-hop data is not synthesized to target any specific benchmark, adding it improves 20 out of 24 benchmarks on both models, indicating broad and generalizable gains. To demonstrate that full chained queries are important, we replace them with half-multi-hop or single-hop variants, reducing the 24-benchmark average accuracy by 5.3 and 7.0 points, respectively. Multi-hop training also strengthens long-CoT vision-language reasoning, with gains peaking at more than 50 accuracy points in the ultra-long-CoT regime. These experiments establish HopChain as an effective, scalable framework for synthesizing multi-hop data that improves generalizable vision-language reasoning.

VLM 显示出强大的多模式功能，但它们仍然难以进行细粒度的视觉语言推理。我们发现，长 CoT 推理暴露了多种失败模式，包括感知、推理、知识和幻觉错误，这些错误可能会在中间步骤中复合。然而，大多数用于 RLVR 的现有视觉语言数据并不涉及全程依赖视觉证据的复杂推理链，因此这些弱点在很大程度上没有暴露出来。因此，我们提出了 HopChain，这是一个可扩展的框架，用于合成多跳视觉语言推理数据，专门用于 VLM 的 RLVR 训练。每个合成的多跳查询形成一个逻辑上依赖的基于实例的跳跃链，其中早期的跳跃建立稍后的跳跃所需的实例、集合或条件，而最终的答案仍然是适合可验证奖励的特定的、明确的数字。我们将 HopChain 合成的多跳数据添加到用于训练 Qwen3.5-35B-A3B 和 Qwen3.5-397B-A17B 的原始 RLVR 数据中，并在 STEM 和 Puzzle、通用 VQA、文本识别和文档理解以及视频理解等 24 个基准测试中与原始 RLVR 数据上的 RLVR 进行比较。尽管此多跳数据并未针对任何特定基准进行合成，但添加后可改善两个模型的 24 个基准中的 20 个，这表明了广泛且可推广的收益。为了证明全链式查询的重要性，我们将它们替换为半多跳或单跳变体，将 24 基准平均准确度分别降低了 5.3 点和 7.0 点。多跳训练还增强了长 CoT 视觉语言推理，在超长 CoT 体系中，精度提升达到峰值超过 50 个点。这些实验将 HopChain 确立为一种有效的、可扩展的框架，用于合成多跳数据，从而改进通用视觉语言推理。

</details>

---

## 28. CineSRD: Leveraging Visual, Acoustic, and Linguistic Cues for Open-World Visual Media Speaker Diarization / CineSRD：利用视觉、声学和语言提示实现开放世界视觉媒体演讲者分类

**Date**: 2026-03-17 | **arXiv**: [2603.16966v1](http://arxiv.org/abs/2603.16966v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16966v1)

**Categories**: cs.CV, cs.AI, cs.MM, cs.SD, eess.AS

<details><summary><b>Abstract / 摘要</b></summary>

Traditional speaker diarization systems have primarily focused on constrained scenarios such as meetings and interviews, where the number of speakers is limited and acoustic conditions are relatively clean. To explore open-world speaker diarization, we extend this task to the visual media domain, encompassing complex audiovisual programs such as films and TV series. This new setting introduces several challenges, including long-form video understanding, a large number of speakers, cross-modal asynchrony between audio and visual cues, and uncontrolled in-the-wild variability. To address these challenges, we propose Cinematic Speaker Registration & Diarization (CineSRD), a unified multimodal framework that leverages visual, acoustic, and linguistic cues from video, speech, and subtitles for speaker annotation. CineSRD first performs visual anchor clustering to register initial speakers and then integrates an audio language model for speaker turn detection, refining annotations and supplementing unregistered off-screen speakers. Furthermore, we construct and release a dedicated speaker diarization benchmark for visual media that includes Chinese and English programs. Experimental results demonstrate that CineSRD achieves superior performance on the proposed benchmark and competitive results on conventional datasets, validating its robustness and generalizability in open-world visual media settings.

传统的发言者分类系统主要关注会议和采访等受限场景，这些场景中发言者数量有限且声学条件相对干净。为了探索开放世界的说话者分类，我们将这项任务扩展到视觉媒体领域，包括电影和电视剧等复杂的视听节目。这种新的设置带来了一些挑战，包括长视频理解、大量发言者、音频和视觉线索之间的跨模式异步，以及不受控制的野外变异性。为了应对这些挑战，我们提出了电影说话者注册和分类（CineSRD），这是一个统一的多模式框架，利用视频、语音和字幕中的视觉、听觉和语言线索进行说话者注释。 CineSRD 首先执行视觉锚点聚类来注册初始说话者，然后集成音频语言模型以进行说话者转向检测、细化注释并补充未注册的屏幕外说话者。此外，我们还构建并发布了专门针对视觉媒体的说话人分类基准，包括中文和英文节目。实验结果表明，CineSRD 在所提出的基准上实现了卓越的性能，并在传统数据集上取得了有竞争力的结果，验证了其在开放世界视觉媒体设置中的鲁棒性和通用性。

</details>

---

## 29. World Reconstruction From Inconsistent Views / 从不一致的观点重建世界

**Date**: 2026-03-17 | **arXiv**: [2603.16736v2](http://arxiv.org/abs/2603.16736v2) | **PDF**: [Link](http://arxiv.org/pdf/2603.16736v2)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Video diffusion models generate high-quality and diverse worlds; however, individual frames often lack 3D consistency across the output sequence, which makes the reconstruction of 3D worlds difficult. To this end, we propose a new method that handles these inconsistencies by non-rigidly aligning the video frames into a globally-consistent coordinate frame that produces sharp and detailed pointcloud reconstructions. First, a geometric foundation model lifts each frame into a pixel-wise 3D pointcloud, which contains unaligned surfaces due to these inconsistencies. We then propose a tailored non-rigid iterative frame-to-model ICP to obtain an initial alignment across all frames, followed by a global optimization that further sharpens the pointcloud. Finally, we leverage this pointcloud as initialization for 3D reconstruction and propose a novel inverse deformation rendering loss to create high quality and explorable 3D environments from inconsistent views. We demonstrate that our 3D scenes achieve higher quality than baselines, effectively turning video models into 3D-consistent world generators.

视频扩散模型生成高质量且多样化的世界；然而，各个帧在输出序列中通常缺乏 3D 一致性，这使得 3D 世界的重建变得困难。为此，我们提出了一种新方法，通过将视频帧非严格地对齐到全局一致的坐标系中来处理这些不一致问题，从而产生清晰且详细的点云重建。首先，几何基础模型将每个帧提升为像素级 3D 点云，其中包含由于这些不一致而未对齐的表面。然后，我们提出定制的非刚性迭代帧到模型 ICP，以获得跨所有帧的初始对齐，然后进行全局优化，进一步锐化点云。最后，我们利用这个点云作为 3D 重建的初始化，并提出一种新颖的逆变形渲染损失，以从不一致的视图创建高质量和可探索的 3D 环境。我们证明我们的 3D 场景比基线具有更高的质量，有效地将视频模型转变为 3D 一致的世界生成器。

</details>

---

## 30. Search2Motion: Training-Free Object-Level Motion Control via Attention-Consensus Search / Search2Motion：通过注意力共识搜索进行免训练的对象级运动控制

**Date**: 2026-03-17 | **arXiv**: [2603.16711v2](http://arxiv.org/abs/2603.16711v2) | **PDF**: [Link](http://arxiv.org/pdf/2603.16711v2)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We present Search2Motion, a training-free framework for object-level motion editing in image-to-video generation. Unlike prior methods requiring trajectories, bounding boxes, masks, or motion fields, Search2Motion adopts target-frame-based control, leveraging first-last-frame motion priors to realize object relocation while preserving scene stability without fine-tuning. Reliable target-frame construction is achieved through semantic-guided object insertion and robust background inpainting. We further show that early-step self-attention maps predict object and camera dynamics, offering interpretable user feedback and motivating ACE-Seed (Attention Consensus for Early-step Seed selection), a lightweight search strategy that improves motion fidelity without look-ahead sampling or external evaluators. Noting that existing benchmarks conflate object and camera motion, we introduce S2M-DAVIS and S2M-OMB for stable-camera, object-only evaluation, alongside FLF2V-obj metrics that isolate object artifacts without requiring ground-truth trajectories. Search2Motion consistently outperforms baselines on FLF2V-obj and VBench.

我们推出了 Search2Motion，这是一个无需训练的框架，用于图像到视频生成中的对象级运动编辑。与之前需要轨迹、边界框、掩模或运动场的方法不同，Search2Motion 采用基于目标帧的控制，利用首末帧运动先验来实现对象重新定位，同时保持场景稳定性，无需微调。通过语义引导的对象插入和强大的背景修复来实现可靠的目标框架构建。我们进一步表明，早期自注意力图可以预测物体和相机动态，提供可解释的用户反馈并激发 ACE-Seed（早期种子选择的注意力共识），这是一种轻量级搜索策略，无需前瞻采样或外部评估器即可提高运动保真度。注意到现有的基准测试将物体和相机运动混为一谈，我们引入了 S2M-DAVIS 和 S2M-OMB 用于稳定相机、仅物体评估，以及无需地面实况轨迹即可隔离物体伪影的 FLF2V-obj 指标。 Search2Motion 在 FLF2V-obj 和 VBench 上的性能始终优于基线。

</details>

---

## 31. S-VAM: Shortcut Video-Action Model by Self-Distilling Geometric and Semantic Foresight / S-VAM：通过自蒸馏几何和语义预见的快捷视频动作模型

**Date**: 2026-03-17 | **arXiv**: [2603.16195v2](http://arxiv.org/abs/2603.16195v2) | **PDF**: [Link](http://arxiv.org/pdf/2603.16195v2)

**Categories**: cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Video action models (VAMs) have emerged as a promising paradigm for robot learning, owing to their powerful visual foresight for complex manipulation tasks. However, current VAMs, typically relying on either slow multi-step video generation or noisy one-step feature extraction, cannot simultaneously guarantee real-time inference and high-fidelity foresight. To address this limitation, we propose S-VAM, a shortcut video-action model that foresees coherent geometric and semantic representations via a single forward pass. Serving as a stable blueprint, these foreseen representations significantly simplify the action prediction. To enable this efficient shortcut, we introduce a novel self-distillation strategy that condenses structured generative priors of multi-step denoising into one-step inference. Specifically, vision foundation model (VFM) representations extracted from the diffusion model's own multi-step generated videos provide teacher targets. Lightweight decouplers, as students, learn to directly map noisy one-step features to these targets. Extensive experiments in simulation and the real world demonstrate that our S-VAM outperforms state-of-the-art methods, enabling efficient and precise manipulation in complex environments. Our project page is https://haodong-yan.github.io/S-VAM/

视频动作模型（VAM）因其对复杂操作任务的强大视觉预见性而成为机器人学习的一个有前途的范例。然而，当前的 VAM 通常依赖于缓慢的多步视频生成或嘈杂的一步特征提取，无法同时保证实时推理和高保真预见。为了解决这个限制，我们提出了 S-VAM，这是一种快捷视频动作模型，可以通过单个前向传递预见连贯的几何和语义表示。作为稳定的蓝图，这些预见的表示显着简化了动作预测。为了实现这种有效的捷径，我们引入了一种新颖的自蒸馏策略，该策略将多步去噪的结构化生成先验压缩为一步推理。具体来说，从扩散模型自己的多步骤生成的视频中提取的视觉基础模型（VFM）表示提供了教师目标。作为学生，轻量级解耦器学习将嘈杂的一步特征直接映射到这些目标。模拟和现实世界中的大量实验表明，我们的 S-VAM 优于最先进的方法，可在复杂环境中实现高效、精确的操作。我们的项目页面是https://haodong-yan.github.io/S-VAM/

</details>

---



</details>

<details><summary><b>2026-03-18 (24 papers)</b></summary>

# arXiv Video Papers - 2026-03-18

**Paper Count**: 24

---

## 1. WorldCam: Interactive Autoregressive 3D Gaming Worlds with Camera Pose as a Unifying Geometric Representation / WorldCam：交互式自回归 3D 游戏世界，以相机姿势作为统一的几何表示

**Date**: 2026-03-17 | **arXiv**: [2603.16871v1](http://arxiv.org/abs/2603.16871v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16871v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recent advances in video diffusion transformers have enabled interactive gaming world models that allow users to explore generated environments over extended horizons. However, existing approaches struggle with precise action control and long-horizon 3D consistency. Most prior works treat user actions as abstract conditioning signals, overlooking the fundamental geometric coupling between actions and the 3D world, whereby actions induce relative camera motions that accumulate into a global camera pose within a 3D world. In this paper, we establish camera pose as a unifying geometric representation to jointly ground immediate action control and long-term 3D consistency. First, we define a physics-based continuous action space and represent user inputs in the Lie algebra to derive precise 6-DoF camera poses, which are injected into the generative model via a camera embedder to ensure accurate action alignment. Second, we use global camera poses as spatial indices to retrieve relevant past observations, enabling geometrically consistent revisiting of locations during long-horizon navigation. To support this research, we introduce a large-scale dataset comprising 3,000 minutes of authentic human gameplay annotated with camera trajectories and textual descriptions. Extensive experiments show that our approach substantially outperforms state-of-the-art interactive gaming world models in action controllability, long-horizon visual quality, and 3D spatial consistency.

视频扩散变压器的最新进展使得交互式游戏世界模型成为可能，使用户能够在更广阔的视野中探索生成的环境。然而，现有方法难以实现精确的动作控制和长视野 3D 一致性。大多数先前的工作将用户动作视为抽象条件信号，忽略了动作与 3D 世界之间的基本几何耦合，从而动作引起相对相机运动，这些运动累积成 3D 世界中的全局相机姿势。在本文中，我们将相机位姿建立为统一的几何表示，以共同实现即时动作控制和长期 3D 一致性。首先，我们定义一个基于物理的连续动作空间，并在李代数中表示用户输入，以导出精确的 6-DoF 相机姿势，这些姿势通过相机嵌入器注入到生成模型中，以确保准确的动作对齐。其次，我们使用全局相机姿态作为空间索引来检索相关的过去观测结果，从而在长视距导航期间实现几何一致的位置重访。为了支持这项研究，我们引入了一个大规模数据集，其中包含 3,000 分钟的真实人类游戏玩法，并附有摄像机轨迹和文本描述。大量实验表明，我们的方法在动作可控性、长视野视觉质量和 3D 空间一致性方面远远优于最先进的交互式游戏世界模型。

</details>

---

## 2. Demystifing Video Reasoning / 揭秘视频推理

**Date**: 2026-03-17 | **arXiv**: [2603.16870v1](http://arxiv.org/abs/2603.16870v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16870v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Recent advances in video generation have revealed an unexpected phenomenon: diffusion-based video models exhibit non-trivial reasoning capabilities. Prior work attributes this to a Chain-of-Frames (CoF) mechanism, where reasoning is assumed to unfold sequentially across video frames. In this work, we challenge this assumption and uncover a fundamentally different mechanism. We show that reasoning in video models instead primarily emerges along the diffusion denoising steps. Through qualitative analysis and targeted probing experiments, we find that models explore multiple candidate solutions in early denoising steps and progressively converge to a final answer, a process we term Chain-of-Steps (CoS). Beyond this core mechanism, we identify several emergent reasoning behaviors critical to model performance: (1) working memory, enabling persistent reference; (2) self-correction and enhancement, allowing recovery from incorrect intermediate solutions; and (3) perception before action, where early steps establish semantic grounding and later steps perform structured manipulation. During a diffusion step, we further uncover self-evolved functional specialization within Diffusion Transformers, where early layers encode dense perceptual structure, middle layers execute reasoning, and later layers consolidate latent representations. Motivated by these insights, we present a simple training-free strategy as a proof-of-concept, demonstrating how reasoning can be improved by ensembling latent trajectories from identical models with different random seeds. Overall, our work provides a systematic understanding of how reasoning emerges in video generation models, offering a foundation to guide future research in better exploiting the inherent reasoning dynamics of video models as a new substrate for intelligence.

视频生成的最新进展揭示了一个意想不到的现象：基于扩散的视频模型表现出非凡的推理能力。先前的工作将此归因于帧链（CoF）机制，其中假设推理在视频帧中按顺序展开。在这项工作中，我们挑战了这一假设并揭示了一种根本不同的机制。我们表明，视频模型中的推理主要是沿着扩散去噪步骤出现的。通过定性分析和有针对性的探测实验，我们发现模型在早期去噪步骤中探索多个候选解决方案，并逐渐收敛到最终答案，我们将这个过程称为步骤链（CoS）。除了这个核心机制之外，我们还确定了几种对模型性能至关重要的紧急推理行为：（1）工作记忆，实现持久引用； (2)自我修正和增强，允许从错误的中间解决方案中恢复； (3) 行动之前的感知，其中早期步骤建立语义基础，后续步骤执行结构化操作。在扩散步骤中，我们进一步揭示了扩散变压器中自我进化的功能专业化，其中早期层编码密集的感知结构，中间层执行推理，后面的层巩固潜在表示。受这些见解的启发，我们提出了一种简单的免训练策略作为概念验证，展示了如何通过将具有不同随机种子的相同模型的潜在轨迹集成来改进推理。总体而言，我们的工作提供了对视频生成模型中推理如何出现的系统理解，为指导未来研究更好地利用视频模型的固有推理动态作为智能的新基础奠定了基础。

</details>

---

## 3. SparkVSR: Interactive Video Super-Resolution via Sparse Keyframe Propagation / SparkVSR：通过稀疏关键帧传播实现交互式视频超分辨率

**Date**: 2026-03-17 | **arXiv**: [2603.16864v1](http://arxiv.org/abs/2603.16864v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16864v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Video Super-Resolution (VSR) aims to restore high-quality video frames from low-resolution (LR) estimates, yet most existing VSR approaches behave like black boxes at inference time: users cannot reliably correct unexpected artifacts, but instead can only accept whatever the model produces. In this paper, we propose a novel interactive VSR framework dubbed SparkVSR that makes sparse keyframes a simple and expressive control signal. Specifically, users can first super-resolve or optionally a small set of keyframes using any off-the-shelf image super-resolution (ISR) model, then SparkVSR propagates the keyframe priors to the entire video sequence while remaining grounded by the original LR video motion. Concretely, we introduce a keyframe-conditioned latent-pixel two-stage training pipeline that fuses LR video latents with sparsely encoded HR keyframe latents to learn robust cross-space propagation and refine perceptual details. At inference time, SparkVSR supports flexible keyframe selection (manual specification, codec I-frame extraction, or random sampling) and a reference-free guidance mechanism that continuously balances keyframe adherence and blind restoration, ensuring robust performance even when reference keyframes are absent or imperfect. Experiments on multiple VSR benchmarks demonstrate improved temporal consistency and strong restoration quality, surpassing baselines by up to 24.6%, 21.8%, and 5.6% on CLIP-IQA, DOVER, and MUSIQ, respectively, enabling controllable, keyframe-driven video super-resolution. Moreover, we demonstrate that SparkVSR is a generic interactive, keyframe-conditioned video processing framework as it can be applied out of the box to unseen tasks such as old-film restoration and video style transfer. Our project page is available at: https://sparkvsr.github.io/

视频超分辨率 (VSR) 旨在从低分辨率 (LR) 估计中恢复高质量视频帧，但大多数现有的 VSR 方法在推理时的行为就像黑匣子：用户无法可靠地纠正意外的伪影，而只能接受模型产生的任何内容。在本文中，我们提出了一种新颖的交互式 VSR 框架，称为 SparkVSR，它使稀疏关键帧成为简单且富有表现力的控制信号。具体来说，用户可以首先使用任何现成的图像超分辨率 (ISR) 模型进行超分辨率或可选的一小组关键帧，然后 SparkVSR 将先验关键帧传播到整个视频序列，同时保持原始 LR 视频运动的基础。具体来说，我们引入了一种关键帧条件潜在像素两阶段训练管道，它将 LR 视频潜在特征与稀疏编码的 HR 关键帧潜在特征融合起来，以学习鲁棒的跨空间传播并细化感知细节。在推理时，SparkVSR 支持灵活的关键帧选择（手动指定、编解码器 I 帧提取或随机采样）和无参考引导机制，可持续平衡关键帧遵循和盲恢复，即使参考关键帧不存在或不完善，也能确保稳健的性能。在多个 VSR 基准上的实验表明，时间一致性得到了改善，恢复质量也得到了提高，在 CLIP-IQA、DOVER 和 MUSIQ 上分别超出基线高达 24.6%、21.8% 和 5.6%，从而实现了可控、关键帧驱动的视频超分辨率。此外，我们还证明 SparkVSR 是一种通用的交互式关键帧调节视频处理框架，因为它可以开箱即用地应用于看不见的任务，例如老电影修复和视频风格转换。我们的项目页面位于：https://sparkvsr.github.io/

</details>

---

## 4. DreamPlan: Efficient Reinforcement Fine-Tuning of Vision-Language Planners via Video World Models / DreamPlan：通过视频世界模型对视觉语言规划器进行高效强化微调

**Date**: 2026-03-17 | **arXiv**: [2603.16860v1](http://arxiv.org/abs/2603.16860v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16860v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Robotic manipulation requires sophisticated commonsense reasoning, a capability naturally possessed by large-scale Vision-Language Models (VLMs). While VLMs show promise as zero-shot planners, their lack of grounded physical understanding often leads to compounding errors and low success rates when deployed in complex real-world environments, particularly for challenging tasks like deformable object manipulation. Although Reinforcement Learning (RL) can adapt these planners to specific task dynamics, directly fine-tuning VLMs via real-world interaction is prohibitively expensive, unsafe, and sample-inefficient. To overcome this bottleneck, we introduce DreamPlan, a novel framework for the reinforcement fine-tuning of VLM planners via video world models. Instead of relying on costly physical rollouts, DreamPlan first leverages the zero-shot VLM to collect exploratory interaction data. We demonstrate that this sub-optimal data is sufficient to train an action-conditioned video generation model, which implicitly captures complex real-world physics. Subsequently, the VLM planner is fine-tuned entirely within the "imagination" of this video world model using Odds Ratio Policy Optimization (ORPO). By utilizing these virtual rollouts, physical and task-specific knowledge is efficiently injected into the VLM. Our results indicate that DreamPlan bridges the gap between semantic reasoning and physical grounding, significantly improving manipulation success rates without the need for large-scale real-world data collection. Our project page is https://psi-lab.ai/DreamPlan/.

机器人操作需要复杂的常识推理，这是大规模视觉语言模型（VLM）自然具备的能力。虽然 VLM 显示出作为零样本规划器的前景，但在复杂的现实环境中部署时，它们缺乏扎实的物理理解，通常会导致复合错误和低成功率，特别是对于可变形对象操纵等具有挑战性的任务。尽管强化学习 (RL) 可以使这些规划器适应特定的任务动态，但通过现实世界的交互直接微调 VLM 成本高昂、不安全且样本效率低下。为了克服这个瓶颈，我们引入了 DreamPlan，这是一种通过视频世界模型对 VLM 规划器进行强化微调的新颖框架。 DreamPlan 不依赖昂贵的物理部署，而是首先利用零样本 VLM 来收集探索性交互数据。我们证明，这种次优数据足以训练动作条件视频生成模型，该模型隐式捕获复杂的现实世界物理现象。随后，VLM 规划器使用比值比策略优化 (ORPO) 完全在该视频世界模型的“想象”范围内进行微调。通过利用这些虚拟部署，物理和特定于任务的知识被有效地注入到 VLM 中。我们的结果表明，DreamPlan 弥合了语义推理和物理基础之间的差距，显着提高了操作成功率，而无需大规模的现实世界数据收集。我们的项目页面是 https://psi-lab.ai/DreamPlan/。

</details>

---

## 5. World Reconstruction From Inconsistent Views / 从不一致的观点重建世界

**Date**: 2026-03-17 | **arXiv**: [2603.16736v1](http://arxiv.org/abs/2603.16736v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16736v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Video diffusion models generate high-quality and diverse worlds; however, individual frames often lack 3D consistency across the output sequence, which makes the reconstruction of 3D worlds difficult. To this end, we propose a new method that handles these inconsistencies by non-rigidly aligning the video frames into a globally-consistent coordinate frame that produces sharp and detailed pointcloud reconstructions. First, a geometric foundation model lifts each frame into a pixel-wise 3D pointcloud, which contains unaligned surfaces due to these inconsistencies. We then propose a tailored non-rigid iterative frame-to-model ICP to obtain an initial alignment across all frames, followed by a global optimization that further sharpens the pointcloud. Finally, we leverage this pointcloud as initialization for 3D reconstruction and propose a novel inverse deformation rendering loss to create high quality and explorable 3D environments from inconsistent views. We demonstrate that our 3D scenes achieve higher quality than baselines, effectively turning video models into 3D-consistent world generators.

视频扩散模型生成高质量且多样化的世界；然而，各个帧在输出序列中通常缺乏 3D 一致性，这使得 3D 世界的重建变得困难。为此，我们提出了一种新方法，通过将视频帧非严格地对齐到全局一致的坐标系中来处理这些不一致问题，从而产生清晰且详细的点云重建。首先，几何基础模型将每个帧提升为像素级 3D 点云，其中包含由于这些不一致而未对齐的表面。然后，我们提出定制的非刚性迭代帧到模型 ICP，以获得跨所有帧的初始对齐，然后进行全局优化，进一步锐化点云。最后，我们利用这个点云作为 3D 重建的初始化，并提出一种新颖的逆变形渲染损失，以从不一致的视图创建高质量和可探索的 3D 环境。我们证明我们的 3D 场景比基线具有更高的质量，有效地将视频模型转变为 3D 一致的世界生成器。

</details>

---

## 6. Search2Motion: Training-Free Object-Level Motion Control via Attention-Consensus Search / Search2Motion：通过注意力共识搜索进行免训练的对象级运动控制

**Date**: 2026-03-17 | **arXiv**: [2603.16711v1](http://arxiv.org/abs/2603.16711v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16711v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We present Search2Motion, a training-free framework for object-level motion editing in image-to-video generation. Unlike prior methods requiring trajectories, bounding boxes, masks, or motion fields, Search2Motion adopts target-frame-based control, leveraging first-last-frame motion priors to realize object relocation while preserving scene stability without fine-tuning. Reliable target-frame construction is achieved through semantic-guided object insertion and robust background inpainting. We further show that early-step self-attention maps predict object and camera dynamics, offering interpretable user feedback and motivating ACE-Seed (Attention Consensus for Early-step Seed selection), a lightweight search strategy that improves motion fidelity without look-ahead sampling or external evaluators. Noting that existing benchmarks conflate object and camera motion, we introduce S2M-DAVIS and S2M-OMB for stable-camera, object-only evaluation, alongside FLF2V-obj metrics that isolate object artifacts without requiring ground-truth trajectories. Search2Motion consistently outperforms baselines on FLF2V-obj and VBench.

我们推出了 Search2Motion，这是一个无需训练的框架，用于图像到视频生成中的对象级运动编辑。与之前需要轨迹、边界框、掩模或运动场的方法不同，Search2Motion 采用基于目标帧的控制，利用首末帧运动先验来实现对象重新定位，同时保持场景稳定性，无需微调。通过语义引导的对象插入和强大的背景修复来实现可靠的目标框架构建。我们进一步表明，早期自注意力图可以预测物体和相机动态，提供可解释的用户反馈并激发 ACE-Seed（早期种子选择的注意力共识），这是一种轻量级搜索策略，无需前瞻采样或外部评估器即可提高运动保真度。注意到现有的基准测试将物体和相机运动混为一谈，我们引入了 S2M-DAVIS 和 S2M-OMB 用于稳定相机、仅物体评估，以及无需地面实况轨迹即可隔离物体伪影的 FLF2V-obj 指标。 Search2Motion 在 FLF2V-obj 和 VBench 上的性能始终优于基线。

</details>

---

## 7. vAccSOL: Efficient and Transparent AI Vision Offloading for Mobile Robots / vAccSOL：移动机器人高效透明的人工智能视觉卸载

**Date**: 2026-03-17 | **arXiv**: [2603.16685v1](http://arxiv.org/abs/2603.16685v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16685v1)

**Categories**: cs.RO, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Mobile robots are increasingly deployed for inspection, patrol, and search-and-rescue operations, relying on computer vision for perception, navigation, and autonomous decision-making. However, executing modern vision workloads onboard is challenging due to limited compute resources and strict energy constraints. While some platforms include embedded accelerators, these are typically tied to proprietary software stacks, leaving user-defined workloads to run on resource-constrained companion computers.   We present vAccSOL, a framework for efficient and transparent execution of AI-based vision workloads across heterogeneous robotic and edge platforms. vAccSOL integrates two components: SOL, a neural network compiler that generates optimized inference libraries with minimal runtime dependencies, and vAccel, a lightweight execution framework that transparently dispatches inference locally on the robot or to nearby edge infrastructure. This combination enables hardware-optimized inference and flexible execution placement without requiring modifications to robot applications.   We evaluate vAccSOL on a real-world testbed with a commercial quadruped robot and twelve deep learning models covering image classification, video classification, and semantic segmentation. Compared to a PyTorch compiler baseline, SOL achieves comparable or better inference performance. With edge offloading, vAccSOL reduces robot-side power consumption by up to 80% and edge-side power by up to 60% compared to PyTorch, while increasing vision pipeline frame rate by up to 24x, extending the operating lifetime of battery-powered robots.

移动机器人越来越多地用于检查、巡逻和搜救行动，依靠计算机视觉进行感知、导航和自主决策。然而，由于有限的计算资源和严格的能源限制，在机上执行现代视觉工作负载具有挑战性。虽然某些平台包含嵌入式加速器，但它们通常与专有软件堆栈绑定，从而使用户定义的工作负载在资源有限的配套计算机上运行。   我们推出了 vAccSOL，这是一个跨异构机器人和边缘平台高效、透明地执行基于人工智能的视觉工作负载的框架。 vAccSOL 集成了两个组件：SOL（一种神经网络编译器，可生成具有最小运行时依赖性的优化推理库）和 vAccel（一种轻量级执行框架，可透明地将推理分派到机器人本地或附近的边缘基础设施）。这种组合可以实现硬件优化的推理和灵活的执行布局，而无需修改机器人应用程序。   我们在真实世界的测试台上评估 vAccSOL，该测试台配有商用四足机器人和 12 个涵盖图像分类、视频分类和语义分割的深度学习模型。与 PyTorch 编译器基线相比，SOL 实现了相当或更好的推理性能。通过边缘卸载，与 PyTorch 相比，vAccSOL 将机器人端功耗降低高达 80%，将边缘端功耗降低高达 60%，同时将视觉管道帧速率提高高达 24 倍，从而延长电池供电机器人的运行寿命。

</details>

---

## 8. Fast-WAM: Do World Action Models Need Test-time Future Imagination? / Fast-WAM：世界行动模型需要测试时的未来想象力吗？

**Date**: 2026-03-17 | **arXiv**: [2603.16666v1](http://arxiv.org/abs/2603.16666v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16666v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

World Action Models (WAMs) have emerged as a promising alternative to Vision-Language-Action (VLA) models for embodied control because they explicitly model how visual observations may evolve under action. Most existing WAMs follow an imagine-then-execute paradigm, incurring substantial test-time latency from iterative video denoising, yet it remains unclear whether explicit future imagination is actually necessary for strong action performance. In this paper, we ask whether WAMs need explicit future imagination at test time, or whether their benefit comes primarily from video modeling during training. We disentangle the role of video modeling during training from explicit future generation during inference by proposing \textbf{Fast-WAM}, a WAM architecture that retains video co-training during training but skips future prediction at test time. We further instantiate several Fast-WAM variants to enable a controlled comparison of these two factors. Across these variants, we find that Fast-WAM remains competitive with imagine-then-execute variants, while removing video co-training causes a much larger performance drop. Empirically, Fast-WAM achieves competitive results with state-of-the-art methods both on simulation benchmarks (LIBERO and RoboTwin) and real-world tasks, without embodied pretraining. It runs in real time with 190ms latency, over 4$\times$ faster than existing imagine-then-execute WAMs. These results suggest that the main value of video prediction in WAMs may lie in improving world representations during training rather than generating future observations at test time. Project page: https://yuantianyuan01.github.io/FastWAM/

世界行动模型（WAM）已成为视觉-语言-行动（VLA）模型的有希望的替代品，用于体现控制，因为它们明确地模拟了视觉观察在行动下如何演变。大多数现有的 WAM 都遵循“想象然后执行”的范例，迭代视频去噪会导致大量的测试时间延迟，但目前尚不清楚明确的未来想象是否真的需要强大的动作性能。在本文中，我们询问 WAM 在测试时是否需要明确的未来想象，或者它们的好处是否主要来自训练期间的视频建模。我们提出 \textbf{Fast-WAM}，将训练期间视频建模的作用与推理期间显式未来生成的作用分开，这是一种 WAM 架构，它在训练期间保留视频协同训练，但在测试时跳过未来预测。我们进一步实例化了几个 Fast-WAM 变体，以实现这两个因素的受控比较。在这些变体中，我们发现 Fast-WAM 与想象然后执行变体相比仍然具有竞争力，而删除视频协同训练会导致更大的性能下降。根据经验，Fast-WAM 在模拟基准（LIBERO 和 RoboTwin）和现实世界任务上都通过最先进的方法取得了有竞争力的结果，而无需具体的预训练。它实时运行，延迟为 190 毫秒，比现有的想象然后执行 WAM 快 4 倍多。这些结果表明，WAM 中视频预测的主要价值可能在于改进训练期间的世界表征，而不是在测试时生成未来的观察结果。项目页面：https://yuantianyuan01.github.io/FastWAM/

</details>

---

## 9. VideoMatGen: PBR Materials through Joint Generative Modeling / VideoMatGen：通过联合生成建模的 PBR 材料

**Date**: 2026-03-17 | **arXiv**: [2603.16566v1](http://arxiv.org/abs/2603.16566v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16566v1)

**Categories**: cs.CV, cs.GR

<details><summary><b>Abstract / 摘要</b></summary>

We present a method for generating physically-based materials for 3D shapes based on a video diffusion transformer architecture. Our method is conditioned on input geometry and a text description, and jointly models multiple material properties (base color, roughness, metallicity, height map) to form physically plausible materials. We further introduce a custom variational auto-encoder which encodes multiple material modalities into a compact latent space, which enables joint generation of multiple modalities without increasing the number of tokens. Our pipeline generates high-quality materials for 3D shapes given a text prompt, compatible with common content creation tools.

我们提出了一种基于视频扩散变压器架构生成 3D 形状的基于物理的材料的方法。我们的方法以输入几何形状和文本描述为条件，并联合建模多种材料属性（基色、粗糙度、金属度、高度图）以形成物理上合理的材料。我们进一步引入了一种定制的变分自动编码器，它将多种材料模态编码到一个紧凑的潜在空间中，从而可以在不增加标记数量的情况下联合生成多种模态。我们的管道根据文本提示生成 3D 形状的高质量材料，与常见的内容创建工具兼容。

</details>

---

## 10. LenghuSky-8: An 8-Year All-Sky Cloud Dataset with Star-Aware Masks and Alt-Az Calibration for Segmentation and Nowcasting / LenghuSky-8：一个为期 8 年的全天空云数据集，具有恒星感知掩模和 Alt-Az 校准，用于分段和临近预报

**Date**: 2026-03-17 | **arXiv**: [2603.16429v1](http://arxiv.org/abs/2603.16429v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16429v1)

**Categories**: astro-ph.IM, cs.AI, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Ground-based time-domain observatories require minute-by-minute, site-scale awareness of cloud cover, yet existing all-sky datasets are short, daylight-biased, or lack astrometric calibration. We present LenghuSky-8, an eight-year (2018-2025) all-sky imaging dataset from a premier astronomical site, comprising 429,620 $512 \times 512$ frames with 81.2% night-time coverage, star-aware cloud masks, background masks, and per-pixel altitude-azimuth (Alt-Az) calibration. For robust cloud segmentation across day, night, and lunar phases, we train a linear probe on DINOv3 local features and obtain 93.3% $\pm$ 1.1% overall accuracy on a balanced, manually labeled set of 1,111 images. Using stellar astrometry, we map each pixel to local alt-az coordinates and measure calibration uncertainties of approximately 0.37 deg at zenith and approximately 1.34 deg at 30 deg altitude, sufficient for integration with telescope schedulers. Beyond segmentation, we introduce a short-horizon nowcasting benchmark over per-pixel three-class logits (sky/cloud/contamination) with four baselines: persistence (copying the last frame), optical flow, ConvLSTM, and VideoGPT. ConvLSTM performs best but yields only limited gains over persistence, underscoring the difficulty of near-term cloud evolution. We release the dataset, calibrations, and an open-source toolkit for loading, evaluation, and scheduler-ready alt-az maps to boost research in segmentation, nowcasting, and autonomous observatory operations.

地面时域观测站需要对云量进行每分钟、站点规模的感知，但现有的全天空数据集较短、存在日光偏差或缺乏天体测量校准。我们展示了 LenghuSky-8，这是一个来自主要天文站点的八年（2018-2025）全天空成像数据集，包括 429,620 个 512 美元× 512 美元的帧，夜间覆盖率为 81.2%、恒星感知云掩模、背景掩模和每像素高度方位角 (Alt-Az) 校准。为了实现跨白天、夜间和月相的稳健云分割，我们在 DINOv3 局部特征上训练线性探针，并在一组平衡的、手动标记的 1,111 幅图像上获得 93.3% $\pm$ 1.1% 的总体准确率。使用恒星天体测量学，我们将每个像素映射到局部 alt-az 坐标，并测量天顶处约 0.37 度的校准不确定度和 30 度高度处约 1.34 度的校准不确定度，足以与望远镜调度程序集成。除了分割之外，我们还引入了针对每像素三类逻辑（天空/云/污染）的短视距临近预报基准，具有四个基线：持久性（复制最后一帧）、光流、ConvLSTM 和 VideoGPT。 ConvLSTM 表现最好，但与持久性相比仅产生有限的收益，这凸显了近期云演进的难度。我们发布了数据集、校准和用于加载、评估和调度程序就绪的 az 地图的开源工具包，以促进分段、临近预报和自主观测站操作的研究。

</details>

---

## 11. Fanar 2.0: Arabic Generative AI Stack / Fanar 2.0：阿拉伯语生成人工智能堆栈

**Date**: 2026-03-17 | **arXiv**: [2603.16397v1](http://arxiv.org/abs/2603.16397v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16397v1)

**Categories**: cs.CL, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

We present Fanar 2.0, the second generation of Qatar's Arabic-centric Generative AI platform. Sovereignty is a first-class design principle: every component, from data pipelines to deployment infrastructure, was designed and operated entirely at QCRI, Hamad Bin Khalifa University. Fanar 2.0 is a story of resource-constrained excellence: the effort ran on 256 NVIDIA H100 GPUs, with Arabic having only ~0.5% of web data despite 400 million native speakers. Fanar 2.0 adopts a disciplined strategy of data quality over quantity, targeted continual pre-training, and model merging to achieve substantial gains within these constraints. At the core is Fanar-27B, continually pre-trained from a Gemma-3-27B backbone on a curated corpus of 120 billion high-quality tokens across three data recipes. Despite using 8x fewer pre-training tokens than Fanar 1.0, it delivers substantial benchmark improvements: Arabic knowledge (+9.1 pts), language (+7.3 pts), dialects (+3.5 pts), and English capability (+7.6 pts). Beyond the core LLM, Fanar 2.0 introduces a rich stack of new capabilities. FanarGuard is a state-of-the-art 4B bilingual moderation filter for Arabic safety and cultural alignment. The speech family Aura gains a long-form ASR model for hours-long audio. Oryx vision family adds Arabic-aware image and video understanding alongside culturally grounded image generation. An agentic tool-calling framework enables multi-step workflows. Fanar-Sadiq utilizes a multi-agent architecture for Islamic content. Fanar-Diwan provides classical Arabic poetry generation. FanarShaheen delivers LLM-powered bilingual translation. A redesigned multi-layer orchestrator coordinates all components through intent-aware routing and defense-in-depth safety validation. Taken together, Fanar 2.0 demonstrates that sovereign, resource-constrained AI development can produce systems competitive with those built at far greater scale.

我们推出 Fanar 2.0，这是卡塔尔第二代以阿拉伯语为中心的生成人工智能平台。主权是一流的设计原则：从数据管道到部署基础设施的每个组件都完全在哈马德·本·哈利法大学 QCRI 设计和运营。 Fanar 2.0 是一个资源有限的卓越故事：该项目在 256 个 NVIDIA H100 GPU 上运行，尽管阿拉伯语有 4 亿母语人士，但其网络数据仅占约 0.5%。 Fanar 2.0 采用数据质量重于数量的严格策略、有针对性的持续预训练和模型合并，以在这些限制内实现实质性收益。其核心是 Fanar-27B，它通过 Gemma-3-27B 主干网络在三个数据配方中的 1200 亿个高质量代币的精选语料库上持续进行预训练。尽管使用的预训练标记比 Fanar 1.0 少 8 倍，但它提供了显着的基准改进：阿拉伯语知识（+9.1 分）、语言（+7.3 分）、方言（+3.5 分）和英语能力（+7.6 分）。除了核心法学硕士之外，Fanar 2.0 还引入了丰富的新功能。 FanarGuard 是最先进的 4B 双语审核过滤器，用于阿拉伯语安全和文化一致性。语音系列 Aura 获得了适用于长达数小时音频的长格式 ASR 模型。 Oryx 视觉系列添加了阿拉伯语图像和视频理解以及基于文化的图像生成。代理工具调用框架支持多步骤工作流程。 Fanar-Sadiq 利用多代理架构来处理伊斯兰内容。 Fanar-Diwan 提供古典阿拉伯诗歌生成。 FanarShaheen 提供法学硕士支持的双语翻译。重新设计的多层协调器通过意图感知路由和深度防御安全验证来协调所有组件。总而言之，Fanar 2.0 表明，主权、资源有限的人工智能开发可以产生与更大规模的系统竞争的系统。

</details>

---

## 12. VIGOR: VIdeo Geometry-Oriented Reward for Temporal Generative Alignment / VIGOR：针对时间生成对齐的视频几何导向奖励

**Date**: 2026-03-17 | **arXiv**: [2603.16271v1](http://arxiv.org/abs/2603.16271v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16271v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Video diffusion models lack explicit geometric supervision during training, leading to inconsistency artifacts such as object deformation, spatial drift, and depth violations in generated videos. To address this limitation, we propose a geometry-based reward model that leverages pretrained geometric foundation models to evaluate multi-view consistency through cross-frame reprojection error. Unlike previous geometric metrics that measure inconsistency in pixel space, where pixel intensity may introduce additional noise, our approach conducts error computation in a pointwise fashion, yielding a more physically grounded and robust error metric. Furthermore, we introduce a geometry-aware sampling strategy that filters out low-texture and non-semantic regions, focusing evaluation on geometrically meaningful areas with reliable correspondences to improve robustness. We apply this reward model to align video diffusion models through two complementary pathways: post-training of a bidirectional model via SFT or Reinforcement Learning and inference-time optimization of a Causal Video Model (e.g., Streaming video generator) via test-time scaling with our reward as a path verifier. Experimental results validate the effectiveness of our design, demonstrating that our geometry-based reward provides superior robustness compared to other variants. By enabling efficient inference-time scaling, our method offers a practical solution for enhancing open-source video models without requiring extensive computational resources for retraining.

视频扩散模型在训练过程中缺乏明确的几何监督，导致生成视频中出现不一致的伪影，例如对象变形、空间漂移和深度违规。为了解决这个限制，我们提出了一种基于几何的奖励模型，该模型利用预训练的几何基础模型通过跨帧重投影误差来评估多视图一致性。与以前测量像素空间不一致性的几何度量不同，像素强度可能会引入额外的噪声，我们的方法以逐点方式进行误差计算，产生更物理基础和稳健的误差度量。此外，我们引入了一种几何感知采样策略，可以过滤掉低纹理和非语义区域，重点评估具有可靠对应关系的几何有意义的区域，以提高鲁棒性。我们应用这个奖励模型通过两个互补的途径来调整视频传播模型：通过 SFT 或强化学习对双向模型进行后期训练，以及通过测试时间缩放对因果视频模型（例如流视频生成器）进行推理时间优化，并使用我们的奖励作为路径验证者。实验结果验证了我们设计的有效性，证明我们基于几何的奖励与其他变体相比提供了卓越的鲁棒性。通过实现高效的推理时间缩放，我们的方法提供了增强开源视频模型的实用解决方案，而无需大量计算资源进行再训练。

</details>

---

## 13. When Thinking Hurts: Mitigating Visual Forgetting in Video Reasoning via Frame Repetition / 当思考受伤时：通过帧重复减轻视频推理中的视觉遗忘

**Date**: 2026-03-17 | **arXiv**: [2603.16256v1](http://arxiv.org/abs/2603.16256v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16256v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recently, Multimodal Large Language Models (MLLMs) have demonstrated significant potential in complex visual tasks through the integration of Chain-of-Thought (CoT) reasoning. However, in Video Question Answering, extended thinking processes do not consistently yield performance gains and may even lead to degradation due to ``visual anchor drifting'', where models increasingly rely on self-generated text, sidelining visual inputs and causing hallucinations. While existing mitigations typically introduce specific mechanisms for the model to re-attend to visual inputs during inference, these approaches often incur prohibitive training costs and suffer from poor generalizability across different architectures. To address this, we propose FrameRepeat, an automated enhancement framework which features a lightweight repeat scoring module that enables Video-LLMs to autonomously identify which frames should be reinforced. We introduce a novel training strategy, Add-One-In (AOI), that uses MLLM output probabilities to generate supervision signals representing repeat gain. This can be used to train a frame scoring network, which guides the frame repetition behavior. Experimental results across multiple models and datasets demonstrate that FrameRepeat is both effective and generalizable in strengthening important visual cues during the reasoning process.

最近，多模态大型语言模型 (MLLM) 通过集成思想链 (CoT) 推理，在复杂的视觉任务中展现出了巨大的潜力。然而，在视频问答中，扩展的思维过程并不能始终如一地带来性能提升，甚至可能因“视觉锚点漂移”而导致性能下降，其中模型越来越依赖于自我生成的文本，从而忽略视觉输入并导致幻觉。虽然现有的缓解措施通常会引入特定的机制，让模型在推理过程中重新关注视觉输入，但这些方法通常会产生高昂的培训成本，并且在不同架构之间的通用性较差。为了解决这个问题，我们提出了 FrameRepeat，这是一个自动增强框架，它具有轻量级重复评分模块，使视频法学硕士能够自主识别哪些帧应该被增强。我们引入了一种新颖的训练策略，Add-One-In (AOI)，它使用 MLLM 输出概率来生成代表重复增益的监督信号。这可用于训练帧评分网络，该网络指导帧重复行为。多个模型和数据集的实验结果表明，FrameRepeat 在强化推理过程中的重要视觉线索方面既有效又具有通用性。

</details>

---

## 14. S-VAM: Shortcut Video-Action Model by Self-Distilling Geometric and Semantic Foresight / S-VAM：通过自蒸馏几何和语义预见的快捷视频动作模型

**Date**: 2026-03-17 | **arXiv**: [2603.16195v1](http://arxiv.org/abs/2603.16195v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16195v1)

**Categories**: cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Video action models (VAMs) have emerged as a promising paradigm for robot learning, owing to their powerful visual foresight for complex manipulation tasks. However, current VAMs, typically relying on either slow multi-step video generation or noisy one-step feature extraction, cannot simultaneously guarantee real-time inference and high-fidelity foresight. To address this limitation, we propose S-VAM, a shortcut video-action model that foresees coherent geometric and semantic representations via a single forward pass. Serving as a stable blueprint, these foreseen representations significantly simplify the action prediction. To enable this efficient shortcut, we introduce a novel self-distillation strategy that condenses structured generative priors of multi-step denoising into one-step inference. Specifically, vision foundation model (VFM) representations extracted from the diffusion model's own multi-step generated videos provide teacher targets. Lightweight decouplers, as students, learn to directly map noisy one-step features to these targets. Extensive experiments in simulation and the real world demonstrate that our S-VAM outperforms state-of-the-art methods, enabling efficient and precise manipulation in complex environments. Our project page is https://haodong-yan.github.io/S-VAM/

视频动作模型（VAM）因其对复杂操作任务的强大视觉预见性而成为机器人学习的一个有前途的范例。然而，当前的 VAM 通常依赖于缓慢的多步视频生成或嘈杂的一步特征提取，无法同时保证实时推理和高保真预见。为了解决这个限制，我们提出了 S-VAM，这是一种快捷视频动作模型，可以通过单个前向传递预见连贯的几何和语义表示。作为稳定的蓝图，这些预见的表示显着简化了动作预测。为了实现这种有效的捷径，我们引入了一种新颖的自蒸馏策略，该策略将多步去噪的结构化生成先验压缩为一步推理。具体来说，从扩散模型自己的多步骤生成的视频中提取的视觉基础模型（VFM）表示提供了教师目标。作为学生，轻量级解耦器学习将嘈杂的一步特征直接映射到这些目标。模拟和现实世界中的大量实验表明，我们的 S-VAM 优于最先进的方法，可在复杂环境中实现高效、精确的操作。我们的项目页面是https://haodong-yan.github.io/S-VAM/

</details>

---

## 15. GATS: Gaussian Aware Temporal Scaling Transformer for Invariant 4D Spatio-Temporal Point Cloud Representation / GATS：用于不变 4D 时空点云表示的高斯感知时间缩放变换器

**Date**: 2026-03-17 | **arXiv**: [2603.16154v1](http://arxiv.org/abs/2603.16154v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16154v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Understanding 4D point cloud videos is essential for enabling intelligent agents to perceive dynamic environments. However, temporal scale bias across varying frame rates and distributional uncertainty in irregular point clouds make it highly challenging to design a unified and robust 4D backbone. Existing CNN or Transformer based methods are constrained either by limited receptive fields or by quadratic computational complexity, while neglecting these implicit distortions. To address this problem, we propose a novel dual invariant framework, termed \textbf{Gaussian Aware Temporal Scaling (GATS)}, which explicitly resolves both distributional inconsistencies and temporal. The proposed \emph{Uncertainty Guided Gaussian Convolution (UGGC)} incorporates local Gaussian statistics and uncertainty aware gating into point convolution, thereby achieving robust neighborhood aggregation under density variation, noise, and occlusion. In parallel, the \emph{Temporal Scaling Attention (TSA)} introduces a learnable scaling factor to normalize temporal distances, ensuring frame partition invariance and consistent velocity estimation across different frame rates. These two modules are complementary: temporal scaling normalizes time intervals prior to Gaussian estimation, while Gaussian modeling enhances robustness to irregular distributions. Our experiments on mainstream benchmarks MSR-Action3D (\textbf{+6.62\%} accuracy), NTU RGBD (\textbf{+1.4\%} accuracy), and Synthia4D (\textbf{+1.8\%} mIoU) demonstrate significant performance gains, offering a more efficient and principled paradigm for invariant 4D point cloud video understanding with superior accuracy, robustness, and scalability compared to Transformer based counterparts.

了解 4D 点云视频对于智能代理感知动态环境至关重要。然而，不同帧速率的时间尺度偏差和不规则点云的分布不确定性使得设计统一且鲁棒的 4D 主干网变得极具挑战性。现有的基于 CNN 或 Transformer 的方法要么受到有限的感受野，要么受到二次计算复杂性的限制，同时忽略了这些隐式失真。为了解决这个问题，我们提出了一种新颖的双不变框架，称为 \textbf{Gaussian Aware Temporal Scaling (GATS)}，它明确解决了分布不一致和时间不一致。所提出的\emph{不确定性引导高斯卷积（UGGC）}将局部高斯统计和不确定性感知门控合并到点卷积中，从而在密度变化、噪声和遮挡下实现鲁棒的邻域聚合。同时，\emph{时间缩放注意力（TSA）}引入了一个可学习的缩放因子来标准化时间距离，确保帧分区不变性和不同帧速率下一致的速度估计。这两个模块是互补的：时间缩放在高斯估计之前标准化时间间隔，而高斯建模增强对不规则分布的鲁棒性。我们在主流基准测试 MSR-Action3D（\textbf{+6.62\%} 准确度）、NTU RGBD（\textbf{+1.4\%} 准确度）和 Synthia4D（\textbf{+1.8\%} mIoU）上进行的实验证明了显着的性能提升，为不变 4D 点云视频理解提供了更高效、更有原则的范例，与基于 Transformer 的同类产品相比，具有更高的准确性、鲁棒性和可扩展性。

</details>

---

## 16. Diffusion Models for Joint Audio-Video Generation / 用于联合音频-视频生成的扩散模型

**Date**: 2026-03-17 | **arXiv**: [2603.16093v1](http://arxiv.org/abs/2603.16093v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.16093v1)

**Categories**: cs.SD, cs.AI, cs.CV, cs.MM

<details><summary><b>Abstract / 摘要</b></summary>

Multimodal generative models have shown remarkable progress in single-modality video and audio synthesis, yet truly joint audio-video generation remains an open challenge. In this paper, I explore four key contributions to advance this field. First, I release two high-quality, paired audio-video datasets. The datasets consisting on 13 hours of video-game clips and 64 hours of concert performances, each segmented into consistent 34-second samples to facilitate reproducible research. Second, I train the MM-Diffusion architecture from scratch on our datasets, demonstrating its ability to produce semantically coherent audio-video pairs and quantitatively evaluating alignment on rapid actions and musical cues. Third, I investigate joint latent diffusion by leveraging pretrained video and audio encoder-decoders, uncovering challenges and inconsistencies in the multimodal decoding stage. Finally, I propose a sequential two-step text-to-audio-video generation pipeline: first generating video, then conditioning on both the video output and the original prompt to synthesize temporally synchronized audio. My experiments show that this modular approach yields high-fidelity generations of audio video generation.

多模态生成模型在单模态视频和音频合成方面取得了显着进展，但真正的联合音视频生成仍然是一个开放的挑战。在本文中，我探讨了推动这一领域发展的四个关键贡献。首先，我发布了两个高质量的配对音频-视频数据集。该数据集包含 13 小时的视频游戏剪辑和 64 小时的音乐会表演，每个片段都分为一致的 34 秒样本，以促进可重复的研究。其次，我在我们的数据集上从头开始训练 MM-Diffusion 架构，展示其生成语义连贯的音频-视频对以及定量评估快速动作和音乐提示对齐的能力。第三，我通过利用预训练的视频和音频编码器-解码器来研究联合潜在扩散，揭示多模态解码阶段的挑战和不一致。最后，我提出了一个连续的两步文本到音频视频生成管道：首先生成视频，然后对视频输出和原始提示进行调节以合成时间同步的音频。我的实验表明，这种模块化方法可以产生高保真音频视频生成。

</details>

---

## 17. Tri-Prompting: Video Diffusion with Unified Control over Scene, Subject, and Motion / 三提示：场景、主体、动作统一控制的视频扩散

**Date**: 2026-03-16 | **arXiv**: [2603.15614v1](http://arxiv.org/abs/2603.15614v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15614v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recent video diffusion models have made remarkable strides in visual quality, yet precise, fine-grained control remains a key bottleneck that limits practical customizability for content creation. For AI video creators, three forms of control are crucial: (i) scene composition, (ii) multi-view consistent subject customization, and (iii) camera-pose or object-motion adjustment. Existing methods typically handle these dimensions in isolation, with limited support for multi-view subject synthesis and identity preservation under arbitrary pose changes. This lack of a unified architecture makes it difficult to support versatile, jointly controllable video. We introduce Tri-Prompting, a unified framework and two-stage training paradigm that integrates scene composition, multi-view subject consistency, and motion control. Our approach leverages a dual-condition motion module driven by 3D tracking points for background scenes and downsampled RGB cues for foreground subjects. To ensure a balance between controllability and visual realism, we further propose an inference ControlNet scale schedule. Tri-Prompting supports novel workflows, including 3D-aware subject insertion into any scenes and manipulation of existing subjects in an image. Experimental results demonstrate that Tri-Prompting significantly outperforms specialized baselines such as Phantom and DaS in multi-view subject identity, 3D consistency, and motion accuracy.

最近的视频扩散模型在视觉质量方面取得了显着的进步，但精确、细粒度的控制仍然是限制内容创建的实际可定制性的关键瓶颈。对于人工智能视频创作者来说，三种控制形式至关重要：（i）场景合成，（ii）多视图一致的主题定制，以及（iii）相机姿势或物体运动调整。现有方法通常单独处理这些维度，对任意姿势变化下的多视图主题合成和身份保留的支持有限。缺乏统一的架构使得难以支持多功能、联合可控的视频。我们引入了 Tri-Prompting，这是一个统一的框架和两阶段训练范例，集成了场景合成、多视图主题一致性和运动控制。我们的方法利用双条件运动模块，该模块由用于背景场景的 3D 跟踪点和用于前景主体的下采样 RGB 提示驱动。为了确保可控性和视觉真实感之间的平衡，我们进一步提出了推理 ControlNet 比例表。 Tri-Prompting 支持新颖的工作流程，包括将 3D 感知主题插入任何场景以及操作图像中的现有主题。实验结果表明，Tri-Prompting 在多视图主体识别、3D 一致性和运动准确性方面显着优于 Phantom 和 DaS 等专业基线。

</details>

---

## 18. HSImul3R: Physics-in-the-Loop Reconstruction of Simulation-Ready Human-Scene Interactions / HSImul3R：模拟就绪的人场景交互的物理在环重建

**Date**: 2026-03-16 | **arXiv**: [2603.15612v1](http://arxiv.org/abs/2603.15612v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15612v1)

**Categories**: cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

We present HSImul3R, a unified framework for simulation-ready 3D reconstruction of human-scene interactions (HSI) from casual captures, including sparse-view images and monocular videos. Existing methods suffer from a perception-simulation gap: visually plausible reconstructions often violate physical constraints, leading to instability in physics engines and failure in embodied AI applications. To bridge this gap, we introduce a physically-grounded bi-directional optimization pipeline that treats the physics simulator as an active supervisor to jointly refine human dynamics and scene geometry. In the forward direction, we employ Scene-targeted Reinforcement Learning to optimize human motion under dual supervision of motion fidelity and contact stability. In the reverse direction, we propose Direct Simulation Reward Optimization, which leverages simulation feedback on gravitational stability and interaction success to refine scene geometry. We further present HSIBench, a new benchmark with diverse objects and interaction scenarios. Extensive experiments demonstrate that HSImul3R produces the first stable, simulation-ready HSI reconstructions and can be directly deployed to real-world humanoid robots.

我们提出了 HSImul3R，这是一个统一的框架，用于根据随意捕获的人景交互 (HSI) 进行模拟 3D 重建，包括稀疏视图图像和单目视频。现有方法存在感知与模拟差距：视觉上合理的重建常常违反物理约束，导致物理引擎不稳定和具体人工智能应用程序失败。为了弥补这一差距，我们引入了一种基于物理的双向优化管道，将物理模拟器视为主动监督者，以共同完善人体动力学和场景几何形状。在未来的方向上，我们采用场景目标强化学习在运动保真度和接触稳定性的双重监督下优化人体运动。在相反的方向上，我们提出直接模拟奖励优化，它利用重力稳定性和交互成功的模拟反馈来细化场景几何形状。我们进一步推出了 HSIBench，一个具有多种对象和交互场景的新基准。大量实验表明，HSImul3R 能够生成第一个稳定的、可用于仿真的 HSI 重建，并且可以直接部署到现实世界的人形机器人上。

</details>

---

## 19. Grounding World Simulation Models in a Real-World Metropolis / 在现实世界的大都市中建立世界模拟模型

**Date**: 2026-03-16 | **arXiv**: [2603.15583v1](http://arxiv.org/abs/2603.15583v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15583v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

What if a world simulation model could render not an imagined environment but a city that actually exists? Prior generative world models synthesize visually plausible yet artificial environments by imagining all content. We present Seoul World Model (SWM), a city-scale world model grounded in the real city of Seoul. SWM anchors autoregressive video generation through retrieval-augmented conditioning on nearby street-view images. However, this design introduces several challenges, including temporal misalignment between retrieved references and the dynamic target scene, limited trajectory diversity and data sparsity from vehicle-mounted captures at sparse intervals. We address these challenges through cross-temporal pairing, a large-scale synthetic dataset enabling diverse camera trajectories, and a view interpolation pipeline that synthesizes coherent training videos from sparse street-view images. We further introduce a Virtual Lookahead Sink to stabilize long-horizon generation by continuously re-grounding each chunk to a retrieved image at a future location. We evaluate SWM against recent video world models across three cities: Seoul, Busan, and Ann Arbor. SWM outperforms existing methods in generating spatially faithful, temporally consistent, long-horizon videos grounded in actual urban environments over trajectories reaching hundreds of meters, while supporting diverse camera movements and text-prompted scenario variations.

如果世界模拟模型能够渲染的不是想象的环境而是实际存在的城市怎么办？先前的生成世界模型通过想象所有内容来合成视觉上合理但人工的环境。我们推出首尔世界模型（SWM），这是一个以真实的首尔市为基础的城市规模的世界模型。 SWM 通过对附近街景图像进行检索增强调节来锚定自回归视频生成。然而，这种设计带来了一些挑战，包括检索到的参考与动态目标场景之间的时间错位、有限的轨迹多样性以及车载捕获的稀疏间隔数据稀疏性。我们通过跨时间配对、支持不同相机轨迹的大规模合成数据集以及从稀疏街景图像合成连贯训练视频的视图插值管道来解决这些挑战。我们进一步引入了虚拟前瞻接收器，通过不断地将每个块重新接地到未来位置的检索图像来稳定长视野生成。我们根据首尔、釜山和安娜堡这三个城市的最新视频世界模型来评估 SWM。 SWM 在生成基于实际城市环境、轨迹长达数百米的空间忠实、时间一致、长视距视频方面优于现有方法，同时支持不同的摄像机运动和文本提示的场景变化。

</details>

---

## 20. ViFeEdit: A Video-Free Tuner of Your Video Diffusion Transformer / ViFeEdit：视频扩散变压器的无视频调谐器

**Date**: 2026-03-16 | **arXiv**: [2603.15478v1](http://arxiv.org/abs/2603.15478v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15478v1)

**Categories**: cs.CV

**Code**: https://github.com/Lexie-YU/ViFeEdit.

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion Transformers (DiTs) have demonstrated remarkable scalability and quality in image and video generation, prompting growing interest in extending them to controllable generation and editing tasks. However, compared to the image counterparts, progress in video control and editing remains limited, mainly due to the scarcity of paired video data and the high computational cost of training video diffusion models. To address this issue, in this paper, we propose a video-free tuning framework termed ViFeEdit for video diffusion transformers. Without requiring any forms of video training data, ViFeEdit achieves versatile video generation and editing, adapted solely with 2D images. At the core of our approach is an architectural reparameterization that decouples spatial independence from the full 3D attention in modern video diffusion transformers, which enables visually faithful editing while maintaining temporal consistency with only minimal additional parameters. Moreover, this design operates in a dual-path pipeline with separate timestep embeddings for noise scheduling, exhibiting strong adaptability to diverse conditioning signals. Extensive experiments demonstrate that our method delivers promising results of controllable video generation and editing with only minimal training on 2D image data. Codes are available https://github.com/Lexie-YU/ViFeEdit.

扩散变压器 (DiT) 在图像和视频生成方面表现出了卓越的可扩展性和质量，促使人们越来越有兴趣将其扩展到可控生成和编辑任务。然而，与图像对应物相比，视频控制和编辑方面的进展仍然有限，这主要是由于配对视频数据的稀缺以及训练视频扩散模型的计算成本较高。为了解决这个问题，在本文中，我们提出了一种用于视频扩散变压器的无视频调整框架，称为 ViFeEdit。无需任何形式的视频训练数据，ViFeEdit 即可实现多功能视频生成和编辑，仅适用于 2D 图像。我们方法的核心是架构重新参数化，它将空间独立性与现代视频扩散转换器中的完整 3D 注意力分离，从而实现视觉上忠实的编辑，同时仅用最少的附加参数保持时间一致性。此外，该设计在双路径管道中运行，具有用于噪声调度的单独时间步嵌入，表现出对不同调节信号的强大适应性。大量的实验表明，我们的方法只需对 2D 图像数据进行最少的训练即可提供可控视频生成和编辑的有希望的结果。代码可访问 https://github.com/Lexie-YU/ViFeEdit。

</details>

---

## 21. AnyCrowd: Instance-Isolated Identity-Pose Binding for Arbitrary Multi-Character Animation / AnyCrowd：任意多角色动画的实例隔离身份姿势绑定

**Date**: 2026-03-16 | **arXiv**: [2603.15415v1](http://arxiv.org/abs/2603.15415v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15415v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Controllable character animation has advanced rapidly in recent years, yet multi-character animation remains underexplored. As the number of characters grows, multi-character reference encoding becomes more susceptible to latent identity entanglement, resulting in identity bleeding and reduced controllability. Moreover, learning precise and spatio-temporally consistent correspondences between reference identities and driving pose sequences becomes increasingly challenging, often leading to identity-pose mis-binding and inconsistency in generated videos. To address these challenges, we propose AnyCrowd, a Diffusion Transformer (DiT)-based video generation framework capable of scaling to an arbitrary number of characters. Specifically, we first introduce an Instance-Isolated Latent Representation (IILR), which encodes character instances independently prior to DiT processing to prevent latent identity entanglement. Building on this disentangled representation, we further propose Tri-Stage Decoupled Attention (TSDA) to bind identities to driving poses by decomposing self-attention into: (i) instance-aware foreground attention, (ii) background-centric interaction, and (iii) global foreground-background coordination. Furthermore, to mitigate token ambiguity in overlapping regions, an Adaptive Gated Fusion (AGF) module is integrated within TSDA to predict identity-aware weights, effectively fusing competing token groups into identity-consistent representations...

近年来，可控角色动画发展迅速，但多角色动画仍未得到充分探索。随着字符数量的增加，多字符参考编码变得更容易受到潜在身份纠缠的影响，从而导致身份泄露和可控性降低。此外，学习参考身份和驾驶姿势序列之间精确且时空一致的对应关系变得越来越具有挑战性，通常会导致生成视频中的身份姿势错误绑定和不一致。为了应对这些挑战，我们提出了 AnyCrowd，这是一种基于 Diffusion Transformer (DiT) 的视频生成框架，能够缩放到任意数量的字符。具体来说，我们首先引入实例隔离潜在表示（IILR），它在 DiT 处理之前独立编码字符实例，以防止潜在身份纠缠。基于这种解开的表示，我们进一步提出三阶段解耦注意力（TSDA），通过将自我注意力分解为：（i）实例感知的前景注意力，（ii）以背景为中心的交互，以及（iii）全局前景-背景协调，将身份与驾驶姿势绑定起来。此外，为了减轻重叠区域中的令牌模糊性，TSDA 中集成了自适应门控融合 (AGF) 模块来预测身份感知权重，有效地将竞争令牌组融合到身份一致的表示中……

</details>

---

## 22. RieMind: Geometry-Grounded Spatial Agent for Scene Understanding / RieMind：用于场景理解的基于几何的空间代理

**Date**: 2026-03-16 | **arXiv**: [2603.15386v1](http://arxiv.org/abs/2603.15386v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15386v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Visual Language Models (VLMs) have increasingly become the main paradigm for understanding indoor scenes, but they still struggle with metric and spatial reasoning. Current approaches rely on end-to-end video understanding or large-scale spatial question answering fine-tuning, inherently coupling perception and reasoning. In this paper, we investigate whether decoupling perception and reasoning leads to improved spatial reasoning. We propose an agentic framework for static 3D indoor scene reasoning that grounds an LLM in an explicit 3D scene graph (3DSG). Rather than ingesting videos directly, each scene is represented as a persistent 3DSG constructed by a dedicated perception module. To isolate reasoning performance, we instantiate the 3DSG from ground-truth annotations. The agent interacts with the scene exclusively through structured geometric tools that expose fundamental properties such as object dimensions, distances, poses, and spatial relationships. The results we obtain on the static split of VSI-Bench provide an upper bound under ideal perceptual conditions on the spatial reasoning performance, and we find that it is significantly higher than previous works, by up to 16\%, without task specific fine-tuning. Compared to base VLMs, our agentic variant achieves significantly better performance, with average improvements between 33\% to 50\%. These findings indicate that explicit geometric grounding substantially improves spatial reasoning performance, and suggest that structured representations offer a compelling alternative to purely end-to-end visual reasoning.

视觉语言模型（VLM）已日益成为理解室内场景的主要范例，但它们仍然在度量和空间推理方面遇到困难。当前的方法依赖于端到端视频理解或大规模空间问答微调，本质上耦合感知和推理。在本文中，我们研究了感知和推理的解耦是否可以改善空间推理。我们提出了一种用于静态 3D 室内场景推理的代理框架，该框架将 LLM 建立在显式 3D 场景图 (3DSG) 中。每个场景不是直接摄取视频，而是表示为由专用感知模块构建的持久 3DSG。为了隔离推理性能，我们从真实注释中实例化 3DSG。代理仅通过结构化几何工具与场景进行交互，这些工具公开了基本属性，例如对象尺寸、距离、姿势和空间关系。我们在 VSI-Bench 的静态分割上获得的结果提供了理想感知条件下空间推理性能的上限，我们发现它明显高于以前的工作，高达 16%，无需针对特定任务进行微调。与基础 VLM 相比，我们的代理变体实现了显着更好的性能，平均改进在 33\% 到 50\% 之间。这些发现表明，显式几何基础极大地提高了空间推理性能，并表明结构化表示为纯粹的端到端视觉推理提供了一种令人信服的替代方案。

</details>

---

## 23. Generative Video Compression with One-Dimensional Latent Representation / 具有一维潜在表示的生成视频压缩

**Date**: 2026-03-16 | **arXiv**: [2603.15302v1](http://arxiv.org/abs/2603.15302v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15302v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recent advancements in generative video codec (GVC) typically encode video into a 2D latent grid and employ high-capacity generative decoders for reconstruction. However, this paradigm still leaves two key challenges in fully exploiting spatial-temporal redundancy: Spatially, the 2D latent grid inevitably preserves intra-frame redundancy due to its rigid structure, where adjacent patches remain highly similar, thereby necessitating a higher bitrate. Temporally, the 2D latent grid is less effective for modeling long-term correlations in a compact and semantically coherent manner, as it hinders the aggregation of common contents across frames. To address these limitations, we introduce Generative Video Compression with One-Dimensional (1D) Latent Representation (GVC1D). GVC1D encodes the video data into extreme compact 1D latent tokens conditioned on both short- and long-term contexts. Without the rigid 2D spatial correspondence, these 1D latent tokens can adaptively attend to semantic regions and naturally facilitate token reduction, thereby reducing spatial redundancy. Furthermore, the proposed 1D memory provides semantically rich long-term context while maintaining low computational cost, thereby further reducing temporal redundancy. Experimental results indicate that GVC1D attains superior compression efficiency, where it achieves bitrate reductions of 60.4\% under LPIPS and 68.8\% under DISTS on the HEVC Class B dataset, surpassing the previous video compression methods.Project: https://gvc1d.github.io/

生成视频编解码器 (GVC) 的最新进展通常将视频编码到 2D 潜在网格中，并采用高容量生成解码器进行重建。然而，这种范式在充分利用时空冗余方面仍然存在两个关键挑战：在空间上，二维潜在网格由于其刚性结构不可避免地保留帧内冗余，其中相邻的块保持高度相似，从而需要更高的比特率。在时间上，2D 潜在网格对于以紧凑且语义一致的方式建模长期相关性不太有效，因为它阻碍了跨帧的公共内容的聚合。为了解决这些限制，我们引入了具有一维 (1D) 潜在表示的生成视频压缩 (GVC1D)。 GVC1D 将视频数据编码为以短期和长期上下文为条件的极其紧凑的一维潜在标记。没有严格的 2D 空间对应，这些 1D 潜在标记可以自适应地关注语义区域并自然地促进标记减少，从而减少空间冗余。此外，所提出的一维存储器提供语义丰富的长期上下文，同时保持较低的计算成本，从而进一步减少时间冗余。实验结果表明，GVC1D 具有优越的压缩效率，在 HEVC B 类数据集上，在 LPIPS 下实现了 60.4% 的码率降低，在 DISTS 下实现了 68.8% 的码率降低，超越了之前的视频压缩方法。项目：https://gvc1d.github.io/

</details>

---

## 24. Faster Inference of Flow-Based Generative Models via Improved Data-Noise Coupling / 通过改进的数据噪声耦合更快地推理基于流的生成模型

**Date**: 2026-03-16 | **arXiv**: [2603.15279v1](http://arxiv.org/abs/2603.15279v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.15279v1)

**Categories**: cs.LG, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Conditional Flow Matching (CFM), a simulation-free method for training continuous normalizing flows, provides an efficient alternative to diffusion models for key tasks like image and video generation. The performance of CFM in solving these tasks depends on the way data is coupled with noise. A recent approach uses minibatch optimal transport (OT) to reassign noise-data pairs in each training step to streamline sampling trajectories and thus accelerate inference. However, its optimization is restricted to individual minibatches, limiting its effectiveness on large datasets. To address this shortcoming, we introduce LOOM-CFM (Looking Out Of Minibatch-CFM), a novel method to extend the scope of minibatch OT by preserving and optimizing these assignments across minibatches over training time. Our approach demonstrates consistent improvements in the sampling speed-quality trade-off across multiple datasets. LOOM-CFM also enhances distillation initialization and supports high-resolution synthesis in latent space training.

条件流匹配 (CFM) 是一种用于训练连续归一化流的免模拟方法，为图像和视频生成等关键任务提供了扩散模型的有效替代方法。 CFM 解决这些任务的性能取决于数据与噪声的耦合方式。最近的一种方法使用小批量最优传输 (OT) 在每个训练步骤中重新分配噪声数据对，以简化采样轨迹，从而加速推理。然而，它的优化仅限于单个小批量，限制了它在大型数据集上的有效性。为了解决这个缺点，我们引入了 LOOM-CFM（Looking Out Of Minibatch-CFM），这是一种通过在训练时间内跨小批量保存和优化这些分配来扩展小批量 OT 范围的新方法。我们的方法证明了跨多个数据集的采样速度与质量权衡的持续改进。 LOOM-CFM 还增强了蒸馏初始化并支持潜在空间训练中的高分辨率合成。

</details>

---



</details>

<details><summary><b>2026-03-17 (22 papers)</b></summary>

# arXiv Video Papers - 2026-03-17

**Paper Count**: 22

---

## 1. Learning Question-Aware Keyframe Selection with Synthetic Supervision for Video Question Answering / 通过视频问答的综合监督学习问题感知关键帧选择

**Date**: 2026-03-16 | **arXiv**: [2603.14953v1](http://arxiv.org/abs/2603.14953v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14953v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Large multimodal models (LMMs) have recently demonstrated remarkable performance in video question answering (VideoQA), yet reasoning over video remains challenging due to high inference cost and diluted information. Keyframe selection offers efficiency and sharper reasoning but suffers from sparse supervision and redundant frame choices when relying only on image-text similarity. We present a question-aware keyframe selection framework with two components: pseudo keyframe labels derived from LMMs that provide informative supervision and a coverage regularization that promotes diverse, complementary evidence across time. Experiments on NExT-QA show that our method significantly improves accuracy, especially for temporal and causal question types, establishing keyframe selection as an effective and learnable module for VideoQA.

大型多模态模型（LMM）最近在视频问答（VideoQA）中表现出了卓越的性能，但由于推理成本高和信息稀释，视频推理仍然具有挑战性。关键帧选择提供了效率和更清晰的推理，但在仅依赖图像文本相似性时会受到稀疏监督和冗余帧选择的影响。我们提出了一个具有两个组件的问题感知关键帧选择框架：源自 LMM 的伪关键帧标签，提供信息监督；以及覆盖正则化，促进跨时间的多样化、互补证据。 NExT-QA 实验表明，我们的方法显着提高了准确性，特别是对于时间和因果问题类型，将关键帧选择建立为 VideoQA 的有效且可学习的模块。

</details>

---

## 2. Bridging Scene Generation and Planning: Driving with World Model via Unifying Vision and Motion Representation / 连接场景生成和规划：通过统一视觉和运动表示使用世界模型驾驶

**Date**: 2026-03-16 | **arXiv**: [2603.14948v1](http://arxiv.org/abs/2603.14948v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14948v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

End-to-end autonomous driving aims to generate safe and plausible planning policies from raw sensor input. Driving world models have shown great potential in learning rich representations by predicting the future evolution of a driving scene. However, existing driving world models primarily focus on visual scene representation, and motion representation is not explicitly designed to be planner-shared and inheritable, leaving a schism between the optimization of visual scene generation and the requirements of precise motion planning. We present WorldDrive, a holistic framework that couples scene generation and real-time planning via unifying vision and motion representation. We first introduce a Trajectory-aware Driving World Model, which conditions on a trajectory vocabulary to enforce consistency between visual dynamics and motion intentions, enabling the generation of diverse and plausible future scenes conditioned on a specific trajectory. We transfer the vision and motion encoders to a downstream Multi-modal Planner, ensuring the driving policy operates on mature representations pre-optimized by scene generation. A simple interaction between motion representation, visual representation, and ego status can generate high-quality, multi-modal trajectories. Furthermore, to exploit the world model's foresight, we propose a Future-aware Rewarder, which distills future latent representation from the frozen world model to evaluate and select optimal trajectories in real-time. Extensive experiments on the NAVSIM, NAVSIM-v2, and nuScenes benchmarks demonstrate that WorldDrive achieves leading planning performance among vision-only methods while maintaining high-fidelity action-controlled video generation capabilities, providing strong evidence for the effectiveness of unifying vision and motion representation for robust autonomous driving.

端到端自动驾驶旨在根据原始传感器输入生成安全且合理的规划策略。驾驶世界模型在通过预测驾驶场景的未来演变来学习丰富的表示方面显示出巨大的潜力。然而，现有的驾驶世界模型主要关注视觉场景表示，而运动表示没有明确设计为规划器共享和可继承，从而在视觉场景生成的优化和精确运动规划的要求之间留下了分歧。我们提出了 WorldDrive，这是一个整体框架，通过统一视觉和运动表示将场景生成和实时规划结合起来。我们首先引入轨迹感知驾驶世界模型，该模型以轨迹词汇为条件，以加强视觉动态和运动意图之间的一致性，从而能够生成以特定轨迹为条件的多样化且合理的未来场景。我们将视觉和运动编码器传输到下游的多模态规划器，确保驾驶策略在通过场景生成预先优化的成熟表示上运行。运动表征、视觉表征和自我状态之间的简单交互可以生成高质量的多模态轨迹。此外，为了利用世界模型的远见，我们提出了一个未来感知奖励器，它从冻结的世界模型中提取未来的潜在表示，以实时评估和选择最佳轨迹。对 NAVSIM、NAVSIM-v2 和 nuScenes 基准的大量实验表明，WorldDrive 在仅视觉方法中实现了领先的规划性能，同时保持了高保真动作控制视频生成功能，为统一视觉和运动表示以实现稳健的自动驾驶的有效性提供了有力的证据。

</details>

---

## 3. FAR-Drive: Frame-AutoRegressive Video Generation in Closed-Loop Autonomous Driving / FAR-Drive：闭环自动驾驶中的帧自回归视频生成

**Date**: 2026-03-16 | **arXiv**: [2603.14938v1](http://arxiv.org/abs/2603.14938v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14938v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Despite rapid progress in autonomous driving, reliable training and evaluation of driving systems remain fundamentally constrained by the lack of scalable and interactive simulation environments. Recent generative video models achieve remarkable visual fidelity, yet most operate in open-loop settings and fail to support fine-grained frame-level interaction between agent actions and environment evolution. Building a learning-based closed-loop simulator for autonomous driving poses three major challenges: maintaining long-horizon temporal and cross-view consistency, mitigating autoregressive degradation under iterative self-conditioning, and satisfying low-latency inference constraints. In this work, we propose FAR-Drive, a frame-level autoregressive video generation framework for autonomous driving. We introduce a multi-view diffusion transformer with fine-grained structured control, enabling geometrically consistent multi-camera generation. To address long-horizon consistency and iterative degradation, we design a two-stage training strategy consisting of adaptive reference horizon conditioning and blend-forcing autoregressive training, which progressively improves consistency and robustness under self-conditioning. To meet low-latency interaction requirements, we further integrate system-level efficiency optimizations for inference acceleration. Experiments on the nuScenes dataset demonstrate that our method achieves state-of-the-art performance among existing closed-loop autonomous driving simulation approaches, while maintaining sub-second latency on a single GPU.

尽管自动驾驶领域取得了快速进展，但由于缺乏可扩展和交互式仿真环境，驾驶系统的可靠训练和评估仍然从根本上受到限制。最近的生成视频模型实现了显着的视觉保真度，但大多数在开环设置中运行，并且无法支持代理动作和环境演化之间的细粒度帧级交互。构建基于学习的自动驾驶闭环模拟器面临三个主要挑战：保持长视野时间和跨视图一致性、减轻迭代自调节下的自回归退化以及满足低延迟推理约束。在这项工作中，我们提出了 FAR-Drive，一种用于自动驾驶的帧级自回归视频生成框架。我们引入了具有细粒度结构化控制的多视图扩散变换器，可实现几何一致的多相机生成。为了解决长视野一致性和迭代退化问题，我们设计了一种两阶段训练策略，包括自适应参考视野调节和混合强制自回归训练，逐步提高自调节下的一致性和鲁棒性。为了满足低延迟的交互需求，我们进一步集成了系统级效率优化以实现推理加速。 nuScenes 数据集上的实验表明，我们的方法在现有闭环自动驾驶模拟方法中实现了最先进的性能，同时在单个 GPU 上保持亚秒级延迟。

</details>

---

## 4. $\text{F}^2\text{HDR}$: Two-Stage HDR Video Reconstruction via Flow Adapter and Physical Motion Modeling / $\text{F}^2\text{HDR}$：通过流适配器和物理运动建模进行两阶段 HDR 视频重建

**Date**: 2026-03-16 | **arXiv**: [2603.14920v1](http://arxiv.org/abs/2603.14920v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14920v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Reconstructing High Dynamic Range (HDR) videos from sequences of alternating-exposure Low Dynamic Range (LDR) frames remains highly challenging, especially under dynamic scenes where cross-exposure inconsistencies and complex motion make inter-frame alignment difficult, leading to ghosting and detail loss. Existing methods often suffer from inaccurate alignment, suboptimal feature aggregation, and degraded reconstruction quality in motion-dominated regions. To address these challenges, we propose $\text{F}^2\text{HDR}$, a two-stage HDR video reconstruction framework that robustly perceives inter-frame motion and restores fine details in complex dynamic scenarios. The proposed framework integrates a flow adapter that adapts generic optical flow for robust cross-exposure alignment, a physical motion modeling to identify salient motion regions, and a motion-aware refinement network that aggregates complementary information while removing ghosting and noise. Extensive experiments demonstrate that $\text{F}^2\text{HDR}$ achieves state-of-the-art performance on real-world HDR video benchmarks, producing ghost-free and high-fidelity results under large motion and exposure variations.

从交替曝光的低动态范围 (LDR) 帧序列重建高动态范围 (HDR) 视频仍然极具挑战性，特别是在动态场景下，交叉曝光不一致和复杂的运动使帧间对齐变得困难，导致重影和细节丢失。现有方法通常会遇到对齐不准确、特征聚合欠佳以及运动主导区域的重建质量下降等问题。为了应对这些挑战，我们提出了$\text{F}^2\text{HDR}$，这是一个两阶段的 HDR 视频重建框架，可以稳健地感知帧间运动并恢复复杂动态场景中的精细细节。所提出的框架集成了一个流适配器，该适配器适应通用光流以实现鲁棒的交叉曝光对齐，一个物理运动建模以识别显着运动区域，以及一个运动感知细化网络，该网络聚合补充信息，同时消除重影和噪声。大量实验表明，$\text{F}^2\text{HDR}$ 在现实世界的 HDR 视频基准上实现了最先进的性能，在大运动和曝光变化下产生无鬼影和高保真结果。

</details>

---

## 5. Video Detector: A Dual-Phase Vision-Based System for Real-Time Traffic Intersection Control and Intelligent Transportation Analysis / 视频检测器：基于双相视觉的系统，用于实时交通路口控制和智能交通分析

**Date**: 2026-03-16 | **arXiv**: [2603.14861v1](http://arxiv.org/abs/2603.14861v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14861v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Urban traffic management increasingly requires intelligent sensing systems capable of adapting to dynamic traffic conditions without costly infrastructure modifications. Vision-based vehicle detection has therefore become a key technology for modern intelligent transportation systems. This study presents Video Detector (VD), a dual-phase vision-based traffic intersection management system designed as a flexible and cost-effective alternative to traditional inductive loop detectors. The framework integrates a real-time module (VD-RT) for intersection control with an offline analytical module (VD-Offline) for detailed traffic behavior analysis. Three system configurations were implemented using SSD Inception v2, Faster R-CNN Inception v2, and CenterNet ResNet-50 V1 FPN, trained on datasets totaling 108,000 annotated images across 6-10 vehicle classes. Experimental results show detection performance of up to 90% test accuracy and 29.5 mAP@0.5, while maintaining real-time throughput of 37 FPS on HD video streams. Field deployments conducted in collaboration with Istanbul IT and Smart City Technologies Inc. (ISBAK) demonstrate stable operation under diverse environmental conditions. The system supports virtual loop detection, vehicle counting, multi-object tracking, queue estimation, speed analysis, and multiclass vehicle classification, enabling comprehensive intersection monitoring without the need for embedded road sensors. The annotated dataset and training pipeline are publicly released to support reproducibility. These results indicate that the proposed framework provides a scalable and deployable vision-based solution for intelligent transportation systems and smart-city traffic management.

城市交通管理越来越需要能够适应动态交通状况而无需进行昂贵的基础设施改造的智能传感系统。基于视觉的车辆检测因此成为现代智能交通系统的关键技术。本研究提出了视频检测器 (VD)，这是一种基于双相视觉的交通路口管理系统，旨在作为传统感应环路检测器的灵活且经济高效的替代方案。该框架集成了用于交叉口控制的实时模块（VD-RT）和用于详细交通行为分析的离线分析模块（VD-Offline）。使用 SSD Inception v2、Faster R-CNN Inception v2 和 CenterNet ResNet-50 V1 FPN 实现了三种系统配置，并在 6-10 个车辆类别的总计 108,000 张带注释图像的数据集上进行训练。实验结果表明，检测性能高达 90% 的测试精度和 29.5 mAP@0.5，同时在高清视频流上保持 37 FPS 的实时吞吐量。与伊斯坦布尔 IT 和 Smart City Technologies Inc. (ISBAK) 合作进行的现场部署证明了在不同环境条件下的稳定运行。该系统支持虚拟环路检测、车辆计数、多目标跟踪、队列估计、速度分析和多类车辆分类，无需嵌入式道路传感器即可实现全面的路口监控。带注释的数据集和训练流程公开发布以支持可重复性。这些结果表明，所提出的框架为智能交通系统和智能城市交通管理提供了可扩展且可部署的基于视觉的解决方案。

</details>

---

## 6. A Skill-augmented Agentic Framework and Benchmark for Multi-Video Understanding / 多视频理解的技能增强代理框架和基准

**Date**: 2026-03-16 | **arXiv**: [2603.14733v1](http://arxiv.org/abs/2603.14733v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14733v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Multimodal Large Language Models have achieved strong performance in single-video understanding, yet their ability to reason across multiple videos remains limited. Existing approaches typically concatenate multiple videos into a single input and perform direct inference, which introduces training-inference mismatch, information loss from frame compression, and a lack of explicit cross-video coordination. Meanwhile, current multi-video benchmarks primarily emphasize event-level comparison, leaving identity-level matching, fine-grained discrimination, and structured multi-step reasoning underexplored. To address these gaps, we introduce MVX-Bench, a Multi-Video Cross-Dimension Benchmark that reformulates 11 classical computer vision tasks into a unified multi-video question-answering framework, comprising 1,442 questions over 4,255 videos from diverse real-world datasets. We further propose SAMA, a Skill-Augmented Agentic Framework for Multi-Video Understanding, which integrates visual tools, task-specific skills, and a conflict-aware verification mechanism to enable iterative and structured reasoning. Experimental results show that SAMA outperforms strong open-source baselines and GPT on MVX-Bench, and ablations validate the effectiveness of skill design and conflict resolution.

多模态大语言模型在单视频理解方面取得了强大的性能，但它们跨多个视频进行推理的能力仍然有限。现有方法通常将多个视频连接成单个输入并执行直接推理，这会引入训练推理不匹配、帧压缩带来的信息丢失以及缺乏明确的跨视频协调。与此同时，当前的多视频基准主要强调事件级别的比较，而对身份级别匹配、细粒度区分和结构化多步骤推理的探索还不够。为了解决这些差距，我们引入了 MVX-Bench，这是一种多视频跨维度基准，它将 11 种经典计算机视觉任务重新表述为统一的多视频问答框架，其中包含来自不同现实世界数据集的 4,255 个视频中的 1,442 个问题。我们进一步提出了 SAMA，一种用于多视频理解的技能增强代理框架，它集成了视觉工具、特定任务技能和冲突感知验证机制，以实现迭代和结构化推理。实验结果表明，SAMA 在 MVX-Bench 上的性能优于强大的开源基线和 GPT，并且消融验证了技能设计和冲突解决的有效性。

</details>

---

## 7. MVHOI: Bridge Multi-view Condition to Complex Human-Object Interaction Video Reenactment via 3D Foundation Model / MVHOI：通过 3D 基础模型将多视图条件桥接到复杂的人机交互视频重演

**Date**: 2026-03-16 | **arXiv**: [2603.14686v1](http://arxiv.org/abs/2603.14686v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14686v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Human-Object Interaction (HOI) video reenactment with realistic motion remains a frontier in expressive digital human creation. Existing approaches primarily handle simple image-plane motion (e.g., in-plane translations), struggling with complex non-planar manipulations like out-of-plane reorientation. In this paper, we propose MVHOI, a two-stage HOI video reenactment framework that bridges multi-view reference conditions and video foundation models via a 3D Foundation Model (3DFM). The 3DFM first produces view-consistent object priors conditioned on implicit motion dynamics across novel viewpoints. A controllable video generation model then synthesizes high-fidelity object texture by incorporating multi-view reference images, ensuring appearance consistency via a reasonable retrieval mechanism. By enabling these two stages to mutually reinforce one another during the inference phase, our framework shows superior performance in generating long-duration HOI videos with intricate object manipulations. Extensive experiments show substantial improvements over prior approaches, especially for HOI with complex 3D object manipulations.

具有真实动作的人机交互 (HOI) 视频重演仍然是富有表现力的数字人类创作的前沿。现有方法主要处理简单的图像平面运动（例如平面内平移），难以处理复杂的非平面操作（例如平面外重新定向）。在本文中，我们提出了 MVHOI，这是一种两阶段 HOI 视频重演框架，通过 3D 基础模型 (3DFM) 连接多视图参考条件和视频基础模型。 3DFM 首先根据新视点的隐式运动动力学生成视图一致的对象先验。然后，可控视频生成模型通过合并多视图参考图像来合成高保真对象纹理，通过合理的检索机制确保外观一致性。通过使这两个阶段在推理阶段相互加强，我们的框架在生成具有复杂对象操作的长时间 HOI 视频方面表现出了卓越的性能。大量的实验表明，与之前的方法相比，有很大的改进，特别是对于具有复杂 3D 对象操作的 HOI。

</details>

---

## 8. VisionCoach: Reinforcing Grounded Video Reasoning via Visual-Perception Prompting / VisionCoach：通过视觉感知提示强化扎根视频推理

**Date**: 2026-03-15 | **arXiv**: [2603.14659v1](http://arxiv.org/abs/2603.14659v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14659v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Video reasoning requires models to locate and track question-relevant evidence across frames. While reinforcement learning (RL) with verifiable rewards improves accuracy, it still struggles to achieve reliable spatio-temporal grounding during the reasoning process. Moreover, improving grounding typically relies on scaled training data or inference-time perception tools, which increases annotation cost or computational cost. To address this challenge, we propose VisonCoach, an input-adaptive RL framework that improves spatio-temporal grounding through visual prompting as training-time guidance. During RL training, visual prompts are selectively applied to challenging inputs to amplify question-relevant evidence and suppress distractors. The model then internalizes these improvements through self-distillation, enabling grounded reasoning directly on raw videos without visual prompting at inference. VisonCoach consists of two components: (1) Visual Prompt Selector, which predicts appropriate prompt types conditioned on the video and question, and (2) Spatio-Temporal Reasoner, optimized with RL under visual prompt guidance and object-aware grounding rewards that enforce object identity consistency and multi-region bounding-box overlap. Extensive experiments demonstrate that VisonCoach achieves state-of-the-art performance under comparable settings, across diverse video reasoning, video understanding, and temporal grounding benchmarks (V-STAR, VideoMME, World-Sense, VideoMMMU, PerceptionTest, and Charades-STA), while maintaining a single efficient inference pathway without external tools. Our results show that visual prompting during training improves grounded video reasoning, while self-distillation enables the model to internalize this ability without requiring prompts at inference time.

视频推理需要模型跨帧定位和跟踪与问题相关的证据。虽然具有可验证奖励的强化学习（RL）提高了准确性，但它仍然难以在推理过程中实现可靠的时空基础。此外，改善基础通常依赖于缩放训练数据或推理时间感知工具，这会增加注释成本或计算成本。为了应对这一挑战，我们提出了 VisonCoach，这是一种输入自适应 RL 框架，可通过视觉提示作为训练时指导来改善时空基础。在强化学习训练期间，视觉提示会选择性地应用于具有挑战性的输入，以放大与问题相关的证据并抑制干扰因素。然后，该模型通过自我蒸馏将这些改进内化，从而可以直接在原始视频上进行基础推理，而无需推理时的视觉提示。 VisonCoach 由两个组件组成：(1) 视觉提示选择器，根据视频和问题预测适当的提示类型；(2) 时空推理器，在视觉提示引导和对象感知基础奖励下使用 RL 进行优化，以强制对象身份一致性和多区域边界框重叠。大量实验表明，VisonCoach 在相当的设置下、跨不同的视频推理、视频理解和时间基础基准（V-STAR、VideoMME、World-Sense、VideoMMMU、PerceptionTest 和 Charades-STA）实现了最先进的性能，同时无需外部工具即可保持单一高效的推理路径。我们的结果表明，训练期间的视觉提示可以改善基础视频推理，而自蒸馏使模型能够内化这种能力，而无需在推理时进行提示。

</details>

---

## 9. Interp3R: Continuous-time 3D Geometry Estimation with Frames and Events / Interp3R：使用帧和事件进行连续时间 3D 几何估计

**Date**: 2026-03-15 | **arXiv**: [2603.14528v1](http://arxiv.org/abs/2603.14528v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14528v1)

**Categories**: cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

In recent years, 3D visual foundation models pioneered by pointmap-based approaches such as DUSt3R have attracted a lot of interest, achieving impressive accuracy and strong generalization across diverse scenes. However, these methods are inherently limited to recovering scene geometry only at the discrete time instants when images are captured, leaving the scene evolution during the blind time between consecutive frames largely unexplored. We introduce Interp3R, to the best of our knowledge the first method that enhances pointmap-based models to estimate depth and camera poses at arbitrary time instants. Interp3R leverages asynchronous event data to interpolate pointmaps produced by frame-based models, enabling temporally continuous geometric representations. Depth and camera poses are then jointly recovered by aligning the interpolated pointmaps together with those predicted by the underlying frame-based models into a consistent spatial framework. We train Interp3R exclusively on a synthetic dataset, yet demonstrate strong generalization across a wide range of synthetic and real-world benchmarks. Extensive experiments show that Interp3R outperforms by a considerable margin state-of-the-art baselines that follow a two-stage pipeline of 2D video frame interpolation followed by 3D geometry estimation.

近年来，由基于点图的方法（例如 DUSt3R）开创的 3D 视觉基础模型吸引了很多人的兴趣，在不同场景中实现了令人印象深刻的准确性和强大的泛化能力。然而，这些方法本质上仅限于仅在捕获图像时的离散时刻恢复场景几何形状，从而使得连续帧之间的盲时间期间的场景演变很大程度上未被探索。据我们所知，我们引入了 Interp3R，这是第一种增强基于点图的模型来估计任意时刻的深度和相机姿势的方法。 Interp3R 利用异步事件数据对基于帧的模型生成的点图进行插值，从而实现时间连续的几何表示。然后，通过将插值点图与底层基于帧的模型预测的点图对齐到一致的空间框架中，联合恢复深度和相机姿态。我们专门在合成数据集上训练 Interp3R，但在各种合成和现实世界基准中展示了强大的泛化能力。大量实验表明，Interp3R 的性能远远优于最先进的基线，该基线遵循 2D 视频帧插值和 3D 几何估计的两级管道。

</details>

---

## 10. LatSearch: Latent Reward-Guided Search for Faster Inference-Time Scaling in Video Diffusion / LatSearch：潜在奖励引导搜索，以在视频扩散中实现更快的推理时间缩放

**Date**: 2026-03-15 | **arXiv**: [2603.14526v1](http://arxiv.org/abs/2603.14526v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14526v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

The recent success of inference-time scaling in large language models has inspired similar explorations in video diffusion. In particular, motivated by the existence of "golden noise" that enhances video quality, prior work has attempted to improve inference by optimising or searching for better initial noise. However, these approaches have notable limitations: they either rely on priors imposed at the beginning of noise sampling or on rewards evaluated only on the denoised and decoded videos. This leads to error accumulation, delayed and sparse reward signals, and prohibitive computational cost, which prevents the use of stronger search algorithms. Crucially, stronger search algorithms are precisely what could unlock substantial gains in controllability, sample efficiency and generation quality for video diffusion, provided their computational cost can be reduced. To fill in this gap, we enable efficient inference-time scaling for video diffusion through latent reward guidance, which provides intermediate, informative and efficient feedback along the denoising trajectory. We introduce a latent reward model that scores partially denoised latents at arbitrary timesteps with respect to visual quality, motion quality, and text alignment. Building on this model, we propose LatSearch, a novel inference-time search mechanism that performs Reward-Guided Resampling and Pruning (RGRP). In the resampling stage, candidates are sampled according to reward-normalised probabilities to reduce over-reliance on the reward model. In the pruning stage, applied at the final scheduled step, only the candidate with the highest cumulative reward is retained, improving both quality and efficiency. We evaluate LatSearch on the VBench-2.0 benchmark and demonstrate that it consistently improves video generation across multiple evaluation dimensions compared to the baseline Wan2.1 model.

最近在大型语言模型中推理时间缩放的成功激发了视频传播领域的类似探索。特别是，由于存在增强视频质量的“黄金噪声”，先前的工作试图通过优化或搜索更好的初始噪声来改进推理。然而，这些方法有明显的局限性：它们要么依赖于噪声采样开始时施加的先验，要么依赖于仅在去噪和解码视频上评估的奖励。这会导致错误累积、奖励信号延迟和稀疏以及计算成本过高，从而阻碍了更强的搜索算法的使用。至关重要的是，如果可以降低计算成本，更强大的搜索算法恰恰可以在视频扩散的可控性、样本效率和生成质量方面带来巨大的收益。为了填补这一空白，我们通过潜在奖励指导实现视频传播的有效推理时间缩放，从而沿着去噪轨迹提供中间、信息丰富且高效的反馈。我们引入了一种潜在奖励模型，该模型在视觉质量、运动质量和文本对齐方面对任意时间步长的部分去噪潜伏进行评分。在此模型的基础上，我们提出了 LatSearch，这是一种执行奖励引导重采样和修剪（RGRP）的新型推理时间搜索机制。在重采样阶段，根据奖励归一化概率对候选者进行采样，以减少对奖励模型的过度依赖。在修剪阶段，应用于最后的预定步骤，仅保留累积奖励最高的候选者，从而提高质量和效率。我们在 VBench-2.0 基准上评估 LatSearch，并证明与基线 Wan2.1 模型相比，它在多个评估维度上持续改进了视频生成。

</details>

---

## 11. LongVidSearch: An Agentic Benchmark for Multi-hop Evidence Retrieval Planning in Long Videos / LongVidSearch：长视频中多跳证据检索规划的代理基准

**Date**: 2026-03-15 | **arXiv**: [2603.14468v1](http://arxiv.org/abs/2603.14468v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14468v1)

**Categories**: cs.CV, cs.IR

<details><summary><b>Abstract / 摘要</b></summary>

Long video question answering (Long-Video QA) increasingly relies on agentic tool use to retrieve evidence from long videos. In realistic settings, this process often requires multi-hop retrieval, where agents must iteratively gather multiple discontinuous evidence clips. However, existing long-video benchmarks are largely static: they rarely enforce strict multi-hop retrieval and typically lack a standardized evidence-access interface, making it difficult to separate failures in retrieval planning from those in answer generation. To address this gap, we introduce LongVidSearch, a benchmark for evaluating agentic multi-hop evidence retrieval planning in long videos under standardized access constraints. LongVidSearch enforces retrieval necessity: a Hop-k question requires exactly k necessary evidence clips, and removing any single clip renders the question unsolvable. The benchmark contains 3,000 questions over 447 long videos (average length 26 minutes), covering four reasoning categories: State Mutation, Causal Inference, Global Summary, and Visual Tracking, with 2-hop, 3-hop, and 4-hop evidence requirements. To ensure fair and controlled evaluation, all agents interact with LongVidSearch through a unified tool interface, which fixes the retrieval backend and isolates the agent's ability to formulate queries and plan iterative retrieval. In addition to answer accuracy, we measure tool-call cost to analyze the accuracy-efficiency trade-off under identical access conditions. We evaluate VideoAgent-style QA agents with multiple backbone LLMs using three-judge majority voting. GPT-5 achieves the highest accuracy (42.43), outperforming Gemini 3 Pro (30.97) and GPT-4o (19.20), yet remaining below 50 %, highlighting the difficulty of multi-hop retrieval planning. With gold evidence clips, performance becomes near-perfect, confirming retrieval planning as the primary bottleneck.

Long video question answering (Long-Video QA) increasingly relies on agentic tool use to retrieve evidence from long videos.在现实环境中，此过程通常需要多跳检索，其中代理必须迭代收集多个不连续的证据片段。然而，现有的长视频基准在很大程度上是静态的：它们很少强制执行严格的多跳检索，并且通常缺乏标准化的证据访问接口，使得很难将检索计划中的失败与答案生成中的失败区分开。为了解决这一差距，我们引入了 LongVidSearch，这是一个用于评估标准化访问约束下长视频中的代理多跳证据检索规划的基准。 LongVidSearch 强制检索的必要性：Hop-k 问题恰好需要 k 个必要的证据片段，删除任何单个片段都会导致问题无法解决。该基准测试包含 447 个长视频（平均长度 26 分钟）中的 3,000 个问题，涵盖四个推理类别：状态突变、因果推理、全局摘要和视觉跟踪，并具有 2 跳、3 跳和 4 跳证据要求。为了确保公平和受控的评估，所有代理通过统一的工具界面与 LongVidSearch 交互，该接口修复了检索后端并隔离了代理制定查询和计划迭代检索的能力。 In addition to answer accuracy, we measure tool-call cost to analyze the accuracy-efficiency trade-off under identical access conditions. We evaluate VideoAgent-style QA agents with multiple backbone LLMs using three-judge majority voting. GPT-5 达到了最高的准确率（42.43），优于 Gemini 3 Pro（30.97）和 GPT-4o（19.20），但仍低于 50%，凸显了多跳检索规划的难度。 With gold evidence clips, performance becomes near-perfect, confirming retrieval planning as the primary bottleneck.

</details>

---

## 12. End-to-End Spatial-Temporal Transformer for Real-time 4D HOI Reconstruction / 用于实时 4D HOI 重建的端到端时空转换器

**Date**: 2026-03-15 | **arXiv**: [2603.14435v1](http://arxiv.org/abs/2603.14435v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14435v1)

**Categories**: cs.CV

**Project**: https://nianheng.github.io/THO-project/  <details><summary><b>Abstract / 摘要</b></summary>

Monocular 4D human-object interaction (HOI) reconstruction - recovering a moving human and a manipulated object from a single RGB video - remains challenging due to depth ambiguity and frequent occlusions. Existing methods often rely on multi-stage pipelines or iterative optimization, leading to high inference latency, failing to meet real-time requirements, and susceptibility to error accumulation. To address these limitations, we propose THO, an end-to-end Spatial-Temporal Transformer that predicts human motion and coordinated object motion in a forward fashion from the given video and 3D template. THO achieves this by leveraging spatial-temporal HOI tuple priors. Spatial priors exploit contact-region proximity to infer occluded object features from human cues, while temporal priors capture cross-frame kinematic correlations to refine object representations and enforce physical coherence. Extensive experiments demonstrate that THO operates at an inference speed of 31.5 FPS on a single RTX 4090 GPU, achieving a >600x speedup over prior optimization-based methods while simultaneously improving reconstruction accuracy and temporal consistency. The project page is available at: https://nianheng.github.io/THO-project/

Monocular 4D human-object interaction (HOI) reconstruction - recovering a moving human and a manipulated object from a single RGB video - remains challenging due to depth ambiguity and frequent occlusions. Existing methods often rely on multi-stage pipelines or iterative optimization, leading to high inference latency, failing to meet real-time requirements, and susceptibility to error accumulation. To address these limitations, we propose THO, an end-to-end Spatial-Temporal Transformer that predicts human motion and coordinated object motion in a forward fashion from the given video and 3D template. THO 通过利用时空 HOI 元组先验来实现这一点。 Spatial priors exploit contact-region proximity to infer occluded object features from human cues, while temporal priors capture cross-frame kinematic correlations to refine object representations and enforce physical coherence. Extensive experiments demonstrate that THO operates at an inference speed of 31.5 FPS on a single RTX 4090 GPU, achieving a >600x speedup over prior optimization-based methods while simultaneously improving reconstruction accuracy and temporal consistency.项目页面位于：https://nianheng.github.io/THO-project/

</details>

---

## 13. GenState-AI: State-Aware Dataset for Text-to-Video Retrieval on AI-Generated Videos / GenState-AI：用于对 AI 生成的视频进行文本到视频检索的状态感知数据集

**Date**: 2026-03-15 | **arXiv**: [2603.14426v1](http://arxiv.org/abs/2603.14426v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14426v1)

**Categories**: cs.CV, cs.IR, cs.MM

<details><summary><b>Abstract / 摘要</b></summary>

Existing text-to-video retrieval benchmarks are dominated by real-world footage where much of the semantics can be inferred from a single frame, leaving temporal reasoning and explicit end-state grounding under-evaluated. We introduce GenState-AI, an AI-generated benchmark centered on controlled state transitions, where each query is paired with a main video, a temporal hard negative that differs only in the decisive end-state, and a semantic hard negative with content substitution, enabling fine-grained diagnosis of temporal vs. semantic confusions beyond appearance matching. Using Wan2.2-TI2V-5B, we generate short clips whose meaning depends on precise changes in position, quantity, and object relations, providing controllable evaluation conditions for state-aware retrieval. We evaluate two representative MLLM-based baselines, and observe consistent and interpretable failure patterns: both frequently confuse the main video with the temporal hard negative and over-prefer temporally plausible but end-state-incorrect clips, indicating insufficient grounding to decisive end-state evidence, while being comparatively less sensitive to semantic substitutions. We further introduce triplet-based diagnostic analyses, including relative-order statistics and breakdowns across transition categories, to make temporal vs. semantic failure sources explicit. GenState-AI provides a focused testbed for state-aware, temporally and semantically sensitive text-to-video retrieval, and will be released on huggingface.co.

现有的文本到视频检索基准以现实世界的镜头为主，其中许多语义可以从单个帧中推断出来，而对时间推理和明确的最终状态基础的评估不足。我们引入了 GenState-AI，这是一个以受控状态转换为中心的人工智能生成的基准，其中每个查询都与一个主视频、一个仅在决定性最终状态不同的时间硬负例和一个具有内容替换的语义硬负例配对，从而能够对时间与语义混淆进行细粒度诊断，而不仅仅是外观匹配。使用Wan2.2-TI2V-5B，我们生成短片，其含义取决于位置、数量和对象关系的精确变化，为状态感知检索提供可控的评估条件。我们评估了两个具有代表性的基于 MLLM 的基线，并观察到一致且可解释的失败模式：两者都经常将主视频与时间硬阴性相混淆，并且过分偏爱时间上合理但最终状态不正确的剪辑，表明对决定性最终状态证据的基础不足，同时对语义替换相对不太敏感。我们进一步引入基于三元组的诊断分析，包括相对顺序统计和跨转换类别的细分，以使时间与语义故障源变得明确。 GenState-AI 为状态感知、时间和语义敏感的文本到视频检索提供了一个重点测试平台，并将在 Huggingface.co 上发布。

</details>

---

## 14. LoCAtion: Long-time Collaborative Attention Framework for High Dynamic Range Video Reconstruction / LoCAtion：高动态范围视频重建的长期协作注意力框架

**Date**: 2026-03-15 | **arXiv**: [2603.14377v1](http://arxiv.org/abs/2603.14377v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14377v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Prevailing High Dynamic Range (HDR) video reconstruction methods are fundamentally trapped in a fragile alignment-and-fusion paradigm. While explicit spatial alignment can successfully recover fine details in controlled environments, it becomes a severe bottleneck in unconstrained dynamic scenes. By forcing rigid alignment across unpredictable motions and varying exposures, these methods inevitably translate registration errors into severe ghosting artifacts and temporal flickering. In this paper, we rethink this conventional prerequisite. Recognizing that explicit alignment is inherently vulnerable to real-world complexities, we propose LoCAtion, a Long-time Collaborative Attention framework that reformulates HDR video generation from a fragile spatial warping task into a robust, alignment-free collaborative feature routing problem. Guided by this new formulation, our architecture explicitly decouples the highly entangled reconstruction task. Rather than struggling to rigidly warp neighboring frames, we anchor the scene on a continuous medium-exposure backbone and utilize collaborative attention to dynamically harvest and inject reliable irradiance cues from unaligned exposures. Furthermore, we introduce a learned global sequence solver. By leveraging bidirectional context and long-range temporal modeling, it propagates corrective signals and structural features across the entire sequence, inherently enforcing whole-video coherence and eliminating jitter. Extensive experiments demonstrate that LoCAtion achieves state-of-the-art visual quality and temporal stability, offering a highly competitive balance between accuracy and computational efficiency.

Prevailing High Dynamic Range (HDR) video reconstruction methods are fundamentally trapped in a fragile alignment-and-fusion paradigm.虽然显式空间对齐可以成功地恢复受控环境中的精细细节，但它在不受约束的动态场景中成为严重的瓶颈。通过在不可预测的运动和变化的曝光之间强制进行严格对准，这些方法不可避免地将配准错误转化为严重的重影伪像和时间闪烁。 In this paper, we rethink this conventional prerequisite.认识到显式对齐本质上容易受到现实世界复杂性的影响，我们提出了 LoCAtion，这是一种长期协作注意力框架，它将 HDR 视频生成从脆弱的空间扭曲任务重新表述为鲁棒的、无需对齐的协作特征路由问题。 Guided by this new formulation, our architecture explicitly decouples the highly entangled reconstruction task.我们不是费力地扭曲相邻帧，而是将场景锚定在连续的中等曝光主干上，并利用协作注意力从未对齐的曝光中动态采集和注入可靠的辐照度线索。 Furthermore, we introduce a learned global sequence solver.通过利用双向上下文和远程时间建模，它可以在整个序列中传播校正信号和结构特征，从本质上增强整个视频的一致性并消除抖动。大量实验表明，LoCAtion 实现了最先进的视觉质量和时间稳定性，在准确性和计算效率之间提供了极具竞争力的平衡。

</details>

---

## 15. On the Nature of Attention Sink that Shapes Decoding Strategy in MLLMs / 论在MLLM中形成解码策略的注意力汇的性质

**Date**: 2026-03-15 | **arXiv**: [2603.14337v1](http://arxiv.org/abs/2603.14337v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14337v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Large language models and their multimodal extensions have achieved remarkable success across diverse tasks, yet the internal mechanisms that govern their reasoning behaviour remain partially understood. In particular, the attention sink, a token that attracts disproportionate attention mass, has been observed in transformer architectures, but its role is still unclear. Our goal is to understand what attention sinks represent and how they shape model behaviour during inference, rather than considering them as incidental artifacts. Through our analysis, we find that attention sink representations encode structured global information that influences the decoding process. Building on our findings, we introduce OutRo, a lightweight inference-time strategy that leverages the sink token to enhance contextual representations: (i) non-sink token representations are aligned with the sink representation in the feature space; and (ii) the sink token is allowed to attend beyond the causal constraint, facilitating information exchange with non-sink tokens. This design enhances the reasoning process without requiring additional forward passes or access to attention maps. Based on extensive experiments, OutRo consistently improves performance across representative MLLMs on seven video QA benchmarks and demonstrates strong generalisation, while incurring only a 1.1x decoding overhead.

Large language models and their multimodal extensions have achieved remarkable success across diverse tasks, yet the internal mechanisms that govern their reasoning behaviour remain partially understood. In particular, the attention sink, a token that attracts disproportionate attention mass, has been observed in transformer architectures, but its role is still unclear. Our goal is to understand what attention sinks represent and how they shape model behaviour during inference, rather than considering them as incidental artifacts.通过我们的分析，我们发现注意力池表示编码影响解码过程的结构化全局信息。 Building on our findings, we introduce OutRo, a lightweight inference-time strategy that leverages the sink token to enhance contextual representations: (i) non-sink token representations are aligned with the sink representation in the feature space; (ii) 允许汇通证参与超出因果约束，从而促进与非汇通证的信息交换。这种设计增强了推理过程，无需额外的前向传递或访问注意力图。 Based on extensive experiments, OutRo consistently improves performance across representative MLLMs on seven video QA benchmarks and demonstrates strong generalisation, while incurring only a 1.1x decoding overhead.

</details>

---

## 16. Early Failure Detection and Intervention in Video Diffusion Models / 视频扩散模型中的早期故障检测和干预

**Date**: 2026-03-15 | **arXiv**: [2603.14320v1](http://arxiv.org/abs/2603.14320v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14320v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Text-to-video (T2V) diffusion models have rapidly advanced, yet generations still occasionally fail in practice, such as low text-video alignment or low perceptual quality. Since diffusion sampling is non-deterministic, it is difficult to know during inference whether a generation will succeed or fail, incurring high computational cost due to trial-and-error regeneration. To address this, we propose an early failure detection and diagnostic intervention pipeline for latent T2V diffusion models. For detection, we design a Real-time Inspection (RI) module that converts latents into intermediate video previews, enabling the use of established text-video alignment scorers for inspection in the RGB space. The RI module completes the conversion and inspection process in just 39.2ms. This is highly efficient considering that CogVideoX-5B requires 4.3s per denoising step when generating a 480p, 49-frame video on an NVIDIA A100 GPU. Subsequently, we trigger a hierarchical and early-exit intervention pipeline only when failure is predicted. Experiments on CogVideoX-5B and Wan2.1-1.3B demonstrate consistency gains on VBench with up to 2.64 times less time overhead compared to post-hoc regeneration. Our method also generalizes to a higher-capacity setting, remaining effective on Wan2.1-14B with 720p resolution and 81-frame generation. Furthermore, our pipeline is plug-and-play and orthogonal to existing techniques, showing seamless compatibility with prompt refinement and sampling guidance methods. We also provide evidence that failure signals emerge early in the denoising process and are detectable within intermediate video previews using standard vision-language evaluators.

Text-to-video (T2V) diffusion models have rapidly advanced, yet generations still occasionally fail in practice, such as low text-video alignment or low perceptual quality. Since diffusion sampling is non-deterministic, it is difficult to know during inference whether a generation will succeed or fail, incurring high computational cost due to trial-and-error regeneration.为了解决这个问题，我们提出了一种针对潜在 T2V 扩散模型的早期故障检测和诊断干预流程。 For detection, we design a Real-time Inspection (RI) module that converts latents into intermediate video previews, enabling the use of established text-video alignment scorers for inspection in the RGB space. RI模块仅用39.2ms就完成了转换和检查过程。 This is highly efficient considering that CogVideoX-5B requires 4.3s per denoising step when generating a 480p, 49-frame video on an NVIDIA A100 GPU.随后，仅当预测到故障时，我们才会触发分层且提前退出的干预流程。 Experiments on CogVideoX-5B and Wan2.1-1.3B demonstrate consistency gains on VBench with up to 2.64 times less time overhead compared to post-hoc regeneration.我们的方法还推广到更高容量的设置，在 720p 分辨率和 81 帧生成的 Wan2.1-14B 上仍然有效。 Furthermore, our pipeline is plug-and-play and orthogonal to existing techniques, showing seamless compatibility with prompt refinement and sampling guidance methods. We also provide evidence that failure signals emerge early in the denoising process and are detectable within intermediate video previews using standard vision-language evaluators.

</details>

---

## 17. Show Me When and Where: Towards Referring Video Object Segmentation in the Wild / 告诉我何时何地：在野外引用视频对象分割

**Date**: 2026-03-15 | **arXiv**: [2603.14300v1](http://arxiv.org/abs/2603.14300v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14300v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Referring video object segmentation (RVOS) has recently generated great popularity in computer vision due to its widespread applications. Existing RVOS setting contains elaborately trimmed videos, with text-referred objects always appearing in all frames, which however fail to fully reflect the realistic challenges of this task. This simplified setting requires RVOS methods to only predict where objects, with no need to show when the objects appear. In this work, we introduce a new setting towards in-the-wild RVOS. To this end, we collect a new benchmark dataset using Youtube Untrimmed videos for RVOS - YoURVOS, which contains 1,120 in-the-wild videos with 7 times more duration and scenes than existing datasets. Our new benchmark challenges RVOS methods to show not only where but also when objects appear in videos. To set a baseline, we propose Object-level Multimodal TransFormers (OMFormer) to tackle the challenges, which are characterized by encoding object-level multimodal interactions for efficient and global spatial-temporal localisation. We demonstrate that previous VOS methods struggle on our YoURVOS benchmark, especially with the increase of target-absent frames, while our OMFormer consistently performs well. Our YoURVOS dataset offers an imperative benchmark, which will push forward the advancement of RVOS methods for practical applications.

参考视频对象分割（RVOS）由于其广泛的应用，最近在计算机视觉领域广受欢迎。现有的 RVOS 设置包含精心修剪的视频，文本引用的对象始终出现在所有帧中，但这无法完全反映此任务的现实挑战。这种简化的设置要求 RVOS 方法仅预测对象的位置，而无需显示对象何时出现。在这项工作中，我们引入了野外 RVOS 的新设置。为此，我们使用 RVOS 的 Youtube Untrimmed 视频收集了一个新的基准数据集 - YoOURVOS，其中包含 1,120 个野外视频，其时长和场景是现有数据集的 7 倍。我们的新基准测试对 RVOS 方法提出了挑战，不仅要显示对象在视频中出现的位置，还要显示对象何时出现。为了设定基线，我们提出了对象级多模态 TransFormer（OMFormer）来应对挑战，其特点是编码对象级多模态交互以实现高效的全局时空定位。我们证明，以前的 VOS 方法在 YoOURVOS 基准测试中表现不佳，尤其是随着目标缺失帧的增加，而我们的 OMFormer 始终表现良好。我们的 YouRVOS 数据集提供了一个必要的基准，它将推动 RVOS 方法在实际应用中的进步。

</details>

---

## 18. Seeking Physics in Diffusion Noise / 在扩散噪声中寻求物理学

**Date**: 2026-03-15 | **arXiv**: [2603.14294v1](http://arxiv.org/abs/2603.14294v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14294v1)

**Categories**: cs.CV, cs.AI, cs.LG, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Do video diffusion models encode signals predictive of physical plausibility? We probe intermediate denoising representations of a pretrained Diffusion Transformer (DiT) and find that physically plausible and implausible videos are partially separable in mid-layer feature space across noise levels. This separability cannot be fully attributed to visual quality or generator identity, suggesting recoverable physics-related cues in frozen DiT features. Leveraging this observation, we introduce progressive trajectory selection, an inference-time strategy that scores parallel denoising trajectories at a few intermediate checkpoints using a lightweight physics verifier trained on frozen features, and prunes low-scoring candidates early. Extensive experiments on PhyGenBench demonstrate that our method improves physical consistency while reducing inference cost, achieving comparable results to Best-of-K sampling with substantially fewer denoising steps.

视频扩散模型是否对预测物理合理性的信号进行编码？我们探索了预训练扩散变压器（DiT）的中间去噪表示，发现物理上合理的和不合理的视频在中间层特征空间中跨噪声水平是部分可分离的。这种可分离性不能完全归因于视觉质量或生成器身份，这表明冻结 DiT 特征中存在可恢复的物理相关线索。利用这一观察结果，我们引入了渐进式轨迹选择，这是一种推理时间策略，使用在冻结特征上训练的轻量级物理验证器在几个中间检查点对并行去噪轨迹进行评分，并尽早修剪低分候选者。 PhyGenBench 上的大量实验表明，我们的方法提高了物理一致性，同时降低了推理成本，以更少的去噪步骤实现了与 Best-of-K 采样相当的结果。

</details>

---

## 19. CamLit: Unified Video Diffusion with Explicit Camera and Lighting Control / CamLit：具有显式摄像机和照明控制的统一视频漫射

**Date**: 2026-03-15 | **arXiv**: [2603.14241v1](http://arxiv.org/abs/2603.14241v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14241v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We present CamLit, the first unified video diffusion model that jointly performs novel view synthesis (NVS) and relighting from a single input image. Given one reference image, a user-defined camera trajectory, and an environment map, CamLit synthesizes a video of the scene from new viewpoints under the specified illumination. Within a single generative process, our model produces temporally coherent and spatially aligned outputs, including relit novel-view frames and corresponding albedo frames, enabling high-quality control of both camera pose and lighting. Qualitative and quantitative experiments demonstrate that CamLit achieves high-fidelity outputs on par with state-of-the-art methods in both novel view synthesis and relighting, without sacrificing visual quality in either task. We show that a single generative model can effectively integrate camera and lighting control, simplifying the video generation pipeline while maintaining competitive performance and consistent realism.

我们提出了 CamLit，这是第一个统一的视频扩散模型，它联合执行新颖的视图合成（NVS）和从单个输入图像重新照明。给定一个参考图像、一个用户定义的相机轨迹和一个环境图，CamLit 会在指定的照明下从新的视点合成场景的视频。在单个生成过程中，我们的模型产生时间连贯和空间对齐的输出，包括重新照明的新颖视图帧和相应的反照率帧，从而实现对相机姿势和照明的高质量控制。定性和定量实验表明，CamLit 在新颖的视图合成和重新照明方面都实现了与最先进的方法相当的高保真输出，并且在这两项任务中都没有牺牲视觉质量。我们证明，单个生成模型可以有效地集成相机和照明控制，简化视频生成流程，同时保持具有竞争力的性能和一致的真实感。

</details>

---

## 20. MotionCFG: Boosting Motion Dynamics via Stochastic Concept Perturbation / MotionCFG：通过随机概念扰动增强运动动力学

**Date**: 2026-03-14 | **arXiv**: [2603.14073v1](http://arxiv.org/abs/2603.14073v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.14073v1)

**Categories**: cs.CV, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Despite recent advances in Text-to-Video (T2V) synthesis, generating high-fidelity and dynamic motion remains a significant challenge. Existing methods primarily rely on Classifier-Free Guidance (CFG), often with explicit negative prompts (e.g. "static", "blurry"), to suppress undesired artifacts. However, such explicit negations frequently introduce unintended semantic bias and distort object integrity; a phenomenon we define as Content-Motion Drift. To address this, we propose MotionCFG, a framework that enhances motion dynamics by contrasting a target concept with its noise-perturbed counterparts. Specifically, by injecting Gaussian noise into the concept embeddings, MotionCFG creates localized negative anchors that encapsulate a broad complementary space of sub-optimal motion variations. Unlike explicit negations, this approach facilitates implicit hard negative mining without shifting the global semantic identity, allowing for a focused refinement of temporal details. Combined with a piecewise guidance schedule that confines intervention to the early denoising steps, MotionCFG consistently improves motion dynamics across state-of-the-art T2V frameworks with negligible computational overhead and minimal compromise in visual quality. Additionally, we demonstrate that this noise-induced contrastive mechanism is effective not only for sharpening motion trajectories but also for steering complex, non-linear concepts such as precise object numerosity, which are typically difficult to modulate via standard text-based guidance.

尽管文本到视频 (T2V) 合成最近取得了进展，但生成高保真动态运动仍然是一个重大挑战。现有方法主要依赖于无分类器指导（CFG），通常带有明确的负面提示（例如“静态”、“模糊”），以抑制不需要的伪影。然而，这种明确的否定经常会引入意想不到的语义偏差并扭曲对象的完整性；我们将这种现象定义为“内容-运动漂移”。为了解决这个问题，我们提出了 MotionCFG，这是一个通过将目标概念与其受噪声扰动的对应概念进行对比来增强运动动力学的框架。具体来说，通过将高斯噪声注入概念嵌入，MotionCFG 创建了局部负锚，封装了次优运动变化的广泛互补空间。与显式否定不同，这种方法有利于隐式硬否定挖掘，而无需改变全局语义身份，从而可以集中细化时间细节。结合将干预限制在早期去噪步骤的分段指导计划，MotionCFG 能够持续改善最先进的 T2V 框架的运动动态，同时计算开销可以忽略不计，视觉质量的影响也最小。此外，我们证明这种噪声引起的对比机制不仅对于锐化运动轨迹有效，而且对于引导复杂的非线性概念（例如精确的对象数量）也有效，这些概念通常很难通过标准的基于文本的指导进行调节。

</details>

---

## 21. EchoLVFM: One-Step Video Generation via Latent Flow Matching for Echocardiogram Synthesis / EchoLVFM：通过潜在血流匹配生成超声心动图合成的一步视频

**Date**: 2026-03-14 | **arXiv**: [2603.13967v1](http://arxiv.org/abs/2603.13967v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.13967v1)

**Categories**: eess.IV, cs.AI, cs.CV

**Code**: https://github.com/EngEmmanuel/EchoLVFM

<details><summary><b>Abstract / 摘要</b></summary>

Echocardiography is widely used for assessing cardiac function, where clinically meaningful parameters such as left-ventricular ejection fraction (EF) play a central role in diagnosis and management. Generative models capable of synthesising realistic echocardiogram videos with explicit control over such parameters are valuable for data augmentation, counterfactual analysis, and specialist training. However, existing approaches typically rely on computationally expensive multi-step sampling and aggressive temporal normalisation, limiting efficiency and applicability to heterogeneous real-world data.   We introduce EchoLVFM, a one-step latent video flow-matching framework for controllable echocardiogram generation. Operating in the latent space, EchoLVFM synthesises temporally coherent videos in a single inference step, achieving a $\mathbf{\sim 50\times}$ improvement in sampling efficiency compared to multi-step flow baselines while maintaining visual fidelity. The model supports global conditioning on clinical variables, demonstrated through precise control of EF, and enables reconstruction and counterfactual generation from partially observed sequences. A masked conditioning strategy further removes fixed-length constraints, allowing shorter sequences to be retained rather than discarded.   We evaluate EchoLVFM on the CAMUS dataset under challenging single-frame conditioning. Quantitative and qualitative results demonstrate competitive video quality, strong EF adherence, and 57.9% discrimination accuracy by expert clinicians which is close to chance. These findings indicate that efficient, one-step flow matching can enable practical, controllable echocardiogram video synthesis without sacrificing fidelity. Code available at: https://github.com/EngEmmanuel/EchoLVFM

超声心动图广泛用于评估心脏功能，其中左心室射血分数（EF）等具有临床意义的参数在诊断和治疗中发挥着核心作用。能够合成真实超声心动图视频并明确控制这些参数的生成模型对于数据增强、反事实分析和专业培训很有价值。然而，现有方法通常依赖于计算成本昂贵的多步采样和激进的时间归一化，限制了异构现实世界数据的效率和适用性。   我们推出了 EchoLVFM，这是一种用于可控超声心动图生成的一步式潜在视频流匹配框架。 EchoLVFM 在潜在空间中运行，在单个推理步骤中合成时间连贯的视频，与多步骤流基线相比，采样效率提高了 $\mathbf{\sim 50\times}$，同时保持了视觉保真度。该模型支持对临床变量的全局调节，通过精确控制 EF 得到证明，并能够根据部分观察的序列进行重建和反事实生成。掩蔽调节策略进一步消除了固定长度的限制，允许保留而不是丢弃较短的序列。   我们在具有挑战性的单帧调节下在 CAMUS 数据集上评估 EchoLVFM。定量和定性结果表明，具有竞争力的视频质量、强大的 EF 依从性以及专家临床医生的 57.9% 的辨别准确率（接近偶然）。这些发现表明，高效的一步式流量匹配可以在不牺牲保真度的情况下实现实用的、可控的超声心动图视频合成。代码位于：https://github.com/EngEmmanuel/EchoLVFM

</details>

---

## 22. Scene Generation at Absolute Scale: Utilizing Semantic and Geometric Guidance From Text for Accurate and Interpretable 3D Indoor Scene Generation / 绝对规模的场景生成：利用文本的语义和几何引导进行准确和可解释的3D室内场景生成

**Date**: 2026-03-14 | **arXiv**: [2603.13910v1](http://arxiv.org/abs/2603.13910v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.13910v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We present GuidedSceneGen, a text-to-3D generation framework that produces metrically accurate, globally consistent, and semantically interpretable indoor scenes. Unlike prior text-driven methods that often suffer from geometric drift or scale ambiguity, our approach maintains an absolute world coordinate frame throughout the entire generation process. Starting from a textual scene description, we predict a global 3D layout encoding both semantic and geometric structure, which serves as a guiding proxy for downstream stages. A semantics- and depth-conditioned panoramic diffusion model then synthesizes 360° imagery aligned with the global layout, substantially improving spatial coherence. To explore unobserved regions, we employ a video diffusion model guided by optimized camera trajectories that balances coverage and collision avoidance, achieving up to 10x faster sampling compared to exhaustive path exploration. The generated views are fused using 3D Gaussian Splatting, yielding a consistent and fully navigable 3D scene in absolute scale. GuidedSceneGen enables accurate transfer of object poses and semantic labels from layout to reconstruction, and supports progressive scene expansion without re-alignment. Quantitative results and a user study demonstrate greater 3D consistency and layout plausibility compared to recent panoramic text-to-3D baselines.

We present GuidedSceneGen, a text-to-3D generation framework that produces metrically accurate, globally consistent, and semantically interpretable indoor scenes. Unlike prior text-driven methods that often suffer from geometric drift or scale ambiguity, our approach maintains an absolute world coordinate frame throughout the entire generation process. Starting from a textual scene description, we predict a global 3D layout encoding both semantic and geometric structure, which serves as a guiding proxy for downstream stages. A semantics- and depth-conditioned panoramic diffusion model then synthesizes 360° imagery aligned with the global layout, substantially improving spatial coherence. To explore unobserved regions, we employ a video diffusion model guided by optimized camera trajectories that balances coverage and collision avoidance, achieving up to 10x faster sampling compared to exhaustive path exploration.生成的视图使用 3D 高斯分布进行融合，以绝对比例生成一致且完全可导航的 3D 场景。 GuidedSceneGen enables accurate transfer of object poses and semantic labels from layout to reconstruction, and supports progressive scene expansion without re-alignment. Quantitative results and a user study demonstrate greater 3D consistency and layout plausibility compared to recent panoramic text-to-3D baselines.

</details>

---



</details>

<details><summary><b>2026-03-16 (2 papers)</b></summary>

# arXiv Video Papers - 2026-03-16

**Paper Count**: 2

---

## 1. Reasoning over Video: Evaluating How MLLMs Extract, Integrate, and Reconstruct Spatiotemporal Evidence / 通过视频进行推理：评估 MLLM 如何提取、集成和重建时空证据

**Date**: 2026-03-13 | **arXiv**: [2603.13091v1](http://arxiv.org/abs/2603.13091v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.13091v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

The growing interest in embodied agents increases the demand for spatiotemporal video understanding, yet existing benchmarks largely emphasize extractive reasoning, where answers can be explicitly presented within spatiotemporal events. It remains unclear whether multimodal large language models can instead perform abstractive spatiotemporal reasoning, which requires integrating observations over time, combining dispersed cues, and inferring implicit spatial and contextual structure. To address this gap, we formalize abstractive spatiotemporal reasoning from videos by introducing a structured evaluation taxonomy that systematically targets its core dimensions and construct a controllable, scenario-driven synthetic egocentric video dataset tailored to evaluate abstractive spatiotemporal reasoning capabilities, spanning object-, room-, and floor-plan-level scenarios. Based on this framework, we present VAEX-BENCH, a benchmark comprising five abstractive reasoning tasks together with their extractive counterparts. Our extensive experiments compare the performance of state-of-the-art MLLMs under extractive and abstractive settings, exposing their limitations on abstractive tasks and providing a fine-grained analysis of the underlying bottlenecks. The dataset will be released soon.

对实体代理日益增长的兴趣增加了对时空视频理解的需求，但现有基准主要强调提取推理，其中答案可以在时空事件中明确呈现。目前尚不清楚多模态大语言模型是否可以执行抽象时空推理，这需要随着时间的推移整合观察结果，结合分散的线索，并推断隐含的空间和上下文结构。为了解决这一差距，我们通过引入结构化评估分类法来形式化视频的抽象时空推理，该分类系统系统地针对其核心维度，并构建一个可控的、场景驱动的合成自我中心视频数据集，专门用于评估抽象时空推理能力，涵盖对象、房间和平面图级别的场景。基于这个框架，我们提出了 VAEX-BENCH，这是一个包含五个抽象推理任务及其提取对应任务的基准测试。我们广泛的实验比较了提取和抽象设置下最先进的 MLLM 的性能，暴露了它们在抽象任务上的局限性，并提供了对潜在瓶颈的细粒度分析。该数据集即将发布。

</details>

---

## 2. SAW: Toward a Surgical Action World Model via Controllable and Scalable Video Generation / SAW：通过可控和可扩展的视频生成建立外科手术世界模型

**Date**: 2026-03-13 | **arXiv**: [2603.13024v1](http://arxiv.org/abs/2603.13024v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.13024v1)

**Categories**: cs.CV, cs.AI, cs.LG, eess.IV

<details><summary><b>Abstract / 摘要</b></summary>

A surgical world model capable of generating realistic surgical action videos with precise control over tool-tissue interactions can address fundamental challenges in surgical AI and simulation -- from data scarcity and rare event synthesis to bridging the sim-to-real gap for surgical automation. However, current video generation methods, the very core of such surgical world models, require expensive annotations or complex structured intermediates as conditioning signals at inference, limiting their scalability. Other approaches exhibit limited temporal consistency across complex laparoscopic scenes and do not possess sufficient realism. We propose Surgical Action World (SAW) -- a step toward surgical action world modeling through video diffusion conditioned on four lightweight signals: language prompts encoding tool-action context, a reference surgical scene, tissue affordance mask, and 2D tool-tip trajectories. We design a conditional video diffusion approach that reformulates video-to-video diffusion into trajectory-conditioned surgical action synthesis. The backbone diffusion model is fine-tuned on a custom-curated dataset of 12,044 laparoscopic clips with lightweight spatiotemporal conditioning signals, leveraging a depth consistency loss to enforce geometric plausibility without requiring depth at inference. SAW achieves state-of-the-art temporal consistency (CD-FVD: 199.19 vs. 546.82) and strong visual quality on held-out test data. Furthermore, we demonstrate its downstream utility for (a) surgical AI, where augmenting rare actions with SAW-generated videos improves action recognition (clipping F1-score: 20.93% to 43.14%; cutting: 0.00% to 8.33%) on real test data, and (b) surgical simulation, where rendering tool-tissue interaction videos from simulator-derived trajectory points toward a visually faithful simulation engine.

能够生成逼真的手术动作视频并精确控制工具与组织相互作用的手术世界模型可以解决手术人工智能和模拟中的基本挑战——从数据稀缺和罕见事件合成到缩小手术自动化的模拟与真实差距。然而，当前的视频生成方法（此类手术世界模型的核心）需要昂贵的注释或复杂的结构化中间体作为推理时的条件信号，限制了其可扩展性。其他方法在复杂的腹腔镜场景中表现出有限的时间一致性，并且不具备足够的真实性。我们提出手术动作世界（SAW）——通过以四个轻量级信号为条件的视频扩散实现手术动作世界建模的一步：语言提示编码工具动作上下文、参考手术场景、组织可供性掩模和 2D 工具提示轨迹。我们设计了一种条件视频扩散方法，将视频到视频的扩散重新表述为轨迹条件手术动作合成。主干扩散模型在包含 12,044 个腹腔镜剪辑的定制数据集上进行微调，具有轻量级时空条件信号，利用深度一致性损失来增强几何合理性，而无需推理深度。 SAW 在保留的测试数据上实现了最先进的时间一致性（CD-FVD：199.19 与 546.82）和强大的视觉质量。此外，我们还展示了其在以下方面的下游实用性：(a) 手术人工智能，其中使用 SAW 生成的视频增强罕见动作，从而提高了对真实测试数据的动作识别（剪切 F1 分数：20.93% 至 43.14%；剪切：0.00% 至 8.33%）；以及 (b) 手术模拟，其中从模拟器导出的轨迹渲染工具与组织交互视频，指向视觉上忠实的模拟引擎。

</details>

---



</details>

<details><summary><b>2026-03-13 (18 papers)</b></summary>

# arXiv Video Papers - 2026-03-13

**Paper Count**: 18

---

## 1. EVATok: Adaptive Length Video Tokenization for Efficient Visual Autoregressive Generation / EVATok：用于高效视觉自回归生成的自适应长度视频标记化

**Date**: 2026-03-12 | **arXiv**: [2603.12267v1](http://arxiv.org/abs/2603.12267v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.12267v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Autoregressive (AR) video generative models rely on video tokenizers that compress pixels into discrete token sequences. The length of these token sequences is crucial for balancing reconstruction quality against downstream generation computational cost. Traditional video tokenizers apply a uniform token assignment across temporal blocks of different videos, often wasting tokens on simple, static, or repetitive segments while underserving dynamic or complex ones. To address this inefficiency, we introduce $\textbf{EVATok}$, a framework to produce $\textbf{E}$fficient $\textbf{V}$ideo $\textbf{A}$daptive $\textbf{Tok}$enizers. Our framework estimates optimal token assignments for each video to achieve the best quality-cost trade-off, develops lightweight routers for fast prediction of these optimal assignments, and trains adaptive tokenizers that encode videos based on the assignments predicted by routers. We demonstrate that EVATok delivers substantial improvements in efficiency and overall quality for video reconstruction and downstream AR generation. Enhanced by our advanced training recipe that integrates video semantic encoders, EVATok achieves superior reconstruction and state-of-the-art class-to-video generation on UCF-101, with at least 24.4% savings in average token usage compared to the prior state-of-the-art LARP and our fixed-length baseline.

自回归 (AR) 视频生成模型依赖于将像素压缩为离散标记序列的视频标记器。这些令牌序列的长度对于平衡重建质量与下游生成计算成本至关重要。传统的视频标记器在不同视频的时间块上应用统一的标记分配，通常在简单、静态或重复的片段上浪费标记，而对动态或复杂的片段提供服务不足。为了解决这种低效率问题，我们引入了 $\textbf{EVATok}$，一个用于生成 $\textbf{E}$fficient $\textbf{V}$ideo $\textbf{A}$daptive $\textbf{Tok}$enizers 的框架。我们的框架估计每个视频的最佳标记分配，以实现最佳的质量成本权衡，开发轻量级路由器以快速预测这些最佳分配，并训练自适应标记器，根据路由器预测的分配对视频进行编码。我们证明，EVATok 显着提高了视频重建和下游 AR 生成的效率和整体质量。通过我们集成视频语义编码器的高级训练方法的增强，EVATok 在 UCF-101 上实现了卓越的重建和最先进的类到视频生成，与之前最先进的 LARP 和我们的固定长度基线相比，平均令牌使用量节省了至少 24.4%。

</details>

---

## 2. Video Streaming Thinking: VideoLLMs Can Watch and Think Simultaneously / 视频流思维：VideoLLM 可以同时观看和思考

**Date**: 2026-03-12 | **arXiv**: [2603.12262v1](http://arxiv.org/abs/2603.12262v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.12262v1)

**Categories**: cs.CV

**Code**: https://github.com/1ranGuan/VST.

<details><summary><b>Abstract / 摘要</b></summary>

Online Video Large Language Models (VideoLLMs) play a critical role in supporting responsive, real-time interaction. Existing methods focus on streaming perception, lacking a synchronized logical reasoning stream. However, directly applying test-time scaling methods incurs unacceptable response latency. To address this trade-off, we propose Video Streaming Thinking (VST), a novel paradigm for streaming video understanding. It supports a thinking while watching mechanism, which activates reasoning over incoming video clips during streaming. This design improves timely comprehension and coherent cognition while preserving real-time responsiveness by amortizing LLM reasoning latency over video playback. Furthermore, we introduce a comprehensive post-training pipeline that integrates VST-SFT, which structurally adapts the offline VideoLLM to causal streaming reasoning, and VST-RL, which provides end-to-end improvement through self-exploration in a multi-turn video interaction environment. Additionally, we devise an automated training-data synthesis pipeline that uses video knowledge graphs to generate high-quality streaming QA pairs, with an entity-relation grounded streaming Chain-of-Thought to enforce multi-evidence reasoning and sustained attention to the video stream. Extensive evaluations show that VST-7B performs strongly on online benchmarks, e.g. 79.5% on StreamingBench and 59.3% on OVO-Bench. Meanwhile, VST remains competitive on offline long-form or reasoning benchmarks. Compared with Video-R1, VST responds 15.7 times faster and achieves +5.4% improvement on VideoHolmes, demonstrating higher efficiency and strong generalization across diverse video understanding tasks. Code, data, and models will be released at https://github.com/1ranGuan/VST.

在线视频大语言模型 (VideoLLM) 在支持响应式实时交互方面发挥着关键作用。现有方法侧重于流感知，缺乏同步的逻辑推理流。然而，直接应用测试时间缩放方法会导致不可接受的响应延迟。为了解决这种权衡问题，我们提出了视频流思维（VST），这是一种流媒体视频理解的新颖范式。它支持边看边思考的机制，可以在流媒体播放期间激活对传入视频剪辑的推理。该设计提高了及时理解和连贯认知，同时通过分摊视频播放上的 LLM 推理延迟来保持实时响应能力。此外，我们引入了一个全面的后训练管道，它集成了 VST-SFT（在结构上使离线 VideoLLM 适应因果流推理）和 VST-RL（通过多轮视频交互环境中的自我探索提供端到端的改进）。此外，我们设计了一个自动训练数据合成管道，它使用视频知识图来生成高质量的流式问答对，并使用基于实体关系的流式思想链来强制执行多证据推理和对视频流的持续关注。广泛的评估表明，VST-7B 在在线基准测试中表现强劲，例如StreamingBench 上为 79.5%，OVO-Bench 上为 59.3%。与此同时，VST 在离线长篇或推理基准测试中仍然具有竞争力。与 Video-R1 相比，VST 的响应速度提高了 15.7 倍，VideoHolmes 的性能提高了 5.4%，在不同的视频理解任务中表现出更高的效率和更强的泛化能力。代码、数据和模型将在 https://github.com/1ranGuan/VST 发布。

</details>

---

## 3. DreamVideo-Omni: Omni-Motion Controlled Multi-Subject Video Customization with Latent Identity Reinforcement Learning / DreamVideo-Omni：具有潜在身份强化学习的全运动控制多主题视频定制

**Date**: 2026-03-12 | **arXiv**: [2603.12257v1](http://arxiv.org/abs/2603.12257v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.12257v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

While large-scale diffusion models have revolutionized video synthesis, achieving precise control over both multi-subject identity and multi-granularity motion remains a significant challenge. Recent attempts to bridge this gap often suffer from limited motion granularity, control ambiguity, and identity degradation, leading to suboptimal performance on identity preservation and motion control. In this work, we present DreamVideo-Omni, a unified framework enabling harmonious multi-subject customization with omni-motion control via a progressive two-stage training paradigm. In the first stage, we integrate comprehensive control signals for joint training, encompassing subject appearances, global motion, local dynamics, and camera movements. To ensure robust and precise controllability, we introduce a condition-aware 3D rotary positional embedding to coordinate heterogeneous inputs and a hierarchical motion injection strategy to enhance global motion guidance. Furthermore, to resolve multi-subject ambiguity, we introduce group and role embeddings to explicitly anchor motion signals to specific identities, effectively disentangling complex scenes into independent controllable instances. In the second stage, to mitigate identity degradation, we design a latent identity reward feedback learning paradigm by training a latent identity reward model upon a pretrained video diffusion backbone. This provides motion-aware identity rewards in the latent space, prioritizing identity preservation aligned with human preferences. Supported by our curated large-scale dataset and the comprehensive DreamOmni Bench for multi-subject and omni-motion control evaluation, DreamVideo-Omni demonstrates superior performance in generating high-quality videos with precise controllability.

虽然大规模扩散模型彻底改变了视频合成，但实现对多主体身份和多粒度运动的精确控制仍然是一个重大挑战。最近弥补这一差距的尝试常常受到运动粒度有限、控制模糊性和身份退化的困扰，导致身份保存和运动控制方面的性能不佳。在这项工作中，我们提出了 DreamVideo-Omni，这是一个统一的框架，通过渐进的两阶段训练范例实现和谐的多主题定制和全运动控制。在第一阶段，我们集成用于联合训练的综合控制信号，包括主体外观、全局运动、局部动态和相机运动。为了确保稳健和精确的可控性，我们引入了条件感知 3D 旋转位置嵌入来协调异构输入，并引入分层运动注入策略来增强全局运动指导。此外，为了解决多主体模糊性，我们引入组和角色嵌入来将运动信号明确锚定到特定身份，有效地将复杂场景分解为独立的可控实例。在第二阶段，为了减轻身份退化，我们通过在预训练的视频扩散主干上训练潜在身份奖励模型来设计潜在身份奖励反馈学习范式。这在潜在空间中提供了运动感知的身份奖励，优先考虑与人类偏好一致的身份保存。在我们精心策划的大规模数据集和用于多主体和全运动控制评估的综合性 DreamOmni Bench 的支持下，DreamVideo-Omni 在生成具有精确可控性的高质量视频方面表现出了卓越的性能。

</details>

---

## 4. Attend Before Attention: Efficient and Scalable Video Understanding via Autoregressive Gazing / 先关注后关注：通过自回归凝视实现高效且可扩展的视频理解

**Date**: 2026-03-12 | **arXiv**: [2603.12254v1](http://arxiv.org/abs/2603.12254v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.12254v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Multi-modal large language models (MLLMs) have advanced general-purpose video understanding but struggle with long, high-resolution videos -- they process every pixel equally in their vision transformers (ViTs) or LLMs despite significant spatiotemporal redundancy. We introduce AutoGaze, a lightweight module that removes redundant patches before processed by a ViT or an MLLM. Trained with next-token prediction and reinforcement learning, AutoGaze autoregressively selects a minimal set of multi-scale patches that can reconstruct the video within a user-specified error threshold, eliminating redundancy while preserving information. Empirically, AutoGaze reduces visual tokens by 4x-100x and accelerates ViTs and MLLMs by up to 19x, enabling scaling MLLMs to 1K-frame 4K-resolution videos and achieving superior results on video benchmarks (e.g., 67.0% on VideoMME). Furthermore, we introduce HLVid: the first high-resolution, long-form video QA benchmark with 5-minute 4K-resolution videos, where an MLLM scaled with AutoGaze improves over the baseline by 10.1% and outperforms the previous best MLLM by 4.5%. Project page: https://autogaze.github.io/.

多模态大语言模型 (MLLM) 具有先进的通用视频理解能力，但难以处理长的高分辨率视频 - 尽管存在显着的时空冗余，但它们在视觉转换器 (ViT) 或 LLM 中平等地处理每个像素。我们引入了 AutoGaze，这是一个轻量级模块，可以在 ViT 或 MLLM 处理之前删除冗余补丁。经过下一个标记预测和强化学习的训练，AutoGaze 自回归选择一组最小的多尺度补丁，可以在用户指定的错误阈值内重建视频，从而在保留信息的同时消除冗余。根据经验，AutoGaze 将视觉标记减少了 4 倍至 100 倍，并将 ViT 和 MLLM 加速高达 19 倍，从而能够将 MLLM 扩展到 1K 帧 4K 分辨率视频，并在视频基准测试中取得优异的结果（例如，在 VideoMME 上为 67.0%）。此外，我们还推出了 HLVid：第一个高分辨率、长格式视频 QA 基准测试，包含 5 分钟 4K 分辨率视频，其中使用 AutoGaze 缩放的 MLLM 比基线提高了 10.1%，比之前最好的 MLLM 提高了 4.5%。项目页面：https://autogaze.github.io/。

</details>

---

## 5. DVD: Deterministic Video Depth Estimation with Generative Priors / DVD：使用生成先验的确定性视频深度估计

**Date**: 2026-03-12 | **arXiv**: [2603.12250v1](http://arxiv.org/abs/2603.12250v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.12250v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Existing video depth estimation faces a fundamental trade-off: generative models suffer from stochastic geometric hallucinations and scale drift, while discriminative models demand massive labeled datasets to resolve semantic ambiguities. To break this impasse, we present DVD, the first framework to deterministically adapt pre-trained video diffusion models into single-pass depth regressors. Specifically, DVD features three core designs: (i) repurposing the diffusion timestep as a structural anchor to balance global stability with high-frequency details; (ii) latent manifold rectification (LMR) to mitigate regression-induced over-smoothing, enforcing differential constraints to restore sharp boundaries and coherent motion; and (iii) global affine coherence, an inherent property bounding inter-window divergence, which enables seamless long-video inference without requiring complex temporal alignment. Extensive experiments demonstrate that DVD achieves state-of-the-art zero-shot performance across benchmarks. Furthermore, DVD successfully unlocks the profound geometric priors implicit in video foundation models using 163x less task-specific data than leading baselines. Notably, we fully release our pipeline, providing the whole training suite for SOTA video depth estimation to benefit the open-source community.

现有的视频深度估计面临着一个基本的权衡：生成模型遭受随机几何幻觉和尺度漂移的影响，而判别模型需要大量标记数据集来解决语义歧义。为了打破这一僵局，我们提出了 DVD，这是第一个将预先训练的视频扩散模型确定性地适应单通道深度回归器的框架。具体来说，DVD 具有三个核心设计：（i）重新利用扩散时间步长作为结构锚，以平衡全局稳定性与高频细节； (ii) 潜在流形校正（LMR），以减轻回归引起的过度平滑，强制微分约束以恢复清晰的边界和相干运动； (iii) 全局仿射一致性，这是一种限制窗口间发散的固有属性，可以实现无缝的长视频推理，而不需要复杂的时间对齐。大量实验表明 DVD 在基准测试中实现了最先进的零样本性能。此外，DVD 成功地解锁了视频基础模型中隐含的深刻几何先验，使用的特定任务数据比领先基线少 163 倍。值得注意的是，我们完全发布了我们的管道，为 SOTA 视频深度估计提供了整个培训套件，以使开源社区受益。

</details>

---

## 6. BehaviorVLM: Unified Finetuning-Free Behavioral Understanding with Vision-Language Reasoning / BehaviourVLM：具有视觉语言推理的统一免微调行为理解

**Date**: 2026-03-12 | **arXiv**: [2603.12176v1](http://arxiv.org/abs/2603.12176v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.12176v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Understanding freely moving animal behavior is central to neuroscience, where pose estimation and behavioral understanding form the foundation for linking neural activity to natural actions. Yet both tasks still depend heavily on human annotation or unstable unsupervised pipelines, limiting scalability and reproducibility. We present BehaviorVLM, a unified vision-language framework for pose estimation and behavioral understanding that requires no task-specific finetuning and minimal human labeling by guiding pretrained Vision-Language Models (VLMs) through detailed, explicit, and verifiable reasoning steps. For pose estimation, we leverage quantum-dot-grounded behavioral data and propose a multi-stage pipeline that integrates temporal, spatial, and cross-view reasoning. This design greatly reduces human annotation effort, exposes low-confidence labels through geometric checks such as reprojection error, and produces labels that can later be filtered, corrected, or used to fine-tune downstream pose models. For behavioral understanding, we propose a pipeline that integrates deep embedded clustering for over-segmented behavior discovery, VLM-based per-clip video captioning, and LLM-based reasoning to merge and semantically label behavioral segments. The behavioral pipeline can operate directly from visual information and does not require keypoints to segment behavior. Together, these components enable scalable, interpretable, and label-light analysis of multi-animal behavior.

了解自由移动的动物行为是神经科学的核心，姿势估计和行为理解构成了将神经活动与自然行为联系起来的基础。然而，这两项任务仍然严重依赖人工注释或不稳定的无监督管道，限制了可扩展性和可重复性。我们提出了BehaviorVLM，这是一个用于姿势估计和行为理解的统一视觉语言框架，通过详细、明确和可验证的推理步骤指导预训练的视觉语言模型（VLM），不需要特定于任务的微调和最少的人工标记。对于姿势估计，我们利用基于量子点的行为数据，并提出了一个集成时间、空间和跨视图推理的多级管道。这种设计大大减少了人工注释工作，通过重投影误差等几何检查暴露低置信度标签，并生成稍后可以过滤、纠正或用于微调下游姿势模型的标签。为了行为理解，我们提出了一个管道，集成了用于过度分段行为发现的深度嵌入式集群、基于 VLM 的每个剪辑视频字幕以及基于 LLM 的推理来合并和语义标记行为分段。行为管道可以直接根据视觉信息进行操作，不需要关键点来分割行为。这些组件共同实现了对多动物行为的可扩展、可解释和轻标签分析。

</details>

---

## 7. FlashMotion: Few-Step Controllable Video Generation with Trajectory Guidance / FlashMotion：具有轨迹引导的少步可控视频生成

**Date**: 2026-03-12 | **arXiv**: [2603.12146v1](http://arxiv.org/abs/2603.12146v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.12146v1)

**Categories**: cs.CV, cs.AI, cs.LG, cs.MM

<details><summary><b>Abstract / 摘要</b></summary>

Recent advances in trajectory-controllable video generation have achieved remarkable progress. Previous methods mainly use adapter-based architectures for precise motion control along predefined trajectories. However, all these methods rely on a multi-step denoising process, leading to substantial time redundancy and computational overhead. While existing video distillation methods successfully distill multi-step generators into few-step, directly applying these approaches to trajectory-controllable video generation results in noticeable degradation in both video quality and trajectory accuracy. To bridge this gap, we introduce FlashMotion, a novel training framework designed for few-step trajectory-controllable video generation. We first train a trajectory adapter on a multi-step video generator for precise trajectory control. Then, we distill the generator into a few-step version to accelerate video generation. Finally, we finetune the adapter using a hybrid strategy that combines diffusion and adversarial objectives, aligning it with the few-step generator to produce high-quality, trajectory-accurate videos. For evaluation, we introduce FlashBench, a benchmark for long-sequence trajectory-controllable video generation that measures both video quality and trajectory accuracy across varying numbers of foreground objects. Experiments on two adapter architectures show that FlashMotion surpasses existing video distillation methods and previous multi-step models in both visual quality and trajectory consistency.

轨迹可控视频生成的最新进展取得了显着的进展。以前的方法主要使用基于适配器的架构沿着预定义的轨迹进行精确的运动控制。然而，所有这些方法都依赖于多步骤去噪过程，导致大量的时间冗余和计算开销。虽然现有的视频蒸馏方法成功地将多步生成器蒸馏为少步，但直接将这些方法应用于轨迹可控视频生成会导致视频质量和轨迹精度显着下降。为了弥补这一差距，我们引入了 FlashMotion，这是一种专为少步轨迹可控视频生成而设计的新型训练框架。我们首先在多步视频生成器上训练轨迹适配器，以实现精确的轨迹控制。然后，我们将生成器提炼成几个步骤的版本以加速视频生成。最后，我们使用结合扩散和对抗目标的混合策略对适配器进行微调，将其与少步生成器对齐，以生成高质量、轨迹准确的视频。为了进行评估，我们引入了 FlashBench，它是长序列轨迹可控视频生成的基准，可测量不同数量前景对象的视频质量和轨迹精度。对两种适配器架构的实验表明，FlashMotion 在视觉质量和轨迹一致性方面都超越了现有的视频蒸馏方法和之前的多步模型。

</details>

---

## 8. Dense Dynamic Scene Reconstruction and Camera Pose Estimation from Multi-View Videos / 多视图视频的密集动态场景重建和相机姿态估计

**Date**: 2026-03-12 | **arXiv**: [2603.12064v1](http://arxiv.org/abs/2603.12064v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.12064v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We address the challenging problem of dense dynamic scene reconstruction and camera pose estimation from multiple freely moving cameras -- a setting that arises naturally when multiple observers capture a shared event. Prior approaches either handle only single-camera input or require rigidly mounted, pre-calibrated camera rigs, limiting their practical applicability. We propose a two-stage optimization framework that decouples the task into robust camera tracking and dense depth refinement. In the first stage, we extend single-camera visual SLAM to the multi-camera setting by constructing a spatiotemporal connection graph that exploits both intra-camera temporal continuity and inter-camera spatial overlap, enabling consistent scale and robust tracking. To ensure robustness under limited overlap, we introduce a wide-baseline initialization strategy using feed-forward reconstruction models. In the second stage, we refine depth and camera poses by optimizing dense inter- and intra-camera consistency using wide-baseline optical flow. Additionally, we introduce MultiCamRobolab, a new real-world dataset with ground-truth poses from a motion capture system. Finally, we demonstrate that our method significantly outperforms state-of-the-art feed-forward models on both synthetic and real-world benchmarks, while requiring less memory.

我们解决了密集动态场景重建和来自多个自由移动摄像机的摄像机姿态估计的挑战性问题——当多个观察者捕获共享事件时自然出现的设置。先前的方法要么仅处理单相机输入，要么需要刚性安装、预先校准的相机装备，从而限制了它们的实际适用性。我们提出了一个两阶段优化框架，将任务分解为强大的相机跟踪和密集深度细化。在第一阶段，我们通过构建时空连接图将单摄像头视觉 SLAM 扩展到多摄像头设置，该时空连接图利用摄像头内时间连续性和摄像头间空间重叠，从而实现一致的尺度和鲁棒的跟踪。为了确保有限重叠下的鲁棒性，我们引入了使用前馈重建模型的宽基线初始化策略。在第二阶段，我们通过使用宽基线光流优化密集的相机间和相机内一致性来细化深度和相机姿势。此外，我们还引入了 MultiCamRobolab，这是一个新的现实世界数据集，包含来自运动捕捉系统的地面真实姿势。最后，我们证明我们的方法在合成和现实世界基准上都显着优于最先进的前馈模型，同时需要更少的内存。

</details>

---

## 9. Coarse-Guided Visual Generation via Weighted h-Transform Sampling / 通过加权 h 变换采样进行粗引导视觉生成

**Date**: 2026-03-12 | **arXiv**: [2603.12057v1](http://arxiv.org/abs/2603.12057v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.12057v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Coarse-guided visual generation, which synthesizes fine visual samples from degraded or low-fidelity coarse references, is essential for various real-world applications. While training-based approaches are effective, they are inherently limited by high training costs and restricted generalization due to paired data collection. Accordingly, recent training-free works propose to leverage pretrained diffusion models and incorporate guidance during the sampling process. However, these training-free methods either require knowing the forward (fine-to-coarse) transformation operator, e.g., bicubic downsampling, or are difficult to balance between guidance and synthetic quality. To address these challenges, we propose a novel guided method by using the h-transform, a tool that can constrain stochastic processes (e.g., sampling process) under desired conditions. Specifically, we modify the transition probability at each sampling timestep by adding to the original differential equation with a drift function, which approximately steers the generation toward the ideal fine sample. To address unavoidable approximation errors, we introduce a noise-level-aware schedule that gradually de-weights the term as the error increases, ensuring both guidance adherence and high-quality synthesis. Extensive experiments across diverse image and video generation tasks demonstrate the effectiveness and generalization of our method.

粗略引导的视觉生成可从降级或低保真度的粗略参考中合成精细的视觉样本，对于各种现实世界的应用至关重要。虽然基于训练的方法是有效的，但它们本质上受到高训练成本和由于配对数据收集而限制泛化的限制。因此，最近的免训练工作建议利用预训练的扩散模型并在采样过程中纳入指导。然而，这些免训练方法要么需要了解前向（精细到粗略）变换算子，例如双三次下采样，要么难以在指导和合成质量之间取得平衡。为了应对这些挑战，我们提出了一种使用 h 变换的新颖引导方法，h 变换是一种可以在所需条件下约束随机过程（例如采样过程）的工具。具体来说，我们通过在原始微分方程中添加漂移函数来修改每个采样时间步长的转移概率，这近似引导生成朝着理想的精细样本前进。为了解决不可避免的近似误差，我们引入了一种噪声水平感知计划，随着误差的增加逐渐减轻该项的权重，从而确保指导的遵守和高质量的合成。跨不同图像和视频生成任务的广泛实验证明了我们方法的有效性和泛化性。

</details>

---

## 10. HomeSafe-Bench: Evaluating Vision-Language Models on Unsafe Action Detection for Embodied Agents in Household Scenarios / HomeSafe-Bench：评估家庭场景中实体代理不安全动作检测的视觉语言模型

**Date**: 2026-03-12 | **arXiv**: [2603.11975v1](http://arxiv.org/abs/2603.11975v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.11975v1)

**Categories**: cs.CV, cs.AI, cs.CR

<details><summary><b>Abstract / 摘要</b></summary>

The rapid evolution of embodied agents has accelerated the deployment of household robots in real-world environments. However, unlike structured industrial settings, household spaces introduce unpredictable safety risks, where system limitations such as perception latency and lack of common sense knowledge can lead to dangerous errors. Current safety evaluations, often restricted to static images, text, or general hazards, fail to adequately benchmark dynamic unsafe action detection in these specific contexts. To bridge this gap, we introduce \textbf{HomeSafe-Bench}, a challenging benchmark designed to evaluate Vision-Language Models (VLMs) on unsafe action detection in household scenarios. HomeSafe-Bench is contrusted via a hybrid pipeline combining physical simulation with advanced video generation and features 438 diverse cases across six functional areas with fine-grained multidimensional annotations. Beyond benchmarking, we propose \textbf{Hierarchical Dual-Brain Guard for Household Safety (HD-Guard)}, a hierarchical streaming architecture for real-time safety monitoring. HD-Guard coordinates a lightweight FastBrain for continuous high-frequency screening with an asynchronous large-scale SlowBrain for deep multimodal reasoning, effectively balancing inference efficiency with detection accuracy. Evaluations demonstrate that HD-Guard achieves a superior trade-off between latency and performance, while our analysis identifies critical bottlenecks in current VLM-based safety detection.

实体代理的快速发展加速了家用机器人在现实环境中的部署。然而，与结构化工业环境不同，家庭空间会带来不可预测的安全风险，其中感知延迟和缺乏常识知识等系统限制可能会导致危险的错误。当前的安全评估通常仅限于静态图像、文本或一般危险，无法充分对这些特定环境中的动态不安全行为检测进行基准测试。为了弥补这一差距，我们引入了 \textbf{HomeSafe-Bench}，这是一个具有挑战性的基准，旨在评估家庭场景中不安全动作检测的视觉语言模型（VLM）。 HomeSafe-Bench 通过将物理模拟与高级视频生成相结合的混合管道进行信任，并具有跨六个功能区域的 438 个不同案例以及细粒度的多维注释。除了基准测试之外，我们还提出了 \textbf{家庭安全分层双脑防护（HD-Guard）}，这是一种用于实时安全监控的分层流架构。 HD-Guard协调轻量级FastBrain进行连续高频筛查，与异步大规模SlowBrain进行深度多模态推理，有效平衡推理效率和检测精度。评估表明 HD-Guard 在延迟和性能之间实现了出色的权衡，而我们的分析则确定了当前基于 VLM 的安全检测中的关键瓶颈。

</details>

---

## 11. Think While Watching: Online Streaming Segment-Level Memory for Multi-Turn Video Reasoning in Multimodal Large Language Models / 边看边思考：多模态大语言模型中多轮视频推理的在线流式段级内存

**Date**: 2026-03-12 | **arXiv**: [2603.11896v1](http://arxiv.org/abs/2603.11896v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.11896v1)

**Categories**: cs.CV, cs.AI, cs.CL

**Code**: https://github.com/wl666hhh/Think_While_Watching/

<details><summary><b>Abstract / 摘要</b></summary>

Multimodal large language models (MLLMs) have shown strong performance on offline video understanding, but most are limited to offline inference or have weak online reasoning, making multi-turn interaction over continuously arriving video streams difficult. Existing streaming methods typically use an interleaved perception-generation paradigm, which prevents concurrent perception and generation and leads to early memory decay as streams grow, hurting long-range dependency modeling. We propose Think While Watching, a memory-anchored streaming video reasoning framework that preserves continuous segment-level memory during multi-turn interaction. We build a three-stage, multi-round chain-of-thought dataset and adopt a stage-matched training strategy, while enforcing strict causality through a segment-level streaming causal mask and streaming positional encoding. During inference, we introduce an efficient pipeline that overlaps watching and thinking and adaptively selects the best attention backend. Under both single-round and multi-round streaming input protocols, our method achieves strong results. Built on Qwen3-VL, it improves single-round accuracy by 2.6% on StreamingBench and by 3.79% on OVO-Bench. In the multi-round setting, it maintains performance while reducing output tokens by 56%. Code is available at: https://github.com/wl666hhh/Think_While_Watching/

多模态大语言模型（MLLM）在离线视频理解方面表现出很强的性能，但大多数仅限于离线推理或在线推理较弱，使得连续到达的视频流上的多轮交互变得困难。现有的流方法通常使用交错的感知生成范例，这会阻止并发感知和生成，并导致随着流的增长而导致早期记忆衰减，从而损害远程依赖建模。我们提出了 Think While Watching，这是一种内存锚定的流视频推理框架，可以在多轮交互过程中保留连续的段级内存。我们构建了一个三阶段、多轮的思想链数据集，并采用阶段匹配的训练策略，同时通过分段级流式因果掩码和流式位置编码来强制执行严格的因果关系。在推理过程中，我们引入了一个高效的管道，该管道将观察和思考重叠，并自适应地选择最佳的注意力后端。在单轮和多轮流输入协议下，我们的方法都取得了很好的结果。它基于 Qwen3-VL 构建，在 StreamingBench 上将单轮精度提高了 2.6%，在 OVO-Bench 上将单轮精度提高了 3.79%。在多轮设置中，它保持性能的同时减少了 56% 的输出代币。代码位于：https://github.com/wl666hhh/Think_While_Watching/

</details>

---

## 12. Controllable Egocentric Video Generation via Occlusion-Aware Sparse 3D Hand Joints / 通过遮挡感知稀疏 3D 手关节生成可控的以自我为中心的视频

**Date**: 2026-03-12 | **arXiv**: [2603.11755v1](http://arxiv.org/abs/2603.11755v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.11755v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Motion-controllable video generation is crucial for egocentric applications in virtual reality and embodied AI. However, existing methods often struggle to achieve 3D-consistent fine-grained hand articulation. By adopting on 2D trajectories or implicit poses, they collapse 3D geometry into spatially ambiguous signals or over rely on human-centric priors. Under severe egocentric occlusions, this causes motion inconsistencies and hallucinated artifacts, as well as preventing cross-embodiment generalization to robotic hands. To address these limitations, we propose a novel framework that generates egocentric videos from a single reference frame, leveraging sparse 3D hand joints as embodiment-agnostic control signals with clear semantic and geometric structures. We introduce an efficient control module that resolves occlusion ambiguities while fully preserving 3D information. Specifically, it extracts occlusion-aware features from the source reference frame by penalizing unreliable visual signals from hidden joints, and employs a 3D-based weighting mechanism to robustly handle dynamically occluded target joints during motion propagation. Concurrently, the module directly injects 3D geometric embeddings into the latent space to strictly enforce structural consistency. To facilitate robust training and evaluation, we develop an automated annotation pipeline that yields over one million high-quality egocentric video clips paired with precise hand trajectories. Additionally, we register humanoid kinematic and camera data to construct a cross-embodiment benchmark. Extensive experiments demonstrate that our approach significantly outperforms state-of-the-art baselines, generating high-fidelity egocentric videos with realistic interactions and exhibiting exceptional cross-embodiment generalization to robotic hands.

运动控制的视频生成对于虚拟现实和具体人工智能中以自我为中心的应用至关重要。然而，现有方法通常难以实现 3D 一致的细粒度手部清晰度。通过采用 2D 轨迹或隐式姿势，它们将 3D 几何图形折叠成空间模糊的信号或过度依赖以人类为中心的先验。在严重的以自我为中心的遮挡下，这会导致运动不一致和幻觉伪影，并阻止跨实体推广到机器人手。为了解决这些限制，我们提出了一种新颖的框架，该框架可以从单个参考帧生成以自我为中心的视频，利用稀疏的 3D 手关节作为具有清晰语义和几何结构的与实施例无关的控制信号。我们引入了一个高效的控制模块，可以解决遮挡模糊性，同时完全保留 3D 信息。具体来说，它通过惩罚来自隐藏关节的不可靠视觉信号，从源参考系中提取遮挡感知特征，并采用基于 3D 的加权机制来稳健地处理运动传播期间动态遮挡的目标关节。同时，该模块直接将 3D 几何嵌入注入到潜在空间中，以严格执行结构一致性。为了促进强大的训练和评估，我们开发了一个自动注释管道，可生成超过一百万个高质量的自我中心视频剪辑，并配有精确的手部轨迹。此外，我们注册人形运动学和相机数据来构建跨实施例基准。大量的实验表明，我们的方法显着优于最先进的基线，生成具有真实交互的高保真自我中心视频，并对机器人手展示出卓越的跨实体泛化能力。

</details>

---

## 13. SoulX-LiveAct: Towards Hour-Scale Real-Time Human Animation with Neighbor Forcing and ConvKV Memory / SoulX-LiveAct：利用邻居强制和 ConvKV 内存实现小时级实时人类动画

**Date**: 2026-03-12 | **arXiv**: [2603.11746v1](http://arxiv.org/abs/2603.11746v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.11746v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Autoregressive (AR) diffusion models offer a promising framework for sequential generation tasks such as video synthesis by combining diffusion modeling with causal inference. Although they support streaming generation, existing AR diffusion methods struggle to scale efficiently. In this paper, we identify two key challenges in hour-scale real-time human animation. First, most forcing strategies propagate sample-level representations with mismatched diffusion states, causing inconsistent learning signals and unstable convergence. Second, historical representations grow unbounded and lack structure, preventing effective reuse of cached states and severely limiting inference efficiency. To address these challenges, we propose Neighbor Forcing, a diffusion-step-consistent AR formulation that propagates temporally adjacent frames as latent neighbors under the same noise condition. This design provides a distribution-aligned and stable learning signal while preserving drifting throughout the AR chain. Building upon this, we introduce a structured ConvKV memory mechanism that compresses the keys and values in causal attention into a fixed-length representation, enabling constant-memory inference and truly infinite video generation without relying on short-term motion-frame memory. Extensive experiments demonstrate that our approach significantly improves training convergence, hour-scale generation quality, and inference efficiency compared to existing AR diffusion methods. Numerically, LiveAct enables hour-scale real-time human animation and supports 20 FPS real-time streaming inference on as few as two NVIDIA H100 or H200 GPUs. Quantitative results demonstrate that our method attains state-of-the-art performance in lip-sync accuracy, human animation quality, and emotional expressiveness, with the lowest inference cost.

自回归 (AR) 扩散模型通过将扩散建模与因果推理相结合，为序列生成任务（例如视频合成）提供了一个有前途的框架。尽管它们支持流式生成，但现有的 AR 扩散方法难以有效扩展。在本文中，我们确定了小时级实时人类动画的两个关键挑战。首先，大多数强制策略传播具有不匹配扩散状态的样本级表示，导致学习信号不一致和收敛不稳定。其次，历史表示无限增长且缺乏结构，阻碍了缓存状态的有效重用并严重限制了推理效率。为了解决这些挑战，我们提出了邻居强迫，这是一种扩散步骤一致的 AR 公式，它在相同的噪声条件下将时间相邻的帧作为潜在邻居传播。该设计提供了分布一致且稳定的学习信号，同时保留了整个 AR 链的漂移。在此基础上，我们引入了一种结构化的 ConvKV 内存机制，将因果注意力中的键和值压缩为固定长度的表示，从而实现恒定内存推理和真正无限的视频生成，而无需依赖短期运动帧内存。大量实验表明，与现有的 AR 扩散方法相比，我们的方法显着提高了训练收敛性、小时级生成质量和推理效率。从数值上看，LiveAct 可实现小时级实时人类动画，并支持在只需两个 NVIDIA H100 或 H200 GPU 上进行 20 FPS 实时流式推理。定量结果表明，我们的方法在口型同步准确性、人类动画质量和情感表达力方面达到了最先进的性能，并且推理成本最低。

</details>

---

## 14. OSCBench: Benchmarking Object State Change in Text-to-Video Generation / OSCBench：文本到视频生成中对象状态变化的基准测试

**Date**: 2026-03-12 | **arXiv**: [2603.11698v1](http://arxiv.org/abs/2603.11698v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.11698v1)

**Categories**: cs.CV, cs.AI, cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

Text-to-video (T2V) generation models have made rapid progress in producing visually high-quality and temporally coherent videos. However, existing benchmarks primarily focus on perceptual quality, text-video alignment, or physical plausibility, leaving a critical aspect of action understanding largely unexplored: object state change (OSC) explicitly specified in the text prompt. OSC refers to the transformation of an object's state induced by an action, such as peeling a potato or slicing a lemon. In this paper, we introduce OSCBench, a benchmark specifically designed to assess OSC performance in T2V models. OSCBench is constructed from instructional cooking data and systematically organizes action-object interactions into regular, novel, and compositional scenarios to probe both in-distribution performance and generalization. We evaluate six representative open-source and proprietary T2V models using both human user study and multimodal large language model (MLLM)-based automatic evaluation. Our results show that, despite strong performance on semantic and scene alignment, current T2V models consistently struggle with accurate and temporally consistent object state changes, especially in novel and compositional settings. These findings position OSC as a key bottleneck in text-to-video generation and establish OSCBench as a diagnostic benchmark for advancing state-aware video generation models.

文本到视频（T2V）生成模型在制作视觉上高质量且时间连贯的视频方面取得了快速进展。然而，现有的基准主要关注感知质量、文本视频对齐或物理合理性，而很大程度上未探索动作理解的一个关键方面：文本提示中明确指定的对象状态变化 (OSC)。 OSC 是指由某个动作引起的物体状态的转变，例如削土豆皮或切柠檬。在本文中，我们介绍了 OSCBench，这是一个专门用于评估 T2V 模型中 OSC 性能的基准测试。 OSCBench 由教学烹饪数据构建，并系统地将动作-对象交互组织成规则的、新颖的和组合的场景，以探测分布内的性能和泛化。我们使用人类用户研究和基于多模态大语言模型 (MLLM) 的自动评估来评估六个具有代表性的开源和专有 T2V 模型。我们的结果表明，尽管在语义和场景对齐方面表现出色，但当前的 T2V 模型始终难以准确且时间一致的对象状态变化，尤其是在新颖和组合的设置中。这些发现将 OSC 定位为文本到视频生成的关键瓶颈，并将 OSCBench 确立为推进状态感知视频生成模型的诊断基准。

</details>

---

## 15. Follow the Saliency: Supervised Saliency for Retrieval-augmented Dense Video Captioning / 遵循显着性：用于检索增强的密集视频字幕的监督显着性

**Date**: 2026-03-12 | **arXiv**: [2603.11460v1](http://arxiv.org/abs/2603.11460v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.11460v1)

**Categories**: cs.CV

**Code**: https://github.com/ermitaju1/STaRC

<details><summary><b>Abstract / 摘要</b></summary>

Existing retrieval-augmented approaches for Dense Video Captioning (DVC) often fail to achieve accurate temporal segmentation aligned with true event boundaries, as they rely on heuristic strategies that overlook ground truth event boundaries. The proposed framework, \textbf{STaRC}, overcomes this limitation by supervising frame-level saliency through a highlight detection module. Note that the highlight detection module is trained on binary labels derived directly from DVC ground truth annotations without the need for additional annotation. We also propose to utilize the saliency scores as a unified temporal signal that drives retrieval via saliency-guided segmentation and informs caption generation through explicit Saliency Prompts injected into the decoder. By enforcing saliency-constrained segmentation, our method produces temporally coherent segments that align closely with actual event transitions, leading to more accurate retrieval and contextually grounded caption generation. We conduct comprehensive evaluations on the YouCook2 and ViTT benchmarks, where STaRC achieves state-of-the-art performance across most of the metrics. Our code is available at https://github.com/ermitaju1/STaRC

现有的密集视频字幕 (DVC) 检索增强方法通常无法实现与真实事件边界对齐的准确时间分割，因为它们依赖于忽略真实事件边界的启发式策略。所提出的框架 \textbf{STaRC} 通过高亮检测模块来监督帧级显着性，从而克服了这一限制。请注意，高亮检测模块是在直接从 DVC 真实注释派生的二进制标签上进行训练的，无需额外注释。我们还建议利用显着性分数作为统一的时间信号，通过显着性引导的分割驱动检索，并通过注入解码器的显式显着性提示通知字幕生成。通过强制显着性约束分割，我们的方法产生时间上连贯的片段，与实际事件转换紧密结合，从而实现更准确的检索和基于上下文的字幕生成。我们对 YouCook2 和 ViTT 基准进行了全面评估，其中 STaRC 在大多数指标上都实现了最先进的性能。我们的代码位于 https://github.com/ermitaju1/STaRC

</details>

---

## 16. Stay in your Lane: Role Specific Queries with Overlap Suppression Loss for Dense Video Captioning / 留在你的车道上：针对密集视频字幕的具有重叠抑制损失的角色特定查询

**Date**: 2026-03-12 | **arXiv**: [2603.11439v1](http://arxiv.org/abs/2603.11439v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.11439v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Dense Video Captioning (DVC) is a challenging multimodal task that involves temporally localizing multiple events within a video and describing them with natural language. While query-based frameworks enable the simultaneous, end-to-end processing of localization and captioning, their reliance on shared queries often leads to significant multi-task interference between the two tasks, as well as temporal redundancy in localization. In this paper, we propose utilizing role-specific queries that separate localization and captioning into independent components, allowing each to exclusively learn its role. We then employ contrastive alignment to enforce semantic consistency between the corresponding outputs, ensuring coherent behavior across the separated queries. Furthermore, we design a novel suppression mechanism in which mutual temporal overlaps across queries are penalized to tackle temporal redundancy, supervising the model to learn distinct, non-overlapping event regions for more precise localization. Additionally, we introduce a lightweight module that captures core event concepts to further enhance semantic richness in captions through concept-level representations. We demonstrate the effectiveness of our method through extensive experiments on major DVC benchmarks YouCook2 and ActivityNet Captions.

密集视频字幕 (DVC) 是一项具有挑战性的多模式任务，涉及对视频中的多个事件进行时间定位并用自然语言描述它们。虽然基于查询的框架可以同时进行本地化和字幕的端到端处理，但它们对共享查询的依赖通常会导致两个任务之间出现严重的多任务干扰，以及本地化中的时间冗余。在本文中，我们建议利用特定于角色的查询，将本地化和字幕分离为独立的组件，使每个组件能够专门学习其角色。然后，我们采用对比对齐来强制相应输出之间的语义一致性，确保独立查询之间的行为一致。此外，我们设计了一种新颖的抑制机制，其中跨查询的相互时间重叠受到惩罚以解决时间冗余，监督模型学习不同的、非重叠的事件区域以实现更精确的定位。此外，我们引入了一个轻量级模块，可以捕获核心事件概念，以通过概念级表示进一步增强字幕中的语义丰富性。我们通过对主要 DVC 基准 YouCook2 和 ActivityNet Captions 进行大量实验来证明我们方法的有效性。

</details>

---

## 17. Beyond Single-Sample: Reliable Multi-Sample Distillation for Video Understanding / 超越单样本：用于视频理解的可靠多样本蒸馏

**Date**: 2026-03-12 | **arXiv**: [2603.11423v1](http://arxiv.org/abs/2603.11423v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.11423v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Traditional black-box distillation for Large Vision-Language Models (LVLMs) typically relies on a single teacher response per input, which often yields high-variance responses and format inconsistencies in multimodal or temporal scenarios. To mitigate this unreliable supervision, we propose R-MSD (Reliable Multi-Sample Distillation), a framework that explicitly models teacher sampling variance to enhance distillation stability. Rather than relying on a single teacher response, our approach leverages a task-adaptive teacher pool to provide robust supervision tailored to both closed-ended and open-ended reasoning. By integrating quality-aware signal matching with an adversarial distillation objective, our approach effectively filters teacher noise while maximizing knowledge transfer. Extensive evaluations across comprehensive video understanding benchmarks demonstrate that R-MSD consistently outperforms single sample distillation methods. We additionally include an original SFT+RL 4B baseline under the same training budget, which shows only marginal gains, while our method achieves significant improvements. With a 4B student model, our approach delivers gains on VideoMME (+1.5%), Video-MMMU (+3.2%), and MathVerse (+3.6%).

大型视觉语言模型 (LVLM) 的传统黑盒蒸馏通常依赖于每个输入的单个教师响应，这通常会在多模式或时间场景中产生高方差响应和格式不一致。为了减轻这种不可靠的监督，我们提出了 R-MSD（可靠多样本蒸馏），这是一个显式模拟教师采样方差以增强蒸馏稳定性的框架。我们的方法不是依赖单个教师的反应，而是利用任务自适应教师库来提供针对封闭式和开放式推理的强大监督。通过将质量感知信号匹配与对抗性蒸馏目标相结合，我们的方法有效地过滤了教师的噪音，同时最大化了知识转移。对综合视频理解基准的广泛评估表明，R-MSD 始终优于单样本蒸馏方法。我们还在相同的训练预算下添加了原始的 SFT+RL 4B 基线，这仅显示出边际收益，而我们的方法实现了显着改进。通过 4B 学生模型，我们的方法比 VideoMME (+1.5%)、Video-MMMU (+3.2%) 和 MathVerse (+3.6%) 有所提升。

</details>

---

## 18. ShotVerse: Advancing Cinematic Camera Control for Text-Driven Multi-Shot Video Creation / ShotVerse：推进用于文本驱动的多镜头视频创建的电影摄影机控制

**Date**: 2026-03-12 | **arXiv**: [2603.11421v1](http://arxiv.org/abs/2603.11421v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.11421v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Text-driven video generation has democratized film creation, but camera control in cinematic multi-shot scenarios remains a significant block. Implicit textual prompts lack precision, while explicit trajectory conditioning imposes prohibitive manual overhead and often triggers execution failures in current models. To overcome this bottleneck, we propose a data-centric paradigm shift, positing that aligned (Caption, Trajectory, Video) triplets form an inherent joint distribution that can connect automated plotting and precise execution. Guided by this insight, we present ShotVerse, a "Plan-then-Control" framework that decouples generation into two collaborative agents: a VLM (Vision-Language Model)-based Planner that leverages spatial priors to obtain cinematic, globally aligned trajectories from text, and a Controller that renders these trajectories into multi-shot video content via a camera adapter. Central to our approach is the construction of a data foundation: we design an automated multi-shot camera calibration pipeline aligns disjoint single-shot trajectories into a unified global coordinate system. This facilitates the curation of ShotVerse-Bench, a high-fidelity cinematic dataset with a three-track evaluation protocol that serves as the bedrock for our framework. Extensive experiments demonstrate that ShotVerse effectively bridges the gap between unreliable textual control and labor-intensive manual plotting, achieving superior cinematic aesthetics and generating multi-shot videos that are both camera-accurate and cross-shot consistent.

文本驱动的视频生成使电影创作民主化，但电影多镜头场景中的摄像机控制仍然是一个重要障碍。隐式的文本提示缺乏精确性，而显式的轨迹条件则带来了令人望而却步的手动开销，并且经常会触发当前模型中的执行失败。为了克服这个瓶颈，我们提出了一种以数据为中心的范式转变，假设对齐的（标题、轨迹、视频）三元组形成了一个固有的联合分布，可以连接自动绘图和精确执行。在这一见解的指导下，我们提出了 ShotVerse，一个“先规划后控制”的框架，它将生成解耦为两个协作代理：一个基于 VLM（视觉语言模型）的规划器，利用空间先验从文本中获取电影般的全局对齐轨迹，以及一个通过相机适配器将这些轨迹渲染为多镜头视频内容的控制器。我们方法的核心是数据基础的构建：我们设计了一个自动多镜头相机校准管道，将不相交的单镜头轨迹对齐到统一的全局坐标系中。这有利于 ShotVerse-Bench 的管理，这是一个高保真电影数据集，具有三轨评估协议，可作为我们框架的基石。大量实验表明，ShotVerse 有效地弥补了不可靠的文本控制和劳动密集型手动绘图之间的差距，实现了卓越的电影美学并生成了相机精确且跨镜头一致的多镜头视频。

</details>

---



</details>

<details><summary><b>2026-03-12 (11 papers)</b></summary>

# arXiv Video Papers - 2026-03-12

**Paper Count**: 11

---

## 1. COMIC: Agentic Sketch Comedy Generation / COMIC：特工素描喜剧一代

**Date**: 2026-03-11 | **arXiv**: [2603.11048v1](http://arxiv.org/abs/2603.11048v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.11048v1)

**Categories**: cs.CV, cs.AI, cs.CL, cs.MA, cs.NE

<details><summary><b>Abstract / 摘要</b></summary>

We propose a fully automated AI system that produces short comedic videos similar to sketch shows such as Saturday Night Live. Starting with character references, the system employs a population of agents loosely based on real production studio roles, structured to optimize the quality and diversity of ideas and outputs through iterative competition, evaluation, and improvement. A key contribution is the introduction of LLM critics aligned with real viewer preferences through the analysis of a corpus of comedy videos on YouTube to automatically evaluate humor. Our experiments show that our framework produces results approaching the quality of professionally produced sketches while demonstrating state-of-the-art performance in video generation.

我们提出了一个完全自动化的人工智能系统，可以生成类似于周六夜现场等小品节目的喜剧短片。从角色参考开始，该系统根据真实的制作工作室角色松散地采用了一群代理，其结构是通过迭代竞争、评估和改进来优化想法和输出的质量和多样性。一个关键贡献是通过分析 YouTube 上的喜剧视频语料库来自动评估幽默，引入了与真实观众偏好相一致的法学硕士评论家。我们的实验表明，我们的框架产生的结果接近专业制作草图的质量，同时展示了视频生成中最先进的性能。

</details>

---

## 2. Contrastive learning-based video quality assessment-jointed video vision transformer for video recognition / 基于对比学习的视频质量评估——用于视频识别的联合视频视觉变换器

**Date**: 2026-03-11 | **arXiv**: [2603.10965v1](http://arxiv.org/abs/2603.10965v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.10965v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Video quality significantly affects video classification. We found this problem when we classified Mild Cognitive Impairment well from clear videos, but worse from blurred ones. From then, we realized that referring to Video Quality Assessment (VQA) may improve video classification. This paper proposed Self-Supervised Learning-based Video Vision Transformer combined with No-reference VQA for video classification (SSL-V3) to fulfill the goal. SSL-V3 leverages Combined-SSL mechanism to join VQA into video classification and address the label shortage of VQA, which commonly occurs in video datasets, making it impossible to provide an accurate Video Quality Score. In brief, Combined-SSL takes video quality score as a factor to directly tune the feature map of the video classification. Then, the score, as an intersected point, links VQA and classification, using the supervised classification task to tune the parameters of VQA. SSL-V3 achieved robust experimental results on two datasets. For example, it reached an accuracy of 94.87% on some interview videos in the I-CONECT (a facial video-involved healthcare dataset), verifying SSL-V3's effectiveness.

视频质量显着影响视频分类。当我们对清晰视频中的轻度认知障碍进行良好分类，对模糊视频进行分类时，我们发现了这个问题。从那时起，我们意识到参考视频质量评估（VQA）可以改善视频分类。本文提出了基于自监督学习的视频视觉变换器与无参考 VQA 相结合的视频分类（SSL-V3）来实现这一目标。 SSL-V3利用Combined-SSL机制将VQA加入到视频分类中，解决了VQA在视频数据集中常见的标签短缺问题，无法提供准确的视频质量分数。简而言之，Combined-SSL以视频质量得分作为因素来直接调整视频分类的特征图。然后，分数作为一个交点，将VQA和分类联系起来，利用监督分类任务来调整VQA的参数。 SSL-V3 在两个数据集上取得了稳健的实验结果。例如，在I-CONECT（涉及面部视频的医疗数据集）中的一些采访视频上达到了94.87%的准确率，验证了SSL-V3的有效性。

</details>

---

## 3. A New Tensor Network: Tubal Tensor Train and Its Applications / 一种新的张量网络：Tubal 张量序列及其应用

**Date**: 2026-03-11 | **arXiv**: [2603.10503v1](http://arxiv.org/abs/2603.10503v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.10503v1)

**Categories**: math.NA, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

We introduce the tubal tensor train (TTT) decomposition, a tensor-network model that combines the t-product algebra of the tensor singular value decomposition (T-SVD) with the low-order core structure of the tensor train (TT) format. For an order-$(N+1)$ tensor with a distinguished tube mode, the proposed representation consists of two third-order boundary cores and $N-2$ fourth-order interior cores linked through the t-product. As a result, for bounded tubal ranks, the storage scales linearly with the number of modes, in contrast to direct high-order extensions of T-SVD. We present two computational strategies: a sequential fixed-rank construction, called TTT-SVD, and a Fourier-slice alternating scheme based on the alternating two-cores update (ATCU). We also state a TT-SVD-type error bound for TTT-SVD and illustrate the practical performance of the proposed model on image compression, video compression, tensor completion, and hyperspectral imaging.

我们介绍了管状张量序列（TTT）分解，这是一种张量网络模型，它将张量奇异值分解（T-SVD）的t积代数与张量序列（TT）格式的低阶核心结构相结合。对于具有独特管模式的 $(N+1)$ 阶张量，所提出的表示由通过 t 积链接的两个三阶边界核心和 $N-2$ 四阶内部核心组成。因此，对于有界管列，存储量随模式数量线性扩展，这与 T-SVD 的直接高阶扩展相反。我们提出了两种计算策略：称为 TTT-SVD 的顺序固定秩结构，以及基于交替双核更新 (ATCU) 的傅里叶切片交替方案。我们还声明了 TTT-SVD 的 TT-SVD 型误差界限，并说明了所提出的模型在图像压缩、视频压缩、张量补全和高光谱成像方面的实际性能。

</details>

---

## 4. DiT4DiT: Jointly Modeling Video Dynamics and Actions for Generalizable Robot Control / DiT4DiT：对视频动力学和动作进行联合建模以实现通用机器人控制

**Date**: 2026-03-11 | **arXiv**: [2603.10448v1](http://arxiv.org/abs/2603.10448v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.10448v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Vision-Language-Action (VLA) models have emerged as a promising paradigm for robot learning, but their representations are still largely inherited from static image-text pretraining, leaving physical dynamics to be learned from comparatively limited action data. Generative video models, by contrast, encode rich spatiotemporal structure and implicit physics, making them a compelling foundation for robotic manipulation. But their potentials are not fully explored in the literature. To bridge the gap, we introduce DiT4DiT, an end-to-end Video-Action Model that couples a video Diffusion Transformer with an action Diffusion Transformer in a unified cascaded framework. Instead of relying on reconstructed future frames, DiT4DiT extracts intermediate denoising features from the video generation process and uses them as temporally grounded conditions for action prediction. We further propose a dual flow-matching objective with decoupled timesteps and noise scales for video prediction, hidden-state extraction, and action inference, enabling coherent joint training of both modules. Across simulation and real-world benchmarks, DiT4DiT achieves state-of-the-art results, reaching average success rates of 98.6% on LIBERO and 50.8% on RoboCasa GR1 while using substantially less training data. On the Unitree G1 robot, it also delivers superior real-world performance and strong zero-shot generalization. Importantly, DiT4DiT improves sample efficiency by over 10x and speeds up convergence by up to 7x, demonstrating that video generation can serve as an effective scaling proxy for robot policy learning. We release code and models at https://dit4dit.github.io/.

视觉-语言-动作（VLA）模型已成为机器人学习的一种有前途的范例，但它们的表示仍然很大程度上继承自静态图像文本预训练，使得物理动力学只能从相对有限的动作数据中学习。相比之下，生成视频模型编码丰富的时空结构和隐式物理，使它们成为机器人操纵的引人注目的基础。但文献中并未充分探讨它们的潜力。为了弥补这一差距，我们引入了 DiT4DiT，这是一种端到端视频动作模型，它将视频扩散变压器与动作扩散变压器耦合在统一的级联框架中。 DiT4DiT 不依赖于重建的未来帧，而是从视频生成过程中提取中间去噪特征，并将它们用作动作预测的时间基础条件。我们进一步提出了一种双流匹配目标，具有解耦的时间步长和噪声尺度，用于视频预测、隐藏状态提取和动作推理，从而实现两个模块的连贯联合训练。在模拟和现实世界基准测试中，DiT4DiT 取得了最先进的结果，在 LIBERO 上达到 98.6% 的平均成功率，在 RoboCasa GR1 上达到 50.8% 的平均成功率，同时使用的训练数据却少得多。在 Unitree G1 机器人上，它还提供了卓越的现实世界性能和强大的零样本泛化能力。重要的是，DiT4DiT 将样本效率提高了 10 倍以上，并将收敛速度提高了 7 倍，这表明视频生成可以作为机器人策略学习的有效扩展代理。我们在 https://dit4dit.github.io/ 发布代码和模型。

</details>

---

## 5. World2Act: Latent Action Post-Training via Skill-Compositional World Models / World2Act：通过技能组合世界模型进行训练后的潜在行动

**Date**: 2026-03-11 | **arXiv**: [2603.10422v1](http://arxiv.org/abs/2603.10422v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.10422v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

World Models (WMs) have emerged as a promising approach for post-training Vision-Language-Action (VLA) policies to improve robustness and generalization under environmental changes. However, most WM-based post-training methods rely on pixel-space supervision, making policies sensitive to pixel-level artifacts and hallucination from imperfect WM rollouts. We introduce World2Act, a post-training framework that aligns VLA actions directly with WM video-dynamics latents using a contrastive matching objective, reducing dependence on pixels. Post-training performance is tied to rollout quality, yet current WMs struggle with arbitrary-length video generation as they are mostly trained on fixed-length clips while robotic execution durations vary widely. To address this, we propose an automatic LLM-based skill-decomposition pipeline that segments high-level instructions into low-level prompts. Our pipeline produces RoboCasa-Skill and LIBERO-Skill, supporting skill-compositional WMs that remain temporally consistent across diverse task horizons. Empirically, applying World2Act to VLAs like GR00T-N1.6 and Cosmos Policy achieves state-of-the-art results on RoboCasa and LIBERO, and improves real-world performance by 6.7%, enhancing embodied agent generalization.

世界模型（WM）已成为训练后视觉-语言-行动（VLA）政策的一种有前景的方法，可提高环境变化下的鲁棒性和泛化性。然而，大多数基于 WM 的后训练方法依赖于像素空间监督，使得策略对像素级伪影和不完美的 WM 推出产生的幻觉敏感。我们引入了 World2Act，这是一个后训练框架，它使用对比匹配目标将 VLA 动作直接与 WM 视频动态潜伏对齐，从而减少对像素的依赖。训练后性能与推出质量相关，但当前的 WM 难以生成任意长度的视频，因为它们主要是在固定长度的剪辑上进行训练，而机器人执行持续时间差异很大。为了解决这个问题，我们提出了一种基于 LLM 的自动技能分解管道，将高级指令分割成低级提示。我们的管道生产 RoboCasa-Skill 和 LIBERO-Skill，支持在不同任务范围内保持时间一致的技能组合 WM。根据经验，将 World2Act 应用于 GR00T-N1.6 和 Cosmos Policy 等 VLA 在 RoboCasa 和 LIBERO 上取得了最先进的结果，并将现实世界的性能提高了 6.7%，增强了体现代理的泛化能力。

</details>

---

## 6. Frames2Residual: Spatiotemporal Decoupling for Self-Supervised Video Denoising / Frames2Residual：用于自监督视频去噪的时空解耦

**Date**: 2026-03-11 | **arXiv**: [2603.10417v1](http://arxiv.org/abs/2603.10417v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.10417v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Self-supervised video denoising methods typically extend image-based frameworks into the temporal dimension, yet they often struggle to integrate inter-frame temporal consistency with intra-frame spatial specificity. Existing Video Blind-Spot Networks (BSNs) require noise independence by masking the center pixel, this constraint prevents the use of spatial evidence for texture recovery, thereby severing spatiotemporal correlations and causing texture loss. To address this, we propose Frames2Residual (F2R), a spatiotemporal decoupling framework that explicitly divides self-supervised training into two distinct stages: blind temporal consistency modeling and non-blind spatial texture recovery. In Stage 1, a blind temporal estimator learns inter-frame consistency using a frame-wise blind strategy, producing a temporally consistent anchor. In Stage 2, a non-blind spatial refiner leverages this anchor to safely reintroduce the center frame and recover intra-frame high-frequency spatial residuals while preserving temporal stability. Extensive experiments demonstrate that our decoupling strategy allows F2R to outperform existing self-supervised methods on both sRGB and raw video benchmarks.

自监督视频去噪方法通常将基于图像的框架扩展到时间维度，但它们通常难以将帧间时间一致性与帧内空间特异性相结合。现有的视频盲点网络（BSN）需要通过屏蔽中心像素来实现噪声独立性，这种限制阻止了使用空间证据进行纹理恢复，从而切断时空相关性并导致纹理丢失。为了解决这个问题，我们提出了 Frames2Residual (F2R)，一种时空解耦框架，它明确地将自监督训练分为两个不同的阶段：盲时间一致性建模和非盲空间纹理恢复。在第一阶段，盲时间估计器使用逐帧盲策略学习帧间一致性，从而产生时间一致的锚。在第 2 阶段，非盲空间细化器利用该锚点安全地重新引入中心帧并恢复帧内高频空间残差，同时保持时间稳定性。大量实验表明，我们的解耦策略使 F2R 在 sRGB 和原始视频基准测试上都优于现有的自我监督方法。

</details>

---

## 7. Motion Forcing: A Decoupled Framework for Robust Video Generation in Motion Dynamics / 运动强迫：运动动力学中鲁棒视频生成的解耦框架

**Date**: 2026-03-11 | **arXiv**: [2603.10408v1](http://arxiv.org/abs/2603.10408v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.10408v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

The ultimate goal of video generation is to satisfy a fundamental trilemma: achieving high visual quality, maintaining rigorous physical consistency, and enabling precise controllability. While recent models can maintain this balance in simple, isolated scenarios, we observe that this equilibrium is fragile and often breaks down as scene complexity increases (e.g., involving collisions or dense traffic). To address this, we introduce \textbf{Motion Forcing}, a framework designed to stabilize this trilemma even in complex generative tasks. Our key insight is to explicitly decouple physical reasoning from visual synthesis via a hierarchical \textbf{``Point-Shape-Appearance''} paradigm. This approach decomposes generation into verifiable stages: modeling complex dynamics as sparse geometric anchors (\textbf{Point}), expanding them into dynamic depth maps that explicitly resolve 3D geometry (\textbf{Shape}), and finally rendering high-fidelity textures (\textbf{Appearance}). Furthermore, to foster robust physical understanding, we employ a \textbf{Masked Point Recovery} strategy. By randomly masking input anchors during training and enforcing the reconstruction of complete dynamic depth, the model is compelled to move beyond passive pattern matching and learn latent physical laws (e.g., inertia) to infer missing trajectories. Extensive experiments on autonomous driving benchmarks show that Motion Forcing significantly outperforms state-of-the-art baselines, maintaining trilemma stability across complex scenes. Evaluations on physics and robotics further confirm our framework's generality.

视频生成的最终目标是满足一个基本的三难困境：实现高视觉质量、保持严格的物理一致性以及实现精确的可控性。虽然最近的模型可以在简单、孤立的场景中保持这种平衡，但我们观察到这种平衡是脆弱的，并且随着场景复杂性的增加（例如，涉及碰撞或密集的交通）而经常被打破。为了解决这个问题，我们引入了 \textbf{Motion Forcing}，这是一个旨在稳定这种三难困境的框架，即使在复杂的生成任务中也是如此。我们的主要见解是通过分层 \textbf{``Point-Shape-Appearance''} 范式将物理推理与视觉合成明确分离。这种方法将生成分解为可验证的阶段：将复杂的动态建模为稀疏几何锚点（\textbf{Point}），将其扩展为显式解析 3D 几何的动态深度图（\textbf{Shape}），最后渲染高保真纹理（\textbf{Appearance}）。此外，为了促进强大的物理理解，我们采用了 \textbf{Masked Point Recovery} 策略。通过在训练期间随机屏蔽输入锚点并强制重建完整的动态深度，该模型被迫超越被动模式匹配并学习潜在的物理定律（例如惯性）以推断丢失的轨迹。自动驾驶基准的大量实验表明，运动强迫显着优于最先进的基线，在复杂场景中保持三难稳定性。对物理学和机器人技术的评估进一步证实了我们框架的通用性。

</details>

---

## 8. From Imitation to Intuition: Intrinsic Reasoning for Open-Instance Video Classification / 从模仿到直觉：开放实例视频分类的内在推理

**Date**: 2026-03-11 | **arXiv**: [2603.10300v1](http://arxiv.org/abs/2603.10300v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.10300v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Conventional video classification models, acting as effective imitators, excel in scenarios with homogeneous data distributions. However, real-world applications often present an open-instance challenge, where intra-class variations are vast and complex, beyond existing benchmarks. While traditional video encoder models struggle to fit these diverse distributions, vision-language models (VLMs) offer superior generalization but have not fully leveraged their reasoning capabilities (intuition) for such tasks. In this paper, we bridge this gap with an intrinsic reasoning framework that evolves open-instance video classification from imitation to intuition. Our approach, namely DeepIntuit, begins with a cold-start supervised alignment to initialize reasoning capability, followed by refinement using Group Relative Policy Optimization (GRPO) to enhance reasoning coherence through reinforcement learning. Crucially, to translate this reasoning into accurate classification, DeepIntuit then introduces an intuitive calibration stage. In this stage, a classifier is trained on this intrinsic reasoning traces generated by the refined VLM, ensuring stable knowledge transfer without distribution mismatch. Extensive experiments demonstrate that for open-instance video classification, DeepIntuit benefits significantly from transcending simple feature imitation and evolving toward intrinsic reasoning. Our project is available at https://bwgzk-keke.github.io/DeepIntuit/.

传统的视频分类模型作为有效的模仿者，在数据分布均匀的场景中表现出色。然而，现实世界的应用程序通常会带来开放实例的挑战，其中类内的变化巨大且复杂，超出了现有的基准。虽然传统的视频编码器模型难以适应这些不同的分布，但视觉语言模型 (VLM) 提供了卓越的泛化能力，但尚未充分利用其推理能力（直觉）来完成此类任务。在本文中，我们通过内在推理框架弥补了这一差距，该框架将开放实例视频分类从模仿发展到直觉。我们的方法，即 DeepIntuit，首先通过冷启动监督对齐来初始化推理能力，然后使用组相对策略优化 (GRPO) 进行细化，以通过强化学习来增强推理一致性。至关重要的是，为了将这种推理转化为准确的分类，DeepIntuit 随后引入了直观的校准阶段。在此阶段，分类器根据精炼的 VLM 生成的内在推理轨迹进行训练，确保稳定的知识转移而不会出现分布不匹配。大量的实验表明，对于开放实例的视频分类，DeepIntuit 可以从超越简单特征模仿并向内在推理演进中获益匪浅。我们的项目位于 https://bwgzk-keke.github.io/DeepIntuit/。

</details>

---

## 9. ID-LoRA: Identity-Driven Audio-Video Personalization with In-Context LoRA / ID-LoRA：使用上下文 LoRA 进行身份驱动的音频-视频个性化

**Date**: 2026-03-10 | **arXiv**: [2603.10256v1](http://arxiv.org/abs/2603.10256v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.10256v1)

**Categories**: cs.SD, cs.CV, cs.GR

<details><summary><b>Abstract / 摘要</b></summary>

Existing video personalization methods preserve visual likeness but treat video and audio separately. Without access to the visual scene, audio models cannot synchronize sounds with on-screen actions; and because classical voice-cloning models condition only on a reference recording, a text prompt cannot redirect speaking style or acoustic environment. We propose ID-LoRA (Identity-Driven In-Context LoRA), which jointly generates a subject's appearance and voice in a single model, letting a text prompt, a reference image, and a short audio clip govern both modalities together. ID-LoRA adapts the LTX-2 joint audio-video diffusion backbone via parameter-efficient In-Context LoRA and, to our knowledge, is the first method to personalize visual appearance and voice in a single generative pass. Two challenges arise. Reference and generation tokens share the same positional-encoding space, making them hard to distinguish; we address this with negative temporal positions, placing reference tokens in a disjoint RoPE region while preserving their internal temporal structure. Speaker characteristics also tend to be diluted during denoising; we introduce identity guidance, a classifier-free guidance variant that amplifies speaker-specific features by contrasting predictions with and without the reference signal. In human preference studies, ID-LoRA is preferred over Kling 2.6 Pro by 73% of annotators for voice similarity and 65% for speaking style. On cross-environment settings, speaker similarity improves by 24% over Kling, with the gap widening as conditions diverge. A preliminary user study further suggests that joint generation provides a useful inductive bias for physically grounded sound synthesis. ID-LoRA achieves these results with only ~3K training pairs on a single GPU. Code, models, and data will be released.

现有的视频个性化方法保留视觉相似性，但单独处理视频和音频。如果无法访问视觉场景，音频模型就无法将声音与屏幕上的动作同步；而且由于经典的语音克隆模型仅以参考录音为条件，因此文本提示无法重定向说话风格或声学环境。我们提出了 ID-LoRA（身份驱动的上下文 LoRA），它在单个模型中联合生成主体的外观和声音，让文本提示、参考图像和简短的音频剪辑一起控制这两种模式。 ID-LoRA 通过参数高效的上下文 LoRA 来适应 LTX-2 联合音频-视频扩散骨干网，据我们所知，这是第一种在单次生成过程中个性化视觉外观和语音的方法。出现了两个挑战。引用和生成标记共享相同的位置编码空间，使得它们难以区分；我们用负时间位置来解决这个问题，将参考标记放置在不相交的 RoPE 区域中，同时保留其内部时间结构。扬声器特性在降噪过程中也往往会被淡化；我们引入了身份引导，这是一种无分类器的引导变体，它通过对比有参考信号和没有参考信号的预测来放大特定于说话者的特征。在人类偏好研究中，73% 的注释者在语音相似性方面更喜欢 ID-LoRA，在说话风格方面更喜欢 ID-LoRA，65% 的注释者更喜欢 Kling 2.6 Pro。在跨环境设置中，说话者相似度比 Kling 提高了 24%，并且随着条件的不同，差距会扩大。初步的用户研究进一步表明，联合生成为物理接地的声音合成提供了有用的感应偏置。 ID-LoRA 在单个 GPU 上仅用约 3K 训练对即可实现这些结果。代码、模型和数据将被发布。

</details>

---

## 10. ENIGMA-360: An Ego-Exo Dataset for Human Behavior Understanding in Industrial Scenarios / ENIGMA-360：用于工业场景中人类行为理解的 Ego-Exo 数据集

**Date**: 2026-03-10 | **arXiv**: [2603.09741v2](http://arxiv.org/abs/2603.09741v2) | **PDF**: [Link](http://arxiv.org/pdf/2603.09741v2)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Understanding human behavior from complementary egocentric (ego) and exocentric (exo) points of view enables the development of systems that can support workers in industrial environments and enhance their safety. However, progress in this area is hindered by the lack of datasets capturing both views in realistic industrial scenarios. To address this gap, we propose ENIGMA-360, a new ego-exo dataset acquired in a real industrial scenario. The dataset is composed of 180 egocentric and 180 exocentric procedural videos temporally synchronized offering complementary information of the same scene. The 360 videos have been labeled with temporal and spatial annotations, enabling the study of different aspects of human behavior in industrial domain. We provide baseline experiments for 3 foundational tasks for human behavior understanding: 1) Temporal Action Segmentation, 2) Keystep Recognition and 3) Egocentric Human-Object Interaction Detection, showing the limits of state-of-the-art approaches on this challenging scenario. These results highlight the need for new models capable of robust ego-exo understanding in real-world environments. We publicly release the dataset and its annotations at https://fpv-iplab.github.io/ENIGMA-360/.

从互补的自我中心 (ego) 和外中心 (exo) 的角度理解人类行为，可以开发出支持工业环境中工人并增强其安全的系统。然而，由于缺乏捕获现实工业场景中两种观点的数据集，该领域的进展受到阻碍。为了解决这一差距，我们提出了 ENIGMA-360，这是在真实工业场景中获取的新的 ego-exo 数据集。该数据集由 180 个以自我为中心和 180 个以外为中心的程序视频组成，这些视频在时间上同步，提供同一场景的补充信息。 360 度视频带有时间和空间注释，可以研究工业领域人类行为的不同方面。我们为人类行为理解的 3 个基本任务提供了基线实验：1）时间动作分割，2）关键步骤识别和 3）以自我为中心的人与物体交互检测，显示了最先进的方法在这一具有挑战性的场景中的局限性。这些结果凸显了对能够在现实环境中强大的自我-外在理解的新模型的需求。我们在 https://fpv-iplab.github.io/ENIGMA-360/ 公开发布数据集及其注释。

</details>

---

## 11. Streaming Autoregressive Video Generation via Diagonal Distillation / 通过对角蒸馏生成流式自回归视频

**Date**: 2026-03-10 | **arXiv**: [2603.09488v2](http://arxiv.org/abs/2603.09488v2) | **PDF**: [Link](http://arxiv.org/pdf/2603.09488v2)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Large pretrained diffusion models have significantly enhanced the quality of generated videos, and yet their use in real-time streaming remains limited. Autoregressive models offer a natural framework for sequential frame synthesis but require heavy computation to achieve high fidelity. Diffusion distillation can compress these models into efficient few-step variants, but existing video distillation approaches largely adapt image-specific methods that neglect temporal dependencies. These techniques often excel in image generation but underperform in video synthesis, exhibiting reduced motion coherence, error accumulation over long sequences, and a latency-quality trade-off. We identify two factors that result in these limitations: insufficient utilization of temporal context during step reduction and implicit prediction of subsequent noise levels in next-chunk prediction (i.e., exposure bias). To address these issues, we propose Diagonal Distillation, which operates orthogonally to existing approaches and better exploits temporal information across both video chunks and denoising steps. Central to our approach is an asymmetric generation strategy: more steps early, fewer steps later. This design allows later chunks to inherit rich appearance information from thoroughly processed early chunks, while using partially denoised chunks as conditional inputs for subsequent synthesis. By aligning the implicit prediction of subsequent noise levels during chunk generation with the actual inference conditions, our approach mitigates error propagation and reduces oversaturation in long-range sequences. We further incorporate implicit optical flow modeling to preserve motion quality under strict step constraints. Our method generates a 5-second video in 2.61 seconds (up to 31 FPS), achieving a 277.3x speedup over the undistilled model.

大型预训练扩散模型显着提高了生成视频的质量，但它们在实时流媒体中的使用仍然有限。自回归模型为顺序帧合成提供了一个自然的框架，但需要大量计算才能实现高保真度。扩散蒸馏可以将这些模型压缩为有效的几个步骤变体，但现有的视频蒸馏方法很大程度上采用了忽略时间依赖性的图像特定方法。这些技术通常在图像生成方面表现出色，但在视频合成方面表现不佳，表现出运动一致性降低、长序列上的错误累积以及延迟质量权衡。我们确定了导致这些限制的两个因素：在步骤减少期间对时间上下文的利用不足以及在下一个块预测中对后续噪声水平的隐式预测（即曝光偏差）。为了解决这些问题，我们提出了对角蒸馏，它与现有方法正交，可以更好地利用视频块和去噪步骤中的时间信息。我们方法的核心是不对称生成策略：早期步骤较多，后期步骤较少。这种设计允许后面的块从彻底处理的早期块继承丰富的外观信息，同时使用部分去噪的块作为后续合成的条件输入。通过将块生成期间后续噪声水平的隐式预测与实际推理条件对齐，我们的方法减轻了错误传播并减少了长程序列中的过饱和。我们进一步结合隐式光流建模，以在严格的步长约束下保持运动质量。我们的方法在 2.61 秒内生成一个 5 秒的视频（高达 31 FPS），比未蒸馏的模型实现了 277.3 倍的加速。

</details>

---



</details>

<details><summary><b>2026-03-11 (22 papers)</b></summary>

# arXiv Video Papers - 2026-03-11

**Paper Count**: 22

---

## 1. DISPLAY: Directable Human-Object Interaction Video Generation via Sparse Motion Guidance and Multi-Task Auxiliary / 显示：通过稀疏运动引导和多任务辅助生成可定向的人机交互视频

**Date**: 2026-03-10 | **arXiv**: [2603.09883v1](http://arxiv.org/abs/2603.09883v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09883v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Human-centric video generation has advanced rapidly, yet existing methods struggle to produce controllable and physically consistent Human-Object Interaction (HOI) videos. Existing works rely on dense control signals, template videos, or carefully crafted text prompts, which limit flexibility and generalization to novel objects. We introduce a framework, namely DISPLAY, guided by Sparse Motion Guidance, composed only of wrist joint coordinates and a shape-agnostic object bounding box. This lightweight guidance alleviates the imbalance between human and object representations and enables intuitive user control. To enhance fidelity under such sparse conditions, we propose an Object-Stressed Attention mechanism that improves object robustness. To address the scarcity of high-quality HOI data, we further develop a Multi-Task Auxiliary Training strategy with a dedicated data curation pipeline, allowing the model to benefit from both reliable HOI samples and auxiliary tasks. Comprehensive experiments show that our method achieves high-fidelity, controllable HOI generation across diverse tasks. The project page can be found at \href{https://mumuwei.github.io/DISPLAY/}.

以人为中心的视频生成技术发展迅速，但现有方法难以生成可控且物理一致的人机交互 (HOI) 视频。现有的作品依赖于密集的控制信号、模板视频或精心设计的文本提示，这限制了对新物体的灵活性和泛化。我们引入了一个框架，即 DISPLAY，由稀疏运动指导引导，仅由腕关节坐标和形状不可知的对象边界框组成。这种轻量级的指导减轻了人类和物体表示之间的不平衡，并实现了直观的用户控制。为了增强这种稀疏条件下的保真度，我们提出了一种对象应力注意力机制，可以提高对象的鲁棒性。为了解决高质量 HOI 数据的稀缺问题，我们进一步开发了具有专用数据管理管道的多任务辅助训练策略，使模型能够从可靠的 HOI 样本和辅助任务中受益。综合实验表明，我们的方法可以在不同的任务中实现高保真、可控的 HOI 生成。项目页面可以在 \href{https://mumuwei.github.io/DISPLAY/} 找到。

</details>

---

## 2. ConfCtrl: Enabling Precise Camera Control in Video Diffusion via Confidence-Aware Interpolation / ConfCtrl：通过置信度感知插值在视频扩散中实现精确的摄像机控制

**Date**: 2026-03-10 | **arXiv**: [2603.09819v1](http://arxiv.org/abs/2603.09819v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09819v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We address the challenge of novel view synthesis from only two input images under large viewpoint changes. Existing regression-based methods lack the capacity to reconstruct unseen regions, while camera-guided diffusion models often deviate from intended trajectories due to noisy point cloud projections or insufficient conditioning from camera poses. To address these issues, we propose ConfCtrl, a confidence-aware video interpolation framework that enables diffusion models to follow prescribed camera poses while completing unseen regions. ConfCtrl initializes the diffusion process by combining a confidence-weighted projected point cloud latent with noise as the conditioning input. It then applies a Kalman-inspired predict-update mechanism, treating the projected point cloud as a noisy measurement and using learned residual corrections to balance pose-driven predictions with noisy geometric observations. This allows the model to rely on reliable projections while down-weighting uncertain regions, yielding stable, geometry-aware generation. Experiments on multiple datasets show that ConfCtrl produces geometrically consistent and visually plausible novel views, effectively reconstructing occluded regions under large viewpoint changes.

我们解决了在大视点变化下仅从两个输入图像合成新颖视图的挑战。现有的基于回归的方法缺乏重建未见区域的能力，而相机引导的扩散模型通常由于点云投影的噪声或相机姿态调节不足而偏离预期轨迹。为了解决这些问题，我们提出了 ConfCtrl，这是一种具有置信度的视频插值框架，使扩散模型能够遵循规定的相机姿势，同时完成看不见的区域。 ConfCtrl 通过将置信加权投影潜在点云与噪声相结合作为调节输入来初始化扩散过程。然后，它应用卡尔曼启发的预测更新机制，将投影点云视为噪声测量，并使用学习的残差校正来平衡姿势驱动的预测与噪声几何观测。这使得模型能够依赖可靠的预测，同时降低不确定区域的权重，从而产生稳定的、几何感知的生成。对多个数据集的实验表明，ConfCtrl 产生几何一致且视觉上合理的新颖视图，在大视点变化下有效地重建遮挡区域。

</details>

---

## 3. ENIGMA-360: An Ego-Exo Dataset for Human Behavior Understanding in Industrial Scenarios / ENIGMA-360：用于工业场景中人类行为理解的 Ego-Exo 数据集

**Date**: 2026-03-10 | **arXiv**: [2603.09741v1](http://arxiv.org/abs/2603.09741v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09741v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Understanding human behavior from complementary egocentric (ego) and exocentric (exo) points of view enables the development of systems that can support workers in industrial environments and enhance their safety. However, progress in this area is hindered by the lack of datasets capturing both views in realistic industrial scenarios. To address this gap, we propose ENIGMA-360, a new ego-exo dataset acquired in a real industrial scenario. The dataset is composed of 180 egocentric and 180 exocentric procedural videos temporally synchronized offering complementary information of the same scene. The 360 videos have been labeled with temporal and spatial annotations, enabling the study of different aspects of human behavior in industrial domain. We provide baseline experiments for 3 foundational tasks for human behavior understanding: 1) Temporal Action Segmentation, 2) Keystep Recognition and 3) Egocentric Human-Object Interaction Detection, showing the limits of state-of-the-art approaches on this challenging scenario. These results highlight the need for new models capable of robust ego-exo understanding in real-world environments. We publicly release the dataset and its annotations at https://iplab.dmi.unict.it/ENIGMA-360.

从互补的自我中心 (ego) 和外中心 (exo) 的角度理解人类行为，可以开发出支持工业环境中工人并增强其安全的系统。然而，由于缺乏捕获现实工业场景中两种观点的数据集，该领域的进展受到阻碍。为了解决这一差距，我们提出了 ENIGMA-360，这是在真实工业场景中获取的新的 ego-exo 数据集。该数据集由 180 个以自我为中心和 180 个以外为中心的程序视频组成，这些视频在时间上同步，提供同一场景的补充信息。 360 度视频带有时间和空间注释，可以研究工业领域人类行为的不同方面。我们为人类行为理解的 3 个基本任务提供了基线实验：1）时间动作分割，2）关键步骤识别和 3）以自我为中心的人与物体交互检测，显示了最先进的方法在这一具有挑战性的场景中的局限性。这些结果凸显了对能够在现实环境中强大的自我-外在理解的新模型的需求。我们在 https://iplab.dmi.unict.it/ENIGMA-360 公开发布数据集及其注释。

</details>

---

## 4. FrameDiT: Diffusion Transformer with Frame-Level Matrix Attention for Efficient Video Generation / FrameDiT：具有帧级矩阵注意力的扩散变压器，可实现高效视频生成

**Date**: 2026-03-10 | **arXiv**: [2603.09721v1](http://arxiv.org/abs/2603.09721v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09721v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

High-fidelity video generation remains challenging for diffusion models due to the difficulty of modeling complex spatio-temporal dynamics efficiently. Recent video diffusion methods typically represent a video as a sequence of spatio-temporal tokens which can be modeled using Diffusion Transformers (DiTs). However, this approach faces a trade-off between the strong but expensive Full 3D Attention and the efficient but temporally limited Local Factorized Attention. To resolve this trade-off, we propose Matrix Attention, a frame-level temporal attention mechanism that processes an entire frame as a matrix and generates query, key, and value matrices via matrix-native operations. By attending across frames rather than tokens, Matrix Attention effectively preserves global spatio-temporal structure and adapts to significant motion. We build FrameDiT-G, a DiT architecture based on MatrixAttention, and further introduce FrameDiT-H, which integrates Matrix Attention with Local Factorized Attention to capture both large and small motion. Extensive experiments show that FrameDiT-H achieves state-of-the-art results across multiple video generation benchmarks, offering improved temporal coherence and video quality while maintaining efficiency comparable to Local Factorized Attention.

由于难以有效地建模复杂的时空动力学，高保真视频生成对于扩散模型仍然具有挑战性。最近的视频扩散方法通常将视频表示为一系列时空标记，可以使用扩散变压器（DiT）对其进行建模。然而，这种方法面临着强大但昂贵的 Full 3D Attention 和高效但时间有限的 Local Factorized Attention 之间的权衡。为了解决这种权衡，我们提出了矩阵注意力，这是一种帧级时间注意力机制，它将整个帧作为矩阵处理，并通过矩阵本机操作生成查询、键和值矩阵。通过跨帧而不是令牌进行关注，矩阵注意力有效地保留了全局时空结构并适应重大运动。我们构建了基于 MatrixAttention 的 DiT 架构 FrameDiT-G，并进一步介绍了 FrameDiT-H，它将 Matrix Attention 与 Local Factorized Attention 相结合，以捕获大运动和小运动。大量实验表明，FrameDiT-H 在多个视频生成基准中实现了最先进的结果，提供了改进的时间一致性和视频质量，同时保持了与局部因子化注意力相当的效率。

</details>

---

## 5. TemporalDoRA: Temporal PEFT for Robust Surgical Video Question Answering / TemporalDoRA：用于稳健手术视频问答的颞 PEFT

**Date**: 2026-03-10 | **arXiv**: [2603.09696v1](http://arxiv.org/abs/2603.09696v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09696v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Surgical Video Question Answering (VideoQA) requires accurate temporal grounding while remaining robust to natural variation in how clinicians phrase questions, where linguistic bias can arise. Standard Parameter Efficient Fine Tuning (PEFT) methods adapt pretrained projections without explicitly modeling frame-to-frame interactions within the adaptation pathway, limiting their ability to exploit sparse temporal evidence. We introduce TemporalDoRA, a video-specific PEFT formulation that extends Weight-Decomposed Low-Rank Adaptation by (i) inserting lightweight temporal Multi-Head Attention (MHA) inside the low-rank bottleneck of the vision encoder and (ii) selectively applying weight decomposition only to the trainable low-rank branch rather than the full adapted weight. This design enables temporally-aware updates while preserving a frozen backbone and stable scaling. By mixing information across frames within the adaptation subspace, TemporalDoRA steers updates toward temporally consistent visual cues and improves robustness with minimal parameter overhead. To benchmark this setting, we present REAL-Colon-VQA, a colonoscopy VideoQA dataset with 6,424 clip--question pairs, including paired rephrased Out-of-Template questions to evaluate sensitivity to linguistic variation. TemporalDoRA improves Out-of-Template performance, and ablation studies confirm that temporal mixing inside the low-rank branch is the primary driver of these gains. We also validate on EndoVis18-VQA adapted to short clips and observe consistent improvements on the Out-of-Template split. Code and dataset available at~\href{https://anonymous.4open.science/r/TemporalDoRA-BFC8/}{Anonymous GitHub}.

外科视频问答 (VideoQA) 需要准确的时间基础，同时对临床医生如何表达问题的自然变化保持鲁棒性，因为在这种情况下可能会出现语言偏差。标准参数高效微调（PEFT）方法适应预训练的投影，而无需在适应路径内明确建模帧到帧的交互，从而限制了它们利用稀疏时间证据的能力。我们引入了 TemporalDoRA，这是一种视频特定的 PEFT 公式，它通过以下方式扩展了权重分解低秩自适应：(i) 在视觉编码器的低秩瓶颈内插入轻量级时态多头注意力 (MHA)；(ii) 有选择地将权重分解仅应用于可训练的低秩分支而不是完全自适应权重。这种设计可以实现临时感知更新，同时保留冻结的主干和稳定的扩展。通过在适应子空间内混合跨帧的信息，TemporalDoRA 引导更新朝向时间一致的视觉线索，并以最小的参数开销提高鲁棒性。为了对这一设置进行基准测试，我们提出了 REAL-Colon-VQA，这是一个结肠镜检查视频 QA 数据集，包含 6,424 个剪辑问题对，包括成对的改写模板外问题，以评估对语言变异的敏感性。 TemporalDoRA 提高了模板外性能，消融研究证实，低秩分支内的时间混合是这些增益的主要驱动力。我们还验证了适用于短片的 EndoVis18-VQA，并观察到模板外分割的一致改进。代码和数据集位于~\href{https://anonymous.4open.science/r/TemporalDoRA-BFC8/}{Anonymous GitHub}。

</details>

---

## 6. Improving 3D Foot Motion Reconstruction in Markerless Monocular Human Motion Capture / 改进无标记单目人体运动捕捉中的 3D 足部运动重建

**Date**: 2026-03-10 | **arXiv**: [2603.09681v1](http://arxiv.org/abs/2603.09681v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09681v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

State-of-the-art methods can recover accurate overall 3D human body motion from in-the-wild videos. However, they often fail to capture fine-grained articulations, especially in the feet, which are critical for applications such as gait analysis and animation. This limitation results from training datasets with inaccurate foot annotations and limited foot motion diversity. We address this gap with FootMR, a Foot Motion Refinement method that refines foot motion estimated by an existing human recovery model through lifting 2D foot keypoint sequences to 3D. By avoiding direct image input, FootMR circumvents inaccurate image-3D annotation pairs and can instead leverage large-scale motion capture data. To resolve ambiguities of 2D-to-3D lifting, FootMR incorporates knee and foot motion as context and predicts only residual foot motion. Generalization to extreme foot poses is further improved by representing joints in global rather than parent-relative rotations and applying extensive data augmentation. To support evaluation of foot motion reconstruction, we introduce MOOF, a 2D dataset of complex foot movements. Experiments on MOOF, MOYO, and RICH show that FootMR outperforms state-of-the-art methods, reducing ankle joint angle error on MOYO by up to 30% over the best video-based approach.

最先进的方法可以从野外视频中恢复准确的整体 3D 人体运动。然而，它们通常无法捕获细粒度的关节，尤其是脚部的关节，这对于步态分析和动画等应用至关重要。这种限制是由于训练数据集的足部注释不准确和足部运动多样性有限造成的。我们通过 FootMR 解决了这一差距，这是一种足部运动细化方法，通过将 2D 足部关键点序列提升到 3D 来细化现有人体恢复模型估计的足部运动。通过避免直接图像输入，FootMR 避免了不准确的图像-3D 注释对，而是可以利用大规模运动捕捉数据。为了解决 2D 到 3D 提升的模糊性，FootMR 将膝盖和脚部运动纳入上下文，并仅预测残余脚部运动。通过在全局而不是相对于父级旋转中表示关节并应用广泛的数据增强，进一步改进了对极端脚部姿势的泛化。为了支持足部运动重建的评估，我们引入了 MOOF，这是一个复杂足部运动的 2D 数据集。 MOOF、MOYO 和 RICH 上的实验表明，FootMR 的性能优于最先进的方法，与基于视频的最佳方法相比，MOYO 上的踝关节角度误差最多可减少 30%。

</details>

---

## 7. When to Lock Attention: Training-Free KV Control in Video Diffusion / 何时锁定注意力：视频扩散中的免训练 KV 控制

**Date**: 2026-03-10 | **arXiv**: [2603.09657v1](http://arxiv.org/abs/2603.09657v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09657v1)

**Categories**: cs.CV, cs.AI, cs.ET, eess.IV

<details><summary><b>Abstract / 摘要</b></summary>

Maintaining background consistency while enhancing foreground quality remains a core challenge in video editing. Injecting full-image information often leads to background artifacts, whereas rigid background locking severely constrains the model's capacity for foreground generation. To address this issue, we propose KV-Lock, a training-free framework tailored for DiT-based video diffusion models. Our core insight is that the hallucination metric (variance of denoising prediction) directly quantifies generation diversity, which is inherently linked to the classifier-free guidance (CFG) scale. Building upon this, KV-Lock leverages diffusion hallucination detection to dynamically schedule two key components: the fusion ratio between cached background key-values (KVs) and newly generated KVs, and the CFG scale. When hallucination risk is detected, KV-Lock strengthens background KV locking and simultaneously amplifies conditional guidance for foreground generation, thereby mitigating artifacts and improving generation fidelity. As a training-free, plug-and-play module, KV-Lock can be easily integrated into any pre-trained DiT-based models. Extensive experiments validate that our method outperforms existing approaches in improved foreground quality with high background fidelity across various video editing tasks.

在增强前景质量的同时保持背景一致性仍然是视频编辑的核心挑战。注入全图像信息通常会导致背景伪影，而严格的背景锁定严重限制了模型的前景生成能力。为了解决这个问题，我们提出了 KV-Lock，这是一种为基于 DiT 的视频扩散模型量身定制的免训练框架。我们的核心见解是幻觉度量（去噪预测的方差）直接量化世代多样性，这与无分类器指导（CFG）规模有着内在的联系。在此基础上，KV-Lock 利用扩散幻觉检测来动态调度两个关键组件：缓存的背景键值 (KV) 和新生成的 KV 之间的融合比率，以及 CFG 比例。当检测到幻觉风险时，KV-Lock 会加强背景 KV 锁定，同时放大前景生成的条件指导，从而减少伪影并提高生成保真度。作为免训练、即插即用的模块，KV-Lock 可以轻松集成到任何预先训练的基于 DiT 的模型中。大量的实验验证了我们的方法在提高前景质量和跨各种视频编辑任务中的高背景保真度方面优于现有方法。

</details>

---

## 8. SurgFed: Language-guided Multi-Task Federated Learning for Surgical Video Understanding / SurgFed：用于手术视频理解的语言引导多任务联合学习

**Date**: 2026-03-10 | **arXiv**: [2603.09496v1](http://arxiv.org/abs/2603.09496v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09496v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Surgical scene Multi-Task Federated Learning (MTFL) is essential for robot-assisted minimally invasive surgery (RAS) but remains underexplored in surgical video understanding due to two key challenges: (1) Tissue Diversity: Local models struggle to adapt to site-specific tissue features, limiting their effectiveness in heterogeneous clinical environments and leading to poor local predictions. (2) Task Diversity: Server-side aggregation, relying solely on gradient-based clustering, often produces suboptimal or incorrect parameter updates due to inter-site task heterogeneity, resulting in inaccurate localization. In light of these two issues, we propose SurgFed, a multi-task federated learning framework, enabling federated learning for surgical scene segmentation and depth estimation across diverse surgical types. SurgFed is powered by two appealing designs, i.e., Language-guided Channel Selection (LCS) and Language-guided Hyper Aggregation (LHA), to address the challenge of fully exploration on corss-site and cross-task. Technically, the LCS is first designed a lightweight personalized channel selection network that enhances site-specific adaptation using pre-defined text inputs, which optimally the local model learn the specific embeddings. We further introduce the LHA that employs a layer-wise cross-attention mechanism with pre-defined text inputs to model task interactions across sites and guide a hypernetwork for personalized parameter updates. Extensive empirical evidence shows that SurgFed yields improvements over the state-of-the-art methods in five public datasets across four surgical types. The code is available at https://anonymous.4open.science/r/SurgFed-070E/.

手术场景多任务联邦学习 (MTFL) 对于机器人辅助微创手术 (RAS) 至关重要，但由于两个关键挑战，手术视频理解方面的研究仍未得到充分探索：(1) 组织多样性：局部模型难以适应特定部位的组织特征，限制了其在异构临床环境中的有效性，并导致局部预测不佳。 (2) 任务多样性：服务器端聚合仅依靠基于梯度的聚类，往往会因站点间任务异构性而产生次优或不正确的参数更新，从而导致定位不准确。鉴于这两个问题，我们提出了 SurgFed，一个多任务联邦学习框架，能够实现跨不同手术类型的手术场景分割和深度估计的联邦学习。 SurgFed 由两种吸引人的设计提供支持，即语言引导的通道选择（LCS）和语言引导的超聚合（LHA），以解决跨站点和跨任务充分探索的挑战。从技术上讲，LCS 首先设计了一个轻量级的个性化频道选择网络，该网络使用预定义的文本输入来增强特定于站点的适应，从而优化本地模型学习特定的嵌入。我们进一步介绍了 LHA，它采用分层交叉注意机制和预定义的文本输入来建模跨站点的任务交互，并指导超网络进行个性化参数更新。大量的经验证据表明，SurgFed 在四种手术类型的五个公共数据集中比最先进的方法有所改进。该代码可从 https://anonymous.4open.science/r/SurgFed-070E/ 获取。

</details>

---

## 9. Streaming Autoregressive Video Generation via Diagonal Distillation / 通过对角蒸馏生成流式自回归视频

**Date**: 2026-03-10 | **arXiv**: [2603.09488v1](http://arxiv.org/abs/2603.09488v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09488v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Large pretrained diffusion models have significantly enhanced the quality of generated videos, and yet their use in real-time streaming remains limited. Autoregressive models offer a natural framework for sequential frame synthesis but require heavy computation to achieve high fidelity. Diffusion distillation can compress these models into efficient few-step variants, but existing video distillation approaches largely adapt image-specific methods that neglect temporal dependencies. These techniques often excel in image generation but underperform in video synthesis, exhibiting reduced motion coherence, error accumulation over long sequences, and a latency-quality trade-off. We identify two factors that result in these limitations: insufficient utilization of temporal context during step reduction and implicit prediction of subsequent noise levels in next-chunk prediction (i.e., exposure bias). To address these issues, we propose Diagonal Distillation, which operates orthogonally to existing approaches and better exploits temporal information across both video chunks and denoising steps. Central to our approach is an asymmetric generation strategy: more steps early, fewer steps later. This design allows later chunks to inherit rich appearance information from thoroughly processed early chunks, while using partially denoised chunks as conditional inputs for subsequent synthesis. By aligning the implicit prediction of subsequent noise levels during chunk generation with the actual inference conditions, our approach mitigates error propagation and reduces oversaturation in long-range sequences. We further incorporate implicit optical flow modeling to preserve motion quality under strict step constraints. Our method generates a 5-second video in 2.61 seconds (up to 31 FPS), achieving a 277.3x speedup over the undistilled model.

大型预训练扩散模型显着提高了生成视频的质量，但它们在实时流媒体中的使用仍然有限。自回归模型为顺序帧合成提供了一个自然的框架，但需要大量计算才能实现高保真度。扩散蒸馏可以将这些模型压缩为有效的几个步骤变体，但现有的视频蒸馏方法很大程度上采用了忽略时间依赖性的图像特定方法。这些技术通常在图像生成方面表现出色，但在视频合成方面表现不佳，表现出运动一致性降低、长序列上的错误累积以及延迟质量权衡。我们确定了导致这些限制的两个因素：在步骤减少期间对时间上下文的利用不足以及在下一个块预测中对后续噪声水平的隐式预测（即曝光偏差）。为了解决这些问题，我们提出了对角蒸馏，它与现有方法正交，可以更好地利用视频块和去噪步骤中的时间信息。我们方法的核心是不对称生成策略：早期步骤较多，后期步骤较少。这种设计允许后面的块从彻底处理的早期块继承丰富的外观信息，同时使用部分去噪的块作为后续合成的条件输入。通过将块生成期间后续噪声水平的隐式预测与实际推理条件对齐，我们的方法减轻了错误传播并减少了长程序列中的过饱和。我们进一步结合隐式光流建模，以在严格的步长约束下保持运动质量。我们的方法在 2.61 秒内生成一个 5 秒的视频（高达 31 FPS），比未蒸馏的模型实现了 277.3 倍的加速。

</details>

---

## 10. Training-free Motion Factorization for Compositional Video Generation / 用于合成视频生成的免训练运动分解

**Date**: 2026-03-10 | **arXiv**: [2603.09104v1](http://arxiv.org/abs/2603.09104v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09104v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Compositional video generation aims to synthesize multiple instances with diverse appearance and motion, which is widely applicable in real-world scenarios. However, current approaches mainly focus on binding semantics, neglecting to understand diverse motion categories specified in prompts. In this paper, we propose a motion factorization framework that decomposes complex motion into three primary categories: motionlessness, rigid motion, and non-rigid motion. Specifically, our framework follows a planning before generation paradigm. (1) During planning, we reason about motion laws on the motion graph to obtain frame-wise changes in the shape and position of each instance. This alleviates semantic ambiguities in the user prompt by organizing it into a structured representation of instances and their interactions. (2) During generation, we modulate the synthesis of distinct motion categories in a disentangled manner. Conditioned on the motion cues, guidance branches stabilize appearance in motionless regions, preserve rigid-body geometry, and regularize local non-rigid deformations. Crucially, our two modules are model-agnostic, which can be seamlessly incorporated into various diffusion model architectures. Extensive experiments demonstrate that our framework achieves impressive performance in motion synthesis on real-world benchmarks. Our code will be released soon.

合成视频生成旨在合成具有不同外观和运动的多个实例，广泛适用于现实场景。然而，当前的方法主要集中于绑定语义，忽略了理解提示中指定的不同运动类别。在本文中，我们提出了一种运动分解框架，将复杂运动分解为三个主要类别：静止、刚性运动和非刚性运动。具体来说，我们的框架遵循生成前规划范例。 （1）在规划过程中，我们对运动图上的运动规律进行推理，以获得每个实例的形状和位置的逐帧变化。这通过将用户提示组织成实例及其交互的结构化表示来减轻用户提示中的语义歧义。 (2)在生成过程中，我们以一种解开的方式调节不同运动类别的合成。根据运动线索，引导分支稳定静止区域的外观，保留刚体几何形状，并规范局部非刚性变形。至关重要的是，我们的两个模块与模型无关，可以无缝地合并到各种扩散模型架构中。大量的实验表明，我们的框架在现实世界基准的运动合成中取得了令人印象深刻的性能。我们的代码很快就会发布。

</details>

---

## 11. Chain of Event-Centric Causal Thought for Physically Plausible Video Generation / 用于物理上合理的视频生成的以事件为中心的因果思想链

**Date**: 2026-03-10 | **arXiv**: [2603.09094v1](http://arxiv.org/abs/2603.09094v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.09094v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Physically Plausible Video Generation (PPVG) has emerged as a promising avenue for modeling real-world physical phenomena. PPVG requires an understanding of commonsense knowledge, which remains a challenge for video diffusion models. Current approaches leverage commonsense reasoning capability of large language models to embed physical concepts into prompts. However, generation models often render physical phenomena as a single moment defined by prompts, due to the lack of conditioning mechanisms for modeling causal progression. In this paper, we view PPVG as generating a sequence of causally connected and dynamically evolving events. To realize this paradigm, we design two key modules: (1) Physics-driven Event Chain Reasoning. This module decomposes the physical phenomena described in prompts into multiple elementary event units, leveraging chain-of-thought reasoning. To mitigate causal ambiguity, we embed physical formulas as constraints to impose deterministic causal dependencies during reasoning. (2) Transition-aware Cross-modal Prompting (TCP). To maintain continuity between events, this module transforms causal event units into temporally aligned vision-language prompts. It summarizes discrete event descriptions to obtain causally consistent narratives, while progressively synthesizing visual keyframes of individual events by interactive editing. Comprehensive experiments on PhyGenBench and VideoPhy benchmarks demonstrate that our framework achieves superior performance in generating physically plausible videos across diverse physical domains. Our code will be released soon.

物理上合理的视频生成（PPVG）已成为模拟现实世界物理现象的一种有前途的途径。 PPVG 需要理解常识知识，这对于视频扩散模型来说仍然是一个挑战。当前的方法利用大型语言模型的常识推理能力将物理概念嵌入到提示中。然而，由于缺乏用于建模因果进展的调节机制，生成模型通常将物理现象呈现为由提示定义的单个时刻。在本文中，我们将 PPVG 视为生成一系列因果关联且动态演变的事件。为了实现这一范式，我们设计了两个关键模块：（1）物理驱动的事件链推理。该模块利用思维链推理，将提示中描述的物理现象分解为多个基本事件单元。为了减轻因果模糊性，我们嵌入物理公式作为约束，以在推理过程中施加确定性因果依赖性。 (2) 转换感知的跨模式提示（TCP）。为了保持事件之间的连续性，该模块将因果事件单元转换为时间对齐的视觉语言提示。它总结离散事件描述以获得因果一致的叙述，同时通过交互式编辑逐步合成单个事件的视觉关键帧。 PhyGenBench 和 VideoPhy 基准测试的综合实验表明，我们的框架在跨不同物理领域生成物理上合理的视频方面实现了卓越的性能。我们的代码很快就会发布。

</details>

---

## 12. SVG-EAR: Parameter-Free Linear Compensation for Sparse Video Generation via Error-aware Routing / SVG-EAR：通过错误感知路由生成稀疏视频的无参数线性补偿

**Date**: 2026-03-09 | **arXiv**: [2603.08982v1](http://arxiv.org/abs/2603.08982v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08982v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion Transformers (DiTs) have become a leading backbone for video generation, yet their quadratic attention cost remains a major bottleneck. Sparse attention reduces this cost by computing only a subset of attention blocks. However, prior methods often either drop the remaining blocks, which incurs information loss, or rely on learned predictors to approximate them, introducing training overhead and potential output distribution shifting. In this paper, we show that the missing contributions can be recovered without training: after semantic clustering, keys and values within each block exhibit strong similarity and can be well summarized by a small set of cluster centroids. Based on this observation, we introduce SVG-EAR, a parameter-free linear compensation branch that uses the centroid to approximate skipped blocks and recover their contributions. While centroid compensation is accurate for most blocks, it can fail on a small subset. Standard sparsification typically selects blocks by attention scores, which indicate where the model places its attention mass, but not where the approximation error would be largest. SVG-EAR therefore performs error-aware routing: a lightweight probe estimates the compensation error for each block, and we compute exactly the blocks with the highest error-to-cost ratio while compensating for skipped blocks. We provide theoretical guarantees that relate attention reconstruction error to clustering quality, and empirically show that SVG-EAR improves the quality-efficiency trade-off and increases throughput at the same generation fidelity on video diffusion tasks. Overall, SVG-EAR establishes a clear Pareto frontier over prior approaches, achieving up to 1.77$\times$ and 1.93$\times$ speedups while maintaining PSNRs of up to 29.759 and 31.043 on Wan2.2 and HunyuanVideo, respectively.

扩散变压器（DiT）已成为视频生成的主要支柱，但其二次注意力成本仍然是主要瓶颈。稀疏注意力通过仅计算注意力块的子集来降低这种成本。然而，现有的方法通常要么丢弃剩余的块，这会导致信息丢失，要么依赖学习的预测器来近似它们，从而引入训练开销和潜在的输出分布偏移。在本文中，我们表明可以在不训练的情况下恢复缺失的贡献：在语义聚类之后，每个块内的键和值表现出很强的相似性，并且可以通过一小组聚类质心很好地概括。基于这一观察，我们引入了 SVG-EAR，这是一种无参数线性补偿分支，它使用质心来近似跳过的块并恢复它们的贡献。虽然质心补偿对于大多数块来说是准确的，但在一小部分块上可能会失败。标准稀疏化通常通过注意力分数来选择块，注意力分数指示模型将注意力集中在何处，但不是近似误差最大的位置。因此，SVG-EAR 执行错误感知路由：轻量级探针估计每个块的补偿误差，我们精确计算具有最高错误成本比的块，同时补偿跳过的块。我们提供了将注意力重建误差与聚类质量联系起来的理论保证，并凭经验证明 SVG-EAR 改善了质量效率权衡，并在视频扩散任务的同一代保真度下提高了吞吐量。总体而言，SVG-EAR 与之前的方法相比建立了清晰的帕累托边界，在 Wan2.2 和 HunyuanVideo 上分别实现了高达 1.77$\times$ 和 1.93$\times$ 的加速，同时保持高达 29.759 和 31.043 的 PSNR。

</details>

---

## 13. MEGC2026: Micro-Expression Grand Challenge on Visual Question Answering / MEGC2026：视觉问答微表情大挑战

**Date**: 2026-03-09 | **arXiv**: [2603.08927v1](http://arxiv.org/abs/2603.08927v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08927v1)

**Categories**: cs.CV, cs.MM

<details><summary><b>Abstract / 摘要</b></summary>

Facial micro-expressions (MEs) are involuntary movements of the face that occur spontaneously when a person experiences an emotion but attempts to suppress or repress the facial expression, typically found in a high-stakes environment. In recent years, substantial advancements have been made in the areas of ME recognition, spotting, and generation. The emergence of multimodal large language models (MLLMs) and large vision-language models (LVLMs) offers promising new avenues for enhancing ME analysis through their powerful multimodal reasoning capabilities. The ME grand challenge (MEGC) 2026 introduces two tasks that reflect these evolving research directions: (1) ME video question answering (ME-VQA), which explores ME understanding through visual question answering on relatively short video sequences, leveraging MLLMs or LVLMs to address diverse question types related to MEs; and (2) ME long-video question answering (ME-LVQA), which extends VQA to long-duration video sequences in realistic settings, requiring models to handle temporal reasoning and subtle micro-expression detection across extended time periods. All participating algorithms are required to submit their results on a public leaderboard. More details are available at https://megc2026.github.io.

面部微表情 (ME) 是当一个人经历某种情绪但试图抑制或压制面部表情时自发发生的面部不自主运动，通常出现在高风险环境中。近年来，ME 识别、发现和生成领域取得了实质性进展。多模态大语言模型 (MLLM) 和大视觉语言模型 (LVLM) 的出现，通过其强大的多模态推理能力，为增强 ME 分析提供了有希望的新途径。 ME 大挑战 (MEGC) 2026 引入了反映这些不断发展的研究方向的两项任务：(1) ME 视频问答 (ME-VQA)，它通过在相对较短的视频序列上进行视觉问答来探索 ME 理解，利用 MLLM 或 LVLM 来解决与 ME 相关的各种问题类型； (2) ME 长视频问答 (ME-LVQA)，它将 VQA 扩展到现实环境中的长视频序列，要求模型能够在较长的时间段内处理时间推理和微妙的微表情检测。所有参与的算法都必须在公共排行榜上提交其结果。更多详细信息请访问 https://megc2026.github.io。

</details>

---

## 14. HECTOR: Hybrid Editable Compositional Object References for Video Generation / HECTOR：用于视频生成的混合可编辑组合对象参考

**Date**: 2026-03-09 | **arXiv**: [2603.08850v1](http://arxiv.org/abs/2603.08850v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08850v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Real-world videos naturally portray complex interactions among distinct physical objects, effectively forming dynamic compositions of visual elements. However, most current video generation models synthesize scenes holistically and therefore lack mechanisms for explicit compositional manipulation. To address this limitation, we propose HECTOR, a generative pipeline that enables fine-grained compositional control. In contrast to prior methods,HECTOR supports hybrid reference conditioning, allowing generation to be simultaneously guided by static images and/or dynamic videos. Moreover, users can explicitly specify the trajectory of each referenced element, precisely controlling its location, scale, and speed (see Figure1). This design allows the model to synthesize coherent videos that satisfy complex spatiotemporal constraints while preserving high-fidelity adherence to references. Extensive experiments demonstrate that HECTOR achieves superior visual quality, stronger reference preservation, and improved motion controllability compared with existing approaches.

现实世界的视频自然地描绘了不同物理对象之间的复杂交互，有效地形成了视觉元素的动态组合。然而，当前大多数视频生成模型都是整体合成场景，因此缺乏显式组合操作的机制。为了解决这个限制，我们提出了 HECTOR，这是一种能够实现细粒度成分控制的生成管道。与之前的方法相比，HECTOR 支持混合参考调节，允许静态图像和/或动态视频同时引导生成。此外，用户可以明确指定每个引用元素的轨迹，精确控制其位置、比例和速度（见图1）。这种设计允许模型合成满足复杂时空约束的连贯视频，同时保持对参考的高保真度。大量实验表明，与现有方法相比，HECTOR 实现了卓越的视觉质量、更强的参考保留和改进的运动可控性。

</details>

---

## 15. Fish Audio S2 Technical Report / Fish Audio S2 技术报告

**Date**: 2026-03-09 | **arXiv**: [2603.08823v1](http://arxiv.org/abs/2603.08823v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08823v1)

**Categories**: cs.SD, cs.AI, cs.CL

**Code**: https://github.com/fishaudio/fish-speech)

<details><summary><b>Abstract / 摘要</b></summary>

We introduce Fish Audio S2, an open-sourced text-to-speech system featuring multi-speaker, multi-turn generation, and, most importantly, instruction-following control via natural-language descriptions. To scale training, we develop a multi-stage training recipe together with a staged data pipeline covering video captioning and speech captioning, voice-quality assessment, and reward modeling. To push the frontier of open-source TTS, we release our model weights, fine-tuning code, and an SGLang-based inference engine. The inference engine is production-ready for streaming, achieving an RTF of 0.195 and a time-to-first-audio below 100 ms.Our code and weights are available on GitHub (https://github.com/fishaudio/fish-speech) and Hugging Face (https://huggingface.co/fishaudio/s2-pro). We highly encourage readers to visit https://fish.audio to try custom voices.

我们推出 Fish Audio S2，这是一种开源文本转语音系统，具有多扬声器、多轮生成功能，最重要的是，通过自然语言描述进行指令跟踪控制。为了扩展训练，我们开发了多阶段训练方案以及涵盖视频字幕和语音字幕、语音质量评估和奖励建模的分阶段数据管道。为了推动开源 TTS 的发展，我们发布了模型权重、微调代码和基于 SGLang 的推理引擎。推理引擎已做好流媒体生产准备，实现了 0.195 的 RTF 和低于 100 毫秒的首次音频时间。我们的代码和权重可在 GitHub (https://github.com/fishaudio/fish-speech) 和 Hugging Face (https://huggingface.co/fishaudio/s2-pro) 上获取。我们强烈鼓励读者访问 https://fish.audio 尝试自定义声音。

</details>

---

## 16. HiAR: Efficient Autoregressive Long Video Generation via Hierarchical Denoising / HiAR：通过分层去噪实现高效自回归长视频生成

**Date**: 2026-03-09 | **arXiv**: [2603.08703v1](http://arxiv.org/abs/2603.08703v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08703v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Autoregressive (AR) diffusion offers a promising framework for generating videos of theoretically infinite length. However, a major challenge is maintaining temporal continuity while preventing the progressive quality degradation caused by error accumulation. To ensure continuity, existing methods typically condition on highly denoised contexts; yet, this practice propagates prediction errors with high certainty, thereby exacerbating degradation. In this paper, we argue that a highly clean context is unnecessary. Drawing inspiration from bidirectional diffusion models, which denoise frames at a shared noise level while maintaining coherence, we propose that conditioning on context at the same noise level as the current block provides sufficient signal for temporal consistency while effectively mitigating error propagation. Building on this insight, we propose HiAR, a hierarchical denoising framework that reverses the conventional generation order: instead of completing each block sequentially, it performs causal generation across all blocks at every denoising step, so that each block is always conditioned on context at the same noise level. This hierarchy naturally admits pipelined parallel inference, yielding a 1.8 wall-clock speedup in our 4-step setting. We further observe that self-rollout distillation under this paradigm amplifies a low-motion shortcut inherent to the mode-seeking reverse-KL objective. To counteract this, we introduce a forward-KL regulariser in bidirectional-attention mode, which preserves motion diversity for causal inference without interfering with the distillation loss. On VBench (20s generation), HiAR achieves the best overall score and the lowest temporal drift among all compared methods.

自回归（AR）扩散为生成理论上无限长度的视频提供了一个有前途的框架。然而，一个主要挑战是保持时间连续性，同时防止错误累积引起的质量逐渐下降。为了确保连续性，现有方法通常以高度去噪的上下文为条件；然而，这种做法会以高确定性传播预测误差，从而加剧退化。在本文中，我们认为高度干净的上下文是不必要的。受到双向扩散模型的启发，双向扩散模型在共享噪声水平上对帧进行降噪，同时保持一致性，我们建议以与当前块相同的噪声水平对上下文进行调节，为时间一致性提供足够的信号，同时有效地减轻错误传播。基于这一见解，我们提出了 HiAR，一种分层去噪框架，它反转了传统的生成顺序：它不是按顺序完成每个块，而是在每个去噪步骤中对所有块执行因果生成，以便每个块始终以相同噪声水平的上下文为条件。这种层次结构自然允许流水线并行推理，在我们的 4 步设置中产生 1.8 的挂钟加速。我们进一步观察到，这种范式下的自推出蒸馏放大了模式搜索反向 KL 目标固有的低运动捷径。为了解决这个问题，我们在双向注意模式下引入了前向 KL 正则化器，它保留了因果推理的运动多样性，而不干扰蒸馏损失。在 VBench（20 代）上，HiAR 在所有比较方法中取得了最好的总体得分和最低的时间漂移​​。

</details>

---

## 17. CAST: Modeling Visual State Transitions for Consistent Video Retrieval / CAST：对视觉状态转换进行建模以实现一致的视频检索

**Date**: 2026-03-09 | **arXiv**: [2603.08648v1](http://arxiv.org/abs/2603.08648v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08648v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

As video content creation shifts toward long-form narratives, composing short clips into coherent storylines becomes increasingly important. However, prevailing retrieval formulations remain context-agnostic at inference time, prioritizing local semantic alignment while neglecting state and identity consistency. To address this structural limitation, we formalize the task of Consistent Video Retrieval (CVR) and introduce a diagnostic benchmark spanning YouCook2, COIN, and CrossTask. We propose CAST (Context-Aware State Transition), a lightweight, plug-and-play adapter compatible with diverse frozen vision-language embedding spaces. By predicting a state-conditioned residual update ($Δ$) from visual history, CAST introduces an explicit inductive bias for latent state evolution. Extensive experiments show that CAST improves performance on YouCook2 and CrossTask, remains competitive on COIN, and consistently outperforms zero-shot baselines across diverse foundation backbones. Furthermore, CAST provides a useful reranking signal for black-box video generation candidates (e.g., from Veo), promoting more temporally coherent continuations.

随着视频内容创作转向长篇叙事，将短片组成连贯的故事情节变得越来越重要。然而，流行的检索公式在推理时仍然与上下文无关，优先考虑局部语义对齐，而忽略状态和身份一致性。为了解决这种结构限制，我们将一致性视频检索 (CVR) 任务形式化，并引入了涵盖 YouCook2、COIN 和 CrossTask 的诊断基准。我们提出了 CAST（上下文感知状态转换），这是一种轻量级、即插即用的适配器，与多种冻结视觉语言嵌入空间兼容。通过根据视觉历史预测状态条件残差更新 ($Δ$)，CAST 为潜在状态演化引入了显式归纳偏差。大量实验表明，CAST 提高了 YouCook2 和 CrossTask 上的性能，在 COIN 上保持竞争力，并且在不同的基础主干上始终优于零样本基线。此外，CAST 为黑盒视频生成候选（例如，来自 Veo）提供了有用的重新排序信号，促进时间上更加一致的连续性。

</details>

---

## 18. StreamReady: Learning What to Answer and When in Long Streaming Videos / StreamReady：学习在长流视频中回答什么以及何时回答

**Date**: 2026-03-09 | **arXiv**: [2603.08620v1](http://arxiv.org/abs/2603.08620v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08620v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Streaming video understanding often involves time-sensitive scenarios where models need to answer exactly when the supporting visual evidence appears: answering before the evidence reflects speculation, answering after it has passed reduces real-time utility. To capture this behavior, we introduce a readiness-aware formulation of streaming video understanding with the Answer Readiness Score (ARS), a timing-aware objective with asymmetric early and late penalties. When combined with correctness, ARS defines an effective accuracy that measures not just whether a model is right, but whether it answers at the appropriate moment. Building on this formulation, we introduce StreamReady, a framework to unify temporal reasoning with on-time answering through a lightweight readiness mechanism that decides if sufficient evidence has been observed before responding. To evaluate this capability, we further introduce ProReady-QA, a benchmark with annotated answer evidence windows and proactive multi-turn questions across local and global contexts. StreamReady achieves superior performance on ProReady-QA, and consistently outperforms prior methods across eight additional streaming and offline long-video benchmarks, demonstrating robust and broadly generalizable video understanding capability.

流视频理解通常涉及时间敏感的场景，其中模型需要在支持的视觉证据出现时准确回答：在证据反映猜测之前回答，在证据通过之后回答会降低实时效用。为了捕捉这种行为，我们引入了一种流媒体视频理解的就绪感知公式，其中包括答案就绪分数（ARS），这是一个具有不对称早期和晚期惩罚的时间感知目标。当与正确性相结合时，ARS 定义了有效的准确性，不仅衡量模型是否正确，而且衡量模型是否在适当的时刻给出答案。在此基础上，我们引入了 StreamReady，这是一个框架，通过轻量级准备机制来统一时间推理和按时回答，该机制决定在响应之前是否观察到足够的证据。为了评估这种能力，我们进一步引入了 ProReady-QA，这是一个基准，具有带注释的答案证据窗口和跨本地和全球上下文的主动多轮问题。 StreamReady 在 ProReady-QA 上实现了卓越的性能，并且在八个额外的流媒体和离线长视频基准测试中始终优于先前的方法，展示了强大且广泛通用的视频理解能力。

</details>

---

## 19. Interactive World Simulator for Robot Policy Training and Evaluation / 用于机器人政策培训和评估的交互式世界模拟器

**Date**: 2026-03-09 | **arXiv**: [2603.08546v1](http://arxiv.org/abs/2603.08546v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08546v1)

**Categories**: cs.RO, cs.CV, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Action-conditioned video prediction models (often referred to as world models) have shown strong potential for robotics applications, but existing approaches are often slow and struggle to capture physically consistent interactions over long horizons, limiting their usefulness for scalable robot policy training and evaluation. We present Interactive World Simulator, a framework for building interactive world models from a moderate-sized robot interaction dataset. Our approach leverages consistency models for both image decoding and latent-space dynamics prediction, enabling fast and stable simulation of physical interactions. In our experiments, the learned world models produce interaction-consistent pixel-level predictions and support stable long-horizon interactions for more than 10 minutes at 15 FPS on a single RTX 4090 GPU. Our framework enables scalable demonstration collection solely within the world models to train state-of-the-art imitation policies. Through extensive real-world evaluation across diverse tasks involving rigid objects, deformable objects, object piles, and their interactions, we find that policies trained on world-model-generated data perform comparably to those trained on the same amount of real-world data. Additionally, we evaluate policies both within the world models and in the real world across diverse tasks, and observe a strong correlation between simulated and real-world performance. Together, these results establish the Interactive World Simulator as a stable and physically consistent surrogate for scalable robotic data generation and faithful, reproducible policy evaluation.

动作条件视频预测模型（通常称为世界模型）在机器人应用中显示出强大的潜力，但现有方法通常速度缓慢，并且难以捕获长范围内物理一致的交互，从而限制了它们在可扩展机器人策略训练和评估中的有用性。我们提出了交互式世界模拟器，这是一个用于从中等大小的机器人交互数据集构建交互式世界模型的框架。我们的方法利用一致性模型进行图像解码和潜在空间动态预测，从而实现快速稳定的物理交互模拟。在我们的实验中，学习的世界模型可生成交互一致的像素级预测，并在单个 RTX 4090 GPU 上以 15 FPS 的速度支持稳定的长视野交互超过 10 分钟。我们的框架可以仅在世界模型中进行可扩展的演示收集，以训练最先进的模仿策略。通过对涉及刚性物体、可变形物体、物体堆及其相互作用的各种任务进行广泛的现实世界评估，我们发现根据世界模型生成的数据训练的策略与根据相同数量的现实世界数据训练的策略的表现相当。此外，我们还评估了世界模型中和现实世界中不同任务的政策，并观察到模拟和现实世界表现之间的强相关性。总之，这些结果使交互式世界模拟器成为稳定且物理一致的替代品，用于可扩展的机器人数据生成和忠实、可重复的政策评估。

</details>

---

## 20. SWIFT: Sliding Window Reconstruction for Few-Shot Training-Free Generated Video Attribution / SWIFT：用于少镜头训练生成视频归因的滑动窗口重建

**Date**: 2026-03-09 | **arXiv**: [2603.08536v1](http://arxiv.org/abs/2603.08536v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08536v1)

**Categories**: cs.CV

**Code**: https://github.com/wangchao0708/SWIFT.

<details><summary><b>Abstract / 摘要</b></summary>

Recent advancements in video generation technologies have been significant, resulting in their widespread application across multiple domains. However, concerns have been mounting over the potential misuse of generated content. Tracing the origin of generated videos has become crucial to mitigate potential misuse and identify responsible parties. Existing video attribution methods require additional operations or the training of source attribution models, which may degrade video quality or necessitate large amounts of training samples. To address these challenges, we define for the first time the "few-shot training-free generated video attribution" task and propose SWIFT, which is tightly integrated with the temporal characteristics of the video. By leveraging the "Pixel Frames(many) to Latent Frame(one)" temporal mapping within each video chunk, SWIFT applies a fixed-length sliding window to perform two distinct reconstructions: normal and corrupted. The variation in the losses between two reconstructions is then used as an attribution signal. We conducted an extensive evaluation of five state-of-the-art (SOTA) video generation models. Experimental results show that SWIFT achieves over 90% average attribution accuracy with merely 20 video samples across all models and even enables zero-shot attribution for HunyuanVideo, EasyAnimate, and Wan2.2. Our source code is available at https://github.com/wangchao0708/SWIFT.

视频生成技术的最新进展非常显着，导致其在多个领域得到广泛应用。然而，人们越来越担心生成内容可能被滥用。追踪生成视频的来源对于减少潜在的滥用和识别责任方至关重要。现有的视频归因方法需要额外的操作或源归因模型的训练，这可能会降低视频质量或需要大量的训练样本。为了应对这些挑战，我们首次定义了“少镜头免训练生成视频归因”任务，并提出了与视频时间特征紧密结合的 SWIFT。通过利用每个视频块内的“像素帧（许多）到潜在帧（一个）”时间映射，SWIFT 应用固定长度滑动窗口来执行两种不同的重建：正常重建和损坏重建。然后将两次重建之间的损失变化用作归因信号。我们对五种最先进的 (SOTA) 视频生成模型进行了广泛的评估。实验结果表明，SWIFT 在所有模型中仅用 20 个视频样本就实现了超过 90% 的平均归因准确率，甚至实现了 HunyuanVideo、EasyAnimate 和 Wan2.2 的零镜头归因。我们的源代码可从 https://github.com/wangchao0708/SWIFT 获取。

</details>

---

## 21. Can Vision-Language Models Solve the Shell Game? / 视觉语言模型能解决猜壳游戏吗？

**Date**: 2026-03-09 | **arXiv**: [2603.08436v1](http://arxiv.org/abs/2603.08436v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08436v1)

**Categories**: cs.CV, cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

Visual entity tracking is an innate cognitive ability in humans, yet it remains a critical bottleneck for Vision-Language Models (VLMs). This deficit is often obscured in existing video benchmarks by visual shortcuts. We introduce VET-Bench, a synthetic diagnostic testbed featuring visually identical objects that necessitate tracking exclusively through spatiotemporal continuity. Our experiments reveal that current state-of-the-art VLMs perform at or near chance level on VET-Bench, exposing a fundamental limitation: an over-reliance on static frame-level features and a failure to maintain entity representations over time. We provide a theoretical analysis drawing connections to the state-tracking problem, proving that fixed-depth transformer-based VLMs are fundamentally limited in tracking indistinguishable objects without intermediate supervision due to expressivity constraints. To address this, we propose Spatiotemporal Grounded Chain-of-Thought (SGCoT): generating object trajectories as explicit intermediate states. Leveraging Molmo2's object tracking ability, we elicit SGCoT reasoning by fine-tuning on synthesized text-only data for alignment. Our method achieves state-of-the-art accuracy exceeding 90% on VET-Bench, demonstrating that VLMs can reliably solve the video shell-game task end-to-end without external tools. Our code and data are available at https://vetbench.github.io .

视觉实体跟踪是人类与生俱来的认知能力，但它仍然是视觉语言模型（VLM）的关键瓶颈。在现有的视频基准测试中，这种缺陷常常被视觉快捷方式所掩盖。我们推出了 VET-Bench，这是一种综合诊断测试平台，具有视觉上相同的物体，需要专门通过时空连续性进行跟踪。我们的实验表明，当前最先进的 VLM 在 VET-Bench 上的表现达到或接近随机水平，暴露了一个基本限制：过度依赖静态帧级特征，并且无法随着时间的推移维护实体表示。我们提供了与状态跟踪问题的联系的理论分析，证明由于表达能力的限制，基于固定深度变压器的 VLM 在没有中间监督的情况下跟踪难以区分的对象从根本上受到限制。为了解决这个问题，我们提出了时空接地思想链（SGCoT）：生成对象轨迹作为明确的中间状态。利用 Molmo2 的对象跟踪能力，我们通过对合成的纯文本数据进行微调以进行对齐来引发 SGCoT 推理。我们的方法在 VET-Bench 上达到了超过 90% 的最先进准确率，这表明 VLM 无需外部工具即可可靠地端到端解决视频 shell 游戏任务。我们的代码和数据可在 https://vetbench.github.io 获取。

</details>

---

## 22. SPIRAL: A Closed-Loop Framework for Self-Improving Action World Models via Reflective Planning Agents / SPIRAL：通过反思性规划代理自我改进行动世界模型的闭环框架

**Date**: 2026-03-09 | **arXiv**: [2603.08403v1](http://arxiv.org/abs/2603.08403v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08403v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We introduce SPIRAL, a self-improving planning and iterative reflective action world modeling closed-loop framework that enables controllable long-horizon video generation conditioned on high-level semantic actions. Existing one-shot video generation models operate in open-loop, often resulting in incomplete action execution, weak semantic grounding, and temporal drift. SPIRAL formulates ActWM as a closed-loop think-act-reflect process, where generation proceeds step by step under explicit planning and feedback. A PlanAgent decomposes abstract actions into object-centric sub-actions, while a CriticAgent evaluates intermediate results and guides iterative refinement with long-horizon memory. This closed-loop design naturally supports RL evolving optimization, improving semantic alignment and temporal consistency over extended horizons. We further introduce the ActWM-Dataset and ActWM-Bench for training and evaluation. Experiments across multiple TI2V backbones demonstrate consistent gains on ActWM-Bench and mainstream video generation benchmarks, validating SPIRAL's effectiveness.

我们引入了 SPIRAL，这是一种自我改进的规划和迭代反射动作世界建模闭环框架，可以实现以高级语义动作为条件的可控长视野视频生成。现有的一次性视频生成模型以开环方式运行，通常会导致动作执行不完整、语义基础薄弱和时间漂移。 SPIRAL 将 ActWM 制定为一个闭环的思考-行动-反思过程，在明确的规划和反馈下逐步进行生成。 PlanAgent 将抽象操作分解为以对象为中心的子操作，而 CriticAgent 评估中间结果并通过长视野内存指导迭代细化。这种闭环设计自然支持 RL 不断演进的优化，提高语义对齐和扩展范围内的时间一致性。我们进一步引入 ActWM-Dataset 和 ActWM-Bench 进行训练和评估。跨多个 TI2V 主干网的实验证明了 ActWM-Bench 和主流视频生成基准的一致增益，验证了 SPIRAL 的有效性。

</details>

---



</details>

<details><summary><b>2026-03-10 (12 papers)</b></summary>

# arXiv Video Papers - 2026-03-10

**Paper Count**: 12

---

## 1. Video2LoRA: Unified Semantic-Controlled Video Generation via Per-Reference-Video LoRA / Video2LoRA：通过每个参考视频 LoRA 生成统一语义控制视频

**Date**: 2026-03-09 | **arXiv**: [2603.08210v1](http://arxiv.org/abs/2603.08210v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08210v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Achieving semantic alignment across diverse video generation conditions remains a significant challenge. Methods that rely on explicit structural guidance often enforce rigid spatial constraints that limit semantic flexibility, whereas models tailored for individual control types lack interoperability and adaptability. These design bottlenecks hinder progress toward flexible and efficient semantic video generation. To address this, we propose Video2LoRA, a scalable and generalizable framework for semantic-controlled video generation that conditions on a reference video. Video2LoRA employs a lightweight hypernetwork to predict personalized LoRA weights for each semantic input, which are combined with auxiliary matrices to form adaptive LoRA modules integrated into a frozen diffusion backbone. This design enables the model to generate videos consistent with the reference semantics while preserving key style and content variations, eliminating the need for any per-condition training. Notably, the final model weights less than 150MB, making it highly efficient for storage and deployment. Video2LoRA achieves coherent, semantically aligned generation across diverse conditions and exhibits strong zero-shot generalization to unseen semantics.

在不同的视频生成条件下实现语义对齐仍然是一个重大挑战。依赖于显式结构指导的方法通常会强制执行严格的空间约束，从而限制了语义灵活性，而为各个控制类型量身定制的模型缺乏互操作性和适应性。这些设计瓶颈阻碍了灵活高效的语义视频生成的进展。为了解决这个问题，我们提出了 Video2LoRA，这是一种可扩展且可泛化的框架，用于以参考视频为条件的语义控制视频生成。 Video2LoRA 采用轻量级超网络来预测每个语义输入的个性化 LoRA 权重，这些权重与辅助矩阵相结合，形成集成到冻结扩散主干中的自适应 LoRA 模块。这种设计使模型能够生成与参考语义一致的视频，同时保留关键风格和内容变化，从而无需进行任何按条件训练。值得注意的是，最终模型的重量小于 150MB，使其存储和部署非常高效。 Video2LoRA 在不同条件下实现了连贯、语义对齐的生成，并对未见语义表现出强大的零样本泛化能力。

</details>

---

## 2. Controllable Complex Human Motion Video Generation via Text-to-Skeleton Cascades / 通过文本到骨架级联生成可控的复杂人体运动视频

**Date**: 2026-03-09 | **arXiv**: [2603.08028v1](http://arxiv.org/abs/2603.08028v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08028v1)

**Categories**: cs.CV, cs.MM

<details><summary><b>Abstract / 摘要</b></summary>

Generating videos of complex human motions such as flips, cartwheels, and martial arts remains challenging for current video diffusion models. Text-only conditioning is temporally ambiguous for fine-grained motion control, while explicit pose-based controls, though effective, require users to provide complete skeleton sequences that are costly to produce for long and dynamic actions.   We propose a two-stage cascaded framework that addresses both limitations. First, an autoregressive text-to-skeleton model generates 2D pose sequences from natural language descriptions by predicting each joint conditioned on previously generated poses. This design captures long-range temporal dependencies and inter-joint coordination required for complex motions. Second, a pose-conditioned video diffusion model synthesizes videos from a reference image and the generated skeleton sequence. It employs DINO-ALF (Adaptive Layer Fusion), a multi-level reference encoder that preserves appearance and clothing details under large pose changes and self-occlusions.   To address the lack of publicly available datasets for complex human motion video generation, we introduce a Blender-based synthetic dataset containing 2,000 videos with diverse characters performing acrobatic and stunt-like motions. The dataset provides full control over appearance, motion, and environment. It fills an important gap because existing benchmarks significantly under-represent acrobatic motions while web-collected datasets raise copyright and privacy concerns.   Experiments on our synthetic dataset and the Motion-X Fitness benchmark show that our text-to-skeleton model outperforms prior methods on FID, R-precision, and motion diversity. Our pose-to-video model also achieves the best results among all compared methods on VBench metrics for temporal consistency, motion smoothness, and subject preservation.

对于当前的视频传播模型来说，生成复杂的人体动作（例如空翻、侧手翻和武术）的视频仍然具有挑战性。对于细粒度的运动控制来说，纯文本调节在时间上是不明确的，而基于姿势的显式控制虽然有效，但要求用户提供完整的骨架序列，而对于长动态动作来说，这些序列的生产成本很高。   我们提出了一个两阶段级联框架来解决这两个限制。首先，自回归文本到骨架模型通过预测以先前生成的姿势为条件的每个关节，从自然语言描述生成 2D 姿势序列。该设计捕获了复杂运动所需的长程时间依赖性和关节间协调。其次，姿势条件视频扩散模型从参考图像和生成的骨架序列合成视频。它采用 DINO-ALF（自适应层融合），这是一种多级参考编码器，可在大姿势变化和自遮挡下保留外观和服装细节。   为了解决缺乏用于复杂人体运动视频生成的公开数据集的问题，我们引入了一个基于 Blender 的合成数据集，其中包含 2,000 个视频，其中包含执行杂技和特技动作的不同角色。该数据集提供对外观、运动和环境的完全控制。它填补了一个重要的空白，因为现有的基准明显低估了杂技动作，而网络收集的数据集引发了版权和隐私问题。   对我们的合成数据集和 Motion-X Fitness 基准测试的实验表明，我们的文本到骨架模型在 FID、R 精度和运动多样性方面优于先前的方法。我们的姿势到视频模型还在时间一致性、运动平滑度和主题保留方面的 VBench 指标的所有比较方法中取得了最佳结果。

</details>

---

## 3. Not Like Transformers: Drop the Beat Representation for Dance Generation with Mamba-Based Diffusion Model / 与《变形金刚》不同：使用基于曼巴的扩散模型放弃舞蹈生成的节拍表示

**Date**: 2026-03-09 | **arXiv**: [2603.08023v1](http://arxiv.org/abs/2603.08023v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.08023v1)

**Categories**: cs.CV, cs.AI, cs.GR, cs.SD

<details><summary><b>Abstract / 摘要</b></summary>

Dance is a form of human motion characterized by emotional expression and communication, playing a role in various fields such as music, virtual reality, and content creation. Existing methods for dance generation often fail to adequately capture the inherently sequential, rhythmical, and music-synchronized characteristics of dance. In this paper, we propose \emph{MambaDance}, a new dance generation approach that leverages a Mamba-based diffusion model. Mamba, well-suited to handling long and autoregressive sequences, is integrated into our two-stage diffusion architecture, substituting off-the-shelf Transformer. Additionally, considering the critical role of musical beats in dance choreography, we propose a Gaussian-based beat representation to explicitly guide the decoding of dance sequences. Experiments on AIST++ and FineDance datasets for each sequence length show that our proposed method effectively generates plausible dance movements while reflecting essential characteristics, consistently from short to long dances, compared to the previous methods. Additional qualitative results and demo videos are available at \small{https://vision3d-lab.github.io/mambadance}.

舞蹈是一种以情感表达和交流为特征的人类运动形式，在音乐、虚拟现实、内容创作等各个领域发挥着作用。现有的舞蹈生成方法常常无法充分捕捉舞蹈固有的顺序性、节奏性和音乐同步性特征。在本文中，我们提出了 \emph{MambaDance}，一种利用基于 Mamba 的扩散模型的新舞蹈生成方法。 Mamba 非常适合处理长序列和自回归序列，已集成到我们的两级扩散架构中，取代了现成的 Transformer。此外，考虑到音乐节拍在舞蹈编排中的关键作用，我们提出了一种基于高斯的节拍表示来明确指导舞蹈序列的解码。对每个序列长度的 AIST++ 和 FineDance 数据集进行的实验表明，与以前的方法相比，我们提出的方法可以有效地生成合理的舞蹈动作，同时反映从短到长的舞蹈一致的基本特征。其他定性结果和演示视频可在 \small{https://vision3d-lab.github.io/mambadance} 获取。

</details>

---

## 4. Geometric Transformation-Embedded Mamba for Learned Video Compression / 用于学习视频压缩的几何变换嵌入式 Mamba

**Date**: 2026-03-09 | **arXiv**: [2603.07912v1](http://arxiv.org/abs/2603.07912v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07912v1)

**Categories**: cs.CV

**Code**: https://github.com/cshw2021/GTEM-LVC.

<details><summary><b>Abstract / 摘要</b></summary>

Although learned video compression methods have exhibited outstanding performance, most of them typically follow a hybrid coding paradigm that requires explicit motion estimation and compensation, resulting in a complex solution for video compression. In contrast, we introduce a streamlined yet effective video compression framework founded on a direct transform strategy, i.e., nonlinear transform, quantization, and entropy coding. We first develop a cascaded Mamba module (CMM) with different embedded geometric transformations to effectively explore both long-range spatial and temporal dependencies. To improve local spatial representation, we introduce a locality refinement feed-forward network (LRFFN) that incorporates a hybrid convolution block based on difference convolutions. We integrate the proposed CMM and LRFFN into the encoder and decoder of our compression framework. Moreover, we present a conditional channel-wise entropy model that effectively utilizes conditional temporal priors to accurately estimate the probability distributions of current latent features. Extensive experiments demonstrate that our method outperforms state-of-the-art video compression approaches in terms of perceptual quality and temporal consistency under low-bitrate constraints. Our source codes and models will be available at https://github.com/cshw2021/GTEM-LVC.

尽管学习的视频压缩方法表现出了出色的性能，但它们中的大多数通常遵循需要显式运动估计和补偿的混合编码范例，从而导致视频压缩解决方案复杂。相比之下，我们引入了一种基于直接变换策略（即非线性变换、量化和熵编码）的简化而有效的视频压缩框架。我们首先开发了一个具有不同嵌入式几何变换的级联 Mamba 模块（CMM），以有效地探索远程空间和时间依赖性。为了改善局部空间表示，我们引入了局部细化前馈网络（LRFFN），该网络结合了基于差分卷积的混合卷积块。我们将所提出的 CMM 和 LRFFN 集成到我们的压缩框架的编码器和解码器中。此外，我们提出了一种条件通道熵模型，该模型有效地利用条件时间先验来准确估计当前潜在特征的概率分布。大量的实验表明，我们的方法在低比特率限制下的感知质量和时间一致性方面优于最先进的视频压缩方法。我们的源代码和模型将在 https://github.com/cshw2021/GTEM-LVC 上提供。

</details>

---

## 5. Training-free Temporal Object Tracking in Surgical Videos / 手术视频中的免训练时间对象跟踪

**Date**: 2026-03-08 | **arXiv**: [2603.07839v1](http://arxiv.org/abs/2603.07839v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07839v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Purpose: In this paper, we present a novel approach for online object tracking in laparoscopic cholecystectomy (LC) surgical videos, targeting localisation and tracking of critical anatomical structures and instruments. Our method addresses the challenges of costly pixel-level annotations and label inconsistencies inherent in existing datasets.   Methods: Leveraging the inherent object localisation capabilities of pre-trained text-to-image diffusion models, we extract representative features from surgical frames without any training or fine-tuning. Our tracking framework uses these features, along with cross-frame interactions via an affinity matrix inspired by query-key-value attention, to ensure temporal continuity in the tracking process.   Results: Through a pilot study, we first demonstrate that diffusion features exhibit superior object localisation and consistent semantics across different decoder levels and temporal frames. Later, we perform extensive experiments to validate the effectiveness of our approach, showcasing its superiority over competitors for the task of temporal object tracking. Specifically, we achieve a per-pixel classification accuracy of 79.19%, mean Jaccard Score of 56.20%, and mean F-Score of 79.48% on the publicly available CholeSeg8K dataset.   Conclusion: Our work not only introduces a novel application of text-to-image diffusion models but also contributes to advancing the field of surgical video analysis, offering a promising avenue for accurate and cost-effective temporal object tracking in minimally invasive surgery videos.

目的：在本文中，我们提出了一种腹腔镜胆囊切除术（LC）手术视频中在线对象跟踪的新方法，针对关键解剖结构和器械的定位和跟踪。我们的方法解决了现有数据集中固有的昂贵的像素级注释和标签不一致的挑战。   方法：利用预训练的文本到图像扩散模型固有的对象定位功能，我们从手术帧中提取代表性特征，而无需任何训练或微调。我们的跟踪框架使用这些功能，以及通过受查询键值注意启发的亲和力矩阵进行跨框架交互，以确保跟踪过程中的时间连续性。   结果：通过试点研究，我们首先证明扩散特征在不同的解码器级别和时间帧中表现出卓越的对象定位和一致的语义。随后，我们进行了广泛的实验来验证我们的方法的有效性，展示了其在时间对象跟踪任务上相对于竞争对手的优越性。具体来说，我们在公开的 CholeSeg8K 数据集上实现了 79.19% 的每像素分类准确率、56.20% 的平均 Jaccard 分数和 79.48% 的平均 F 分数。   结论：我们的工作不仅介绍了文本到图像扩散模型的新颖应用，而且还有助于推进手术视频分析领域，为微创手术视频中准确且经济有效的时间对象跟踪提供了一条有前途的途径。

</details>

---

## 6. TDM-R1: Reinforcing Few-Step Diffusion Models with Non-Differentiable Reward / TDM-R1：用不可微分奖励强化少步扩散模型

**Date**: 2026-03-08 | **arXiv**: [2603.07700v1](http://arxiv.org/abs/2603.07700v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07700v1)

**Categories**: cs.CV, cs.AI

**Code**: https://github.com/Luo-Yihong/TDM-R1

<details><summary><b>Abstract / 摘要</b></summary>

While few-step generative models have enabled powerful image and video generation at significantly lower cost, generic reinforcement learning (RL) paradigms for few-step models remain an unsolved problem. Existing RL approaches for few-step diffusion models strongly rely on back-propagating through differentiable reward models, thereby excluding the majority of important real-world reward signals, e.g., non-differentiable rewards such as humans' binary likeness, object counts, etc. To properly incorporate non-differentiable rewards to improve few-step generative models, we introduce TDM-R1, a novel reinforcement learning paradigm built upon a leading few-step model, Trajectory Distribution Matching (TDM). TDM-R1 decouples the learning process into surrogate reward learning and generator learning. Furthermore, we developed practical methods to obtain per-step reward signals along the deterministic generation trajectory of TDM, resulting in a unified RL post-training method that significantly improves few-step models' ability with generic rewards. We conduct extensive experiments ranging from text-rendering, visual quality, and preference alignment. All results demonstrate that TDM-R1 is a powerful reinforcement learning paradigm for few-step text-to-image models, achieving state-of-the-art reinforcement learning performances on both in-domain and out-of-domain metrics. Furthermore, TDM-R1 also scales effectively to the recent strong Z-Image model, consistently outperforming both its 100-NFE and few-step variants with only 4 NFEs. Project page: https://github.com/Luo-Yihong/TDM-R1

虽然少步生成模型能够以显着降低的成本生成强大的图像和视频，但少步模型的通用强化学习（RL）范式仍然是一个未解决的问题。现有的用于少步扩散模型的强化学习方法强烈依赖于通过可微奖励模型进行反向传播，从而排除了大多数重要的现实世界奖励信号，例如不可微奖励，例如人类的二元相似性、物体计数等。为了正确合并不可微奖励来改进少步生成模型，我们引入了 TDM-R1，这是一种基于领先的少步模型轨迹分布匹配（TDM）构建的新型强化学习范式。 TDM-R1 将学习过程解耦为代理奖励学习和生成器学习。此外，我们开发了实用方法来沿着 TDM 的确定性生成轨迹获取每步奖励信号，从而形成统一的 RL 后训练方法，显着提高了少步模型具有通用奖励的能力。我们进行了广泛的实验，包括文本渲染、视觉质量和偏好对齐。所有结果都表明，TDM-R1 是一种强大的强化学习范式，适用于少步文本到图像模型，在域内和域外指标上均实现了最先进的强化学习性能。此外，TDM-R1 还可以有效地扩展到最近强大的 Z-Image 模型，始终优于其 100-NFE 和只有 4 个 NFE 的少步变体。项目页面：https://github.com/Luo-Yihong/TDM-R1

</details>

---

## 7. Compressed-Domain-Aware Online Video Super-Resolution / 压缩域感知在线视频超分辨率

**Date**: 2026-03-08 | **arXiv**: [2603.07694v1](http://arxiv.org/abs/2603.07694v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07694v1)

**Categories**: cs.CV, cs.AI

**Code**: https://github.com/sspBIT/CDA-VSR.

<details><summary><b>Abstract / 摘要</b></summary>

In bandwidth-limited online video streaming, videos are usually downsampled and compressed. Although recent online video super-resolution (online VSR) approaches achieve promising results, they are still compute-intensive and fall short of real-time processing at higher resolutions, due to complex motion estimation for alignment and redundant processing of consecutive frames. To address these issues, we propose a compressed-domain-aware network (CDA-VSR) for online VSR, which utilizes compressed-domain information, including motion vectors, residual maps, and frame types to balance quality and efficiency. Specifically, we propose a motion-vector-guided deformable alignment module that uses motion vectors for coarse warping and learns only local residual offsets for fine-tuned adjustments, thereby maintaining accuracy while reducing computation. Then, we utilize a residual map gated fusion module to derive spatial weights from residual maps, suppressing mismatched regions and emphasizing reliable details. Further, we design a frame-type-aware reconstruction module for adaptive compute allocation across frame types, balancing accuracy and efficiency. On the REDS4 dataset, our CDA-VSR surpasses the state-of-the-art method TMP, with a maximum PSNR improvement of 0.13 dB while delivering more than double the inference speed. The code will be released at https://github.com/sspBIT/CDA-VSR.

在带宽有限的在线视频流中，视频通常会被下采样和压缩。尽管最近的在线视频超分辨率（在线VSR）方法取得了可喜的结果，但由于对齐的复杂运动估计和连续帧的冗余处理，它们仍然是计算密集型的，并且无法实现更高分辨率的实时处理。为了解决这些问题，我们提出了一种用于在线 VSR 的压缩域感知网络（CDA-VSR），它利用压缩域信息（包括运动向量、残差图和帧类型）来平衡质量和效率。具体来说，我们提出了一种运动矢量引导的可变形对齐模块，该模块使用运动矢量进行粗略变形，并仅学习局部残差偏移以进行微调调整，从而在减少计算量的同时保持精度。然后，我们利用残差图门控融合模块从残差图导出空间权重，抑制不匹配的区域并强调可靠的细节。此外，我们设计了一个帧类型感知重建模块，用于跨帧类型的自适应计算分配，平衡准确性和效率。在 REDS4 数据集上，我们的 CDA-VSR 超越了最先进的方法 TMP，最大 PSNR 提高了 0.13 dB，同时推理速度提高了一倍以上。该代码将在 https://github.com/sspBIT/CDA-VSR 发布。

</details>

---

## 8. Compression as Adaptation: Implicit Visual Representation with Diffusion Foundation Models / 压缩作为适应：使用扩散基础模型的隐式视觉表示

**Date**: 2026-03-08 | **arXiv**: [2603.07615v1](http://arxiv.org/abs/2603.07615v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07615v1)

**Categories**: cs.LG, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Modern visual generative models acquire rich visual knowledge through large-scale training, yet existing visual representations (such as pixels, latents, or tokens) remain external to the model and cannot directly exploit this knowledge for compact storage or reuse. In this work, we introduce a new visual representation framework that encodes a signal as a function, which is parametrized by low-rank adaptations attached to a frozen visual generative model. Such implicit representations of visual signals, \textit{e.g.}, an 81-frame video, can further be hashed into a single compact vector, achieving strong perceptual video compression at extremely low bitrates. Beyond basic compression, the functional nature of this representation enables inference-time scaling and control, allowing additional refinement on the compression performance. More broadly, as the implicit representations directly act as a function of the generation process, this suggests a unified framework bridging visual compression and generation.

现代视觉生成模型通过大规模训练获得丰富的视觉知识，但现有的视觉表示（例如像素、潜在特征或标记）仍然位于模型外部，无法直接利用这些知识进行紧凑存储或重用。在这项工作中，我们引入了一种新的视觉表示框架，它将信号编码为函数，该函数通过附加到冻结视觉生成模型的低阶适应进行参数化。这种视觉信号的隐式表示，例如 81 帧视频，可以进一步散列成单个紧凑向量，以极低的比特率实现强大的感知视频压缩。除了基本压缩之外，这种表示的功能性质还支持推理时间缩放和控制，从而允许对压缩性能进行额外的改进。更广泛地说，由于隐式表示直接充当生成过程的函数，这表明桥接视觉压缩和生成的统一框架。

</details>

---

## 9. SiamGM: Siamese Geometry-Aware and Motion-Guided Network for Real-Time Satellite Video Object Tracking / SiamGM：用于实时卫星视频对象跟踪的连体几何感知和运动引导网络

**Date**: 2026-03-08 | **arXiv**: [2603.07564v1](http://arxiv.org/abs/2603.07564v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07564v1)

**Categories**: cs.CV

**Code**: https://github.com/wenzx18/SiamGM.

<details><summary><b>Abstract / 摘要</b></summary>

Single object tracking in satellite videos is inherently challenged by small target, blurred background, large aspect ratio changes, and frequent visual occlusions. These constraints often cause appearance-based trackers to accumulate errors and lose targets irreversibly. To systematically mitigate both spatial ambiguities and temporal information loss, we propose SiamGM, a novel geometry-aware and motion-guided Siamese network. From a spatial perspective, we introduce an Inter-Frame Graph Attention (IFGA) module, closely integrated with an Aspect Ratio-Constrained Label Assignment (LA) method, establishing fine-grained topological correspondences and explicitly preventing surrounding background noise. From a temporal perspective, we introduce the Motion Vector-Guided Online Tracking Optimization method. By adopting the Normalized Peak-to-Sidelobe Ratio (nPSR) as a dynamic confidence indicator, we propose an Online Motion Model Refinement (OMMR) strategy to utilize historical trajectory information. Evaluations on two challenging SatSOT and SV248S benchmarks confirm that SiamGM outperforms most state-of-the-art trackers in both precision and success metrics. Notably, the proposed components of SiamGM introduce virtually no computational overhead, enabling real-time tracking at 130 frames per second (FPS). Codes and tracking results are available at https://github.com/wenzx18/SiamGM.

卫星视频中的单个目标跟踪本质上受到小目标、模糊背景、大纵横比变化和频繁视觉遮挡的挑战。这些限制通常会导致基于外观的跟踪器累积错误并不可逆转地丢失目标。为了系统地减轻空间模糊性和时间信息丢失，我们提出了 SiamGM，一种新颖的几何感知和运动引导的 Siamese 网络。从空间角度来看，我们引入了帧间图注意（IFGA）模块，与长宽比约束标签分配（LA）方法紧密结合，建立细粒度的拓扑对应关系并明确防止周围的背景噪声。从时间的角度来看，我们介绍了运动矢量引导的在线跟踪优化方法。通过采用归一化峰旁瓣比（nPSR）作为动态置信度指标，我们提出了一种在线运动模型细化（OMMR）策略来利用历史轨迹信息。对两个具有挑战性的 SatSOT 和 SV248S 基准的评估证实，SiamGM 在精度和成功指标方面均优于大多数最先进的跟踪器。值得注意的是，SiamGM 的拟议组件几乎不引入任何计算开销，能够以每秒 130 帧 (FPS) 的速度进行实时跟踪。代码和跟踪结果可在 https://github.com/wenzx18/SiamGM 获取。

</details>

---

## 10. Image Generation Models: A Technical History / 图像生成模型：技术史

**Date**: 2026-03-08 | **arXiv**: [2603.07455v1](http://arxiv.org/abs/2603.07455v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07455v1)

**Categories**: cs.CV, cs.AI, cs.CL, cs.GR

<details><summary><b>Abstract / 摘要</b></summary>

Image generation has advanced rapidly over the past decade, yet the literature seems fragmented across different models and application domains. This paper aims to offer a comprehensive survey of breakthrough image generation models, including variational autoencoders (VAEs), generative adversarial networks (GANs), normalizing flows, autoregressive and transformer-based generators, and diffusion-based methods. We provide a detailed technical walkthrough of each model type, including their underlying objectives, architectural building blocks, and algorithmic training steps. For each model type, we present the optimization techniques as well as common failure modes and limitations. We also go over recent developments in video generation and present the research works that made it possible to go from still frames to high quality videos. Lastly, we cover the growing importance of robustness and responsible deployment of these models, including deepfake risks, detection, artifacts, and watermarking.

图像生成在过去十年中发展迅速，但文献似乎分散在不同的模型和应用领域。本文旨在对突破性图像生成模型进行全面调查，包括变分自动编码器（VAE）、生成对抗网络（GAN）、归一化流、自回归和基于变压器的生成器以及基于扩散的方法。我们提供每种模型类型的详细技术演练，包括其基本目标、架构构建块和算法训练步骤。对于每种模型类型，我们都会介绍优化技术以及常见的故障模式和限制。我们还回顾了视频生成的最新发展，并介绍了使从静止帧到高质量视频成为可能的研究工作。最后，我们介绍了这些模型的稳健性和负责任的部署日益重要，包括深度造假风险、检测、伪影和水印。

</details>

---

## 11. VIVECaption: A Split Approach to Caption Quality Improvement / VIVECaption：提高字幕质量的分步方法

**Date**: 2026-03-08 | **arXiv**: [2603.07401v1](http://arxiv.org/abs/2603.07401v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07401v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Caption quality has emerged as a critical bottleneck in training high-quality text-to-image (T2I) and text-to-video (T2V) generative models. While visual language models (VLMs) are commonly deployed to generate captions from visual data, they suffer from hallucinations, poor compositional reasoning, and limited fine-grained understanding, resulting in misaligned image-caption pairs that degrade downstream model performance. This technical report introduces VIVECaption, a systematic two-sided approach to caption quality improvement. We first establish a comprehensive taxonomy of caption evaluation metrics, distinguishing between "universal" and "instance-grounded" metrics, with the ultimate goal of showcasing the use-cases and tradeoffs between different caption quality metrics. We then use this language to describe our two-sided approach to caption quality improvement: (1) a gold-standard dataset creation methodology using stratified sampling and (2) a model alignment strategy encompassing context alignment and parameter-level finetuning using SFT. We demonstrate our methodology on open-source models, focusing on structured caption formats that enable better parsing and downstream utilization. We ultimately show that using a finetuned character detection model in an image captioning pipeline significantly improves holistic image-caption alignment quality. Our work addresses the growing need for high-quality "vegan" training data in enterprise AI development, providing practical solutions for teams seeking to improve caption-image alignment without relying on potentially copyright-protected web-scraped content.

字幕质量已成为训练高质量文本到图像（T2I）和文本到视频（T2V）生成模型的关键瓶颈。虽然视觉语言模型 (VLM) 通常用于从视觉数据生成字幕，但它们存在幻觉、糟糕的组合推理和有限的细粒度理解，导致图像字幕对错位，从而降低下游模型的性能。本技术报告介绍了 VIVECaption，一种用于提高字幕质量的系统性双向方法。我们首先建立了字幕评估指标的全面分类法，区分“通用”和“基于实例”指标，最终目标是展示不同字幕质量指标之间的用例和权衡。然后，我们使用这种语言来描述我们提高字幕质量的双向方法：(1) 使用分层采样的黄金标准数据集创建方法，以及 (2) 模型对齐策略，包括使用 SFT 的上下文对齐和参数级微调。我们在开源模型上展示了我们的方法，重点关注能够更好地解析和下游利用的结构化字幕格式。我们最终表明，在图像字幕管道中使用经过微调的字符检测模型可以显着提高整体图像字幕对齐质量。我们的工作满足了企业人工智能开发中对高质量“纯素”训练数据日益增长的需求，为寻求改进字幕-图像对齐的团队提供实用的解决方案，而不依赖于可能受版权保护的网络抓取内容。

</details>

---

## 12. FastSTAR: Spatiotemporal Token Pruning for Efficient Autoregressive Video Synthesis / FastSTAR：用于高效自回归视频合成的时空令牌修剪

**Date**: 2026-03-07 | **arXiv**: [2603.07192v1](http://arxiv.org/abs/2603.07192v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.07192v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Visual Autoregressive modeling (VAR) has emerged as a highly efficient alternative to diffusion-based frameworks, achieving comparable synthesis quality. However, as this paradigm extends to Spacetime Autoregressive modeling (STAR) for video generation, scaling resolution and frame counts leads to a "token explosion" that creates a massive computational bottleneck in the final refinement stages. To address this, we propose FastSTAR, a training-free acceleration framework designed for high-quality video generation. Our core method, Spatiotemporal Token Pruning, identifies essential tokens by integrating two specialized terms: (1) Spatial similarity, which evaluates structural convergence across hierarchical scales to skip computations in regions where further refinement becomes redundant, and (2) Temporal similarity, which identifies active motion trajectories by assessing feature-level variations relative to the preceding clip. Combined with a Partial Update mechanism, FastSTAR ensures that only non-converged regions are refined, maintaining fluid motion while bypassing redundant computations. Experimental results on InfinityStar demonstrate that FastSTAR achieves up to a 2.01x speedup with a PSNR of 28.29 and less than 1% performance degradation, proving a superior efficiency-quality trade-off for STAR-based video synthesis.

视觉自回归建模 (VAR) 已成为基于扩散的框架的高效替代方案，可实现可比的合成质量。然而，随着这种范式扩展到用于视频生成的时空自回归建模（STAR），缩放分辨率和帧计数会导致“令牌爆炸”，从而在最终细化阶段产生巨大的计算瓶颈。为了解决这个问题，我们提出了 FastSTAR，这是一种专为高质量视频生成而设计的免训练加速框架。我们的核心方法，时空令牌修剪，通过集成两个专门术语来识别基本令牌：（1）空间相似性，它评估跨层次尺度的结构收敛性，以跳过进一步细化变得多余的区域中的计算，以及（2）时间相似性，它通过评估相对于前一个剪辑的特征级别变化来识别活动运动轨迹。与部分更新机制相结合，FastSTAR 可确保仅对非收敛区域进行细化，从而在绕过冗余计算的同时保持流体运动。 InfinityStar 上的实验结果表明，FastSTAR 实现了高达 2.01 倍的加速，PSNR 为 28.29，性能下降不到 1%，证明了基于 STAR 的视频合成具有卓越的效率与质量权衡。

</details>

---



</details>

<details><summary><b>2026-03-09 (9 papers)</b></summary>

# arXiv Video Papers - 2026-03-09

**Paper Count**: 9

---

## 1. SUREON: A Benchmark and Vision-Language-Model for Surgical Reasoning / SUREON：手术推理的基准和视觉语言模型

**Date**: 2026-03-06 | **arXiv**: [2603.06570v1](http://arxiv.org/abs/2603.06570v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.06570v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Surgeons don't just see -- they interpret. When an expert observes a surgical scene, they understand not only what instrument is being used, but why it was chosen, what risk it poses, and what comes next. Current surgical AI cannot answer such questions, largely because training data that explicitly encodes surgical reasoning is immensely difficult to annotate at scale. Yet surgical video lectures already contain exactly this -- explanations of intent, rationale, and anticipation, narrated by experts for the purpose of teaching. Though inherently noisy and unstructured, these narrations encode the reasoning that surgical AI currently lacks. We introduce SUREON, a large-scale video QA dataset that systematically harvests this training signal from surgical academic videos. SUREON defines 12 question categories covering safety assessment, decision rationale, and forecasting, and uses a multi-agent pipeline to extract and structure supervision at scale. Across 134.7K clips and 170 procedure types, SUREON yields 206.8k QA pairs and an expert-validated benchmark of 354 examples. To evaluate the extent to which this supervision translates to surgical reasoning ability, we introduce two models: SureonVLM, a vision-language model adapted through supervised fine-tuning, and SureonVLM-R1, a reasoning model trained with Group Relative Policy Optimization. Both models can answer complex questions about surgery and substantially outperform larger general-domain models, exceeding 84% accuracy on the SUREON benchmark while outperforming general-domain models on standard surgical perception tasks. Qualitative analysis of SureonVLM-R1 reveals explicit reasoning behavior, such as inferring operative intent from visual context.

外科医生不只是看，他们还解释。当专家观察手术场景时，他们不仅了解正在使用的仪器，还了解为什么选择它、它会带来什么风险以及接下来会发生什么。目前的外科人工智能无法回答这些问题，很大程度上是因为明确编码外科推理的训练数据很难大规模注释。然而，外科视频讲座已经包含了这一点——对意图、基本原理和预期的解释，由专家出于教学目的进行叙述。尽管这些叙述本质上是嘈杂且非结构化的，但它们编码了外科人工智能目前所缺乏的推理。我们引入了 SUREON，这是一个大型视频 QA 数据集，可以系统地从外科学术视频中收集训练信号。 SUREON 定义了 12 个问题类别，涵盖安全评估、决策原理和预测，并使用多智能体管道大规模提取和构建监督。 SUREON 跨越 134,700 个剪辑和 170 个程序类型，生成 206,800 个 QA 对和经过专家验证的 354 个示例基准。为了评估这种监督转化为手术推理能力的程度，我们引入了两个模型：SureonVLM，一种通过监督微调调整的视觉语言模型，以及 SureonVLM-R1，一种通过组相对策略优化训练的推理模型。这两种模型都可以回答有关手术的复杂问题，并且大大优于更大的通用域模型，在 SUREON 基准上的准确率超过 84%，同时在标准手术感知任务上优于通用域模型。 SureonVLM-R1 的定性分析揭示了明确的推理行为，例如从视觉上下文推断操作意图。

</details>

---

## 2. Penguin-VL: Exploring the Efficiency Limits of VLM with LLM-based Vision Encoders / Penguin-VL：利用基于 LLM 的视觉编码器探索 VLM 的效率极限

**Date**: 2026-03-06 | **arXiv**: [2603.06569v1](http://arxiv.org/abs/2603.06569v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.06569v1)

**Categories**: cs.CV

**Code**: https://github.com/tencent-ailab/Penguin-VL

<details><summary><b>Abstract / 摘要</b></summary>

Vision Language Model (VLM) development has largely relied on scaling model size, which hinders deployment on compute-constrained mobile and edge devices such as smartphones and robots. In this work, we explore the performance limits of compact (e.g., 2B and 8B) VLMs. We challenge the prevailing practice that state-of-the-art VLMs must rely on vision encoders initialized via massive contrastive pretraining (e.g., CLIP/SigLIP). We identify an objective mismatch: contrastive learning, optimized for discrimination, enforces coarse and category-level invariances that suppress fine-grained visual cues needed for dense captioning and complex VLM reasoning. To address this issue, we present Penguin-VL, whose vision encoder is initialized from a text-only LLM. Our experiments reveal that Penguin-Encoder serves as a superior alternative to traditional contrastive pretraining, unlocking a higher degree of visual fidelity and data efficiency for multimodal understanding. Across various image and video benchmarks, Penguin-VL achieves performance comparable to leading VLMs (e.g., Qwen3-VL) in mathematical reasoning and surpasses them in tasks such as document understanding, visual knowledge, and multi-perspective video understanding. Notably, these gains are achieved with a lightweight architecture, demonstrating that improved visual representation rather than model scaling is the primary driver of performance. Our ablations show that Penguin-Encoder consistently outperforms contrastive-pretrained encoders, preserving fine-grained spatial and temporal cues that are critical for dense perception and complex reasoning. This makes it a strong drop-in alternative for compute-efficient VLMs and enables high performance in resource-constrained settings. Code: https://github.com/tencent-ailab/Penguin-VL

视觉语言模型 (VLM) 的开发在很大程度上依赖于缩放模型大小，这阻碍了在计算受限的移动和边缘设备（例如智能手机和机器人）上的部署。在这项工作中，我们探讨了紧凑型（例如 2B 和 8B）VLM 的性能限制。我们挑战了流行的做法，即最先进的 VLM 必须依赖于通过大规模对比预训练（例如 CLIP/SigLIP）初始化的视觉编码器。我们发现了一个客观的不匹配：对比学习，针对区分进行了优化，强制执行粗略和类别级别的不变性，从而抑制了密集字幕和复杂的 VLM 推理所需的细粒度视觉线索。为了解决这个问题，我们提出了 Penguin-VL，其视觉编码器是从纯文本 LLM 初始化的。我们的实验表明，Penguin-Encoder 是传统对比预训练的绝佳替代方案，为多模态理解带来更高程度的视觉保真度和数据效率。在各种图像和视频基准测试中，Penguin-VL 在数学推理方面的性能可与领先的 VLM（例如 Qwen3-VL）相媲美，并在文档理解、视觉知识和多视角视频理解等任务中超越它们。值得注意的是，这些收益是通过轻量级架构实现的，这表明改进的视觉表示而不是模型缩放是性能的主要驱动力。我们的消融表明，Penguin-Encoder 始终优于对比预训练编码器，保留了对于密集感知和复杂推理至关重要的细粒度空间和时间线索。这使其成为计算高效的 VLM 的强大替代方案，并在资源受限的环境中实现高性能。代码：https://github.com/tencent-ailab/Penguin-VL

</details>

---

## 3. EgoReasoner: Learning Egocentric 4D Reasoning via Task-Adaptive Structured Thinking / EgoReasoner：通过任务自适应结构化思维学习以自我为中心的 4D 推理

**Date**: 2026-03-06 | **arXiv**: [2603.06561v1](http://arxiv.org/abs/2603.06561v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.06561v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Egocentric video understanding is inherently complex due to the dynamic 4D nature of the environment, where camera motion and object displacements necessitate a continuous re-evaluation of spatial relations. In this work, we target a suite of under-explored egocentric 4D reasoning tasks, including fixture interaction counting, viewpoint-relative fixture location, object movement itinerary tracking, and stationary object localization, that require fundamentally different cognitive operations: spatial anchoring, temporal tracking, and duration reasoning. We observe that these structural differences make task-agnostic approaches insufficient: generic Chain-of-Thought methods lack task-appropriate reasoning primitives, and uniform reinforcement learning actively destabilizes performance on spatial tasks. To address this, we propose EgoReasoner, a two-stage framework that aligns both the reasoning scaffold and the reward signal to each task's cognitive structure. In the first stage, Task-Adaptive Thinking Templates guide the synthesis of structured CoT traces that teach the model to reason adaptively across task types via supervised fine-tuning. In the second stage, task-aware reward functions verify entity grounding, temporal alignment, and task-adaptive logical consistency, selectively strengthening each reasoning pathway via reinforcement fine-tuning with GRPO. Our 3B-parameter model, trained on only 16K samples, achieves 37.5% average accuracy on the challenging HD-EPIC benchmark, surpassing Qwen2.5-VL-7B (25.7%) by over 10 points.

由于环境的动态 4D 性质，以自我为中心的视频理解本质上是复杂的，其中摄像机运动和物体位移需要不断地重新评估空间关系。在这项工作中，我们的目标是一套尚未探索的以自我为中心的 4D 推理任务，包括夹具交互计数、视点相对夹具位置、物体运动行程跟踪和静止物体定位，这些任务需要根本不同的认知操作：空间锚定、时间跟踪和持续时间推理。我们观察到，这些结构差异使得与任务无关的方法不足：通用的思想链方法缺乏适合任务的推理原语，而统一的强化学习会主动破坏空间任务性能的稳定性。为了解决这个问题，我们提出了 EgoReasoner，这是一个两阶段框架，可以将推理支架和奖励信号与每个任务的认知结构保持一致。在第一阶段，任务自适应思维模板指导结构化 CoT 轨迹的合成，指导模型通过监督微调跨任务类型进行自适应推理。在第二阶段，任务感知奖励函数验证实体基础、时间对齐和任务自适应逻辑一致性，通过 GRPO 的强化微调有选择地强化每个推理路径。我们的 3B 参数模型仅在 16K 样本上进行训练，在具有挑战性的 HD-EPIC 基准上实现了 37.5% 的平均准确率，超过 Qwen2.5-VL-7B (25.7%) 超过 10 个百分点。

</details>

---

## 4. NEGATE: Constrained Semantic Guidance for Linguistic Negation in Text-to-Video Diffusion / NEGATE：文本到视频传播中语言否定的约束语义指导

**Date**: 2026-03-06 | **arXiv**: [2603.06533v1](http://arxiv.org/abs/2603.06533v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.06533v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Negation is a fundamental linguistic operator, yet it remains inadequately modeled in diffusion-based generative systems. In this work, we present a formal treatment of linguistic negation in diffusion-based generative models by modeling it as a structured feasibility constraint on semantic guidance within diffusion dynamics. Rather than introducing heuristics or retraining model parameters, we reinterpret classifier-free guidance as defining a semantic update direction and enforce negation by projecting the update onto a convex constraint set derived from linguistic structure. This novel formulation provides a unified framework for handling diverse negation phenomena, including object absence, graded non-inversion semantics, multi-negation composition, and scope-sensitive disambiguation. Our approach is training-free, compatible with pretrained diffusion backbones, and naturally extends from image generation to temporally evolving video trajectories. In addition, we introduce a structured negation-centric benchmark suite that isolates distinct linguistic failure modes in generative systems, to further research in this area. Experiments demonstrate that our method achieves robust negation compliance while preserving visual fidelity and structural coherence, establishing the first unified formulation of linguistic negation in diffusion-based generative models beyond representation-level evaluation.

否定是一种基本的语言运算符，但它在基于扩散的生成系统中仍然没有得到充分的建模。在这项工作中，我们通过将其建模为扩散动力学中语义指导的结构化可行性约束，提出了基于扩散的生成模型中语言否定的正式处理。我们没有引入启发式或重新训练模型参数，而是将无分类器指导重新解释为定义语义更新方向，并通过将更新投影到从语言结构派生的凸约束集上来强制否定。这种新颖的表述为处理不同的否定现象提供了一个统一的框架，包括宾语缺失、分级非反转语义、多重否定组合和范围敏感消歧。我们的方法是免训练的，与预训练的扩散主干兼容，并且自然地从图像生成扩展到时间演变的视频轨迹。此外，我们引入了一个结构化的以否定为中心的基准套件，它隔离了生成系统中不同的语言故障模式，以进一步研究该领域。实验表明，我们的方法在保持视觉保真度和结构连贯性的同时实现了强大的否定合规性，在超越表示级别评估的基于扩散的生成模型中建立了第一个统一的语言否定表述。

</details>

---

## 5. Pinterest Canvas: Large-Scale Image Generation at Pinterest / Pinterest Canvas：Pinterest 的大规模图像生成

**Date**: 2026-03-06 | **arXiv**: [2603.06453v1](http://arxiv.org/abs/2603.06453v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.06453v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

While recent image generation models demonstrate a remarkable ability to handle a wide variety of image generation tasks, this flexibility makes them hard to control via prompting or simple inference adaptation alone, rendering them unsuitable for use cases with strict product requirements. In this paper, we introduce Pinterest Canvas, our large-scale image generation system built to support image editing and enhancement use cases at Pinterest. Canvas is first trained on a diverse, multimodal dataset to produce a foundational diffusion model with broad image-editing capabilities. However, rather than relying on one generic model to handle every downstream task, we instead rapidly fine-tune variants of this base model on task-specific datasets, producing specialized models for individual use cases. We describe key components of Canvas and summarize our best practices for dataset curation, training, and inference. We also showcase task-specific variants through case studies on background enhancement and aspect-ratio outpainting, highlighting how we tackle their specific product requirements. Online A/B experiments demonstrate that our enhanced images receive a significant 18.0% and 12.5% engagement lift, respectively, and comparisons with human raters further validate that our models outperform third-party models on these tasks. Finally, we showcase other Canvas variants, including multi-image scene synthesis and image-to-video generation, demonstrating that our approach can generalize to a wide variety of potential downstream tasks.

虽然最近的图像生成模型表现出处理各种图像生成任务的卓越能力，但这种灵活性使得它们很难仅通过提示或简单的推理适应来控制，从而使它们不适合具有严格产品要求的用例。在本文中，我们介绍了 Pinterest Canvas，这是我们为支持 Pinterest 的图像编辑和增强用例而构建的大型图像生成系统。 Canvas 首先在多样化的多模式数据集上进行训练，以生成具有广泛图像编辑功能的基础扩散模型。然而，我们并不是依赖一个通用模型来处理每个下游任务，而是在特定于任务的数据集上快速微调该基本模型的变体，为各个用例生成专门的模型。我们描述了 Canvas 的关键组件，并总结了我们在数据集管理、训练和推理方面的最佳实践。我们还通过背景增强和纵横比外涂的案例研究展示特定于任务的变体，强调我们如何满足他们的特定产品要求。在线 A/B 实验表明，我们的增强图像的参与度分别显着提高了 18.0% 和 12.5%，并且与人类评分者的比较进一步验证了我们的模型在这些任务上优于第三方模型。最后，我们展示了其他 Canvas 变体，包括多图像场景合成和图像到视频生成，证明我们的方法可以推广到各种潜在的下游任务。

</details>

---

## 6. Physical Simulator In-the-Loop Video Generation / 物理模拟器在环视频生成

**Date**: 2026-03-06 | **arXiv**: [2603.06408v1](http://arxiv.org/abs/2603.06408v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.06408v1)

**Categories**: cs.CV, cs.AI, cs.GR

**Project**: https://vcai.mpi-inf.mpg.de/projects/PSIVG/  <details><summary><b>Abstract / 摘要</b></summary>

Recent advances in diffusion-based video generation have achieved remarkable visual realism but still struggle to obey basic physical laws such as gravity, inertia, and collision. Generated objects often move inconsistently across frames, exhibit implausible dynamics, or violate physical constraints, limiting the realism and reliability of AI-generated videos. We address this gap by introducing Physical Simulator In-the-loop Video Generation (PSIVG), a novel framework that integrates a physical simulator into the video diffusion process. Starting from a template video generated by a pre-trained diffusion model, PSIVG reconstructs the 4D scene and foreground object meshes, initializes them within a physical simulator, and generates physically consistent trajectories. These simulated trajectories are then used to guide the video generator toward spatio-temporally physically coherent motion. To further improve texture consistency during object movement, we propose a Test-Time Texture Consistency Optimization (TTCO) technique that adapts text and feature embeddings based on pixel correspondences from the simulator. Comprehensive experiments demonstrate that PSIVG produces videos that better adhere to real-world physics while preserving visual quality and diversity. Project Page: https://vcai.mpi-inf.mpg.de/projects/PSIVG/

基于扩散的视频生成的最新进展已经实现了显着的视觉真实感，但仍然难以遵守重力、惯性和碰撞等基本物理定律。生成的对象通常在帧之间移动不一致、表现出令人难以置信的动态或违反物理约束，从而限制了人工智能生成视频的真实性和可靠性。我们通过引入物理模拟器环路视频生成（PSIVG）来解决这一差距，这是一种将物理模拟器集成到视频传播过程中的新颖框架。从预先训练的扩散模型生成的模板视频开始，PSIVG 重建 4D 场景和前景对象网格，在物理模拟器中初始化它们，并生成物理一致的轨迹。然后，使用这些模拟轨迹引导视频生成器进行时空物理相干运动。为了进一步提高对象移动过程中的纹理一致性，我们提出了一种测试时纹理一致性优化（TTCO）技术，该技术根据模拟器的像素对应来调整文本和特征嵌入。综合实验表明，PSIVG 制作的视频能够更好地遵循现实世界的物理原理，同时保留视觉质量和多样性。项目页面：https://vcai.mpi-inf.mpg.de/projects/PSIVG/

</details>

---

## 7. DreamToNav: Generalizable Navigation for Robots via Generative Video Planning / DreamToNav：通过生成视频规划为机器人提供通用导航

**Date**: 2026-03-06 | **arXiv**: [2603.06190v1](http://arxiv.org/abs/2603.06190v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.06190v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

We present DreamToNav, a novel autonomous robot framework that uses generative video models to enable intuitive, human-in-the-loop control. Instead of relying on rigid waypoint navigation, users provide natural language prompts (e.g. ``Follow the person carefully''), which the system translates into executable motion. Our pipeline first employs Qwen 2.5-VL-7B-Instruct to refine vague user instructions into precise visual descriptions. These descriptions condition NVIDIA Cosmos 2.5, a state-of-the-art video foundation model, to synthesize a physically consistent video sequence of the robot performing the task. From this synthetic video, we extract a valid kinematic path using visual pose estimation, robot detection and trajectory recovery. By treating video generation as a planning engine, DreamToNav allows robots to visually "dream" complex behaviors before executing them, providing a unified framework for obstacle avoidance and goal-directed navigation without task-specific engineering. We evaluate the approach on both a wheeled mobile robot and a quadruped robot in indoor navigation tasks. DreamToNav achieves a success rate of 76.7%, with final goal errors typically within 0.05-0.10 m and trajectory tracking errors below 0.15 m. These results demonstrate that trajectories extracted from generative video predictions can be reliably executed on physical robots across different locomotion platforms.

我们推出了 DreamToNav，这是一种新颖的自主机器人框架，它使用生成视频模型来实现直观的人机交互控制。用户不再依赖严格的路径点导航，而是提供自然语言提示（例如“小心地跟随这个人”），系统将其转换为可执行的动作。我们的流程首先采用 Qwen 2.5-VL-7B-Instruct 将模糊的用户指令细化为精确的视觉描述。这些描述以最先进的视频基础模型 NVIDIA Cosmos 2.5 为条件，合成执行任务的机器人的物理一致的视频序列。从这个合成视频中，我们使用视觉姿态估计、机器人检测和轨迹恢复来提取有效的运动路径。通过将视频生成视为规划引擎，DreamToNav 允许机器人在执行复杂行为之前以视觉方式“想象”复杂行为，从而为避障和目标导向导航提供统一的框架，而无需特定于任务的工程。我们在室内导航任务中评估轮式移动机器人和四足机器人的方法。 DreamToNav 的成功率为 76.7%，最终目标误差通常在 0.05-0.10 m 以内，轨迹跟踪误差低于 0.15 m。这些结果表明，从生成视频预测中提取的轨迹可以在跨不同运动平台的物理机器人上可靠地执行。

</details>

---

## 8. Place-it-R1: Unlocking Environment-aware Reasoning Potential of MLLM for Video Object Insertion / Place-it-R1：解锁 MLLM 用于视频对象插入的环境感知推理潜力

**Date**: 2026-03-06 | **arXiv**: [2603.06140v1](http://arxiv.org/abs/2603.06140v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.06140v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Modern video editing techniques have achieved high visual fidelity when inserting video objects. However, they focus on optimizing visual fidelity rather than physical causality, leading to edits that are physically inconsistent with their environment. In this work, we present Place-it-R$1$, an end-to-end framework for video object insertion that unlocks the environment-aware reasoning potential of Multimodal Large Language Models (MLLMs). Our framework leverages the Chain-of-Thought (CoT) reasoning of MLLMs to orchestrate video diffusion, following a Think-then-Place paradigm. To bridge cognitive reasoning and generative execution, we introduce three key innovations: First, MLLM performs physical scene understanding and interaction reasoning, generating environment-aware chain-of-thought tokens and inferring valid insertion regions to explicitly guide the diffusion toward physically plausible insertion. Then, we introduce MLLM-guided Spatial Direct Preference Optimization (DPO), where diffusion outputs are fed back to the MLLM for scoring, enabling visual naturalness. During inference, the MLLM iteratively triggers refinement cycles and elicits adaptive adjustments from the diffusion model, forming a closed-loop that progressively enhances editing quality. Furthermore, we provide two user-selectable modes: a plausibility-oriented flexible mode that permits environment modifications (\eg, generating support structures) to enhance physical plausibility, and a fidelity-oriented standard mode that preserves scene integrity for maximum fidelity, offering users explicit control over the plausibility-fidelity trade-off. Extensive experiments demonstrate Place-it-R1 achieves physically-coherent video object insertion compared with state-of-the-art solutions and commercial models.

现代视频编辑技术在插入视频对象时已经实现了高视觉保真度。然而，他们专注于优化视觉保真度而不是物理因果关系，从而导致编辑与他们的环境在物理上不一致。在这项工作中，我们提出了 Place-it-R$1$，这是一种用于视频对象插入的端到端框架，可释放多模态大型语言模型 (MLLM) 的环境感知推理潜力。我们的框架利用 MLLM 的思想链 (CoT) 推理来协调视频传播，遵循“先思考后放置”范式。为了连接认知推理和生成执行，我们引入了三个关键创新：首先，MLLM 执行物理场景理解和交互推理，生成环境感知的思想链标记并推断有效的插入区域，以明确引导扩散到物理上合理的插入。然后，我们引入了 MLLM 引导的空间直接偏好优化（DPO），其中扩散输出被反馈到 MLLM 进行评分，从而实现视觉自然度。在推理过程中，MLLM 迭代触发细化周期，并从扩散模型中引发自适应调整，形成闭环，逐步提高编辑质量。此外，我们提供两种用户可选择的模式：一种面向合理性的灵活模式，允许修改环境（例如，生成支撑结构）以增强物理合理性；一种面向保真度的标准模式，可保留场景完整性以获得最大保真度，为用户提供对合理性与保真度权衡的明确控制。大量实验表明，与最先进的解决方案和商业模型相比，Place-it-R1 实现了物理一致的视频对象插入。

</details>

---

## 9. Cross-Resolution Distribution Matching for Diffusion Distillation / 扩散蒸馏的交叉分辨率分布匹配

**Date**: 2026-03-06 | **arXiv**: [2603.06136v1](http://arxiv.org/abs/2603.06136v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.06136v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion distillation is central to accelerating image and video generation, yet existing methods are fundamentally limited by the denoising process, where step reduction has largely saturated. Partial timestep low-resolution generation can further accelerate inference, but it suffers noticeable quality degradation due to cross-resolution distribution gaps. We propose Cross-Resolution Distribution Matching Distillation (RMD), a novel distillation framework that bridges cross-resolution distribution gaps for high-fidelity, few-step multi-resolution cascaded inference. Specifically, RMD divides the timestep intervals for each resolution using logarithmic signal-to-noise ratio (logSNR) curves, and introduces logSNR-based mapping to compensate for resolution-induced shifts. Distribution matching is conducted along resolution trajectories to reduce the gap between low-resolution generator distributions and the teacher's high-resolution distribution. In addition, a predicted-noise re-injection mechanism is incorporated during upsampling to stabilize training and improve synthesis quality. Quantitative and qualitative results show that RMD preserves high-fidelity generation while accelerating inference across various backbones. Notably, RMD achieves up to 33.4X speedup on SDXL and 25.6X on Wan2.1-14B, while preserving high visual fidelity.

扩散蒸馏对于加速图像和视频生成至关重要，但现有方法从根本上受到去噪过程的限制，其中步骤减少已基本饱和。部分时间步长低分辨率生成可以进一步加速推理，但由于跨分辨率分布差距，其质量明显下降。我们提出了跨分辨率分布匹配蒸馏（RMD），这是一种新颖的蒸馏框架，可以弥合跨分辨率分布间隙，以实现高保真、少步多分辨率级联推理。具体来说，RMD 使用对数信噪比 (logSNR) 曲线划分每个分辨率的时间步间隔，并引入基于 logSNR 的映射来补偿分辨率引起的偏移。沿着分辨率轨迹进行分布匹配，以减少低分辨率生成器分布和教师高分辨率分布之间的差距。此外，在上采样过程中还结合了预测噪声重新注入机制，以稳定训练并提高合成质量。定量和定性结果表明，RMD 保留了高保真生成，同时加速了跨不同主干网的推理。值得注意的是，RMD 在 SDXL 上实现了高达 33.4 倍的加速，在 Wan2.1-14B 上实现了 25.6 倍的加速，同时保持了高视觉保真度。

</details>

---



</details>

<details><summary><b>2026-03-07 (18 papers)</b></summary>

# arXiv Video Papers - 2026-03-07

**Paper Count**: 18

---

## 1. FaceCam: Portrait Video Camera Control via Scale-Aware Conditioning / FaceCam：通过比例感知调节进行人像摄像机控制

**Date**: 2026-03-05 | **arXiv**: [2603.05506v1](http://arxiv.org/abs/2603.05506v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.05506v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We introduce FaceCam, a system that generates video under customizable camera trajectories for monocular human portrait video input. Recent camera control approaches based on large video-generation models have shown promising progress but often exhibit geometric distortions and visual artifacts on portrait videos due to scale-ambiguous camera representations or 3D reconstruction errors. To overcome these limitations, we propose a face-tailored scale-aware representation for camera transformations that provides deterministic conditioning without relying on 3D priors. We train a video generation model on both multi-view studio captures and in-the-wild monocular videos, and introduce two camera-control data generation strategies: synthetic camera motion and multi-shot stitching, to exploit stationary training cameras while generalizing to dynamic, continuous camera trajectories at inference time. Experiments on Ava-256 dataset and diverse in-the-wild videos demonstrate that FaceCam achieves superior performance in camera controllability, visual quality, identity and motion preservation.

我们介绍 FaceCam，这是一个可以在可定制的相机轨迹下生成视频的系统，用于单眼人像视频输入。最近基于大型视频生成模型的相机控制方法已经显示出有希望的进展，但由于尺度模糊的相机表示或 3D 重建错误，经常在肖像视频上表现出几何失真和视觉伪影。为了克服这些限制，我们提出了一种用于相机变换的面部定制的尺度感知表示，它可以在不依赖 3D 先验的情况下提供确定性条件。我们在多视图工作室捕获和野外单目视频上训练视频生成模型，并引入两种摄像机控制数据生成策略：合成摄像机运动和多镜头拼接，以利用固定训练摄像机，同时在推理时推广到动态、连续的摄像机轨迹。在 Ava-256 数据集和各种野外视频上的实验表明，FaceCam 在相机可控性、视觉质量、身份和运动保持方面实现了卓越的性能。

</details>

---

## 2. Accelerating Text-to-Video Generation with Calibrated Sparse Attention / 通过校准的稀疏注意力加速文本到视频的生成

**Date**: 2026-03-05 | **arXiv**: [2603.05503v1](http://arxiv.org/abs/2603.05503v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.05503v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recent diffusion models enable high-quality video generation, but suffer from slow runtimes. The large transformer-based backbones used in these models are bottlenecked by spatiotemporal attention. In this paper, we identify that a significant fraction of token-to-token connections consistently yield negligible scores across various inputs, and their patterns often repeat across queries. Thus, the attention computation in these cases can be skipped with little to no effect on the result. This observation continues to hold for connections among local token blocks. Motivated by this, we introduce CalibAtt, a training-free method that accelerates video generation via calibrated sparse attention. CalibAtt performs an offline calibration pass that identifies block-level sparsity and repetition patterns that are stable across inputs, and compiles these patterns into optimized attention operations for each layer, head, and diffusion timestep. At inference time, we compute the selected input-dependent connections densely, and skip the unselected ones in a hardware-efficient manner. Extensive experiments on Wan 2.1 14B, Mochi 1, and few-step distilled models at various resolutions show that CalibAtt achieves up to 1.58x end-to-end speedup, outperforming existing training-free methods while maintaining video generation quality and text-video alignment.

最近的扩散模型可以生成高质量的视频，但运行时间很慢。这些模型中使用的基于变压器的大型骨干网受到时空注意力的瓶颈。在本文中，我们发现很大一部分令牌到令牌连接在各种输入中始终产生可以忽略不计的分数，并且它们的模式经常在查询中重复。因此，在这些情况下，注意力计算可以被跳过，对结果几乎没有影响。对于本地令牌块之间的连接，这一观察结果仍然成立。受此启发，我们引入了 CalibAtt，这是一种无需训练的方法，可通过校准的稀疏注意力加速视频生成。 CalibAtt 执行离线校准过程，识别跨输入稳定的块级稀疏性和重复模式，并将这些模式编译为每个层、头部和扩散时间步长的优化注意操作。在推理时，我们密集地计算选定的依赖于输入的连接，并以硬件高效的方式跳过未选定的连接。在 Wan 2.1 14B、Mochi 1 和各种分辨率下的几步蒸馏模型上进行的大量实验表明，CalibAtt 实现了高达 1.58 倍的端到端加速，优于现有的免训练方法，同时保持视频生成质量和文本视频对齐。

</details>

---

## 3. Towards Multimodal Lifelong Understanding: A Dataset and Agentic Baseline / 迈向多模式终身理解：数据集和代理基线

**Date**: 2026-03-05 | **arXiv**: [2603.05484v1](http://arxiv.org/abs/2603.05484v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.05484v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

While datasets for video understanding have scaled to hour-long durations, they typically consist of densely concatenated clips that differ from natural, unscripted daily life. To bridge this gap, we introduce MM-Lifelong, a dataset designed for Multimodal Lifelong Understanding. Comprising 181.1 hours of footage, it is structured across Day, Week, and Month scales to capture varying temporal densities. Extensive evaluations reveal two critical failure modes in current paradigms: end-to-end MLLMs suffer from a Working Memory Bottleneck due to context saturation, while representative agentic baselines experience Global Localization Collapse when navigating sparse, month-long timelines. To address this, we propose the Recursive Multimodal Agent (ReMA), which employs dynamic memory management to iteratively update a recursive belief state, significantly outperforming existing methods. Finally, we establish dataset splits designed to isolate temporal and domain biases, providing a rigorous foundation for future research in supervised learning and out-of-distribution generalization.

虽然用于视频理解的数据集已经扩展到长达一小时的持续时间，但它们通常由密集连接的剪辑组成，这与自然、无脚本的日常生活不同。为了弥补这一差距，我们引入了 MM-Lifelong，这是一个为多模式终身理解而设计的数据集。它包含 181.1 小时的镜头，分为日、周和月尺度，以捕捉不同的时间密度。广泛的评估揭示了当前范例中的两种关键故障模式：由于上下文饱和，端到端 MLLM 遭受工作记忆瓶颈，而代表性的代理基线在导航稀疏的、长达一个月的时间线时会经历全局本地化崩溃。为了解决这个问题，我们提出了递归多模态代理（ReMA），它采用动态内存管理来迭代更新递归信念状态，显着优于现有方法。最后，我们建立数据集分割，旨在隔离时间和域偏差，为监督学习和分布外泛化的未来研究提供严格的基础。

</details>

---

## 4. EdgeDAM: Real-time Object Tracking for Mobile Devices / EdgeDAM：移动设备的实时对象跟踪

**Date**: 2026-03-05 | **arXiv**: [2603.05463v1](http://arxiv.org/abs/2603.05463v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.05463v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Single-object tracking (SOT) on edge devices is a critical computer vision task, requiring accurate and continuous target localization across video frames under occlusion, distractor interference, and fast motion. However, recent state-of-the-art distractor-aware memory mechanisms are largely built on segmentation-based trackers and rely on mask prediction and attention-driven memory updates, which introduce substantial computational overhead and limit real-time deployment on resource-constrained hardware; meanwhile, lightweight trackers sustain high throughput but are prone to drift when visually similar distractors appear. To address these challenges, we propose EdgeDAM, a lightweight detection-guided tracking framework that reformulates distractor-aware memory for bounding-box tracking under strict edge constraints. EdgeDAM introduces two key strategies: (1) Dual-Buffer Distractor-Aware Memory (DAM), which integrates a Recent-Aware Memory to preserve temporally consistent target hypotheses and a Distractor-Resolving Memory to explicitly store hard negative candidates and penalize their re-selection during recovery; and (2) Confidence-Driven Switching with Held-Box Stabilization, where tracker reliability and temporal consistency criteria adaptively activate detection and memory-guided re-identification during occlusion, while a held-box mechanism temporarily freezes and expands the estimate to suppress distractor contamination. Extensive experiments on five benchmarks, including the distractor-focused DiDi dataset, demonstrate improved robustness under occlusion and fast motion while maintaining real-time performance on mobile devices, achieving 88.2% accuracy on DiDi and 25 FPS on an iPhone 15. Code will be released.

边缘设备上的单目标跟踪 (SOT) 是一项关键的计算机视觉任务，需要在遮挡、干扰物干扰和快速运动的情况下跨视频帧进行准确、连续的目标定位。然而，最近最先进的干扰感知内存机制主要建立在基于分段的跟踪器上，并依赖于掩模预测和注意力驱动的内存更新，这会带来大量的计算开销并限制在资源受限的硬件上的实时部署；同时，轻量级跟踪器可维持高吞吐量，但当出现视觉上相似的干扰物时，很容易发生漂移。为了应对这些挑战，我们提出了 EdgeDAM，这是一种轻量级检测引导的跟踪框架，它重新构建了干扰感知内存，用于严格边缘约束下的边界框跟踪。 EdgeDAM 引入了两个关键策略：（1）双缓冲区干扰器感知内存（DAM），它集成了最近感知内存以保留时间一致的目标假设和干扰器解决内存以显式存储硬阴性候选者并在恢复期间惩罚其重新选择； (2) 具有保持盒稳定性的置信驱动切换，其中跟踪器可靠性和时间一致性标准在遮挡期间自适应地激活检测和记忆引导的重新识别，而保持盒机制暂时冻结并扩展估计以抑制干扰物污染。对五个基准测试（包括以干扰物为中心的 DiDi 数据集）进行的广泛实验证明，遮挡和快速运动下的鲁棒性得到了提高，同时保持了移动设备上的实时性能，在 DiDi 上实现了 88.2% 的准确率，在 iPhone 15 上实现了 25 FPS。代码即将发布。

</details>

---

## 5. RealWonder: Real-Time Physical Action-Conditioned Video Generation / RealWonder：实时物理动作条件视频生成

**Date**: 2026-03-05 | **arXiv**: [2603.05449v1](http://arxiv.org/abs/2603.05449v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.05449v1)

**Categories**: cs.CV, cs.AI, cs.GR

<details><summary><b>Abstract / 摘要</b></summary>

Current video generation models cannot simulate physical consequences of 3D actions like forces and robotic manipulations, as they lack structural understanding of how actions affect 3D scenes. We present RealWonder, the first real-time system for action-conditioned video generation from a single image. Our key insight is using physics simulation as an intermediate bridge: instead of directly encoding continuous actions, we translate them through physics simulation into visual representations (optical flow and RGB) that video models can process. RealWonder integrates three components: 3D reconstruction from single images, physics simulation, and a distilled video generator requiring only 4 diffusion steps. Our system achieves 13.2 FPS at 480x832 resolution, enabling interactive exploration of forces, robot actions, and camera controls on rigid objects, deformable bodies, fluids, and granular materials. We envision RealWonder opens new opportunities to apply video models in immersive experiences, AR/VR, and robot learning. Our code and model weights are publicly available in our project website: https://liuwei283.github.io/RealWonder/

当前的视频生成模型无法模拟 3D 动作（例如力和机器人操作）的物理后果，因为它们缺乏对动作如何影响 3D 场景的结构理解。我们推出 RealWonder，这是第一个从单个图像生成动作条件视频的实时系统。我们的主要见解是使用物理模拟作为中间桥梁：我们不是直接编码连续动作，而是通过物理模拟将它们转换为视频模型可以处理的视觉表示（光流和 RGB）。 RealWonder 集成了三个组件：从单个图像进行 3D 重建、物理模拟以及仅需要 4 个扩散步骤的精炼视频生成器。我们的系统在 480x832 分辨率下达到 13.2 FPS，能够对刚性物体、可变形体、流体和颗粒材料上的力、机器人动作和相机控制进行交互式探索。我们预计 RealWonder 将为视频模型在沉浸式体验、AR/VR 和机器人学习中的应用提供新的机会。我们的代码和模型权重在我们的项目网站上公开：https://liuwei283.github.io/RealWonder/

</details>

---

## 6. SAIL: Similarity-Aware Guidance and Inter-Caption Augmentation-based Learning for Weakly-Supervised Dense Video Captioning / SAIL：弱监督密集视频字幕的相似性感知指导和基于字幕间增强的学习

**Date**: 2026-03-05 | **arXiv**: [2603.05437v1](http://arxiv.org/abs/2603.05437v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.05437v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Weakly-Supervised Dense Video Captioning aims to localize and describe events in videos trained only on caption annotations, without temporal boundaries. Prior work introduced an implicit supervision paradigm based on Gaussian masking and complementary captioning. However, existing method focuses merely on generating non-overlapping masks without considering their semantic relationship to corresponding events, resulting in simplistic, uniformly distributed masks that fail to capture semantically meaningful regions. Moreover, relying solely on ground-truth captions leads to sub-optimal performance due to the inherent sparsity of existing datasets. In this work, we propose SAIL, which constructs semantically-aware masks through cross-modal alignment. Our similarity aware training objective guides masks to emphasize video regions with high similarity to their corresponding event captions. Furthermore, to guide more accurate mask generation under sparse annotation settings, we introduce an LLM-based augmentation strategy that generates synthetic captions to provide additional alignment signals. These synthetic captions are incorporated through an inter-mask mechanism, providing auxiliary guidance for precise temporal localization without degrading the main objective. Experiments on ActivityNet Captions and YouCook2 demonstrate state-of-the-art performance on both captioning and localization metrics.

弱监督密集视频字幕旨在定位和描述仅根据字幕注释训练的视频中的事件，没有时间边界。之前的工作引入了基于高斯掩蔽和补充字幕的隐式监督范式。然而，现有的方法仅仅关注于生成不重叠的掩码，而不考虑它们与相应事件的语义关系，导致简单化、均匀分布的掩码无法捕获语义上有意义的区域。此外，由于现有数据集固有的稀疏性，仅依赖真实字幕会导致性能次优。在这项工作中，我们提出了 SAIL，它通过跨模态对齐构建语义感知掩模。我们的相似性感知训练目标指导掩模强调与其相应事件标题高度相似的视频区域。此外，为了在稀疏注释设置下指导更准确的掩模生成，我们引入了基于 LLM 的增强策略，该策略生成合成标题以提供额外的对齐信号。这些合成字幕通过掩模间机制合并，为精确的时间定位提供辅助指导，而不会降低主要目标。 ActivityNet Captions 和 YouCook2 上的实验展示了字幕和本地化指标的最先进性能。

</details>

---

## 7. Video-based Locomotion Analysis for Fish Health Monitoring / 用于鱼类健康监测的基于视频的运动分析

**Date**: 2026-03-05 | **arXiv**: [2603.05407v1](http://arxiv.org/abs/2603.05407v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.05407v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Monitoring the health conditions of fish is essential, as it enables the early detection of disease, safeguards animal welfare, and contributes to sustainable aquaculture practices. Physiological and pathological conditions of cultivated fish can be inferred by analyzing locomotion activities. In this paper, we present a system that estimates the locomotion activities from videos using multi object tracking. The core of our approach is a YOLOv11 detector embedded in a tracking-by-detection framework. We investigate various configurations of the YOLOv11-architecture as well as extensions that incorporate multiple frames to improve detection accuracy. Our system is evaluated on a manually annotated dataset of Sulawesi ricefish recorded in a home-aquarium-like setup, demonstrating its ability to reliably measure swimming direction and speed for fish health monitoring. The dataset will be made publicly available upon publication.

监测鱼类的健康状况至关重要，因为它可以及早发现疾病，保障动物福利，并有助于可持续水产养殖实践。通过分析运动活动可以推断养殖鱼类的生理和病理状况。在本文中，我们提出了一种使用多对象跟踪来估计视频运动活动的系统。我们方法的核心是嵌入在检测跟踪框架中的 YOLOv11 检测器。我们研究了 YOLOv11 架构的各种配置以及合并多个帧以提高检测精度的扩展。我们的系统在类似家庭水族馆的设置中记录的苏拉威西米鱼的手动注释数据集上进行了评估，证明了其可靠测量游泳方向和速度以监测鱼类健康的能力。该数据集将在发布后公开。

</details>

---

## 8. ORMOT: A Dataset and Framework for Omnidirectional Referring Multi-Object Tracking / ORMOT：全方位参考多目标跟踪的数据集和框架

**Date**: 2026-03-05 | **arXiv**: [2603.05384v1](http://arxiv.org/abs/2603.05384v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.05384v1)

**Categories**: cs.CV

**Code**: https://github.com/chen-si-jia/ORMOT.

<details><summary><b>Abstract / 摘要</b></summary>

Multi-Object Tracking (MOT) is a fundamental task in computer vision, aiming to track targets across video frames. Existing MOT methods perform well in general visual scenes, but face significant challenges and limitations when extended to visual-language settings. To bridge this gap, the task of Referring Multi-Object Tracking (RMOT) has recently been proposed, which aims to track objects that correspond to language descriptions. However, current RMOT methods are primarily developed on datasets captured by conventional cameras, which suffer from limited field of view. This constraint often causes targets to move out of the frame, leading to fragmented tracking and loss of contextual information. In this work, we propose a novel task, called Omnidirectional Referring Multi-Object Tracking (ORMOT), which extends RMOT to omnidirectional imagery, aiming to overcome the field-of-view (FoV) limitation of conventional datasets and improve the model's ability to understand long-horizon language descriptions. To advance the ORMOT task, we construct ORSet, an Omnidirectional Referring Multi-Object Tracking dataset, which contains 27 diverse omnidirectional scenes, 848 language descriptions, and 3,401 annotated objects, providing rich visual, temporal, and language information. Furthermore, we propose ORTrack, a Large Vision-Language Model (LVLM)-driven framework tailored for Omnidirectional Referring Multi-Object Tracking. Extensive experiments on the ORSet dataset demonstrate the effectiveness of our ORTrack framework. The dataset and code will be open-sourced at https://github.com/chen-si-jia/ORMOT.

多目标跟踪（MOT）是计算机视觉中的一项基本任务，旨在跨视频帧跟踪目标。现有的 MOT 方法在一般视觉场景中表现良好，但在扩展到视觉语言设置时面临重大挑战和限制。为了弥补这一差距，最近提出了引用多对象跟踪（RMOT）的任务，其目的是跟踪与语言描述相对应的对象。然而，当前的 RMOT 方法主要是在传统相机捕获的数据集上开发的，而传统相机的视野有限。这种限制通常会导致目标移出框架，从而导致跟踪碎片和上下文信息丢失。在这项工作中，我们提出了一项名为全向参考多目标跟踪（ORMOT）的新任务，它将 RMOT 扩展到全向图像，旨在克服传统数据集的视场（FoV）限制并提高模型理解长视野语言描述的能力。为了推进 ORMOT 任务，我们构建了 ORSet，一个全向引用多对象跟踪数据集，其中包含 27 个不同的全向场景、848 种语言描述和 3,401 个带注释的对象，提供丰富的视觉、时间和语言信息。此外，我们提出了 ORTrack，这是一种大型视觉语言模型（LVLM）驱动的框架，专为全方位参考多对象跟踪而定制。 ORSet 数据集上的大量实验证明了我们的 ORTrack 框架的有效性。数据集和代码将在 https://github.com/chen-si-jia/ORMOT 开源。

</details>

---

## 9. Frequency-Aware Error-Bounded Caching for Accelerating Diffusion Transformers / 用于加速扩散变压器的频率感知误差限制缓存

**Date**: 2026-03-05 | **arXiv**: [2603.05315v1](http://arxiv.org/abs/2603.05315v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.05315v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion Transformers (DiTs) have emerged as the dominant architecture for high-quality image and video generation, yet their iterative denoising process incurs substantial computational cost during inference. Existing caching methods accelerate DiTs by reusing intermediate computations across timesteps, but they share a common limitation: treating the denoising process as uniform across time,depth, and feature dimensions. In this work, we identify three orthogonal axes of non-uniformity in DiT denoising: (1) temporal -- sensitivity to caching errors varies dramatically across the denoising trajectory; (2) depth -- consecutive caching decisions lead to cascading approximation errors; and (3) feature -- different components of the hidden state exhibit heterogeneous temporal dynamics. Based on these observations, we propose SpectralCache, a unified caching framework comprising Timestep-Aware Dynamic Scheduling (TADS), Cumulative Error Budgets (CEB), and Frequency-Decomposed Caching (FDC). On FLUX.1-schnell at 512x512 resolution, SpectralCache achieves 2.46x speedup with LPIPS 0.217 and SSIM 0.727, outperforming TeaCache (2.12x, LPIPS 0.215, SSIM 0.734) by 16% in speed while maintaining comparable quality (LPIPS difference < 1%). Our approach is training-free, plug-and-play, and compatible with existing DiT architectures.

扩散变压器 (DiT) 已成为高质量图像和视频生成的主导架构，但其迭代去噪过程在推理过程中会产生大量计算成本。现有的缓存方法通过跨时间步重用中间计算来加速 DiT，但它们有一个共同的限制：将去噪过程视为跨时间、深度和特征维度的统一。在这项工作中，我们确定了 DiT 去噪中非均匀性的三个正交轴：（1）时间——对缓存错误的敏感度在去噪轨迹上变化很大； (2)深度——连续的缓存决策导致级联近似误差； （3）特征——隐藏状态的不同组成部分表现出异构的时间动态。基于这些观察，我们提出了 SpectralCache，一个统一的缓存框架，包括时间步感知动态调度 (TADS)、累积错误预算 (CEB) 和频率分解缓存 (FDC)。在分辨率为 512x512 的 FLUX.1-schnell 上，SpectralCache 通过 LPIPS 0.217 和 SSIM 0.727 实现了 2.46 倍的加速，比 TeaCache（2.12 倍、LPIPS 0.215、SSIM 0.734）的速度提高了 16%，同时保持了相当的质量（LPIPS 差异 < 1%）。我们的方法无需培训、即插即用，并且与现有的 DiT 架构兼容。

</details>

---

## 10. Orthogonal Spatial-temporal Distributional Transfer for 4D Generation / 4D 生成的正交时空分布传输

**Date**: 2026-03-05 | **arXiv**: [2603.05081v1](http://arxiv.org/abs/2603.05081v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.05081v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

In the AIGC era, generating high-quality 4D content has garnered increasing research attention. Unfortunately, current 4D synthesis research is severely constrained by the lack of large-scale 4D datasets, preventing models from adequately learning the critical spatial-temporal features necessary for high-quality 4D generation, thus hindering progress in this domain. To combat this, we propose a novel framework that transfers rich spatial priors from existing 3D diffusion models and temporal priors from video diffusion models to enhance 4D synthesis. We develop a spatial-temporal-disentangled 4D (STD-4D) Diffusion model, which synthesizes 4D-aware videos through disentangled spatial and temporal latents. To facilitate the best feature transfer, we design a novel Orthogonal Spatial-temporal Distributional Transfer (Orster) mechanism, where the spatiotemporal feature distributions are carefully modeled and injected into the STD-4D Diffusion. Furthermore, during the 4D construction, we devise a spatial-temporal-aware HexPlane (ST-HexPlane) to integrate the transferred spatiotemporal features, thereby improving 4D deformation and 4D Gaussian feature modeling. Experiments demonstrate that our method significantly outperforms existing approaches, achieving superior spatial-temporal consistency and higher-quality 4D synthesis.

在AIGC时代，生成高质量的4D内容已经引起了越来越多的研究关注。不幸的是，当前的 4D 合成研究因缺乏大规模 4D 数据集而受到严重限制，导致模型无法充分学习高质量 4D 生成所需的关键时空特征，从而阻碍了该领域的进展。为了解决这个问题，我们提出了一种新颖的框架，可以从现有的 3D 扩散模型转移丰富的空间先验，从视频扩散模型转移丰富的时间先验，以增强 4D 合成。我们开发了一种时空分离的 4D (STD-4D) 扩散模型，该模型通过分离的空间和时间潜伏来合成 4D 感知视频。为了促进最佳的特征转移，我们设计了一种新颖的正交时空分布转移（Orster）机制，其中时空特征分布被仔细建模并注入到 STD-4D 扩散中。此外，在4D构建过程中，我们设计了一个时空感知的HexPlane（ST-HexPlane）来集成传输的时空特征，从而改进4D变形和4D高斯特征建模。实验表明，我们的方法明显优于现有方法，实现了卓越的时空一致性和更高质量的 4D 合成。

</details>

---

## 11. Think, Then Verify: A Hypothesis-Verification Multi-Agent Framework for Long Video Understanding / 思考，然后验证：用于长视频理解的假设验证多智能体框架

**Date**: 2026-03-05 | **arXiv**: [2603.04977v1](http://arxiv.org/abs/2603.04977v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04977v1)

**Categories**: cs.CV

**Code**: https://github.com/Haorane/VideoHV-Agent.

<details><summary><b>Abstract / 摘要</b></summary>

Long video understanding is challenging due to dense visual redundancy, long-range temporal dependencies, and the tendency of chain-of-thought and retrieval-based agents to accumulate semantic drift and correlation-driven errors. We argue that long-video reasoning should begin not with reactive retrieval, but with deliberate task formulation: the model must first articulate what must be true in the video for each candidate answer to hold. This thinking-before-finding principle motivates VideoHV-Agent, a framework that reformulates video question answering as a structured hypothesis-verification process. Based on video summaries, a Thinker rewrites answer candidates into testable hypotheses, a Judge derives a discriminative clue specifying what evidence must be checked, a Verifier grounds and tests the clue using localized, fine-grained video content, and an Answer agent integrates validated evidence to produce the final answer. Experiments on three long-video understanding benchmarks show that VideoHV-Agent achieves state-of-the-art accuracy while providing enhanced interpretability, improved logical soundness, and lower computational cost. We make our code publicly available at: https://github.com/Haorane/VideoHV-Agent.

由于密集的视觉冗余、长程时间依赖性以及思想链和基于检索的代理积累语义漂移和相关驱动错误的趋势，长视频理解具有挑战性。我们认为，长视频推理不应该从反应性检索开始，而应该从深思熟虑的任务制定开始：模型必须首先阐明视频中每个候选答案必须正确的内容。这种先思考后发现的原则激发了VideoHV-Agent，这是一个将视频问答重新表述为结构化假设验证过程的框架。根据视频摘要，思考者将候选答案重写为可测试的假设，法官得出一条区分线索，指定必须检查哪些证据，验证者使用本地化的细粒度视频内容对线索进行论证和测试，而答案代理则整合经过验证的证据以产生最终答案。对三个长视频理解基准的实验表明，VideoHV-Agent 实现了最先进的准确性，同时提供增强的可解释性、改进的逻辑健全性和更低的计算成本。我们将代码公开在：https://github.com/Haorane/VideoHV-Agent。

</details>

---

## 12. FC-VFI: Faithful and Consistent Video Frame Interpolation for High-FPS Slow Motion Video Generation / FC-VFI：用于高 FPS 慢动作视频生成的忠实且一致的视频帧插值

**Date**: 2026-03-05 | **arXiv**: [2603.04899v1](http://arxiv.org/abs/2603.04899v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04899v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Large pre-trained video diffusion models excel in video frame interpolation but struggle to generate high fidelity frames due to reliance on intrinsic generative priors, limiting detail preservation from start and end frames. Existing methods often depend on motion control for temporal consistency, yet dense optical flow is error-prone, and sparse points lack structural context. In this paper, we propose FC-VFI for faithful and consistent video frame interpolation, supporting \(4\times\)x and \(8\times\) interpolation, boosting frame rates from 30 FPS to 120 and 240 FPS at \(2560\times 1440\)resolution while preserving visual fidelity and motion consistency. We introduce a temporal modeling strategy on the latent sequences to inherit fidelity cues from start and end frames and leverage semantic matching lines for structure-aware motion guidance, improving motion consistency. Furthermore, we propose a temporal difference loss to mitigate temporal inconsistencies. Extensive experiments show FC-VFI achieves high performance and structural integrity across diverse scenarios.

大型预训练视频扩散模型在视频帧插值方面表现出色，但由于依赖内在的生成先验，限制了起始帧和结束帧的细节保留，因此难以生成高保真度帧。现有的方法通常依赖于运动控制来实现时间一致性，但密集的光流容易出错，而稀疏的点缺乏结构上下文。在本文中，我们提出了 FC-VFI 来实现忠实一致的视频帧插值，支持 \(4\times\)x 和 \(8\times\) 插值，在 \(2560\times 1440\) 分辨率下将帧速率从 30 FPS 提高到 120 和 240 FPS，同时保持视觉保真度和运动一致性。我们在潜在序列上引入了时间建模策略，以继承起始帧和结束帧的保真度线索，并利用语义匹配线进行结构感知运动指导，从而提高运动一致性。此外，我们提出了时间差异损失来减轻时间不一致。大量实验表明 FC-VFI 在不同场景下实现了高性能和结构完整性。

</details>

---

## 13. Are Multimodal LLMs Ready for Surveillance? A Reality Check on Zero-Shot Anomaly Detection in the Wild / 多模式法学硕士准备好接受监控了吗？零样本异常检测的现实检验

**Date**: 2026-03-05 | **arXiv**: [2603.04727v1](http://arxiv.org/abs/2603.04727v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04727v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Multimodal large language models (MLLMs) have demonstrated impressive general competence in video understanding, yet their reliability for real-world Video Anomaly Detection (VAD) remains largely unexplored. Unlike conventional pipelines relying on reconstruction or pose-based cues, MLLMs enable a paradigm shift: treating anomaly detection as a language-guided reasoning task. In this work, we systematically evaluate state-of-the-art MLLMs on the ShanghaiTech and CHAD benchmarks by reformulating VAD as a binary classification task under weak temporal supervision. We investigate how prompt specificity and temporal window lengths (1s--3s) influence performance, focusing on the precision--recall trade-off. Our findings reveal a pronounced conservative bias in zero-shot settings; while models exhibit high confidence, they disproportionately favor the 'normal' class, resulting in high precision but a recall collapse that limits practical utility. We demonstrate that class-specific instructions can significantly shift this decision boundary, improving the peak F1-score on ShanghaiTech from 0.09 to 0.64, yet recall remains a critical bottleneck. These results highlight a significant performance gap for MLLMs in noisy environments and provide a foundation for future work in recall-oriented prompting and model calibration for open-world surveillance, which demands complex video understanding and reasoning.

多模态大语言模型 (MLLM) 在视频理解方面表现出了令人印象深刻的综合能力，但其在现实世界视频异常检测 (VAD) 方面的可靠性在很大程度上仍未得到探索。与依赖于重建或基于姿势的线索的传统流程不同，MLLM 实现了范式转变：将异常检测视为语言引导的推理任务。在这项工作中，我们通过将 VAD 重新制定为弱时间监督下的二元分类任务，系统地评估了 ShanghaiTech 和 CHAD 基准上最先进的 MLLM。我们研究提示特异性和时间窗口长度（1s--3s）如何影响性能，重点关注精确率与召回率的权衡。我们的研究结果揭示了零样本设置中明显的保守偏见；虽然模型表现出很高的置信度，但它们不成比例地偏爱“正常”类别，导致精度很高，但召回率崩溃，限制了实际用途。我们证明，特定于类的指令可以显着改变这个决策边界，将上海科技大学的峰值 F1 分数从 0.09 提高到 0.64，但召回率仍然是一个关键瓶颈。这些结果凸显了 MLLM 在噪声环境中的显着性能差距，并为未来开放世界监控的面向回忆的提示和模型校准工作奠定了基础，这需要复杂的视频理解和推理。

</details>

---

## 14. Helios: Real Real-Time Long Video Generation Model / Helios：实时长视频生成模型

**Date**: 2026-03-04 | **arXiv**: [2603.04379v1](http://arxiv.org/abs/2603.04379v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04379v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We introduce Helios, the first 14B video generation model that runs at 19.5 FPS on a single NVIDIA H100 GPU and supports minute-scale generation while matching the quality of a strong baseline. We make breakthroughs along three key dimensions: (1) robustness to long-video drifting without commonly used anti-drifting heuristics such as self-forcing, error-banks, or keyframe sampling; (2) real-time generation without standard acceleration techniques such as KV-cache, sparse/linear attention, or quantization; and (3) training without parallelism or sharding frameworks, enabling image-diffusion-scale batch sizes while fitting up to four 14B models within 80 GB of GPU memory. Specifically, Helios is a 14B autoregressive diffusion model with a unified input representation that natively supports T2V, I2V, and V2V tasks. To mitigate drifting in long-video generation, we characterize typical failure modes and propose simple yet effective training strategies that explicitly simulate drifting during training, while eliminating repetitive motion at its source. For efficiency, we heavily compress the historical and noisy context and reduce the number of sampling steps, yielding computational costs comparable to -- or lower than -- those of 1.3B video generative models. Moreover, we introduce infrastructure-level optimizations that accelerate both inference and training while reducing memory consumption. Extensive experiments demonstrate that Helios consistently outperforms prior methods on both short- and long-video generation. We plan to release the code, base model, and distilled model to support further development by the community.

我们推出了 Helios，这是第一个 14B 视频生成模型，它在单个 NVIDIA H100 GPU 上以 19.5 FPS 运行，支持分钟级生成，同时匹配强大基线的质量。我们在三个关键维度上取得了突破：（1）对长视频漂移的鲁棒性，无需常用的抗漂移启发式方法，例如自我强迫、错误库或关键帧采样； (2) 实时生成，无需标准加速技术，例如 KV 缓存、稀疏/线性注意力或量化； (3) 在没有并行或分片框架的情况下进行训练，实现图像扩散规模的批量大小，同时在 80 GB GPU 内存中拟合最多四个 14B 模型。具体来说，Helios 是一个 14B 自回归扩散模型，具有统一的输入表示，原生支持 T2V、I2V 和 V2V 任务。为了减轻长视频生成中的漂移，我们描述了典型的故障模式，并提出了简单而有效的训练策略，这些策略在训练过程中明确模拟漂移，同时从源头消除重复运动。为了提高效率，我们大量压缩历史和噪声上下文，并减少采样步骤的数量，从而产生与 1.3B 视频生成模型相当或更低的计算成本。此外，我们引入了基础设施级优化，可以加速推理和训练，同时减少内存消耗。大量实验表明，Helios 在短视频和长视频生成方面始终优于先前的方法。我们计划发布代码、基础模型和蒸馏模型以支持社区的进一步开发。

</details>

---

## 15. FocusGraph: Graph-Structured Frame Selection for Embodied Long Video Question Answering / FocusGraph：用于体现长视频问答的图结构框架选择

**Date**: 2026-03-04 | **arXiv**: [2603.04349v1](http://arxiv.org/abs/2603.04349v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04349v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

The ability to understand long videos is vital for embodied intelligent agents, because their effectiveness depends on how well they can accumulate, organize, and leverage long-horizon perceptual memories. Recently, multimodal LLMs have been gaining popularity for solving the long video understanding task due to their general ability to understand natural language and to leverage world knowledge. However, as the number of frames provided to an MLLM increases, the quality of its responses tends to degrade, and inference time grows. Therefore, when using MLLMs for long video understanding, a crucial step is selecting key frames from the video to answer user queries.   In this work, we develop FocusGraph, a framework for keyframe selection for question answering over long egocentric videos. It leverages a lightweight trainable Scene-Caption LLM Selector that selects query-relevant clips based on their graph-based captions, and a training-free method for selecting keyframes from these clips. Unlike existing methods, the proposed Scene-Caption LLM Selector does not rely on the original sequence of low-resolution frames; instead, it operates on a compact textual representation of the scene. We then design a training-free Patch-wise Sparse-Flow Retention (PSFR) method to select keyframes from the resulting sequence of clips, which are fed into an MLLM to produce the final answer. Together, these components enable FocusGraph to achieve state-of-the-art results on challenging egocentric long-video question answering benchmarks, including FindingDory and HourVideo, while significantly reducing inference time relative to baseline approaches.

理解长视频的能力对于具身智能体来说至关重要，因为它们的有效性取决于它们积累、组织和利用长视野感知记忆的能力。最近，多模态法学硕士由于其理解自然语言和利用世界知识的一般能力，在解决长视频理解任务方面越来越受欢迎。然而，随着提供给 MLLM 的帧数量增加，其响应质量往往会下降，推理时间也会增加。因此，当使用 MLLM 进行长视频理解时，关键的一步是从视频中选择关键帧来回答用户查询。   在这项工作中，我们开发了 FocusGraph，这是一个用于在以自我为中心的长视频中回答问题的关键帧选择框架。它利用轻量级可训练场景字幕 LLM 选择器，根据基于图形的字幕选择与查询相关的剪辑，以及从这些剪辑中选择关键帧的免训练方法。与现有方法不同，所提出的 Scene-Caption LLM 选择器不依赖于低分辨率帧的原始序列；相反，它对场景的紧凑文本表示进行操作。然后，我们设计了一种免训练的分片稀疏流保留 (PSFR) 方法，从生成的剪辑序列中选择关键帧，将其输入 MLLM 以生成最终答案。这些组件共同使 FocusGraph 能够在具有挑战性的以自我为中心的长视频问答基准（包括 FindDory 和 HourVideo）上取得最先进的结果，同时相对于基线方法显着缩短推理时间。

</details>

---

## 16. ArtHOI: Articulated Human-Object Interaction Synthesis by 4D Reconstruction from Video Priors / ArtHOI：通过视频先验进行 4D 重建的铰接式人机交互合成

**Date**: 2026-03-04 | **arXiv**: [2603.04338v1](http://arxiv.org/abs/2603.04338v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04338v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Synthesizing physically plausible articulated human-object interactions (HOI) without 3D/4D supervision remains a fundamental challenge. While recent zero-shot approaches leverage video diffusion models to synthesize human-object interactions, they are largely confined to rigid-object manipulation and lack explicit 4D geometric reasoning. To bridge this gap, we formulate articulated HOI synthesis as a 4D reconstruction problem from monocular video priors: given only a video generated by a diffusion model, we reconstruct a full 4D articulated scene without any 3D supervision. This reconstruction-based approach treats the generated 2D video as supervision for an inverse rendering problem, recovering geometrically consistent and physically plausible 4D scenes that naturally respect contact, articulation, and temporal coherence. We introduce ArtHOI, the first zero-shot framework for articulated human-object interaction synthesis via 4D reconstruction from video priors. Our key designs are: 1) Flow-based part segmentation: leveraging optical flow as a geometric cue to disentangle dynamic from static regions in monocular video; 2) Decoupled reconstruction pipeline: joint optimization of human motion and object articulation is unstable under monocular ambiguity, so we first recover object articulation, then synthesize human motion conditioned on the reconstructed object states. ArtHOI bridges video-based generation and geometry-aware reconstruction, producing interactions that are both semantically aligned and physically grounded. Across diverse articulated scenes (e.g., opening fridges, cabinets, microwaves), ArtHOI significantly outperforms prior methods in contact accuracy, penetration reduction, and articulation fidelity, extending zero-shot interaction synthesis beyond rigid manipulation through reconstruction-informed synthesis.

在没有 3D/4D 监督的情况下合成物理上合理的人机交互 (HOI) 仍然是一个基本挑战。虽然最近的零镜头方法利用视频扩散模型来合成人与物体的交互，但它们很大程度上局限于刚性物体操作并且缺乏明确的 4D 几何推理。为了弥补这一差距，我们将铰接 HOI 合成制定为来自单目视频先验的 4D 重建问题：仅给定由扩散模型生成的视频，我们在没有任何 3D 监督的情况下重建完整的 4D 铰接场景。这种基于重建的方法将生成的 2D 视频视为逆渲染问题的监督，恢复几何上一致且物理上合理的 4D 场景，自然地尊重接触、清晰度和时间连贯性。我们介绍了 ArtHOI，这是第一个通过视频先验进行 4D 重建来进行清晰人机交互合成的零样本框架。我们的主要设计是：1）基于流的部分分割：利用光流作为几何线索来分离单目视频中的动态区域和静态区域； 2）解耦重建流程：人体运动和物体清晰度的联合优化在单目模糊条件下不稳定，因此我们首先恢复物体清晰度，然后根据重建的物体状态合成人体运动。 ArtHOI 将基于视频的生成和几何感知重建联系起来，产生语义上一致且物理上接地的交互。在不同的铰接场景（例如，打开冰箱、橱柜、微波炉）中，ArtHOI 在接触精度、穿透减少和铰接保真度方面显着优于先前的方法，通过重建信息合成将零样本交互合成扩展到刚性操作之外。

</details>

---

## 17. CubeComposer: Spatio-Temporal Autoregressive 4K 360° Video Generation from Perspective Video / CubeComposer：从透视视频生成时空自回归 4K 360° 视频

**Date**: 2026-03-04 | **arXiv**: [2603.04291v1](http://arxiv.org/abs/2603.04291v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04291v1)

**Categories**: cs.CV, cs.AI

**Project**: https://lg-li.github.io/project/cubecomposer  <details><summary><b>Abstract / 摘要</b></summary>

Generating high-quality 360° panoramic videos from perspective input is one of the crucial applications for virtual reality (VR), whereby high-resolution videos are especially important for immersive experience. Existing methods are constrained by computational limitations of vanilla diffusion models, only supporting $\leq$ 1K resolution native generation and relying on suboptimal post super-resolution to increase resolution. We introduce CubeComposer, a novel spatio-temporal autoregressive diffusion model that natively generates 4K-resolution 360° videos. By decomposing videos into cubemap representations with six faces, CubeComposer autoregressively synthesizes content in a well-planned spatio-temporal order, reducing memory demands while enabling high-resolution output. Specifically, to address challenges in multi-dimensional autoregression, we propose: (1) a spatio-temporal autoregressive strategy that orchestrates 360° video generation across cube faces and time windows for coherent synthesis; (2) a cube face context management mechanism, equipped with a sparse context attention design to improve efficiency; and (3) continuity-aware techniques, including cube-aware positional encoding, padding, and blending to eliminate boundary seams. Extensive experiments on benchmark datasets demonstrate that CubeComposer outperforms state-of-the-art methods in native resolution and visual quality, supporting practical VR application scenarios. Project page: https://lg-li.github.io/project/cubecomposer

根据视角输入生成高质量的 360° 全景视频是虚拟现实 (VR) 的关键应用之一，其中高分辨率视频对于沉浸式体验尤为重要。现有方法受到普通扩散模型计算限制的限制，仅支持 $\leq$ 1K 分辨率的原生生成，并依赖次优的后超分辨率来提高分辨率。我们引入了 CubeComposer，这是一种新颖的时空自回归扩散模型，可以原生生成 4K 分辨率的 360° 视频。通过将视频分解为具有六个面的立方体贴图表示，CubeComposer 以精心规划的时空顺序自动回归合成内容，减少内存需求，同时实现高分辨率输出。具体来说，为了解决多维自回归中的挑战，我们提出：（1）一种时空自回归策略，协调跨立方体面和时间窗口的 360° 视频生成，以进行相干合成； （2）立方体面上下文管理机制，配备稀疏上下文注意力设计以提高效率； (3) 连续性感知技术，包括立方体感知位置编码、填充和混合以消除边界接缝。对基准数据集的大量实验表明，CubeComposer 在原始分辨率和视觉质量方面优于最先进的方法，支持实际的 VR 应用场景。项目页面：https://lg-li.github.io/project/cubecomposer

</details>

---

## 18. A Baseline Study and Benchmark for Few-Shot Open-Set Action Recognition with Feature Residual Discrimination / 具有特征残差判别的少样本开放集动作识别的基线研究和基准

**Date**: 2026-03-04 | **arXiv**: [2603.04125v1](http://arxiv.org/abs/2603.04125v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.04125v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Few-Shot Action Recognition (FS-AR) has shown promising results but is often limited by a closed-set assumption that fails in real-world open-set scenarios. While Few-Shot Open-Set (FSOS) recognition is well-established for images, its extension to spatio-temporal video data remains underexplored. To address this, we propose an architectural extension based on a Feature-Residual Discriminator (FR-Disc), adapting previous work on skeletal data to the more complex video domain. Extensive experiments on five datasets demonstrate that while common open-set techniques provide only marginal gains, our FR-Disc significantly enhances unknown rejection capabilities without compromising closed-set accuracy, setting a new state-of-the-art for FSOS-AR. The project website, code, and benchmark are available at: https://hsp-iit.github.io/fsosar/.

少镜头动作识别 (FS-AR) 已显示出有希望的结果，但通常受到封闭集假设的限制，而在现实世界的开放集场景中会失败。虽然少镜头开放集 (FSOS) 识别在图像方面已经很成熟，但其对时空视频数据的扩展仍未得到充分探索。为了解决这个问题，我们提出了一种基于特征残差鉴别器（FR-Disc）的架构扩展，将之前关于骨架数据的工作调整到更复杂的视频领域。对五个数据集的大量实验表明，虽然常见的开放集技术仅提供边际收益，但我们的 FR-Disc 显着增强了未知的拒绝能力，而不影响封闭集的准确性，为 FSOS-AR 设定了新的最先进技术。项目网站、代码和基准可在以下位置获取：https://hsp-iit.github.io/fsosar/。

</details>

---



</details>

<details><summary><b>2026-03-05 (7 papers)</b></summary>

# arXiv Video Papers - 2026-03-05

**Paper Count**: 7

---

## 1. RIVER: A Real-Time Interaction Benchmark for Video LLMs / RIVER：视频法学硕士的实时交互基准

**Date**: 2026-03-04 | **arXiv**: [2603.03985v1](http://arxiv.org/abs/2603.03985v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.03985v1)

**Categories**: cs.CV

**Code**: https://github.com/OpenGVLab/RIVER.

<details><summary><b>Abstract / 摘要</b></summary>

The rapid advancement of multimodal large language models has demonstrated impressive capabilities, yet nearly all operate in an offline paradigm, hindering real-time interactivity. Addressing this gap, we introduce the Real-tIme Video intERaction Bench (RIVER Bench), designed for evaluating online video comprehension. RIVER Bench introduces a novel framework comprising Retrospective Memory, Live-Perception, and Proactive Anticipation tasks, closely mimicking interactive dialogues rather than responding to entire videos at once. We conducted detailed annotations using videos from diverse sources and varying lengths, and precisely defined the real-time interactive format. Evaluations across various model categories reveal that while offline models perform well in single question-answering tasks, they struggle with real-time processing. Addressing the limitations of existing models in online video interaction, especially their deficiencies in long-term memory and future perception, we proposed a general improvement method that enables models to interact with users more flexibly in real time. We believe this work will significantly advance the development of real-time interactive video understanding models and inspire future research in this emerging field. Datasets and code are publicly available at https://github.com/OpenGVLab/RIVER.

多模态大语言模型的快速发展已经展示了令人印象深刻的能力，但几乎所有模型都以离线范式运行，阻碍了实时交互。为了解决这一差距，我们引入了实时视频交互基准（RIVER Bench），专为评估在线视频理解而设计。 RIVER Bench 引入了一个新颖的框架，包括回顾性记忆、实时感知和主动预期任务，紧密模仿交互式对话，而不是立即响应整个视频。我们对不同来源、不同长度的视频进行了详细的标注，并精确定义了实时交互格式。对各种模型类别的评估表明，虽然离线模型在单一问答任务中表现良好，但它们在实时处理方面表现不佳。针对在线视频交互中现有模型的局限性，特别是在长期记忆和未来感知方面的缺陷，我们提出了一种通用的改进方法，使模型能够更灵活地与用户实时交互。我们相信这项工作将显着推进实时交互式视频理解模型的发展，并激发这一新兴领域的未来研究。数据集和代码可在 https://github.com/OpenGVLab/RIVER 上公开获取。

</details>

---

## 2. InfinityStory: Unlimited Video Generation with World Consistency and Character-Aware Shot Transitions / InfinityStory：无限视频生成，具有世界一致性和角色感知镜头过渡

**Date**: 2026-03-04 | **arXiv**: [2603.03646v1](http://arxiv.org/abs/2603.03646v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.03646v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Generating long-form storytelling videos with consistent visual narratives remains a significant challenge in video synthesis. We present a novel framework, dataset, and a model that address three critical limitations: background consistency across shots, seamless multi-subject shot-to-shot transitions, and scalability to hour-long narratives. Our approach introduces a background-consistent generation pipeline that maintains visual coherence across scenes while preserving character identity and spatial relationships. We further propose a transition-aware video synthesis module that generates smooth shot transitions for complex scenarios involving multiple subjects entering or exiting frames, going beyond the single-subject limitations of prior work. To support this, we contribute with a synthetic dataset of 10,000 multi-subject transition sequences covering underrepresented dynamic scene compositions. On VBench, InfinityStory achieves the highest Background Consistency (88.94), highest Subject Consistency (82.11), and the best overall average rank (2.80), showing improved stability, smoother transitions, and better temporal coherence.

生成具有一致视觉叙事的长篇故事视频仍然是视频合成中的重大挑战。我们提出了一个新颖的框架、数据集和模型，解决了三个关键限制：镜头之间的背景一致性、无缝的多主题镜头过渡以及长达一小时叙事的可扩展性。我们的方法引入了背景一致的生成管道，可以保持场景之间的视觉连贯性，同时保留角色身份和空间关系。我们进一步提出了一种过渡感知视频合成模块，可以为涉及多个主体进入或退出帧的复杂场景生成平滑的镜头过渡，超越了先前工作的单一主体限制。为了支持这一点，我们贡献了一个包含 10,000 个多主体过渡序列的合成数据集，涵盖了代表性不足的动态场景组合。在 VBench 上，InfinityStory 实现了最高的背景一致性 (88.94)、最高的主题一致性 (82.11) 和最佳的总体平均排名 (2.80)，显示出更高的稳定性、更平滑的过渡和更好的时间连贯性。

</details>

---

## 3. PhyPrompt: RL-based Prompt Refinement for Physically Plausible Text-to-Video Generation / PhyPrompt：基于强化学习的提示细化，用于生成物理上合理的文本到视频

**Date**: 2026-03-03 | **arXiv**: [2603.03505v1](http://arxiv.org/abs/2603.03505v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.03505v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

State-of-the-art text-to-video (T2V) generators frequently violate physical laws despite high visual quality. We show this stems from insufficient physical constraints in prompts rather than model limitations: manually adding physics details reliably produces physically plausible videos, but requires expertise and does not scale. We present PhyPrompt, a two-stage reinforcement learning framework that automatically refines prompts for physically realistic generation. First, we fine-tune a large language model on a physics-focused Chain-of-Thought dataset to integrate principles like object motion and force interactions while preserving user intent. Second, we apply Group Relative Policy Optimization with a dynamic reward curriculum that initially prioritizes semantic fidelity, then progressively shifts toward physical commonsense. This curriculum achieves synergistic optimization: PhyPrompt-7B reaches 40.8\% joint success on VideoPhy2 (8.6pp gain), improving physical commonsense by 11pp (55.8\% to 66.8\%) while simultaneously increasing semantic adherence by 4.4pp (43.4\% to 47.8\%). Remarkably, our curriculum exceeds single-objective training on both metrics, demonstrating compositional prompt discovery beyond conventional multi-objective trade-offs. PhyPrompt outperforms GPT-4o (+3.8\% joint) and DeepSeek-V3 (+2.2\%, 100$\times$ larger) using only 7B parameters. The approach transfers zero-shot across diverse T2V architectures (Lavie, VideoCrafter2, CogVideoX-5B) with up to 16.8\% improvement, establishing that domain-specialized reinforcement learning with compositional curricula surpasses general-purpose scaling for physics-aware generation.

尽管视觉质量很高，但最先进的文本到视频 (T2V) 生成器经常违反物理定律。我们表明，这源于提示中物理约束不足，而不是模型限制：手动添加物理细节可以可靠地生成物理上合理的视频，但需要专业知识并且无法扩展。我们提出了 PhyPrompt，这是一个两阶段强化学习框架，可以自动优化提示以实现物理真实的生成。首先，我们在以物理为中心的思想链数据集上微调大型语言模型，以集成对象运动和力交互等原理，同时保留用户意图。其次，我们应用群体相对策略优化和动态奖励课程，该课程最初优先考虑语义保真度，然后逐步转向物理常识。该课程实现了协同优化：PhyPrompt-7B 在 VideoPhy2 上达到 40.8\% 联合成功率（8.6pp 增益），将物理常识提高 11pp（55.8\% 至 66.8\%），同时将语义依从性提高 4.4pp（43.4\% 至 47.8\%）。值得注意的是，我们的课程在这两个指标上都超过了单目标训练，展示了超越传统多目标权衡的组合即时发现。仅使用 7B 参数，PhyPrompt 就优于 GPT-4o（+3.8\% 联合）和 DeepSeek-V3（+2.2\%，大 100$\times$）。该方法在不同的 T2V 架构（Lavie、VideoCrafter2、CogVideoX-5B）之间进行零样本传输，性能提升高达 16.8%，确立了具有组合课程的领域专业强化学习超越了物理感知生成的通用扩展。

</details>

---

## 4. Phys4D: Fine-Grained Physics-Consistent 4D Modeling from Video Diffusion / Phys4D：基于视频扩散的细粒度物理一致 4D 建模

**Date**: 2026-03-03 | **arXiv**: [2603.03485v1](http://arxiv.org/abs/2603.03485v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.03485v1)

**Categories**: cs.CV, cs.AI, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Recent video diffusion models have achieved impressive capabilities as large-scale generative world models. However, these models often struggle with fine-grained physical consistency, exhibiting physically implausible dynamics over time. In this work, we present \textbf{Phys4D}, a pipeline for learning physics-consistent 4D world representations from video diffusion models. Phys4D adopts \textbf{a three-stage training paradigm} that progressively lifts appearance-driven video diffusion models into physics-consistent 4D world representations. We first bootstrap robust geometry and motion representations through large-scale pseudo-supervised pretraining, establishing a foundation for 4D scene modeling. We then perform physics-grounded supervised fine-tuning using simulation-generated data, enforcing temporally consistent 4D dynamics. Finally, we apply simulation-grounded reinforcement learning to correct residual physical violations that are difficult to capture through explicit supervision. To evaluate fine-grained physical consistency beyond appearance-based metrics, we introduce a set of \textbf{4D world consistency evaluation} that probe geometric coherence, motion stability, and long-horizon physical plausibility. Experimental results demonstrate that Phys4D substantially improves fine-grained spatiotemporal and physical consistency compared to appearance-driven baselines, while maintaining strong generative performance. Our project page is available at https://sensational-brioche-7657e7.netlify.app/

最近的视频扩散模型作为大规模生成世界模型已经取得了令人印象深刻的能力。然而，这些模型常常难以实现细粒度的物理一致性，随着时间的推移表现出物理上令人难以置信的动态。在这项工作中，我们提出了 \textbf{Phys4D}，一个用于从视频扩散模型学习物理一致的 4D 世界表示的管道。 Phys4D 采用 \textbf{三阶段训练范例}，逐步将外观驱动的视频扩散模型提升为物理一致的 4D 世界表示。我们首先通过大规模伪监督预训练引导鲁棒的几何和运动表示，为 4D 场景建模奠定基础。然后，我们使用模拟生成的数据执行基于物理的监督微调，从而实现时间一致的 4D 动态。最后，我们应用基于模拟的强化学习来纠正难以通过显式监督捕获的残留物理违规行为。为了评估基于外观的指标之外的细粒度物理一致性，我们引入了一组 \textbf{4D 世界一致性评估}，用于探测几何相干性、运动稳定性和长期物理合理性。实验结果表明，与外观驱动的基线相比，Phys4D 显着提高了细粒度时空和物理一致性，同时保持了强大的生成性能。我们的项目页面位于 https://sensational-brioche-7657e7.netlify.app/

</details>

---

## 5. Proact-VL: A Proactive VideoLLM for Real-Time AI Companions / Proact-VL：用于实时 AI 伴侣的主动式 VideoLLM

**Date**: 2026-03-03 | **arXiv**: [2603.03447v1](http://arxiv.org/abs/2603.03447v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.03447v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Proactive and real-time interactive experiences are essential for human-like AI companions, yet face three key challenges: (1) achieving low-latency inference under continuous streaming inputs, (2) autonomously deciding when to respond, and (3) controlling both quality and quantity of generated content to meet real-time constraints. In this work, we instantiate AI companions through two gaming scenarios, commentator and guide, selected for their suitability for automatic evaluation. We introduce the Live Gaming Benchmark, a large-scale dataset with three representative scenarios: solo commentary, co-commentary, and user guidance, and present Proact-VL, a general framework that shapes multimodal language models into proactive, real-time interactive agents capable of human-like environment perception and interaction. Extensive experiments show Proact-VL achieves superior response latency and quality while maintaining strong video understanding capabilities, demonstrating its practicality for real-time interactive applications.

主动和实时的交互体验对于类人人工智能伴侣至关重要，但面临三个关键挑战：（1）在连续流输入下实现低延迟推理，（2）自主决定何时响应，以及（3）控制生成内容的质量和数量以满足实时限制。在这项工作中，我们通过两个游戏场景（解说员和导游）来实例化人工智能同伴，并根据它们是否适合自动评估来选择。我们介绍了 Live Gaming Benchmark，这是一个包含三种代表性场景的大型数据集：单独评论、共同评论和用户指导，并提出了 Proact-VL，这是一个通用框架，可将多模态语言模型塑造成能够进行类人环境感知和交互的主动、实时交互代理。大量实验表明，Proact-VL 在保持强大的视频理解能力的同时，实现了卓越的响应延迟和质量，展示了其对于实时交互应用的实用性。

</details>

---

## 6. DuoMo: Dual Motion Diffusion for World-Space Human Reconstruction / DuoMo：用于世界空间人体重建的双运动扩散

**Date**: 2026-03-03 | **arXiv**: [2603.03265v1](http://arxiv.org/abs/2603.03265v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.03265v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We present DuoMo, a generative method that recovers human motion in world-space coordinates from unconstrained videos with noisy or incomplete observations. Reconstructing such motion requires solving a fundamental trade-off: generalizing from diverse and noisy video inputs while maintaining global motion consistency. Our approach addresses this problem by factorizing motion learning into two diffusion models. The camera-space model first estimates motion from videos in camera coordinates. The world-space model then lifts this initial estimate into world coordinates and refines it to be globally consistent. Together, the two models can reconstruct motion across diverse scenes and trajectories, even from highly noisy or incomplete observations. Moreover, our formulation is general, generating the motion of mesh vertices directly and bypassing parametric models. DuoMo achieves state-of-the-art performance. On EMDB, our method obtains a 16% reduction in world-space reconstruction error while maintaining low foot skating. On RICH, it obtains a 30% reduction in world-space error. Project page: https://yufu-wang.github.io/duomo/

我们提出了 DuoMo，一种生成方法，可以从带有噪声或不完整观察的无约束视频中恢复世界空间坐标中的人体运动。重建这种运动需要解决一个基本的权衡：从多样化和嘈杂的视频输入中进行概括，同时保持全局运动一致性。我们的方法通过将运动学习分解为两个扩散模型来解决这个问题。相机空间模型首先估计相机坐标中视频的运动。然后，世界空间模型将这个初始估计提升到世界坐标中，并将其细化为全局一致。这两个模型一起可以重建不同场景和轨迹的运动，即使是在高噪声或不完整的观察中也是如此。此外，我们的公式是通用的，直接生成网格顶点的运动并绕过参数模型。 DuoMo 实现了最先进的性能。在 EMDB 上，我们的方法在保持低脚滑行的同时，世界空间重建误差减少了 16%。在 RICH 上，它的世界空间误差降低了 30%。项目页面：https://yufu-wang.github.io/duomo/

</details>

---

## 7. Kling-MotionControl Technical Report / Kling-MotionControl 技术报告

**Date**: 2026-03-03 | **arXiv**: [2603.03160v1](http://arxiv.org/abs/2603.03160v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.03160v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Character animation aims to generate lifelike videos by transferring motion dynamics from a driving video to a reference image. Recent strides in generative models have paved the way for high-fidelity character animation. In this work, we present Kling-MotionControl, a unified DiT-based framework engineered specifically for robust, precise, and expressive holistic character animation. Leveraging a divide-and-conquer strategy within a cohesive system, the model orchestrates heterogeneous motion representations tailored to the distinct characteristics of body, face, and hands, effectively reconciling large-scale structural stability with fine-grained articulatory expressiveness. To ensure robust cross-identity generalization, we incorporate adaptive identity-agnostic learning, facilitating natural motion retargeting for diverse characters ranging from realistic humans to stylized cartoons. Simultaneously, we guarantee faithful appearance preservation through meticulous identity injection and fusion designs, further supported by a subject library mechanism that leverages comprehensive reference contexts. To ensure practical utility, we implement an advanced acceleration framework utilizing multi-stage distillation, boosting inference speed by over 10x. Kling-MotionControl distinguishes itself through intelligent semantic motion understanding and precise text responsiveness, allowing for flexible control beyond visual inputs. Human preference evaluations demonstrate that Kling-MotionControl delivers superior performance compared to leading commercial and open-source solutions, achieving exceptional fidelity in holistic motion control, open domain generalization, and visual quality and coherence. These results establish Kling-MotionControl as a robust solution for high-quality, controllable, and lifelike character animation.

角色动画旨在通过将运动动态从驾驶视频传输到参考图像来生成逼真的视频。生成模型的最新进展为高保真角色动画铺平了道路。在这项工作中，我们提出了 Kling-MotionControl，这是一个基于 DiT 的统一框架，专为稳健、精确且富有表现力的整体角色动画而设计。该模型利用内聚系统内的分而治之策略，精心编排针对身体、面部和手的独特特征定制的异质运动表示，有效地协调大规模结构稳定性与细粒度的关节表现力。为了确保强大的跨身份泛化，我们结合了自适应身份不可知学习，促进从现实人类到程式化卡通等不同角色的自然运动重定向。同时，我们通过细致的身份注入和融合设计保证忠实的外观保留，并得到利用综合参考上下文的主题库机制的进一步支持。为了确保实用性，我们利用多级蒸馏实现了先进的加速框架，将推理速度提高了 10 倍以上。 Kling-MotionControl 通过智能语义运动理解和精确的文本响应能力而脱颖而出，允许超越视觉输入的灵活控制。人类偏好评估表明，与领先的商业和开源解决方案相比，Kling-MotionControl 提供了卓越的性能，在整体运动控制、开放域泛化以及视觉质量和一致性方面实现了卓越的保真度。这些结果使 Kling-MotionControl 成为高质量、可控且逼真的角色动画的强大解决方案。

</details>

---



</details>

<details><summary><b>2026-03-04 (23 papers)</b></summary>

# arXiv Video Papers - 2026-03-04

**Paper Count**: 23

---

## 1. EduVQA: Benchmarking AI-Generated Video Quality Assessment for Education / EduVQA：人工智能生成的教育视频质量评估基准

**Date**: 2026-03-03 | **arXiv**: [2603.03066v1](http://arxiv.org/abs/2603.03066v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.03066v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

While AI-generated content (AIGC) models have achieved remarkable success in generating photorealistic videos, their potential to support visual, story-driven learning in education remains largely untapped. To close this gap, we present EduAIGV-1k, the first benchmark dataset and evaluation framework dedicated to assessing the quality of AI-generated videos (AIGVs) designed to teach foundational math concepts, such as numbers and geometry, to young learners. EduAIGV-1k contains 1,130 short videos produced by ten state-of-the-art text-to-video (T2V) models using 113 pedagogy-oriented prompts. Each video is accompanied by rich, fine-grained annotations along two complementary axes: (1) Perceptual quality, disentangled into spatial and temporal fidelity, and (2) Prompt alignment, labeled at the word-level and sentence-level to quantify the degree to which each mathematical concept in the prompt is accurately grounded in the generated video. These fine-grained annotations transform each video into a multi-dimensional, interpretable supervision signal, far beyond a single quality score. Leveraging this dense feedback, we introduce EduVQA for both perceptual and alignment quality assessment of AIGVs. In particular, we propose a Structured 2D Mixture-of-Experts (S2D-MoE) module, which enhances the dependency between overall quality and each sub-dimension by shared experts and dynamic 2D gating matrix. Extensive experiments show our EduVQA consistently outperforms existing VQA baselines. Both our dataset and code will be publicly available.

虽然人工智能生成内容 (AIGC) 模型在生成逼真视频方面取得了显着成功，但它们在教育中支持视觉、故事驱动学习的潜力在很大程度上尚未开发。为了弥补这一差距，我们推出了 EduAIGV-1k，这是第一个基准数据集和评估框架，致力于评估人工智能生成视频 (AIGV) 的质量，旨在向年轻学习者教授数字和几何等基础数学概念。 EduAIGV-1k 包含 1,130 个短视频，由 10 个最先进的文本转视频 (T2V) 模型使用 113 个面向教学的提示制作。每个视频都沿着两个互补轴附有丰富、细粒度的注释：(1) 感知质量，分解为空间和时间保真度；(2) 提示对齐，在单词级别和句子级别进行标记，以量化提示中的每个数学概念在生成的视频中准确落地的程度。这些细粒度的注释将每个视频转换为多维、可解释的监督信号，远远超出了单一的质量分数。利用这种密集的反馈，我们引入了 EduVQA，用于 AIGV 的感知和对准质量评估。特别是，我们提出了结构化2D混合专家（S2D-MoE）模块，该模块通过共享专家和动态2D门控矩阵增强了整体质量与每个子维度之间的依赖性。大量实验表明，我们的 EduVQA 始终优于现有的 VQA 基线。我们的数据集和代码都将公开。

</details>

---

## 2. TC-Padé: Trajectory-Consistent Padé Approximation for Diffusion Acceleration / TC-Padé：扩散加速的轨迹一致 Padé 近似

**Date**: 2026-03-03 | **arXiv**: [2603.02943v1](http://arxiv.org/abs/2603.02943v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02943v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Despite achieving state-of-the-art generation quality, diffusion models are hindered by the substantial computational burden of their iterative sampling process. While feature caching techniques achieve effective acceleration at higher step counts (e.g., 50 steps), they exhibit critical limitations in the practical low-step regime of 20-30 steps. As the interval between steps increases, polynomial-based extrapolators like TaylorSeer suffer from error accumulation and trajectory drift. Meanwhile, conventional caching strategies often overlook the distinct dynamical properties of different denoising phases. To address these challenges, we propose Trajectory-Consistent Padé approximation, a feature prediction framework grounded in Padé approximation. By modeling feature evolution through rational functions, our approach captures asymptotic and transitional behaviors more accurately than Taylor-based methods. To enable stable and trajectory-consistent sampling under reduced step counts, TC-Padé incorporates (1) adaptive coefficient modulation that leverages historical cached residuals to detect subtle trajectory transitions, and (2) step-aware prediction strategies tailored to the distinct dynamics of early, mid, and late sampling stages. Extensive experiments on DiT-XL/2, FLUX.1-dev, and Wan2.1 across both image and video generation demonstrate the effectiveness of TC-Padé. For instance, TC-Padé achieves 2.88x acceleration on FLUX.1-dev and 1.72x on Wan2.1 while maintaining high quality across FID, CLIP, Aesthetic, and VBench-2.0 metrics, substantially outperforming existing feature caching methods.

尽管实现了最先进的生成质量，但扩散模型仍因其迭代采样过程的大量计算负担而受到阻碍。虽然特征缓存技术在较高步数（例如 50 步）下实现了有效加速，但它们在 20-30 步的实际低步状态中表现出严重的局限性。随着步骤之间的间隔增加，像 TaylorSeer 这样基于多项式的外推器会遭受误差累积和轨迹漂移。同时，传统的缓存策略常常忽视不同去噪阶段的独特动态特性。为了应对这些挑战，我们提出了轨迹一致的 Padé 近似，这是一种基于 Padé 近似的特征预测框架。通过有理函数对特征演化进行建模，我们的方法比基于泰勒的方法更准确地捕获渐近和过渡行为。为了在减少步数的情况下实现稳定且轨迹一致的采样，TC-Padé 结合了 (1) 自适应系数调制，利用历史缓存残差来检测微妙的轨迹转换，以及 (2) 针对早期、中期和晚期采样阶段的不同动态量身定制的步感知预测策略。在 DiT-XL/2、FLUX.1-dev 和 Wan2.1 上进行的图像和视频生成方面的大量实验证明了 TC-Padé 的有效性。例如，TC-Padé 在 FLUX.1-dev 上实现了 2.88 倍加速，在 Wan2.1 上实现了 1.72 倍加速，同时在 FID、CLIP、Aesthetic 和 VBench-2.0 指标上保持了高质量，大大优于现有的特征缓存方法。

</details>

---

## 3. Interpretable Motion-Attentive Maps: Spatio-Temporally Localizing Concepts in Video Diffusion Transformers / 可解释的运动注意力图：视频扩散变压器中的时空定位概念

**Date**: 2026-03-03 | **arXiv**: [2603.02919v1](http://arxiv.org/abs/2603.02919v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02919v1)

**Categories**: cs.CV, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Video Diffusion Transformers (DiTs) have been synthesizing high-quality video with high fidelity from given text descriptions involving motion. However, understanding how Video DiTs convert motion words into video remains insufficient. Furthermore, while prior studies on interpretable saliency maps primarily target objects, motion-related behavior in Video DiTs remains largely unexplored. In this paper, we investigate concrete motion features that specify when and which object moves for a given motion concept. First, to spatially localize, we introduce GramCol, which adaptively produces per-frame saliency maps for any text concept, including both motion and non-motion. Second, we propose a motion-feature selection algorithm to obtain an Interpretable Motion-Attentive Map (IMAP) that localizes motion spatially and temporally. Our method discovers concept saliency maps without the need for any gradient calculation or parameter update. Experimentally, our method shows outstanding localization capability on the motion localization task and zero-shot video semantic segmentation, providing interpretable and clearer saliency maps for both motion and non-motion concepts.

视频扩散变压器 (DiT) 已经根据给定的涉及运动的文本描述合成了高保真度的高质量视频。然而，了解 Video DiT 如何将动作词转换为视频仍然不够。此外，虽然先前对可解释显着性图的研究主要针对目标对象，但视频 DiT 中的运动相关行为在很大程度上仍未得到探索。在本文中，我们研究了具体的运动特征，这些特征指定了给定运动概念的对象何时移动以及哪个对象移动。首先，为了进行空间定位，我们引入了 GramCol，它可以自适应地为任何文本概念（包括运动和非运动）生成每帧显着性图。其次，我们提出了一种运动特征选择算法，以获得可在空间和时间上定位运动的可解释运动注意力图（IMAP）。我们的方法无需任何梯度计算或参数更新即可发现概念显着图。实验上，我们的方法在运动定位任务和零镜头视频语义分割上显示出出色的定位能力，为运动和非运动概念提供可解释且更清晰的显着性图。

</details>

---

## 4. LLandMark: A Multi-Agent Framework for Landmark-Aware Multimodal Interactive Video Retrieval / LLandMark：用于地标感知多模态交互式视频检索的多代理框架

**Date**: 2026-03-03 | **arXiv**: [2603.02888v1](http://arxiv.org/abs/2603.02888v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02888v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

The increasing diversity and scale of video data demand retrieval systems capable of multimodal understanding, adaptive reasoning, and domain-specific knowledge integration. This paper presents LLandMark, a modular multi-agent framework for landmark-aware multimodal video retrieval to handle real-world complex queries. The framework features specialized agents that collaborate across four stages: query parsing and planning, landmark reasoning, multimodal retrieval, and reranked answer synthesis. A key component, the Landmark Knowledge Agent, detects cultural or spatial landmarks and reformulates them into descriptive visual prompts, enhancing CLIP-based semantic matching for Vietnamese scenes. To expand capabilities, we introduce an LLM-assisted image-to-image pipeline, where a large language model (Gemini 2.5 Flash) autonomously detects landmarks, generates image search queries, retrieves representative images, and performs CLIP-based visual similarity matching, removing the need for manual image input. In addition, an OCR refinement module leveraging Gemini and LlamaIndex improves Vietnamese text recognition. Experimental results show that LLandMark achieves adaptive, culturally grounded, and explainable retrieval performance.

视频数据的多样性和规模不断增加，需要检索系统能够多模态理解、自适应推理和特定领域的知识集成。本文介绍了 LLandMark，这是一种模块化多代理框架，用于地标感知多模态视频检索，以处理现实世界的复杂查询。该框架具有跨四个阶段协作的专业代理：查询解析和规划、地标推理、多模式检索和重新排序的答案合成。地标知识代理是一个关键组件，它可以检测文化或空间地标，并将其重新表述为描述性视觉提示，从而增强越南场景的基于 CLIP 的语义匹配。为了扩展功能，我们引入了 LLM 辅助的图像到图像管道，其中大型语言模型 (Gemini 2.5 Flash) 可自动检测地标、生成图像搜索查询、检索代表性图像并执行基于 CLIP 的视觉相似性匹配，从而无需手动输入图像。此外，利用 Gemini 和 LlamaIndex 的 OCR 细化模块改进了越南语文本识别。实验结果表明，LLandMark 实现了自适应、文化基础和可解释的检索性能。

</details>

---

## 5. SemanticDialect: Semantic-Aware Mixed-Format Quantization for Video Diffusion Transformers / SemanticDialect：视频扩散变压器的语义感知混合格式量化

**Date**: 2026-03-03 | **arXiv**: [2603.02883v1](http://arxiv.org/abs/2603.02883v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02883v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion Transformers (DiT) achieve strong video generation quality, but their memory and compute costs hinder edge deployment. Quantization can reduce these costs, yet existing methods often degrade video quality under high activation variation and the need to preserve semantic/temporal coherence. We propose SemanticDialect, which advances recent block-wise mixed-format quantization-selecting a per-block optimal format (a dialect) from multiple candidates (a formatbook)-by scaling the formatbook with lookup tables for quantization error and quantized values, enabling efficient per-block format selection and quantization at low online cost. We also introduce activation decomposition that reduces quantization error by re-quantizing and adding back residual errors, with attention-guided salient token selection. We further propose semantic-aware dialect assignment (SeDA) to improve quantized value consistency by sharing a sub-formatbook among semantically correlated tokens. Experiments on video DiT (VDiT) models show that SemanticDialect outperforms prior VDiT quantization methods and fine-grained block-wise format baselines, while approaching FP16 quality on Open-Sora 2.0.

扩散变压器 (DiT) 实现了强大的视频生成质量，但其内存和计算成本阻碍了边缘部署。量化可以降低这些成本，但现有方法通常会在高激活变化和需要保持语义/时间一致性的情况下降低视频质量。我们提出了 SemanticDialect，它推进了最近的逐块混合格式量化——从多个候选（格式簿）中选择每块最佳格式（一种方言）——通过使用量化误差和量化值的查找表来缩放格式簿，从而以较低的在线成本实现高效的每块格式选择和量化。我们还引入了激活分解，通过重新量化和添加残余误差来减少量化误差，并采用注意力引导的显着标记选择。我们进一步提出语义感知方言分配（SeDA），通过在语义相关的标记之间共享子格式手册来提高量化值的一致性。视频 DiT (VDiT) 模型的实验表明，SemanticDialect 的性能优于之前的 VDiT 量化方法和细粒度块格式基线，同时接近 Open-Sora 2.0 上的 FP16 质量。

</details>

---

## 6. SIGMark: Scalable In-Generation Watermark with Blind Extraction for Video Diffusion / SIGMark：可扩展的代内水印，具有视频扩散的盲提取功能

**Date**: 2026-03-03 | **arXiv**: [2603.02882v1](http://arxiv.org/abs/2603.02882v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02882v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Artificial Intelligence Generated Content (AIGC), particularly video generation with diffusion models, has been advanced rapidly. Invisible watermarking is a key technology for protecting AI-generated videos and tracing harmful content, and thus plays a crucial role in AI safety. Beyond post-processing watermarks which inevitably degrade video quality, recent studies have proposed distortion-free in-generation watermarking for video diffusion models. However, existing in-generation approaches are non-blind: they require maintaining all the message-key pairs and performing template-based matching during extraction, which incurs prohibitive computational costs at scale. Moreover, when applied to modern video diffusion models with causal 3D Variational Autoencoders (VAEs), their robustness against temporal disturbance becomes extremely weak. To overcome these challenges, we propose SIGMark, a Scalable In-Generation watermarking framework with blind extraction for video diffusion. To achieve blind-extraction, we propose to generate watermarked initial noise using a Global set of Frame-wise PseudoRandom Coding keys (GF-PRC), reducing the cost of storing large-scale information while preserving noise distribution and diversity for distortion-free watermarking. To enhance robustness, we further design a Segment Group-Ordering module (SGO) tailored to causal 3D VAEs, ensuring robust watermark inversion during extraction under temporal disturbance. Comprehensive experiments on modern diffusion models show that SIGMark achieves very high bit-accuracy during extraction under both temporal and spatial disturbances with minimal overhead, demonstrating its scalability and robustness. Our project is available at https://jeremyzhao1998.github.io/SIGMark-release/.

人工智能生成内容（AIGC），特别是具有扩散模型的视频生成，已经迅速发展。隐形水印是保护人工智能生成的视频和追踪有害内容的关键技术，在人工智能安全中发挥着至关重要的作用。除了不可避免地降低视频质量的后处理水印之外，最近的研究还提出了针对视频扩散模型的无失真代内水印。然而，现有的代内方法是非盲目的：它们需要维护所有消息密钥对并在提取过程中执行基于模板的匹配，这会导致大规模的计算成本过高。此外，当应用于具有因果 3D 变分自动编码器 (VAE) 的现代视频扩散模型时，它们对时间干扰的鲁棒性变得非常弱。为了克服这些挑战，我们提出了 SIGMark，这是一种可扩展的一代水印框架，具有视频扩散盲提取功能。为了实现盲提取，我们建议使用全局逐帧伪随机编码密钥（GF-PRC）集生成带水印的初始噪声，从而降低存储大规模信息的成本，同时保留噪声分布和无失真水印的多样性。为了增强鲁棒性，我们进一步设计了一个针对因果 3D VAE 定制的分段组排序模块（SGO），确保在时间扰动下的提取过程中实现鲁棒的水印反演。对现代扩散模型的综合实验表明，SIGMark 在时间和空间干扰下的提取过程中以最小的开销实现了非常高的位精度，证明了其可扩展性和鲁棒性。我们的项目可在 https://jeremyzhao1998.github.io/SIGMark-release/ 获取。

</details>

---

## 7. Think-as-You-See: Streaming Chain-of-Thought Reasoning for Large Vision-Language Models / 即视即想：大型视觉语言模型的流式思维链推理

**Date**: 2026-03-03 | **arXiv**: [2603.02872v1](http://arxiv.org/abs/2603.02872v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02872v1)

**Categories**: cs.CV

**Code**: https://github.com/EIT-NLP/StreamingLLM/tree/main/TaYS

<details><summary><b>Abstract / 摘要</b></summary>

Large Vision Language Models (LVLMs) exhibit strong Chain-of-Thought (CoT) capabilities, yet most existing paradigms assume full-video availability before inference, a batch-style process misaligned with real-world video streams where information arrives sequentially. Motivated by the streaming nature of video data, we investigate two streaming reasoning paradigms for LVLMs. The first, an interleaved paradigm, alternates between receiving frames and producing partial reasoning but remains constrained by strictly ordered cache updates. To better match streaming inputs, we propose \textbf{Think-as-You-See (TaYS)}, a unified framework enabling true concurrent reasoning. TaYS integrates parallelized CoT generation, stream-constrained training, and stream-parallel inference. It further employs temporally aligned reasoning units, streaming attention masks and positional encodings, and a dual KV-cache that decouples visual encoding from textual reasoning. We evaluate all paradigms on the Qwen2.5-VL family across representative video CoT tasks, including event dynamics analysis, causal reasoning, and thematic understanding. Experiments show that TaYS consistently outperforms both batch and interleaved baselines, improving reasoning performance while substantially reducing time-to-first-token (TTFT) and overall reasoning delay. These results demonstrate the effectiveness of data-aligned streaming reasoning in enabling efficient and responsive video understanding for LVLMs. We release our code at \href{https://github.com/EIT-NLP/StreamingLLM/tree/main/TaYS}{this repository.}

大视觉语言模型 (LVLM) 表现出强大的思想链 (CoT) 功能，但大多数现有范例都假设推理之前具有完整视频可用性，这是一种与信息按顺序到达的现实视频流不一致的批处理式过程。受视频数据流式传输性质的启发，我们研究了 LVLM 的两种流式推理范例。第一种是交错范例，在接收帧和产生部分推理之间交替，但仍然受到严格排序的缓存更新的限制。为了更好地匹配流输入，我们提出了 \textbf{Think-as-You-See (TaYS)}，这是一个能够实现真正并发推理的统一框架。 TaYS 集成了并行 CoT 生成、流约束训练和流并行推理。它还采用了时间对齐的推理单元、流式注意力掩码和位置编码，以及将视觉编码与文本推理分离的双 KV 缓存。我们评估了 Qwen2.5-VL 系列上代表性视频 CoT 任务的所有范式，包括事件动态分析、因果推理和主题理解。实验表明，TaYS 始终优于批处理和交错基线，提高了推理性能，同时大幅减少了首次标记时间 (TTFT) 和整体推理延迟。这些结果证明了数据对齐流推理在为 LVLM 实现高效且响应灵敏的视频理解方面的有效性。我们在 \href{https://github.com/EIT-NLP/StreamingLLM/tree/main/TaYS}{此存储库。}

</details>

---

## 8. BrandFusion: A Multi-Agent Framework for Seamless Brand Integration in Text-to-Video Generation / BrandFusion：文本到视频生成中无缝品牌集成的多代理框架

**Date**: 2026-03-03 | **arXiv**: [2603.02816v1](http://arxiv.org/abs/2603.02816v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02816v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

The rapid advancement of text-to-video (T2V) models has revolutionized content creation, yet their commercial potential remains largely untapped. We introduce, for the first time, the task of seamless brand integration in T2V: automatically embedding advertiser brands into prompt-generated videos while preserving semantic fidelity to user intent. This task confronts three core challenges: maintaining prompt fidelity, ensuring brand recognizability, and achieving contextually natural integration. To address them, we propose BrandFusion, a novel multi-agent framework comprising two synergistic phases. In the offline phase (advertiser-facing), we construct a Brand Knowledge Base by probing model priors and adapting to novel brands via lightweight fine-tuning. In the online phase (user-facing), five agents jointly refine user prompts through iterative refinement, leveraging the shared knowledge base and real-time contextual tracking to ensure brand visibility and semantic alignment. Experiments on 18 established and 2 custom brands across multiple state-of-the-art T2V models demonstrate that BrandFusion significantly outperforms baselines in semantic preservation, brand recognizability, and integration naturalness. Human evaluations further confirm higher user satisfaction, establishing a practical pathway for sustainable T2V monetization.

文本转视频 (T2V) 模型的快速发展彻底改变了内容创作，但其商业潜力在很大程度上尚未开发。我们首次在 T2V 中引入无缝品牌集成的任务：自动将广告商品牌嵌入到提示生成的视频中，同时保持对用户意图的语义保真度。这项任务面临三个核心挑战：保持即时保真度、确保品牌可识别性以及实现上下文自然整合。为了解决这些问题，我们提出了 BrandFusion，这是一种新颖的多智能体框架，包含两个协同阶段。在离线阶段（面向广告商），我们通过探索模型先验并通过轻量级微调来适应新品牌来构建品牌知识库。在在线阶段（面向用户），五个代理通过迭代细化共同完善用户提示，利用共享知识库和实时上下文跟踪来确保品牌可见性和语义一致性。在多个最先进的 T2V 模型中对 18 个已建立品牌和 2 个定制品牌进行的实验表明，BrandFusion 在语义保留、品牌可识别性和集成自然性方面显着优于基线。人工评估进一步证实了更高的用户满意度，为可持续的 T2V 货币化建立了实用途径。

</details>

---

## 9. NOVA: Sparse Control, Dense Synthesis for Pair-Free Video Editing / NOVA：稀疏控制，密集合成，用于无对视频编辑

**Date**: 2026-03-03 | **arXiv**: [2603.02802v1](http://arxiv.org/abs/2603.02802v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02802v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recent video editing models have achieved impressive results, but most still require large-scale paired datasets. Collecting such naturally aligned pairs at scale remains highly challenging and constitutes a critical bottleneck, especially for local video editing data. Existing workarounds transfer image editing to video through global motion control for pair-free video editing, but such designs struggle with background and temporal consistency. In this paper, we propose NOVA: Sparse Control \& Dense Synthesis, a new framework for unpaired video editing. Specifically, the sparse branch provides semantic guidance through user-edited keyframes distributed across the video, and the dense branch continuously incorporates motion and texture information from the original video to maintain high fidelity and coherence. Moreover, we introduce a degradation-simulation training strategy that enables the model to learn motion reconstruction and temporal consistency by training on artificially degraded videos, thus eliminating the need for paired data. Our extensive experiments demonstrate that NOVA outperforms existing approaches in edit fidelity, motion preservation, and temporal coherence.

最近的视频编辑模型取得了令人印象深刻的结果，但大多数仍然需要大规模的配对数据集。大规模收集这种自然对齐的对仍然非常具有挑战性，并且构成了一个关键的瓶颈，特别是对于本地视频编辑数据而言。现有的解决方法通过全局运动控制将图像编辑转移到视频，以实现无配对视频编辑，但此类设计在背景和时间一致性方面存在困难。在本文中，我们提出了 NOVA：稀疏控制和密集合成，这是一种用于不配对视频编辑的新框架。具体来说，稀疏分支通过分布在视频中的用户编辑的关键帧提供语义指导，而密集分支不断合并原始视频中的运动和纹理信息，以保持高保真度和连贯性。此外，我们引入了一种退化模拟训练策略，使模型能够通过对人工退化视频进行训练来学习运动重建和时间一致性，从而消除了对配对数据的需要。我们广泛的实验表明，NOVA 在编辑保真度、运动保留和时间连贯性方面优于现有方法。

</details>

---

## 10. ShareVerse: Multi-Agent Consistent Video Generation for Shared World Modeling / ShareVerse：用于共享世界建模的多代理一致视频生成

**Date**: 2026-03-03 | **arXiv**: [2603.02697v1](http://arxiv.org/abs/2603.02697v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02697v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

This paper presents ShareVerse, a video generation framework enabling multi-agent shared world modeling, addressing the gap in existing works that lack support for unified shared world construction with multi-agent interaction. ShareVerse leverages the generation capability of large video models and integrates three key innovations: 1) A dataset for large-scale multi-agent interactive world modeling is built on the CARLA simulation platform, featuring diverse scenes, weather conditions, and interactive trajectories with paired multi-view videos (front/ rear/ left/ right views per agent) and camera data. 2) We propose a spatial concatenation strategy for four-view videos of independent agents to model a broader environment and to ensure internal multi-view geometric consistency. 3) We integrate cross-agent attention blocks into the pretrained video model, which enable interactive transmission of spatial-temporal information across agents, guaranteeing shared world consistency in overlapping regions and reasonable generation in non-overlapping regions. ShareVerse, which supports 49-frame large-scale video generation, accurately perceives the position of dynamic agents and achieves consistent shared world modeling.

本文提出了 ShareVerse，一种支持多智能体共享世界建模的视频生成框架，解决了现有作品缺乏对多智能体交互的统一共享世界构建支持的空白。 ShareVerse 利用大型视频模型的生成能力，并集成了三个关键创新：1）在 CARLA 仿真平台上构建了大规模多智能体交互式世界建模的数据集，具有不同的场景、天气条件和交互式轨迹，以及配对的多视图视频（每个智能体的前/后/左/右视图）和摄像头数据。 2）我们提出了一种针对独立代理的四视图视频的空间串联策略，以建模更广泛的环境并确保内部多视图几何一致性。 3）我们将跨智能体注意力块集成到预训练的视频模型中，从而实现跨智能体的时空信息交互传输，保证重叠区域中共享世界的一致性以及非重叠区域中的合理生成。 ShareVerse支持49帧大规模视频生成，准确感知动态代理的位置，实现一致的共享世界建模。

</details>

---

## 11. Compositional Visual Planning via Inference-Time Diffusion Scaling / 通过推理时间扩散缩放进行构图视觉规划

**Date**: 2026-03-03 | **arXiv**: [2603.02646v1](http://arxiv.org/abs/2603.02646v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02646v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion models excel at short-horizon robot planning, yet scaling them to long-horizon tasks remains challenging due to computational constraints and limited training data. Existing compositional approaches stitch together short segments by separately denoising each component and averaging overlapping regions. However, this suffers from instability as the factorization assumption breaks down in noisy data space, leading to inconsistent global plans. We propose that the key to stable compositional generation lies in enforcing boundary agreement on the estimated clean data (Tweedie estimates) rather than on noisy intermediate states. Our method formulates long-horizon planning as inference over a chain-structured factor graph of overlapping video chunks, where pretrained short-horizon video diffusion models provide local priors. At inference time, we enforce boundary agreement through a novel combination of synchronous and asynchronous message passing that operates on Tweedie estimates, producing globally consistent guidance without requiring additional training. Our training-free framework demonstrates significant improvements over existing baselines, effectively generalizing to unseen start-goal combinations that were not present in the original training data. Project website: https://comp-visual-planning.github.io/

扩散模型擅长短视野机器人规划，但由于计算限制和有限的训练数据，将其扩展到长视野任务仍然具有挑战性。现有的合成方法通过分别对每个分量进行去噪并对重叠区域进行平均来将短片段缝合在一起。然而，这会受到不稳定的影响，因为分解假设在嘈杂的数据空间中会崩溃，从而导致全局计划不一致。我们提出稳定合成生成的关键在于对估计的干净数据（Tweedie 估计）而不是噪声中间状态执行边界一致性。我们的方法将长视野规划制定为对重叠视频块的链式结构因子图的推理，其中预训练的短视野视频扩散模型提供局部先验。在推理时，我们通过同步和异步消息传递的新颖组合来强制执行边界协议，该组合根据 Tweedie 估计进行操作，从而产生全局一致的指导，而无需额外的训练。我们的免训练框架展示了对现有基线的显着改进，有效地推广到原始训练数据中不存在的未见的起始目标组合。项目网站：https://comp-visual-planning.github.io/

</details>

---

## 12. Direct Reward Fine-Tuning on Poses for Single Image to 3D Human in the Wild / 对单张图像的姿势进行直接奖励微调到野外 3D 人体

**Date**: 2026-03-03 | **arXiv**: [2603.02619v1](http://arxiv.org/abs/2603.02619v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02619v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Single-view 3D human reconstruction has achieved remarkable progress through the adoption of multi-view diffusion models, yet the recovered 3D humans often exhibit unnatural poses. This phenomenon becomes pronounced when reconstructing 3D humans with dynamic or challenging poses, which we attribute to the limited scale of available 3D human datasets with diverse poses. To address this limitation, we introduce DrPose, Direct Reward fine-tuning algorithm on Poses, which enables post-training of a multi-view diffusion model on diverse poses without requiring expensive 3D human assets. DrPose trains a model using only human poses paired with single-view images, employing a direct reward fine-tuning to maximize PoseScore, which is our proposed differentiable reward that quantifies consistency between a generated multi-view latent image and a ground-truth human pose. This optimization is conducted on DrPose15K, a novel dataset that was constructed from an existing human motion dataset and a pose-conditioned video generative model. Constructed from abundant human pose sequence data, DrPose15K exhibits a broader pose distribution compared to existing 3D human datasets. We validate our approach through evaluation on conventional benchmark datasets, in-the-wild images, and a newly constructed benchmark, with a particular focus on assessing performance on challenging human poses. Our results demonstrate consistent qualitative and quantitative improvements across all benchmarks. Project page: https://seunguk-do.github.io/drpose.

通过采用多视图扩散模型，单视图 3D 人体重建取得了显着的进展，但恢复后的 3D 人体经常表现出不自然的姿势。当重建具有动态或挑战性姿势的 3D 人体时，这种现象变得更加明显，我们将其归因于具有不同姿势的可用 3D 人体数据集的规模有限。为了解决这个限制，我们引入了 DrPose，即针对姿势的直接奖励微调算法，它可以对不同姿势的多视图扩散模型进行后期训练，而无需昂贵的 3D 人力资产。 DrPose 仅​​使用与单视图图像配对的人体姿势来训练模型，采用直接奖励微调来最大化 PoseScore，这是我们提出的可微奖励，用于量化生成的多视图潜在图像和真实人体姿势之间的一致性。此优化是在 DrPose15K 上进行的，DrPose15K 是一个新颖的数据集，由现有的人体运动数据集和姿势条件视频生成模型构建而成。 DrPose15K 由丰富的人体姿势序列数据构建而成，与现有的 3D 人体数据集相比，表现出更广泛的姿势分布。我们通过对传统基准数据集、野外图像和新构建的基准进行评估来验证我们的方法，特别关注评估具有挑战性的人体姿势的性能。我们的结果表明，所有基准都取得了一致的定性和定量改进。项目页面：https://seunguk-do.github.io/drpose。

</details>

---

## 13. Kiwi-Edit: Versatile Video Editing via Instruction and Reference Guidance / Kiwi-Edit：通过说明和参考指南进行多功能视频编辑

**Date**: 2026-03-02 | **arXiv**: [2603.02175v1](http://arxiv.org/abs/2603.02175v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02175v1)

**Categories**: cs.CV, cs.AI

**Code**: https://github.com/showlab/Kiwi-Edit.

<details><summary><b>Abstract / 摘要</b></summary>

Instruction-based video editing has witnessed rapid progress, yet current methods often struggle with precise visual control, as natural language is inherently limited in describing complex visual nuances. Although reference-guided editing offers a robust solution, its potential is currently bottlenecked by the scarcity of high-quality paired training data. To bridge this gap, we introduce a scalable data generation pipeline that transforms existing video editing pairs into high-fidelity training quadruplets, leveraging image generative models to create synthesized reference scaffolds. Using this pipeline, we construct RefVIE, a large-scale dataset tailored for instruction-reference-following tasks, and establish RefVIE-Bench for comprehensive evaluation. Furthermore, we propose a unified editing architecture, Kiwi-Edit, that synergizes learnable queries and latent visual features for reference semantic guidance. Our model achieves significant gains in instruction following and reference fidelity via a progressive multi-stage training curriculum. Extensive experiments demonstrate that our data and architecture establish a new state-of-the-art in controllable video editing. All datasets, models, and code is released at https://github.com/showlab/Kiwi-Edit.

基于指令的视频编辑取得了快速进展，但当前的方法常常难以实现精确的视觉控制，因为自然语言在描述复杂的视觉细微差别方面本质上受到限制。尽管参考引导编辑提供了一个强大的解决方案，但其潜力目前因缺乏高质量配对训练数据而受到瓶颈。为了弥补这一差距，我们引入了一个可扩展的数据生成管道，将现有的视频编辑对转换为高保真训练四元组，利用图像生成模型创建合成的参考支架。利用这个管道，我们构建了RefVIE（一个为指令参考跟踪任务量身定制的大规模数据集），并建立了RefVIE-Bench进行综合评估。此外，我们提出了一个统一的编辑架构 Kiwi-Edit，它可以协同可学习的查询和潜在的视觉特征以提供参考语义指导。我们的模型通过渐进的多阶段培训课程，在指令遵循和参考保真度方面取得了显着的进步。大量的实验表明，我们的数据和架构在可控视频编辑方面建立了新的最先进技术。所有数据集、模型和代码均在 https://github.com/showlab/Kiwi-Edit 发布。

</details>

---

## 14. LiftAvatar: Kinematic-Space Completion for Expression-Controlled 3D Gaussian Avatar Animation / LiftAvatar：表达控制的 3D 高斯头像动画的运动学空间完成

**Date**: 2026-03-02 | **arXiv**: [2603.02129v1](http://arxiv.org/abs/2603.02129v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02129v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

We present LiftAvatar, a new paradigm that completes sparse monocular observations in kinematic space (e.g., facial expressions and head pose) and uses the completed signals to drive high-fidelity avatar animation. LiftAvatar is a fine-grained, expression-controllable large-scale video diffusion Transformer that synthesizes high-quality, temporally coherent expression sequences conditioned on single or multiple reference images. The key idea is to lift incomplete input data into a richer kinematic representation, thereby strengthening both reconstruction and animation in downstream 3D avatar pipelines. To this end, we introduce (i) a multi-granularity expression control scheme that combines shading maps with expression coefficients for precise and stable driving, and (ii) a multi-reference conditioning mechanism that aggregates complementary cues from multiple frames, enabling strong 3D consistency and controllability. As a plug-and-play enhancer, LiftAvatar directly addresses the limited expressiveness and reconstruction artifacts of 3D Gaussian Splatting-based avatars caused by sparse kinematic cues in everyday monocular videos. By expanding incomplete observations into diverse pose-expression variations, LiftAvatar also enables effective prior distillation from large-scale video generative models into 3D pipelines, leading to substantial gains. Extensive experiments show that LiftAvatar consistently boosts animation quality and quantitative metrics of state-of-the-art 3D avatar methods, especially under extreme, unseen expressions.

我们提出了 LiftAvatar，这是一种新的范式，可以完成运动空间中的稀疏单眼观察（例如面部表情和头部姿势），并使用完成的信号来驱动高保真头像动画。 LiftAvatar 是一种细粒度、表情可控的大规模视频扩散 Transformer，可根据单个或多个参考图像合成高质量、时间连贯的表情序列。关键思想是将不完整的输入数据提升为更丰富的运动学表示，从而加强下游 3D 头像管道中的重建和动画。为此，我们引入了（i）多粒度表达控制方案，将着色图与表达系数相结合，以实现精确稳定的驱动，以及（ii）多参考调节机制，聚合来自多个帧的互补线索，从而实现强大的3D一致性和可控性。作为即插即用的增强器，LiftAvatar 直接解决了日常单眼视频中由于稀疏运动线索而导致的基于 3D 高斯 Splatting 的化身的有限表现力和重建伪影问题。通过将不完整的观察扩展到不同的姿势表达变化，LiftAvatar 还能够将大规模视频生成模型有效地预先提炼为 3D 管道，从而带来可观的收益。大量实验表明，LiftAvatar 持续提高了最先进的 3D 化身方法的动画质量和定量指标，尤其是在极端的、看不见的表情下。

</details>

---

## 15. OmniRet: Efficient and High-Fidelity Omni Modality Retrieval / OmniRet：高效、高保真全模态检索

**Date**: 2026-03-02 | **arXiv**: [2603.02098v1](http://arxiv.org/abs/2603.02098v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02098v1)

**Categories**: cs.IR, cs.CL, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Multimodal retrieval is the task of aggregating information from queries across heterogeneous modalities to retrieve desired targets. State-of-the-art multimodal retrieval models can understand complex queries, yet they are typically limited to two modalities: text and vision. This limitation impedes the development of universal retrieval systems capable of comprehending queries that combine more than two modalities. To advance toward this goal, we present OmniRet, the first retrieval model capable of handling complex, composed queries spanning three key modalities: text, vision, and audio. Our OmniRet model addresses two critical challenges for universal retrieval: computational efficiency and representation fidelity. First, feeding massive token sequences from modality-specific encoders to Large Language Models (LLMs) is computationally inefficient. We therefore introduce an attention-based resampling mechanism to generate compact, fixed-size representations from these sequences. Second, compressing rich omni-modal data into a single embedding vector inevitably causes information loss and discards fine-grained details. We propose Attention Sliced Wasserstein Pooling to preserve these fine-grained details, leading to improved omni-modal representations. OmniRet is trained on an aggregation of approximately 6 million query-target pairs spanning 30 datasets. We benchmark our model on 13 retrieval tasks and a MMEBv2 subset. Our model demonstrates significant improvements on composed query, audio and video retrieval tasks, while achieving on-par performance with state-of-the-art models on others. Furthermore, we curate a new Audio-Centric Multimodal Benchmark (ACM). This new benchmark introduces two critical, previously missing tasks-composed audio retrieval and audio-visual retrieval to more comprehensively evaluate a model's omni-modal embedding capacity.

多模态检索是跨异构模态的查询聚合信息以检索所需目标的任务。最先进的多模态检索模型可以理解复杂的查询，但它们通常仅限于两种模态：文本和视觉。这种限制阻碍了能够理解结合两种以上模态的查询的通用检索系统的开发。为了实现这一目标，我们推出了 OmniRet，这是第一个能够处理跨越三个关键模式的复杂组合查询的检索模型：文本、视觉和音频。我们的 OmniRet 模型解决了通用检索的两个关键挑战：计算效率和表示保真度。首先，将大量标记序列从特定模态编码器馈送到大型语言模型 (LLM) 的计算效率很低。因此，我们引入了一种基于注意力的重采样机制，从这些序列中生成紧凑的、固定大小的表示。其次，将丰富的全模态数据压缩到单个嵌入向量中不可避免地会导致信息丢失并丢弃细粒度的细节。我们提出注意力切片 Wasserstein Pooling 来保留这些细粒度的细节，从而改进全模态表示。 OmniRet 经过 30 个数据集约 600 万个查询目标对的聚合训练。我们在 13 个检索任务和 MMEBv2 子集上对模型进行基准测试。我们的模型展示了组合查询、音频和视频检索任务的显着改进，同时实现了与其他最先进模型相当的性能。此外，我们还策划了一个新的以音频为中心的多模态基准（ACM）。这个新的基准引入了两个以前缺失的关键任务——音频检索和视听检索，以更全面地评估模型的全模态嵌入能力。

</details>

---

## 16. FluxMem: Adaptive Hierarchical Memory for Streaming Video Understanding / FluxMem：用于流视频理解的自适应分层内存

**Date**: 2026-03-02 | **arXiv**: [2603.02096v1](http://arxiv.org/abs/2603.02096v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02096v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

This paper presents FluxMem, a training-free framework for efficient streaming video understanding. FluxMem adaptively compresses redundant visual memory through a hierarchical, two-stage design: (1) a Temporal Adjacency Selection (TAS) module removes redundant visual tokens across adjacent frames, and (2) a Spatial Domain Consolidation (SDC) module further merges spatially repetitive regions within each frame into compact representations. To adapt effectively to dynamic scenes, we introduce a self-adaptive token compression mechanism in both TAS and SDC, which automatically determines the compression rate based on intrinsic scene statistics rather than manual tuning. Extensive experiments demonstrate that FluxMem achieves new state-of-the-art results on existing online video benchmarks, reaching 76.4 on StreamingBench and 67.2 on OVO-Bench under real-time settings, while reducing latency by 69.9% and peak GPU memory by 34.5% on OVO-Bench. Furthermore, it maintains strong offline performance, achieving 73.1 on MLVU while using 65% fewer visual tokens.

本文介绍了 FluxMem，这是一种用于高效理解流媒体视频的免训练框架。 FluxMem 通过分层、两阶段设计自适应地压缩冗余视觉记忆：(1) 时间邻接选择 (TAS) 模块删除相邻帧之间的冗余视觉标记，(2) 空间域合并 (SDC) 模块进一步将每个帧内的空间重复区域合并为紧凑表示。为了有效适应动态场景，我们在TAS和SDC中引入了自适应令牌压缩机制，该机制根据固有场景统计数据自动确定压缩率，而不是手动调整。大量实验表明，FluxMem 在现有在线视频基准测试中取得了新的最先进结果，在实时设置下在 StreamingBench 上达到 76.4，在 OVO-Bench 上达到 67.2，同时在 OVO-Bench 上将延迟降低了 69.9%，峰值 GPU 内存降低了 34.5%。此外，它保持了强大的离线性能，MLVU 达到 73.1，同时使用的视觉标记减少了 65%。

</details>

---

## 17. WorldStereo: Bridging Camera-Guided Video Generation and Scene Reconstruction via 3D Geometric Memories / WorldStereo：通过 3D 几何存储器桥接摄像机引导的视频生成和场景重建

**Date**: 2026-03-02 | **arXiv**: [2603.02049v1](http://arxiv.org/abs/2603.02049v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.02049v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recent advances in foundational Video Diffusion Models (VDMs) have yielded significant progress. Yet, despite the remarkable visual quality of generated videos, reconstructing consistent 3D scenes from these outputs remains challenging, due to limited camera controllability and inconsistent generated content when viewed from distinct camera trajectories. In this paper, we propose WorldStereo, a novel framework that bridges camera-guided video generation and 3D reconstruction via two dedicated geometric memory modules. Formally, the global-geometric memory enables precise camera control while injecting coarse structural priors through incrementally updated point clouds. Moreover, the spatial-stereo memory constrains the model's attention receptive fields with 3D correspondence to focus on fine-grained details from the memory bank. These components enable WorldStereo to generate multi-view-consistent videos under precise camera control, facilitating high-quality 3D reconstruction. Furthermore, the flexible control branch-based WorldStereo shows impressive efficiency, benefiting from the distribution matching distilled VDM backbone without joint training. Extensive experiments across both camera-guided video generation and 3D reconstruction benchmarks demonstrate the effectiveness of our approach. Notably, we show that WorldStereo acts as a powerful world model, tackling diverse scene generation tasks (whether starting from perspective or panoramic images) with high-fidelity 3D results. Models will be released.

基础视频扩散模型 (VDM) 的最新进展取得了重大进展。然而，尽管生成的视频具有出色的视觉质量，但由于摄像机的可控性有限，并且从不同的摄像机轨迹观看时生成的内容不一致，因此从这些输出中重建一致的 3D 场景仍然具有挑战性。在本文中，我们提出了 WorldStereo，这是一种新颖的框架，通过两个专用的几何存储模块将相机引导的视频生成和 3D 重建联系起来。从形式上来说，全局几何存储器可以实现精确的相机控制，同时通过增量更新的点云注入粗略的结构先验。此外，空间立体记忆通过 3D 对应限制模型的注意力接受域，以关注记忆库中的细粒度细节。这些组件使 WorldStereo 能够在精确的摄像机控制下生成多视图一致的视频，从而促进高质量的 3D 重建。此外，基于分支的灵活控制 WorldStereo 显示了令人印象深刻的效率，受益于无需联合训练的分布匹配蒸馏 VDM 主干。相机引导视频生成和 3D 重建基准的大量实验证明了我们方法的有效性。值得注意的是，我们展示了 WorldStereo 作为一个强大的世界模型，以高保真 3D 结果处理不同的场景生成任务（无论是从透视图像还是全景图像开始）。模型将被发布。

</details>

---

## 18. Non-verbal Real-time Human-AI Interaction in Constrained Robotic Environments / 受限机器人环境中的非语言实时人机交互

**Date**: 2026-03-02 | **arXiv**: [2603.01804v1](http://arxiv.org/abs/2603.01804v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.01804v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

We study the ongoing debate regarding the statistical fidelity of AI-generated data compared to human-generated data in the context of non-verbal communication using full body motion. Concretely, we ask if contemporary generative models move beyond surface mimicry to participate in the silent, but expressive dialogue of body language. We tackle this question by introducing the first framework that generates a natural non-verbal interaction between Human and AI in real-time from 2D body keypoints. Our experiments utilize four lightweight architectures which run at up to 100 FPS on an NVIDIA Orin Nano, effectively closing the perception-action loop needed for natural Human-AI interaction. We trained on 437 human video clips and demonstrated that pretraining on synthetically-generated sequences reduces motion errors significantly, without sacrificing speed. Yet, a measurable reality gap persists. When the best model is evaluated on keypoints extracted from cutting-edge text-to-video systems, such as SORA and VEO, we observe that performance drops on SORA-generated clips. However, it degrades far less on VEO, suggesting that temporal coherence, not image fidelity, drives real-world performance. Our results demonstrate that statistically distinguishable differences persist between Human and AI motion.

我们研究了关于在使用全身运动的非语言交流背景下人工智能生成的数据与人类生成的数据相比的统计保真度的持续争论。具体来说，我们询问当代生成模型是否超越表面模仿，参与无声但富有表现力的肢体语言对话。我们通过引入第一个框架来解决这个问题，该框架从 2D 身体关键点实时生成人类和人工智能之间的自然非语言交互。我们的实验利用四种轻量级架构，在 NVIDIA Orin Nano 上以高达 100 FPS 的速度运行，有效地闭合了自然人机交互所需的感知-动作循环。我们对 437 个人类视频剪辑进行了训练，并证明对合成生成的序列进行预训练可以显着减少运动错误，而不会牺牲速度。然而，可衡量的现实差距仍然存在。当根据从尖端文本到视频系统（例如 SORA 和 VEO）提取的关键点评估最佳模型时，我们观察到 SORA 生成的剪辑的性能下降。然而，它在 VEO 上的降级要少得多，这表明是时间连贯性而不是图像保真度驱动了现实世界的性能。我们的结果表明，人类和人工智能运动之间仍然存在统计上可区分的差异。

</details>

---

## 19. StepVAR: Structure-Texture Guided Pruning for Visual Autoregressive Models / StepVAR：视觉自回归模型的结构-纹理引导修剪

**Date**: 2026-03-02 | **arXiv**: [2603.01757v1](http://arxiv.org/abs/2603.01757v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.01757v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Visual AutoRegressive (VAR) models based on next-scale prediction enable efficient hierarchical generation, yet the inference cost grows quadratically at high resolutions. We observe that the computationally intensive later scales predominantly refine high-frequency textures and exhibit substantial spatial redundancy, in contrast to earlier scales that determine the global structural layout. Existing pruning methods primarily focus on high-frequency detection for token selection, often overlooking structural coherence and consequently degrading global semantics. To address this limitation, we propose StepVAR, a training-free token pruning framework that accelerates VAR inference by jointly considering structural and textural importance. Specifically, we employ a lightweight high-pass filter to capture local texture details, while leveraging Principal Component Analysis (PCA) to preserve global structural information. This dual-criterion design enables the model to retain tokens critical for both fine-grained fidelity and overall composition. To maintain valid next-scale prediction under sparse tokens, we further introduce a nearest neighbor feature propagation strategy to reconstruct dense feature maps from pruned representations. Extensive experiments on state-of-the-art text-to-image and text-to-video VAR models demonstrate that StepVAR achieves substantial inference speedups while maintaining generation quality. Quantitative and qualitative evaluations consistently show that our method outperforms existing acceleration approaches, validating its effectiveness and general applicability across diverse VAR architectures.

基于下一尺度预测的视觉自回归（VAR）模型可以实现高效的分层生成，但推理成本在高分辨率下呈二次方增长。我们观察到，与决定全局结构布局的早期尺度相比，计算密集型的后期尺度主要细化高频纹理并表现出大量的空间冗余。现有的修剪方法主要集中于标记选择的高频检测，常常忽视结构一致性，从而降低全局语义。为了解决这个限制，我们提出了 StepVAR，一种免训练的 token 修剪框架，通过共同考虑结构和纹理的重要性来加速 VAR 推理。具体来说，我们采用轻量级高通滤波器来捕获局部纹理细节，同时利用主成分分析（PCA）来保留全局结构信息。这种双标准设计使模型能够保留对细粒度保真度和整体构成至关重要的标记。为了在稀疏标记下保持有效的下一尺度预测，我们进一步引入了最近邻特征传播策略，以从修剪后的表示重建密集特征图。对最先进的文本到图像和文本到视频 VAR 模型的大量实验表明，StepVAR 在保持生成质量的同时实现了显着的推理加速。定量和定性评估一致表明，我们的方法优于现有的加速方法，验证了其在不同 VAR 架构中的有效性和普遍适用性。

</details>

---

## 20. FastLightGen: Fast and Light Video Generation with Fewer Steps and Parameters / FastLightGen：用更少的步骤和参数快速生成视频

**Date**: 2026-03-02 | **arXiv**: [2603.01685v1](http://arxiv.org/abs/2603.01685v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.01685v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

The recent advent of powerful video generation models, such as Hunyuan, WanX, Veo3, and Kling, has inaugurated a new era in the field. However, the practical deployment of these models is severely impeded by their substantial computational overhead, which stems from enormous parameter counts and the iterative, multi-step sampling process required during inference. Prior research on accelerating generative models has predominantly followed two distinct trajectories: reducing the number of sampling steps (e.g., LCM, DMD, and MagicDistillation) or compressing the model size for more efficient inference (e.g., ICMD). The potential of simultaneously compressing both to create a fast and lightweight model remains an unexplored avenue. In this paper, we propose FastLightGen, an algorithm that transforms large, computationally expensive models into fast, lightweight counterparts. The core idea is to construct an optimal teacher model, one engineered to maximize student performance, within a synergistic framework for distilling both model size and inference steps. Our extensive experiments on HunyuanVideo-ATI2V and WanX-TI2V reveal that a generator using 4-step sampling and 30\% parameter pruning achieves optimal visual quality under a constrained inference budget. Furthermore, FastLightGen consistently outperforms all competing methods, establishing a new state-of-the-art in efficient video generation.

最近出现的强大视频生成模型，如Hunyuan、WanX、Veo3和Kling，开创了该领域的新时代。然而，这些模型的实际部署受到巨大的计算开销的严重阻碍，这些开销源于大量的参数计数和推理过程中所需的迭代、多步采样过程。先前关于加速生成模型的研究主要遵循两个不同的轨迹：减少采样步骤的数量（例如 LCM、DMD 和 MagicDistillation）或压缩模型大小以提高推理效率（例如 ICMD）。同时压缩两者以创建快速且轻量级模型的潜力仍然是一个尚未探索的途径。在本文中，我们提出了 FastLightGen，这是一种将大型、计算成本昂贵的模型转换为快速、轻量级模型的算法。其核心思想是构建一个最佳的教师模型，该模型旨在在一个用于提炼模型大小和推理步骤的协同框架内最大限度地提高学生的表现。我们在HunyuanVideo-ATI2V和WanX-TI2V上进行的大量实验表明，使用4步采样和30％参数修剪的生成器可以在受限的推理预算下实现最佳的视觉质量。此外，FastLightGen 始终优于所有竞争方法，在高效视频生成方面建立了新的最先进技术。

</details>

---

## 21. Adaptive Spectral Feature Forecasting for Diffusion Sampling Acceleration / 扩散采样加速的自适应光谱特征预测

**Date**: 2026-03-02 | **arXiv**: [2603.01623v1](http://arxiv.org/abs/2603.01623v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.01623v1)

**Categories**: cs.CV, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion models have become the dominant tool for high-fidelity image and video generation, yet are critically bottlenecked by their inference speed due to the numerous iterative passes of Diffusion Transformers. To reduce the exhaustive compute, recent works resort to the feature caching and reusing scheme that skips network evaluations at selected diffusion steps by using cached features in previous steps. However, their preliminary design solely relies on local approximation, causing errors to grow rapidly with large skips and leading to degraded sample quality at high speedups. In this work, we propose spectral diffusion feature forecaster (Spectrum), a training-free approach that enables global, long-range feature reuse with tightly controlled error. In particular, we view the latent features of the denoiser as functions over time and approximate them with Chebyshev polynomials. Specifically, we fit the coefficient for each basis via ridge regression, which is then leveraged to forecast features at multiple future diffusion steps. We theoretically reveal that our approach admits more favorable long-horizon behavior and yields an error bound that does not compound with the step size. Extensive experiments on various state-of-the-art image and video diffusion models consistently verify the superiority of our approach. Notably, we achieve up to 4.79$\times$ speedup on FLUX.1 and 4.67$\times$ speedup on Wan2.1-14B, while maintaining much higher sample quality compared with the baselines.

扩散模型已成为高保真图像和视频生成的主要工具，但由于扩散变压器的大量迭代，其推理速度受到严重瓶颈。为了减少详尽的计算，最近的工作采用了特征缓存和重用方案，该方案通过使用先前步骤中的缓存特征来跳过选定扩散步骤的网络评估。然而，他们的初步设计仅依赖于局部近似，导致误差随着较大的跳跃而快速增长，并导致高速加速时样本质量下降。在这项工作中，我们提出了谱扩散特征预测器（Spectrum），这是一种免训练的方法，可以在严格控制误差的情况下实现全局、远程特征重用。特别是，我们将降噪器的潜在特征视为随时间变化的函数，并用切比雪夫多项式对其进行近似。具体来说，我们通过岭回归拟合每个基的系数，然后利用该系数来预测未来多个扩散步骤的特征。我们从理论上揭示，我们的方法允许更有利的长视野行为，并产生不与步长复合的误差界限。对各种最先进的图像和视频扩散模型的广泛实验一致验证了我们方法的优越性。值得注意的是，我们在 FLUX.1 上实现了高达 4.79$\times$ 的加速，在 Wan2.1-14B 上实现了 4.67$\times$ 的加速，同时与基线相比保持了更高的样本质量。

</details>

---

## 22. From Verbatim to Gist: Distilling Pyramidal Multimodal Memory via Semantic Information Bottleneck for Long-Horizon Video Agents / 从逐字到要点：通过长视距视频代理的语义信息瓶颈提取金字塔多模态记忆

**Date**: 2026-03-02 | **arXiv**: [2603.01455v1](http://arxiv.org/abs/2603.01455v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.01455v1)

**Categories**: cs.CV, cs.AI, cs.CL, cs.IR, cs.MM

**Code**: https://github.com/EliSpectre/MM-Mem.

<details><summary><b>Abstract / 摘要</b></summary>

While multimodal large language models have demonstrated impressive short-term reasoning, they struggle with long-horizon video understanding due to limited context windows and static memory mechanisms that fail to mirror human cognitive efficiency. Existing paradigms typically fall into two extremes: vision-centric methods that incur high latency and redundancy through dense visual accumulation, or text-centric approaches that suffer from detail loss and hallucination via aggressive captioning. To bridge this gap, we propose MM-Mem, a pyramidal multimodal memory architecture grounded in Fuzzy-Trace Theory. MM-Mem structures memory hierarchically into a Sensory Buffer, Episodic Stream, and Symbolic Schema, enabling the progressive distillation of fine-grained perceptual traces (verbatim) into high-level semantic schemas (gist). Furthermore, to govern the dynamic construction of memory, we derive a Semantic Information Bottleneck objective and introduce SIB-GRPO to optimize the trade-off between memory compression and task-relevant information retention. In inference, we design an entropy-driven top-down memory retrieval strategy, which first tries with the abstract Symbolic Schema and progressively "drills down" to the Sensory Buffer and Episodic Stream under high uncertainty. Extensive experiments across 4 benchmarks confirm the effectiveness of MM-Mem on both offline and streaming tasks, demonstrating robust generalization and validating the effectiveness of cognition-inspired memory organization. Code is available at https://github.com/EliSpectre/MM-Mem.

虽然多模态大语言模型已经表现出令人印象深刻的短期推理，但由于有限的上下文窗口和静态记忆机制无法反映人类的认知效率，它们在长期视频理解方面遇到了困难。现有的范例通常陷入两个极端：以视觉为中心的方法，通过密集的视觉积累而导致高延迟和冗余，或者以文本为中心的方法，通过激进的字幕而遭受细节丢失和幻觉。为了弥补这一差距，我们提出了 MM-Mem，一种基于模糊跟踪理论的金字塔多模态内存架构。 MM-Mem 将内存分层构建为感知缓冲区、情景流和符号模式，从而能够将细粒度的感知痕迹（逐字记录）逐步提炼为高级语义模式（要点）。此外，为了管理内存的动态构建，我们推导了语义信息瓶颈目标，并引入 SIB-GRPO 来优化内存压缩和任务相关信息保留之间的权衡。在推理中，我们设计了一种熵驱动的自上而下的记忆检索策略，该策略首先尝试抽象的符号模式，并在高度不确定性下逐步“深入”到感觉缓冲区和情节流。跨 4 个基准的广泛实验证实了 MM-Mem 在离线和流任务上的有效性，展示了强大的泛化能力并验证了认知启发的记忆组织的有效性。代码可在 https://github.com/EliSpectre/MM-Mem 获取。

</details>

---

## 23. UniTalking: A Unified Audio-Video Framework for Talking Portrait Generation / UniTalking：用于生成说话肖像的统一音频-视频框架

**Date**: 2026-03-02 | **arXiv**: [2603.01418v1](http://arxiv.org/abs/2603.01418v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.01418v1)

**Categories**: cs.CV, cs.MM, cs.SD

<details><summary><b>Abstract / 摘要</b></summary>

While state-of-the-art audio-video generation models like Veo3 and Sora2 demonstrate remarkable capabilities, their closed-source nature makes their architectures and training paradigms inaccessible. To bridge this gap in accessibility and performance, we introduce UniTalking, a unified, end-to-end diffusion framework for generating high-fidelity speech and lip-synchronized video. At its core, our framework employs Multi-Modal Transformer Blocks to explicitly model the fine-grained temporal correspondence between audio and video latent tokens via a shared self-attention mechanism. By leveraging powerful priors from a pre-trained video generation model, our framework ensures state-of-the-art visual fidelity while enabling efficient training. Furthermore, UniTalking incorporates a personalized voice cloning capability, allowing the generation of speech in a target style from a brief audio reference. Qualitative and quantitative results demonstrate that our method produces highly realistic talking portraits, achieving superior performance over existing open-source approaches in lip-sync accuracy, audio naturalness, and overall perceptual quality.

虽然 Veo3 和 Sora2 等最先进的音视频生成模型展示了卓越的功能，但它们的闭源性质使其架构和训练范例难以访问。为了弥补可访问性和性能方面的差距，我们引入了 UniTalking，这是一个统一的端到端扩散框架，用于生成高保真语音和口型同步视频。其核心是，我们的框架采用多模态转换器块，通过共享的自注意力机制对音频和视频潜在标记之间的细粒度时间对应关系进行显式建模。通过利用预先训练的视频生成模型的强大先验，我们的框架确保了最先进的视觉保真度，同时实现高效的训练。此外，UniTalking 还集成了个性化语音克隆功能，允许根据简短的音频参考生成目标风格的语音。定性和定量结果表明，我们的方法可以生成高度逼真的谈话肖像，在口型同步准确性、音频自然度和整体感知质量方面比现有开源方法具有更优越的性能。

</details>

---



</details>

<details><summary><b>2026-03-03 (2 papers)</b></summary>

# arXiv Video Papers - 2026-03-03

**Paper Count**: 2

---

## 1. MMTA: Multi Membership Temporal Attention for Fine-Grained Stroke Rehabilitation Assessment / MMTA：用于细粒度中风康复评估的多成员时间注意力

**Date**: 2026-03-01 | **arXiv**: [2603.00878v1](http://arxiv.org/abs/2603.00878v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.00878v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

To empower the iterative assessments involved during a person's rehabilitation, automated assessment of a person's abilities during daily activities requires temporally precise segmentation of fine-grained actions in therapy videos. Existing temporal action segmentation (TAS) models struggle to capture sub-second micro-movements while retaining exercise context, blurring rapid phase transitions and limiting reliable downstream assessment of motor recovery. We introduce Multi-Membership Temporal Attention (MMTA), a high-resolution temporal transformer for fine-grained rehabilitation assessment. Unlike standard temporal attention, which assigns each frame a single attention context per layer, MMTA lets each frame attend to multiple locally normalized temporal attention windows within the same layer. We fuse these concurrent temporal views via feature-space overlap resolution, preserving competing local contexts near transitions while enabling longer-range reasoning through layer-wise propagation. This increases boundary sensitivity without additional depth or multi-stage refinement. MMTA supports both video and wearable IMU inputs within a unified single-stage architecture, making it applicable to both clinical and home settings. MMTA consistently improves over the Global Attention transformer, boosting Edit Score by +1.3 (Video) and +1.6 (IMU) on StrokeRehab while further improving 50Salads by +3.3. Ablations confirm that performance gains stem from multi-membership temporal views rather than architectural complexity, offering a practical solution for resource-constrained rehabilitation assessment.

为了支持在人的康复过程中进行迭代评估，在日常活动中对人的能力进行自动评估需要对治疗视频中的细粒度动作进行时间上的精确分割。现有的时间动作分割（TAS）模型难以捕捉亚秒级微运动，同时保留运动背景，模糊快速相变并限制运动恢复的可靠下游评估。我们引入了多成员时间注意力（MMTA），这是一种用于细粒度康复评估的高分辨率时间转换器。与标准时间注意力（为每层每帧分配一个注意力上下文）不同，MMTA 让每个帧关注同一层内的多个局部归一化时间注意力窗口。我们通过特征空间重叠分辨率融合这些并发时间视图，保留过渡附近的竞争性局部上下文，同时通过逐层传播实现更远距离的推理。这增加了边界灵敏度，而无需额外的深度或多级细化。 MMTA 在统一的单级架构中支持视频和可穿戴 IMU 输入，使其适用于临床和家庭设置。 MMTA 持续改进全局注意力转换器，将 StrokeRehab 上的编辑得分提高了 +1.3（视频）和 +1.6（IMU），同时将 50Salads 进一步提高了 +3.3。消融证实性能提升源于多成员时间视图而不是架构复杂性，为资源受限的康复评估提供了实用的解决方案。

</details>

---

## 2. COMBAT: Conditional World Models for Behavioral Agent Training / COMBAT：行为代理训练的条件世界模型

**Date**: 2026-02-28 | **arXiv**: [2603.00825v1](http://arxiv.org/abs/2603.00825v1) | **PDF**: [Link](http://arxiv.org/pdf/2603.00825v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recent advances in video generation have spurred the development of world models capable of simulating 3D-consistent environments and interactions with static objects. However, a significant limitation remains in their ability to model dynamic, reactive agents that can intelligently influence and interact with the world. To address this gap, we introduce COMBAT, a real-time, action-controlled world model trained on the complex 1v1 fighting game Tekken 3. Our work demonstrates that diffusion models can successfully simulate a dynamic opponent that reacts to player actions, learning its behavior implicitly.   Our approach utilizes a 1.2 billion parameter Diffusion Transformer, conditioned on latent representations from a deep compression autoencoder. We employ state-of-the-art techniques, including causal distillation and diffusion forcing, to achieve real-time inference. Crucially, we observe the emergence of sophisticated agent behavior by training the model solely on single-player inputs, without any explicit supervision for the opponent's policy. Unlike traditional imitation learning methods, which require complete action labels, COMBAT learns effectively from partially observed data to generate responsive behaviors for a controllable Player 1. We present an extensive study and introduce novel evaluation methods to benchmark this emergent agent behavior, establishing a strong foundation for training interactive agents within diffusion-based world models.

视频生成领域的最新进展促进了能够模拟 3D 一致环境以及与静态对象交互的世界模型的发展。然而，它们对能够智能地影响世界并与世界互动的动态、反应性代理进行建模的能力仍然存在很大的限制。为了解决这一差距，我们引入了 COMBAT，这是一种在复杂的 1v1 格斗游戏《铁拳 3》上训练的实时、动作控制的世界模型。我们的工作表明，扩散模型可以成功模拟对玩家动作做出反应的动态对手，隐式学习其行为。   我们的方法利用 12 亿参数的扩散变换器，以深度压缩自动编码器的潜在表示为条件。我们采用最先进的技术，包括因果蒸馏和扩散强迫，来实现实时推理。至关重要的是，我们通过仅根据单人输入训练模型来观察复杂代理行为的出现，而无需对对手的策略进行任何明确的监督。与需要完整动作标签的传统模仿学习方法不同，COMBAT 可以从部分观察到的数据中有效学习，为可控玩家 1 生成响应行为。我们提出了一项广泛的研究，并引入了新颖的评估方法来对这种新兴代理行为进行基准测试，为在基于扩散的世界模型中训练交互式代理奠定了坚实的基础。

</details>

---



</details>

<details><summary><b>2026-03-02 (6 papers)</b></summary>

# arXiv Video Papers - 2026-03-02

**Paper Count**: 6

---

## 1. SenCache: Accelerating Diffusion Model Inference via Sensitivity-Aware Caching / SenCache：通过敏感度感知缓存加速扩散模型推理

**Date**: 2026-02-27 | **arXiv**: [2602.24208v1](http://arxiv.org/abs/2602.24208v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.24208v1)

**Categories**: cs.CV, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion models achieve state-of-the-art video generation quality, but their inference remains expensive due to the large number of sequential denoising steps. This has motivated a growing line of research on accelerating diffusion inference. Among training-free acceleration methods, caching reduces computation by reusing previously computed model outputs across timesteps. Existing caching methods rely on heuristic criteria to choose cache/reuse timesteps and require extensive tuning. We address this limitation with a principled sensitivity-aware caching framework. Specifically, we formalize the caching error through an analysis of the model output sensitivity to perturbations in the denoising inputs, i.e., the noisy latent and the timestep, and show that this sensitivity is a key predictor of caching error. Based on this analysis, we propose Sensitivity-Aware Caching (SenCache), a dynamic caching policy that adaptively selects caching timesteps on a per-sample basis. Our framework provides a theoretical basis for adaptive caching, explains why prior empirical heuristics can be partially effective, and extends them to a dynamic, sample-specific approach. Experiments on Wan 2.1, CogVideoX, and LTX-Video show that SenCache achieves better visual quality than existing caching methods under similar computational budgets.

扩散模型实现了最先进的视频生成质量，但由于大量的连续去噪步骤，其推理仍然昂贵。这推动了越来越多关于加速扩散推理的研究。在免训练加速方法中，缓存通过跨时间步重用先前计算的模型输出来减少计算量。现有的缓存方法依赖于启发式标准来选择缓存/重用时间步长，并且需要大量的调整。我们通过原则性的敏感度感知缓存框架来解决这一限制。具体来说，我们通过分析模型输出对去噪输入中的扰动（即噪声潜伏和时间步长）的敏感性来形式化缓存误差，并表明这种敏感性是缓存误差的关键预测因子。基于此分析，我们提出了灵敏度感知缓存（SenCache），这是一种动态缓存策略，可以根据每个样本自适应地选择缓存时间步长。我们的框架为自适应缓存提供了理论基础，解释了为什么先前的经验启发法可以部分有效，并将其扩展到动态的、特定于样本的方法。在 Wan 2.1、CogVideoX 和 LTX-Video 上的实验表明，在类似的计算预算下，SenCache 比现有的缓存方法实现了更好的视觉质量。

</details>

---

## 2. GeoDiff4D: Geometry-Aware Diffusion for 4D Head Avatar Reconstruction / GeoDiff4D：用于 4D 头部头像重建的几何感知扩散

**Date**: 2026-02-27 | **arXiv**: [2602.24161v1](http://arxiv.org/abs/2602.24161v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.24161v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Reconstructing photorealistic and animatable 4D head avatars from a single portrait image remains a fundamental challenge in computer vision. While diffusion models have enabled remarkable progress in image and video generation for avatar reconstruction, existing methods primarily rely on 2D priors and struggle to achieve consistent 3D geometry. We propose a novel framework that leverages geometry-aware diffusion to learn strong geometry priors for high-fidelity head avatar reconstruction. Our approach jointly synthesizes portrait images and corresponding surface normals, while a pose-free expression encoder captures implicit expression representations. Both synthesized images and expression latents are incorporated into 3D Gaussian-based avatars, enabling photorealistic rendering with accurate geometry. Extensive experiments demonstrate that our method substantially outperforms state-of-the-art approaches in visual quality, expression fidelity, and cross-identity generalization, while supporting real-time rendering.

从单个肖像图像重建逼真且可动画的 4D 头部头像仍然是计算机视觉领域的一项基本挑战。虽然扩散模型在头像重建的图像和视频生成方面取得了显着进展，但现有方法主要依赖于 2D 先验，很难实现一致的 3D 几何形状。我们提出了一种新颖的框架，利用几何感知扩散来学习强大的几何先验，以进行高保真头部头像重建。我们的方法联合合成肖像图像和相应的表面法线，而无姿势表达编码器捕获隐式表达表示。合成图像和潜在表达都被纳入基于高斯的 3D 化身中，从而实现具有精确几何形状的逼真渲染。大量的实验表明，我们的方法在视觉质量、表达保真度和跨身份泛化方面远远优于最先进的方法，同时支持实时渲染。

</details>

---

## 3. HumanOrbit: 3D Human Reconstruction as 360° Orbit Generation / HumanOrbit：3D 人体重建作为 360° 轨道生成

**Date**: 2026-02-27 | **arXiv**: [2602.24148v1](http://arxiv.org/abs/2602.24148v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.24148v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We present a method for generating a full 360° orbit video around a person from a single input image. Existing methods typically adapt image-based diffusion models for multi-view synthesis, but yield inconsistent results across views and with the original identity. In contrast, recent video diffusion models have demonstrated their ability in generating photorealistic results that align well with the given prompts. Inspired by these results, we propose HumanOrbit, a video diffusion model for multi-view human image generation. Our approach enables the model to synthesize continuous camera rotations around the subject, producing geometrically consistent novel views while preserving the appearance and identity of the person. Using the generated multi-view frames, we further propose a reconstruction pipeline that recovers a textured mesh of the subject. Experimental results validate the effectiveness of HumanOrbit for multi-view image generation and that the reconstructed 3D models exhibit superior completeness and fidelity compared to those from state-of-the-art baselines.

我们提出了一种从单个输入图像生成围绕人的完整 360° 轨道视频的方法。现有方法通常采用基于图像的扩散模型来进行多视图合成，但会在视图之间和原始身份上产生不一致的结果。相比之下，最近的视频扩散模型已经证明了它们生成与给定提示非常一致的逼真结果的能力。受这些结果的启发，我们提出了 HumanOrbit，一种用于多视图人体图像生成的视频扩散模型。我们的方法使模型能够合成围绕主题的连续相机旋转，产生几何一致的新颖视图，同时保留人的外观和身份。使用生成的多视图帧，我们进一步提出了一种重建管道，可以恢复主体的纹理网格。实验结果验证了 HumanOrbit 在多视图图像生成方面的有效性，并且与最先进的基线相比，重建的 3D 模型表现出卓越的完整性和保真度。

</details>

---

## 4. Multimodal Optimal Transport for Unsupervised Temporal Segmentation in Surgical Robotics / 手术机器人中无监督时间分割的多模态最优传输

**Date**: 2026-02-27 | **arXiv**: [2602.24138v1](http://arxiv.org/abs/2602.24138v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.24138v1)

**Categories**: cs.CV, cs.AI

**Code**: https://github.com/omar8ahmed9/TASOT.

<details><summary><b>Abstract / 摘要</b></summary>

Recognizing surgical phases and steps from video is a fundamental problem in computer-assisted interventions. Recent approaches increasingly rely on large-scale pre-training on thousands of labeled surgical videos, followed by zero-shot transfer to specific procedures. While effective, this strategy incurs substantial computational and data collection costs. In this work, we question whether such heavy pre-training is truly necessary. We propose Text-Augmented Action Segmentation Optimal Transport (TASOT), an unsupervised method for surgical phase and step recognition that extends Action Segmentation Optimal Transport (ASOT) by incorporating textual information generated directly from the videos. TASOT formulates temporal action segmentation as a multimodal optimal transport problem, where the matching cost is defined as a weighted combination of visual and text-based costs. The visual term captures frame-level appearance similarity, while the text term provides complementary semantic cues, and both are jointly regularized through a temporally consistent unbalanced Gromov-Wasserstein formulation. This design enables effective alignment between video frames and surgical actions without surgical-specific pretraining or external web-scale supervision. We evaluate TASOT on multiple benchmark surgical datasets and observe consistent and substantial improvements over existing zero-shot methods, including StrasBypass70 (+23.7), BernBypass70 (+4.5), Cholec80 (+16.5), and AutoLaparo (+19.6). These results demonstrate that fine-grained surgical understanding can be achieved by exploiting information already present in standard visual and textual representations, without resorting to increasingly complex pre-training pipelines. The code will be available at https://github.com/omar8ahmed9/TASOT.

从视频中识别手术阶段和步骤是计算机辅助干预中的一个基本问题。最近的方法越来越依赖于对数千个标记的手术视频进行大规模预训练，然后零镜头转移到特定程序。虽然有效，但该策略会产生大量的计算和数据收集成本。在这项工作中，我们质疑如此繁重的预训练是否真的有必要。我们提出了文本增强动作分割最佳传输（TASOT），这是一种用于手术阶段和步骤识别的无监督方法，通过合并直接从视频生成的文本信息来扩展动作分割最佳传输（ASOT）。 TASOT 将时间动作分割表述为多模式最优运输问题，其中匹配成本定义为视觉和基于文本的成本的加权组合。视觉术语捕获帧级外观相似性，而文本术语提供互补的语义线索，并且两者都通过时间一致的不平衡 Gromov-Wasserstein 公式联合正则化。这种设计可以实现视频帧和手术动作之间的有效对齐，而无需手术特定的预训练或外部网络规模的监督。我们在多个基准手术数据集上评估 TASOT，并观察到相对于现有零样本方法的一致和实质性改进，包括 StrasBypass70 (+23.7)、BernBypass70 (+4.5)、Cholec80 (+16.5) 和 AutoLaparo (+19.6)。这些结果表明，可以通过利用标准视觉和文本表示中已有的信息来实现细粒度的手术理解，而无需诉诸日益复杂的预训练流程。该代码可在 https://github.com/omar8ahmed9/TASOT 上获取。

</details>

---

## 5. MSVBench: Towards Human-Level Evaluation of Multi-Shot Video Generation / MSVBench：迈向多镜头视频生成的人类水平评估

**Date**: 2026-02-27 | **arXiv**: [2602.23969v1](http://arxiv.org/abs/2602.23969v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23969v1)

**Categories**: cs.MM, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

The evolution of video generation toward complex, multi-shot narratives has exposed a critical deficit in current evaluation methods. Existing benchmarks remain anchored to single-shot paradigms, lacking the comprehensive story assets and cross-shot metrics required to assess long-form coherence and appeal. To bridge this gap, we introduce MSVBench, the first comprehensive benchmark featuring hierarchical scripts and reference images tailored for Multi-Shot Video generation. We propose a hybrid evaluation framework that synergizes the high-level semantic reasoning of Large Multimodal Models (LMMs) with the fine-grained perceptual rigor of domain-specific expert models. Evaluating 20 video generation methods across diverse paradigms, we find that current models--despite strong visual fidelity--primarily behave as visual interpolators rather than true world models. We further validate the reliability of our benchmark by demonstrating a state-of-the-art Spearman's rank correlation of 94.4% with human judgments. Finally, MSVBench extends beyond evaluation by providing a scalable supervisory signal. Fine-tuning a lightweight model on its pipeline-refined reasoning traces yields human-aligned performance comparable to commercial models like Gemini-2.5-Flash.

视频生成向复杂、多镜头叙事的演变暴露了当前评估方法的严重缺陷。现有的基准仍然以单镜头范式为基础，缺乏评估长篇连贯性和吸引力所需的全面故事资产和交叉镜头指标。为了弥补这一差距，我们推出了 MSVBench，这是第一个综合基准测试，具有为多镜头视频生成量身定制的分层脚本和参考图像。我们提出了一种混合评估框架，它将大型多模态模型（LMM）的高级语义推理与特定领域专家模型的细粒度感知严谨性相结合。通过评估不同范式的 20 种视频生成方法，我们发现当前模型尽管具有很强的视觉保真度，但主要表现为视觉插值器而不是真实世界模型。我们通过展示最先进的 Spearman 排名与人类判断的 94.4% 相关性，进一步验证了基准的可靠性。最后，MSVBench 通过提供可扩展的监控信号来超越评估。在其管道细化的推理轨迹上微调轻量级模型，可产生与 Gemini-2.5-Flash 等商业模型相当的人性化性能。

</details>

---

## 6. SwitchCraft: Training-Free Multi-Event Video Generation with Attention Controls / SwitchCraft：具有注意力控制的免训练多事件视频生成

**Date**: 2026-02-27 | **arXiv**: [2602.23956v1](http://arxiv.org/abs/2602.23956v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23956v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recent advances in text-to-video diffusion models have enabled high-fidelity and temporally coherent videos synthesis. However, current models are predominantly optimized for single-event generation. When handling multi-event prompts, without explicit temporal grounding, such models often produce blended or collapsed scenes that break the intended narrative. To address this limitation, we present SwitchCraft, a training-free framework for multi-event video generation. Our key insight is that uniform prompt injection across time ignores the correspondence between events and frames. To this end, we introduce Event-Aligned Query Steering (EAQS), which steers frame-level attention to align with relevant event prompts. Furthermore, we propose Auto-Balance Strength Solver (ABSS), which adaptively balances steering strength to preserve temporal consistency and visual fidelity. Extensive experiments demonstrate that SwitchCraft substantially improves prompt alignment, event clarity, and scene consistency compared with existing baselines, offering a simple yet effective solution for multi-event video generation.

文本到视频扩散模型的最新进展使得高保真度和时间连贯的视频合成成为可能。然而，当前的模型主要针对单事件生成进行优化。在处理多事件提示时，如果没有明确的时间基础，此类模型通常会产生混合或折叠的场景，从而破坏预期的叙述。为了解决这个限制，我们提出了 SwitchCraft，这是一种用于多事件视频生成的免训练框架。我们的主要见解是跨时间的统一提示注入忽略了事件和帧之间的对应关系。为此，我们引入了事件对齐查询引导（EAQS），它引导帧级注意力与相关事件提示保持一致。此外，我们提出了自动平衡强度求解器（ABSS），它自适应地平衡转向强度以保持时间一致性和视觉保真度。大量实验表明，与现有基线相比，SwitchCraft 显着提高了提示对齐、事件清晰度和场景一致性，为多事件视频生成提供了简单而有效的解决方案。

</details>

---



</details>

<details><summary><b>2026-02-27 (18 papers)</b></summary>

# arXiv Video Papers - 2026-02-27

**Paper Count**: 18

---

## 1. MovieTeller: Tool-augmented Movie Synopsis with ID Consistent Progressive Abstraction / MovieTeller：具有 ID 一致渐进抽象的工具增强电影概要

**Date**: 2026-02-26 | **arXiv**: [2602.23228v1](http://arxiv.org/abs/2602.23228v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23228v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

With the explosive growth of digital entertainment, automated video summarization has become indispensable for applications such as content indexing, personalized recommendation, and efficient media archiving. Automatic synopsis generation for long-form videos, such as movies and TV series, presents a significant challenge for existing Vision-Language Models (VLMs). While proficient at single-image captioning, these general-purpose models often exhibit critical failures in long-duration contexts, primarily a lack of ID-consistent character identification and a fractured narrative coherence. To overcome these limitations, we propose MovieTeller, a novel framework for generating movie synopses via tool-augmented progressive abstraction. Our core contribution is a training-free, tool-augmented, fact-grounded generation process. Instead of requiring costly model fine-tuning, our framework directly leverages off-the-shelf models in a plug-and-play manner. We first invoke a specialized face recognition model as an external "tool" to establish Factual Groundings--precise character identities and their corresponding bounding boxes. These groundings are then injected into the prompt to steer the VLM's reasoning, ensuring the generated scene descriptions are anchored to verifiable facts. Furthermore, our progressive abstraction pipeline decomposes the summarization of a full-length movie into a multi-stage process, effectively mitigating the context length limitations of current VLMs. Experiments demonstrate that our approach yields significant improvements in factual accuracy, character consistency, and overall narrative coherence compared to end-to-end baselines.

随着数字娱乐的爆炸性增长，自动视频摘要已成为内容索引、个性化推荐和高效媒体归档等应用不可或缺的一部分。电影和电视剧等长视频的自动概要生成对现有视觉语言模型 (VLM) 提出了重大挑战。虽然精通单图像字幕，但这些通用模型经常在长时间的环境中表现出严重的失败，主要是缺乏 ID 一致的角色识别和支离破碎的叙事连贯性。为了克服这些限制，我们提出了 MovieTeller，这是一种通过工具增强渐进抽象生成电影概要的新颖框架。我们的核心贡献是一个免培训、工具增强、基于事实的生成过程。我们的框架不需要进行昂贵的模型微调，而是以即插即用的方式直接利用现成的模型。我们首先调用专门的人脸识别模型作为外部“工具”来建立事实基础——精确的角色身份及其相应的边界框。然后将这些基础注入到提示中以引导 VLM 的推理，确保生成的场景描述锚定到可验证的事实。此外，我们的渐进式抽象管道将全长电影的摘要分解为多阶段过程，有效缓解了当前 VLM 的上下文长度限制。实验表明，与端到端基线相比，我们的方法在事实准确性、角色一致性和整体叙事连贯性方面取得了显着改进。

</details>

---

## 2. EmbodMocap: In-the-Wild 4D Human-Scene Reconstruction for Embodied Agents / EmbodMocap：实体代理的野外 4D 人体场景重建

**Date**: 2026-02-26 | **arXiv**: [2602.23205v1](http://arxiv.org/abs/2602.23205v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23205v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Human behaviors in the real world naturally encode rich, long-term contextual information that can be leveraged to train embodied agents for perception, understanding, and acting. However, existing capture systems typically rely on costly studio setups and wearable devices, limiting the large-scale collection of scene-conditioned human motion data in the wild. To address this, we propose EmbodMocap, a portable and affordable data collection pipeline using two moving iPhones. Our key idea is to jointly calibrate dual RGB-D sequences to reconstruct both humans and scenes within a unified metric world coordinate frame. The proposed method allows metric-scale and scene-consistent capture in everyday environments without static cameras or markers, bridging human motion and scene geometry seamlessly. Compared with optical capture ground truth, we demonstrate that the dual-view setting exhibits a remarkable ability to mitigate depth ambiguity, achieving superior alignment and reconstruction performance over single iphone or monocular models. Based on the collected data, we empower three embodied AI tasks: monocular human-scene-reconstruction, where we fine-tune on feedforward models that output metric-scale, world-space aligned humans and scenes; physics-based character animation, where we prove our data could be used to scale human-object interaction skills and scene-aware motion tracking; and robot motion control, where we train a humanoid robot via sim-to-real RL to replicate human motions depicted in videos. Experimental results validate the effectiveness of our pipeline and its contributions towards advancing embodied AI research.

现实世界中的人类行为自然会编码丰富的长期上下文信息，这些信息可用于训练实体代理的感知、理解和行动。然而，现有的捕捉系统通常依赖于昂贵的工作室设置和可穿戴设备，限制了在野外大规模收集场景调节的人体运动数据。为了解决这个问题，我们提出了 EmbodMocap，这是一种使用两部移动 iPhone 的便携式且经济实惠的数据收集管道。我们的关键思想是联合校准双 RGB-D 序列，以在统一的公制世界坐标系内重建人类和场景。所提出的方法允许在日常环境中进行公制尺度和场景一致的捕获，而无需静态相机或标记，从而无缝地连接人体运动和场景几何形状。与光学捕获地面实况相比，我们证明双视图设置表现出显着的减轻深度模糊性的能力，与单个 iPhone 或单目模型相比，实现了卓越的对齐和重建性能。基于收集到的数据，我们支持三项具体的人工智能任务：单目人类场景重建，我们对前馈模型进行微调，输出公制尺度、世界空间对齐的人类和场景；基于物理的角色动画，我们证明我们的数据可用于扩展人类对象交互技能和场景感知运动跟踪；和机器人运动控制，我们通过模拟到真实的强化学习来训练人形机器人来复制视频中描绘的人类运动。实验结果验证了我们管道的有效性及其对推进具体人工智能研究的贡献。

</details>

---

## 3. ColoDiff: Integrating Dynamic Consistency With Content Awareness for Colonoscopy Video Generation / ColoDiff：将动态一致性与内容感知相结合以生成结肠镜检查视频

**Date**: 2026-02-26 | **arXiv**: [2602.23203v1](http://arxiv.org/abs/2602.23203v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23203v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Colonoscopy video generation delivers dynamic, information-rich data critical for diagnosing intestinal diseases, particularly in data-scarce scenarios. High-quality video generation demands temporal consistency and precise control over clinical attributes, but faces challenges from irregular intestinal structures, diverse disease representations, and various imaging modalities. To this end, we propose ColoDiff, a diffusion-based framework that generates dynamic-consistent and content-aware colonoscopy videos, aiming to alleviate data shortage and assist clinical analysis. At the inter-frame level, our TimeStream module decouples temporal dependency from video sequences through a cross-frame tokenization mechanism, enabling intricate dynamic modeling despite irregular intestinal structures. At the intra-frame level, our Content-Aware module incorporates noise-injected embeddings and learnable prototypes to realize precise control over clinical attributes, breaking through the coarse guidance of diffusion models. Additionally, ColoDiff employs a non-Markovian sampling strategy that cuts steps by over 90% for real-time generation. ColoDiff is evaluated across three public datasets and one hospital database, based on both generation metrics and downstream tasks including disease diagnosis, modality discrimination, bowel preparation scoring, and lesion segmentation. Extensive experiments show ColoDiff generates videos with smooth transitions and rich dynamics. ColoDiff presents an effort in controllable colonoscopy video generation, revealing the potential of synthetic videos in complementing authentic representation and mitigating data scarcity in clinical settings.

结肠镜检查视频生成提供动态、信息丰富的数据，这对于诊断肠道疾病至关重要，特别是在数据稀缺的情况下。高质量视频生成需要时间一致性和对临床属性的精确控制，但面临着不规则肠道结构、多样化疾病表现和各种成像方式的挑战。为此，我们提出了 ColoDiff，一种基于扩散的框架，可生成动态一致且内容感知的结肠镜检查视频，旨在缓解数据短缺并协助临床分析。在帧间级别，我们的 TimeStream 模块通过跨帧标记化机制将时间依赖性与视频序列解耦，从而在肠道结构不规则的情况下实现复杂的动态建模。在帧内级别，我们的内容感知模块结合了噪声注入嵌入和可学习原型，以实现对临床属性的精确控制，突破了扩散模型的粗略指导。此外，ColoDiff 采用非马尔可夫采样策略，可以将实时生成的步骤减少 90% 以上。 ColoDiff 在三个公共数据集和一个医院数据库中进行评估，基于生成指标和下游任务，包括疾病诊断、模态区分、肠道准备评分和病变分割。大量实验表明 ColoDiff 生成的视频具有平滑的过渡和丰富的动态。 ColoDiff 在可控结肠镜检查视频生成方面做出了努力，揭示了合成视频在补充真实表现和缓解临床环境中数据稀缺方面的潜力。

</details>

---

## 4. The Trinity of Consistency as a Defining Principle for General World Models / 一致性的三位一体作为一般世界模型的定义原则

**Date**: 2026-02-26 | **arXiv**: [2602.23152v1](http://arxiv.org/abs/2602.23152v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23152v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

The construction of World Models capable of learning, simulating, and reasoning about objective physical laws constitutes a foundational challenge in the pursuit of Artificial General Intelligence. Recent advancements represented by video generation models like Sora have demonstrated the potential of data-driven scaling laws to approximate physical dynamics, while the emerging Unified Multimodal Model (UMM) offers a promising architectural paradigm for integrating perception, language, and reasoning. Despite these advances, the field still lacks a principled theoretical framework that defines the essential properties requisite for a General World Model. In this paper, we propose that a World Model must be grounded in the Trinity of Consistency: Modal Consistency as the semantic interface, Spatial Consistency as the geometric basis, and Temporal Consistency as the causal engine. Through this tripartite lens, we systematically review the evolution of multimodal learning, revealing a trajectory from loosely coupled specialized modules toward unified architectures that enable the synergistic emergence of internal world simulators. To complement this conceptual framework, we introduce CoW-Bench, a benchmark centered on multi-frame reasoning and generation scenarios. CoW-Bench evaluates both video generation models and UMMs under a unified evaluation protocol. Our work establishes a principled pathway toward general world models, clarifying both the limitations of current systems and the architectural requirements for future progress.

构建能够学习、模拟和推理客观物理定律的世界模型是追求通用人工智能的基本挑战。以 Sora 等视频生成模型为代表的最新进展证明了数据驱动的缩放定律在近似物理动力学方面的潜力，而新兴的统一多模态模型 (UMM) 则为集成感知、语言和推理提供了一种有前途的架构范例。尽管取得了这些进展，该领域仍然缺乏一个原则性的理论框架来定义通用世界模型所需的基本属性。在本文中，我们提出世界模型必须建立在一致性三位一体的基础上：模态一致性作为语义接口，空间一致性作为几何基础，时间一致性作为因果引擎。通过这个三方视角，我们系统地回顾了多模态学习的演变，揭示了从松散耦合的专业模块到统一架构的轨迹，从而实现内部世界模拟器的协同出现。为了补充这个概念框架，我们引入了 CoW-Bench，这是一个以多帧推理和生成场景为中心的基准测试。 CoW-Bench 在统一的评估协议下评估视频生成模型和 UMM。我们的工作建立了通向通用世界模型的原则性途径，阐明了当前系统的局限性和未来进步的架构要求。

</details>

---

## 5. Align then Adapt: Rethinking Parameter-Efficient Transfer Learning in 4D Perception / 先对齐再适应：重新思考 4D 感知中的参数高效迁移学习

**Date**: 2026-02-26 | **arXiv**: [2602.23069v1](http://arxiv.org/abs/2602.23069v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23069v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Point cloud video understanding is critical for robotics as it accurately encodes motion and scene interaction. We recognize that 4D datasets are far scarcer than 3D ones, which hampers the scalability of self-supervised 4D models. A promising alternative is to transfer 3D pre-trained models to 4D perception tasks. However, rigorous empirical analysis reveals two critical limitations that impede transfer capability: overfitting and the modality gap. To overcome these challenges, we develop a novel "Align then Adapt" (PointATA) paradigm that decomposes parameter-efficient transfer learning into two sequential stages. Optimal-transport theory is employed to quantify the distributional discrepancy between 3D and 4D datasets, enabling our proposed point align embedder to be trained in Stage 1 to alleviate the underlying modality gap. To mitigate overfitting, an efficient point-video adapter and a spatial-context encoder are integrated into the frozen 3D backbone to enhance temporal modeling capacity in Stage 2. Notably, with the above engineering-oriented designs, PointATA enables a pre-trained 3D model without temporal knowledge to reason about dynamic video content at a smaller parameter cost compared to previous work. Extensive experiments show that PointATA can match or even outperform strong full fine-tuning models, whilst enjoying the advantage of parameter efficiency, e.g. 97.21 \% accuracy on 3D action recognition, $+8.7 \%$ on 4 D action segmentation, and 84.06\% on 4D semantic segmentation.

点云视频理解对于机器人技术至关重要，因为它可以准确地编码运动和场景交互。我们认识到 4D 数据集比 3D 数据集稀缺得多，这阻碍了自监督 4D 模型的可扩展性。一个有前途的替代方案是将 3D 预训练模型转移到 4D 感知任务。然而，严格的实证分析揭示了阻碍转移能力的两个关键限制：过度拟合和模态差距。为了克服这些挑战，我们开发了一种新颖的“对齐然后适应”（PointATA）范例，将参数高效的迁移学习分解为两个连续的阶段。采用最佳传输理论来量化 3D 和 4D 数据集之间的分布差异，使我们提出的点对齐嵌入器能够在第一阶段进行训练，以减轻潜在的模态差距。为了缓解过度拟合，将高效的点视频适配器和空间上下文编码器集成到冻结的 3D 主干中，以增强第 2 阶段的时间建模能力。值得注意的是，通过上述面向工程的设计，PointATA 可以在没有时间知识的情况下实现预训练的 3D 模型，与之前的工作相比，可以以更小的参数成本推理动态视频内容。大量实验表明，PointATA 可以匹配甚至超越强大的全微调模型，同时享受参数效率的优势，例如3D 动作识别的准确度为 97.21 \%，4D 动作分割的准确度为 $+8.7 \%$，4D 语义分割的准确度为 84.06\%。

</details>

---

## 6. PackUV: Packed Gaussian UV Maps for 4D Volumetric Video / PackUV：用于 4D 体积视频的打包高斯 UV 贴图

**Date**: 2026-02-26 | **arXiv**: [2602.23040v1](http://arxiv.org/abs/2602.23040v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23040v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Volumetric videos offer immersive 4D experiences, but remain difficult to reconstruct, store, and stream at scale. Existing Gaussian Splatting based methods achieve high-quality reconstruction but break down on long sequences, temporal inconsistency, and fail under large motions and disocclusions. Moreover, their outputs are typically incompatible with conventional video coding pipelines, preventing practical applications.   We introduce PackUV, a novel 4D Gaussian representation that maps all Gaussian attributes into a sequence of structured, multi-scale UV atlas, enabling compact, image-native storage. To fit this representation from multi-view videos, we propose PackUV-GS, a temporally consistent fitting method that directly optimizes Gaussian parameters in the UV domain. A flow-guided Gaussian labeling and video keyframing module identifies dynamic Gaussians, stabilizes static regions, and preserves temporal coherence even under large motions and disocclusions. The resulting UV atlas format is the first unified volumetric video representation compatible with standard video codecs (e.g., FFV1) without losing quality, enabling efficient streaming within existing multimedia infrastructure.   To evaluate long-duration volumetric capture, we present PackUV-2B, the largest multi-view video dataset to date, featuring more than 50 synchronized cameras, substantial motion, and frequent disocclusions across 100 sequences and 2B (billion) frames. Extensive experiments demonstrate that our method surpasses existing baselines in rendering fidelity while scaling to sequences up to 30 minutes with consistent quality.

体积视频提供身临其境的 4D 体验，但仍然难以大规模重建、存储和流式传输。现有的基于高斯分布的方法实现了高质量的重建，但在长序列、时间不一致的情况下会崩溃，并且在大运动和去遮挡下会失败。此外，它们的输出通常与传统的视频编码管道不兼容，从而阻碍了实际应用。   我们引入了 PackUV，这是一种新颖的 4D 高斯表示，可将所有高斯属性映射到一系列结构化、多尺度 UV 图集，从而实现紧凑的图像原生存储。为了拟合多视图视频的这种表示，我们提出了 PackUV-GS，这是一种时间一致的拟合方法，可以直接优化 UV 域中的高斯参数。流引导的高斯标记和视频关键帧模块可以识别动态高斯，稳定静态区域，并即使在大运动和去遮挡的情况下也能保持时间连贯性。由此产生的 UV 图集格式是第一个与标准视频编解码器（例如 FFV1）兼容的统一体积视频表示形式，且不会损失质量，从而能够在现有多媒体基础设施中实现高效流式传输。   为了评估长时间的体积捕获，我们提出了 PackUV-2B，这是迄今为止最大的多视图视频数据集，具有 50 多个同步摄像机、大量运动以及跨 100 个序列和 2B（十亿）帧的频繁遮挡。大量实验表明，我们的方法在渲染保真度方面超越了现有基线，同时可扩展到长达 30 分钟的序列且质量一致。

</details>

---

## 7. DMAligner: Enhancing Image Alignment via Diffusion Model Based View Synthesis / DMAligner：通过基于扩散模型的视图合成增强图像对齐

**Date**: 2026-02-26 | **arXiv**: [2602.23022v1](http://arxiv.org/abs/2602.23022v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.23022v1)

**Categories**: cs.CV

**Code**: https://github.com/boomluo02/DMAligner.

<details><summary><b>Abstract / 摘要</b></summary>

Image alignment is a fundamental task in computer vision with broad applications. Existing methods predominantly employ optical flow-based image warping. However, this technique is susceptible to common challenges such as occlusions and illumination variations, leading to degraded alignment visual quality and compromised accuracy in downstream tasks. In this paper, we present DMAligner, a diffusion-based framework for image alignment through alignment-oriented view synthesis. DMAligner is crafted to tackle the challenges in image alignment from a new perspective, employing a generation-based solution that showcases strong capabilities and avoids the problems associated with flow-based image warping. Specifically, we propose a Dynamics-aware Diffusion Training approach for learning conditional image generation, synthesizing a novel view for image alignment. This incorporates a Dynamics-aware Mask Producing (DMP) module to adaptively distinguish dynamic foreground regions from static backgrounds, enabling the diffusion model to more effectively handle challenges that classical methods struggle to solve. Furthermore, we develop the Dynamic Scene Image Alignment (DSIA) dataset using Blender, which includes 1,033 indoor and outdoor scenes with over 30K image pairs tailored for image alignment. Extensive experimental results demonstrate the superiority of the proposed approach on DSIA benchmarks, as well as on a series of widely-used video datasets for qualitative comparisons. Our code is available at https://github.com/boomluo02/DMAligner.

图像对齐是计算机视觉中的一项基本任务，具有广泛的应用。现有方法主要采用基于光流的图像扭曲。然而，该技术容易受到遮挡和照明变化等常见挑战的影响，导致对齐视觉质量下降并影响下游任务的准确性。在本文中，我们提出了 DMAaligner，这是一种基于扩散的框架，通过面向对齐的视图合成进行图像对齐。 DMAligner 旨在从新的角度应对图像对齐的挑战，采用基于生成的解决方案，展示强大的功能并避免与基于流的图像扭曲相关的问题。具体来说，我们提出了一种动态感知扩散训练方法，用于学习条件图像生成，合成图像对齐的新颖视图。它结合了动态感知掩模生成（DMP）模块，可以自适应地区分动态前景区域和静态背景，使扩散模型能够更有效地应对经典方法难以解决的挑战。此外，我们使用 Blender 开发了动态场景图像对齐 (DSIA) 数据集，其中包括 1,033 个室内和室外场景，以及为图像对齐量身定制的超过 30K 图像对。大量的实验结果证明了所提出的方法在 DSIA 基准以及一系列广泛使用的视频数据集上进行定性比较的优越性。我们的代码可在 https://github.com/boomluo02/DMAligner 获取。

</details>

---

## 8. UCM: Unifying Camera Control and Memory with Time-aware Positional Encoding Warping for World Models / UCM：通过世界模型的时间感知位置编码变形来统一相机控制和内存

**Date**: 2026-02-26 | **arXiv**: [2602.22960v1](http://arxiv.org/abs/2602.22960v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.22960v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

World models based on video generation demonstrate remarkable potential for simulating interactive environments but face persistent difficulties in two key areas: maintaining long-term content consistency when scenes are revisited and enabling precise camera control from user-provided inputs. Existing methods based on explicit 3D reconstruction often compromise flexibility in unbounded scenarios and fine-grained structures. Alternative methods rely directly on previously generated frames without establishing explicit spatial correspondence, thereby constraining controllability and consistency. To address these limitations, we present UCM, a novel framework that unifies long-term memory and precise camera control via a time-aware positional encoding warping mechanism. To reduce computational overhead, we design an efficient dual-stream diffusion transformer for high-fidelity generation. Moreover, we introduce a scalable data curation strategy utilizing point-cloud-based rendering to simulate scene revisiting, facilitating training on over 500K monocular videos. Extensive experiments on real-world and synthetic benchmarks demonstrate that UCM significantly outperforms state-of-the-art methods in long-term scene consistency, while also achieving precise camera controllability in high-fidelity video generation.

基于视频生成的世界模型在模拟交互环境方面表现出了巨大的潜力，但在两个关键领域面临着持续的困难：重新访问场景时保持长期内容一致性以及通过用户提供的输入实现精确的摄像机控制。基于显式 3D 重建的现有方法通常会损害无界场景和细粒度结构的灵活性。替代方法直接依赖于先前生成的帧，而不建立明确的空间对应关系，从而限制了可控性和一致性。为了解决这些限制，我们提出了 UCM，这是一种新颖的框架，通过时间感知的位置编码扭曲机制将长期记忆和精确的相机控制结合起来。为了减少计算开销，我们设计了一种用于高保真生成的高效双流扩散变压器。此外，我们引入了一种可扩展的数据管理策略，利用基于点云的渲染来模拟场景重访，从而促进对超过 500K 单目视频的训练。对现实世界和综合基准的大量实验表明，UCM 在长期场景一致性方面显着优于最先进的方法，同时在高保真视频生成中实现了精确的摄像机可控性。

</details>

---

## 9. Velocity and stroke rate reconstruction of canoe sprint team boats based on panned and zoomed video recordings / 基于平移和缩放视频记录的皮划艇短跑队船只的速度和划水率重建

**Date**: 2026-02-26 | **arXiv**: [2602.22941v1](http://arxiv.org/abs/2602.22941v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.22941v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Pacing strategies, defined by velocity and stroke rate profiles, are essential for peak performance in canoe sprint. While GPS is the gold standard for analysis, its limited availability necessitates automated video-based solutions. This paper presents an extended framework for reconstructing performance metrics from panned and zoomed video recordings across all sprint disciplines (K1-K4, C1-C2) and distances (200m-500m). Our method utilizes YOLOv8 for buoy and athlete detection, leveraging the known buoy grid to estimate homographies. We generalized the estimation of the boat position by means of learning a boat-specific athlete offset using a U-net based boat tip calibration. Further, we implement a robust tracking scheme using optical flow to adapt to multi-athlete boat types. Finally, we introduce methods to extract stroke rate information from either pose estimations or the athlete bounding boxes themselves. Evaluation against GPS data from elite competitions yields a velocity RRMSE of 0.020 +- 0.011 (rho = 0.956) and a stroke rate RRMSE of 0.022 +- 0.024 (rho = 0.932). The methods provide coaches with highly accurate, automated feedback without requiring on-boat sensors or manual annotation.

由速度和划水频率曲线定义的配速策略对于独木舟冲刺的最佳表现至关重要。虽然 GPS 是分析的黄金标准，但其有限的可用性需要基于自动化视频的解决方案。本文提出了一个扩展框架，用于从所有冲刺学科（K1-K4、C1-C2）和距离（200m-500m）的平移和缩放视频记录中重建表现指标。我们的方法利用 YOLOv8 进行浮标和运动员检测，利用已知的浮标网格来估计单应性。我们通过使用基于 U 网的船尖校准来学习特定于船的运动员偏移量，从而概括了船位置的估计。此外，我们使用光流实现了强大的跟踪方案，以适应多运动员船只类型。最后，我们介绍了从姿势估计或运动员边界框本身中提取划水频率信息的方法。根据精英比赛的 GPS 数据进行评估，得出速度 RRMSE 为 0.020 ± 0.011 (rho = 0.956)，划水频率 RRMSE 为 0.022 ± 0.024 (rho = 0.932)。这些方法为教练提供高度准确的自动反馈，无需船上传感器或手动注释。

</details>

---

## 10. MSJoE: Jointly Evolving MLLM and Sampler for Efficient Long-Form Video Understanding / MSJoE：联合进化 MLLM 和采样器以实现高效的长格式视频理解

**Date**: 2026-02-26 | **arXiv**: [2602.22932v1](http://arxiv.org/abs/2602.22932v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.22932v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Efficiently understanding long-form videos remains a fundamental challenge for multimodal large language models (MLLMs). In this paper, we present MLLM-Sampler Joint Evolution (MSJoE), a novel framework that jointly evolves the MLLM and a lightweight key-frame sampler for efficient long-form video understanding. MSJoE builds upon a key assumption that only a small subset of key-frames is truly informative for answering each question to a video. Specifically, MSJoE first reasons out several queries, which describe diverse visual perspectives relevant to the question. Then, these queries interact with a frozen CLIP model to produce a query-frame similarity matrix. Finally, a lightweight sampler predicts key-frame sampling weights from this matrix, selecting a compact set of informative frames, which are then fed into the MLLM for answer generation. Both the MLLM and sampler are jointly optimized through reinforcement learning, enabling co-adaptation of query-reasoning, frame-sampling, and key-frame understanding. A new long-video QA dataset containing 2.8K videos with 7K question-answer pairs is collected to support the training process. Extensive experiments on VideoMME, LongVideoBench, LVBench, and MLVU show that MSJoE achieves 8.0\% accuracy gain upon the base MLLM, and 1.1\% higher accuracy than strongest baseline method.

有效理解长视频仍然是多模态大语言模型（MLLM）的基本挑战。在本文中，我们提出了 MLLM-采样器联合进化（MSJoE），这是一种联合进化 MLLM 和轻量级关键帧采样器的新颖框架，用于高效的长格式视频理解。 MSJoE 建立在一个关键假设之上，即只有一小部分关键帧能够真正为回答视频的每个问题提供信息。具体来说，MSJoE 首先推理出几个查询，这些查询描述了与问题相关的不同视觉视角。然后，这些查询与冻结的 CLIP 模型交互以生成查询帧相似度矩阵。最后，轻量级采样器根据该矩阵预测关键帧采样权重，选择一组紧凑的信息帧，然后将其馈送到 MLLM 中以生成答案。 MLLM 和采样器都通过强化学习进行联合优化，从而实现查询推理、帧采样和关键帧理解的共同适应。收集了一个新的长视频 QA 数据集，其中包含 2.8K 视频和 7K 问答对，以支持训练过程。在 VideoMME、LongVideoBench、LVBench 和 MLVU 上进行的大量实验表明，MSJoE 在基础 MLLM 的基础上实现了 8.0% 的精度增益，比最强基线方法的精度提高了 1.1%。

</details>

---

## 11. WaterVideoQA: ASV-Centric Perception and Rule-Compliant Reasoning via Multi-Modal Agents / WaterVideoQA：通过多模态代理进行以 ASV 为中心的感知和符合规则的推理

**Date**: 2026-02-26 | **arXiv**: [2602.22923v1](http://arxiv.org/abs/2602.22923v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.22923v1)

**Categories**: cs.CV, cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

While autonomous navigation has achieved remarkable success in passive perception (e.g., object detection and segmentation), it remains fundamentally constrained by a void in knowledge-driven, interactive environmental cognition. In the high-stakes domain of maritime navigation, the ability to bridge the gap between raw visual perception and complex cognitive reasoning is not merely an enhancement but a critical prerequisite for Autonomous Surface Vessels to execute safe and precise maneuvers. To this end, we present WaterVideoQA, the first large-scale, comprehensive Video Question Answering benchmark specifically engineered for all-waterway environments. This benchmark encompasses 3,029 video clips across six distinct waterway categories, integrating multifaceted variables such as volatile lighting and dynamic weather to rigorously stress-test ASV capabilities across a five-tier hierarchical cognitive framework. Furthermore, we introduce NaviMind, a pioneering multi-agent neuro-symbolic system designed for open-ended maritime reasoning. By synergizing Adaptive Semantic Routing, Situation-Aware Hierarchical Reasoning, and Autonomous Self-Reflective Verification, NaviMind transitions ASVs from superficial pattern matching to regulation-compliant, interpretable decision-making. Experimental results demonstrate that our framework significantly transcends existing baselines, establishing a new paradigm for intelligent, trustworthy interaction in dynamic maritime environments.

尽管自主导航在被动感知（例如对象检测和分割）方面取得了显着的成功，但它仍然从根本上受到知识驱动的交互式环境认知空白的限制。在海上导航这个高风险领域，弥合原始视觉感知和复杂认知推理之间差距的能力不仅是一种增强，而且是自主水面舰艇执行安全和精确机动的关键先决条件。为此，我们推出了 WaterVideoQA，这是第一个专门针对全水路环境设计的大规模、全面的视频问答基准测试。该基准测试包含 6 个不同水道类别的 3,029 个视频剪辑，集成了多方面变量（例如不稳定的照明和动态天气），以跨五层分层认知框架严格测试 ASV 功能。此外，我们还介绍了 NaviMind，这是一种开创性的多智能体神经符号系统，专为开放式海事推理而设计。通过协同自适应语义路由、情境感知分层推理和自主自我反思验证，NaviMind 将 ASV 从肤浅的模式匹配转变为符合法规的、可解释的决策。实验结果表明，我们的框架显着超越了现有的基线，为动态海洋环境中的智能、值得信赖的交互建立了新的范式。

</details>

---

## 12. TrajTok: Learning Trajectory Tokens enables better Video Understanding / TrajTok：学习轨迹标记可以更好地理解视频

**Date**: 2026-02-26 | **arXiv**: [2602.22779v1](http://arxiv.org/abs/2602.22779v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.22779v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Tokenization in video models, typically through patchification, generates an excessive and redundant number of tokens. This severely limits video efficiency and scalability. While recent trajectory-based tokenizers offer a promising solution by decoupling video duration from token count, they rely on complex external segmentation and tracking pipelines that are slow and task-agnostic. We propose TrajTok, an end-to-end video tokenizer module that is fully integrated and co-trained with video models for a downstream objective, dynamically adapting its token granularity to semantic complexity, independent of video duration. TrajTok contains a unified segmenter that performs implicit clustering over pixels in both space and time to directly produce object trajectories in a single forward pass. By prioritizing downstream adaptability over pixel-perfect segmentation fidelity, TrajTok is lightweight and efficient, yet empirically improves video understanding performance. With TrajTok, we implement a video CLIP model trained from scratch (TrajViT2). It achieves the best accuracy at scale across both classification and retrieval benchmarks, while maintaining efficiency comparable to the best token-merging methods. TrajTok also proves to be a versatile component beyond its role as a tokenizer. We show that it can be seamlessly integrated as either a probing head for pretrained visual features (TrajAdapter) or an alignment connector in vision-language models (TrajVLM) with especially strong performance in long-video reasoning.

视频模型中的标记化（通常通过补丁化）会生成过多且冗余的标记。这严重限制了视频效率和可扩展性。虽然最近基于轨迹的标记器通过将视频持续时间与标记计数解耦提供了一种有前途的解决方案，但它们依赖于复杂的外部分段和跟踪管道，这些管道速度缓慢且与任务无关。我们提出了 TrajTok，这是一种端到端视频标记器模块，它与下游目标的视频模型完全集成和共同训练，动态地调整其标记粒度以适应语义复杂性，而与视频时长无关。 TrajTok 包含一个统一的分段器，可以在空间和时间上对像素执行隐式聚类，以在单个前向传递中直接生成对象轨迹。通过优先考虑下游适应性而不是像素完美的分割保真度，TrajTok 是轻量级且高效的，但凭经验提高了视频理解性能。借助 TrajTok，我们实现了从头开始训练的视频 CLIP 模型 (TrajViT2)。它在分类和检索基准上实现了大规模的最佳准确度，同时保持了与最佳标记合并方法相当的效率。 TrajTok 还被证明是一个超越其标记器角色的多功能组件。我们证明它可以无缝集成为预训练视觉特征的探测头（TrajAdapter）或视觉语言模型（TrajVLM）中的对齐连接器，在长视频推理中具有特别强大的性能。

</details>

---

## 13. SPATIALALIGN: Aligning Dynamic Spatial Relationships in Video Generation / SPATIALALIGN：在视频生成中对齐动态空间关系

**Date**: 2026-02-26 | **arXiv**: [2602.22745v1](http://arxiv.org/abs/2602.22745v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.22745v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Most text-to-video (T2V) generators prioritize aesthetic quality, but often ignoring the spatial constraints in the generated videos. In this work, we present SPATIALALIGN, a self-improvement framework that enhances T2V models capabilities to depict Dynamic Spatial Relationships (DSR) specified in text prompts. We present a zeroth-order regularized Direct Preference Optimization (DPO) to fine-tune T2V models towards better alignment with DSR. Specifically, we design DSR-SCORE, a geometry-based metric that quantitatively measures the alignment between generated videos and the specified DSRs in prompts, which is a step forward from prior works that rely on VLM for evaluation. We also conduct a dataset of text-video pairs with diverse DSRs to facilitate the study. Extensive experiments demonstrate that our fine-tuned model significantly out performs the baseline in spatial relationships. The code will be released in Link.

大多数文本转视频 (T2V) 生成器优先考虑美观质量，但往往忽略生成视频中的空间限制。在这项工作中，我们提出了 SPATIALALIGN，这是一个自我改进框架，可增强 T2V 模型描述文本提示中指定的动态空间关系 (DSR) 的能力。我们提出了零阶正则化直接偏好优化 (DPO) 来微调 T2V 模型，以更好地与 DSR 保持一致。具体来说，我们设计了 DSR-SCORE，这是一种基于几何的指标，可以定量测量生成的视频与提示中指定的 DSR 之间的对齐情况，这比之前依赖 VLM 进行评估的工作向前迈出了一步。我们还建立了具有不同 DSR 的文本视频对数据集，以促进研究。大量的实验表明，我们的微调模型在空间关系方面的表现显着优于基线。代码将在Link中发布。

</details>

---

## 14. Denoising as Path Planning: Training-Free Acceleration of Diffusion Models with DPCache / 去噪作为路径规划：使用 DPCache 进行扩散模型的免训练加速

**Date**: 2026-02-26 | **arXiv**: [2602.22654v1](http://arxiv.org/abs/2602.22654v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.22654v1)

**Categories**: cs.CV

**Code**: https://github.com/argsss/DPCache.

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion models have demonstrated remarkable success in image and video generation, yet their practical deployment remains hindered by the substantial computational overhead of multi-step iterative sampling. Among acceleration strategies, caching-based methods offer a training-free and effective solution by reusing or predicting features across timesteps. However, existing approaches rely on fixed or locally adaptive schedules without considering the global structure of the denoising trajectory, often leading to error accumulation and visual artifacts. To overcome this limitation, we propose DPCache, a novel training-free acceleration framework that formulates diffusion sampling acceleration as a global path planning problem. DPCache constructs a Path-Aware Cost Tensor from a small calibration set to quantify the path-dependent error of skipping timesteps conditioned on the preceding key timestep. Leveraging this tensor, DPCache employs dynamic programming to select an optimal sequence of key timesteps that minimizes the total path cost while preserving trajectory fidelity. During inference, the model performs full computations only at these key timesteps, while intermediate outputs are efficiently predicted using cached features. Extensive experiments on DiT, FLUX, and HunyuanVideo demonstrate that DPCache achieves strong acceleration with minimal quality loss, outperforming prior acceleration methods by $+$0.031 ImageReward at 4.87$\times$ speedup and even surpassing the full-step baseline by $+$0.028 ImageReward at 3.54$\times$ speedup on FLUX, validating the effectiveness of our path-aware global scheduling framework. Code will be released at https://github.com/argsss/DPCache.

扩散模型在图像和视频生成方面取得了显着的成功，但其实际部署仍然受到多步迭代采样的大量计算开销的阻碍。在加速策略中，基于缓存的方法通过跨时间步重用或预测特征来提供免训练且有效的解决方案。然而，现有方法依赖于固定或局部自适应调度，而不考虑去噪轨迹的全局结构，通常导致误差累积和视觉伪影。为了克服这一限制，我们提出了 DPCache，这是一种新颖的免训练加速框架，它将扩散采样加速表述为全局路径规划问题。 DPCache 从一个小的校准集中构造一个路径感知成本张量，以量化以前面的关键时间步长为条件的跳过时间步长的路径相关误差。利用该张量，DPCache 采用动态编程来选择关键时间步的最佳序列，从而最大限度地降低总路径成本，同时保持轨迹保真度。在推理过程中，模型仅在这些关键时间步执行完整计算，而使用缓存的特征有效地预测中间输出。在 DiT、FLUX 和 HunyuanVideo 上进行的大量实验表明，DPCache 以最小的质量损失实现了强大的加速，在 4.87$\times$ 加速下比之前的加速方法高出 $+$0.031 ImageReward，甚至在 FLUX 上以 3.54$\times$ 加速超过全步基线 $+$0.028 ImageReward，验证了我们的路径感知全局调度框架的有效性。代码将在 https://github.com/argsss/DPCache 发布。

</details>

---

## 15. BetterScene: 3D Scene Synthesis with Representation-Aligned Generative Model / BetterScene：使用表示对齐生成模型进行 3D 场景合成

**Date**: 2026-02-26 | **arXiv**: [2602.22596v1](http://arxiv.org/abs/2602.22596v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.22596v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

We present BetterScene, an approach to enhance novel view synthesis (NVS) quality for diverse real-world scenes using extremely sparse, unconstrained photos. BetterScene leverages the production-ready Stable Video Diffusion (SVD) model pretrained on billions of frames as a strong backbone, aiming to mitigate artifacts and recover view-consistent details at inference time. Conventional methods have developed similar diffusion-based solutions to address these challenges of novel view synthesis. Despite significant improvements, these methods typically rely on off-the-shelf pretrained diffusion priors and fine-tune only the UNet module while keeping other components frozen, which still leads to inconsistent details and artifacts even when incorporating geometry-aware regularizations like depth or semantic conditions. To address this, we investigate the latent space of the diffusion model and introduce two components: (1) temporal equivariance regularization and (2) vision foundation model-aligned representation, both applied to the variational autoencoder (VAE) module within the SVD pipeline. BetterScene integrates a feed-forward 3D Gaussian Splatting (3DGS) model to render features as inputs for the SVD enhancer and generate continuous, artifact-free, consistent novel views. We evaluate on the challenging DL3DV-10K dataset and demonstrate superior performance compared to state-of-the-art methods.

我们提出了 BetterScene，这是一种使用极其稀疏、无约束的照片来增强各种现实世界场景的新颖视图合成 (NVS) 质量的方法。 BetterScene 利用在数十亿帧上预训练的可投入生产的稳定视频扩散 (SVD) 模型作为强大的骨干，旨在减少伪影并在推理时恢复视图一致的细节。传统方法已经开发了类似的基于扩散的解决方案来解决新颖视图合成的这些挑战。尽管有了显着的改进，这些方法通常依赖于现成的预训练扩散先验，并且仅对 UNet 模块进行微调，同时保持其他组件冻结，即使在合并深度或语义条件等几何感知正则化时，这仍然会导致细节和伪影不一致。为了解决这个问题，我们研究了扩散模型的潜在空间，并引入了两个组件：(1) 时间等方差正则化和 (2) 视觉基础模型对齐表示，两者都应用于 SVD 管道内的变分自动编码器 (VAE) 模块。 BetterScene 集成了前馈 3D 高斯泼溅 (3DGS) 模型，将特征渲染为 SVD 增强器的输入，并生成连续、无伪影、一致的新颖视图。我们对具有挑战性的 DL3DV-10K 数据集进行评估，并展示了与最先进的方法相比的卓越性能。

</details>

---

## 16. Flow Matching is Adaptive to Manifold Structures / 流量匹配适应歧管结构

**Date**: 2026-02-25 | **arXiv**: [2602.22486v1](http://arxiv.org/abs/2602.22486v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.22486v1)

**Categories**: stat.ML, cs.LG, math.ST

<details><summary><b>Abstract / 摘要</b></summary>

Flow matching has emerged as a simulation-free alternative to diffusion-based generative modeling, producing samples by solving an ODE whose time-dependent velocity field is learned along an interpolation between a simple source distribution (e.g., a standard normal) and a target data distribution. Flow-based methods often exhibit greater training stability and have achieved strong empirical performance in high-dimensional settings where data concentrate near a low-dimensional manifold, such as text-to-image synthesis, video generation, and molecular structure generation. Despite this success, existing theoretical analyses of flow matching assume target distributions with smooth, full-dimensional densities, leaving its effectiveness in manifold-supported settings largely unexplained. To this end, we theoretically analyze flow matching with linear interpolation when the target distribution is supported on a smooth manifold. We establish a non-asymptotic convergence guarantee for the learned velocity field, and then propagate this estimation error through the ODE to obtain statistical consistency of the implicit density estimator induced by the flow-matching objective. The resulting convergence rate is near minimax-optimal, depends only on the intrinsic dimension, and reflects the smoothness of both the manifold and the target distribution. Together, these results provide a principled explanation for how flow matching adapts to intrinsic data geometry and circumvents the curse of dimensionality.

流匹配已成为基于扩散的生成建模的免模拟替代方案，通过求解常微分方程来生成样本，该常微分方程的时间相关速度场是通过简单源分布（例如标准正态）和目标数据分布之间的插值来学习的。基于流的方法通常表现出更高的训练稳定性，并且在数据集中在低维流形附近的高维设置中实现了强大的经验性能，例如文本到图像合成、视频生成和分子结构生成。尽管取得了这一成功，现有的流匹配理论分析假设目标分布具有平滑、全维密度，使其在流形支持的设置中的有效性很大程度上无法解释。为此，我们从理论上分析了当目标分布支持在光滑流形上时使用线性插值的流匹配。我们为学习的速度场建立非渐近收敛保证，然后通过 ODE 传播该估计误差，以获得由流匹配目标引起的隐式密度估计器的统计一致性。由此产生的收敛速度接近极小极大最优，仅取决于内在维度，并且反映了流形和目标分布的平滑度。总之，这些结果为流匹配如何适应内在数据几何并规避维数灾难提供了原则性解释。

</details>

---

## 17. Solaris: Building a Multiplayer Video World Model in Minecraft / Solaris：在 Minecraft 中构建多人视频世界模型

**Date**: 2026-02-25 | **arXiv**: [2602.22208v2](http://arxiv.org/abs/2602.22208v2) | **PDF**: [Link](http://arxiv.org/pdf/2602.22208v2)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Existing action-conditioned video generation models (video world models) are limited to single-agent perspectives, failing to capture the multi-agent interactions of real-world environments. We introduce Solaris, a multiplayer video world model that simulates consistent multi-view observations. To enable this, we develop a multiplayer data system designed for robust, continuous, and automated data collection on video games such as Minecraft. Unlike prior platforms built for single-player settings, our system supports coordinated multi-agent interaction and synchronized videos + actions capture. Using this system, we collect 12.64 million multiplayer frames and propose an evaluation framework for multiplayer movement, memory, grounding, building, and view consistency. We train Solaris using a staged pipeline that progressively transitions from single-player to multiplayer modeling, combining bidirectional, causal, and Self Forcing training. In the final stage, we introduce Checkpointed Self Forcing, a memory-efficient Self Forcing variant that enables a longer-horizon teacher. Results show our architecture and training design outperform existing baselines. Through open-sourcing our system and models, we hope to lay the groundwork for a new generation of multi-agent world models.

现有的动作条件视频生成模型（视频世界模型）仅限于单智能体视角，无法捕捉现实世界环境的多智能体交互。我们介绍 Solaris，这是一种模拟一致的多视图观察的多人视频世界模型。为了实现这一目标，我们开发了一个多人数据系统，专为《我的世界》等视频游戏的稳健、连续和自动化数据收集而设计。与之前为单人游戏设置构建的平台不同，我们的系统支持协调的多代理交互和同步视频+动作捕捉。使用该系统，我们收集了 1264 万个多人游戏帧，并提出了多人运动、记忆、接地、构建和视图一致性的评估框架。我们使用分阶段的管道来训练 Solaris，该管道逐渐从单人模式过渡到多人模式，结合了双向、因果和自我强迫训练。在最后阶段，我们引入了检查点自我强迫，这是一种内存高效的自我强迫变体，可以实现更长视野的教师。结果显示我们的架构和培训设计优于现有基线。通过开源我们的系统和模型，我们希望为新一代多智能体世界模型奠定基础。

</details>

---

## 18. SkyReels-V4: Multi-modal Video-Audio Generation, Inpainting and Editing model / SkyReels-V4：多模式视频音频生成、修复和编辑模型

**Date**: 2026-02-25 | **arXiv**: [2602.21818v2](http://arxiv.org/abs/2602.21818v2) | **PDF**: [Link](http://arxiv.org/pdf/2602.21818v2)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

SkyReels V4 is a unified multi modal video foundation model for joint video audio generation, inpainting, and editing. The model adopts a dual stream Multimodal Diffusion Transformer (MMDiT) architecture, where one branch synthesizes video and the other generates temporally aligned audio, while sharing a powerful text encoder based on the Multimodal Large Language Models (MMLM). SkyReels V4 accepts rich multi modal instructions, including text, images, video clips, masks, and audio references. By combining the MMLMs multi modal instruction following capability with in context learning in the video branch MMDiT, the model can inject fine grained visual guidance under complex conditioning, while the audio branch MMDiT simultaneously leverages audio references to guide sound generation. On the video side, we adopt a channel concatenation formulation that unifies a wide range of inpainting style tasks, such as image to video, video extension, and video editing under a single interface, and naturally extends to vision referenced inpainting and editing via multi modal prompts. SkyReels V4 supports up to 1080p resolution, 32 FPS, and 15 second duration, enabling high fidelity, multi shot, cinema level video generation with synchronized audio. To make such high resolution, long-duration generation computationally feasible, we introduce an efficiency strategy: Joint generation of low resolution full sequences and high-resolution keyframes, followed by dedicated super-resolution and frame interpolation models. To our knowledge, SkyReels V4 is the first video foundation model that simultaneously supports multi-modal input, joint video audio generation, and a unified treatment of generation, inpainting, and editing, while maintaining strong efficiency and quality at cinematic resolutions and durations.

SkyReels V4 是一个统一的多模态视频基础模型，用于联合视频音频生成、修复和编辑。该模型采用双流多模态扩散变压器（MMDiT）架构，其中一个分支合成视频，另一个分支生成时间对齐的音频，同时共享基于多模态大语言模型（MMLM）的强大文本编码器。 SkyReels V4 接受丰富的多模式指令，包括文本、图像、视频剪辑、蒙版和音频参考。通过将 MMLM 多模态指令跟随功能与视频分支 MMDiT 中的上下文学习相结合，该模型可以在复杂条件下注入细粒度的视觉指导，而音频分支 MMDiT 同时利用音频参考来指导声音生成。在视频方面，我们采用通道串联公式，将图像到视频、视频扩展和视频编辑等多种修复风格任务统一在一个界面下，并通过多模式提示自然扩展到视觉参考修复和编辑。 SkyReels V4 支持高达 1080p 的分辨率、32 FPS 和 15 秒的持续时间，可生成具有同步音频的高保真、多镜头、影院级视频。为了使这种高分辨率、长时间的生成在计算上可行，我们引入了一种效率策略：联合生成低分辨率全序列和高分辨率关键帧，然后是专用的超分辨率和帧插值模型。据我们所知，SkyReels V4是第一个同时支持多模态输入、联合视频音频生成以及生成、修复和编辑统一处理的视频基础模型，同时在电影分辨率和时长上保持强大的效率和质量。

</details>

---



</details>

<details><summary><b>2026-02-26 (11 papers)</b></summary>

# arXiv Video Papers - 2026-02-26

**Paper Count**: 11

---

## 1. Geometry-as-context: Modulating Explicit 3D in Scene-consistent Video Generation to Geometry Context / 几何作为上下文：将场景一致视频生成中的显式 3D 调制为几何上下文

**Date**: 2026-02-25 | **arXiv**: [2602.21929v1](http://arxiv.org/abs/2602.21929v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21929v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Scene-consistent video generation aims to create videos that explore 3D scenes based on a camera trajectory. Previous methods rely on video generation models with external memory for consistency, or iterative 3D reconstruction and inpainting, which accumulate errors during inference due to incorrect intermediary outputs, non-differentiable processes, and separate models. To overcome these limitations, we introduce ``geometry-as-context". It iteratively completes the following steps using an autoregressive camera-controlled video generation model: (1) estimates the geometry of the current view necessary for 3D reconstruction, and (2) simulates and restores novel view images rendered by the 3D scene. Under this multi-task framework, we develop the camera gated attention module to enhance the model's capability to effectively leverage camera poses. During the training phase, text contexts are utilized to ascertain whether geometric or RGB images should be generated. To ensure that the model can generate RGB-only outputs during inference, the geometry context is randomly dropped from the interleaved text-image-geometry training sequence. The method has been tested on scene video generation with one-direction and forth-and-back trajectories. The results show its superiority over previous approaches in maintaining scene consistency and camera control.

场景一致的视频生成旨在创建基于摄像机轨迹探索 3D 场景的视频。以前的方法依赖具有外部存储器的视频生成模型来实现一致性，或者迭代 3D 重建和修复，这会在推理过程中由于不正确的中间输出、不可微分的过程和单独的模型而累积错误。为了克服这些限制，我们引入了“几何即上下文”。它使用自回归相机控制的视频生成模型迭代地完成以下步骤：（1）估计 3D 重建所需的当前视图的几何形状，以及（2）模拟和恢复 3D 场景渲染的新视图图像。在这个多任务框架下，我们开发了相机门控注意力模块，以增强模型有效利用相机姿势的能力。在训练阶段，利用文本上下文为了确定应该生成几何图像还是 RGB 图像，为了确保模型在推理过程中可以生成仅 RGB 的输出，从交错的文本-图像-几何训练序列中随机删除该方法，并在单向和前后轨迹的场景视频生成上进行了测试，结果表明其在保持场景一致性和摄像机控制方面优于以前的方法。

</details>

---

## 2. Understanding Annotation Error Propagation and Learning an Adaptive Policy for Expert Intervention in Barrett's Video Segmentation / 了解注释错误传播并学习巴雷特视频分割中专家干预的自适应策略

**Date**: 2026-02-25 | **arXiv**: [2602.21855v1](http://arxiv.org/abs/2602.21855v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21855v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Accurate annotation of endoscopic videos is essential yet time-consuming, particularly for challenging datasets such as dysplasia in Barrett's esophagus, where the affected regions are irregular and lack clear boundaries. Semi-automatic tools like Segment Anything Model 2 (SAM2) can ease this process by propagating annotations across frames, but small errors often accumulate and reduce accuracy, requiring expert review and correction. To address this, we systematically study how annotation errors propagate across different prompt types, namely masks, boxes, and points, and propose Learning-to-Re-Prompt (L2RP), a cost-aware framework that learns when and where to seek expert input. By tuning a human-cost parameter, our method balances annotation effort and segmentation accuracy. Experiments on a private Barrett's dysplasia dataset and the public SUN-SEG benchmark demonstrate improved temporal consistency and superior performance over baseline strategies.

内窥镜视频的准确注释至关重要但又耗时，特别是对于具有挑战性的数据集，例如巴雷特食管的发育不良，其中受影响的区域不规则且缺乏清晰的边界。 Segment Anything Model 2 (SAM2) 等半自动工具可以通过跨帧传播注释来简化此过程，但小错误常常会累积并降低准确性，需要专家审查和纠正。为了解决这个问题，我们系统地研究了注释错误如何在不同的提示类型（即掩码、框和点）之间传播，并提出了学习重新提示（L2RP），这是一种成本感知框架，可以学习何时何地寻求专家输入。通过调整人力成本参数，我们的方法平衡了注释工作和分割准确性。在私人 Barrett 发育不良数据集和公共 SUN-SEG 基准上进行的实验表明，与基线策略相比，时间一致性得到了改善，性能也更优越。

</details>

---

## 3. UniVBench: Towards Unified Evaluation for Video Foundation Models / UniVBench：迈向视频基础模型的统一评估

**Date**: 2026-02-25 | **arXiv**: [2602.21835v1](http://arxiv.org/abs/2602.21835v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21835v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Video foundation models aim to integrate video understanding, generation, editing, and instruction following within a single framework, making them a central direction for next-generation multimodal systems. However, existing evaluation benchmarks remain fragmented and limited in scope, as they each target a single task, rely on task-specific metrics, and typically use short or simple video clips. As a result, they do not capture the unified capabilities that these models are designed to deliver. To address this gap, we introduce UniVBench, a benchmark purpose-built for evaluating video foundation models across four core abilities: video understanding, video generation, video editing, and a newly proposed task, video reconstruction, which assesses how faithfully a model can reproduce video content it has encountered. Our benchmark substantially expands the complexity of evaluation by incorporating 200 high-quality, diverse and multi-shot videos, each paired with detailed captions, multi-format editing instructions, and reference images. All videos are human-created and carefully validated, offering richer cinematic information than prior benchmarks. In addition, we develop a unified agentic evaluation system (UniV-Eval) that standardizes prompting, instruction parsing, and scoring across all tasks, enabling fair, scalable, and reproducible comparisons of unified video models. By grounding evaluation in instruction-based multi-shot video tasks, UniVBench provides the first framework for measuring the integrated capabilities that video foundation models aim to achieve. Extensive human annotations ensure our evaluation aligns with human judgment, enabling rigorous assessment and accelerating progress toward robust video intelligence.

视频基础模型旨在将视频理解、生成、编辑和指令跟踪集成在一个框架内，使其成为下一代多模态系统的中心方向。然而，现有的评估基准仍然分散且范围有限，因为它们每个都针对单个任务，依赖于特定于任务的指标，并且通常使用短或简单的视频剪辑。因此，它们无法捕获这些模型旨在提供的统一功能。为了解决这一差距，我们引入了 UniVBench，这是一个专门为评估视频基础模型的四个核心能力而构建的基准：视频理解、视频生成、视频编辑，以及新提出的任务视频重建，该任务评估模型如何忠实地再现其遇到的视频内容。我们的基准测试通过纳入 200 个高质量、多样化的多镜头视频，每个视频都配有详细的标题、多格式编辑说明和参考图像，极大地扩展了评估的复杂性。所有视频均由人工创作并经过仔细验证，提供比之前的基准更丰富的电影信息。此外，我们开发了一个统一的代理评估系统（UniV-Eval），该系统标准化了所有任务的提示、指令解析和评分，从而实现了统一视频模型的公平、可扩展和可重复的比较。通过在基于指令的多镜头视频任务中进行基础评估，UniVBench 提供了第一个用于测量视频基础模型旨在实现的集成功能的框架。广泛的人工注释确保我们的评估与人类判断一致，从而实现严格的评估并加速实现强大的视频智能。

</details>

---

## 4. SkyReels-V4: Multi-modal Video-Audio Generation, Inpainting and Editing model / SkyReels-V4：多模式视频音频生成、修复和编辑模型

**Date**: 2026-02-25 | **arXiv**: [2602.21818v1](http://arxiv.org/abs/2602.21818v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21818v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

SkyReels V4 is a unified multi modal video foundation model for joint video audio generation, inpainting, and editing. The model adopts a dual stream Multimodal Diffusion Transformer (MMDiT) architecture, where one branch synthesizes video and the other generates temporally aligned audio, while sharing a powerful text encoder based on the Multimodal Large Language Models (MMLM). SkyReels V4 accepts rich multi modal instructions, including text, images, video clips, masks, and audio references. By combining the MMLMs multi modal instruction following capability with in context learning in the video branch MMDiT, the model can inject fine grained visual guidance under complex conditioning, while the audio branch MMDiT simultaneously leverages audio references to guide sound generation. On the video side, we adopt a channel concatenation formulation that unifies a wide range of inpainting style tasks, such as image to video, video extension, and video editing under a single interface, and naturally extends to vision referenced inpainting and editing via multi modal prompts. SkyReels V4 supports up to 1080p resolution, 32 FPS, and 15 second duration, enabling high fidelity, multi shot, cinema level video generation with synchronized audio. To make such high resolution, long-duration generation computationally feasible, we introduce an efficiency strategy: Joint generation of low resolution full sequences and high-resolution keyframes, followed by dedicated super-resolution and frame interpolation models. To our knowledge, SkyReels V4 is the first video foundation model that simultaneously supports multi-modal input, joint video audio generation, and a unified treatment of generation, inpainting, and editing, while maintaining strong efficiency and quality at cinematic resolutions and durations.

SkyReels V4 是一个统一的多模态视频基础模型，用于联合视频音频生成、修复和编辑。该模型采用双流多模态扩散变压器（MMDiT）架构，其中一个分支合成视频，另一个分支生成时间对齐的音频，同时共享基于多模态大语言模型（MMLM）的强大文本编码器。 SkyReels V4 接受丰富的多模式指令，包括文本、图像、视频剪辑、蒙版和音频参考。通过将 MMLM 多模态指令跟随功能与视频分支 MMDiT 中的上下文学习相结合，该模型可以在复杂条件下注入细粒度的视觉指导，而音频分支 MMDiT 同时利用音频参考来指导声音生成。在视频方面，我们采用通道串联公式，将图像到视频、视频扩展和视频编辑等多种修复风格任务统一在一个界面下，并通过多模式提示自然扩展到视觉参考修复和编辑。 SkyReels V4 支持高达 1080p 的分辨率、32 FPS 和 15 秒的持续时间，可生成具有同步音频的高保真、多镜头、影院级视频。为了使这种高分辨率、长时间的生成在计算上可行，我们引入了一种效率策略：联合生成低分辨率全序列和高分辨率关键帧，然后是专用的超分辨率和帧插值模型。据我们所知，SkyReels V4是第一个同时支持多模态输入、联合视频音频生成以及生成、修复和编辑统一处理的视频基础模型，同时在电影分辨率和时长上保持强大的效率和质量。

</details>

---

## 5. MultiAnimate: Pose-Guided Image Animation Made Extensible / MultiAnimate：可扩展的姿势引导图像动画

**Date**: 2026-02-25 | **arXiv**: [2602.21581v1](http://arxiv.org/abs/2602.21581v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21581v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Pose-guided human image animation aims to synthesize realistic videos of a reference character driven by a sequence of poses. While diffusion-based methods have achieved remarkable success, most existing approaches are limited to single-character animation. We observe that naively extending these methods to multi-character scenarios often leads to identity confusion and implausible occlusions between characters. To address these challenges, in this paper, we propose an extensible multi-character image animation framework built upon modern Diffusion Transformers (DiTs) for video generation. At its core, our framework introduces two novel components-Identifier Assigner and Identifier Adapter - which collaboratively capture per-person positional cues and inter-person spatial relationships. This mask-driven scheme, along with a scalable training strategy, not only enhances flexibility but also enables generalization to scenarios with more characters than those seen during training. Remarkably, trained on only a two-character dataset, our model generalizes to multi-character animation while maintaining compatibility with single-character cases. Extensive experiments demonstrate that our approach achieves state-of-the-art performance in multi-character image animation, surpassing existing diffusion-based baselines.

姿势引导的人体图像动画旨在合成由一系列姿势驱动的参考角色的逼真视频。虽然基于扩散的方法取得了显着的成功，但大多数现有方法仅限于单角色动画。我们观察到，天真地将这些方法扩展到多角色场景通常会导致角色之间的身份混乱和令人难以置信的遮挡。为了解决这些挑战，在本文中，我们提出了一种基于现代扩散变压器（DiT）的可扩展多字符图像动画框架，用于视频生成。我们的框架的核心引入了两个新颖的组件——标识符分配器和标识符适配器——它们协作捕获每个人的位置线索和人与人之间的空间关系。这种掩码驱动的方案以及可扩展的训练策略不仅增强了灵活性，而且还能够泛化到比训练期间看到的字符更多的场景。值得注意的是，我们的模型仅在两个字符数据集上进行训练，可推广到多字符动画，同时保持与单字符情况的兼容性。大量的实验表明，我们的方法在多字符图像动画中实现了最先进的性能，超越了现有的基于扩散的基线。

</details>

---

## 6. Exploring Vision-Language Models for Open-Vocabulary Zero-Shot Action Segmentation / 探索开放词汇零样本动作分割的视觉语言模型

**Date**: 2026-02-24 | **arXiv**: [2602.21406v1](http://arxiv.org/abs/2602.21406v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21406v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Temporal Action Segmentation (TAS) requires dividing videos into action segments, yet the vast space of activities and alternative breakdowns makes collecting comprehensive datasets infeasible. Existing methods remain limited to closed vocabularies and fixed label sets. In this work, we explore the largely unexplored problem of Open-Vocabulary Zero-Shot Temporal Action Segmentation (OVTAS) by leveraging the strong zero-shot capabilities of Vision-Language Models (VLMs). We introduce a training-free pipeline that follows a segmentation-by-classification design: Frame-Action Embedding Similarity (FAES) matches video frames to candidate action labels, and Similarity-Matrix Temporal Segmentation (SMTS) enforces temporal consistency. Beyond proposing OVTAS, we present a systematic study across 14 diverse VLMs, providing the first broad analysis of their suitability for open-vocabulary action segmentation. Experiments on standard benchmarks show that OVTAS achieves strong results without task-specific supervision, underscoring the potential of VLMs for structured temporal understanding.

时间动作分割（TAS）需要将视频划分为动作片段，但巨大的活动空间和替代细分使得收集全面的数据集变得不可行。现有方法仍然仅限于封闭词汇表和固定标签集。在这项工作中，我们通过利用视觉语言模型（VLM）强大的零样本能力来探索开放词汇零样本时间动作分割（OVTAS）的很大程度上未被探索的问题。我们引入了一种遵循按分类分割设计的免训练管道：帧动作嵌入相似性（FAES）将视频帧与候选动作标签相匹配，相似性矩阵时间分割（SMTS）强制时间一致性。除了提出 OVTAS 之外，我们还对 14 个不同的 VLM 进行了系统研究，首次对其开放词汇动作分割的适用性进行了广泛分析。标准基准测试的实验表明，OVTAS 在没有特定于任务的监督的情况下取得了很好的结果，强调了 VLM 在结构化时间理解方面的潜力。

</details>

---

## 7. Towards Controllable Video Synthesis of Routine and Rare OR Events / 实现常规和罕见手术事件的可控视频合成

**Date**: 2026-02-24 | **arXiv**: [2602.21365v1](http://arxiv.org/abs/2602.21365v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21365v1)

**Categories**: cs.CV, cs.AI, cs.LG, eess.IV

<details><summary><b>Abstract / 摘要</b></summary>

Purpose: Curating large-scale datasets of operating room (OR) workflow, encompassing rare, safety-critical, or atypical events, remains operationally and ethically challenging. This data bottleneck complicates the development of ambient intelligence for detecting, understanding, and mitigating rare or safety-critical events in the OR.   Methods: This work presents an OR video diffusion framework that enables controlled synthesis of rare and safety-critical events. The framework integrates a geometric abstraction module, a conditioning module, and a fine-tuned diffusion model to first transform OR scenes into abstract geometric representations, then condition the synthesis process, and finally generate realistic OR event videos. Using this framework, we also curate a synthetic dataset to train and validate AI models for detecting near-misses of sterile-field violations.   Results: In synthesizing routine OR events, our method outperforms off-the-shelf video diffusion baselines, achieving lower FVD/LPIPS and higher SSIM/PSNR in both in- and out-of-domain datasets. Through qualitative results, we illustrate its ability for controlled video synthesis of counterfactual events. An AI model trained and validated on the generated synthetic data achieved a RECALL of 70.13% in detecting near safety-critical events. Finally, we conduct an ablation study to quantify performance gains from key design choices.   Conclusion: Our solution enables controlled synthesis of routine and rare OR events from abstract geometric representations. Beyond demonstrating its capability to generate rare and safety-critical scenarios, we show its potential to support the development of ambient intelligence models.

目的：整理包含罕见、安全关键或非典型事件的手术室 (OR) 工作流程的大规模数据集，在操作和道德上仍然具有挑战性。这一数据瓶颈使得用于检测、理解和缓解手术室中罕见或安全关键事件的环境智能的开发变得复杂。   方法：这项工作提出了一个 OR 视频扩散框架，可以控制罕见和安全关键事件的合成。该框架集成了几何抽象模块、调节模块和微调扩散模型，首先将 OR 场景转换为抽象几何表示，然后调节合成过程，最后生成逼真的 OR 事件视频。使用这个框架，我们还整理了一个合成数据集来训练和验证人工智能模型，以检测无菌区违规事件的险情。   结果：在合成常规 OR 事件时，我们的方法优于现成的视频扩散基线，在域内和域外数据集中实现了较低的 FVD/LPIPS 和较高的 SSIM/PSNR。通过定性结果，我们说明了其对反事实事件进行受控视频合成的能力。根据生成的合成数据进行训练和验证的 AI 模型在检测临近安全关键事件时实现了 70.13% 的召回率。最后，我们进行了一项消融研究，以量化关键设计选择带来的性能增益。   结论：我们的解决方案能够从抽象几何表示中控制合成常规和罕见的 OR 事件。除了展示其生成罕见和安全关键场景的能力之外，我们还展示了其支持环境智能模型开发的潜力。

</details>

---

## 8. HorizonForge: Driving Scene Editing with Any Trajectories and Any Vehicles / Horizo​​nForge：使用任何轨迹和任何车辆进行驾驶场景编辑

**Date**: 2026-02-24 | **arXiv**: [2602.21333v1](http://arxiv.org/abs/2602.21333v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21333v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Controllable driving scene generation is critical for realistic and scalable autonomous driving simulation, yet existing approaches struggle to jointly achieve photorealism and precise control. We introduce HorizonForge, a unified framework that reconstructs scenes as editable Gaussian Splats and Meshes, enabling fine-grained 3D manipulation and language-driven vehicle insertion. Edits are rendered through a noise-aware video diffusion process that enforces spatial and temporal consistency, producing diverse scene variations in a single feed-forward pass without per-trajectory optimization. To standardize evaluation, we further propose HorizonSuite, a comprehensive benchmark spanning ego- and agent-level editing tasks such as trajectory modifications and object manipulation. Extensive experiments show that Gaussian-Mesh representation delivers substantially higher fidelity than alternative 3D representations, and that temporal priors from video diffusion are essential for coherent synthesis. Combining these findings, HorizonForge establishes a simple yet powerful paradigm for photorealistic, controllable driving simulation, achieving an 83.4% user-preference gain and a 25.19% FID improvement over the second best state-of-the-art method. Project page: https://horizonforge.github.io/ .

可控驾驶场景生成对于真实且可扩展的自动驾驶模拟至关重要，但现有方法很难同时实现照片真实感和精确控制。我们推出了 Horizo​​nForge，这是一个统一的框架，可将场景重建为可编辑的高斯图和网格，从而实现细粒度的 3D 操作和语言驱动的车辆插入。编辑是通过噪声感知视频扩散过程进行渲染的，该过程强制执行空间和时间一致性，在单个前馈通道中产生不同的场景变化，而无需每个轨迹优化。为了标准化评估，我们进一步提出了 Horizo​​nSuite，这是一个涵盖自我和代理级别编辑任务（例如轨迹修改和对象操作）的综合基准。大量实验表明，高斯网格表示比其他 3D 表示具有更高的保真度，并且视频扩散的时间先验对于相干合成至关重要。结合这些发现，Horizo​​nForge 建立了一个简单而强大的范例，用于逼真、可控的驾驶模拟，与第二最佳的最先进方法相比，实现了 83.4% 的用户偏好增益和 25.19% 的 FID 改进。项目页面：https://horizo​​nforge.github.io/。

</details>

---

## 9. Human Video Generation from a Single Image with 3D Pose and View Control / 通过 3D 姿势和视图控制从单个图像生成人体视频

**Date**: 2026-02-24 | **arXiv**: [2602.21188v1](http://arxiv.org/abs/2602.21188v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21188v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recent diffusion methods have made significant progress in generating videos from single images due to their powerful visual generation capabilities. However, challenges persist in image-to-video synthesis, particularly in human video generation, where inferring view-consistent, motion-dependent clothing wrinkles from a single image remains a formidable problem. In this paper, we present Human Video Generation in 4D (HVG), a latent video diffusion model capable of generating high-quality, multi-view, spatiotemporally coherent human videos from a single image with 3D pose and view control. HVG achieves this through three key designs: (i) Articulated Pose Modulation, which captures the anatomical relationships of 3D joints via a novel dual-dimensional bone map and resolves self-occlusions across views by introducing 3D information; (ii) View and Temporal Alignment, which ensures multi-view consistency and alignment between a reference image and pose sequences for frame-to-frame stability; and (iii) Progressive Spatio-Temporal Sampling with temporal alignment to maintain smooth transitions in long multi-view animations. Extensive experiments on image-to-video tasks demonstrate that HVG outperforms existing methods in generating high-quality 4D human videos from diverse human images and pose inputs.

最近的扩散方法由于其强大的视觉生成能力，在从单个图像生成视频方面取得了重大进展。然而，图像到视频的合成仍然存在挑战，特别是在人类视频生成方面，从单个图像推断视图一致、运动相关的衣服皱纹仍然是一个艰巨的问题。在本文中，我们提出了 4D 人类视频生成 (HVG)，这是一种潜在视频扩散模型，能够从具有 3D 姿势和视图控制的单个图像生成高质量、多视图、时空连贯的人类视频。 HVG 通过三个关键设计实现了这一目标：(i) 关节姿势调制，通过新颖的二维骨图捕获 3D 关节的解剖关系，并通过引入 3D 信息解决跨视图的自遮挡问题； (ii) 视图和时间对齐，确保参考图像和姿势序列之间的多视图一致性和对齐，以实现帧到帧的稳定性； (iii) 渐进式时空采样与时间对齐，以保持长多视图动画中的平滑过渡。对图像到视频任务的大量实验表明，HVG 在从不同的人类图像和姿势输入生成高质量 4D 人类视频方面优于现有方法。

</details>

---

## 10. UDVideoQA: A Traffic Video Question Answering Dataset for Multi-Object Spatio-Temporal Reasoning in Urban Dynamics / UDVideoQA：用于城市动力学中多对象时空推理的交通视频问答数据集

**Date**: 2026-02-24 | **arXiv**: [2602.21137v1](http://arxiv.org/abs/2602.21137v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.21137v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Understanding the complex, multi-agent dynamics of urban traffic remains a fundamental challenge for video language models. This paper introduces Urban Dynamics VideoQA, a benchmark dataset that captures the unscripted real-world behavior of dynamic urban scenes. UDVideoQA is curated from 16 hours of traffic footage recorded at multiple city intersections under diverse traffic, weather, and lighting conditions. It employs an event-driven dynamic blur technique to ensure privacy preservation without compromising scene fidelity. Using a unified annotation pipeline, the dataset contains 28K question-answer pairs generated across 8 hours of densely annotated video, averaging one question per second. Its taxonomy follows a hierarchical reasoning level, spanning basic understanding and attribution to event reasoning, reverse reasoning, and counterfactual inference, enabling systematic evaluation of both visual grounding and causal reasoning. Comprehensive experiments benchmark 10 SOTA VideoLMs on UDVideoQA and 8 models on a complementary video question generation benchmark. Results reveal a persistent perception-reasoning gap, showing models that excel in abstract inference often fail with fundamental visual grounding. While models like Gemini Pro achieve the highest zero-shot accuracy, fine-tuning the smaller Qwen2.5-VL 7B model on UDVideoQA bridges this gap, achieving performance comparable to proprietary systems. In VideoQGen, Gemini 2.5 Pro, and Qwen3 Max generate the most relevant and complex questions, though all models exhibit limited linguistic diversity, underscoring the need for human-centric evaluation. The UDVideoQA suite, including the dataset, annotation tools, and benchmarks for both VideoQA and VideoQGen, provides a foundation for advancing robust, privacy-aware, and real-world multimodal reasoning. UDVideoQA is available at https://ud-videoqa.github.io/UD-VideoQA/UD-VideoQA/.

了解城市交通复杂的多智能体动态仍然是视频语言模型的基本挑战。本文介绍了 Urban Dynamics VideoQA，这是一个基准数据集，可捕获动态城市场景的无脚本现实行为。 UDVideoQA 根据在不同交通、天气和照明条件下在多个城市十字路口录制的 16 小时交通录像进行整理。它采用事件驱动的动态模糊技术来确保隐私保护，同时又不影响场景保真度。使用统一的注释管道，该数据集包含在 8 小时的密集注释视频中生成的 28K 问答对，平均每秒一个问题。其分类遵循分层推理水平，涵盖对事件推理、逆向推理和反事实推理的基本理解和归因，从而能够对视觉基础和因果推理进行系统评估。综合实验在 UDVideoQA 上对 10 个 SOTA VideoLM 进行基准测试，在补充视频问题生成基准上对 8 个模型进行基准测试。结果揭示了持续存在的感知推理差距，表明擅长抽象推理的模型往往在基本视觉基础上失败。虽然 Gemini Pro 等模型实现了最高的零射击精度，但在 UDVideoQA 上微调较小的 Qwen2.5-VL 7B 模型弥补了这一差距，实现了与专有系统相当的性能。在 VideoQGen、Gemini 2.5 Pro 和 Qwen3 Max 中，尽管所有模型都表现出有限的语言多样性，但生成了最相关和最复杂的问题，这强调了以人为中心的评估的必要性。 UDVideoQA 套件包括数据集、注释工具以及 VideoQA 和 VideoQGen 的基准，为推进稳健、隐私意识和现实世界的多模态推理奠定了基础。 UDVideoQA 位于 https://ud-videoqa.github.io/UD-VideoQA/UD-VideoQA/。

</details>

---

## 11. RAYNOVA: Scale-Temporal Autoregressive World Modeling in Ray Space / RAYNOVA：射线空间中的尺度时间自回归世界建模

**Date**: 2026-02-24 | **arXiv**: [2602.20685v2](http://arxiv.org/abs/2602.20685v2) | **PDF**: [Link](http://arxiv.org/pdf/2602.20685v2)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

World foundation models aim to simulate the evolution of the real world with physically plausible behavior. Unlike prior methods that handle spatial and temporal correlations separately, we propose RAYNOVA, a geometry-agonistic multiview world model for driving scenarios that employs a dual-causal autoregressive framework. It follows both scale-wise and temporal topological orders in the autoregressive process, and leverages global attention for unified 4D spatio-temporal reasoning. Different from existing works that impose strong 3D geometric priors, RAYNOVA constructs an isotropic spatio-temporal representation across views, frames, and scales based on relative Plücker-ray positional encoding, enabling robust generalization to diverse camera setups and ego motions. We further introduce a recurrent training paradigm to alleviate distribution drift in long-horizon video generation. RAYNOVA achieves state-of-the-art multi-view video generation results on nuScenes, while offering higher throughput and strong controllability under diverse input conditions, generalizing to novel views and camera configurations without explicit 3D scene representation. Our code will be released at https://raynova-ai.github.io/.

世界基础模型旨在通过物理上合理的行为来模拟现实世界的演化。与之前分别处理空间和时间相关性的方法不同，我们提出了 RAYNOVA，这是一种采用双因果自回归框架的驾驶场景的几何对抗多视图世界模型。它在自回归过程中遵循尺度和时间拓扑顺序，并利用全局注意力进行统一的 4D 时空推理。与强加强 3D 几何先验的现有作品不同，RAYNOVA 基于相对 Plücker 射线位置编码构建了跨视图、帧和尺度的各向同性时空表示，从而能够对不同的相机设置和自我运动进行稳健的泛化。我们进一步引入了一种循环训练范例，以减轻长视野视频生成中的分布漂移。 RAYNOVA 在 nuScenes 上实现了最先进的多视图视频生成结果，同时在不同的输入条件下提供更高的吞吐量和强大的可控性，推广到新颖的视图和相机配置，而无需明确的 3D 场景表示。我们的代码将在 https://raynova-ai.github.io/ 发布。

</details>

---



</details>

<details><summary><b>2026-02-25 (12 papers)</b></summary>

# arXiv Video Papers - 2026-02-25

**Paper Count**: 12

---

## 1. VII: Visual Instruction Injection for Jailbreaking Image-to-Video Generation Models / VII：越狱图像到视频生成模型的视觉指令注入

**Date**: 2026-02-24 | **arXiv**: [2602.20999v1](http://arxiv.org/abs/2602.20999v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20999v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Image-to-Video (I2V) generation models, which condition video generation on reference images, have shown emerging visual instruction-following capability, allowing certain visual cues in reference images to act as implicit control signals for video generation. However, this capability also introduces a previously overlooked risk: adversaries may exploit visual instructions to inject malicious intent through the image modality. In this work, we uncover this risk by proposing Visual Instruction Injection (VII), a training-free and transferable jailbreaking framework that intentionally disguises the malicious intent of unsafe text prompts as benign visual instructions in the safe reference image. Specifically, VII coordinates a Malicious Intent Reprogramming module to distill malicious intent from unsafe text prompts while minimizing their static harmfulness, and a Visual Instruction Grounding module to ground the distilled intent onto a safe input image by rendering visual instructions that preserve semantic consistency with the original unsafe text prompt, thereby inducing harmful content during I2V generation. Empirically, our extensive experiments on four state-of-the-art commercial I2V models (Kling-v2.5-turbo, Gemini Veo-3.1, Seedance-1.5-pro, and PixVerse-V5) demonstrate that VII achieves Attack Success Rates of up to 83.5% while reducing Refusal Rates to near zero, significantly outperforming existing baselines.

图像到视频 (I2V) 生成模型在参考图像上调节视频生成，已显示出新兴的视觉指令跟踪功能，允许参考图像中的某些视觉提示充当视频生成的隐式控制信号。然而，这种功能也带来了一个以前被忽视的风险：对手可能会利用视觉指令通过图像模态注入恶意意图。在这项工作中，我们通过提出视觉指令注入（VII）来揭示这一风险，这是一种免训练且可转移的越狱框架，有意将不安全文本提示的恶意意图伪装成安全参考图像中的良性视觉指令。具体来说，VII 协调恶意意图重新编程模块，从不安全文本提示中提取恶意意图，同时最大限度地减少其静态危害性，并协调视觉指令接地模块，通过渲染与原始不安全文本提示保持语义一致性的视觉指令，将提取的意图接地到安全输入图像上，从而在 I2V 生成过程中引入有害内容。根据经验，我们对四种最先进的商业 I2V 模型（Kling-v2.5-turbo、Gemini Veo-3.1、Seedance-1.5-pro 和 PixVerse-V5）进行的广泛实验表明，VII 的攻击成功率高达 83.5%，同时将拒绝率降低到接近零，显着优于现有基线。

</details>

---

## 2. LongVideo-R1: Smart Navigation for Low-cost Long Video Understanding / LongVideo-R1：低成本长视频理解的智能导航

**Date**: 2026-02-24 | **arXiv**: [2602.20913v1](http://arxiv.org/abs/2602.20913v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20913v1)

**Categories**: cs.CV

**Code**: https://github.com/qiujihao19/LongVideo-R1

<details><summary><b>Abstract / 摘要</b></summary>

This paper addresses the critical and underexplored challenge of long video understanding with low computational budgets. We propose LongVideo-R1, an active, reasoning-equipped multimodal large language model (MLLM) agent designed for efficient video context navigation, avoiding the redundancy of exhaustive search. At the core of LongVideo-R1 lies a reasoning module that leverages high-level visual cues to infer the most informative video clip for subsequent processing. During inference, the agent initiates traversal from top-level visual summaries and iteratively refines its focus, immediately halting the exploration process upon acquiring sufficient knowledge to answer the query. To facilitate training, we first extract hierarchical video captions from CGBench, a video corpus with grounding annotations, and guide GPT-5 to generate 33K high-quality chain-of-thought-with-tool trajectories. The LongVideo-R1 agent is fine-tuned upon the Qwen-3-8B model through a two-stage paradigm: supervised fine-tuning (SFT) followed by reinforcement learning (RL), where RL employs a specifically designed reward function to maximize selective and efficient clip navigation. Experiments on multiple long video benchmarks validate the effectiveness of name, which enjoys superior tradeoff between QA accuracy and efficiency. All curated data and source code are provided in the supplementary material and will be made publicly available. Code and data are available at: https://github.com/qiujihao19/LongVideo-R1

本文解决了低计算预算下长视频理解的关键且尚未充分探索的挑战。我们提出了 LongVideo-R1，一种主动的、配备推理的多模态大语言模型（MLLM）代理，设计用于高效的视频上下文导航，避免详尽搜索的冗余。 LongVideo-R1 的核心是一个推理模块，它利用高级视觉线索来推断信息最丰富的视频剪辑，以供后续处理。在推理过程中，代理从顶级视觉摘要开始遍历，并迭代地细化其焦点，在获得足够的知识来回答查询后立即停止探索过程。为了便于训练，我们首先从带有基础注释的视频语料库 CGBench 中提取分层视频字幕，并引导 GPT-5 生成 33K 高质量的思想链工具轨迹。 LongVideo-R1 代理通过两阶段范式在 Qwen-3-8B 模型上进行微调：监督微调 (SFT)，然后是强化学习 (RL)，其中 RL 采用专门设计的奖励函数来最大限度地提高选择性和高效的剪辑导航。在多个长视频基准上进行的实验验证了 name 的有效性，它在 QA 准确性和效率之间享有卓越的权衡。所有精选数据和源代码均在补充材料中提供，并将公开发布。代码和数据可参见：https://github.com/qiujihao19/LongVideo-R1

</details>

---

## 3. PyVision-RL: Forging Open Agentic Vision Models via RL / PyVision-RL：通过 RL 打造开放代理视觉模型

**Date**: 2026-02-24 | **arXiv**: [2602.20739v1](http://arxiv.org/abs/2602.20739v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20739v1)

**Categories**: cs.AI, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Reinforcement learning for agentic multimodal models often suffers from interaction collapse, where models learn to reduce tool usage and multi-turn reasoning, limiting the benefits of agentic behavior. We introduce PyVision-RL, a reinforcement learning framework for open-weight multimodal models that stabilizes training and sustains interaction. Our approach combines an oversampling-filtering-ranking rollout strategy with an accumulative tool reward to prevent collapse and encourage multi-turn tool use. Using a unified training pipeline, we develop PyVision-Image and PyVision-Video for image and video understanding. For video reasoning, PyVision-Video employs on-demand context construction, selectively sampling task-relevant frames during reasoning to significantly reduce visual token usage. Experiments show strong performance and improved efficiency, demonstrating that sustained interaction and on-demand visual processing are critical for scalable multimodal agents.

代理多模态模型的强化学习经常会遇到交互崩溃的问题，其中模型学习减少工具使用和多轮推理，从而限制了代理行为的好处。我们引入了 PyVision-RL，这是一种用于开放权重多模态模型的强化学习框架，可以稳定训练并维持交互。我们的方法将过采样-过滤-排名推出策略与累积工具奖励相结合，以防止崩溃并鼓励多回合工具的使用。使用统一的训练管道，我们开发了 PyVision-Image 和 PyVision-Video 用于图像和视频理解。对于视频推理，PyVision-Video 采用按需上下文构建，在推理过程中选择性地采样与任务相关的帧，以显着减少视觉标记的使用。实验显示出强大的性能和更高的效率，证明持续交互和按需视觉处理对于可扩展的多模式代理至关重要。

</details>

---

## 4. RAYNOVA: 3D-Geometry-Free Auto-Regressive Driving World Modeling with Unified Spatio-Temporal Representation / RAYNOVA：具有统一时空表示的无 3D 几何自动回归驾驶世界建模

**Date**: 2026-02-24 | **arXiv**: [2602.20685v1](http://arxiv.org/abs/2602.20685v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20685v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

World foundation models aim to simulate the evolution of the real world with physically plausible behavior. Unlike prior methods that handle spatial and temporal correlations separately, we propose RAYNOVA, a geometry-free world model that employs a dual-causal autoregressive framework. It follows both scale-wise and temporal topological orders in the autoregressive process, and leverages global attention for unified 4D spatio-temporal reasoning. Different from existing works that impose strong 3D geometric priors, RAYNOVA constructs an isotropic spatio-temporal representation across views, frames, and scales based on relative Plücker-ray positional encoding, enabling robust generalization to diverse camera setups and ego motions. We further introduce a recurrent training paradigm to alleviate distribution drift in long-horizon video generation. RAYNOVA achieves state-of-the-art multi-view video generation results on nuScenes, while offering higher throughput and strong controllability under diverse input conditions, generalizing to novel views and camera configurations without explicit 3D scene representation. Our code will be released at http://yichen928.github.io/raynova.

世界基础模型旨在通过物理上合理的行为来模拟现实世界的演化。与之前分别处理空间和时间相关性的方法不同，我们提出了 RAYNOVA，一种采用双因果自回归框架的无几何世界模型。它在自回归过程中遵循尺度和时间拓扑顺序，并利用全局注意力进行统一的 4D 时空推理。与强加强 3D 几何先验的现有作品不同，RAYNOVA 基于相对 Plücker 射线位置编码构建了跨视图、帧和尺度的各向同性时空表示，从而能够对不同的相机设置和自我运动进行稳健的泛化。我们进一步引入了一种循环训练范例，以减轻长视野视频生成中的分布漂移。 RAYNOVA 在 nuScenes 上实现了最先进的多视图视频生成结果，同时在不同的输入条件下提供更高的吞吐量和强大的可控性，推广到新颖的视图和相机配置，而无需明确的 3D 场景表示。我们的代码将在http://yichen928.github.io/raynova发布。

</details>

---

## 5. GA-Drive: Geometry-Appearance Decoupled Modeling for Free-viewpoint Driving Scene Generatio / GA-Drive：用于自由视点驾驶场景生成的几何外观解耦建模

**Date**: 2026-02-24 | **arXiv**: [2602.20673v1](http://arxiv.org/abs/2602.20673v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20673v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

A free-viewpoint, editable, and high-fidelity driving simulator is crucial for training and evaluating end-to-end autonomous driving systems. In this paper, we present GA-Drive, a novel simulation framework capable of generating camera views along user-specified novel trajectories through Geometry-Appearance Decoupling and Diffusion-Based Generation. Given a set of images captured along a recorded trajectory and the corresponding scene geometry, GA-Drive synthesizes novel pseudo-views using geometry information. These pseudo-views are then transformed into photorealistic views using a trained video diffusion model. In this way, we decouple the geometry and appearance of scenes. An advantage of such decoupling is its support for appearance editing via state-of-the-art video-to-video editing techniques, while preserving the underlying geometry, enabling consistent edits across both original and novel trajectories. Extensive experiments demonstrate that GA-Drive substantially outperforms existing methods in terms of NTA-IoU, NTL-IoU, and FID scores.

自由视角、可编辑且高保真的驾驶模拟器对于训练和评估端到端自动驾驶系统至关重要。在本文中，我们提出了 GA-Drive，这是一种新颖的模拟框架，能够通过几何外观解耦和基于扩散的生成沿着用户指定的新颖轨迹生成相机视图。给定沿着记录轨迹捕获的一组图像和相应的场景几何形状，GA-Drive 使用几何信息合成新颖的伪视图。然后使用经过训练的视频扩散模型将这些伪视图转换为逼真的视图。通过这种方式，我们将场景的几何形状和外观解耦。这种解耦的优点是它支持通过最先进的视频到视频编辑技术进行外观编辑，同时保留底层几何形状，从而能够在原始和新颖的轨迹上进行一致的编辑。大量实验表明，GA-Drive 在 NTA-IoU、NTL-IoU 和 FID 分数方面明显优于现有方法。

</details>

---

## 6. AnimeAgent: Is the Multi-Agent via Image-to-Video models a Good Disney Storytelling Artist? / AnimeAgent：通过图像到视频模型的多代理是优秀的迪士尼讲故事艺术家吗？

**Date**: 2026-02-24 | **arXiv**: [2602.20664v1](http://arxiv.org/abs/2602.20664v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20664v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Custom Storyboard Generation (CSG) aims to produce high-quality, multi-character consistent storytelling. Current approaches based on static diffusion models, whether used in a one-shot manner or within multi-agent frameworks, face three key limitations: (1) Static models lack dynamic expressiveness and often resort to "copy-paste" pattern. (2) One-shot inference cannot iteratively correct missing attributes or poor prompt adherence. (3) Multi-agents rely on non-robust evaluators, ill-suited for assessing stylized, non-realistic animation. To address these, we propose AnimeAgent, the first Image-to-Video (I2V)-based multi-agent framework for CSG. Inspired by Disney's "Combination of Straight Ahead and Pose to Pose" workflow, AnimeAgent leverages I2V's implicit motion prior to enhance consistency and expressiveness, while a mixed subjective-objective reviewer enables reliable iterative refinement. We also collect a human-annotated CSG benchmark with ground-truth. Experiments show AnimeAgent achieves SOTA performance in consistency, prompt fidelity, and stylization.

自定义故事板生成 (CSG) 旨在制作高质量、多角色一致的故事讲述。当前基于静态扩散模型的方法，无论是一次性使用还是在多智能体框架内使用，都面临三个关键限制：（1）静态模型缺乏动态表达能力，并且经常采用“复制粘贴”模式。 (2) 一次性推理无法迭代地纠正缺失的属性或提示依从性差。 (3) 多智能体依赖于非鲁棒评估器，不适合评估风格化、非现实的动画。为了解决这些问题，我们提出了 AnimeAgent，这是第一个基于图像到视频 (I2V) 的 CSG 多代理框架。受迪士尼“直线前进和姿势到姿势的组合”工作流程的启发，AnimeAgent 在增强一致性和表现力之前利用 I2V 的隐式运动，而混合主客观审阅器可实现可靠的迭代细化。我们还收集了具有真实性的人工注释 CSG 基准。实验表明 AnimeAgent 在一致性、提示保真度和风格化方面实现了 SOTA 性能。

</details>

---

## 7. PropFly: Learning to Propagate via On-the-Fly Supervision from Pre-trained Video Diffusion Models / PropFly：通过预先训练的视频扩散模型进行动态监督来学习传播

**Date**: 2026-02-24 | **arXiv**: [2602.20583v1](http://arxiv.org/abs/2602.20583v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20583v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Propagation-based video editing enables precise user control by propagating a single edited frame into following frames while maintaining the original context such as motion and structures. However, training such models requires large-scale, paired (source and edited) video datasets, which are costly and complex to acquire. Hence, we propose the PropFly, a training pipeline for Propagation-based video editing, relying on on-the-Fly supervision from pre-trained video diffusion models (VDMs) instead of requiring off-the-shelf or precomputed paired video editing datasets. Specifically, our PropFly leverages one-step clean latent estimations from intermediate noised latents with varying Classifier-Free Guidance (CFG) scales to synthesize diverse pairs of 'source' (low-CFG) and 'edited' (high-CFG) latents on-the-fly. The source latent serves as structural information of the video, while the edited latent provides the target transformation for learning propagation. Our pipeline enables an additional adapter attached to the pre-trained VDM to learn to propagate edits via Guidance-Modulated Flow Matching (GMFM) loss, which guides the model to replicate the target transformation. Our on-the-fly supervision ensures the model to learn temporally consistent and dynamic transformations. Extensive experiments demonstrate that our PropFly significantly outperforms the state-of-the-art methods on various video editing tasks, producing high-quality editing results.

基于传播的视频编辑通过将单个编辑帧传播到后续帧中来实现精确的用户控制，同时保持原始上下文（例如运动和结构）。然而，训练此类模型需要大规模、配对（源和编辑）视频数据集，获取这些数据集成本高昂且复杂。因此，我们提出了 PropFly，一种基于传播的视频编辑的训练管道，依赖于预先训练的视频扩散模型 (VDM) 的即时监督，而不需要现成的或预先计算的配对视频编辑数据集。具体来说，我们的 PropFly 利用具有不同无分类器指导 (CFG) 尺度的中间噪声潜伏的一步干净潜伏估计来动态合成不同的“源”（低 CFG）和“编辑”（高 CFG）潜伏对。源潜在变量充当视频的结构信息，而编辑后的潜在变量提供学习传播的目标转换。我们的管道支持附加到预先训练的 VDM 的附加适配器，以学习通过引导调制流匹配 (GMFM) 损失来传播编辑，从而引导模型复制目标转换。我们的动态监督确保模型能够学习时间一致的动态转换。大量实验表明，我们的 PropFly 在各种视频编辑任务上显着优于最先进的方法，产生高质量的编辑结果。

</details>

---

## 8. LESA: Learnable Stage-Aware Predictors for Diffusion Model Acceleration / LESA：用于扩散模型加速的可学习阶段感知预测器

**Date**: 2026-02-24 | **arXiv**: [2602.20497v1](http://arxiv.org/abs/2602.20497v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20497v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion models have achieved remarkable success in image and video generation tasks. However, the high computational demands of Diffusion Transformers (DiTs) pose a significant challenge to their practical deployment. While feature caching is a promising acceleration strategy, existing methods based on simple reusing or training-free forecasting struggle to adapt to the complex, stage-dependent dynamics of the diffusion process, often resulting in quality degradation and failing to maintain consistency with the standard denoising process. To address this, we propose a LEarnable Stage-Aware (LESA) predictor framework based on two-stage training. Our approach leverages a Kolmogorov-Arnold Network (KAN) to accurately learn temporal feature mappings from data. We further introduce a multi-stage, multi-expert architecture that assigns specialized predictors to different noise-level stages, enabling more precise and robust feature forecasting. Extensive experiments show our method achieves significant acceleration while maintaining high-fidelity generation. Experiments demonstrate 5.00x acceleration on FLUX.1-dev with minimal quality degradation (1.0% drop), 6.25x speedup on Qwen-Image with a 20.2% quality improvement over the previous SOTA (TaylorSeer), and 5.00x acceleration on HunyuanVideo with a 24.7% PSNR improvement over TaylorSeer. State-of-the-art performance on both text-to-image and text-to-video synthesis validates the effectiveness and generalization capability of our training-based framework across different models. Our code is included in the supplementary materials and will be released on GitHub.

扩散模型在图像和视频生成任务中取得了显着的成功。然而，扩散变压器（DiT）的高计算要求对其实际部署提出了重大挑战。虽然特征缓存是一种很有前途的加速策略，但基于简单重用或免训练预测的现有方法很难适应扩散过程的复杂、阶段相关的动态，通常会导致质量下降，并且无法保持与标准去噪过程的一致性。为了解决这个问题，我们提出了一个基于两阶段训练的 LEarnable Stage-Aware (LESA) 预测器框架。我们的方法利用柯尔莫哥洛夫-阿诺德网络（KAN）来准确地从数据中学习时间特征映射。我们进一步引入了多阶段、多专家架构，将专门的预测器分配给不同的噪声级别阶段，从而实现更精确和稳健的特征预测。大量的实验表明，我们的方法在保持高保真生成的同时实现了显着的加速。实验表明，FLUX.1-dev 上的加速为 5.00 倍，质量下降最小（下降 1.0%）；Qwen-Image 上的加速为 6.25 倍，与之前的 SOTA（TaylorSeer）相比，质量提高了 20.2%；HunyuanVideo 上的加速为 5.00 倍，PSNR 比 TaylorSeer 提高了 24.7%。文本到图像和文本到视频合成的最先进性能验证了我们基于训练的框架在不同模型上的有效性和泛化能力。我们的代码包含在补充材料中，并将在 GitHub 上发布。

</details>

---

## 9. 3DSPA: A 3D Semantic Point Autoencoder for Evaluating Video Realism / 3DSPA：用于评估视频真实感的 3D 语义点自动编码器

**Date**: 2026-02-23 | **arXiv**: [2602.20354v1](http://arxiv.org/abs/2602.20354v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20354v1)

**Categories**: cs.CV

**Code**: https://github.com/TheProParadox/3dspa_code.

<details><summary><b>Abstract / 摘要</b></summary>

AI video generation is evolving rapidly. For video generators to be useful for applications ranging from robotics to film-making, they must consistently produce realistic videos. However, evaluating the realism of generated videos remains a largely manual process -- requiring human annotation or bespoke evaluation datasets which have restricted scope. Here we develop an automated evaluation framework for video realism which captures both semantics and coherent 3D structure and which does not require access to a reference video. Our method, 3DSPA, is a 3D spatiotemporal point autoencoder which integrates 3D point trajectories, depth cues, and DINO semantic features into a unified representation for video evaluation. 3DSPA models how objects move and what is happening in the scene, enabling robust assessments of realism, temporal consistency, and physical plausibility. Experiments show that 3DSPA reliably identifies videos which violate physical laws, is more sensitive to motion artifacts, and aligns more closely with human judgments of video quality and realism across multiple datasets. Our results demonstrate that enriching trajectory-based representations with 3D semantics offers a stronger foundation for benchmarking generative video models, and implicitly captures physical rule violations. The code and pretrained model weights will be available at https://github.com/TheProParadox/3dspa_code.

人工智能视频生成正在迅速发展。为了使视频生成器能够用于从机器人到电影制作等各种应用，它们必须始终如一地生成逼真的视频。然而，评估生成视频的真实感仍然是一个很大程度上手动的过程——需要人工注释或范围有限的定制评估数据集。在这里，我们开发了一个视频真实感自动评估框架，它可以捕获语义和连贯的 3D 结构，并且不需要访问参考视频。我们的方法 3DSPA 是一种 3D 时空点自动编码器，它将 3D 点轨迹、深度线索和 DINO 语义特征集成到视频评估的统一表示中。 3DSPA 对物体如何移动以及场景中发生的情况进行建模，从而能够对真实性、时间一致性和物理合理性进行可靠的评估。实验表明，3DSPA 能够可靠地识别违反物理定律的视频，对运动伪影更敏感，并且更符合人类对多个数据集的视频质量和真实感的判断。我们的结果表明，利用 3D 语义丰富基于轨迹的表示为基准生成视频模型提供了更坚实的基础，并隐式捕获物理规则违规行为。代码和预训练模型权重将在 https://github.com/TheProParadox/3dspa_code 上提供。

</details>

---

## 10. NovaPlan: Zero-Shot Long-Horizon Manipulation via Closed-Loop Video Language Planning / NovaPlan：通过闭环视频语言规划进行零射击长视野操作

**Date**: 2026-02-23 | **arXiv**: [2602.20119v1](http://arxiv.org/abs/2602.20119v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.20119v1)

**Categories**: cs.RO, cs.AI, cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Solving long-horizon tasks requires robots to integrate high-level semantic reasoning with low-level physical interaction. While vision-language models (VLMs) and video generation models can decompose tasks and imagine outcomes, they often lack the physical grounding necessary for real-world execution. We introduce NovaPlan, a hierarchical framework that unifies closed-loop VLM and video planning with geometrically grounded robot execution for zero-shot long-horizon manipulation. At the high level, a VLM planner decomposes tasks into sub-goals and monitors robot execution in a closed loop, enabling the system to recover from single-step failures through autonomous re-planning. To compute low-level robot actions, we extract and utilize both task-relevant object keypoints and human hand poses as kinematic priors from the generated videos, and employ a switching mechanism to choose the better one as a reference for robot actions, maintaining stable execution even under heavy occlusion or depth inaccuracy. We demonstrate the effectiveness of NovaPlan on three long-horizon tasks and the Functional Manipulation Benchmark (FMB). Our results show that NovaPlan can perform complex assembly tasks and exhibit dexterous error recovery behaviors without any prior demonstrations or training. Project page: https://nova-plan.github.io/

解决长期任务需要机器人将高级语义推理与低级物理交互相结合。虽然视觉语言模型 (VLM) 和视频生成模型可以分解任务并想象结果，但它们通常缺乏现实世界执行所需的物理基础。我们引入了 NovaPlan，这是一个分层框架，它将闭环 VLM 和视频规划与几何接地机器人执行相结合，以实现零样本长视野操作。在高层，VLM 规划器将任务分解为子目标，并在闭环中监控机器人的执行情况，使系统能够通过自主重新规划从单步故障中恢复。为了计算低级机器人动作，我们从生成的视频中提取并利用与任务相关的对象关键点和人手姿势作为运动学先验，并采用切换机制来选择更好的动作作为机器人动作的参考，即使在严重遮挡或深度不准确的情况下也能保持稳定的执行。我们展示了 NovaPlan 在三项长期任务和功能操作基准（FMB）上的有效性。我们的结果表明，NovaPlan 可以执行复杂的组装任务并表现出灵巧的错误恢复行为，而无需任何事先演示或培训。项目页面：https://nova-plan.github.io/

</details>

---

## 11. BigMaQ: A Big Macaque Motion and Animation Dataset Bridging Image and 3D Pose Representations / BigMaQ：连接图像和 3D 姿势表示的大猕猴运动和动画数据集

**Date**: 2026-02-23 | **arXiv**: [2602.19874v1](http://arxiv.org/abs/2602.19874v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.19874v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

The recognition of dynamic and social behavior in animals is fundamental for advancing ethology, ecology, medicine and neuroscience. Recent progress in deep learning has enabled automated behavior recognition from video, yet an accurate reconstruction of the three-dimensional (3D) pose and shape has not been integrated into this process. Especially for non-human primates, mesh-based tracking efforts lag behind those for other species, leaving pose descriptions restricted to sparse keypoints that are unable to fully capture the richness of action dynamics. To address this gap, we introduce the $\textbf{Big Ma}$ca$\textbf{Q}$ue 3D Motion and Animation Dataset ($\texttt{BigMaQ}$), a large-scale dataset comprising more than 750 scenes of interacting rhesus macaques with detailed 3D pose descriptions. Extending previous surface-based animal tracking methods, we construct subject-specific textured avatars by adapting a high-quality macaque template mesh to individual monkeys. This allows us to provide pose descriptions that are more accurate than previous state-of-the-art surface-based animal tracking methods. From the original dataset, we derive BigMaQ500, an action recognition benchmark that links surface-based pose vectors to single frames across multiple individual monkeys. By pairing features extracted from established image and video encoders with and without our pose descriptors, we demonstrate substantial improvements in mean average precision (mAP) when pose information is included. With these contributions, $\texttt{BigMaQ}$ establishes the first dataset that both integrates dynamic 3D pose-shape representations into the learning task of animal action recognition and provides a rich resource to advance the study of visual appearance, posture, and social interaction in non-human primates. The code and data are publicly available at https://martinivis.github.io/BigMaQ/ .

对动物动态和社会行为的认识是推进行为学、生态学、医学和神经科学的基础。深度学习的最新进展已经实现了视频中的自动行为识别，但三维 (3D) 姿势和形状的准确重建尚未集成到此过程中。特别是对于非人类灵长类动物，基于网格的跟踪工作落后于其他物种，使得姿势描述仅限于稀疏的关键点，无法完全捕捉动作动态的丰富性。为了解决这一差距，我们引入了 $\textbf{Big Ma}$ca$\textbf{Q}$ue 3D 运动和动画数据集 ($\texttt{BigMaQ}$)，这是一个大型数据集，包含 750 多个恒河猴互动场景，并具有详细的 3D 姿势描述。扩展了之前基于表面的动物跟踪方法，我们通过将高质量的猕猴模板网格应用于个体猴子来构建特定于主题的纹理化身。这使我们能够提供比以前最先进的基于表面的动物跟踪方法更准确的姿势描述。从原始数据集中，我们推导出 BigMaQ500，这是一种动作识别基准，它将基于表面的姿势向量链接到多个个体猴子的单个帧。通过将从已建立的图像和视频编码器中提取的特征与姿势描述符进行配对，我们证明了在包含姿势信息时平均精度（mAP）的显着改进。通过这些贡献，$\texttt{BigMaQ}$ 建立了第一个数据集，该数据集既将动态 3D 姿势形状表示集成到动物动作识别的学习任务中，又为推进非人类灵长类动物的视觉外观、姿势和社交互动的研究提供了丰富的资源。代码和数据可在 https://martinivis.github.io/BigMaQ/ 上公开获取。

</details>

---

## 12. PedaCo-Gen: Scaffolding Pedagogical Agency in Human-AI Collaborative Video Authoring / PedaCo-Gen：人机协作视频创作中的脚手架教学机构

**Date**: 2026-02-23 | **arXiv**: [2602.19623v1](http://arxiv.org/abs/2602.19623v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.19623v1)

**Categories**: cs.CV, cs.AI, cs.HC

<details><summary><b>Abstract / 摘要</b></summary>

While advancements in Text-to-Video (T2V) generative AI offer a promising path toward democratizing content creation, current models are often optimized for visual fidelity rather than instructional efficacy. This study introduces PedaCo-Gen, a pedagogically-informed human-AI collaborative video generating system for authoring instructional videos based on Mayer's Cognitive Theory of Multimedia Learning (CTML). Moving away from traditional "one-shot" generation, PedaCo-Gen introduces an Intermediate Representation (IR) phase, enabling educators to interactively review and refine video blueprints-comprising scripts and visual descriptions-with an AI reviewer. Our study with 23 education experts demonstrates that PedaCo-Gen significantly enhances video quality across various topics and CTML principles compared to baselines. Participants perceived the AI-driven guidance not merely as a set of instructions but as a metacognitive scaffold that augmented their instructional design expertise, reporting high production efficiency (M=4.26) and guide validity (M=4.04). These findings highlight the importance of reclaiming pedagogical agency through principled co-creation, providing a foundation for future AI authoring tools that harmonize generative power with human professional expertise.

虽然文本到视频 (T2V) 生成式人工智能的进步为内容创作民主化提供了一条充满希望的道路，但当前的模型通常针对视觉保真度而不是教学效果进行优化。本研究介绍了 PedaCo-Gen，这是一种基于教学的人类与人工智能协作视频生成系统，用于根据 Mayer 的多媒体学习认知理论 (CTML) 创作教学视频。 PedaCo-Gen 摆脱了传统的“一次性”生成，引入了中间表示 (IR) 阶段，使教育工作者能够与人工智能审阅者交互地审阅和完善视频蓝图（包括脚本和视觉描述）。我们与 23 名教育专家进行的研究表明，与基线相比，PedaCo-Gen 显着提高了各种主题和 CTML 原则的视频质量。参与者认为人工智能驱动的指导不仅是一组指令，而且是一个元认知支架，可以增强他们的教学设计专业知识，报告高生产效率（M = 4.26）和指南有效性（M = 4.04）。这些发现强调了通过有原则的共同创造来恢复教学机构的重要性，为未来将生成能力与人类专业知识相协调的人工智能创作工具奠定了基础。

</details>

---



</details>

<details><summary><b>2026-02-24 (8 papers)</b></summary>

# arXiv Video Papers - 2026-02-24

**Paper Count**: 8

---

## 1. A Two-Stage Detection-Tracking Framework for Stable Apple Quality Inspection in Dense Conveyor-Belt Environments / 密集传送带环境中稳定苹果质量检测的两阶段检测跟踪框架

**Date**: 2026-02-22 | **arXiv**: [2602.19278v1](http://arxiv.org/abs/2602.19278v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.19278v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Industrial fruit inspection systems must operate reliably under dense multi-object interactions and continuous motion, yet most existing works evaluate detection or classification at the image level without ensuring temporal stability in video streams. We present a two-stage detection-tracking framework for stable multi-apple quality inspection in conveyor-belt environments. An orchard-trained YOLOv8 model performs apple localization, followed by ByteTrack multi-object tracking to maintain persistent identities. A ResNet18 defect classifier, fine-tuned on a healthy-defective fruit dataset, is applied to cropped apple regions. Track-level aggregation is introduced to enforce temporal consistency and reduce prediction oscillation across frames. We define video-level industrial metrics such as track-level defect ratio and temporal consistency to evaluate system robustness under realistic processing conditions. Results demonstrate improved stability compared to frame-wise inference, suggesting that integrating tracking is essential for practical automated fruit grading systems.

工业水果检测系统必须在密集的多对象交互和连续运动下可靠运行，但大多数现有工作在图像级别评估检测或分类，而无法确保视频流的时间稳定性。我们提出了一个两阶段检测跟踪框架，用于在传送带环境中进行稳定的多苹果质量检测。 Orchard 训练的 YOLOv8 模型执行苹果本地化，然后进行 ByteTrack 多对象跟踪以维护持久身份。 ResNet18 缺陷分类器在健康缺陷水果数据集上进行了微调，应用于裁剪后的苹果区域。引入轨道级聚合是为了加强时间一致性并减少帧间的预测振荡。我们定义视频级工业指标，例如轨道级缺陷率和时间一致性，以评估系统在实际处理条件下的稳健性。结果表明，与逐帧推理相比，稳定性有所提高，这表明集成跟踪对于实际的自动化水果分级系统至关重要。

</details>

---

## 2. UniE2F: A Unified Diffusion Framework for Event-to-Frame Reconstruction with Video Foundation Models / UniE2F：使用视频基础模型进行事件到帧重建的统一扩散框架

**Date**: 2026-02-22 | **arXiv**: [2602.19202v1](http://arxiv.org/abs/2602.19202v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.19202v1)

**Categories**: cs.CV

**Code**: https://github.com/CS-GangXu/UniE2F.

<details><summary><b>Abstract / 摘要</b></summary>

Event cameras excel at high-speed, low-power, and high-dynamic-range scene perception. However, as they fundamentally record only relative intensity changes rather than absolute intensity, the resulting data streams suffer from a significant loss of spatial information and static texture details. In this paper, we address this limitation by leveraging the generative prior of a pre-trained video diffusion model to reconstruct high-fidelity video frames from sparse event data. Specifically, we first establish a baseline model by directly applying event data as a condition to synthesize videos. Then, based on the physical correlation between the event stream and video frames, we further introduce the event-based inter-frame residual guidance to enhance the accuracy of video frame reconstruction. Furthermore, we extend our method to video frame interpolation and prediction in a zero-shot manner by modulating the reverse diffusion sampling process, thereby creating a unified event-to-frame reconstruction framework. Experimental results on real-world and synthetic datasets demonstrate that our method significantly outperforms previous approaches both quantitatively and qualitatively. We also refer the reviewers to the video demo contained in the supplementary material for video results. The code will be publicly available at https://github.com/CS-GangXu/UniE2F.

事件摄像机擅长高速、低功耗和高动态范围场景感知。然而，由于它们从根本上只记录相对强度变化而不是绝对强度，因此生成的数据流会遭受空间信息和静态纹理细节的显着损失。在本文中，我们通过利用预训练视频扩散模型的生成先验从稀疏事件数据重建高保真视频帧来解决这一限制。具体来说，我们首先通过直接应用事件数据作为合成视频的条件来建立基线模型。然后，基于事件流和视频帧之间的物理相关性，我们进一步引入基于事件的帧间残差引导，以提高视频帧重建的准确性。此外，我们通过调制反向扩散采样过程，以零镜头方式将我们的方法扩展到视频帧插值和预测，从而创建统一的事件到帧重建框架。现实世界和合成数据集的实验结果表明，我们的方法在数量和质量上都显着优于以前的方法。我们还向审稿人推荐视频结果补充材料中包含的视频演示。该代码将在 https://github.com/CS-GangXu/UniE2F 上公开提供。

</details>

---

## 3. JavisDiT++: Unified Modeling and Optimization for Joint Audio-Video Generation / JavisDiT++：联合音视频生成的统一建模和优化

**Date**: 2026-02-22 | **arXiv**: [2602.19163v1](http://arxiv.org/abs/2602.19163v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.19163v1)

**Categories**: cs.CV, cs.MM, cs.SD

**Project**: https://JavisVerse.github.io/JavisDiT2-page.  <details><summary><b>Abstract / 摘要</b></summary>

AIGC has rapidly expanded from text-to-image generation toward high-quality multimodal synthesis across video and audio. Within this context, joint audio-video generation (JAVG) has emerged as a fundamental task that produces synchronized and semantically aligned sound and vision from textual descriptions. However, compared with advanced commercial models such as Veo3, existing open-source methods still suffer from limitations in generation quality, temporal synchrony, and alignment with human preferences. To bridge the gap, this paper presents JavisDiT++, a concise yet powerful framework for unified modeling and optimization of JAVG. First, we introduce a modality-specific mixture-of-experts (MS-MoE) design that enables cross-modal interaction efficacy while enhancing single-modal generation quality. Then, we propose a temporal-aligned RoPE (TA-RoPE) strategy to achieve explicit, frame-level synchronization between audio and video tokens. Besides, we develop an audio-video direct preference optimization (AV-DPO) method to align model outputs with human preference across quality, consistency, and synchrony dimensions. Built upon Wan2.1-1.3B-T2V, our model achieves state-of-the-art performance merely with around 1M public training entries, significantly outperforming prior approaches in both qualitative and quantitative evaluations. Comprehensive ablation studies have been conducted to validate the effectiveness of our proposed modules. All the code, model, and dataset are released at https://JavisVerse.github.io/JavisDiT2-page.

AIGC 已从文本到图像的生成迅速扩展到跨视频和音频的高质量多模态合成。在此背景下，联合音视频生成（JAVG）已成为一项基本任务，它可以根据文本描述生成同步且语义一致的声音和视觉。然而，与 Veo3 等先进商业模型相比，现有的开源方法在生成质量、时间同步性以及与人类偏好的一致性等方面仍然存在局限性。为了弥补这一差距，本文提出了 JavisDiT++，这是一个简洁而强大的框架，用于 JAVG 的统一建模和优化。首先，我们引入了一种特定模态的专家混合（MS-MoE）设计，该设计可以实现跨模态交互功效，同时提高单模态生成质量。然后，我们提出了一种时间对齐 RoPE (TA-RoPE) 策略来实现音频和视频令牌之间的显式帧级同步。此外，我们开发了一种音视频直接偏好优化（AV-DPO）方法，使模型输出在质量、一致性和同步维度上与人类偏好保持一致。我们的模型基于 Wan2.1-1.3B-T2V 构建，仅通过大约 100 万个公共训练条目就实现了最先进的性能，在定性和定量评估方面都显着优于先前的方法。已经进行了全面的消融研究来验证我们提出的模块的有效性。所有代码、模型和数据集均在 https://JavisVerse.github.io/JavisDiT2-page 发布。

</details>

---

## 4. Flash-VAED: Plug-and-Play VAE Decoders for Efficient Video Generation / Flash-VAED：用于高效视频生成的即插即用 VAE 解码器

**Date**: 2026-02-22 | **arXiv**: [2602.19161v1](http://arxiv.org/abs/2602.19161v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.19161v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Latent diffusion models have enabled high-quality video synthesis, yet their inference remains costly and time-consuming. As diffusion transformers become increasingly efficient, the latency bottleneck inevitably shifts to VAE decoders. To reduce their latency while maintaining quality, we propose a universal acceleration framework for VAE decoders that preserves full alignment with the original latent distribution. Specifically, we propose (1) an independence-aware channel pruning method to effectively mitigate severe channel redundancy, and (2) a stage-wise dominant operator optimization strategy to address the high inference cost of the widely used causal 3D convolutions in VAE decoders. Based on these innovations, we construct a Flash-VAED family. Moreover, we design a three-phase dynamic distillation framework that efficiently transfers the capabilities of the original VAE decoder to Flash-VAED. Extensive experiments on Wan and LTX-Video VAE decoders demonstrate that our method outperforms baselines in both quality and speed, achieving approximately a 6$\times$ speedup while maintaining the reconstruction performance up to 96.9%. Notably, Flash-VAED accelerates the end-to-end generation pipeline by up to 36% with negligible quality drops on VBench-2.0.

潜在扩散模型已经实现了高质量的视频合成，但其推理仍然成本高昂且耗时。随着扩散变压器变得越来越高效，延迟瓶颈不可避免地转移到 VAE 解码器。为了在保持质量的同时减少延迟，我们提出了一种适用于 VAE 解码器的通用加速框架，该框架保持与原始潜在分布的完全对齐。具体来说，我们提出（1）一种独立感知的通道修剪方法，以有效减轻严重的通道冗余，以及（2）一种分阶段的主导算子优化策略，以解决 VAE 解码器中广泛使用的因果 3D 卷积的高推理成本问题。基于这些创新，我们构建了 Flash-VAED 系列。此外，我们设计了一个三相动态蒸馏框架，可以有效地将原始 VAE 解码器的功能转移到 Flash-VAED。在 Wan 和 LTX-Video VAE 解码器上进行的大量实验表明，我们的方法在质量和速度方面都优于基线，实现了大约 6 倍的加速，同时保持了高达 96.9% 的重建性能。值得注意的是，Flash-VAED 将端到端生成流程加速高达 36%，而 VBench-2.0 上的质量下降可以忽略不计。

</details>

---

## 5. Ani3DHuman: Photorealistic 3D Human Animation with Self-guided Stochastic Sampling / Ani3DHuman：具有自引导随机采样的真实感 3D 人体动画

**Date**: 2026-02-22 | **arXiv**: [2602.19089v1](http://arxiv.org/abs/2602.19089v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.19089v1)

**Categories**: cs.CV, cs.GR, cs.LG

**Code**: https://github.com/qiisun/ani3dhuman.

<details><summary><b>Abstract / 摘要</b></summary>

Current 3D human animation methods struggle to achieve photorealism: kinematics-based approaches lack non-rigid dynamics (e.g., clothing dynamics), while methods that leverage video diffusion priors can synthesize non-rigid motion but suffer from quality artifacts and identity loss. To overcome these limitations, we present Ani3DHuman, a framework that marries kinematics-based animation with video diffusion priors. We first introduce a layered motion representation that disentangles rigid motion from residual non-rigid motion. Rigid motion is generated by a kinematic method, which then produces a coarse rendering to guide the video diffusion model in generating video sequences that restore the residual non-rigid motion. However, this restoration task, based on diffusion sampling, is highly challenging, as the initial renderings are out-of-distribution, causing standard deterministic ODE samplers to fail. Therefore, we propose a novel self-guided stochastic sampling method, which effectively addresses the out-of-distribution problem by combining stochastic sampling (for photorealistic quality) with self-guidance (for identity fidelity). These restored videos provide high-quality supervision, enabling the optimization of the residual non-rigid motion field. Extensive experiments demonstrate that \MethodName can generate photorealistic 3D human animation, outperforming existing methods. Code is available in https://github.com/qiisun/ani3dhuman.

当前的 3D 人体动画方法很难实现照片级真实感：基于运动学的方法缺乏非刚性动力学（例如服装动力学），而利用视频扩散先验的方法可以合成非刚性运动，但会遭受质量伪影和身份损失。为了克服这些限制，我们提出了 Ani3DHuman，一个将基于运动学的动画与视频扩散先验相结合的框架。我们首先引入分层运动表示，将刚性运动与残余非刚性运动分开。刚性运动是通过运动学方法生成的，然后产生粗略渲染以指导视频扩散模型生成恢复残余非刚性运动的视频序列。然而，这种基于扩散采样的恢复任务非常具有挑战性，因为初始渲染不符合分布，导致标准确定性 ODE 采样器失败。因此，我们提出了一种新颖的自引导随机采样方法，该方法通过将随机采样（用于真实感质量）与自引导（用于身份保真度）相结合，有效地解决了分布外问题。这些恢复的视频提供高质量的监督，从而能够优化残余非刚性运动场。大量实验表明 \MethodName 可以生成逼真的 3D 人体动画，性能优于现有方法。代码可在 https://github.com/qiisun/ani3d human 中找到。

</details>

---

## 6. MoBind: Motion Binding for Fine-Grained IMU-Video Pose Alignment / MoBind：用于细粒度 IMU-视频姿势对齐的运动绑定

**Date**: 2026-02-22 | **arXiv**: [2602.19004v1](http://arxiv.org/abs/2602.19004v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.19004v1)

**Categories**: cs.CV

**Code**: https://github.com/bbvisual/

<details><summary><b>Abstract / 摘要</b></summary>

We aim to learn a joint representation between inertial measurement unit (IMU) signals and 2D pose sequences extracted from video, enabling accurate cross-modal retrieval, temporal synchronization, subject and body-part localization, and action recognition. To this end, we introduce MoBind, a hierarchical contrastive learning framework designed to address three challenges: (1) filtering out irrelevant visual background, (2) modeling structured multi-sensor IMU configurations, and (3) achieving fine-grained, sub-second temporal alignment. To isolate motion-relevant cues, MoBind aligns IMU signals with skeletal motion sequences rather than raw pixels. We further decompose full-body motion into local body-part trajectories, pairing each with its corresponding IMU to enable semantically grounded multi-sensor alignment. To capture detailed temporal correspondence, MoBind employs a hierarchical contrastive strategy that first aligns token-level temporal segments, then fuses local (body-part) alignment with global (body-wide) motion aggregation. Evaluated on mRi, TotalCapture, and EgoHumans, MoBind consistently outperforms strong baselines across all four tasks, demonstrating robust fine-grained temporal alignment while preserving coarse semantic consistency across modalities. Code is available at https://github.com/bbvisual/ MoBind.

我们的目标是学习惯性测量单元 (IMU) 信号和从视频中提取的 2D 姿势序列之间的联合表示，从而实现准确的跨模态检索、时间同步、主体和身体部位定位以及动作识别。为此，我们引入了 MoBind，这是一个分层对比学习框架，旨在解决三个挑战：（1）过滤掉不相关的视觉背景，（2）对结构化多传感器 IMU 配置进行建模，以及（3）实现细粒度、亚秒级时间对齐。为了隔离与运动相关的线索，MoBind 将 IMU 信号与骨骼运动序列而不是原始像素对齐。我们进一步将全身运动分解为局部身体部位轨迹，将每个轨迹与其相应的 IMU 配对，以实现基于语义的多传感器对齐。为了捕获详细的时间对应关系，MoBind 采用分层对比策略，首先对齐令牌级时间段，然后将局部（身体部分）对齐与全局（全身）运动聚合融合。在 mRi、TotalCapture 和 EgoHumans 上进行评估，MoBind 在所有四项任务中始终优于强大的基线，展示了强大的细粒度时间对齐，同时保持了跨模态的粗略语义一致性。代码可在 https://github.com/bbvisual/MoBind 获取。

</details>

---

## 7. Human-to-Robot Interaction: Learning from Video Demonstration for Robot Imitation / 人机交互：从机器人模仿的视频演示中学习

**Date**: 2026-02-22 | **arXiv**: [2602.19184v1](http://arxiv.org/abs/2602.19184v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.19184v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Learning from Demonstration (LfD) offers a promising paradigm for robot skill acquisition. Recent approaches attempt to extract manipulation commands directly from video demonstrations, yet face two critical challenges: (1) general video captioning models prioritize global scene features over task-relevant objects, producing descriptions unsuitable for precise robotic execution, and (2) end-to-end architectures coupling visual understanding with policy learning require extensive paired datasets and struggle to generalize across objects and scenarios. To address these limitations, we propose a novel ``Human-to-Robot'' imitation learning pipeline that enables robots to acquire manipulation skills directly from unstructured video demonstrations, inspired by the human ability to learn by watching and imitating. Our key innovation is a modular framework that decouples the learning process into two distinct stages: (1) Video Understanding, which combines Temporal Shift Modules (TSM) with Vision-Language Models (VLMs) to extract actions and identify interacted objects, and (2) Robot Imitation, which employs TD3-based deep reinforcement learning to execute the demonstrated manipulations. We validated our approach in PyBullet simulation environments with a UR5e manipulator and in a real-world experiment with a UF850 manipulator across four fundamental actions: reach, pick, move, and put. For video understanding, our method achieves 89.97% action classification accuracy and BLEU-4 scores of 0.351 on standard objects and 0.265 on novel objects, representing improvements of 76.4% and 128.4% over the best baseline, respectively. For robot manipulation, our framework achieves an average success rate of 87.5% across all actions, with 100% success on reaching tasks and up to 90% on complex pick-and-place operations. The project website is available at https://thanhnguyencanh.github.io/LfD4hri.

从演示中学习（LfD）为机器人技能获取提供了一个有前途的范例。最近的方法试图直接从视频演示中提取操作命令，但面临两个关键挑战：（1）通用视频字幕模型优先考虑全局场景特征而不是任务相关对象，产生不适合精确机器人执行的描述；（2）将视觉理解与策略学习相结合的端到端架构需要大量配对数据集，并且难以跨对象和场景进行泛化。为了解决这些限制，我们提出了一种新颖的“人到机器人”模仿学习管道，使机器人能够直接从非结构化视频演示中获得操作技能，其灵感来自于人类通过观看和模仿进行学习的能力。我们的关键创新是一个模块化框架，它将学习过程分解为两个不同的阶段：(1) 视频理解，它将时间转换模块 (TSM) 与视觉语言模型 (VLM) 结合起来，以提取动作并识别交互的对象；(2) 机器人模仿，它采用基于 TD3 的深度强化学习来执行演示的操作。我们在 PyBullet 模拟环境中使用 UR5e 操纵器验证了我们的方法，并在使用 UF850 操纵器的现实实验中验证了我们的方法，涉及四种基本动作：伸手、拾取、移动和放置。对于视频理解，我们的方法在标准对象上实现了 89.97% 的动作分类准确率，BLEU-4 分数为 0.351，在新颖对象上的分数为 0.265，分别比最佳基线提高了 76.4% 和 128.4%。对于机器人操作，我们的框架在所有操作中实现了 87.5% 的平均成功率，在完成任务时成功率为 100%，在复杂的拾取和放置操作中成功率高达 90%。该项目网站位于 https://thanhnguyencanh.github.io/LfD4hri。

</details>

---

## 8. Frame2Freq: Spectral Adapters for Fine-Grained Video Understanding / Frame2Freq：用于细粒度视频理解的光谱适配器

**Date**: 2026-02-21 | **arXiv**: [2602.18977v1](http://arxiv.org/abs/2602.18977v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.18977v1)

**Categories**: cs.CV

**Code**: https://github.com/th-nesh/Frame2Freq.

<details><summary><b>Abstract / 摘要</b></summary>

Adapting image-pretrained backbones to video typically relies on time-domain adapters tuned to a single temporal scale. Our experiments show that these modules pick up static image cues and very fast flicker changes, while overlooking medium-speed motion. Capturing dynamics across multiple time-scales is, however, crucial for fine-grained temporal analysis (i.e., opening vs. closing bottle).   To address this, we introduce Frame2Freq -- a family of frequency-aware adapters that perform spectral encoding during image-to-video adaptation of pretrained Vision Foundation Models (VFMs), improving fine-grained action recognition. Frame2Freq uses Fast Fourier Transform (FFT) along time and learns frequency-band specific embeddings that adaptively highlight the most discriminative frequency ranges. Across five fine-grained activity recognition datasets, Frame2Freq outperforms prior PEFT methods and even surpasses fully fine-tuned models on four of them. These results provide encouraging evidence that frequency analysis methods are a powerful tool for modeling temporal dynamics in image-to-video transfer. Code is available at https://github.com/th-nesh/Frame2Freq.

将图像预训练的主干网适应视频通常依赖于调整到单个时间尺度的时域适配器。我们的实验表明，这些模块可以拾取静态图像线索和非常快的闪烁变化，同时忽略中速运动。然而，捕获多个时间尺度的动态对于细粒度时间分析（即打开与关闭瓶子）至关重要。   为了解决这个问题，我们引入了 Frame2Freq——一系列频率感知适配器，可在预训练视觉基础模型 (VFM) 的图像到视频适应过程中执行频谱编码，从而改善细粒度的动作识别。 Frame2Freq 随着时间的推移使用快速傅里叶变换 (FFT) 并学习频段特定的嵌入，自适应地突出最具辨别力的频率范围。在五个细粒度活动识别数据集上，Frame2Freq 的性能优于之前的 PEFT 方法，甚至超过了其中四个数据集的完全微调模型。这些结果提供了令人鼓舞的证据，表明频率分析方法是对图像到视频传输中的时间动态进行建模的强大工具。代码可在 https://github.com/th-nesh/Frame2Freq 获取。

</details>

---



</details>

<details><summary><b>2026-02-23 (2 papers)</b></summary>

# arXiv Video Papers - 2026-02-23

**Paper Count**: 2

---

## 1. Going Down Memory Lane: Scaling Tokens for Video Stream Understanding with Dynamic KV-Cache Memory / 深入内存通道：使用动态 KV 高速缓存扩展用于视频流理解的令牌

**Date**: 2026-02-20 | **arXiv**: [2602.18434v1](http://arxiv.org/abs/2602.18434v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.18434v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Streaming video understanding requires models to robustly encode, store, and retrieve information from a continuous video stream to support accurate video question answering (VQA). Existing state-of-the-art approaches rely on key-value caching to accumulate frame-level information over time, but use a limited number of tokens per frame, leading to the loss of fine-grained visual details. In this work, we propose scaling the token budget to enable more granular spatiotemporal understanding and reasoning. First, we find that current methods are ill-equipped to handle dense streams: their feature encoding causes query-frame similarity scores to increase over time, biasing retrieval toward later frames. To address this, we introduce an adaptive selection strategy that reduces token redundancy while preserving local spatiotemporal information. We further propose a training-free retrieval mixture-of-experts that leverages external models to better identify relevant frames. Our method, MemStream, achieves +8.0% on CG-Bench, +8.5% on LVBench, and +2.4% on VideoMME (Long) over ReKV with Qwen2.5-VL-7B.

流视频理解需要模型能够稳健地编码、存储和检索连续视频流中的信息，以支持准确的视频问答 (VQA)。现有最先进的方法依赖键值缓存来随着时间的推移积累帧级信息，但每帧使用有限数量的令牌，导致细粒度视觉细节的丢失。在这项工作中，我们建议扩大代币预算，以实现更精细的时空理解和推理。首先，我们发现当前的方法不足以处理密集流：它们的特征编码会导致查询帧相似度分数随着时间的推移而增加，从而使检索偏向于后面的帧。为了解决这个问题，我们引入了一种自适应选择策略，可以减少令牌冗余，同时保留本地时空信息。我们进一步提出了一种免训练的检索专家混合体，它利用外部模型来更好地识别相关帧。我们的方法 MemStream 在使用 Qwen2.5-VL-7B 的 ReKV 上，在 CG-Bench 上实现了 +8.0%，在 LVBench 上实现了 +8.5%，在 VideoMME (Long) 上实现了 +2.4%。

</details>

---

## 2. Generated Reality: Human-centric World Simulation using Interactive Video Generation with Hand and Camera Control / 生成现实：使用手动和相机控制的交互式视频生成以人为中心的世界模拟

**Date**: 2026-02-20 | **arXiv**: [2602.18422v1](http://arxiv.org/abs/2602.18422v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.18422v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Extended reality (XR) demands generative models that respond to users' tracked real-world motion, yet current video world models accept only coarse control signals such as text or keyboard input, limiting their utility for embodied interaction. We introduce a human-centric video world model that is conditioned on both tracked head pose and joint-level hand poses. For this purpose, we evaluate existing diffusion transformer conditioning strategies and propose an effective mechanism for 3D head and hand control, enabling dexterous hand--object interactions. We train a bidirectional video diffusion model teacher using this strategy and distill it into a causal, interactive system that generates egocentric virtual environments. We evaluate this generated reality system with human subjects and demonstrate improved task performance as well as a significantly higher level of perceived amount of control over the performed actions compared with relevant baselines.

扩展现实（XR）需要生成模型来响应用户跟踪的现实世界运动，但当前的视频世界模型仅接受粗略的控制信号，例如文本或键盘输入，限制了它们在实体交互中的实用性。我们引入了一种以人为中心的视频世界模型，该模型以跟踪的头部姿势和关节级手部姿势为条件。为此，我们评估了现有的扩散变压器调节策略，并提出了一种有效的 3D 头部和手部控制机制，实现灵巧的手-物体交互。我们使用这种策略训练双向视频传播模型教师，并将其提炼成一个因果交互系统，生成以自我为中心的虚拟环境。我们用人类受试者评估了这个生成的现实系统，并证明了与相关基线相比，任务绩效得到了改善，并且对所执行的操作的感知控制程度显着提高。

</details>

---



</details>

<details><summary><b>2026-02-20 (2 papers)</b></summary>

# arXiv Video Papers - 2026-02-20

**Paper Count**: 2

---

## 1. DDiT: Dynamic Patch Scheduling for Efficient Diffusion Transformers / DDiT：高效扩散变压器的动态补丁调度

**Date**: 2026-02-19 | **arXiv**: [2602.16968v1](http://arxiv.org/abs/2602.16968v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.16968v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Diffusion Transformers (DiTs) have achieved state-of-the-art performance in image and video generation, but their success comes at the cost of heavy computation. This inefficiency is largely due to the fixed tokenization process, which uses constant-sized patches throughout the entire denoising phase, regardless of the content's complexity. We propose dynamic tokenization, an efficient test-time strategy that varies patch sizes based on content complexity and the denoising timestep. Our key insight is that early timesteps only require coarser patches to model global structure, while later iterations demand finer (smaller-sized) patches to refine local details. During inference, our method dynamically reallocates patch sizes across denoising steps for image and video generation and substantially reduces cost while preserving perceptual generation quality. Extensive experiments demonstrate the effectiveness of our approach: it achieves up to $3.52\times$ and $3.2\times$ speedup on FLUX-1.Dev and Wan $2.1$, respectively, without compromising the generation quality and prompt adherence.

扩散变压器 (DiT) 在图像和视频生成方面取得了最先进的性能，但它们的成功是以大量计算为代价的。这种低效率很大程度上是由于固定标记化过程造成的，该过程在整个去噪阶段都使用恒定大小的补丁，无论内容的复杂性如何。我们提出了动态标记化，这是一种有效的测试时间策略，可以根据内容复杂性和去噪时间步长来改变补丁大小。我们的主要见解是，早期的时间步长仅需要较粗糙的补丁来建模全局结构，而后期的迭代则需要更精细（较小尺寸）的补丁来细化局部细节。在推理过程中，我们的方法在图像和视频生成的去噪步骤中动态地重新分配补丁大小，并在保持感知生成质量的同时显着降低成本。大量的实验证明了我们方法的有效性：它在 FLUX-1.Dev 和 Wan 上分别实现了高达 $3.52\times$ 和 $3.2\times$ 的加速，而不会影响生成质量和即时依从性。

</details>

---

## 2. Xray-Visual Models: Scaling Vision models on Industry Scale Data / X 射线视觉模型：根据行业规模数据扩展视觉模型

**Date**: 2026-02-18 | **arXiv**: [2602.16918v1](http://arxiv.org/abs/2602.16918v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.16918v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

We present Xray-Visual, a unified vision model architecture for large-scale image and video understanding trained on industry-scale social media data. Our model leverages over 15 billion curated image-text pairs and 10 billion video-hashtag pairs from Facebook and Instagram, employing robust data curation pipelines that incorporate balancing and noise suppression strategies to maximize semantic diversity while minimizing label noise. We introduce a three-stage training pipeline that combines self-supervised MAE, semi-supervised hashtag classification, and CLIP-style contrastive learning to jointly optimize image and video modalities. Our architecture builds on a Vision Transformer backbone enhanced with efficient token reorganization (EViT) for improved computational efficiency. Extensive experiments demonstrate that Xray-Visual achieves state-of-the-art performance across diverse benchmarks, including ImageNet for image classification, Kinetics and HMDB51 for video understanding, and MSCOCO for cross-modal retrieval. The model exhibits strong robustness to domain shift and adversarial perturbations. We further demonstrate that integrating large language models as text encoders (LLM2CLIP) significantly enhances retrieval performance and generalization capabilities, particularly in real-world environments. Xray-Visual establishes new benchmarks for scalable, multimodal vision models, while maintaining superior accuracy and computational efficiency.

我们推出了 Xray-Visual，这是一种统一的视觉模型架构，用于在行业规模的社交媒体数据上进行训练的大规模图像和视频理解。我们的模型利用来自 Facebook 和 Instagram 的超过 150 亿个精选图像文本对和 100 亿个视频主题标签对，采用强大的数据管理管道，其中结合了平衡和噪声抑制策略，以最大限度地提高语义多样性，同时最大限度地减少标签噪声。我们引入了一个三阶段训练流程，结合了自监督 MAE、半监督标签分类和 CLIP 式对比学习，以联合优化图像和视频模式。我们的架构建立在 Vision Transformer 主干之上，通过高效的令牌重组 (EViT) 进行增强，以提高计算效率。大量实验表明，Xray-Visual 在不同基准测试中实现了最先进的性能，包括用于图像分类的 ImageNet、用于视频理解的 Kinetics 和 HMDB51 以及用于跨模态检索的 MSCOCO。该模型对域转移和对抗性扰动表现出很强的鲁棒性。我们进一步证明，将大型语言模型集成为文本编码器（LLM2CLIP）可以显着增强检索性能和泛化能力，特别是在现实环境中。 Xray-Visual 为可扩展的多模态视觉模型建立了新的基准，同时保持卓越的准确性和计算效率。

</details>

---



</details>

<details><summary><b>2026-02-19 (8 papers)</b></summary>

# arXiv Video Papers - 2026-02-19

**Paper Count**: 8

---

## 1. TeCoNeRV: Leveraging Temporal Coherence for Compressible Neural Representations for Videos / TeCoNeRV：利用时间相干性实现视频的可压缩神经表示

**Date**: 2026-02-18 | **arXiv**: [2602.16711v1](http://arxiv.org/abs/2602.16711v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.16711v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Implicit Neural Representations (INRs) have recently demonstrated impressive performance for video compression. However, since a separate INR must be overfit for each video, scaling to high-resolution videos while maintaining encoding efficiency remains a significant challenge. Hypernetwork-based approaches predict INR weights (hyponetworks) for unseen videos at high speeds, but with low quality, large compressed size, and prohibitive memory needs at higher resolutions. We address these fundamental limitations through three key contributions: (1) an approach that decomposes the weight prediction task spatially and temporally, by breaking short video segments into patch tubelets, to reduce the pretraining memory overhead by 20$\times$; (2) a residual-based storage scheme that captures only differences between consecutive segment representations, significantly reducing bitstream size; and (3) a temporal coherence regularization framework that encourages changes in the weight space to be correlated with video content. Our proposed method, TeCoNeRV, achieves substantial improvements of 2.47dB and 5.35dB PSNR over the baseline at 480p and 720p on UVG, with 36% lower bitrates and 1.5-3$\times$ faster encoding speeds. With our low memory usage, we are the first hypernetwork approach to demonstrate results at 480p, 720p and 1080p on UVG, HEVC and MCL-JCV. Our project page is available at https://namithap10.github.io/teconerv/ .

隐式神经表示（INR）最近在视频压缩方面表现出了令人印象深刻的性能。然而，由于每个视频都必须有一个单独的 INR 过度拟合，因此在保持编码效率的同时扩展到高分辨率视频仍然是一个重大挑战。基于超网络的方法可以高速预测未见过的视频的 INR 权重（次网络），但在较高分辨率下质量较低、压缩大小较大且内存需求过高。我们通过三个关键贡献解决了这些基本限制：（1）一种在空间和时间上分解权重预测任务的方法，通过将短视频片段分解为补丁小管，将预训练内存开销减少 20$\times$； (2)基于残差的存储方案，仅捕获连续段表示之间的差异，显着减少比特流大小； （3）时间相干性正则化框架，鼓励权重空间的变化与视频内容相关。我们提出的方法 TeCoNeRV 在 UVG 上的 480p 和 720p 的基线上实现了 2.47dB 和 5.35dB PSNR 的大幅改进，比特率降低了 36%，编码速度提高了 1.5-3$\times$。由于内存使用率低，我们是第一个在 UVG、HEVC 和 MCL-JCV 上展示 480p、720p 和 1080p 效果的超网络方法。我们的项目页面位于 https://namithap10.github.io/teconerv/ 。

</details>

---

## 2. Let's Split Up: Zero-Shot Classifier Edits for Fine-Grained Video Understanding / 让我们分开：零样本分类器编辑以实现细粒度视频理解

**Date**: 2026-02-18 | **arXiv**: [2602.16545v1](http://arxiv.org/abs/2602.16545v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.16545v1)

**Categories**: cs.CV, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Video recognition models are typically trained on fixed taxonomies which are often too coarse, collapsing distinctions in object, manner or outcome under a single label. As tasks and definitions evolve, such models cannot accommodate emerging distinctions and collecting new annotations and retraining to accommodate such changes is costly. To address these challenges, we introduce category splitting, a new task where an existing classifier is edited to refine a coarse category into finer subcategories, while preserving accuracy elsewhere. We propose a zero-shot editing method that leverages the latent compositional structure of video classifiers to expose fine-grained distinctions without additional data. We further show that low-shot fine-tuning, while simple, is highly effective and benefits from our zero-shot initialization. Experiments on our new video benchmarks for category splitting demonstrate that our method substantially outperforms vision-language baselines, improving accuracy on the newly split categories without sacrificing performance on the rest. Project page: https://kaitingliu.github.io/Category-Splitting/.

视频识别模型通常是在固定分类法上进行训练的，这些分类法通常过于粗糙，在单个标签下消除了对象、方式或结果的区别。随着任务和定义的发展，此类模型无法适应新出现的区别，并且收集新的注释和重新训练以适应此类变化的成本高昂。为了解决这些挑战，我们引入了类别分割，这是一项新任务，其中编辑现有分类器以将粗略类别细化为更精细的子类别，同时保持其他地方的准确性。我们提出了一种零镜头编辑方法，利用视频分类器的潜在组成结构来揭示细粒度的区别，而无需额外的数据。我们进一步表明，低样本微调虽然简单，但却非常有效，并且受益于我们的零样本初始化。我们针对类别分割的新视频基准的实验表明，我们的方法大大优于视觉语言基线，提高了新分割类别的准确性，而不会牺牲其余类别的性能。项目页面：https://kaitingliu.github.io/Category-Splitting/。

</details>

---

## 3. ReMoRa: Multimodal Large Language Model based on Refined Motion Representation for Long-Video Understanding / ReMoRa：基于细化运动表示的多模态大语言模型，用于长视频理解

**Date**: 2026-02-18 | **arXiv**: [2602.16412v1](http://arxiv.org/abs/2602.16412v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.16412v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

While multimodal large language models (MLLMs) have shown remarkable success across a wide range of tasks, long-form video understanding remains a significant challenge. In this study, we focus on video understanding by MLLMs. This task is challenging because processing a full stream of RGB frames is computationally intractable and highly redundant, as self-attention have quadratic complexity with sequence length. In this paper, we propose ReMoRa, a video MLLM that processes videos by operating directly on their compressed representations. A sparse set of RGB keyframes is retained for appearance, while temporal dynamics are encoded as a motion representation, removing the need for sequential RGB frames. These motion representations act as a compact proxy for optical flow, capturing temporal dynamics without full frame decoding. To refine the noise and low fidelity of block-based motions, we introduce a module to denoise and generate a fine-grained motion representation. Furthermore, our model compresses these features in a way that scales linearly with sequence length. We demonstrate the effectiveness of ReMoRa through extensive experiments across a comprehensive suite of long-video understanding benchmarks. ReMoRa outperformed baseline methods on multiple challenging benchmarks, including LongVideoBench, NExT-QA, and MLVU.

虽然多模态大语言模型（MLLM）在广泛的任务中取得了显着的成功，但长格式视频理解仍然是一个重大挑战。在本研究中，我们重点关注 MLLM 的视频理解。这项任务具有挑战性，因为处理完整的 RGB 帧流在计算上非常困难且高度冗余，因为自注意力的复杂度与序列长度呈二次方关系。在本文中，我们提出了 ReMoRa，一种视频 MLLM，它通过直接操作视频的压缩表示来处理视频。保留一组稀疏的 RGB 关键帧用于外观，同时将时间动态编码为运动表示，从而无需连续的 RGB 帧。这些运动表示充当光流的紧凑代理，无需全帧解码即可捕获时间动态。为了改善基于块的运动的噪声和低保真度，我们引入了一个模块来降噪并生成细粒度的运动表示。此外，我们的模型以随序列长度线性缩放的方式压缩这些特征。我们通过一系列全面的长视频理解基准进行大量实验，展示了 ReMoRa 的有效性。 ReMoRa 在多个具有挑战性的基准测试中表现优于基准方法，包括 LongVideoBench、NExT-QA 和 MLVU。

</details>

---

## 4. DataCube: A Video Retrieval Platform via Natural Language Semantic Profiling / DataCube：基于自然语言语义分析的视频检索平台

**Date**: 2026-02-18 | **arXiv**: [2602.16231v1](http://arxiv.org/abs/2602.16231v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.16231v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Large-scale video repositories are increasingly available for modern video understanding and generation tasks. However, transforming raw videos into high-quality, task-specific datasets remains costly and inefficient. We present DataCube, an intelligent platform for automatic video processing, multi-dimensional profiling, and query-driven retrieval. DataCube constructs structured semantic representations of video clips and supports hybrid retrieval with neural re-ranking and deep semantic matching. Through an interactive web interface, users can efficiently construct customized video subsets from massive repositories for training, analysis, and evaluation, and build searchable systems over their own private video collections. The system is publicly accessible at https://datacube.baai.ac.cn/. Demo Video: https://baai-data-cube.ks3-cn-beijing.ksyuncs.com/custom/Adobe%20Express%20-%202%E6%9C%8818%E6%97%A5%20%281%29%281%29%20%281%29.mp4

大型视频存储库越来越多地可用于现代视频理解和生成任务。然而，将原始视频转换为高质量、特定于任务的数据集仍然成本高昂且效率低下。我们推出 DataCube，一个用于自动视频处理、多维分析和查询驱动检索的智能平台。 DataCube 构建视频剪辑的结构化语义表示，并支持神经重新排序和深度语义匹配的混合检索。通过交互式网络界面，用户可以从海量存储库中高效地构建定制视频子集，用于训练、分析和评估，并在自己的私人视频集合上构建可搜索系统。该系统可通过 https://datacube.baai.ac.cn/ 公开访问。演示视频：https://baai-data-cube.ks3-cn-beijing.ksyncs.com/custom/Adobe%20Express%20-%202%E6%9C%8818%E6%97%A5%20%281%29%281%29%20%281%29.mp4

</details>

---

## 5. CHAI: CacHe Attention Inference for text2video / CHAI：text2video 的 CacHe 注意力推理

**Date**: 2026-02-18 | **arXiv**: [2602.16132v1](http://arxiv.org/abs/2602.16132v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.16132v1)

**Categories**: cs.CV, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Text-to-video diffusion models deliver impressive results but remain slow because of the sequential denoising of 3D latents. Existing approaches to speed up inference either require expensive model retraining or use heuristic-based step skipping, which struggles to maintain video quality as the number of denoising steps decreases. Our work, CHAI, aims to use cross-inference caching to reduce latency while maintaining video quality. We introduce Cache Attention as an effective method for attending to shared objects/scenes across cross-inference latents. This selective attention mechanism enables effective reuse of cached latents across semantically related prompts, yielding high cache hit rates. We show that it is possible to generate high-quality videos using Cache Attention with as few as 8 denoising steps. When integrated into the overall system, CHAI is 1.65x - 3.35x faster than baseline OpenSora 1.2 while maintaining video quality.

文本到视频的扩散模型提供了令人印象深刻的结果，但由于 3D 潜伏的顺序去噪，速度仍然很慢。现有的加速推理的方法要么需要昂贵的模型重新训练，要么使用基于启发式的步骤跳跃，随着去噪步骤数量的减少，这很难保持视频质量。我们的工作 CHAI 旨在使用交叉推理缓存来减少延迟，同时保持视频质量。我们引入缓存注意力作为一种有效的方法来关注跨交叉推理潜在的共享对象/场景。这种选择性注意机制可以跨语义相关的提示有效地重用缓存的潜在变量，从而产生高缓存命中率。我们证明，使用 Cache Attention 只需 8 个去噪步骤即可生成高质量视频。当集成到整个系统中时，CHAI 的速度比基准 OpenSora 1.2 快 1.65 倍 - 3.35 倍，同时保持视频质量。

</details>

---

## 6. EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data / EgoScale：利用各种以自我为中心的人类数据来扩展灵巧操作

**Date**: 2026-02-18 | **arXiv**: [2602.16710v1](http://arxiv.org/abs/2602.16710v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.16710v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

Human behavior is among the most scalable sources of data for learning physical intelligence, yet how to effectively leverage it for dexterous manipulation remains unclear. While prior work demonstrates human to robot transfer in constrained settings, it is unclear whether large scale human data can support fine grained, high degree of freedom dexterous manipulation. We present EgoScale, a human to dexterous manipulation transfer framework built on large scale egocentric human data. We train a Vision Language Action (VLA) model on over 20,854 hours of action labeled egocentric human video, more than 20 times larger than prior efforts, and uncover a log linear scaling law between human data scale and validation loss. This validation loss strongly correlates with downstream real robot performance, establishing large scale human data as a predictable supervision source. Beyond scale, we introduce a simple two stage transfer recipe: large scale human pretraining followed by lightweight aligned human robot mid training. This enables strong long horizon dexterous manipulation and one shot task adaptation with minimal robot supervision. Our final policy improves average success rate by 54% over a no pretraining baseline using a 22 DoF dexterous robotic hand, and transfers effectively to robots with lower DoF hands, indicating that large scale human motion provides a reusable, embodiment agnostic motor prior.

人类行为是学习身体智能最可扩展的数据来源之一，但如何有效地利用它进行灵巧的操作仍不清楚。虽然之前的工作证明了在受限环境下人与机器人的转移，但尚不清楚大规模人类数据是否可以支持细粒度、高自由度的灵巧操作。我们推出了 EgoScale，这是一个基于大规模以自我为中心的人类数据构建的人类到灵巧操作传输框架。我们在超过 20,854 小时的以自我为中心的人类视频中训练视觉语言动作 (VLA) 模型，比之前的工作量大 20 倍以上，并揭示了人类数据规模和验证损失之间的对数线性缩放定律。这种验证损失与下游真实机器人性能密切相关，将大规模人类数据建立为可预测的监督源。除了规模之外，我们引入了一个简单的两阶段转移方法：大规模人类预训练，然后是轻量级对齐的人类机器人中期训练。这使得强大的长视野灵巧操作和一次性任务适应与最少的机器人监督成为可能。与使用 22 DoF 灵巧机器人手的无预训练基线相比，我们的最终策略将平均成功率提高了 54%，并且有效地转移到具有较低 DoF 手的机器人，这表明大规模人体运动提供了可重复使用的、与具体实施例无关的电机先验。

</details>

---

## 7. Factored Latent Action World Models / 分解的潜在动作世界模型

**Date**: 2026-02-18 | **arXiv**: [2602.16229v1](http://arxiv.org/abs/2602.16229v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.16229v1)

**Categories**: cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Learning latent actions from action-free video has emerged as a powerful paradigm for scaling up controllable world model learning. Latent actions provide a natural interface for users to iteratively generate and manipulate videos. However, most existing approaches rely on monolithic inverse and forward dynamics models that learn a single latent action to control the entire scene, and therefore struggle in complex environments where multiple entities act simultaneously. This paper introduces Factored Latent Action Model (FLAM), a factored dynamics framework that decomposes the scene into independent factors, each inferring its own latent action and predicting its own next-step factor value. This factorized structure enables more accurate modeling of complex multi-entity dynamics and improves video generation quality in action-free video settings compared to monolithic models. Based on experiments on both simulation and real-world multi-entity datasets, we find that FLAM outperforms prior work in prediction accuracy and representation quality, and facilitates downstream policy learning, demonstrating the benefits of factorized latent action models.

从无动作视频中学习潜在动作已成为扩大可控世界模型学习的强大范例。潜在动作为用户迭代生成和操作视频提供了一个自然的界面。然而，大多数现有方法依赖于整体逆向和正向动力学模型，这些模型学习单个潜在动作来控制整个场景，因此在多个实体同时动作的复杂环境中陷入困境。本文介绍了因子式潜在动作模型（FLAM），这是一种因子式动力学框架，它将场景分解为独立的因素，每个因子都推断自己的潜在动作并预测自己的下一步因子值。与整体模型相比，这种分解结构可以更准确地对复杂的多实体动态进行建模，并提高无动作视频设置中的视频生成质量。基于模拟和现实世界多实体数据集的实验，我们发现 FLAM 在预测精度和表示质量方面优于先前的工作，并促进下游策略学习，展示了因子化潜在动作模型的好处。

</details>

---

## 8. World Action Models are Zero-shot Policies / 世界行动模型是零射击政策

**Date**: 2026-02-17 | **arXiv**: [2602.15922v1](http://arxiv.org/abs/2602.15922v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.15922v1)

**Categories**: cs.RO, cs.CV, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

State-of-the-art Vision-Language-Action (VLA) models excel at semantic generalization but struggle to generalize to unseen physical motions in novel environments. We introduce DreamZero, a World Action Model (WAM) built upon a pretrained video diffusion backbone. Unlike VLAs, WAMs learn physical dynamics by predicting future world states and actions, using video as a dense representation of how the world evolves. By jointly modeling video and action, DreamZero learns diverse skills effectively from heterogeneous robot data without relying on repetitive demonstrations. This results in over 2x improvement in generalization to new tasks and environments compared to state-of-the-art VLAs in real robot experiments. Crucially, through model and system optimizations, we enable a 14B autoregressive video diffusion model to perform real-time closed-loop control at 7Hz. Finally, we demonstrate two forms of cross-embodiment transfer: video-only demonstrations from other robots or humans yield a relative improvement of over 42% on unseen task performance with just 10-20 minutes of data. More surprisingly, DreamZero enables few-shot embodiment adaptation, transferring to a new embodiment with only 30 minutes of play data while retaining zero-shot generalization.

最先进的视觉-语言-动作（VLA）模型擅长语义泛化，但很难泛化到新环境中看不见的物理运动。我们介绍 DreamZero，这是一种基于预训练视频传播主干的世界动作模型 (WAM)。与 VLA 不同，WAM 通过预测未来世界状态和行为来学习物理动力学，并使用视频作为世界如何演变的密集表示。通过对视频和动作进行联合建模，DreamZero 可以从异构机器人数据中有效地学习各种技能，而无需依赖重复演示。与真实机器人实验中最先进的 VLA 相比，这使得对新任务和环境的泛化能力提高了 2 倍以上。至关重要的是，通过模型和系统优化，我们使 14B 自回归视频扩散模型能够以 7Hz 执行实时闭环控制。最后，我们演示了两种形式的跨实体传输：来自其他机器人或人类的纯视频演示仅用 10-20 分钟的数据就可以使看不见的任务性能相对提高 42% 以上。更令人惊讶的是，DreamZero 实现了少样本实施例适应，仅用 30 分钟的播放数据转移到新实施例，同时保留零样本泛化。

</details>

---



</details>

<details><summary><b>2026-02-18 (8 papers)</b></summary>

# arXiv Video Papers - 2026-02-18

**Paper Count**: 8

---

## 1. VideoSketcher: Video Models Prior Enable Versatile Sequential Sketch Generation / VideoSketcher：视频模型优先启用多功能顺序草图生成

**Date**: 2026-02-17 | **arXiv**: [2602.15819v1](http://arxiv.org/abs/2602.15819v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.15819v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Sketching is inherently a sequential process, in which strokes are drawn in a meaningful order to explore and refine ideas. However, most generative models treat sketches as static images, overlooking the temporal structure that underlies creative drawing. We present a data-efficient approach for sequential sketch generation that adapts pretrained text-to-video diffusion models to generate sketching processes. Our key insight is that large language models and video diffusion models offer complementary strengths for this task: LLMs provide semantic planning and stroke ordering, while video diffusion models serve as strong renderers that produce high-quality, temporally coherent visuals. We leverage this by representing sketches as short videos in which strokes are progressively drawn on a blank canvas, guided by text-specified ordering instructions. We introduce a two-stage fine-tuning strategy that decouples the learning of stroke ordering from the learning of sketch appearance. Stroke ordering is learned using synthetic shape compositions with controlled temporal structure, while visual appearance is distilled from as few as seven manually authored sketching processes that capture both global drawing order and the continuous formation of individual strokes. Despite the extremely limited amount of human-drawn sketch data, our method generates high-quality sequential sketches that closely follow text-specified orderings while exhibiting rich visual detail. We further demonstrate the flexibility of our approach through extensions such as brush style conditioning and autoregressive sketch generation, enabling additional controllability and interactive, collaborative drawing.

素描本质上是一个连续的过程，在这个过程中，笔画是按照有意义的顺序绘制的，以探索和完善想法。然而，大多数生成模型将草图视为静态图像，忽略了创意绘画背后的时间结构。我们提出了一种用于顺序草图生成的数据高效方法，该方法采用预先训练的文本到视频扩散模型来生成草图绘制过程。我们的主要见解是，大型语言模型和视频扩散模型为这项任务提供了互补的优势：法学硕士提供语义规划和笔画排序，而视频扩散模型作为强大的渲染器，产生高质量、时间连贯的视觉效果。我们通过将草图表示为短视频来利用这一点，其中在文本指定的排序指令的指导下，在空白画布上逐步绘制笔画。我们引入了一种两阶段微调策略，将笔划顺序的学习与草图外观的学习分离。笔画顺序是使用具有受控时间结构的合成形状组合来学习的，而视觉外观是从多达七个手动创作的草图过程中提取出来的，这些过程捕获了全局绘图顺序和单个笔画的连续形成。尽管人类绘制的草图数据数量极其有限，但我们的方法可以生成高质量的顺序草图，这些草图严格遵循文本指定的顺序，同时展示丰富的视觉细节。我们通过画笔样式调节和自回归草图生成等扩展进一步展示了我们方法的灵活性，从而实现了额外的可控性和交互式协作绘图。

</details>

---

## 2. EventMemAgent: Hierarchical Event-Centric Memory for Online Video Understanding with Adaptive Tool Use / EventMemAgent：以事件为中心的分层内存，通过自适应工具使用进行在线视频理解

**Date**: 2026-02-17 | **arXiv**: [2602.15329v1](http://arxiv.org/abs/2602.15329v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.15329v1)

**Categories**: cs.CV

**Code**: https://github.com/lingcco/EventMemAgent.

<details><summary><b>Abstract / 摘要</b></summary>

Online video understanding requires models to perform continuous perception and long-range reasoning within potentially infinite visual streams. Its fundamental challenge lies in the conflict between the unbounded nature of streaming media input and the limited context window of Multimodal Large Language Models (MLLMs). Current methods primarily rely on passive processing, which often face a trade-off between maintaining long-range context and capturing the fine-grained details necessary for complex tasks. To address this, we introduce EventMemAgent, an active online video agent framework based on a hierarchical memory module. Our framework employs a dual-layer strategy for online videos: short-term memory detects event boundaries and utilizes event-granular reservoir sampling to process streaming video frames within a fixed-length buffer dynamically; long-term memory structuredly archives past observations on an event-by-event basis. Furthermore, we integrate a multi-granular perception toolkit for active, iterative evidence capture and employ Agentic Reinforcement Learning (Agentic RL) to end-to-end internalize reasoning and tool-use strategies into the agent's intrinsic capabilities. Experiments show that EventMemAgent achieves competitive results on online video benchmarks. The code will be released here: https://github.com/lingcco/EventMemAgent.

在线视频理解需要模型在潜在的无限视觉流中执行连续感知和远程推理。其根本挑战在于流媒体输入的无界性质与多模态大语言模型（MLLM）的有限上下文窗口之间的冲突。当前的方法主要依赖于被动处理，这通常面临着维护远程上下文和捕获复杂任务所需的细粒度细节之间的权衡。为了解决这个问题，我们引入了 EventMemAgent，一个基于分层内存模块的主动在线视频代理框架。我们的框架对在线视频采用双层策略：短期记忆检测事件边界，并利用事件粒度存储采样动态处理固定长度缓冲区内的流视频帧；长期记忆以逐个事件为基础结构化地归档过去的观察结果。此外，我们集成了用于主动、迭代证据捕获的多粒度感知工具包，并采用代理强化学习（Agentic RL）将端到端推理和工具使用策略内化为代理的内在能力。实验表明，EventMemAgent 在在线视频基准测试中取得了有竞争力的结果。代码将在这里发布：https://github.com/lingcco/EventMemAgent。

</details>

---

## 3. Consistency-Preserving Diverse Video Generation / 保持一致性的多样化视频生成

**Date**: 2026-02-17 | **arXiv**: [2602.15287v1](http://arxiv.org/abs/2602.15287v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.15287v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Text-to-video generation is expensive, so only a few samples are typically produced per prompt. In this low-sample regime, maximizing the value of each batch requires high cross-video diversity. Recent methods improve diversity for image generation, but for videos they often degrade within-video temporal consistency and require costly backpropagation through a video decoder. We propose a joint-sampling framework for flow-matching video generators that improves batch diversity while preserving temporal consistency. Our approach applies diversity-driven updates and then removes only the components that would decrease a temporal-consistency objective. To avoid image-space gradients, we compute both objectives with lightweight latent-space models, avoiding video decoding and decoder backpropagation. Experiments on a state-of-the-art text-to-video flow-matching model show diversity comparable to strong joint-sampling baselines while substantially improving temporal consistency and color naturalness. Code will be released.

文本到视频的生成成本很高，因此每个提示通常只生成几个样本。在这种低样本情况下，最大化每个批次的价值需要高度的跨视频多样性。最近的方法提高了图像生成的多样性，但对于视频来说，它们通常会降低视频内的时间一致性，并且需要通过视频解码器进行昂贵的反向传播。我们提出了一种用于流匹配视频生成器的联合采样框架，该框架可以提高批量多样性，同时保持时间一致性。我们的方法应用多样性驱动的更新，然后仅删除会降低时间一致性目标的组件。为了避免图像空间梯度，我们使用轻量级潜在空间模型计算两个目标，避免视频解码和解码器反向传播。最先进的文本到视频流匹配模型的实验显示出与强联合采样基线相当的多样性，同时显着提高了时间一致性和颜色自然度。代码将被发布。

</details>

---

## 4. Loss Knows Best: Detecting Annotation Errors in Videos via Loss Trajectories / 损失最了解：通过损失轨迹检测视频中的注释错误

**Date**: 2026-02-16 | **arXiv**: [2602.15154v1](http://arxiv.org/abs/2602.15154v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.15154v1)

**Categories**: cs.CV, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

High-quality video datasets are foundational for training robust models in tasks like action recognition, phase detection, and event segmentation. However, many real-world video datasets suffer from annotation errors such as *mislabeling*, where segments are assigned incorrect class labels, and *disordering*, where the temporal sequence does not follow the correct progression. These errors are particularly harmful in phase-annotated tasks, where temporal consistency is critical. We propose a novel, model-agnostic method for detecting annotation errors by analyzing the Cumulative Sample Loss (CSL)--defined as the average loss a frame incurs when passing through model checkpoints saved across training epochs. This per-frame loss trajectory acts as a dynamic fingerprint of frame-level learnability. Mislabeled or disordered frames tend to show consistently high or irregular loss patterns, as they remain difficult for the model to learn throughout training, while correctly labeled frames typically converge to low loss early. To compute CSL, we train a video segmentation model and store its weights at each epoch. These checkpoints are then used to evaluate the loss of each frame in a test video. Frames with persistently high CSL are flagged as likely candidates for annotation errors, including mislabeling or temporal misalignment. Our method does not require ground truth on annotation errors and is generalizable across datasets. Experiments on EgoPER and Cholec80 demonstrate strong detection performance, effectively identifying subtle inconsistencies such as mislabeling and frame disordering. The proposed approach provides a powerful tool for dataset auditing and improving training reliability in video-based machine learning.

高质量视频数据集是在动作识别、相位检测和事件分割等任务中训练稳健模型的基础。然而，许多现实世界的视频数据集都存在注释错误，例如“错误标记”（片段被分配了不正确的类标签）和“无序”（时间序列不遵循正确的进展）。这些错误在时间一致性至关重要的阶段注释任务中尤其有害。我们提出了一种新颖的、与模型无关的方法，通过分析累积样本损失（CSL）来检测注释错误，CSL 定义为帧通过跨训练时期保存的模型检查点时产生的平均损失。这种每帧丢失轨迹充当帧级可学习性的动态指纹。错误标记或无序的帧往往会显示出持续较高或不规则的损失模式，因为模型在整个训练过程中仍然难以学习它们，而正确标记的帧通常会尽早收敛到低损失。为了计算 CSL，我们训练了一个视频分割模型并存储其在每个时期的权重。然后使用这些检查点来评估测试视频中每帧的丢失。具有持续高 CSL 的帧被标记为可能存在注释错误的候选帧，包括错误标记或时间错位。我们的方法不需要注释错误的基本事实，并且可以跨数据集推广。 EgoPER 和 Cholec80 上的实验展示了强大的检测性能，可以有效识别细微的不一致，例如错误标记和帧混乱。所提出的方法为数据集审核和提高基于视频的机器学习中的训练可靠性提供了强大的工具。

</details>

---

## 5. EditCtrl: Disentangled Local and Global Control for Real-Time Generative Video Editing / EditCtrl：实时生成视频编辑的解开本地和全局控制

**Date**: 2026-02-16 | **arXiv**: [2602.15031v1](http://arxiv.org/abs/2602.15031v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.15031v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

High-fidelity generative video editing has seen significant quality improvements by leveraging pre-trained video foundation models. However, their computational cost is a major bottleneck, as they are often designed to inefficiently process the full video context regardless of the inpainting mask's size, even for sparse, localized edits. In this paper, we introduce EditCtrl, an efficient video inpainting control framework that focuses computation only where it is needed. Our approach features a novel local video context module that operates solely on masked tokens, yielding a computational cost proportional to the edit size. This local-first generation is then guided by a lightweight temporal global context embedder that ensures video-wide context consistency with minimal overhead. Not only is EditCtrl 10 times more compute efficient than state-of-the-art generative editing methods, it even improves editing quality compared to methods designed with full-attention. Finally, we showcase how EditCtrl unlocks new capabilities, including multi-region editing with text prompts and autoregressive content propagation.

通过利用预先训练的视频基础模型，高保真生成视频编辑的质量得到了显着提高。然而，它们的计算成本是一个主要瓶颈，因为它们通常被设计为低效地处理完整的视频上下文，无论修复掩模的大小如何，即使对于稀疏的局部编辑也是如此。在本文中，我们介绍了 EditCtrl，这是一种高效的视频修复控制框架，仅将计算集中在需要的地方。我们的方法采用了一种新颖的本地视频上下文模块，该模块仅对屏蔽标记进行操作，产生与编辑大小成正比的计算成本。然后，这个本地第一代由轻量级全局上下文嵌入器引导，以最小的开销确保视频范围的上下文一致性。 EditCtrl 不仅计算效率比最先进的生成编辑方法高 10 倍，而且与完全注意设计的方法相比，它甚至还提高了编辑质量。最后，我们展示 EditCtrl 如何解锁新功能，包括带有文本提示的多区域编辑和自回归内容传播。

</details>

---

## 6. AnchorWeave: World-Consistent Video Generation with Retrieved Local Spatial Memories / AnchorWeave：通过检索本地空间记忆生成世界一致的视频

**Date**: 2026-02-16 | **arXiv**: [2602.14941v1](http://arxiv.org/abs/2602.14941v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.14941v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Maintaining spatial world consistency over long horizons remains a central challenge for camera-controllable video generation. Existing memory-based approaches often condition generation on globally reconstructed 3D scenes by rendering anchor videos from the reconstructed geometry in the history. However, reconstructing a global 3D scene from multiple views inevitably introduces cross-view misalignment, as pose and depth estimation errors cause the same surfaces to be reconstructed at slightly different 3D locations across views. When fused, these inconsistencies accumulate into noisy geometry that contaminates the conditioning signals and degrades generation quality. We introduce AnchorWeave, a memory-augmented video generation framework that replaces a single misaligned global memory with multiple clean local geometric memories and learns to reconcile their cross-view inconsistencies. To this end, AnchorWeave performs coverage-driven local memory retrieval aligned with the target trajectory and integrates the selected local memories through a multi-anchor weaving controller during generation. Extensive experiments demonstrate that AnchorWeave significantly improves long-term scene consistency while maintaining strong visual quality, with ablation and analysis studies further validating the effectiveness of local geometric conditioning, multi-anchor control, and coverage-driven retrieval.

在长期范围内保持空间世界的一致性仍然是摄像机可控视频生成的核心挑战。现有的基于内存的方法通常通过从历史中的重建几何体渲染锚视频来调节全局重建 3D 场景的生成。然而，从多个视图重建全局 3D 场景不可避免地会引入跨视图未对准，因为姿态和深度估计错误会导致在跨视图的稍微不同的 3D 位置重建相同的表面。当融合时，这些不一致会累积成噪声几何形状，从而污染调节信号并降低生成质量。我们介绍了 AnchorWeave，这是一种内存增强视频生成框架，它用多个干净的局部几何内存替换单个未对齐的全局内存，并学习协调它们的跨视图不一致。为此，AnchorWeave 执行与目标轨迹对齐的覆盖驱动的本地内存检索，并在生成过程中通过多锚编织控制器集成所选的本地内存。大量实验表明，AnchorWeave 显着提高了长期场景一致性，同时保持了强大的视觉质量，消融和分析研究进一步验证了局部几何条件、多锚点控制和覆盖驱动检索的有效性。

</details>

---

## 7. Adapting VACE for Real-Time Autoregressive Video Diffusion / 采用 VACE 进行实时自回归视频扩散

**Date**: 2026-02-16 | **arXiv**: [2602.14381v1](http://arxiv.org/abs/2602.14381v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.14381v1)

**Categories**: cs.CV, cs.AI

**Code**: https://github.com/daydreamlive/scope.

<details><summary><b>Abstract / 摘要</b></summary>

We describe an adaptation of VACE (Video All-in-one Creation and Editing) for real-time autoregressive video generation. VACE provides unified video control (reference guidance, structural conditioning, inpainting, and temporal extension) but assumes bidirectional attention over full sequences, making it incompatible with streaming pipelines that require fixed chunk sizes and causal attention. The key modification moves reference frames from the diffusion latent space into a parallel conditioning pathway, preserving the fixed chunk sizes and KV caching that autoregressive models require. This adaptation reuses existing pretrained VACE weights without additional training. Across 1.3B and 14B model scales, VACE adds 20-30% latency overhead for structural control and inpainting, with negligible VRAM cost relative to the base model. Reference-to-video fidelity is severely degraded compared to batch VACE due to causal attention constraints. A reference implementation is available at https://github.com/daydreamlive/scope.

我们描述了用于实时自回归视频生成的 VACE（视频一体化创建和编辑）的改编。 VACE 提供统一的视频控制（参考指导、结构调节、修复和时间扩展），但假设对整个序列进行双向关注，这使其与需要固定块大小和因果关注的流媒体管道不兼容。关键修改将参考帧从扩散潜在空间移动到并行调节路径，保留自回归模型所需的固定块大小和 KV 缓存。此调整重复使用现有的预训练 VACE 权重，无需额外训练。在 1.3B 和 14B 模型规模中，VACE 为结构控制和修复增加了 20-30% 的延迟开销，而相对于基本模型，VRAM 成本可以忽略不计。由于因果注意力限制，与批量 VACE 相比，视频参考保真度严重下降。参考实现可在 https://github.com/daydreamlive/scope 上找到。

</details>

---

## 8. Dual-Signal Adaptive KV-Cache Optimization for Long-Form Video Understanding in Vision-Language Models / 用于视觉语言模型中长格式视频理解的双信号自适应 KV 缓存优化

**Date**: 2026-02-15 | **arXiv**: [2602.14236v1](http://arxiv.org/abs/2602.14236v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.14236v1)

**Categories**: cs.CV, cs.AI, cs.LG, cs.PF

<details><summary><b>Abstract / 摘要</b></summary>

Vision-Language Models (VLMs) face a critical memory bottleneck when processing long-form video content due to the linear growth of the Key-Value (KV) cache with sequence length. Existing solutions predominantly employ reactive eviction strategies that compute full attention matrices before discarding tokens, resulting in substantial computational waste. We propose Sali-Cache, a novel a priori optimization framework that implements dual-signal adaptive caching through proactive memory management. By integrating a temporal filter based on optical flow analysis for detecting inter-frame redundancy and a spatial filter leveraging saliency detection for identifying visually significant regions, Sali-Cache intelligently manages memory allocation before entering computationally expensive attention operations. Experimental evaluation on the LLaVA 1.6 architecture demonstrates that our method achieves a 2.20x compression ratio in effective memory usage while maintaining 100% accuracy across BLEU, ROUGE-L, and Exact Match metrics. Furthermore, under identical memory budget constraints, Sali-Cache preserves context-rich features over extended temporal durations without degrading model performance, enabling efficient processing of long-form video content on consumer-grade hardware.

由于键值 (KV) 缓存随序列长度线性增长，视觉语言模型 (VLM) 在处理长格式视频内容时面临严重的内存瓶颈。现有的解决方案主要采用反应性驱逐策略，在丢弃令牌之前计算完整的注意力矩阵，从而导致大量的计算浪费。我们提出了 Sali-Cache，一种新颖的先验优化框架，通过主动内存管理实现双信号自适应缓存。通过集成基于光流分析的时间滤波器（用于检测帧间冗余）和空间滤波器（利用显着性检测来识别视觉上重要的区域），Sali-Cache 在进入计算量大的注意力操作之前智能地管理内存分配。对 LLaVA 1.6 架构的实验评估表明，我们的方法在有效内存使用方面实现了 2.20 倍的压缩比，同时在 BLEU、ROUGE-L 和精确匹配指标上保持 100% 的准确性。此外，在相同的内存预算限制下，Sali-Cache 在延长的时间持续时间内保留上下文丰富的特征，而不会降低模型性能，从而能够在消费级硬件上高效处理长格式视频内容。

</details>

---



</details>

<details><summary><b>2026-02-17 (3 papers)</b></summary>

# arXiv Video Papers - 2026-02-17

**Paper Count**: 3

---

## 1. When Test-Time Guidance Is Enough: Fast Image and Video Editing with Diffusion Guidance / 当测试时间指导足够时：使用扩散指导进行快速图像和视频编辑

**Date**: 2026-02-15 | **arXiv**: [2602.14157v1](http://arxiv.org/abs/2602.14157v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.14157v1)

**Categories**: cs.CV, cs.AI, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Text-driven image and video editing can be naturally cast as inpainting problems, where masked regions are reconstructed to remain consistent with both the observed content and the editing prompt. Recent advances in test-time guidance for diffusion and flow models provide a principled framework for this task; however, existing methods rely on costly vector--Jacobian product (VJP) computations to approximate the intractable guidance term, limiting their practical applicability. Building upon the recent work of Moufad et al. (2025), we provide theoretical insights into their VJP-free approximation and substantially extend their empirical evaluation to large-scale image and video editing benchmarks. Our results demonstrate that test-time guidance alone can achieve performance comparable to, and in some cases surpass, training-based methods.

文本驱动的图像和视频编辑可以自然地转化为修复问题，其中重建遮罩区域以与观察到的内容和编辑提示保持一致。扩散和流动模型测试时指导的最新进展为这项任务提供了原则框架；然而，现有方法依赖于昂贵的矢量雅可比积（VJP）计算来近似棘手的指导项，限制了它们的实际适用性。以 Moufad 等人最近的工作为基础。 (2025)，我们提供了对其无 VJP 近似的理论见解，并将其实证评估大幅扩展到大规模图像和视频编辑基准。我们的结果表明，仅测试时指导就可以实现与基于训练的方法相当的性能，在某些情况下甚至超越基于训练的方法。

</details>

---

## 2. Train Short, Inference Long: Training-free Horizon Extension for Autoregressive Video Generation / 训练短，推理长：用于自回归视频生成的免训练地平线扩展

**Date**: 2026-02-15 | **arXiv**: [2602.14027v1](http://arxiv.org/abs/2602.14027v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.14027v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Autoregressive video diffusion models have emerged as a scalable paradigm for long video generation. However, they often suffer from severe extrapolation failure, where rapid error accumulation leads to significant temporal degradation when extending beyond training horizons. We identify that this failure primarily stems from the \textit{spectral bias} of 3D positional embeddings and the lack of \textit{dynamic priors} in noise sampling. To address these issues, we propose \textbf{FLEX} (\textbf{F}requency-aware \textbf{L}ength \textbf{EX}tension), a training-free inference-time framework that bridges the gap between short-term training and long-term inference. FLEX introduces Frequency-aware RoPE Modulation to adaptively interpolate under-trained low-frequency components while extrapolating high-frequency ones to preserve multi-scale temporal discriminability. This is integrated with Antiphase Noise Sampling (ANS) to inject high-frequency dynamic priors and Inference-only Attention Sink to anchor global structure. Extensive evaluations on VBench demonstrate that FLEX significantly outperforms state-of-the-art models at $6\times$ extrapolation (30s duration) and matches the performance of long-video fine-tuned baselines at $12\times$ scale (60s duration). As a plug-and-play augmentation, FLEX seamlessly integrates into existing inference pipelines for horizon extension. It effectively pushes the generation limits of models such as LongLive, supporting consistent and dynamic video synthesis at a 4-minute scale. Project page is available at \href{https://ga-lee.github.io/FLEX_demo}{https://ga-lee.github.io/FLEX}.

自回归视频扩散模型已成为长视频生成的可扩展范例。然而，它们经常遭受严重的外推失败，当超出训练范围时，快速的误差积累会导致显着的时间退化。我们发现这种失败主要源于 3D 位置嵌入的 \textit{频谱偏差} 以及噪声采样中 \textit{动态先验} 的缺乏。为了解决这些问题，我们提出了 \textbf{FLEX} （\textbf{F}requency-aware \textbf{L}ength \textbf{EX}tension），这是一种无需训练的推理时间框架，可以弥补短期训练和长期推理之间的差距。 FLEX 引入了频率感知 RoPE 调制，可自适应地内插未经训练的低频分量，同时外推高频分量以保持多尺度时间辨别能力。它与反相噪声采样 (ANS) 集成，以注入高频动态先验和仅推理注意池来锚定全局结构。对 VBench 的广泛评估表明，FLEX 在 $6\times$ 外推（30 秒持续时间）下显着优于最先进的模型，并与长视频微调基线在 $12\times$ 规模（60 秒持续时间）下的性能相匹配。作为一种即插即用的增强功能，FLEX 可以无缝集成到现有的推理管道中，以实现范围扩展。它有效地突破了 LongLive 等模型的生成限制，支持 4 分钟规模的一致动态视频合成。项目页面位于 \href{https://ga-lee.github.io/FLEX_demo}{https://ga-lee.github.io/FLEX}。

</details>

---

## 3. High-Fidelity Causal Video Diffusion Models for Real-Time Ultra-Low-Bitrate Semantic Communication / 用于实时超低比特率语义通信的高保真因果视频扩散模型

**Date**: 2026-02-14 | **arXiv**: [2602.13837v1](http://arxiv.org/abs/2602.13837v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.13837v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We introduce a video diffusion model for high-fidelity, causal, and real-time video generation under ultra-low-bitrate semantic communication constraints. Our approach utilizes lossy semantic video coding to transmit the semantic scene structure, complemented by a stream of highly compressed, low-resolution frames that provide sufficient texture information to preserve fidelity. Building on these inputs, we introduce a modular video diffusion model that contains Semantic Control, Restoration Adapter, and Temporal Adapter. We further introduce an efficient temporal distillation procedure that enables extension to real-time and causal synthesis, reducing trainable parameters by 300x and training time by 2x, while adhering to communication constraints. Evaluated across diverse datasets, the framework achieves strong perceptual quality, semantic fidelity, and temporal consistency at ultra-low bitrates (< 0.0003 bpp), outperforming classical, neural, and generative baselines in extensive quantitative, qualitative, and subjective evaluations.

我们引入了一种视频扩散模型，用于在超低比特率语义通信约束下生成高保真、因果和实时视频。我们的方法利用有损语义视频编码来传输语义场景结构，并辅以高度压缩的低分辨率帧流，提供足够的纹理信息以保持保真度。基于这些输入，我们引入了一个模块化视频扩散模型，其中包含语义控制、恢复适配器和时间适配器。我们进一步引入了一种有效的时间蒸馏程序，可以扩展到实时和因果合成，将可训练参数减少 300 倍，将训练时间减少 2 倍，同时遵守通信限制。经过不同数据集的评估，该框架在超低比特率 (< 0.0003 bpp) 下实现了强大的感知质量、语义保真度和时间一致性，在广泛的定量、定性和主观评估中优于经典、神经和生成基线。

</details>

---



</details>

<details><summary><b>2026-02-16 (4 papers)</b></summary>

# arXiv Video Papers - 2026-02-16

**Paper Count**: 4

---

## 1. CoPE-VideoLM: Codec Primitives For Efficient Video Language Models / CoPE-VideoLM：用于高效视频语言模型的编解码器原语

**Date**: 2026-02-13 | **arXiv**: [2602.13191v1](http://arxiv.org/abs/2602.13191v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.13191v1)

**Categories**: cs.CV, cs.AI, cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

Video Language Models (VideoLMs) empower AI systems to understand temporal dynamics in videos. To fit to the maximum context window constraint, current methods use keyframe sampling which can miss both macro-level events and micro-level details due to the sparse temporal coverage. Furthermore, processing full images and their tokens for each frame incurs substantial computational overhead. To address these limitations, we propose to leverage video codec primitives (specifically motion vectors and residuals) which natively encode video redundancy and sparsity without requiring expensive full-image encoding for most frames. To this end, we introduce lightweight transformer-based encoders that aggregate codec primitives and align their representations with image encoder embeddings through a pre-training strategy that accelerates convergence during end-to-end fine-tuning. Our approach reduces the time-to-first-token by up to $86\%$ and token usage by up to $93\%$ compared to standard VideoLMs. Moreover, by varying the keyframe and codec primitive densities we are able to maintain or exceed performance on $14$ diverse video understanding benchmarks spanning general question answering, temporal reasoning, long-form understanding, and spatial scene understanding.

视频语言模型 (VideoLM) 使 AI 系统能够理解视频中的时间动态。为了适应最大上下文窗口约束，当前的方法使用关键帧采样，由于稀疏的时间覆盖，可能会错过宏观级别的事件和微观级别的细节。此外，处理完整图像及其每帧的标记会产生大量的计算开销。为了解决这些限制，我们建议利用视频编解码器原语（特别是运动向量和残差），它可以对视频冗余和稀疏性进行本机编码，而无需对大多数帧进行昂贵的全图像编码。为此，我们引入了基于 Transformer 的轻量级编码器，它聚合编解码器原语，并通过预训练策略将其表示与图像编码器嵌入对齐，该预训练策略可在端到端微调过程中加速收敛。与标准 VideoLM 相比，我们的方法将首次使用令牌的时间减少了高达 86\%$，令牌使用量减少了高达 93\%$。此外，通过改变关键帧和编解码器基元密度，我们能够在 14 美元的各种视频理解基准上保持或超过性能，涵盖一般问答、时间推理、长格式理解和空间场景理解。

</details>

---

## 2. FlexAM: Flexible Appearance-Motion Decomposition for Versatile Video Generation Control / FlexAM：灵活的外观运动分解，用于多功能视频生成控制

**Date**: 2026-02-13 | **arXiv**: [2602.13185v1](http://arxiv.org/abs/2602.13185v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.13185v1)

**Categories**: cs.CV, cs.GR

<details><summary><b>Abstract / 摘要</b></summary>

Effective and generalizable control in video generation remains a significant challenge. While many methods rely on ambiguous or task-specific signals, we argue that a fundamental disentanglement of "appearance" and "motion" provides a more robust and scalable pathway. We propose FlexAM, a unified framework built upon a novel 3D control signal. This signal represents video dynamics as a point cloud, introducing three key enhancements: multi-frequency positional encoding to distinguish fine-grained motion, depth-aware positional encoding, and a flexible control signal for balancing precision and generative quality. This representation allows FlexAM to effectively disentangle appearance and motion, enabling a wide range of tasks including I2V/V2V editing, camera control, and spatial object editing. Extensive experiments demonstrate that FlexAM achieves superior performance across all evaluated tasks.

视频生成的有效且通用的控制仍然是一个重大挑战。虽然许多方法依赖于模糊或特定于任务的信号，但我们认为“外观”和“运动”的根本分离提供了一条更稳健和可扩展的途径。我们提出了 FlexAM，这是一个基于新颖的 3D 控制信号构建的统一框架。该信号将视频动态表示为点云，引入了三个关键增强功能：用于区分细粒度运动的多频位置编码、深度感知位置编码以及用于平衡精度和生成质量的灵活控制信号。这种表示方式使 FlexAM 能够有效地理清外观和运动，从而实现广泛的任务，包括 I2V/V2V 编辑、相机控制和空间对象编辑。大量实验表明，FlexAM 在所有评估任务中均实现了卓越的性能。

</details>

---

## 3. Towards Universal Video MLLMs with Attribute-Structured and Quality-Verified Instructions / 迈向具有属性结构和质量验证指令的通用视频 MLLM

**Date**: 2026-02-13 | **arXiv**: [2602.13013v1](http://arxiv.org/abs/2602.13013v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.13013v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Universal video understanding requires modeling fine-grained visual and audio information over time in diverse real-world scenarios. However, the performance of existing models is primarily constrained by video-instruction data that represents complex audiovisual content as single, incomplete descriptions, lacking fine-grained organization and reliable annotation. To address this, we introduce: (i) ASID-1M, an open-source collection of one million structured, fine-grained audiovisual instruction annotations with single- and multi-attribute supervision; (ii) ASID-Verify, a scalable data curation pipeline for annotation, with automatic verification and refinement that enforces semantic and temporal consistency between descriptions and the corresponding audiovisual content; and (iii) ASID-Captioner, a video understanding model trained via Supervised Fine-Tuning (SFT) on the ASID-1M. Experiments across seven benchmarks covering audiovisual captioning, attribute-wise captioning, caption-based QA, and caption-based temporal grounding show that ASID-Captioner improves fine-grained caption quality while reducing hallucinations and improving instruction following. It achieves state-of-the-art performance among open-source models and is competitive with Gemini-3-Pro.

通用视频理解需要在不同的现实场景中随着时间的推移对细粒度的视觉和音频信息进行建模。然而，现有模型的性能主要受到视频教学数据的限制，视频教学数据将复杂的视听内容表示为单一的、不完整的描述，缺乏细粒度的组织和可靠的注释。为了解决这个问题，我们引入：（i）ASID-1M，一个开源集合，包含一百万个结构化、细粒度的视听指令注释，具有单属性和多属性监督； (ii) ASID-Verify，一种可扩展的注释数据管理管道，具有自动验证和细化功能，可强制描述与相应视听内容之间的语义和时间一致性； (iii) ASID-Captioner，一种通过监督微调 (SFT) 在 ASID-1M 上训练的视频理解模型。涵盖视听字幕、按属性字幕、基于字幕的 QA 和基于字幕的时间接地的七个基准的实验表明，ASID-Captioner 提高了细粒度字幕质量，同时减少幻觉并改善指令遵循。它在开源模型中实现了最先进的性能，并且与Gemini-3-Pro具有竞争力。

</details>

---

## 4. Detecting Object Tracking Failure via Sequential Hypothesis Testing / 通过序贯假设检验检测对象跟踪失败

**Date**: 2026-02-13 | **arXiv**: [2602.12983v1](http://arxiv.org/abs/2602.12983v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.12983v1)

**Categories**: cs.CV, cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

Real-time online object tracking in videos constitutes a core task in computer vision, with wide-ranging applications including video surveillance, motion capture, and robotics. Deployed tracking systems usually lack formal safety assurances to convey when tracking is reliable and when it may fail, at best relying on heuristic measures of model confidence to raise alerts. To obtain such assurances we propose interpreting object tracking as a sequential hypothesis test, wherein evidence for or against tracking failures is gradually accumulated over time. Leveraging recent advancements in the field, our sequential test (formalized as an e-process) quickly identifies when tracking failures set in whilst provably containing false alerts at a desired rate, and thus limiting potentially costly re-calibration or intervention steps. The approach is computationally light-weight, requires no extra training or fine-tuning, and is in principle model-agnostic. We propose both supervised and unsupervised variants by leveraging either ground-truth or solely internal tracking information, and demonstrate its effectiveness for two established tracking models across four video benchmarks. As such, sequential testing can offer a statistically grounded and efficient mechanism to incorporate safety assurances into real-time tracking systems.

视频中的实时在线对象跟踪构成了计算机视觉的核心任务，具有广泛的应用，包括视频监控、动作捕捉和机器人技术。已部署的跟踪系统通常缺乏正式的安全保证来传达跟踪何时可靠以及何时可能失败，最多只能依靠模型置信度的启发式措施来发出警报。为了获得这样的保证，我们建议将对象跟踪解释为顺序假设检验，其中支持或反对跟踪失败的证据随着时间的推移逐渐积累。利用该领域的最新进展，我们的顺序测试（形式化为电子流程）可以快速识别何时出现跟踪故障，同时以所需的速度证明包含错误警报，从而限制可能成本高昂的重新校准或干预步骤。该方法计算量轻，不需要额外的训练或微调，并且原则上与模型无关。我们通过利用真实情况或仅内部跟踪信息提出监督和无监督变体，并在四个视频基准中证明其对两个已建立的跟踪模型的有效性。因此，顺序测试可以提供一种基于统计的有效机制，将安全保证纳入实时跟踪系统。

</details>

---



</details>

<details><summary><b>2026-02-14 (16 papers)</b></summary>

# arXiv Video Papers - 2026-02-14

**Paper Count**: 16

---

## 1. MonarchRT: Efficient Attention for Real-Time Video Generation / MonarchRT：实时视频生成的高效关注

**Date**: 2026-02-12 | **arXiv**: [2602.12271v1](http://arxiv.org/abs/2602.12271v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.12271v1)

**Categories**: cs.CV, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Real-time video generation with Diffusion Transformers is bottlenecked by the quadratic cost of 3D self-attention, especially in real-time regimes that are both few-step and autoregressive, where errors compound across time and each denoising step must carry substantially more information. In this setting, we find that prior sparse-attention approximations break down, despite showing strong results for bidirectional, many-step diffusion. Specifically, we observe that video attention is not reliably sparse, but instead combines pronounced periodic structure driven by spatiotemporal position with dynamic, sparse semantic correspondences and dense mixing, exceeding the representational capacity of even oracle top-k attention. Building on this insight, we propose Monarch-RT, a structured attention parameterization for video diffusion models that factorizes attention using Monarch matrices. Through appropriately aligned block structure and our extended tiled Monarch parameterization, we achieve high expressivity while preserving computational efficiency. We further overcome the overhead of parameterization through finetuning, with custom Triton kernels. We first validate the high efficacy of Monarch-RT over existing sparse baselines designed only for bidirectional models. We further observe that Monarch-RT attains up to 95% attention sparsity with no loss in quality when applied to the state-of-the-art model Self-Forcing, making Monarch-RT a pioneering work on highly-capable sparse attention parameterization for real-time video generation. Our optimized implementation outperforms FlashAttention-2, FlashAttention-3, and FlashAttention-4 kernels on Nvidia RTX 5090, H100, and B200 GPUs respectively, providing kernel speedups in the range of 1.4-11.8X. This enables us, for the first time, to achieve true real-time video generation with Self-Forcing at 16 FPS on a single RTX 5090.

使用扩散变压器的实时视频生成受到 3D 自注意力二次成本的瓶颈，特别是在少步和自回归的实时机制中，其中误差随时间复合，每个去噪步骤必须携带更多信息。在这种情况下，我们发现尽管双向、多步扩散显示出很强的结果，但先前的稀疏注意力近似方法还是失效了。具体来说，我们观察到视频注意力并不是可靠的稀疏，而是将由时空位置驱动的显着周期结构与动态、稀疏语义对应和密集混合相结合，甚至超过了 oracle top-k 注意力的表示能力。基于这一见解，我们提出了 Monarch-RT，这是一种用于视频扩散模型的结构化注意力参数化，它使用 Monarch 矩阵分解注意力。通过适当对齐的块结构和扩展的平铺 Monarch 参数化，我们在保持计算效率的同时实现了高表达力。我们通过使用自定义 Triton 内核进行微调，进一步克服了参数化的开销。我们首先验证 Monarch-RT 相对于仅为双向模型设计的现有稀疏基线的高效性。我们进一步观察到，当应用于最先进的模型 Self-Forcing 时，Monarch-RT 获得了高达 95% 的注意力稀疏度，且质量没有损失，这使得 Monarch-RT 成为实时视频生成的高性能稀疏注意力参数化的开创性工作。我们的优化实现在 Nvidia RTX 5090、H100 和 B200 GPU 上的性能分别优于 FlashAttention-2、FlashAttention-3 和 FlashAttention-4 内核，提供 1.4-11.8 倍的内核加速。这使我们第一次能够在单个 RTX 5090 上以 16 FPS 的速度实现真正的实时视频生成。

</details>

---

## 2. DreamID-Omni: Unified Framework for Controllable Human-Centric Audio-Video Generation / DreamID-Omni：可控的以人为本的音频视频生成的统一框架

**Date**: 2026-02-12 | **arXiv**: [2602.12160v1](http://arxiv.org/abs/2602.12160v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.12160v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recent advancements in foundation models have revolutionized joint audio-video generation. However, existing approaches typically treat human-centric tasks including reference-based audio-video generation (R2AV), video editing (RV2AV) and audio-driven video animation (RA2V) as isolated objectives. Furthermore, achieving precise, disentangled control over multiple character identities and voice timbres within a single framework remains an open challenge. In this paper, we propose DreamID-Omni, a unified framework for controllable human-centric audio-video generation. Specifically, we design a Symmetric Conditional Diffusion Transformer that integrates heterogeneous conditioning signals via a symmetric conditional injection scheme. To resolve the pervasive identity-timbre binding failures and speaker confusion in multi-person scenarios, we introduce a Dual-Level Disentanglement strategy: Synchronized RoPE at the signal level to ensure rigid attention-space binding, and Structured Captions at the semantic level to establish explicit attribute-subject mappings. Furthermore, we devise a Multi-Task Progressive Training scheme that leverages weakly-constrained generative priors to regularize strongly-constrained tasks, preventing overfitting and harmonizing disparate objectives. Extensive experiments demonstrate that DreamID-Omni achieves comprehensive state-of-the-art performance across video, audio, and audio-visual consistency, even outperforming leading proprietary commercial models. We will release our code to bridge the gap between academic research and commercial-grade applications.

基础模型的最新进展彻底改变了联合音频视频生成。然而，现有方法通常将以人为中心的任务视为孤立的目标，包括基于参考的音频视频生成（R2AV）、视频编辑（RV2AV）和音频驱动视频动画（RA2V）。此外，在单一框架内实现对多个角色身份和音色的精确、分离的控制仍然是一个开放的挑战。在本文中，我们提出了 DreamID-Omni，这是一个用于可控的以人为中心的音频视频生成的统一框架。具体来说，我们设计了一个对称条件扩散变压器，它通过对称条件注入方案集成异构调节信号。为了解决多人场景中普遍存在的身份-音色绑定失败和说话者混乱的问题，我们引入了一种双层解缠策略：信号级别的同步 RoPE 以确保严格的注意力空间绑定，语义级别的结构化字幕以建立明确的属性-主题映射。此外，我们设计了一种多任务渐进训练方案，利用弱约束的生成先验来规范强约束的任务，防止过度拟合并协调不同的目标。大量实验表明，DreamID-Omni 在视频、音频和视听一致性方面实现了全面的最先进性能，甚至超越了领先的专有商业模型。我们将发布我们的代码，以弥合学术研究和商业级应用程序之间的差距。

</details>

---

## 3. FAIL: Flow Matching Adversarial Imitation Learning for Image Generation / 失败：用于图像生成的流匹配对抗性模仿学习

**Date**: 2026-02-12 | **arXiv**: [2602.12155v1](http://arxiv.org/abs/2602.12155v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.12155v1)

**Categories**: cs.CV

**Code**: https://github.com/HansPolo113/FAIL.

<details><summary><b>Abstract / 摘要</b></summary>

Post-training of flow matching models-aligning the output distribution with a high-quality target-is mathematically equivalent to imitation learning. While Supervised Fine-Tuning mimics expert demonstrations effectively, it cannot correct policy drift in unseen states. Preference optimization methods address this but require costly preference pairs or reward modeling. We propose Flow Matching Adversarial Imitation Learning (FAIL), which minimizes policy-expert divergence through adversarial training without explicit rewards or pairwise comparisons. We derive two algorithms: FAIL-PD exploits differentiable ODE solvers for low-variance pathwise gradients, while FAIL-PG provides a black-box alternative for discrete or computationally constrained settings. Fine-tuning FLUX with only 13,000 demonstrations from Nano Banana pro, FAIL achieves competitive performance on prompt following and aesthetic benchmarks. Furthermore, the framework generalizes effectively to discrete image and video generation, and functions as a robust regularizer to mitigate reward hacking in reward-based optimization. Code and data are available at https://github.com/HansPolo113/FAIL.

流匹配模型的后训练——将输出分布与高质量目标对齐——在数学上等同于模仿学习。虽然监督微调有效地模仿了专家的演示，但它无法纠正看不见的状态中的政策漂移。偏好优化方法可以解决这个问题，但需要昂贵的偏好对或奖励建模。我们提出了流匹配对抗性模仿学习（FAIL），它通过对抗性训练来最小化政策专家分歧，而无需明确的奖励或成对比较。我们推导出两种算法：FAIL-PD 利用可微分 ODE 求解器来实现低方差路径梯度，而 FAIL-PG 则为离散或计算约束设置提供黑盒替代方案。仅通过 Nano Banana pro 的 13,000 次演示对 FLUX 进行微调，FAIL 在快速跟随和美学基准方面实现了具有竞争力的性能。此外，该框架有效地推广到离散图像和视频生成，并作为强大的正则化器来减轻基于奖励的优化中的奖励黑客行为。代码和数据可在 https://github.com/HansPolo113/FAIL 获取。

</details>

---

## 4. How to Sample High Quality 3D Fractals for Action Recognition Pre-Training? / 如何对高质量 3D 分形进行采样以进行动作识别预训练？

**Date**: 2026-02-12 | **arXiv**: [2602.11810v1](http://arxiv.org/abs/2602.11810v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11810v1)

**Categories**: cs.CV, cs.LG

<details><summary><b>Abstract / 摘要</b></summary>

Synthetic datasets are being recognized in the deep learning realm as a valuable alternative to exhaustively labeled real data. One such synthetic data generation method is Formula Driven Supervised Learning (FDSL), which can provide an infinite number of perfectly labeled data through a formula driven approach, such as fractals or contours. FDSL does not have common drawbacks like manual labor, privacy and other ethical concerns. In this work we generate 3D fractals using 3D Iterated Function Systems (IFS) for pre-training an action recognition model. The fractals are temporally transformed to form a video that is used as a pre-training dataset for downstream task of action recognition. We find that standard methods of generating fractals are slow and produce degenerate 3D fractals. Therefore, we systematically explore alternative ways of generating fractals and finds that overly-restrictive approaches, while generating aesthetically pleasing fractals, are detrimental for downstream task performance. We propose a novel method, Targeted Smart Filtering, to address both the generation speed and fractal diversity issue. The method reports roughly 100 times faster sampling speed and achieves superior downstream performance against other 3D fractal filtering methods.

合成数据集在深度学习领域被认为是详尽标记的真实数据的有价值的替代方案。其中一种合成数据生成方法是公式驱动监督学习（FDSL），它可以通过公式驱动方法（例如分形或轮廓）提供无限数量的完美标记数据。 FDSL 没有体力劳动、隐私和其他道德问题等常见缺点。在这项工作中，我们使用 3D 迭代函数系统 (IFS) 生成 3D 分形，以预训练动作识别模型。分形在时间上进行变换以形成视频，该视频用作动作识别下游任务的预训练数据集。我们发现生成分形的标准方法很慢并且会产生简并的 3D 分形。因此，我们系统地探索了生成分形的替代方法，并发现过度限制的方法虽然生成美观的分形，但不利于下游任务的性能。我们提出了一种新颖的方法，即目标智能过滤，来解决生成速度和分形多样性问题。与其他 3D 分形过滤方法相比，该方法的采样速度快了大约 100 倍，并实现了卓越的下游性能。

</details>

---

## 5. STVG-R1: Incentivizing Instance-Level Reasoning and Grounding in Videos via Reinforcement Learning / STVG-R1：通过强化学习激励视频中的实例级推理和基础

**Date**: 2026-02-12 | **arXiv**: [2602.11730v1](http://arxiv.org/abs/2602.11730v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11730v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

In vision-language models (VLMs), misalignment between textual descriptions and visual coordinates often induces hallucinations. This issue becomes particularly severe in dense prediction tasks such as spatial-temporal video grounding (STVG). Prior approaches typically focus on enhancing visual-textual alignment or attaching auxiliary decoders. However, these strategies inevitably introduce additional trainable modules, leading to significant annotation costs and computational overhead. In this work, we propose a novel visual prompting paradigm that avoids the difficult problem of aligning coordinates across modalities. Specifically, we reformulate per-frame coordinate prediction as a compact instance-level identification problem by assigning each object a unique, temporally consistent ID. These IDs are embedded into the video as visual prompts, providing explicit and interpretable inputs to the VLMs. Furthermore, we introduce STVG-R1, the first reinforcement learning framework for STVG, which employs a task-driven reward to jointly optimize temporal accuracy, spatial consistency, and structural format regularization. Extensive experiments on six benchmarks demonstrate the effectiveness of our approach. STVG-R1 surpasses the baseline Qwen2.5-VL-7B by a remarkable margin of 20.9% on m_IoU on the HCSTVG-v2 benchmark, establishing a new state of the art (SOTA). Surprisingly, STVG-R1 also exhibits strong zero-shot generalization to multi-object referring video object segmentation tasks, achieving a SOTA 47.3% J&F on MeViS.

在视觉语言模型（VLM）中，文本描述和视觉坐标之间的错位通常会引起幻觉。这个问题在时空视频接地（STVG）等密集预测任务中变得尤为严重。现有方法通常侧重于增强视觉文本对齐或附加辅助解码器。然而，这些策略不可避免地引入额外的可训练模块，导致显着的注释成本和计算开销。在这项工作中，我们提出了一种新颖的视觉提示范例，避免了跨模态对齐坐标的难题。具体来说，我们通过为每个对象分配一个唯一的、时间一致的 ID，将每帧坐标预测重新表述为一个紧凑的实例级识别问题。这些 ID 作为视觉提示嵌入到视频中，为 VLM 提供明确且可解释的输入。此外，我们还引入了 STVG-R1，这是 STVG 的第一个强化学习框架，它采用任务驱动的奖励来联合优化时间准确性、空间一致性和结构格式正则化。对六个基准的广泛实验证明了我们方法的有效性。 STVG-R1 在 HCSTVG-v2 基准上的 m_IoU 上超越了基线 Qwen2.5-VL-7B，显着提高了 20.9%，建立了新的最先进技术 (SOTA)。令人惊讶的是，STVG-R1 还对多对象参考视频对象分割任务表现出强大的零样本泛化能力，在 MeViS 上实现了 SOTA 47.3% J&F。

</details>

---

## 6. LUVE : Latent-Cascaded Ultra-High-Resolution Video Generation with Dual Frequency Experts / LUVE：双频专家的潜在级联超高分辨率视频生成

**Date**: 2026-02-12 | **arXiv**: [2602.11564v1](http://arxiv.org/abs/2602.11564v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11564v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Recent advances in video diffusion models have significantly improved visual quality, yet ultra-high-resolution (UHR) video generation remains a formidable challenge due to the compounded difficulties of motion modeling, semantic planning, and detail synthesis. To address these limitations, we propose \textbf{LUVE}, a \textbf{L}atent-cascaded \textbf{U}HR \textbf{V}ideo generation framework built upon dual frequency \textbf{E}xperts. LUVE employs a three-stage architecture comprising low-resolution motion generation for motion-consistent latent synthesis, video latent upsampling that performs resolution upsampling directly in the latent space to mitigate memory and computational overhead, and high-resolution content refinement that integrates low-frequency and high-frequency experts to jointly enhance semantic coherence and fine-grained detail generation. Extensive experiments demonstrate that our LUVE achieves superior photorealism and content fidelity in UHR video generation, and comprehensive ablation studies further validate the effectiveness of each component. The project is available at \href{https://unicornanrocinu.github.io/LUVE_web/}{https://github.io/LUVE/}.

视频扩散模型的最新进展显着提高了视觉质量，但由于运动建模、语义规划和细节合成的复杂困难，超高分辨率 (UHR) 视频生成仍然是一个艰巨的挑战。为了解决这些限制，我们提出了 \textbf{LUVE}，一个基于双频 \textbf{E}xperts 构建的 \textbf{L}atent 级联 \textbf{U}HR \textbf{V}ideo 生成框架。 LUVE 采用三阶段架构，包括用于运动一致潜在合成的低分辨率运动生成、直接在潜在空间中执行分辨率上采样以减轻内存和计算开销的视频潜在上采样，以及集成低频和高频专家以共同增强语义一致性和细粒度细节生成的高分辨率内容细化。大量实验表明，我们的 LUVE 在 UHR 视频生成中实现了卓越的照片真实感和内容保真度，全面的消融研究进一步验证了每个组件的有效性。该项目位于 \href{https://unicornanrocinu.github.io/LUVE_web/}{https://github.io/LUVE/}。

</details>

---

## 7. SAM3-LiteText: An Anatomical Study of the SAM3 Text Encoder for Efficient Vision-Language Segmentation / SAM3-LiteText：用于高效视觉语言分割的 SAM3 文本编码器的解剖研究

**Date**: 2026-02-12 | **arXiv**: [2602.12173v1](http://arxiv.org/abs/2602.12173v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.12173v1)

**Categories**: cs.AI

**Code**: https://github.com/SimonZeng7108/efficientsam3/tree/sam3_litetext.

<details><summary><b>Abstract / 摘要</b></summary>

Vision-language segmentation models such as SAM3 enable flexible, prompt-driven visual grounding, but inherit large, general-purpose text encoders originally designed for open-ended language understanding. In practice, segmentation prompts are short, structured, and semantically constrained, leading to substantial over-provisioning in text encoder capacity and persistent computational and memory overhead. In this paper, we perform a large-scale anatomical analysis of text prompting in vision-language segmentation, covering 404,796 real prompts across multiple benchmarks. Our analysis reveals severe redundancy: most context windows are underutilized, vocabulary usage is highly sparse, and text embeddings lie on low-dimensional manifold despite high-dimensional representations. Motivated by these findings, we propose SAM3-LiteText, a lightweight text encoding framework that replaces the original SAM3 text encoder with a compact MobileCLIP student that is optimized by knowledge distillation. Extensive experiments on image and video segmentation benchmarks show that SAM3-LiteText reduces text encoder parameters by up to 88%, substantially reducing static memory footprint, while maintaining segmentation performance comparable to the original model. Code: https://github.com/SimonZeng7108/efficientsam3/tree/sam3_litetext.

SAM3 等视觉语言分割模型可实现灵活、提示驱动的视觉基础，但继承了最初为开放式语言理解而设计的大型通用文本编码器。在实践中，分段提示很短、结构化且语义受限，导致文本编码器容量的大量过度配置以及持续的计算和内存开销。在本文中，我们对视觉语言分割中的文本提示进行了大规模的解剖分析，涵盖了跨多个基准的 404,796 个真实提示。我们的分析揭示了严重的冗余：大多数上下文窗口未得到充分利用，词汇使用高度稀疏，尽管具有高维表示，但文本嵌入位于低维流形上。受这些发现的启发，我们提出了 SAM3-LiteText，这是一种轻量级文本编码框架，用通过知识蒸馏优化的紧凑型 MobileCLIP Student 取代了原始的 SAM3 文本编码器。对图像和视频分割基准的大量实验表明，SAM3-LiteText 将文本编码器参数减少了高达 88%，大大减少了静态内存占用，同时保持了与原始模型相当的分割性能。代码：https://github.com/SimonZeng7108/efficientsam3/tree/sam3_litetext。

</details>

---

## 8. HLA: Hadamard Linear Attention / HLA：Hadamard 线性注意力

**Date**: 2026-02-12 | **arXiv**: [2602.12128v1](http://arxiv.org/abs/2602.12128v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.12128v1)

**Categories**: cs.AI

<details><summary><b>Abstract / 摘要</b></summary>

The attention mechanism is an important reason for the success of transformers. It relies on computing pairwise relations between tokens. To reduce the high computational cost of standard quadratic attention, linear attention has been proposed as an efficient approximation. It employs kernel functions that are applied independently to the inputs before the pairwise similarities are calculated. That allows for an efficient computational procedure which, however, amounts to a low-degree rational function approximating softmax.   We propose Hadamard Linear Attention (HLA). Unlike previous works on linear attention, the nonlinearity in HLA is not applied separately to queries and keys, but, analogously to standard softmax attention, after the pairwise similarities have been computed. It will be shown that the proposed nonlinearity amounts to a higher-degree rational function to approximate softmax. An efficient computational scheme for the proposed method is derived that is similar to that of standard linear attention. In contrast to other approaches, no time-consuming tensor reshaping is necessary to apply the proposed algorithm. The effectiveness of the approach is demonstrated by applying it to a large diffusion transformer model for video generation, an application that involves very large amounts of tokens.

注意力机制是 Transformer 成功的重要原因。它依赖于计算标记之间的成对关系。为了降低标准二次注意力的高计算成本，线性注意力被提出作为一种有效的近似。它采用在计算成对相似度之前独立应用于输入的核函数。这允许高效的计算过程，然而，这相当于一个逼近 softmax 的低次有理函数。   我们提出哈达玛线性注意力（HLA）。与之前的线性注意力工作不同，HLA 中的非线性不是单独应用于查询和键，而是类似于标准的 softmax 注意力，在计算成对相似性之后应用。将会表明，所提出的非线性相当于一个更高阶的有理函数来近似 softmax。推导了所提出方法的有效计算方案，该方案类似于标准线性注意的方案。与其他方法相比，应用所提出的算法不需要耗时的张量整形。该方法的有效性通过将其应用于用于视频生成的大型扩散变压器模型（涉及大量令牌的应用程序）来证明。

</details>

---

## 9. Beyond End-to-End Video Models: An LLM-Based Multi-Agent System for Educational Video Generation / 超越端到端视频模型：用于教育视频生成的基于 LLM 的多代理系统

**Date**: 2026-02-12 | **arXiv**: [2602.11790v1](http://arxiv.org/abs/2602.11790v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11790v1)

**Categories**: cs.AI, cs.CL

<details><summary><b>Abstract / 摘要</b></summary>

Although recent end-to-end video generation models demonstrate impressive performance in visually oriented content creation, they remain limited in scenarios that require strict logical rigor and precise knowledge representation, such as instructional and educational media. To address this problem, we propose LAVES, a hierarchical LLM-based multi-agent system for generating high-quality instructional videos from educational problems. The LAVES formulates educational video generation as a multi-objective task that simultaneously demands correct step-by-step reasoning, pedagogically coherent narration, semantically faithful visual demonstrations, and precise audio--visual alignment. To address the limitations of prior approaches--including low procedural fidelity, high production cost, and limited controllability--LAVES decomposes the generation workflow into specialized agents coordinated by a central Orchestrating Agent with explicit quality gates and iterative critique mechanisms. Specifically, the Orchestrating Agent supervises a Solution Agent for rigorous problem solving, an Illustration Agent that produces executable visualization codes, and a Narration Agent for learner-oriented instructional scripts. In addition, all outputs from the working agents are subject to semantic critique, rule-based constraints, and tool-based compilation checks. Rather than directly synthesizing pixels, the system constructs a structured executable video script that is deterministically compiled into synchronized visuals and narration using template-driven assembly rules, enabling fully automated end-to-end production without manual editing. In large-scale deployments, LAVES achieves a throughput exceeding one million videos per day, delivering over a 95% reduction in cost compared to current industry-standard approaches while maintaining a high acceptance rate.

尽管最近的端到端视频生成模型在面向视觉的内容创建方面表现出了令人印象深刻的性能，但它们在需要严格逻辑严谨性和精确知识表示的场景中仍然受到限制，例如教学和教育媒体。为了解决这个问题，我们提出了 LAVES，一种基于 LLM 的分层多智能体系统，用于根据教育问题生成高质量的教学视频。 LAVES 将教育视频生成制定为一项多目标任务，同时要求正确的逐步推理、教学上连贯的叙述、语义上忠实的视觉演示以及精确的视听对齐。为了解决先前方法的局限性（包括程序保真度低、生产成本高和可控性有限），LAVES 将生成工作流程分解为由具有明确质量门和迭代批评机制的中央编排代理协调的专门代理。具体来说，编排代理监督解决方案代理以严格解决问题，插图代理生成可执行的可视化代码，以及叙述代理以用于面向学习者的教学脚本。此外，工作代理的所有输出都受到语义批评、基于规则的约束和基于工具的编译检查。该系统不是直接合成像素，而是构建一个结构化的可执行视频脚本，该脚本使用模板驱动的组装规则确定性地编译成同步的视觉效果和旁白，从而实现完全自动化的端到端制作，无需手动编辑。在大规模部署中，LAVES 的吞吐量每天超过 100 万个视频，与当前行业标准方法相比，成本降低了 95% 以上，同时保持了较高的接受率。

</details>

---

## 10. VLAW: Iterative Co-Improvement of Vision-Language-Action Policy and World Model / VLAW：愿景-语言-行动政策和世界模型的迭代共同改进

**Date**: 2026-02-12 | **arXiv**: [2602.12063v1](http://arxiv.org/abs/2602.12063v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.12063v1)

**Categories**: cs.RO

**Project**: https://sites.google.com/view/vla-w  <details><summary><b>Abstract / 摘要</b></summary>

The goal of this paper is to improve the performance and reliability of vision-language-action (VLA) models through iterative online interaction. Since collecting policy rollouts in the real world is expensive, we investigate whether a learned simulator-specifically, an action-conditioned video generation model-can be used to generate additional rollout data. Unfortunately, existing world models lack the physical fidelity necessary for policy improvement: they are predominantly trained on demonstration datasets that lack coverage of many different physical interactions (particularly failure cases) and struggle to accurately model small yet critical physical details in contact-rich object manipulation. We propose a simple iterative improvement algorithm that uses real-world roll-out data to improve the fidelity of the world model, which can then, in turn, be used to generate supplemental synthetic data for improving the VLA model. In our experiments on a real robot, we use this approach to improve the performance of a state-of-the-art VLA model on multiple downstream tasks. We achieve a 39.2% absolute success rate improvement over the base policy and 11.6% improvement from training with the generated synthetic rollouts. Videos can be found at this anonymous website: https://sites.google.com/view/vla-w

本文的目标是通过迭代在线交互来提高视觉-语言-动作（VLA）模型的性能和可靠性。由于在现实世界中收集策略推出的成本很高，因此我们研究了是否可以使用学习的模拟器（具体而言，动作条件视频生成模型）来生成额外的推出数据。不幸的是，现有的世界模型缺乏政策改进所需的物理保真度：它们主要是在演示数据集上进行训练的，这些数据集缺乏对许多不同物理交互（特别是失败案例）的覆盖，并且很难在接触丰富的对象操作中准确地模拟微小但关键的物理细节。我们提出了一种简单的迭代改进算法，该算法使用现实世界的转出数据来提高世界模型的保真度，然后可以使用该算法生成补充合成数据以改进 VLA 模型。在我们对真实机器人的实验中，我们使用这种方法来提高最先进的 VLA 模型在多个下游任务上的性能。与基本策略相比，我们的绝对成功率提高了 39.2%，通过生成的综合部署进行训练，绝对成功率提高了 11.6%。视频可以在这个匿名网站上找到：https://sites.google.com/view/vla-w

</details>

---

## 11. SurfPhase: 3D Interfacial Dynamics in Two-Phase Flows from Sparse Videos / SurfPhase：稀疏视频中两相流的 3D 界面动力学

**Date**: 2026-02-11 | **arXiv**: [2602.11154v1](http://arxiv.org/abs/2602.11154v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11154v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

Interfacial dynamics in two-phase flows govern momentum, heat, and mass transfer, yet remain difficult to measure experimentally. Classical techniques face intrinsic limitations near moving interfaces, while existing neural rendering methods target single-phase flows with diffuse boundaries and cannot handle sharp, deformable liquid-vapor interfaces. We propose SurfPhase, a novel model for reconstructing 3D interfacial dynamics from sparse camera views. Our approach integrates dynamic Gaussian surfels with a signed distance function formulation for geometric consistency, and leverages a video diffusion model to synthesize novel-view videos to refine reconstruction from sparse observations. We evaluate on a new dataset of high-speed pool boiling videos, demonstrating high-quality view synthesis and velocity estimation from only two camera views. Project website: https://yuegao.me/SurfPhase.

两相流中的界面动力学控制动量、热量和质量传递，但仍然难以通过实验测量。经典技术在移动界面附近面临固有的局限性，而现有的神经渲染方法针对具有扩散边界的单相流，无法处理尖锐、可变形的液-气界面。我们提出了 SurfPhase，一种从稀疏相机视图重建 3D 界面动力学的新颖模型。我们的方法将动态高斯面元与带符号距离函数公式相结合以实现几何一致性，并利用视频扩散模型来合成新颖的视图视频，以改进稀疏观测的重建。我们对高速池沸腾视频的新数据集进行了评估，仅通过两个摄像机视图演示了高质量的视图合成和速度估计。项目网站：https://yuegao.me/SurfPhase。

</details>

---

## 12. HairWeaver: Few-Shot Photorealistic Hair Motion Synthesis with Sim-to-Real Guided Video Diffusion / HairWeaver：通过模拟到真实引导视频扩散进行少镜头真实感头发运动合成

**Date**: 2026-02-11 | **arXiv**: [2602.11117v1](http://arxiv.org/abs/2602.11117v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11117v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We present HairWeaver, a diffusion-based pipeline that animates a single human image with realistic and expressive hair dynamics. While existing methods successfully control body pose, they lack specific control over hair, and as a result, fail to capture the intricate hair motions, resulting in stiff and unrealistic animations. HairWeaver overcomes this limitation using two specialized modules: a Motion-Context-LoRA to integrate motion conditions and a Sim2Real-Domain-LoRA to preserve the subject's photoreal appearance across different data domains. These lightweight components are designed to guide a video diffusion backbone while maintaining its core generative capabilities. By training on a specialized dataset of dynamic human motion generated from a CG simulator, HairWeaver affords fine control over hair motion and ultimately learns to produce highly realistic hair that responds naturally to movement. Comprehensive evaluations demonstrate that our approach sets a new state of the art, producing lifelike human hair animations with dynamic details.

我们推出了 HairWeaver，这是一种基于扩散的管道，可以通过逼真且富有表现力的头发动态来对单个人类图像进行动画处理。虽然现有方法成功地控制了身体姿势，但它们缺乏对头发的具体控制，因此无法捕捉复杂的头发运动，导致动画僵硬且不切实际。 HairWeaver 使用两个专用模块克服了这一限制：一个用于集成运动条件的 Motion-Context-LoRA，另一个是 Sim2Real-Domain-LoRA，用于在不同数据域中保留主体的真实外观。这些轻量级组件旨在指导视频传播主干，同时保持其核心生成功能。通过对 CG 模拟器生成的动态人体运动的专门数据集进行训练，HairWeaver 可以对头发运动进行精细控制，并最终学会生成对运动做出自然响应的高度逼真的头发。综合评估表明，我们的方法树立了新的技术水平，可以制作具有动态细节的逼真的人发动画。

</details>

---

## 13. FastFlow: Accelerating The Generative Flow Matching Models with Bandit Inference / FastFlow：通过强盗推理加速生成流匹配模型

**Date**: 2026-02-11 | **arXiv**: [2602.11105v1](http://arxiv.org/abs/2602.11105v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11105v1)

**Categories**: cs.CV

**Code**: https://github.com/Div290/FastFlow.

<details><summary><b>Abstract / 摘要</b></summary>

Flow-matching models deliver state-of-the-art fidelity in image and video generation, but the inherent sequential denoising process renders them slower. Existing acceleration methods like distillation, trajectory truncation, and consistency approaches are static, require retraining, and often fail to generalize across tasks. We propose FastFlow, a plug-and-play adaptive inference framework that accelerates generation in flow matching models. FastFlow identifies denoising steps that produce only minor adjustments to the denoising path and approximates them without using the full neural network models used for velocity predictions. The approximation utilizes finite-difference velocity estimates from prior predictions to efficiently extrapolate future states, enabling faster advancements along the denoising path at zero compute cost. This enables skipping computation at intermediary steps. We model the decision of how many steps to safely skip before requiring a full model computation as a multi-armed bandit problem. The bandit learns the optimal skips to balance speed with performance. FastFlow integrates seamlessly with existing pipelines and generalizes across image generation, video generation, and editing tasks. Experiments demonstrate a speedup of over 2.6x while maintaining high-quality outputs. The source code for this work can be found at https://github.com/Div290/FastFlow.

流匹配模型在图像和视频生成中提供最先进的保真度，但固有的顺序去噪过程使它们速度变慢。现有的加速方法（例如蒸馏、轨迹截断和一致性方法）是静态的，需要重新训练，并且通常无法跨任务泛化。我们提出了 FastFlow，一种即插即用的自适应推理框架，可加速流匹配模型的生成。 FastFlow 识别仅对去噪路径产生微小调整的去噪步骤，并在不使用用于速度预测的完整神经网络模型的情况下对其进行近似。该近似利用先前预测的有限差分速度估计来有效地推断未来状态，从而以零计算成本沿着去噪路径实现更快的进展。这使得能够跳过中间步骤的计算。我们将在需要完整模型计算之前安全跳过多少步骤的决策建模为多臂老虎机问题。老虎机学习最佳跳跃以平衡速度与性能。 FastFlow 与现有管道无缝集成，并可泛化图像生成、视频生成和编辑任务。实验表明，在保持高质量输出的同时，速度提高了 2.6 倍以上。这项工作的源代码可以在 https://github.com/Div290/FastFlow 找到。

</details>

---

## 14. ReTracing: An Archaeological Approach Through Body, Machine, and Generative Systems / 追溯：通过身体、机器和生成系统的考古方法

**Date**: 2026-02-11 | **arXiv**: [2602.11242v1](http://arxiv.org/abs/2602.11242v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11242v1)

**Categories**: cs.CV

<details><summary><b>Abstract / 摘要</b></summary>

We present ReTracing, a multi-agent embodied performance art that adopts an archaeological approach to examine how artificial intelligence shapes, constrains, and produces bodily movement. Drawing from science-fiction novels, the project extracts sentences that describe human-machine interaction. We use large language models (LLMs) to generate paired prompts "what to do" and "what not to do" for each excerpt. A diffusion-based text-to-video model transforms these prompts into choreographic guides for a human performer and motor commands for a quadruped robot. Both agents enact the actions on a mirrored floor, captured by multi-camera motion tracking and reconstructed into 3D point clouds and motion trails, forming a digital archive of motion traces. Through this process, ReTracing serves as a novel approach to reveal how generative systems encode socio-cultural biases through choreographed movements. Through an immersive interplay of AI, human, and robot, ReTracing confronts a critical question of our time: What does it mean to be human among AIs that also move, think, and leave traces behind?

我们展示了 ReTracing，这是一种多智能体体现的表演艺术，它采用考古学的方法来研究人工智能如何塑造、约束和产生身体运动。该项目借鉴科幻小说，提取描述人机交互的句子。我们使用大型语言模型 (LLM) 为每个摘录生成配对提示“该做什么”和“不该做什么”。基于扩散的文本到视频模型将这些提示转换为人类表演者的编舞指南和四足机器人的运动命令。两个代理都在镜像地板上执行动作，通过多摄像头运动跟踪捕获并重建为 3D 点云和运动轨迹，形成运动轨迹的数字档案。通过这个过程，ReTracing 作为一种新颖的方法来揭示生成系统如何通过精心设计的动作来编码社会文化偏见。通过人工智能、人类和机器人的沉浸式互动，《ReTracing》面临着我们这个时代的一个关键问题：在同样会移动、思考和留下痕迹的人工智能中，作为人类意味着什么？

</details>

---

## 15. Flow caching for autoregressive video generation / 用于自回归视频生成的流缓存

**Date**: 2026-02-11 | **arXiv**: [2602.10825v1](http://arxiv.org/abs/2602.10825v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.10825v1)

**Categories**: cs.CV, cs.AI

**Code**: https://github.com/mikeallen39/FlowCache.

<details><summary><b>Abstract / 摘要</b></summary>

Autoregressive models, often built on Transformer architectures, represent a powerful paradigm for generating ultra-long videos by synthesizing content in sequential chunks. However, this sequential generation process is notoriously slow. While caching strategies have proven effective for accelerating traditional video diffusion models, existing methods assume uniform denoising across all frames-an assumption that breaks down in autoregressive models where different video chunks exhibit varying similarity patterns at identical timesteps. In this paper, we present FlowCache, the first caching framework specifically designed for autoregressive video generation. Our key insight is that each video chunk should maintain independent caching policies, allowing fine-grained control over which chunks require recomputation at each timestep. We introduce a chunkwise caching strategy that dynamically adapts to the unique denoising characteristics of each chunk, complemented by a joint importance-redundancy optimized KV cache compression mechanism that maintains fixed memory bounds while preserving generation quality. Our method achieves remarkable speedups of 2.38 times on MAGI-1 and 6.7 times on SkyReels-V2, with negligible quality degradation (VBench: 0.87 increase and 0.79 decrease respectively). These results demonstrate that FlowCache successfully unlocks the potential of autoregressive models for real-time, ultra-long video generation-establishing a new benchmark for efficient video synthesis at scale. The code is available at https://github.com/mikeallen39/FlowCache.

自回归模型通常建立在 Transformer 架构之上，代表了通过合成连续块中的内容来生成超长视频的强大范例。然而，这种顺序生成过程是出了名的慢。虽然缓存策略已被证明对于加速传统视频扩散模型是有效的，但现有方法假设所有帧都采用统一的去噪——这种假设在自回归模型中被打破，其中不同的视频块在相同的时间步长表现出不同的相似性模式。在本文中，我们介绍了 FlowCache，这是第一个专为自回归视频生成而设计的缓存框架。我们的主要见解是每个视频块应该维护独立的缓存策略，从而可以对每个时间步需要重新计算的块进行细粒度控制。我们引入了一种分块缓存策略，该策略动态适应每个块的独特去噪特性，并辅以联合重要性冗余优化的 KV 缓存压缩机制，该机制在保持固定内存边界的同时保持生成质量。我们的方法在 MAGI-1 上实现了 2.38 倍的显着加速，在 SkyReels-V2 上实现了 6.7 倍的显着加速，而质量下降可以忽略不计（VBench：分别增加 0.87 倍和减少 0.79 倍）。这些结果表明，FlowCache 成功释放了自回归模型在实时、超长视频生成方面的潜力，为大规模高效视频合成建立了新基准。该代码可从 https://github.com/mikeallen39/FlowCache 获取。

</details>

---

## 16. H-WM: Robotic Task and Motion Planning Guided by Hierarchical World Model / H-WM：分层世界模型引导的机器人任务和运动规划

**Date**: 2026-02-11 | **arXiv**: [2602.11291v1](http://arxiv.org/abs/2602.11291v1) | **PDF**: [Link](http://arxiv.org/pdf/2602.11291v1)

**Categories**: cs.RO

<details><summary><b>Abstract / 摘要</b></summary>

World models are becoming central to robotic planning and control, as they enable prediction of future state transitions. Existing approaches often emphasize video generation or natural language prediction, which are difficult to directly ground in robot actions and suffer from compounding errors over long horizons. Traditional task and motion planning relies on symbolic logic world models, such as planning domains, that are robot-executable and robust for long-horizon reasoning. However, these methods typically operate independently of visual perception, preventing synchronized symbolic and perceptual state prediction. We propose a Hierarchical World Model (H-WM) that jointly predicts logical and visual state transitions within a unified bilevel framework. H-WM combines a high-level logical world model with a low-level visual world model, integrating the robot-executable, long-horizon robustness of symbolic reasoning with perceptual grounding from visual observations. The hierarchical outputs provide stable and consistent intermediate guidance for long-horizon tasks, mitigating error accumulation and enabling robust execution across extended task sequences. To train H-WM, we introduce a robotic dataset that aligns robot motion with symbolic states, actions, and visual observations. Experiments across vision-language-action (VLA) control policies demonstrate the effectiveness and generality of the approach.

世界模型正在成为机器人规划和控制的核心，因为它们能够预测未来的状态转换。现有的方法通常强调视频生成或自然语言预测，这些方法很难直接反映机器人的动作，并且在长期范围内会出现复合错误。传统的任务和运动规划依赖于符号逻辑世界模型，例如规划域，这些模型是机器人可执行的并且对于长视野推理来说是鲁棒的。然而，这些方法通常独立于视觉感知进行操作，从而阻止了同步的符号和感知状态预测。我们提出了一种分层世界模型（H-WM），它在统一的双层框架内联合预测逻辑和视觉状态转换。 H-WM 将高级逻辑世界模型与低级视觉世界模型相结合，将机器人可执行的符号推理的长期鲁棒性与视觉观察的感知基础相结合。分层输出为长期任务提供稳定一致的中间指导，减少错误累积并实现跨扩展任务序列的稳健执行。为了训练 H-WM，我们引入了一个机器人数据集，该数据集将机器人运动与符号状态、动作和视觉观察对齐。视觉-语言-动作（VLA）控制策略的实验证明了该方法的有效性和通用性。

</details>

---



</details>

<!-- PAPERS_CONTENT_END -->

## 🚀 快速开始

1. **配置 API Key**：在仓库 `Settings -> Secrets and variables -> Actions -> Secrets` 中添加 `DEEPSEEK_API_KEY`。
2. **手动运行**：在 `Actions` 标签页选择 `Daily Video Papers Update` 并点击 `Run workflow`。
3. **切换版本**：在 `Variables` 中设置 `VERSION` 为 `v2` 即可开启 AI 深度分析模式。

## 🛠️ 技术细节

- **数据源**：arXiv API (cs.CV, cs.AI, cs.MM, cs.RO, cs.LG)
- **翻译/分析**：DeepSeek API (优先) / Gemini (备用)
- **自动化**：GitHub Actions

---
