const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazSIW0Ec = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const inthleN9P = BigInt("-116")
		const intcmhw0Yv = BigInt("-282")
		const intVSRQWER = BigInt("-1083")
		const intJdD7FPu = BigInt("-1168")
		const intq85FMuX = BigInt("1094")
		const intSyRoWNK = BigInt("938")
		const intPsBX3AU = BigInt("595")
		const intTqrgth = BigInt("1362")
		const intt1T9U2P = BigInt("862")
		const int5IByns = BigInt("474")
		const inth6VkZFX = BigInt("2019")
		const intXL8SgUH = BigInt("1324")
		const int256OCghAWx = await BazSIW0Ec.baz.call(intVSRQWER, intcmhw0Yv, inthleN9P, {from: accounts[5]});
		const int256nE1NmG = await BazSIW0Ec.baz.call(intSyRoWNK, intq85FMuX, intJdD7FPu, {from: accounts[4]});
		const int256rhzQtk2 = await BazSIW0Ec.baz.call(intt1T9U2P, intTqrgth, intPsBX3AU, {from: accounts[1]});
		const boolcpKMY9E = await BazSIW0Ec.echidna_all_states.call({from: accounts[1]});
		const int256bmsRP05 = await BazSIW0Ec.baz.call(intXL8SgUH, inth6VkZFX, int5IByns, {from: accounts[0]});
	});

	it('test for Baz', async () => {
		const BazSEtqsG7 = await Baz.new({from: accounts[4]});
		const intHIAVJqE = BigInt("-196")
		const intMs4zxO1 = BigInt("-1757")
		const intdaXuJEN = BigInt("-1157")
		const intNMjISOr = BigInt("1416")
		const intJjqNsNt = BigInt("-45")
		const intNHg98f = BigInt("1824")
		const intKk7lCn = BigInt("1186")
		const intaedBKuO = BigInt("-217")
		const intPHHKJAx = BigInt("1967")
		const int256xEtka48 = await BazSEtqsG7.baz.call(intdaXuJEN, intMs4zxO1, intHIAVJqE, {from: accounts[4]});
		const int256Q7tKv6 = await BazSEtqsG7.baz.call(intNHg98f, intJjqNsNt, intNMjISOr, {from: accounts[4]});
		const int256egRdoNF = await BazSEtqsG7.baz.call(intPHHKJAx, intaedBKuO, intKk7lCn, {from: accounts[0]});
		const boolA1xQnDf = await BazSEtqsG7.echidna_all_states.call({from: accounts[3]});

		assert.equal(boolA1xQnDf, true)
		assert.equal(int256Q7tKv6, BigInt("5"))
		assert.equal(int256egRdoNF, BigInt("5"))
		assert.equal(int256xEtka48, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazTEnv31Y = await Baz.new({from: accounts[4]});
		const intjMjyYc5 = BigInt("-1974")
		const intZeyOJ4j = BigInt("1886")
		const intPZ78WOy = BigInt("-22")
		const int2569SYFzD = await BazTEnv31Y.baz.call(intPZ78WOy, intZeyOJ4j, intjMjyYc5, {from: accounts[3]});
		const boolNLSazeb = await BazTEnv31Y.echidna_all_states.call({from: accounts[2]});
		const boollqvtZPA = await BazTEnv31Y.echidna_all_states.call({from: accounts[4]});

		assert.equal(boolNLSazeb, true)
		assert.equal(boollqvtZPA, true)
		assert.equal(int2569SYFzD, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BazFUbP2rM = await Baz.new({from: accounts[0]});
		const intESOJdP = BigInt("-1372")
		const intQYkwog5 = BigInt("1312")
		const intrq69wBO = BigInt("1345")
		const inttYtr6DY = BigInt("1698")
		const intpVPej3s = BigInt("-105")
		const intvjjLooB = BigInt("1874")
		const intuneTZ2s = BigInt("-592")
		const intllQWCTe = BigInt("1465")
		const intQ2w9Iae = BigInt("1255")
		const intqUB0V6W = BigInt("83")
		const inthvAy5Ti = BigInt("810")
		const intSGsiKQh = BigInt("291")
		const intnDRofjd = BigInt("-1674")
		const intWeHg9HJ = BigInt("122")
		const intKeSNXAM = BigInt("153")
		const intezRfLr = BigInt("1999")
		const intFz6XSrE = BigInt("-766")
		const intjrrY8un = BigInt("-1101")
		const intt3XagA6 = BigInt("673")
		const intDW4Mbe6 = BigInt("2013")
		const intbacvYiy = BigInt("1392")
		const int256arvHl7o = await BazFUbP2rM.baz.call(intrq69wBO, intQYkwog5, intESOJdP, {from: accounts[3]});
		const int256bpcMsh7 = await BazFUbP2rM.baz.call(intvjjLooB, intpVPej3s, inttYtr6DY, {from: accounts[1]});
		const int256CmSthmx = await BazFUbP2rM.baz.call(intQ2w9Iae, intllQWCTe, intuneTZ2s, {from: accounts[3]});
		const int256WxaDYXn = await BazFUbP2rM.baz.call(intSGsiKQh, inthvAy5Ti, intqUB0V6W, {from: accounts[4]});
		const int256gmlFN7R = await BazFUbP2rM.baz.call(intKeSNXAM, intWeHg9HJ, intnDRofjd, {from: accounts[4]});
		const int256zcxvUn2 = await BazFUbP2rM.baz.call(intjrrY8un, intFz6XSrE, intezRfLr, {from: accounts[4]});
		const int256fctQFvz = await BazFUbP2rM.baz.call(intbacvYiy, intDW4Mbe6, intt3XagA6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(int256CmSthmx, BigInt("4"))
		assert.equal(int256WxaDYXn, BigInt("5"))
		assert.equal(int256arvHl7o, BigInt("3"))
		assert.equal(int256bpcMsh7, BigInt("5"))
		assert.equal(int256fctQFvz, BigInt("5"))
		assert.equal(int256gmlFN7R, BigInt("3"))
		assert.equal(int256zcxvUn2, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazTEnv31Y = await Baz.new({from: accounts[4]});
		const intLOZbGx = BigInt("-778")
		const intfAdNaoh = BigInt("-505")
		const intPCazyrq = BigInt("-231")
		const intInJx7s1 = BigInt("-1974")
		const intuGUrVTS = BigInt("1889")
		const inte9ehOaV = BigInt("42")
		const int256IMl5ad = await BazTEnv31Y.baz.call(intPCazyrq, intfAdNaoh, intLOZbGx, {from: accounts[2]});
		const int2569SYFzD = await BazTEnv31Y.baz.call(inte9ehOaV, intuGUrVTS, intInJx7s1, {from: accounts[3]});
		const boolV77IMdt = await BazTEnv31Y.echidna_all_states.call({from: accounts[0]});

		assert.equal(boolV77IMdt, true)
		assert.equal(int2569SYFzD, BigInt("2"))
		assert.equal(int256IMl5ad, BigInt("1"))
	});
})