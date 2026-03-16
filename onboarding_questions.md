# Questionário de Onboarding - Perguntas e Opções

Este documento lista todas as perguntas e opções de resposta presentes no fluxo de onboarding da aplicação.
**Nota:** As opções destacadas como `código` (fundo cinza/texto vermelho) indicam contraindicações para o uso de GLP-1.

## Passo 1: Informações Iniciais
**Arquivo:** `Step1Start.tsx`

1.  **Pergunta:** Qual é a sua altura? (cm)
    *   *Tipo:* Entrada Numérica (Ex: 175)
2.  **Pergunta:** Qual é o seu peso atual? (kg)
    *   *Tipo:* Entrada Numérica (Ex: 85)
3.  **Pergunta:** Qual é a sua meta de peso? (kg)
    *   *Tipo:* Entrada Numérica (Ex: 70)

## Passo 2: Informações Biológicas
**Arquivo:** `Step2Preliminary.tsx`

4.  **Pergunta:** Qual é o seu sexo biológico?
    *   Masculino
    *   Feminino

####### (Se Feminino)
5.  **Pergunta:** Segurança em primeiro lugar. Alguma dessas opções se aplica a você?
    *   `Atualmente grávida, possivelmente grávida ou tentando engravidar (🚫 BLOQUEIA USO)`
    *   `Amamentando ou extraindo leite materno (🚫 BLOQUEIA USO)`
    *   Deu à luz nos últimos 6 meses
    *   Nenhuma das anteriores

⚠️  Passo 3: Sintomas
**Arquivo:** `Step3Health.tsx`

6.  **Pergunta:** O ganho de peso afeta cada pessoa de forma única. Você sente algum dos seguintes sintomas?
    *   Baixa libido
    *   Queda de cabelo
    *   Problemas de pele
    *   Problemas cognitivos
    *   Nenhum destes

⚠️  Passo 4: Prioridade
**Arquivo:** `Step4Priority.tsx`

7.  **Pergunta:** Qual destas é sua prioridade?
    *   Perder peso
    *   Ganhar massa muscular
    *   Manter meu corpo atual

⚠️ ## Passo 8: Motivação
**Arquivo:** `StepDetails.tsx`

⚠️ 8.  **Pergunta:** Qual é sua principal razão para levar a perda de peso a sério?
    *   Quero viver mais
    *   Quero me sentir e parecer melhor
    *   Quero reduzir meus problemas de saúde
    *   Todas as anteriores

⚠️ ## Passo 9: Ritmo
**Arquivo:** `StepDetails.tsx`

⚠️ 9.  **Pergunta:** O que você acha desse ritmo? (Baseado na perda de peso estimada)
    *   Funciona para mim
    *   Quero mais rápido
    *   É muito rápido

⚠️ ## Passo 11: Sono
**Arquivo:** `StepDetails.tsx`

⚠️ 10. **Pergunta:** Como é o seu sono, no geral?
    *   Muito bom
    *   Um pouco agitado
    *   Não durmo bem

⚠️ 11. **Pergunta:** Quantas horas de sono você costuma ter?
    *   Menos de 5 horas
    *   5-6 horas
    *   7-8 horas
    *   Mais de 8 horas

## Passo 13: Condições de Saúde I
**Arquivo:** `Step13HealthConditions.tsx`

12. **Pergunta:** O GLP-1 é seguro, mas estas condições de saúde podem impedir sua prescrição. Alguma destas se aplica a você?
    *   `Doença renal terminal (em diálise ou pré-diálise) (🚫 BLOQUEIA USO)`
    *   `Doença hepática terminal (cirrose) (🚫 BLOQUEIA USO)`
    *   `Pensamentos suicidas atuais e/ou tentativa de suicídio anterior (🚫 BLOQUEIA USO)`
    *   Câncer (diagnóstico ativo, tratamento ativo ou em remissão há menos de 5 anos...)
    *   `Histórico de transplante de órgãos em medicação anti-rejeição (🚫 BLOQUEIA USO)`
    *   `Condição gastrointestinal grave (gastroparesia, obstrução, doença inflamatória intestinal) (🚫 BLOQUEIA USO)`
    *   Diagnóstico atual ou tratamento para transtorno por uso de álcool, opioides ou substâncias
    *   Nenhuma das anteriores

## Passo 14: Condições de Saúde II
**Arquivo:** `Step14MoreHealth.tsx`

