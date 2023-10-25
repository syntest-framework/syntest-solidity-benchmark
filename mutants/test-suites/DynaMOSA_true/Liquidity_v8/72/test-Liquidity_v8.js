const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringt4wPGj2 = "b5ZoLX3Zf8Ny4"
		const addressNpVfp5M = accounts[4]
		const addressP5IiWk = accounts[0]
		const uintQAaCARN = BigInt("1916")
		const uintWGA19GS = BigInt("5")
		const Liquidity_v8UHT1qhA = await Liquidity_v8.new(stringt4wPGj2, addressNpVfp5M, addressP5IiWk, uintQAaCARN, uintWGA19GS, {from: "0x0000000000000000000000000000000000000001"});
		const uintkjV9Hx = BigInt("765")
		const boolhxSK6VL = await Liquidity_v8UHT1qhA.addReward.call(uintkjV9Hx, {from: accounts[2]});
		const addressvOE1uvk = await Liquidity_v8UHT1qhA.owner.call({from: accounts[4]});
		const boolCOPWrmf = await Liquidity_v8UHT1qhA.withdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringd1rbLWE = "kxXcl2yXJLYJIIkJmG8vI4qpj6BwV9fRENYia1H1UErJbpsLzp7e43IfOdPGNJzv"
		const addressA2kmHPl = accounts[3]
		const address95SehX = accounts[2]
		const uintQaqJWHo = BigInt("1125")
		const uintnglCn8z = BigInt("111")
		const Liquidity_v8jRdyeeS = await Liquidity_v8.new(stringd1rbLWE, addressA2kmHPl, address95SehX, uintQaqJWHo, uintnglCn8z, {from: accounts[1]});
		const addressRVwe0ib = accounts[3]
		const uintpxUwgbm = BigInt("8")
		const uintaUEWaY7 = BigInt("195")
		const 
