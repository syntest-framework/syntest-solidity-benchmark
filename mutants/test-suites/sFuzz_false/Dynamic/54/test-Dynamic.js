const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicE0lsNar = await Dynamic.new({from: accounts[4]});
		const uintxcYDul = BigInt("745")
		const stringXJp5awG = "oiy7W6gPHKlB8blwM5bI34enSNlf1bEQrumzynp8vSeIdpAUOdQFYbr6dmfJ0Ijg6US2Yl0mRsdOvYoeijkKfC9"
		const uintNIACTIn = BigInt("149")
		const uintKKq2UiG = BigInt("1684")
		const stringBgBd6vj = "YLa6X0vwE9JFu6MqNuFru1p7zz1QNyBieBqBxjjzfxebPPlcj1ql9hPsRg0aTByHNnf2jSI"
		const uintQT8qJnR = BigInt("547")
		const uintytDCxXH = BigInt("776")
		const stringK6DP44 = "XOfGX55YaNlcazCfuHiZmHJeYXc2JC1w7abh101Q2u6JdlAVKqY3ou"
		const uintV1ANwek = BigInt("1981")
		const uintIcwKZKR = BigInt("1404")
		const stringKTlPmKY = "YXZfXogzVYkLnRkO7NB"
		const uintE7DLtGu = BigInt("989")
		const boolniP0r2y = await DynamicE0lsNar.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});
		const booltURa2g2 = await DynamicE0lsNar.yolo.call(uintNIACTIn, stringXJp5awG, uintxcYDul, {from: accounts[0]});
		const boolfOIzebZ = await DynamicE0lsNar.yolo.call(uintQT8qJnR, stringBgBd6vj, uintKKq2UiG, {from: accounts[3]});
		const bool6XPJvM = await DynamicE0lsNar.yolo.call(uintV1ANwek, stringK6DP44, uintytDCxXH, {from: accounts[3]});
		const booll2fjb6a = await DynamicE0lsNar.yolo.call(uintE7DLtGu, stringKTlPmKY, uintIcwKZKR, {from: accounts[4]});

		assert.equal(bool6XPJvM, true)
		assert.equal(boolfOIzebZ, true)
		assert.equal(booll2fjb6a, true)
		assert.equal(boolniP0r2y, true)
		assert.equal(booltURa2g2, true)
	});

	it('test for Dynamic', async () => {
		const Dynamico1zvaKw = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthIZqcok = BigInt("1686")
		const stringr96uiyU = "kq4xQ3PcZGauQChX1fuPY518HbEbqhKMYkZuJMvPjnO7AQli8Zb"
		const uintuEucLL = BigInt("1195")
		const uintLlNgpmY = BigInt("774")
		const stringdkZoJqb = "4DWRxjXvLIGlze1HPo3umGdAxDukztD0UzTG4roCnKuGbxMldjKG5rczIpIAmSYUWuRYt0HNU61LsSRszNxq8"
		const uintpkrL1wZ = BigInt("697")
		const uintTXKfMdH = BigInt("855")
		const stringiRSwdcv = "qKqscIA8iSxCfs7KlgVbE7Q5i8dSviPdqotyP3MyAxSQGsIxlnmqe3Se4wypboM27NTl7Ic"
		const uintveKc7kX = BigInt("101")
		const boolA6tWMPO = await Dynamico1zvaKw.yolo.call(uintuEucLL, stringr96uiyU, uinthIZqcok, {from: accounts[3]});
		const boolxZDkm2d = await Dynamico1zvaKw.yolo.call(uintpkrL1wZ, stringdkZoJqb, uintLlNgpmY, {from: accounts[1]});
		const boolbbnp59N = await Dynamico1zvaKw.yolo.call(uintveKc7kX, stringiRSwdcv, uintTXKfMdH, {from: accounts[1]});
		const boolcVZpiXR = await Dynamico1zvaKw.echidna_test.call({from: accounts[1]});
	});
})