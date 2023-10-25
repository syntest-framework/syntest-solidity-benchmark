const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintmQFd1F = BigInt("1768")
		const stringdqn8ZiU = "e0ohYPJPBLS1Anl7g7xfgPugaPbpU2ACdM22nhfyXpeFbkGbiBXM9CZfO55oR"
		const stringjFttBAG = "H"
		const GreenMarkTrustoxltOip = await GreenMarkTrust.new(uintmQFd1F, stringdqn8ZiU, stringjFttBAG, {from: accounts[2]});
		const uintMfozfm4 = BigInt("1975")
		const addressJFdKwC = accounts[2]
		const addressUCH0wEK = accounts[1]
		const uintMUpimP8 = BigInt("257")
		const uinteSy7eSK = BigInt("983")
		const addressd0PnHZ1 = accounts[3]
		const uint44Aw6n = BigInt("880")
		const addressuYzSCy = accounts[4]
		const uintI7BzG7r = BigInt("999")
		const addressv5HCcNm = accounts[1]
		const addressipCQH1f = accounts[1]
		const uintKAYgj4O = BigInt("1649")
//		const boolpnUSXg = await GreenMarkTrustoxltOip.transferFrom.call(addressUCH0wEK, addressJFdKwC, uintMfozfm4, {from: accounts[0]});
//		const booloFBCv7X = await GreenMarkTrustoxltOip.burn.call(uintMUpimP8, {from: accounts[2]});
//		const boolnqGO1l7 = await GreenMarkTrustoxltOip.approve.call(addressd0PnHZ1, uinteSy7eSK, {from: accounts[3]});
//		const booln8gT3Q9 = await GreenMarkTrustoxltOip.approve.call(addressuYzSCy, uint44Aw6n, {from: accounts[2]});
//		const booli0Jt9pL = await GreenMarkTrustoxltOip.transferFrom.call(addressipCQH1f, addressv5HCcNm, uintI7BzG7r, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWxQWBJH = await GreenMarkTrustoxltOip.burn.call(uintKAYgj4O, {from: accounts[3]});

		await expect(GreenMarkTrustoxltOip.transferFrom.call(addressUCH0wEK, addressJFdKwC, uintMfozfm4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uinta8SzaUj = BigInt("856")
		const stringTHX8GYk = "OTbYY3pWYGtL5lk85klFwxKzdoR6teEDwTh7LaMw21vQuboHd6"
		const stringWqwtHol = "ctFCpHvb4BDl5zzgDYKlCWBb2JBB5g1O5RDm"
		const GreenMarkTrustrCo0SH7 = await GreenMarkTrust.new(uinta8SzaUj, stringTHX8GYk, stringWqwtHol, {from: accounts[1]});
		const uintoiItOfs = BigInt("1201")
		const uintw9zHPZd = BigInt("998")
		const uintV840PF9 = BigInt("1080")
		const uintQOY6ni0 = BigInt("810")
		const addressb6rNnlU = "0x0000000000000000000000000000000000000001"
		const bytekQZeRJK = "0x0f20"
		const uintgBaNAM3 = BigInt("1835")
		const addressr7Yk3e = accounts[4]
//		const boolIsEoVet = await GreenMarkTrustrCo0SH7.burn.call(uintoiItOfs, {from: accounts[3]});
//		const boolMZstmpT = await GreenMarkTrustrCo0SH7.burn.call(uintw9zHPZd, {from: accounts[3]});
//		const boolJLB6OUu = await GreenMarkTrustrCo0SH7.burn.call(uintV840PF9, {from: accounts[3]});
//		const boolKzgyIX4 = await GreenMarkTrustrCo0SH7.approve.call(addressb6rNnlU, uintQOY6ni0, {from: accounts[2]});
//		const boolFvqO91z = await GreenMarkTrustrCo0SH7.approveAndCall.call(addressr7Yk3e, uintgBaNAM3, bytekQZeRJK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GreenMarkTrustrCo0SH7.burn.call(uintoiItOfs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintJYXoquc = BigInt("255")
		const stringhAoomg = "f0F2NVrtRXryVPvOLXGAnkvzycxJ1Iyl5vkb99uRdJg6W5TS8KX7tnp639E9DWiVKAzSI79"
		const stringkSrdX9A = "oUFdUKSrG2IxMwsS9QwXVIcE9KLMvkX5CzGxNAVTdk9fxMUxiM4ZFyBDB3Voh"
		const GreenMarkTrustGKfo0V8 = await GreenMarkTrust.new(uintJYXoquc, stringhAoomg, stringkSrdX9A, {from: accounts[1]});
		const uintMIazKCs = BigInt("284")
		const uintkhx1Jyp = BigInt("406")
		const addressMs4m3V3 = accounts[4]
		const booleMAJ2kq = await GreenMarkTrustGKfo0V8.burn.call(uintMIazKCs, {from: accounts[1]});
//		const boolaD1e0WX = await GreenMarkTrustGKfo0V8.transfer.call(addressMs4m3V3, uintkhx1Jyp, {from: accounts[4]});

		assert.equal(booleMAJ2kq, true)
		await expect(GreenMarkTrustGKfo0V8.transfer.call(addressMs4m3V3, uintkhx1Jyp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintLm0tmsH = BigInt("266")
		const stringpHdnsV1 = "qWbF6tX2"
		const stringcH1DcOX = "ehyCqwR"
		const GreenMarkTrust7QVoek = await GreenMarkTrust.new(uintLm0tmsH, stringpHdnsV1, stringcH1DcOX, {from: accounts[2]});
		const uintg6KF3oK = BigInt("1049")
		const addressh19uiQZ = accounts[1]
		const uintCXMQGuF = BigInt("1262")
		const addressPVjyo1 = accounts[2]
		const bytenAVICEb = "0x0117151618041e"
		const uintgKwxWcq = BigInt("1523")
		const addressTQFpb2a = accounts[1]
		const uintHRGZKMB = BigInt("636")
		const addressC8llvxS = accounts[3]
		const boolhqMuU0D = await GreenMarkTrust7QVoek.approve.call(addressh19uiQZ, uintg6KF3oK, {from: accounts[0]});
		const booliaksXD = await GreenMarkTrust7QVoek.approve.call(addressPVjyo1, uintCXMQGuF, {from: accounts[5]});
//		const boolGp1jsPR = await GreenMarkTrust7QVoek.approveAndCall.call(addressTQFpb2a, uintgKwxWcq, bytenAVICEb, {from: accounts[1]});
//		const boolsijihdZ = await GreenMarkTrust7QVoek.approve.call(addressC8llvxS, uintHRGZKMB, {from: accounts[0]});

		assert.equal(boolhqMuU0D, true)
		assert.equal(booliaksXD, true)
		await expect(GreenMarkTrust7QVoek.approveAndCall.call(addressTQFpb2a, uintgKwxWcq, bytenAVICEb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintcj9LAWD = BigInt("1822")
		const stringtsMqjer = "rB4NakWteoBYSgkYEQyK1KPtFy4cf2NFUnjnoPbvlicXs4t3ysyo"
		const stringCoTGPCB = "AeYsJCI"
		const GreenMarkTrustLrjYA6I = await GreenMarkTrust.new(uintcj9LAWD, stringtsMqjer, stringCoTGPCB, {from: "0x0000000000000000000000000000000000000001"});
		const uintoFUcN3I = BigInt("1562")
		const address5vA8ex = accounts[3]
		const uintTDmUlkb = BigInt("1570")
		const uintbjpwvy = BigInt("1628")
		const addressNcXJMvN = accounts[5]
		const uintc1u9hzQ = BigInt("1136")
		const addressZig8Y1z = accounts[1]
		const addresssvGX1a4 = accounts[2]
		const boolpxNK8J = await GreenMarkTrustLrjYA6I.burnFrom.call(address5vA8ex, uintoFUcN3I, {from: accounts[3]});
		const boolGnprMF = await GreenMarkTrustLrjYA6I.burn.call(uintTDmUlkb, {from: accounts[0]});
		const boolW7EOMjJ = await GreenMarkTrustLrjYA6I.approve.call(addressNcXJMvN, uintbjpwvy, {from: accounts[1]});
		const booll499mkq = await GreenMarkTrustLrjYA6I.transferFrom.call(addresssvGX1a4, addressZig8Y1z, uintc1u9hzQ, {from: accounts[3]});
	});

	it('test for GreenMarkTrust', async () => {
		const uinthXWW8uQ = BigInt("1106")
		const stringqb29ChB = "F8SUspAjHLw6Qgt0uiL5FoKb0K59OxnEDuKDOy8m5ZdYRcBl6pVnQmW7Np7ITxGazqzzJQWKxlrwo"
		const stringpYGerMV = "PMN5muOxoxPJ3hZJ9MAmkkEbRuHOsOXmDiMPDtVHo4y"
		const GreenMarkTrustfaog4op = await GreenMarkTrust.new(uinthXWW8uQ, stringqb29ChB, stringpYGerMV, {from: accounts[1]});
		const uintX3FEmsN = BigInt("245")
		const addressXChMN6d = accounts[0]
		const byteFjBu857 = "0x2016090c1717020e19180213010008"
		const uint3p0YSX = BigInt("2005")
		const addresskheUzEO = accounts[0]
		const uintbvVpgr3 = BigInt("396")
		const addressGjDO0fF = accounts[0]
		const uintxnumC1H = BigInt("2007")
		const addresslvdQcBM = accounts[1]
//		const boolS4lkw9X = await GreenMarkTrustfaog4op.burnFrom.call(addressXChMN6d, uintX3FEmsN, {from: accounts[0]});
//		const boolNmz08sD = await GreenMarkTrustfaog4op.approveAndCall.call(addresskheUzEO, uint3p0YSX, byteFjBu857, {from: accounts[1]});
//		const boolnOrZx8W = await GreenMarkTrustfaog4op.approve.call(addressGjDO0fF, uintbvVpgr3, {from: accounts[4]});
//		const booliXOWaeM = await GreenMarkTrustfaog4op.approve.call(addresslvdQcBM, uintxnumC1H, {from: accounts[3]});

		await expect(GreenMarkTrustfaog4op.burnFrom.call(addressXChMN6d, uintX3FEmsN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})