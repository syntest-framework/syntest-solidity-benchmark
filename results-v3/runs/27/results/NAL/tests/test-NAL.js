const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALcxAgcKt = await NAL.new({from: accounts[1]});
		const addressLNcvDEu = accounts[2]
		const uintedlcVOk = BigInt("383")
		const addressQLQQaau = accounts[4]
		const uintiszANSF = BigInt("441")
		const addressC097dU4 = accounts[3]
		const addressVrIYHFV = accounts[5]
		const boolgCIja3s = await NALcxAgcKt.unfreezeAccount.call(addressLNcvDEu, {from: accounts[2]});
		const boolSICkFcH = await NALcxAgcKt.increaseAllowance.call(addressQLQQaau, uintedlcVOk, {from: accounts[5]});
		const booljTvZ7K = await NALcxAgcKt.transferFrom.call(addressVrIYHFV, addressC097dU4, uintiszANSF, {from: accounts[1]});

		await expect(NALcxAgcKt.unfreezeAccount.call(addressLNcvDEu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const string91erR6 = "CSJwrYSVoEL4lBSrweNmS6tV6qp9x"
		const stringBgN15LP = "66uniK0BRZxmj9QEL07zUpQFdSJg8M8bctYUNy8dNeyrzl8yLi7"
		const uintY9LbFD = BigInt("171")
		const NALJMlM9yI = await NAL.new(string91erR6, stringBgN15LP, uintY9LbFD, {from: accounts[1]});
		const addresskDdj0UQ = accounts[5]
		const uintwuU7NLf = BigInt("390")
		const addressYQ4lss5 = accounts[0]
		const uintf0wAyB2 = BigInt("169")
		const addressS6T7QdY = accounts[4]
		const addresshfKOADD = "0x0000000000000000000000000000000000000001"
		const addressOd49TCN = await NALJMlM9yI.upgradeTo.call(addresskDdj0UQ, {from: accounts[5]});
		const uint256n6LIG2k = await NALJMlM9yI.totalSupply.call({from: accounts[2]});
		const boolCHCPgJU = await NALJMlM9yI.decreaseAllowance.call(addressYQ4lss5, uintwuU7NLf, {from: accounts[2]});
		const boolV4R9ds = await NALJMlM9yI.transferFrom.call(addresshfKOADD, addressS6T7QdY, uintf0wAyB2, {from: accounts[2]});
		const boolxbBC3J4 = await NALJMlM9yI.paused.call({from: accounts[5]});
	});

	it('test for NAL', async () => {
		const NALZiUwQLM = await NAL.new({from: accounts[3]});
		const addressInC7ms = accounts[1]
		const uintr1dtxed = BigInt("454")
		const addressJlTedaV = accounts[0]
		const uintovt4dsS = BigInt("11")
		const uintfVP1cSJ = BigInt("1208")
		const addressAjjJkW2 = accounts[4]
		await NALZiUwQLM.renounceAdmin.call({from: accounts[1]});
		const boolvymcFNh = await NALZiUwQLM.paused.call({from: accounts[2]});
		const addressNS7bMzZ = await NALZiUwQLM.notFrozen.call(addressInC7ms, {from: accounts[4]});
		const boolLXedBp6 = await NALZiUwQLM.increaseAllowance.call(addressJlTedaV, uintr1dtxed, {from: accounts[3]});
		const boolsGlf9y9 = await NALZiUwQLM.lock.call(addressAjjJkW2, uintfVP1cSJ, uintovt4dsS, {from: accounts[3]});

		await expect(NALZiUwQLM.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALAoDVPK = await NAL.new({from: accounts[1]});
		const uintWFEYjWS = BigInt("2044")
		const addressQUs9AJ3 = accounts[1]
		const addressmc3mlg1 = accounts[4]
		const addressxbQ4zOe = accounts[3]
		const boolJC4QRyw = await NALAoDVPK.approve.call(addressQUs9AJ3, uintWFEYjWS, {from: accounts[1]});
		const addressM9x80mK = await NALAoDVPK.notFrozen.call(addressmc3mlg1, {from: accounts[2]});
		const addressxhPWp5J = await NALAoDVPK.removeAdmin.call(addressxbQ4zOe, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJC4QRyw, true)
		await expect(NALAoDVPK.notFrozen.call(addressmc3mlg1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6i08CZ = await NAL.new({from: accounts[0]});
		const uintZh44Iim = BigInt("327")
		const addressekk4bzh = accounts[0]
		const uintQzPGcel = BigInt("489")
		const uintICA9Gwv = BigInt("253")
		const addressJNNuDGx = accounts[3]
		const addressSDYp4O = accounts[3]
		const uintlSb1sW4 = BigInt("554")
		const addressajybMrY = accounts[1]
		const addressXg4y7Gx = accounts[3]
		const boolgsn4N7e = await NAL6i08CZ.increaseAllowance.call(addressekk4bzh, uintZh44Iim, {from: accounts[1]});
		const boolczokoxZ = await NAL6i08CZ.lock.call(addressJNNuDGx, uintICA9Gwv, uintQzPGcel, {from: accounts[3]});
		const addressr3m4Mty = await NAL6i08CZ.removeAdmin.call(addressSDYp4O, {from: accounts[0]});
		const uint8xmdALHR = await NAL6i08CZ.decimals.call({from: accounts[2]});
		const boolS7y19vl = await NAL6i08CZ.transferFrom.call(addressXg4y7Gx, addressajybMrY, uintlSb1sW4, {from: accounts[4]});

		assert.equal(boolgsn4N7e, true)
		await expect(NAL6i08CZ.lock.call(addressJNNuDGx, uintICA9Gwv, uintQzPGcel, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6i08CZ = await NAL.new({from: accounts[0]});
		const uintuAQ8Gfg = BigInt("327")
		const address2HLgst = accounts[0]
		const uintl3I82W = BigInt("1981")
		const addressRSECo26 = accounts[4]
		const uintxDZHWWn = BigInt("489")
		const uintoG0Fnjd = BigInt("253")
		const addressOTJJ6B = accounts[3]
		const addressefuiYr = accounts[3]
		const uintrKOgK9M = BigInt("269")
		const addressFXrqna6 = accounts[3]
		const addressTcYfW1k = accounts[3]
		const addressRHL8tPD = accounts[4]
		const boolgsn4N7e = await NAL6i08CZ.increaseAllowance.call(address2HLgst, uintuAQ8Gfg, {from: accounts[1]});
		const addressOq8gy8 = await NAL6i08CZ.burnFrom.call(addressRSECo26, uintl3I82W, {from: accounts[4]});
		const boolczokoxZ = await NAL6i08CZ.lock.call(addressOTJJ6B, uintoG0Fnjd, uintxDZHWWn, {from: accounts[3]});
		const addressr3m4Mty = await NAL6i08CZ.removeAdmin.call(addressefuiYr, {from: accounts[0]});
		const boolGrtSSnf = await NAL6i08CZ.transferFrom.call(addressTcYfW1k, addressFXrqna6, uintrKOgK9M, {from: accounts[0]});
		const boolURma4Wj = await NAL6i08CZ.isOwner.call(addressRHL8tPD, {from: accounts[1]});
		const uint8xmdALHR = await NAL6i08CZ.decimals.call({from: accounts[2]});

		assert.equal(boolgsn4N7e, true)
		await expect(NAL6i08CZ.burnFrom.call(addressRSECo26, uintl3I82W, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6i08CZ = await NAL.new({from: accounts[0]});
		const uintM7jse7A = BigInt("327")
		const addressvWuY0qS = accounts[0]
		const addressQH9noO6 = accounts[3]
		const uintTnfvQf = BigInt("554")
		const addressAao56a8 = accounts[1]
		const addressIkJK6HR = accounts[3]
		const boolgsn4N7e = await NAL6i08CZ.increaseAllowance.call(addressvWuY0qS, uintM7jse7A, {from: accounts[1]});
		const addressr3m4Mty = await NAL6i08CZ.removeAdmin.call(addressQH9noO6, {from: accounts[0]});
		const uint8xmdALHR = await NAL6i08CZ.decimals.call({from: accounts[2]});
		const boolS7y19vl = await NAL6i08CZ.transferFrom.call(addressIkJK6HR, addressAao56a8, uintTnfvQf, {from: accounts[4]});

		assert.equal(boolgsn4N7e, true)
		await expect(NAL6i08CZ.removeAdmin.call(addressQH9noO6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCrNGdIN = await NAL.new({from: accounts[4]});
		const addressncaGaP4 = accounts[3]
		const uintjmPuJmb = BigInt("1631")
		const addressWfoJ6z = accounts[0]
		const addressgxIQsQs = accounts[3]
		const uint256eAPkRjN = await NALCrNGdIN.balanceOf.call(addressncaGaP4, {from: accounts[1]});
		const boolDIwSCaz = await NALCrNGdIN.transfer.call(addressWfoJ6z, uintjmPuJmb, {from: accounts[4]});
		const addressSOxLqYc = await NALCrNGdIN.removeAdmin.call(addressgxIQsQs, {from: accounts[2]});

		assert.equal(boolDIwSCaz, true)
		assert.equal(uint256eAPkRjN, BigInt("0"))
		await expect(NALCrNGdIN.removeAdmin.call(addressgxIQsQs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALcxAgcKt = await NAL.new({from: accounts[1]});
		const uintqmLjlwe = BigInt("1989")
		const addresshWzg4dQ = accounts[2]
		const uintBQFx4x9 = BigInt("411")
		const address24Golk = accounts[4]
		const boolytBNziY = await NALcxAgcKt.decreaseAllowance.call(addresshWzg4dQ, uintqmLjlwe, {from: accounts[5]});
		const boolSICkFcH = await NALcxAgcKt.increaseAllowance.call(address24Golk, uintBQFx4x9, {from: accounts[5]});
		await NALcxAgcKt.onlyAdmin.call({from: accounts[3]});

		await expect(NALcxAgcKt.decreaseAllowance.call(addresshWzg4dQ, uintqmLjlwe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6i08CZ = await NAL.new({from: accounts[0]});
		const uintvzTxJh2 = BigInt("327")
		const addressHQ5rInH = accounts[0]
		const uintca1J5P = BigInt("489")
		const uintepy37F = BigInt("253")
		const addressg5aECP3 = accounts[3]
		const addressWNUWsnX = accounts[4]
		const uintauvMWV = BigInt("1849")
		const address7w5ZHO = accounts[1]
		const uintIfa70tm = BigInt("1212")
		const addresspXhbGNN = accounts[3]
		const addressWLbJZkq = accounts[5]
		const uintp2cGt5c = BigInt("554")
		const addressLpz33vB = accounts[1]
		const addressawNjcA0 = accounts[3]
		const boolgsn4N7e = await NAL6i08CZ.increaseAllowance.call(addressHQ5rInH, uintvzTxJh2, {from: accounts[1]});
		const stringQx2hOm6 = await NAL6i08CZ.name.call({from: accounts[3]});
		const boolczokoxZ = await NAL6i08CZ.lock.call(addressg5aECP3, uintepy37F, uintca1J5P, {from: accounts[3]});
		const addressr3m4Mty = await NAL6i08CZ.removeAdmin.call(addressWNUWsnX, {from: accounts[0]});
		const bools00j1dG = await NAL6i08CZ.transfer.call(address7w5ZHO, uintauvMWV, {from: accounts[4]});
		const uint8xmdALHR = await NAL6i08CZ.decimals.call({from: accounts[2]});
		const boolbFj4hcc = await NAL6i08CZ.transferFrom.call(addressWLbJZkq, addresspXhbGNN, uintIfa70tm, {from: accounts[1]});
		const boolS7y19vl = await NAL6i08CZ.transferFrom.call(addressawNjcA0, addressLpz33vB, uintp2cGt5c, {from: accounts[4]});

		assert.equal(boolgsn4N7e, true)
		assert.equal(stringQx2hOm6, "Personal Token")
		await expect(NAL6i08CZ.lock.call(addressg5aECP3, uintepy37F, uintca1J5P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALcxAgcKt = await NAL.new({from: accounts[1]});
		const uintDFg5uv6 = BigInt("383")
		const addresscH8V6hO = accounts[4]
		const uintQHnxDAf = BigInt("441")
		const addresse8mV1X2 = accounts[4]
		const addressgQAiYF = accounts[5]
		const boolSICkFcH = await NALcxAgcKt.increaseAllowance.call(addresscH8V6hO, uintDFg5uv6, {from: accounts[5]});
		const booljTvZ7K = await NALcxAgcKt.transferFrom.call(addressgQAiYF, addresse8mV1X2, uintQHnxDAf, {from: accounts[1]});

		assert.equal(boolSICkFcH, true)
		await expect(NALcxAgcKt.transferFrom.call(addressgQAiYF, addresse8mV1X2, uintQHnxDAf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALcxAgcKt = await NAL.new({from: accounts[1]});
		const uintirziGd = BigInt("39")
		const addresskaXWJ3p = accounts[1]
		const addressbnjuBEY = accounts[3]
		const addressWI3eOp6 = "0x0000000000000000000000000000000000000001"
		const uintWbDJ4Zn = BigInt("1791")
		const addressVAO2Nv0 = accounts[3]
		const booltjbpxR2 = await NALcxAgcKt.increaseAllowance.call(addresskaXWJ3p, uintirziGd, {from: accounts[2]});
		const stringESgvDdj = await NALcxAgcKt.symbol.call({from: accounts[1]});
		const uint256IirR0JA = await NALcxAgcKt.allowance.call(addressWI3eOp6, addressbnjuBEY, {from: accounts[1]});
		const boolQQrlIkP = await NALcxAgcKt.decreaseAllowance.call(addressVAO2Nv0, uintWbDJ4Zn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booltjbpxR2, true)
		assert.equal(stringESgvDdj, "NAL")
		assert.equal(uint256IirR0JA, BigInt("0"))
		await expect(NALcxAgcKt.decreaseAllowance.call(addressVAO2Nv0, uintWbDJ4Zn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6i08CZ = await NAL.new({from: accounts[0]});
		const uintksRf98d = BigInt("327")
		const addressTiqi0dO = accounts[0]
		const uintYm0r1ta = BigInt("1724")
		const uintyhcPAyo = BigInt("489")
		const uintRQd9yX = BigInt("253")
		const addresszbWFR9q = accounts[3]
		const addresseDlqPc8 = accounts[4]
		const uintojOu4m = BigInt("273")
		const addresswNov8V = accounts[0]
		const uintc8pTBXZ = BigInt("554")
		const addresskVwEi7f = accounts[1]
		const addresshSl770Y = accounts[3]
		const boolgsn4N7e = await NAL6i08CZ.increaseAllowance.call(addressTiqi0dO, uintksRf98d, {from: accounts[1]});
		const uint256kmkMMFF = await NAL6i08CZ.burn.call(uintYm0r1ta, {from: accounts[2]});
		const boolczokoxZ = await NAL6i08CZ.lock.call(addresszbWFR9q, uintRQd9yX, uintyhcPAyo, {from: accounts[3]});
		const addressr3m4Mty = await NAL6i08CZ.removeAdmin.call(addresseDlqPc8, {from: accounts[0]});
		const boolbcsD7q = await NAL6i08CZ.approve.call(addresswNov8V, uintojOu4m, {from: accounts[1]});
		const uint8xmdALHR = await NAL6i08CZ.decimals.call({from: accounts[2]});
		const boolS7y19vl = await NAL6i08CZ.transferFrom.call(addresshSl770Y, addresskVwEi7f, uintc8pTBXZ, {from: accounts[4]});

		assert.equal(boolgsn4N7e, true)
		await expect(NAL6i08CZ.burn.call(uintYm0r1ta, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCrNGdIN = await NAL.new({from: accounts[4]});
		const addressvYfqtZJ = accounts[4]
		const addressC08WJOy = accounts[1]
		const addressqOHuJ9s = accounts[3]
		const uint256eAPkRjN = await NALCrNGdIN.balanceOf.call(addressvYfqtZJ, {from: accounts[1]});
		const addressyIGFkIF = await NALCrNGdIN.addAdmin.call(addressC08WJOy, {from: accounts[4]});
		const addressSOxLqYc = await NALCrNGdIN.removeAdmin.call(addressqOHuJ9s, {from: accounts[2]});

		assert.equal(uint256eAPkRjN, BigInt("2000000000000000000000000000"))
		await expect(NALCrNGdIN.removeAdmin.call(addressqOHuJ9s, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCrNGdIN = await NAL.new({from: accounts[4]});
		const addressJdRfXtb = accounts[5]
		const uint256eAPkRjN = await NALCrNGdIN.balanceOf.call(addressJdRfXtb, {from: accounts[1]});
		const uint256Pg1deah = await NALCrNGdIN.totalSupply.call({from: accounts[5]});

		assert.equal(uint256Pg1deah, BigInt("2000000000000000000000000000"))
		assert.equal(uint256eAPkRjN, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALCrNGdIN = await NAL.new({from: accounts[4]});
		const addressJuLZyyo = accounts[5]
		const addressuVytKC = accounts[4]
		const addressCx20YiT = "0x0000000000000000000000000000000000000001"
		const uint256eAPkRjN = await NALCrNGdIN.balanceOf.call(addressJuLZyyo, {from: accounts[1]});
		const boolIoRptKB = await NALCrNGdIN.paused.call({from: accounts[5]});
		const uint256BpZg3i4 = await NALCrNGdIN.allowance.call(addressCx20YiT, addressuVytKC, {from: accounts[5]});

		assert.equal(boolIoRptKB, false)
		assert.equal(uint256BpZg3i4, BigInt("0"))
		assert.equal(uint256eAPkRjN, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALCrNGdIN = await NAL.new({from: accounts[4]});
		const addressGpIc1om = accounts[5]
		const addressSWzxZeg = accounts[1]
		const addressNxhqzgi = accounts[5]
		const uint256eAPkRjN = await NALCrNGdIN.balanceOf.call(addressGpIc1om, {from: accounts[1]});
		const stringawZi05b = await NALCrNGdIN.symbol.call({from: accounts[3]});
		const boolHTdPR1H = await NALCrNGdIN.unfreezeAccount.call(addressSWzxZeg, {from: accounts[4]});
		const boolMgko9J8 = await NALCrNGdIN.freezeAccount.call(addressNxhqzgi, {from: accounts[2]});

		assert.equal(stringawZi05b, "NAL")
		assert.equal(uint256eAPkRjN, BigInt("0"))
		await expect(NALCrNGdIN.unfreezeAccount.call(addressSWzxZeg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCrNGdIN = await NAL.new({from: accounts[4]});
		const addresstMUJ320 = accounts[4]
		const uintEpOVqNl = BigInt("1619")
		const uintgWDYp9Q = BigInt("1488")
		const addresswPKPCKf = accounts[3]
		const uintVqqLIU = BigInt("633")
		const addresseu1C7Jz = accounts[2]
		const addressyOxFBrS = accounts[4]
		const uint256xK71Bhu = await NALCrNGdIN.balanceOf.call(addresstMUJ320, {from: accounts[4]});
		const boolFJ0zCYN = await NALCrNGdIN.transferWithLock.call(addresswPKPCKf, uintgWDYp9Q, uintEpOVqNl, {from: accounts[4]});
		const boolbBYiwON = await NALCrNGdIN.transferFrom.call(addressyOxFBrS, addresseu1C7Jz, uintVqqLIU, {from: accounts[3]});

		assert.equal(boolFJ0zCYN, true)
		assert.equal(uint256xK71Bhu, BigInt("2000000000000000000000000000"))
		await expect(NALCrNGdIN.transferFrom.call(addressyOxFBrS, addresseu1C7Jz, uintVqqLIU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVDePRmf = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSjoABRL = BigInt("53")
		const uintk204c2S = BigInt("1484")
		const addressMk80Re = accounts[4]
		const addressH5JAWIm = accounts[1]
		await NALVDePRmf.pause.call({from: accounts[3]});
		const boolFZLQx1h = await NALVDePRmf.transferWithLock.call(addressMk80Re, uintk204c2S, uintSjoABRL, {from: accounts[2]});
		const boolEQK3fO6 = await NALVDePRmf.freezeAccount.call(addressH5JAWIm, {from: accounts[4]});
	});

	it('test for NAL', async () => {
		const NALCrNGdIN = await NAL.new({from: accounts[4]});
		const addressGBjUZLr = accounts[1]
		const uintYjG6cTt = BigInt("1632")
		const addressmluayga = accounts[2]
		const boolYFTgRWD = await NALCrNGdIN.freezeAccount.call(addressGBjUZLr, {from: accounts[4]});
		const boolDIwSCaz = await NALCrNGdIN.transfer.call(addressmluayga, uintYjG6cTt, {from: accounts[4]});

		assert.equal(boolDIwSCaz, true)
		assert.equal(boolYFTgRWD, true)
	});

	it('test for NAL', async () => {
		const NALCrNGdIN = await NAL.new({from: accounts[4]});
		const addressJObRTLN = accounts[4]
		const uintNBMRWbD = BigInt("131")
		const addressIILdrck = accounts[2]
		const addressgwVpLdW = accounts[3]
		const uinti6F7XwZ = BigInt("1234")
		const uintTceCIkO = BigInt("1652")
		const addressXcKIpcz = accounts[1]
		const uintgJpskrX = BigInt("99")
		const addressg2hZ6b2 = accounts[1]
		const uintUQOUM3c = BigInt("1609")
		const addresseFMVKr2 = accounts[2]
		const addressX4gG8OQ = accounts[0]
		const uintqTJPvki = BigInt("398")
		const addressfuRHIZs = accounts[1]
		const uint256eAPkRjN = await NALCrNGdIN.balanceOf.call(addressJObRTLN, {from: accounts[1]});
		const uint8VjgaGVO = await NALCrNGdIN.decimals.call({from: accounts[4]});
		const addressmLxFZE7 = await NALCrNGdIN.burnFrom.call(addressIILdrck, uintNBMRWbD, {from: accounts[2]});
		await NALCrNGdIN.renounceAdmin.call({from: accounts[0]});
		const addressES1KBa6 = await NALCrNGdIN.addAdmin.call(addressgwVpLdW, {from: accounts[1]});
		const boolzbr6t4U = await NALCrNGdIN.transferWithLock.call(addressXcKIpcz, uintTceCIkO, uinti6F7XwZ, {from: accounts[5]});
		const boolguhUx4d = await NALCrNGdIN.approve.call(addressg2hZ6b2, uintgJpskrX, {from: accounts[3]});
		const boollHShb7v = await NALCrNGdIN.transferFrom.call(addressX4gG8OQ, addresseFMVKr2, uintUQOUM3c, {from: accounts[0]});
		const boolDIwSCaz = await NALCrNGdIN.transfer.call(addressfuRHIZs, uintqTJPvki, {from: accounts[4]});
		await NALCrNGdIN.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256eAPkRjN, BigInt("2000000000000000000000000000"))
		assert.equal(uint8VjgaGVO, BigInt("18"))
		await expect(NALCrNGdIN.burnFrom.call(addressIILdrck, uintNBMRWbD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALsjtCojK = await NAL.new({from: accounts[2]});
		const uintQ2tSDvi = BigInt("235")
		const uintuq6xrri = BigInt("865")
		const addressXxoGR9B = accounts[4]
		const addressWWJH3KX = accounts[1]
		const addresspBq4ytX = accounts[3]
		const boolbA1Y4Vg = await NALsjtCojK.lock.call(addressXxoGR9B, uintuq6xrri, uintQ2tSDvi, {from: accounts[2]});
		const addressk1CqaJ = await NALsjtCojK.removeAdmin.call(addressWWJH3KX, {from: accounts[2]});
		const boolBBjSxeo = await NALsjtCojK.freezeAccount.call(addresspBq4ytX, {from: accounts[1]});

		await expect(NALsjtCojK.lock.call(addressXxoGR9B, uintuq6xrri, uintQ2tSDvi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCrNGdIN = await NAL.new({from: accounts[4]});
		const addressv1KeNwY = accounts[5]
		const uint256eAPkRjN = await NALCrNGdIN.balanceOf.call(addressv1KeNwY, {from: accounts[1]});
		const stringJscyT3X = await NALCrNGdIN.name.call({from: accounts[1]});
		await NALCrNGdIN.pause.call({from: accounts[4]});

		assert.equal(stringJscyT3X, "Personal Token")
		assert.equal(uint256eAPkRjN, BigInt("0"))
		await expect(NALCrNGdIN.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})