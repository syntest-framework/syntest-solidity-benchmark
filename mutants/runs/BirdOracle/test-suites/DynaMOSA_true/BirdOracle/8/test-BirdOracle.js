const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleP42ATdB = await BirdOracle.new({from: accounts[4]});
		const stringe07uOQY = "GQdFmjvhn6W53azDIV7T7Wq3byWBM7DrQKEDjbUdOEdLI6UKNlEuvK"
		const stringB6Ai1P = "F2PQLe0juCi85TGVIw0LUcD899g3xFjffry2DVjtx6unDEublsMqmlbY9zEFBE9EsNqhQW7LKs"
		const uintWQyO2S = BigInt("1333")
		const uintOuvGSAR = BigInt("778")
		const stringIITPw5s = "tmOip32ceiNsVGMlbd3FIToEBgRCI7yo2cFHTPbBWva1COdmRI"
		const uintaMxJwZ2 = BigInt("833")
		const stringmmajuKw = "FiHJa9nee2fbVKGxIUmW44zvfAR9rHYYrH"
		const 
MhuQ6Jp = await BirdOracleP42ATdB.newChainRequest.call(stringB6Ai1P, stringe07uOQY, {from: accounts[1]});
		const stringiiBZAvt = await BirdOracleP42ATdB.substring.call(stringIITPw5s, uintOuvGSAR, uintWQyO2S, {from: accounts[1]});
		const stringWnxrv8F = await BirdOracleP42ATdB.substring.call(stringmmajuKw, uintaMxJwZ2, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclezbJqtB2 = await BirdOracle.new({from: accounts[0]});
		const addressq4nXncm = accounts[2]
		const stringKag7iZ8 = "3XybpjOTmWyxKP0oiIO8yr8qz7UyOJbeoCnS61YBYwDB6ib1rxHcQZLE6HyK7vtMf4kPGPznNaDzJUr8686Hp1pK"
		const uintcGyLYJy = await BirdOraclezbJqtB2.getRating.call({from: accounts[0]});
		const uintG2JrZG6 = await BirdOraclezbJqtB2.getRatingByAddress.call(addressq4nXncm, {from: "0x0000000000000000000000000000000000000001"});
		const uintjiC85w8 = await BirdOraclezbJqtB2.getRating.call({from: accounts[1]});
		const stringi1eepUC = await BirdOraclezbJqtB2.extractAddress.call(stringKag7iZ8, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleRahWZRQ = await BirdOracle.new({from: accounts[1]});
		const uintJgBq0m = BigInt("1915")
		const uintWhx1eMU = BigInt("1375")
		const stringjWnuLpf = "uvvwfMQ8q3YGFWSbHc3ejxg8Y14GnWSu3GkdcyRD8nycryYA2EALTb2Tt"
		const stringEV1rEd3 = "8HGIhHnS0kdNsYFT4Mz96fdubmIYRt3kZl"
		const stringzAMd44 = "4DblNXvKozE4H4nFQUZmofLHPOaWoS6YrHTMuiwQyGAzkj5cHGkPDDyOzrdiKt6"
		const stringlJEqWSH = await BirdOracleRahWZRQ.substring.call(stringjWnuLpf, uintWhx1eMU, uintJgBq0m, {from: accounts[4]});
		const stringevrgEL = await BirdOracleRahWZRQ.extractAddress.call(stringEV1rEd3, {from: accounts[1]});
		const stringxsBFfI6 = await BirdOracleRahWZRQ.extractAddress.call(stringzAMd44, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleV9BGIp2 = await BirdOracle.new({from: accounts[4]});
		const uintLuGZv8M = BigInt("1300")
		const uintRkGvDUB = BigInt("1494")
		const uintXNfUw6A = BigInt("264")
		const stringqlhLzAB = "RTjqglwXAlBGf1YQOTQdS3IlasbPHUoKYibHM7yqXv7oV8goRLt06VsDMAPPzoWB"
		const stringEJdqbxC = "MFRqGPqx41LLdnmJSfuYtPgSJF7UlUZ32jwwEKx9H62675uOIAsqG5"
		const 
jHQnD1E = await BirdOracleV9BGIp2.updatedChainRequest.call(uintRkGvDUB, uintLuGZv8M, {from: accounts[3]});
		const uintjtaaxt6 = await BirdOracleV9BGIp2.getRating.call({from: accounts[0]});
		const stringJWTcmKl = await BirdOracleV9BGIp2.substring.call(stringqlhLzAB, uintXNfUw6A, {from: accounts[1]});
		const stringrSotj2o = await BirdOracleV9BGIp2.extractAddress.call(stringEJdqbxC, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleDD8epAP = await BirdOracle.new({from: accounts[4]});
		const addresspVmtPcM = accounts[0]
		const stringIKXN8Tz = "9creQu7UqPy4yyVVxzHB2Q1WxYxV4LwJ5RTRCWbGH3ct8f9ExeBRRwtst3Ax"
		const uintzOxBbXU = BigInt("1985")
		const uintNvXloE = BigInt("2043")
		const stringirL8sfQ = "WdmOxRnhvaGME9HVjAyROnPxlHFOrhUrQsnJumaZN3InpwL927ep7"
		const addressCGjIwDK = accounts[4]
		const uintBwzyA5O = await BirdOracleDD8epAP.getRatingByAddress.call(addresspVmtPcM, {from: accounts[1]});
		const uintPksy6yO = await BirdOracleDD8epAP.getRating.call({from: accounts[4]});
		const uintwuH6P3T = await BirdOracleDD8epAP.getRatingByAddressString.call(stringIKXN8Tz, {from: accounts[2]});
		const stringaWbb4ks = await BirdOracleDD8epAP.substring.call(stringirL8sfQ, uintNvXloE, uintzOxBbXU, {from: accounts[0]});
		const uintLO6Br8v = await BirdOracleDD8epAP.getRating.call({from: accounts[1]});
		const uintUQp3M6Z = await BirdOracleDD8epAP.getRatingByAddress.call(addressCGjIwDK, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleM4bw9GI = await BirdOracle.new({from: accounts[1]});
		const uintVDcXcM = BigInt("631")
		const stringctxA2Vt = "LlFPnTJvhteNQ5An6fVCX5V5MdC1lECDlspyvqcBsM"
		const addressC2bWlIP = accounts[2]
		const addressz0X9rQ6 = accounts[3]
		const stringXM6wqL = await BirdOracleM4bw9GI.substring.call(stringctxA2Vt, uintVDcXcM, {from: accounts[5]});
		const uintUKFcSCv = await BirdOracleM4bw9GI.getRatingByAddress.call(addressC2bWlIP, {from: accounts[2]});
		const uintXtndjw = await BirdOracleM4bw9GI.getRatingByAddress.call(addressz0X9rQ6, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYbRC49j = await BirdOracle.new({from: accounts[4]});
		const uintkrsdp1H = BigInt("379")
		const stringajHGVyq = "jK4cGnHYLoFkfdgdEVKxAxDCV"
		const stringYHDWuXE = "QCDxYhKBXrNf2oZCYn7DTHKmTHd59wHi2jDL"
		const uintY2C3erU = await BirdOracleYbRC49j.getRating.call({from: accounts[0]});
		const stringXFEccVr = await BirdOracleYbRC49j.substring.call(stringajHGVyq, uintkrsdp1H, {from: accounts[3]});
		const uintnukg6eo = await BirdOracleYbRC49j.getRatingByAddressString.call(stringYHDWuXE, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleM2ui5no = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const stringMLNWIax = "JTufxcPqkyla9LY6uamK23uhaiKBGm5c7XzrtASUXSbLBJOLkdoMzXTunGLoa8DDA7anO59FwrwgDImkKvmmjnvinyhl"
		const uintT0sMx4y = BigInt("234")
		const stringLGaGIK0 = "8yM10arg56p"
		const uintkMdeesY = BigInt("117")
		const uintiIdv1FN = BigInt("741")
		const stringyPQR2EX = "nbEpBIh"
		const string1GnC6A = "pjU1ae5S18L7dwP6inEc02vCUNwl3uUDu4IOqvC2iYxJxrK8eV"
		const uintyug1FFB = BigInt("1971")
		const stringllaBioz = "sifbqc"
		const stringpSL7Zb5 = "eHQ5uIa2Cun3qwq9jpaRIpBlR4J2gwbRqgqDYzhwJD6WdRIOREDj6H"
		const uintHDz3RnT = await BirdOracleM2ui5no.getRatingByAddressString.call(stringMLNWIax, {from: accounts[0]});
		const stringJ9k1kRI = await BirdOracleM2ui5no.substring.call(stringLGaGIK0, uintT0sMx4y, {from: accounts[4]});
		const stringkiolYwE = await BirdOracleM2ui5no.substring.call(stringyPQR2EX, uintiIdv1FN, uintkMdeesY, {from: accounts[0]});
		const addressGpf1cuX = await BirdOracleM2ui5no.parseAddr.call(string1GnC6A, {from: accounts[4]});
		const stringssMAkyR = await BirdOracleM2ui5no.substring.call(stringllaBioz, uintyug1FFB, {from: accounts[0]});
		const uintvmEAWbt = await BirdOracleM2ui5no.getRatingByAddressString.call(stringpSL7Zb5, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleP42ATdB = await BirdOracle.new({from: accounts[4]});
		const uintEQP8Zzs = BigInt("124")
		const stringGlIPS0R = "szFWxxtA9v5syAh19WBup3ebK2Tw"
		const stringe07uOQY = "GQdFmjvhn6W53azDIV7T7Wq3byWBMDrQKEDjbUdOEdLI6UKNlEuvK"
		const stringB6Ai1P = "F2PQLe0juCi85TGTIw0LUcD899g3xFjffry2DVjtx6unDEublsMqmlbY9zEFBE9EsNqhQW7LKs"
		const stringX65QKC = await BirdOracleP42ATdB.substring.call(stringGlIPS0R, uintEQP8Zzs, {from: "0x0000000000000000000000000000000000000001"});
		const 
MhuQ6Jp = await BirdOracleP42ATdB.newChainRequest.call(stringB6Ai1P, stringe07uOQY, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleP42ATdB = await BirdOracle.new({from: accounts[4]});
		const uintkj2svhz = BigInt("702")
		const stringwwAwKmF = "GcxP86n1jfGJiT4eyMXYAWLTOtbmPgu390GB"
		const uintxEFQJYa = BigInt("1379")
		const uintl0zj4x = BigInt("2037")
		const stringe07uOQY = "GQdFmjvhn6W53azDIV7T7Wq3byWBMDrQKEDjbUdOEdLI6UKNlEuvK"
		const stringB6Ai1P = "F2PQLe0juCi85TGVIw0LUcD899g3xFjffry2DVjtx6unDEublsMqmlbY9zEFIE9EsNqhQW7LKs"
		const uintRNXK8pl = await BirdOracleP42ATdB.getRating.call({from: accounts[2]});
		const stringsgYKrxe = await BirdOracleP42ATdB.substring.call(stringwwAwKmF, uintkj2svhz, {from: accounts[4]});
		const 
LFhgSKM = await BirdOracleP42ATdB.updatedChainRequest.call(uintl0zj4x, uintxEFQJYa, {from: accounts[0]});
		const 
MhuQ6Jp = await BirdOracleP42ATdB.newChainRequest.call(stringB6Ai1P, stringe07uOQY, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleP42ATdB = await BirdOracle.new({from: accounts[4]});
		const uintZeOHIaQ = BigInt("132")
		const stringSpQHUoI = "yne9UdQNtwRgGy41Q58wCSCtYu1sFGHkm01RxHzbmEwNLCYkd8K0UJa0wJQOOVrgkxuyzqsgz9P7hXic2"
		const stringe07uOQY = "GQdFmjvhn6W53azDIV7T7Wq3byWBMDrQKEDjbUOEdLI6UKNlEuvK"
		const stringB6Ai1P = "F2PQLe0juCi85TGVIw0LUcD899g3xFjffry2DVjtx6unDEublsMqmlbY9zEFBE9EsNqhQW7LKs"
		const uintBvhkES6 = await BirdOracleP42ATdB.getRating.call({from: accounts[4]});
		const stringPyzLaDb = await BirdOracleP42ATdB.substring.call(stringSpQHUoI, uintZeOHIaQ, {from: accounts[2]});
		const 
MhuQ6Jp = await BirdOracleP42ATdB.newChainRequest.call(stringB6Ai1P, stringe07uOQY, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleP42ATdB = await BirdOracle.new({from: accounts[4]});
		const uint4mf2uu = BigInt("807")
		const stringmmajuKw = "FiHJa9nee2fbVKGxIUmW44zvfAR9rHYYrH"
		const stringWnxrv8F = await BirdOracleP42ATdB.substring.call(stringmmajuKw, uint4mf2uu, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleP42ATdB = await BirdOracle.new({from: accounts[4]});
		const uintb5l5bBQ = BigInt("1168")
		const stringPxQk0Jt = "VmAEbir4XIWu8qgddRqXcAu2adXIAAbo7mFox"
		const uintMuIH19W = BigInt("156")
		const uintgY7lA8m = BigInt("973")
		const stringrRMMUrS = "vsnDhKZ8XzSTmxQEr6P6bd"
		const uintdbIavPf = BigInt("603")
		const stringIH3EnVS = "n2CasxaUs0BDMqMF5"
		const stringe07uOQY = "GQdFmjvhn6W53aDIV7T7Wq3byWBMDrQKEDjbUdOEdLI6UKNlEuvK"
		const stringB6Ai1P = "F2PQLe0juCi85TGVIw0LUcD899g3xFjffry2DVjtx6unDEublsMqmlbY9zEFBE9EsNqhQW7LKs"
		const stringXwl9evr = await BirdOracleP42ATdB.substring.call(stringPxQk0Jt, uintb5l5bBQ, {from: accounts[0]});
		const stringGGqzt6n = await BirdOracleP42ATdB.substring.call(stringrRMMUrS, uintgY7lA8m, uintMuIH19W, {from: accounts[1]});
		const stringjgsmNuc = await BirdOracleP42ATdB.substring.call(stringIH3EnVS, uintdbIavPf, {from: accounts[2]});
		const 
MhuQ6Jp = await BirdOracleP42ATdB.newChainRequest.call(stringB6Ai1P, stringe07uOQY, {from: accounts[1]});
	});
})