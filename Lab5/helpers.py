"""
Preprocessing text and html (Tokenizing words and sentences, clean HTML, clean text, removing stopwords, stemming and lemmatization)
__author__ : Triskelion user@Kaggle (Thanks: Abhishek Thakur & Foxtrot user@Kaggle)
"""
from nltk import clean_html
from nltk import SnowballStemmer
from nltk import PorterStemmer
from nltk.stem.lancaster import LancasterStemmer
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.corpus import stopwords
import re

# -*- coding: utf-8 -*-

# Tokenizing (Document to list of sentences. Sentence to list of words.)
def tokenize(str):
	'''Tokenizes into sentences, then strips punctuation/abbr, converts to lowercase and tokenizes words'''
	return 	[word_tokenize(" ".join(re.findall(r'\w+', t,flags = re.UNICODE | re.LOCALE)).lower()) 
			for t in sent_tokenize(str.replace("'", ""))]

#Removing stopwords. Takes list of words, outputs list of words.
def remove_stopwords(l_words, lang='english'):
	l_stopwords = stopwords.words(lang)
	content = [w for w in l_words if w.lower() not in l_stopwords]
	return content
		
		
#Stem all words with stemmer of type, return encoded as "encoding"
def stemming(words_l, type="PorterStemmer", lang="english", encoding="utf8"):
	supported_stemmers = ["PorterStemmer","SnowballStemmer","LancasterStemmer","WordNetLemmatizer"]
	if type is False or type not in supported_stemmers:
		return words_l
	else:
		l = []
		if type == "PorterStemmer":
			stemmer = PorterStemmer()
			for word in words_l:
				l.append(stemmer.stem(word).encode(encoding))
		if type == "SnowballStemmer":
			stemmer = SnowballStemmer(lang)
			for word in words_l:
				l.append(stemmer.stem(word).encode(encoding))
		if type == "LancasterStemmer":
			stemmer = LancasterStemmer()
			for word in words_l:
				l.append(stemmer.stem(word).encode(encoding))
		if type == "WordNetLemmatizer": #TODO: context
			wnl = WordNetLemmatizer()
			for word in words_l:
				l.append(wnl.lemmatize(word).encode(encoding))
		return l

#The preprocess pipeline. Returns as lists of tokens or as string. If stemmer_type = False or not supported then no stemming.		
def preprocess_pipeline(str, lang="english", stemmer_type="PorterStemmer", return_as_str=False, 
						do_remove_stopwords=False, do_clean_html=False):
	l = []
	words = []
	sentences = tokenize(str)
	for sentence in sentences:
		if do_remove_stopwords:
			words = remove_stopwords(sentence, lang)
		else:
			words = sentence
		words = stemming(words, stemmer_type)
# 		print(words)
		words = [word.decode("utf-8") for word in words]
# 		print(words)
		if return_as_str:
			l.append(" ".join(words))
		else:
			l.append(words)
	if return_as_str:
		return " ".join(l)
	else:
		return l