from nltk import PorterStemmer
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.corpus import stopwords
import re

    
# Tokenizing (Document to list of sentences. Sentence to list of words.)
def tokenize(str):
    '''Tokenizes into sentences, then strips punctuation/abbr, converts to lowercase and tokenizes words'''
    return [word_tokenize(" ".join(re.findall(r'\w+', t,flags = re.UNICODE | re.LOCALE)).lower()) 
            for t in sent_tokenize(str.replace("'", ""))]

#Removing stopwords. Takes list of words, outputs list of words.
def remove_stopwords(l_words):
    l_stopwords = stopwords.words('english')
    content = [w for w in l_words if w.lower() not in l_stopwords]
    return content


#Stem all words with stemmer of type, return encoded as "encoding"
def stemming(words_l):
    l = []
    stemmer = PorterStemmer()
    for word in words_l:
        l.append(stemmer.stem(word))
    return l


#The preprocess pipeline. Returns as lists of tokens or as string. If stemmer_type = False or not supported then no stemming.		
def preprocess_pipeline(str):
    l = []
    words = []
    sentences = tokenize(str)
    for sentence in sentences:
        words = remove_stopwords(sentence)
        words = stemming(words)
        l.extend(words)
    return l
