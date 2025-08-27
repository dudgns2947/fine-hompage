import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';

const InquiryContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 3rem 0;
  background: linear-gradient(135deg, 
    rgba(255, 107, 53, 0.1) 0%, 
    rgba(44, 62, 80, 0.05) 100%
  );
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;

    .highlight {
      color: var(--primary-color);
    }
  }

  p {
    font-size: clamp(1rem, 2vw, 1.125rem);
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const FormSection = styled.section`
  padding: 4rem 0;
  background: white;
`;

const FormContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FormContainer = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: 3rem;
  box-shadow: var(--shadow);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 600;
    color: var(--text-primary);
    font-size: 1rem;

    .required {
      color: var(--primary-color);
      margin-left: 0.25rem;
    }
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
  background: white;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  }

  &::placeholder {
    color: var(--text-secondary);
  }

  &:invalid {
    border-color: #e74c3c;
  }
`;

const Select = styled.select`
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
  background: white;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-top: 1rem;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin-top: 0.125rem;
    cursor: pointer;
  }

  label {
    font-size: 0.9rem;
    line-height: 1.5;
    cursor: pointer;
    font-weight: normal;

    a {
      color: var(--primary-color);
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 1rem;
  align-self: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContactInfo = styled.section`
  padding: 4rem 0;
  background: var(--bg-secondary);
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  h2 {
    text-align: center;
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 3rem;

    .highlight {
      color: var(--primary-color);
    }
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  text-align: center;

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .info {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;

    .highlight {
      color: var(--primary-color);
      font-weight: 600;
    }
  }
`;

const contactMethods = [
  {
    icon: <Icon type="phone" />,
    title: '전화 상담',
    info: '평일 09:00 - 18:00\n토요일 09:00 - 13:00',
    highlight: '02-1234-5678',
    action: '전화하기'
  },
  {
    icon: <Icon type="envelope" />,
    title: '이메일 문의',
    info: '24시간 접수 가능\n영업일 기준 24시간 내 답변',
    highlight: 'info@goodrich.kr',
    action: '이메일 보내기'
  },
  {
    icon: '💬',
    title: '실시간 채팅',
    info: '평일 09:00 - 18:00\n즉시 상담 가능',
    highlight: '온라인 상담',
    action: '채팅 시작'
  }
];

const Inquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    subject: '',
    message: '',
    agreePrivacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 실제 서비스에서는 API 호출
    setTimeout(() => {
      alert('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        subject: '',
        message: '',
        agreePrivacy: false
      });
    }, 2000);
  };

  return (
    <Layout>
      <SEO 
        title="제휴 및 문의 - FINE"
        description="FINE에 대한 문의사항이나 제휴 제안을 보내주세요. 전문 상담사가 신속하게 답변드립니다."
        keywords="FINE, 문의, 제휴문의, 상담신청, 고객지원"
      />
      
      <InquiryContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="highlight">제휴 및 문의</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              궁금한 점이나 제휴 제안이 있으시면 언제든 연락주세요.
              전문 상담사가 신속하고 정확하게 답변드리겠습니다.
            </motion.p>
          </HeroContent>
        </HeroSection>

        <FormSection>
          <FormContent>
            <FormContainer
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <div className="form-row">
                    <div>
                      <label htmlFor="name">
                        이름<span className="required">*</span>
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="이름을 입력하세요"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email">
                        이메일<span className="required">*</span>
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="이메일을 입력하세요"
                        required
                      />
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="form-row">
                    <div>
                      <label htmlFor="phone">
                        연락처<span className="required">*</span>
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="연락처를 입력하세요"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company">회사명</label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="회사명을 입력하세요"
                      />
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="inquiryType">
                    문의 유형<span className="required">*</span>
                  </label>
                  <Select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">문의 유형을 선택하세요</option>
                    <option value="general">일반 문의</option>
                    <option value="partnership">제휴 문의</option>
                    <option value="insurance">보험 상담</option>
                    <option value="claim">보험금 청구</option>
                    <option value="complaint">불만 접수</option>
                    <option value="other">기타</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="subject">
                    제목<span className="required">*</span>
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="문의 제목을 입력하세요"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="message">
                    문의 내용<span className="required">*</span>
                  </label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="문의 내용을 자세히 입력해주세요"
                    required
                  />
                </FormGroup>

                <CheckboxGroup>
                  <input
                    type="checkbox"
                    id="agreePrivacy"
                    name="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="agreePrivacy">
                    <a href="/privacy" target="_blank">개인정보 수집 및 이용</a>에 동의합니다. (필수)
                  </label>
                </CheckboxGroup>

                <SubmitButton
                  type="submit"
                  size="large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '전송 중...' : '문의 접수하기'}
                </SubmitButton>
              </Form>
            </FormContainer>
          </FormContent>
        </FormSection>

        <ContactInfo>
          <ContactContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              다른 <span className="highlight">연락 방법</span>
            </motion.h2>
            
            <ContactGrid>
              {contactMethods.map((method, index) => (
                <ContactCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="icon">{method.icon}</span>
                  <h3>{method.title}</h3>
                  <div className="info">
                    {method.info.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                    <div className="highlight">{method.highlight}</div>
                  </div>
                  <Button variant="outline">
                    {method.action}
                  </Button>
                </ContactCard>
              ))}
            </ContactGrid>
          </ContactContent>
        </ContactInfo>
      </InquiryContainer>
    </Layout>
  );
};

export default Inquiry;