ZauICID = await Liquidity_v8jRdyeeS.userDeposits.call(addressRVwe0ib, {from: "0x0000000000000000000000000000000000000001"});
		const boolHyIw8Iy = await Liquidity_v8jRdyeeS.stake.call(uintpxUwgbm, {from: accounts[2]});
		const boolbr99c08 = await Liquidity_v8jRdyeeS.stake.call(uintaUEWaY7, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringpWYgTiE = "oPf61WUu"
		const addressKyZugT = accounts[4]
		const addresspnmJHfk = accounts[2]
		const uintl66zjGP = BigInt("494")
		const uinttJecK3m = BigInt("466")
		const Liquidity_v8iCuIYv = await Liquidity_v8.new(stringpWYgTiE, addressKyZugT, addresspnmJHfk, uintl66zjGP, uinttJecK3m, {from: accounts[4]});
		const addressBPlPCBQ = accounts[4]
		const addressDEn8tCR = accounts[2]
		const addressoE2fjo8 = accounts[2]
		const uint256ku6U0zc = await Liquidity_v8iCuIYv.calculate.call(addressBPlPCBQ, {from: accounts[2]});
		const 
JfGr94q = await Liquidity_v8iCuIYv.userDeposits.call(addressDEn8tCR, {from: accounts[2]});
		const addressUFcjPJt = await Liquidity_v8iCuIYv.transferOwnership.call(addressoE2fjo8, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringKYo68jH = "dYe7cJPqzMepVDSeJt7vTMMzj9xhv13xvmxTCW3W3qBiJIVgQVihh8L3DvYD3LOcPIl7cBJcaIBHtqQwa65GkIvU"
		const addressX1F3Z4A = accounts[0]
		const addressceHnqX = accounts[3]
		const uintQWsh1rK = BigInt("562")
		const uintD13lBmj = BigInt("589")
		const Liquidity_v8iL8OWCo = await Liquidity_v8.new(stringKYo68jH, addressX1F3Z4A, addressceHnqX, uintQWsh1rK, uintD13lBmj, {from: accounts[5]});
		const uintICEEE15 = BigInt("141")
		const addressjDZPMdC = accounts[2]
		const boolAkS8usw = await Liquidity_v8iL8OWCo.isOwner.call({from: accounts[2]});
		const boolC0ApKHR = await Liquidity_v8iL8OWCo.withdraw.call({from: accounts[1]});
		const uint256pIo8fp = await Liquidity_v8iL8OWCo.changeLockDuration.call(uintICEEE15, {from: accounts[1]});
		const 
koqUjn = await Liquidity_v8iL8OWCo.userDeposits.call(addressjDZPMdC, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringeUNGls7 = "sq3RB54Mq9HYhoDPawSA8wcwE6yh21oDKNwzNpUV6bBPRXgK4O12LHkrIsfuxUTC3Xtflc6AHOWKOcy"
		const addressNuJLNnB = accounts[0]
		const addressEWBxM9E = accounts[1]
		const uinthOzCTwA = BigInt("753")
		const uintdYpBkfK = BigInt("454")
		const Liquidity_v8zfaR2kk = await Liquidity_v8.new(stringeUNGls7, addressNuJLNnB, addressEWBxM9E, uinthOzCTwA, uintdYpBkfK, {from: accounts[3]});
		const uintONE3ls1 = BigInt("244")
		const uintDSDMS7I = BigInt("1309")
		const addressmCoDj6l = accounts[5]
		const uintKfZj4u2 = BigInt("195")
		const addressd7m2YMw = accounts[1]
		const uintuh9RstW = BigInt("659")
		const boolvxFRiBf = await Liquidity_v8zfaR2kk.emergencyWithdraw.call({from: accounts[0]});
		const boolqsHwFbW = await Liquidity_v8zfaR2kk.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256nYzFI4L = await Liquidity_v8zfaR2kk.changeLockDuration.call(uintONE3ls1, {from: accounts[4]});
		const uint256i6QJ2mL = await Liquidity_v8zfaR2kk.changeLockDuration.call(uintDSDMS7I, {from: accounts[4]});
		const 
AR6U4wR = await Liquidity_v8zfaR2kk._hasAllowance.call(addressd7m2YMw, uintKfZj4u2, addressmCoDj6l, {from: accounts[1]});
		const uint64RlhmEhV = await Liquidity_v8zfaR2kk.setRate.call(uintuh9RstW, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringMEmODQ4 = "6Vg2HFhrziwgY8bIy4YdbSCnCra77NgpcCn1K9jgmS2rHik3HgqSPkrbH6OaRTo4fIDq5rCwIfAk8ugKWD8Y4"
		const addresso28SPT3 = accounts[2]
		const addressscGUmW = accounts[1]
		const uintENFadZe = BigInt("1635")
		const uints8CpggQ = BigInt("1847")
		const Liquidity_v8HX5H2Oa = await Liquidity_v8.new(stringMEmODQ4, addresso28SPT3, addressscGUmW, uintENFadZe, uints8CpggQ, {from: accounts[5]});
		const addressF1J9xpN = accounts[2]
		const addressa1tcGS = accounts[3]
		const uintgpcWYaO = BigInt("921")
		const addressdwlfeVW = accounts[2]
		await Liquidity_v8HX5H2Oa.onlyOwner.call({from: accounts[2]});
		const 
Kwrtci9 = await Liquidity_v8HX5H2Oa.userDeposits.call(addressF1J9xpN, {from: "0x0000000000000000000000000000000000000001"});
		const 
z4lqZSz = await Liquidity_v8HX5H2Oa._hasAllowance.call(addressdwlfeVW, uintgpcWYaO, addressa1tcGS, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringpWYgTiE = "oPf61WUu"
		const addressdtHxH7m = accounts[4]
		const addressV0OUewh = accounts[2]
		const uintDz8jTmB = BigInt("494")
		const uintBfoSbJ = BigInt("466")
		const Liquidity_v8iCuIYv = await Liquidity_v8.new(stringpWYgTiE, addressdtHxH7m, addressV0OUewh, uintDz8jTmB, uintBfoSbJ, {from: accounts[4]});
		const addressNLU3d4K = accounts[4]
		const uintdyyfLvT = BigInt("764")
		const uintK8wHRw = BigInt("1944")
		const addresszKipvaJ = await Liquidity_v8iCuIYv.owner.call({from: accounts[1]});
		const uint256ku6U0zc = await Liquidity_v8iCuIYv.calculate.call(addressNLU3d4K, {from: accounts[2]});
		const bool1rqnHu = await Liquidity_v8iCuIYv.addReward.call(uintdyyfLvT, {from: accounts[1]});
		const uint648BT2S2 = await Liquidity_v8iCuIYv.setRate.call(uintK8wHRw, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringpWYgTiE = "oPf61WUu"
		const addressgqpIQKS = accounts[4]
		const addressHGPm7gB = accounts[2]
		const uintzKFuIdd = BigInt("494")
		const uinthxnPR7f = BigInt("466")
		const Liquidity_v8iCuIYv = await Liquidity_v8.new(stringpWYgTiE, addressgqpIQKS, addressHGPm7gB, uintzKFuIdd, uinthxnPR7f, {from: accounts[4]});
		const uintLpLlxst = BigInt("406")
		const addressTtTX9sm = accounts[6]
		const uint64CXi0ZOD = await Liquidity_v8iCuIYv.setRate.call(uintLpLlxst, {from: accounts[4]});
		const uint256ku6U0zc = await Liquidity_v8iCuIYv.calculate.call(addressTtTX9sm, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringU2oon5n = "HPEqp22wpe4"
		const addresspfZgGe = accounts[5]
		const addressuW6Bdey = accounts[2]
		const uintlW7TjB = BigInt("375")
		const uintKwWo1tt = BigInt("985")
		const Liquidity_v8VznBW2Q = await Liquidity_v8.new(stringU2oon5n, addresspfZgGe, addressuW6Bdey, uintlW7TjB, uintKwWo1tt, {from: accounts[0]});
		const uintqYTPs05 = BigInt("1083")
		await Liquidity_v8VznBW2Q.renounceOwnership.call({from: accounts[0]});
		const booltczzJkS = await Liquidity_v8VznBW2Q.addReward.call(uintqYTPs05, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringpWYgTiE = "oPf61WUu"
		const addressbkYyOi = accounts[4]
		const addressgbvpZ1B = accounts[2]
		const uintsxlqOPa = BigInt("494")
		const uintwVfXR1u = BigInt("466")
		const Liquidity_v8iCuIYv = await Liquidity_v8.new(stringpWYgTiE, addressbkYyOi, addressgbvpZ1B, uintsxlqOPa, uintwVfXR1u, {from: accounts[4]});
		const addressKh5asBU = accounts[4]
		const addressieqD3tM = "0x0000000000000000000000000000000000000001"
		const addresssx4opN = accounts[3]
		const addresswrntpy = accounts[1]
		const uint256dmg0Et9 = await Liquidity_v8iCuIYv.calculate.call(addressKh5asBU, {from: "0x0000000000000000000000000000000000000001"});
		const addresse1KEYXc = await Liquidity_v8iCuIYv.transferOwnership.call(addressieqD3tM, {from: accounts[4]});
		const 
JfGr94q = await Liquidity_v8iCuIYv.userDeposits.call(addresssx4opN, {from: accounts[2]});
		const 
jgnhtjK = await Liquidity_v8iCuIYv.userDeposits.call(addresswrntpy, {from: accounts[4]});
		const boolX8fU136 = await Liquidity_v8iCuIYv.withdraw.call({from: accounts[0]});
		const boolTuHakYg = await Liquidity_v8iCuIYv.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringF1SMm8F = "HeNa1L9yrHA92cbQoVKsWoKewQJdATg3V"
		const addresshWAvyUO = accounts[3]
		const addressRPOb6ak = accounts[3]
		const uintK3UCGdd = BigInt("611")
		const uintwSKfQnn = BigInt("1690")
		const Liquidity_v8DXFWvSh = await Liquidity_v8.new(stringF1SMm8F, addresshWAvyUO, addressRPOb6ak, uintK3UCGdd, uintwSKfQnn, {from: accounts[5]});
		const uintrWpyf2X = BigInt("566")
		const boolrwsVWcS = await Liquidity_v8DXFWvSh.isOwner.call({from: accounts[1]});
		const uint256AYsKgt = await Liquidity_v8DXFWvSh.changeLockDuration.call(uintrWpyf2X, {from: accounts[5]});
		const booldanOLPi = await Liquidity_v8DXFWvSh.isOwner.call({from: accounts[3]});
	});
})