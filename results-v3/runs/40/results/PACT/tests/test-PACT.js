const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTLyk2OUV = await PACT.new({from: accounts[2]});
		const addressPVEmyyY = accounts[4]
		const uinthPboHZU = BigInt("448")
		const addressFTMLuV = accounts[2]
		const addresshgcdyLq = accounts[5]
		const boolMrWQXX3 = await PACTLyk2OUV.setupBasePool.call(addressPVEmyyY, {from: accounts[2]});
		const boolnrF1IoY = await PACTLyk2OUV.transferFrom.call(addresshgcdyLq, addressFTMLuV, uinthPboHZU, {from: accounts[4]});

		await expect(PACTLyk2OUV.setupBasePool.call(addressPVEmyyY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTJSF6CJg = await PACT.new({from: accounts[4]});
		const addressqaRXVoo = accounts[2]
		const addressgobUeg2 = accounts[0]
		const uintRNLG8pQ = BigInt("563")
		const addressx7Mb2s = accounts[4]
		const boolJpiLkg = await PACTJSF6CJg.setupReserve.call(addressqaRXVoo, {from: accounts[5]});
		const booloeFjCZw = await PACTJSF6CJg.setupRewards.call(addressgobUeg2, {from: accounts[4]});
		const boolapfl1Kf = await PACTJSF6CJg.transfer.call(addressx7Mb2s, uintRNLG8pQ, {from: accounts[4]});

		await expect(PACTJSF6CJg.setupReserve.call(addressqaRXVoo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTvpd6ACf = await PACT.new({from: accounts[2]});
		const uintTd32rVA = BigInt("803")
		const addressK7KPOWG = accounts[1]
		const addressWN2Bki2 = accounts[0]
		const uintmA0qg4O = BigInt("952")
		const addresscwxJtvd = accounts[4]
		const boolcncqOZ = await PACTvpd6ACf.transfer.call(addressK7KPOWG, uintTd32rVA, {from: accounts[2]});
		const boolhLCcfAY = await PACTvpd6ACf.setupTeam.call(addressWN2Bki2, {from: accounts[0]});
		const boolAVulA9l = await PACTvpd6ACf.approve.call(addresscwxJtvd, uintmA0qg4O, {from: accounts[4]});

		await expect(PACTvpd6ACf.transfer.call(addressK7KPOWG, uintTd32rVA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTLh0EDlJ = await PACT.new({from: accounts[0]});
		const addressfjADGb0 = accounts[4]
		const addressYiGxca = accounts[1]
		const stringF7vMBBo = await PACTLh0EDlJ.name.call({from: accounts[0]});
		const stringqEsrfM7 = await PACTLh0EDlJ.symbol.call({from: accounts[5]});
		const boolaDoAjsu = await PACTLh0EDlJ.setupFarming.call(addressfjADGb0, {from: "0x0000000000000000000000000000000000000001"});
		const uintBaXR8el = await PACTLh0EDlJ.balanceOf.call(addressYiGxca, {from: accounts[2]});
		const stringiue8jxR = await PACTLh0EDlJ.name.call({from: accounts[2]});

		assert.equal(stringF7vMBBo, "P2PB2B community token")
		assert.equal(stringqEsrfM7, "PACT")
		await expect(PACTLh0EDlJ.setupFarming.call(addressfjADGb0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTolfy8K1 = await PACT.new({from: accounts[3]});
		const address6NYzKf = accounts[1]
		const uintgdOzMXb = BigInt("605")
		const addressJAnNtHK = accounts[3]
		const addressb7EAAeS = accounts[1]
		const boolmXTTHUg = await PACTolfy8K1.setupRewards.call(address6NYzKf, {from: accounts[1]});
		const bool5O2CAQ = await PACTolfy8K1.approve.call(addressJAnNtHK, uintgdOzMXb, {from: accounts[1]});
		const stringA3sJkmK = await PACTolfy8K1.name.call({from: accounts[2]});
		const boolrVFPLG = await PACTolfy8K1.setupRewards.call(addressb7EAAeS, {from: accounts[3]});

		await expect(PACTolfy8K1.setupRewards.call(address6NYzKf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTsgOmpSg = await PACT.new({from: accounts[4]});
		const addressrkIHynH = accounts[3]
		const stringv9SEKov = await PACTsgOmpSg.symbol.call({from: accounts[4]});
		const boolovkyukb = await PACTsgOmpSg.setupTeam.call(addressrkIHynH, {from: accounts[3]});

		assert.equal(stringv9SEKov, "PACT")
		await expect(PACTsgOmpSg.setupTeam.call(addressrkIHynH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTKV7psj = await PACT.new({from: accounts[3]});
		const addressO2ZA79q = accounts[2]
		const uintQVwZcEK = await PACTKV7psj.totalSupply.call({from: accounts[2]});
		const boolzYduBe2 = await PACTKV7psj.setupBasePool.call(addressO2ZA79q, {from: "0x0000000000000000000000000000000000000001"});
		const stringatqevlc = await PACTKV7psj.name.call({from: accounts[0]});

		assert.equal(uintQVwZcEK, BigInt("1000000000000000000000000000"))
		await expect(PACTKV7psj.setupBasePool.call(addressO2ZA79q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTvLdFjow = await PACT.new({from: accounts[2]});
		const uintiWrOWU0 = BigInt("1228")
		const addressTJ9jwD = accounts[2]
		const addressBWJIck7 = accounts[4]
		const uintEJfqqSM = BigInt("1664")
		const addresswmSg5dV = accounts[1]
		const boolj55I6r9 = await PACTvLdFjow.transferFrom.call(addressBWJIck7, addressTJ9jwD, uintiWrOWU0, {from: accounts[3]});
		const boolnTfAIbX = await PACTvLdFjow.transfer.call(addresswmSg5dV, uintEJfqqSM, {from: accounts[1]});
		const stringnw2OrPK = await PACTvLdFjow.symbol.call({from: accounts[4]});

		await expect(PACTvLdFjow.transferFrom.call(addressBWJIck7, addressTJ9jwD, uintiWrOWU0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTKV7psj = await PACT.new({from: accounts[3]});
		const uintLLDbXZX = BigInt("2017")
		const addresslX68wRM = accounts[0]
		const addressE23XgY = accounts[5]
		const uintanlLb6Q = BigInt("1002")
		const addresshyLcLIp = accounts[4]
		const addressCBMCSW = accounts[0]
		const addressebo5GeK = accounts[1]
		const addressxud6Z6u = accounts[2]
		const uintQVwZcEK = await PACTKV7psj.totalSupply.call({from: accounts[2]});
		const boolC0SKYya = await PACTKV7psj.approve.call(addresslX68wRM, uintLLDbXZX, {from: accounts[2]});
		const boolPgBvhGC = await PACTKV7psj.setupTeam.call(addressE23XgY, {from: accounts[3]});
		const booln3Nf9r6 = await PACTKV7psj.burn.call(addresshyLcLIp, uintanlLb6Q, {from: accounts[3]});
		const uintJyMPJBF = await PACTKV7psj.allowance.call(addressebo5GeK, addressCBMCSW, {from: accounts[4]});
		const boolzYduBe2 = await PACTKV7psj.setupBasePool.call(addressxud6Z6u, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolC0SKYya, true)
		assert.equal(uintQVwZcEK, BigInt("1000000000000000000000000000"))
		await expect(PACTKV7psj.setupTeam.call(addressE23XgY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTnssUv6d = await PACT.new({from: accounts[3]});
		const addressdfRuERZ = accounts[4]
		const uintwY1Sv34 = BigInt("1769")
		const addressphSnX2I = accounts[0]
		const addressFllDad4 = accounts[0]
		const addressX95WWAM = accounts[2]
		const uintotGNgol = BigInt("1035")
		const addresszqiKfcF = accounts[3]
		const addressygNVyMU = accounts[1]
		const uint8xaEWneO = await PACTnssUv6d.decimals.call({from: accounts[1]});
		const boolH3yUKYX = await PACTnssUv6d.setupReserve.call(addressdfRuERZ, {from: accounts[0]});
		const boolKBsZupD = await PACTnssUv6d.approve.call(addressphSnX2I, uintwY1Sv34, {from: accounts[3]});
		const uintIdwpXmI = await PACTnssUv6d.allowance.call(addressX95WWAM, addressFllDad4, {from: accounts[5]});
		const boolxhte2m6 = await PACTnssUv6d.transferFrom.call(addressygNVyMU, addresszqiKfcF, uintotGNgol, {from: accounts[1]});
		const uinteAqfqvu = await PACTnssUv6d.totalSupply.call({from: accounts[0]});

		assert.equal(uint8xaEWneO, BigInt("18"))
		await expect(PACTnssUv6d.setupReserve.call(addressdfRuERZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTLh0EDlJ = await PACT.new({from: accounts[0]});
		const addressKz9McRZ = accounts[1]
		const addressa1lCNC7 = accounts[1]
		const addressZToNsQZ = accounts[4]
		const address8T3cYs = accounts[1]
		const uintgI3LxR = await PACTLh0EDlJ.allowance.call(addressa1lCNC7, addressKz9McRZ, {from: accounts[2]});
		const stringF7vMBBo = await PACTLh0EDlJ.name.call({from: accounts[0]});
		const stringqEsrfM7 = await PACTLh0EDlJ.symbol.call({from: accounts[5]});
		const boolaDoAjsu = await PACTLh0EDlJ.setupFarming.call(addressZToNsQZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintBaXR8el = await PACTLh0EDlJ.balanceOf.call(address8T3cYs, {from: accounts[2]});
		const stringiue8jxR = await PACTLh0EDlJ.name.call({from: accounts[2]});

		assert.equal(stringF7vMBBo, "P2PB2B community token")
		assert.equal(stringqEsrfM7, "PACT")
		assert.equal(uintgI3LxR, BigInt("0"))
		await expect(PACTLh0EDlJ.setupFarming.call(addressZToNsQZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTMsMmCsc = await PACT.new({from: accounts[1]});
		const addressInmbeTb = accounts[3]
		const addressjdPi6f = accounts[5]
		const addressJzlhruZ = accounts[5]
		const uintuCEHrER = await PACTMsMmCsc.balanceOf.call(addressInmbeTb, {from: accounts[3]});
		const boolDchMojq = await PACTMsMmCsc.setupRewards.call(addressjdPi6f, {from: accounts[4]});
		const stringTxQGbJb = await PACTMsMmCsc.name.call({from: accounts[2]});
		const bool2Dfolg = await PACTMsMmCsc.setupTeam.call(addressJzlhruZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintuCEHrER, BigInt("0"))
		await expect(PACTMsMmCsc.setupRewards.call(addressjdPi6f, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTWTwFrTN = await PACT.new({from: accounts[4]});
		const uintQRhcjwj = BigInt("558")
		const addressdWvxwa7 = accounts[3]
		const addressDidmhy = "0x0000000000000000000000000000000000000001"
		const addressXOY6tqM = accounts[1]
		const address6cUEsA = "0x0000000000000000000000000000000000000001"
		const addressXJrK7W0 = "0x0000000000000000000000000000000000000001"
		const booliXweaqL = await PACTWTwFrTN.burn.call(addressdWvxwa7, uintQRhcjwj, {from: accounts[1]});
		const boolkvqEZD2 = await PACTWTwFrTN.setupReserve.call(addressDidmhy, {from: accounts[5]});
		const boolKhZDdAX = await PACTWTwFrTN.setupFarming.call(addressXOY6tqM, {from: "0x0000000000000000000000000000000000000001"});
		const booliogpAu = await PACTWTwFrTN.setupRewards.call(address6cUEsA, {from: accounts[1]});
		const boolEAg47CF = await PACTWTwFrTN.setupRewards.call(addressXJrK7W0, {from: accounts[2]});

		await expect(PACTWTwFrTN.burn.call(addressdWvxwa7, uintQRhcjwj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTW7isvuD = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRFtJJQP = BigInt("731")
		const addressmU583Y3 = "0x0000000000000000000000000000000000000001"
		const uintR7ltO9m = BigInt("1985")
		const addressasD8Ni8 = accounts[5]
		const boolPp2Qz8x = await PACTW7isvuD.transfer.call(addressmU583Y3, uintRFtJJQP, {from: accounts[4]});
		const stringOtnWp4D = await PACTW7isvuD.name.call({from: accounts[4]});
		const boolqidstYh = await PACTW7isvuD.transfer.call(addressasD8Ni8, uintR7ltO9m, {from: accounts[0]});
	});
})