13. **Pergunta:** Mais algumas questões de saúde. Alguma dessas opções se aplica a você?
    *   `Doença ativa da vesícula biliar (🚫 BLOQUEIA USO)`
    *   Hipertensão (pressão alta)
    *   Apneia do sono
    *   Diabetes tipo 2 (sem insulina)
    *   Diabetes tipo 2 (com insulina)
    *   Diabetes tipo 1
    *   `Retinopatia diabética, danos ao nervo óptico ou cegueira (🚫 BLOQUEIA USO)`
    *   Uso do anticoagulante varfarina (Coumadin/Marevan)
    *   `Histórico ou pancreatite atual (🚫 BLOQUEIA USO)`
    *   `Histórico pessoal ou familiar de Carcinoma Medular de Tireoide (MTC) ou MEN-2 (🚫 BLOQUEIA USO - BLACK BOX WARNING)`
    *   Colesterol alto ou triglicerídeos
    *   `Depressão grave (🚫 BLOQUEIA USO)`
    *   Doença hepática, incluindo esteatose hepática
    *   Insuficiência cardíaca congestiva
    *   Incontinência urinária de esforço
    *   Síndrome do ovário policístico (SOP)
    *   Testosterona baixa clinicamente comprovada
    *   Osteoartrite
    *   Nenhuma das anteriores

            ## Passo 15: Histórico de Medicação
            **Arquivo:** `Step15MedicationHistory.tsx`

            14. **Pergunta:** Você tomou medicação para perda de peso no último mês?
                *   Sim, tomei Semaglutida (Ozempic ou Wegovy)
                *   Sim, tomei Tirzepatida (Mounjaro ou Zepbound)
                *   Não estou tomando medicação GLP-1 atualmente

            ### (Se tomou Semaglutida ou Tirzepatida)
            15. **Pergunta:** Qual dose mais se aproxima da sua dose semanal mais recente?
                *   0.25 mg, 0.50 mg, 1 mg, 1.5 mg, 2 mg, 2.5 mg (para Semaglutida)
                *   2.5 mg, 5 mg, 7.5 mg, 10 mg, 12.5 mg, 15 mg (para Tirzepatida)

            16. **Pergunta:** Como gostaria de continuar seu tratamento?
                *   Manter a mesma dose ou dose equivalente
                *   Quero mudar de medicação
                *   Aumentar minha dose
                *   Diminuir minha dose

⚠️### (Se NÃO está tomando medicação)
17. **Pergunta:** Nos últimos 3 meses, você tomou analgésicos opióides?
    *   Sim / Não (Se Sim, pede detalhes em texto)

⚠️18. **Pergunta:** Você já fez cirurgias para perda de peso?
    *   Sim / Não (Se Sim, pede detalhes em texto)

            ## Passo 16: Disposição
            **Arquivo:** `StepLifeStyle.tsx`

            19. **Pergunta:** Se clinicamente apropriado, você estaria disposto a:
                *   Reduzir sua ingestão calórica junto com a medicação
                *   Aumentar sua atividade física junto com a medicação
                *   Nenhuma das anteriores

## Passo 17: Histórico de Peso
**Arquivo:** `StepLifeStyle.tsx`

⚠️20. **Pergunta:** Seu peso mudou no último ano?
    *   Perdi uma quantidade significativa
    *   Perdi um pouco
    *   Mais ou menos o mesmo
    *   Ganhei um pouco
    *   Ganhei uma quantidade significativa

⚠️## Passo 19: Sinais Vitais
**Arquivo:** `StepExtended.tsx`

⚠️21. **Pergunta:** Qual é a sua faixa média de pressão arterial?
    *   <120/80 (Normal)
    *   120-129/<80 (Elevada)
    *   130-139/80-89 (Alta Estágio 1)
    *   ≥140/90 (Alta Estágio 2)

⚠️2. **Pergunta:** E quanto à sua frequência cardíaca média em repouso?
    *   <60 bpm (Lenta)
    *   60-100 bpm (Normal)
    *   101-110 bpm (Levemente Rápida)
    *   >110 bpm (Rápida)

## Passo 20: Preferência de Tratamento
**Arquivo:** `StepExtended.tsx`

⚠️23. **Pergunta:** Qual destas é mais importante para você?
    *   Preço Acessível
    *   Eficácia

## Passo 21: Medicação Atual
**Arquivo:** `StepExtended.tsx`

24. **Pergunta:** Você toma alguma medicação atualmente?
    *   Sim / Não (Se Sim, pede detalhes em texto)

⚠️## Passo 22: Estado Motivacional
**Arquivo:** `StepExtended.tsx`

⚠️25. **Pergunta:** Quão motivado você está para atingir sua meta de peso?
    *   Estou pronto
    *   Estou esperançoso
    *   Estou cauteloso

## Passo 23: Informações Extras
**Arquivo:** `StepExtended.tsx`

26. **Pergunta:** Você tem mais alguma informação para nossa equipe médica?
    *   Sim / Não (Se Sim, pede detalhes em texto)

⚠️## Passo 24: Necessidades Personalizadas
**Arquivo:** `StepExtended.tsx`

⚠️27. **Pergunta:** Por favor, selecione as opções de seu interesse:
    *   Manter massa muscular enquanto perco peso
    *   Preferiria não usar injeções
    *   Gerenciar possíveis efeitos colaterais como náusea/vômito
    *   Auxiliar no envelhecimento e longevidade
    *   Melhorar função cognitiva e clareza mental
    *   Melhorar níveis de energia
    *   Regular menstruação e estado hormonal
    *   Melhorar qualidade do sono
    *   Nada em particular

## Passo 25: Data de Nascimento
**Arquivo:** `StepFinal.tsx`

28. **Pergunta:** Qual é a sua data de nascimento?
    *   *Inputs:* Dia, Mês, Ano
    *   `Nota: Pacientes menores de 18 anos (🚫 BLOQUEIA USO)`

## Passo 27: Formulário Final
**Arquivo:** `StepFinal.tsx`

29. **Formulário de Contato e Elegibilidade:**
    *   Nome
    *   Sobrenome
    *   Estado (SP, RJ, etc.)
    *   Email
    *   Telefone
    *   Termos de serviço (Checkbox)
