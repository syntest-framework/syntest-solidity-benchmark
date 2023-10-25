const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALRQ8KvNR = await NAL.new({from: accounts[3]});
		const addressXykOJP = accounts[0]
		const addressJd5iZox = await NALRQ8KvNR.notFrozen.call(addressXykOJP, {from: accounts[0]});
		await NALRQ8KvNR.whenNotPaused.call({from: accounts[5]});
		await NALRQ8KvNR.unpause.call({from: accounts[0]});
		await NALRQ8KvNR.pause.call({from: accounts[0]});

		await expect(NALRQ8KvNR.notFrozen.call(addressXykOJP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALOpWEGNb = await NAL.new({from: accounts[1]});
		const addressoCb7EU6 = accounts[5]
		const addressiI94OdY = accounts[0]
		const boolPiWOkII = await NALOpWEGNb.freezeAccount.call(addressoCb7EU6, {from: accounts[1]});
		await NALOpWEGNb.onlyAdmin.call({from: accounts[2]});
		const stringu5NfE6I = await NALOpWEGNb.symbol.call({from: accounts[4]});
		const boolblDhsRq = await NALOpWEGNb.freezeAccount.call(addressiI94OdY, {from: accounts[0]});

		assert.equal(boolPiWOkII, true)
		await expect(NALOpWEGNb.onlyAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALREzGAv = await NAL.new({from: accounts[4]});
		const uintHWBK2d6 = BigInt("8")
		const addressQA24zrf = accounts[5]
		const addressnXWQGgf = accounts[5]
		const uintXOx4ipH = BigInt("2028")
		const addressPZr4Jv = accounts[5]
		const addressm4JGMJM = accounts[4]
		const uintznrBmK = BigInt("920")
		const addressmXsbRvj = "0x0000000000000000000000000000000000000001"
		const addressLuYsciu = accounts[4]
		const boolybawChA = await NALREzGAv.decreaseAllowance.call(addressQA24zrf, uintHWBK2d6, {from: accounts[1]});
		const boolPpY8yrU = await NALREzGAv.isAdmin.call(addressnXWQGgf, {from: accounts[0]});
		const boolayf1c8 = await NALREzGAv.approve.call(addressPZr4Jv, uintXOx4ipH, {from: accounts[2]});
		const addressDPGGyAV = await NALREzGAv.removeAdmin.call(addressm4JGMJM, {from: accounts[4]});
		const boolQK1S6t = await NALREzGAv.transferFrom.call(addressLuYsciu, addressmXsbRvj, uintznrBmK, {from: accounts[2]});

		await expect(NALREzGAv.decreaseAllowance.call(addressQA24zrf, uintHWBK2d6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringIVepZeQ = "lAWVNUKHjUWwB2"
		const stringFssqIt7 = "UZ0SLkF5SCA63k84FKuzwvstejEItgjUGsRg92sHtdklpV1W"
		const uintGXsWhPm = BigInt("162")
		const NALqu694fD = await NAL.new(stringIVepZeQ, stringFssqIt7, uintGXsWhPm, {from: accounts[3]});
		const uintdR23ekr = BigInt("56")
		const addresskeMGBh7 = accounts[0]
		const uintCR6G2W = BigInt("90")
		const addressPm8BDPV = accounts[0]
		const uintLfUROzh = BigInt("497")
		const addressqPgP6go = accounts[5]
		const addresstx2QVpv = accounts[3]
		const boolHv1BnOi = await NALqu694fD.increaseAllowance.call(addresskeMGBh7, uintdR23ekr, {from: accounts[1]});
		const boolN2JkIyC = await NALqu694fD.approve.call(addressPm8BDPV, uintCR6G2W, {from: accounts[4]});
		const boolM10HV7c = await NALqu694fD.approve.call(addressqPgP6go, uintLfUROzh, {from: accounts[0]});
		const uint256l9GV3jF = await NALqu694fD.balanceOf.call(addresstx2QVpv, {from: accounts[1]});
		await NALqu694fD.whenNotPaused.call({from: accounts[3]});
	});

	it('test for NAL', async () => {
		const NALCgM0PmC = await NAL.new({from: accounts[2]});
		const addressJdsVPLG = accounts[0]
		const addressOFWYcC5 = accounts[0]
		const addressOlewDrM = accounts[2]
		const addressDSvkUa = accounts[0]
		const uint256EgWsXVg = await NALCgM0PmC.allowance.call(addressOFWYcC5, addressJdsVPLG, {from: accounts[5]});
		const boolzMHpyHU = await NALCgM0PmC.isOwner.call(addressOlewDrM, {from: accounts[1]});
		const boolFw1gcA = await NALCgM0PmC.unfreezeAccount.call(addressDSvkUa, {from: accounts[2]});
		await NALCgM0PmC.whenNotPaused.call({from: accounts[4]});
		const uint256j0CiJs = await NALCgM0PmC.totalSupply.call({from: accounts[3]});

		assert.equal(boolzMHpyHU, true)
		assert.equal(uint256EgWsXVg, BigInt("0"))
		await expect(NALCgM0PmC.unfreezeAccount.call(addressDSvkUa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALL1mJE7x = await NAL.new({from: accounts[0]});
		const uintXCjsTJR = BigInt("971")
		const address85QUOb = "0x0000000000000000000000000000000000000001"
		const addressRz5JKeq = accounts[1]
		const uintEfAC89 = BigInt("1536")
		const addresswlcsm7W = accounts[2]
		const addressBagBrDY = accounts[1]
		const boolyJwcFo = await NALL1mJE7x.unlock.call(address85QUOb, uintXCjsTJR, {from: accounts[1]});
		const boolCRLg6se = await NALL1mJE7x.freezeAccount.call(addressRz5JKeq, {from: accounts[2]});
		await NALL1mJE7x.pause.call({from: accounts[5]});
		const boolvYvUT5A = await NALL1mJE7x.transferFrom.call(addressBagBrDY, addresswlcsm7W, uintEfAC89, {from: accounts[4]});

		await expect(NALL1mJE7x.unlock.call(address85QUOb, uintXCjsTJR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALLu8Zd3U = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgyt1taT = accounts[0]
		const addressRtbW2ys = accounts[4]
		const addressJ6LQiL0 = accounts[3]
		const uint256kvpBLxK = await NALLu8Zd3U.balanceOf.call(addressgyt1taT, {from: accounts[1]});
		const addressFqkX2iW = await NALLu8Zd3U.transferOwnership.call(addressRtbW2ys, {from: accounts[3]});
		const addressfsxqnhm = await NALLu8Zd3U.transferOwnership.call(addressJ6LQiL0, {from: accounts[0]});
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const uintFy83Zk5 = BigInt("1791")
		const addresscHlyr8x = "0x0000000000000000000000000000000000000001"
		const uintOL208ig = BigInt("444")
		const addresshrjDUrp = accounts[0]
		const uintDGjsD3e = BigInt("535")
		const addressktQPXhS = accounts[2]
		const addressInkaef7 = accounts[4]
		const uintY9ocXr9 = BigInt("330")
		const boolgXKLBYL = await NALlVPard5.increaseAllowance.call(addresscHlyr8x, uintFy83Zk5, {from: accounts[1]});
		const boolStzBcN = await NALlVPard5.transfer.call(addresshrjDUrp, uintOL208ig, {from: accounts[4]});
		const boolkzT5AHJ = await NALlVPard5.increaseAllowance.call(addressktQPXhS, uintDGjsD3e, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QwMu0zz = await NALlVPard5.balanceOf.call(addressInkaef7, {from: accounts[3]});
		const uint256hRex4My = await NALlVPard5.burn.call(uintY9ocXr9, {from: accounts[4]});

		assert.equal(boolgXKLBYL, true)
		await expect(NALlVPard5.transfer.call(addresshrjDUrp, uintOL208ig, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const uintxtNWzE3 = BigInt("1791")
		const addressRfPI8XV = "0x0000000000000000000000000000000000000001"
		const uintef3MwYj = BigInt("535")
		const addressTox4jrN = accounts[2]
		const addressDodeHZf = accounts[4]
		const uintDQzbzev = BigInt("330")
		const boolgXKLBYL = await NALlVPard5.increaseAllowance.call(addressRfPI8XV, uintxtNWzE3, {from: accounts[1]});
		const boolkzT5AHJ = await NALlVPard5.increaseAllowance.call(addressTox4jrN, uintef3MwYj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QwMu0zz = await NALlVPard5.balanceOf.call(addressDodeHZf, {from: accounts[3]});
		const uint256hRex4My = await NALlVPard5.burn.call(uintDQzbzev, {from: accounts[4]});

		assert.equal(boolgXKLBYL, true)
		assert.equal(boolkzT5AHJ, true)
		assert.equal(uint256QwMu0zz, BigInt("0"))
		await expect(NALlVPard5.burn.call(uintDQzbzev, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const uintXzgiX4F = BigInt("1791")
		const addressueBTa3o = "0x0000000000000000000000000000000000000001"
		const uintV5O60y7 = BigInt("421")
		const addressVLOsz1M = accounts[0]
		const uintOTSGAIk = BigInt("535")
		const addressSkoeTW3 = accounts[2]
		const addressjxQks78 = accounts[5]
		const addressEW9T8qU = accounts[5]
		await NALlVPard5.pause.call({from: accounts[2]});
		const boolgXKLBYL = await NALlVPard5.increaseAllowance.call(addressueBTa3o, uintXzgiX4F, {from: accounts[1]});
		const boolStzBcN = await NALlVPard5.transfer.call(addressVLOsz1M, uintV5O60y7, {from: accounts[4]});
		const boolkzT5AHJ = await NALlVPard5.increaseAllowance.call(addressSkoeTW3, uintOTSGAIk, {from: "0x0000000000000000000000000000000000000001"});
		const addressKE5MIbE = await NALlVPard5.removeAdmin.call(addressjxQks78, {from: accounts[5]});
		const uint256QwMu0zz = await NALlVPard5.balanceOf.call(addressEW9T8qU, {from: accounts[3]});

		await expect(NALlVPard5.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const uintD8Cjws = BigInt("1791")
		const addressxscoQ5d = "0x0000000000000000000000000000000000000001"
		const uintc0n0QsH = BigInt("535")
		const addressj9oRd5p = accounts[2]
		const addressnBOVpJE = accounts[4]
		const uintqPZcSd9 = BigInt("1525")
		const addressXgulhlb = accounts[0]
		const addressijV1zry = accounts[0]
		const uintt4K6Yzn = BigInt("330")
		const boolgXKLBYL = await NALlVPard5.increaseAllowance.call(addressxscoQ5d, uintD8Cjws, {from: accounts[1]});
		const boolkzT5AHJ = await NALlVPard5.increaseAllowance.call(addressj9oRd5p, uintc0n0QsH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QwMu0zz = await NALlVPard5.balanceOf.call(addressnBOVpJE, {from: accounts[3]});
		const boolmIVuhaW = await NALlVPard5.transferFrom.call(addressijV1zry, addressXgulhlb, uintqPZcSd9, {from: accounts[0]});
		const uint256hRex4My = await NALlVPard5.burn.call(uintt4K6Yzn, {from: accounts[4]});

		assert.equal(boolgXKLBYL, true)
		assert.equal(boolkzT5AHJ, true)
		assert.equal(uint256QwMu0zz, BigInt("0"))
		await expect(NALlVPard5.transferFrom.call(addressijV1zry, addressXgulhlb, uintqPZcSd9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const uintW6vVZLk = BigInt("1791")
		const addressuHOdnuC = "0x0000000000000000000000000000000000000001"
		const uintJ0aypE8 = BigInt("4")
		const addressi6bDcsp = accounts[1]
		const addressRNZndWT = accounts[4]
		const uintj6R4ivP = BigInt("330")
		const boolgXKLBYL = await NALlVPard5.increaseAllowance.call(addressuHOdnuC, uintW6vVZLk, {from: accounts[1]});
		const boolqjOMhtF = await NALlVPard5.increaseAllowance.call(addressi6bDcsp, uintJ0aypE8, {from: accounts[5]});
		const uint256QwMu0zz = await NALlVPard5.balanceOf.call(addressRNZndWT, {from: accounts[3]});
		const stringulMgtF2 = await NALlVPard5.name.call({from: accounts[2]});
		const uint256hRex4My = await NALlVPard5.burn.call(uintj6R4ivP, {from: accounts[4]});

		assert.equal(boolgXKLBYL, true)
		assert.equal(boolqjOMhtF, true)
		assert.equal(stringulMgtF2, "Personal Token")
		assert.equal(uint256QwMu0zz, BigInt("0"))
		await expect(NALlVPard5.burn.call(uintj6R4ivP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const uintSyEUV1 = BigInt("1791")
		const addressEUDSqee = "0x0000000000000000000000000000000000000001"
		const uintNkpm6Kp = BigInt("535")
		const addressO7gguxi = accounts[2]
		const addresslLllME = accounts[5]
		const uintcj7vKc0 = BigInt("1525")
		const addresso0JeiU = accounts[0]
		const addressXEg5H1w = accounts[0]
		const uintTP7Nn5m = BigInt("330")
		const boolgXKLBYL = await NALlVPard5.increaseAllowance.call(addressEUDSqee, uintSyEUV1, {from: accounts[1]});
		const boolkzT5AHJ = await NALlVPard5.increaseAllowance.call(addressO7gguxi, uintNkpm6Kp, {from: "0x0000000000000000000000000000000000000001"});
		const stringxMuWtCu = await NALlVPard5.symbol.call({from: accounts[2]});
		await NALlVPard5.onlyOwner.call({from: accounts[2]});
		const uint256QwMu0zz = await NALlVPard5.balanceOf.call(addresslLllME, {from: accounts[3]});
		const boolmIVuhaW = await NALlVPard5.transferFrom.call(addressXEg5H1w, addresso0JeiU, uintcj7vKc0, {from: accounts[0]});
		const uint256hRex4My = await NALlVPard5.burn.call(uintTP7Nn5m, {from: accounts[4]});

		assert.equal(boolgXKLBYL, true)
		assert.equal(boolkzT5AHJ, true)
		assert.equal(stringxMuWtCu, "NAL")
		await expect(NALlVPard5.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const uintZ7rbXdy = BigInt("1791")
		const addressAxkwjG3 = "0x0000000000000000000000000000000000000001"
		const addressorbzSVf = accounts[5]
		const addressmH8dzAY = "0x0000000000000000000000000000000000000001"
		const boolgXKLBYL = await NALlVPard5.increaseAllowance.call(addressAxkwjG3, uintZ7rbXdy, {from: accounts[1]});
		const uint256QwMu0zz = await NALlVPard5.balanceOf.call(addressorbzSVf, {from: accounts[3]});
		const address7ySim7 = await NALlVPard5.transferOwnership.call(addressmH8dzAY, {from: accounts[2]});

		assert.equal(boolgXKLBYL, true)
		assert.equal(uint256QwMu0zz, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALy8RAJou = await NAL.new({from: accounts[0]});
		const addressFuGBS9 = "0x0000000000000000000000000000000000000001"
		const uint256Raykkxt = await NALy8RAJou.totalSupply.call({from: accounts[4]});
		const uint256Fv0GkbW = await NALy8RAJou.balanceOf.call(addressFuGBS9, {from: accounts[4]});

		assert.equal(uint256Fv0GkbW, BigInt("0"))
		assert.equal(uint256Raykkxt, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const uintiHlCnyg = BigInt("1791")
		const addressMgft07x = "0x0000000000000000000000000000000000000001"
		const uintNJl6CZ = BigInt("1538")
		const addressJYlYmK = accounts[0]
		const uintmX8ulwA = BigInt("444")
		const addresskrSz6wF = accounts[0]
		const addressEZe6ff = accounts[6]
		const addressL4XNr2Q = accounts[3]
		const boolgXKLBYL = await NALlVPard5.increaseAllowance.call(addressMgft07x, uintiHlCnyg, {from: accounts[1]});
		const boolbpArIQ = await NALlVPard5.approve.call(addressJYlYmK, uintNJl6CZ, {from: accounts[0]});
		const boolStzBcN = await NALlVPard5.transfer.call(addresskrSz6wF, uintmX8ulwA, {from: accounts[4]});
		const uint256QwMu0zz = await NALlVPard5.balanceOf.call(addressEZe6ff, {from: accounts[3]});
		const addressXlnibHE = await NALlVPard5.transferOwnership.call(addressL4XNr2Q, {from: accounts[2]});

		assert.equal(boolbpArIQ, true)
		assert.equal(boolgXKLBYL, true)
		await expect(NALlVPard5.transfer.call(addresskrSz6wF, uintmX8ulwA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const uintnRqS9xp = BigInt("1327")
		const uintMUkUfNo = BigInt("753")
		const addressBE6CeC2 = accounts[0]
		const addressQV6FtcX = accounts[0]
		const addressbTH7NE8 = accounts[5]
		const boolPEmGV8r = await NALlVPard5.transferWithLock.call(addressBE6CeC2, uintMUkUfNo, uintnRqS9xp, {from: accounts[2]});
		const boolV4aazD1 = await NALlVPard5.isOwner.call(addressQV6FtcX, {from: accounts[1]});
		await NALlVPard5.whenNotPaused.call({from: accounts[3]});
		const uint256QwMu0zz = await NALlVPard5.balanceOf.call(addressbTH7NE8, {from: accounts[3]});

		assert.equal(boolPEmGV8r, true)
		assert.equal(boolV4aazD1, false)
		await expect(NALlVPard5.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const uintCT7OjD = BigInt("661")
		const addressTouXjxD = accounts[1]
		const addressNhgE8n7 = accounts[5]
		const addressfTP6Gjz = accounts[4]
		const uint8AkEKHR1 = await NALlVPard5.decimals.call({from: accounts[3]});
		const boolzbuqDGl = await NALlVPard5.transferFrom.call(addressNhgE8n7, addressTouXjxD, uintCT7OjD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QwMu0zz = await NALlVPard5.balanceOf.call(addressfTP6Gjz, {from: accounts[3]});

		assert.equal(uint8AkEKHR1, BigInt("18"))
		await expect(NALlVPard5.transferFrom.call(addressNhgE8n7, addressTouXjxD, uintCT7OjD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const uintyzwyYh = BigInt("1791")
		const addressubWRxZb = "0x0000000000000000000000000000000000000001"
		const uintTJCy8tt = BigInt("535")
		const addressvTn7IeA = accounts[2]
		const addressGjuvLl = accounts[4]
		const uintsUZTw0k = BigInt("1525")
		const addressNZOqlTh = accounts[0]
		const addressFKFuhqw = accounts[0]
		const uintMetmWg9 = BigInt("1895")
		const addresscGzuES3 = accounts[0]
		const addressvZvA89j = accounts[3]
		const uintdBu7hT = BigInt("330")
		const boolgXKLBYL = await NALlVPard5.increaseAllowance.call(addressubWRxZb, uintyzwyYh, {from: accounts[1]});
		const boolWD9oASc = await NALlVPard5.paused.call({from: accounts[2]});
		const boolkzT5AHJ = await NALlVPard5.increaseAllowance.call(addressvTn7IeA, uintTJCy8tt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QwMu0zz = await NALlVPard5.balanceOf.call(addressGjuvLl, {from: accounts[3]});
		const boolmIVuhaW = await NALlVPard5.transferFrom.call(addressFKFuhqw, addressNZOqlTh, uintsUZTw0k, {from: accounts[0]});
		const bool7E5Wnq = await NALlVPard5.transferFrom.call(addressvZvA89j, addresscGzuES3, uintMetmWg9, {from: accounts[1]});
		const uint256LJyvU2O = await NALlVPard5.totalSupply.call({from: accounts[5]});
		const uint256hRex4My = await NALlVPard5.burn.call(uintdBu7hT, {from: accounts[4]});

		assert.equal(boolWD9oASc, false)
		assert.equal(boolgXKLBYL, true)
		assert.equal(boolkzT5AHJ, true)
		assert.equal(uint256QwMu0zz, BigInt("0"))
		await expect(NALlVPard5.transferFrom.call(addressFKFuhqw, addressNZOqlTh, uintsUZTw0k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALgGJbvFt = await NAL.new({from: accounts[1]});
		const uintAja6V5C = BigInt("1410")
		const uintWYL2Kns = BigInt("440")
		const addressJdsh2Sf = accounts[5]
		await NALgGJbvFt.renounceAdmin.call({from: accounts[4]});
		await NALgGJbvFt.onlyAdmin.call({from: accounts[5]});
		const booljVeTvXq = await NALgGJbvFt.transferWithLock.call(addressJdsh2Sf, uintWYL2Kns, uintAja6V5C, {from: accounts[0]});

		await expect(NALgGJbvFt.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const addresskZ3NCYJ = accounts[2]
		const uintTZYCP7D = BigInt("430")
		const addressMU6z4Tw = accounts[0]
		const addressiduBlIW = await NALlVPard5.addAdmin.call(addresskZ3NCYJ, {from: accounts[2]});
		const boolStzBcN = await NALlVPard5.transfer.call(addressMU6z4Tw, uintTZYCP7D, {from: accounts[4]});

		await expect(NALlVPard5.addAdmin.call(addresskZ3NCYJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const uintL1eZf0x = BigInt("323")
		const uintYrSTnc8 = BigInt("19")
		const address7a81CK = accounts[3]
		const addressZoUUZzn = accounts[5]
		const booltz3mOF = await NALlVPard5.lock.call(address7a81CK, uintYrSTnc8, uintL1eZf0x, {from: accounts[2]});
		const stringUmCQsh1 = await NALlVPard5.symbol.call({from: accounts[4]});
		const uint256fVgxSsw = await NALlVPard5.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256QwMu0zz = await NALlVPard5.balanceOf.call(addressZoUUZzn, {from: accounts[3]});

		await expect(NALlVPard5.lock.call(address7a81CK, uintYrSTnc8, uintL1eZf0x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCvz3kpJ = await NAL.new({from: accounts[1]});
		const uintYChjncL = BigInt("761")
		const addressMfTDUPP = accounts[4]
		const uintGVRuCZp = BigInt("1519")
		const addressLp0N6M1 = accounts[4]
		const addressv56AAI4 = accounts[1]
		const addressIsOKnNP = accounts[5]
		const addressu0ZkXyz = accounts[1]
		const addressK45iua6 = accounts[1]
		const addressA22PeMM = accounts[0]
		const uintGYvPbpJ = BigInt("817")
		const addressMqhqBo = await NALCvz3kpJ.burnFrom.call(addressMfTDUPP, uintYChjncL, {from: accounts[2]});
		const boolhL0keP = await NALCvz3kpJ.approve.call(addressLp0N6M1, uintGVRuCZp, {from: accounts[2]});
		const uint256OqpyoYO = await NALCvz3kpJ.allowance.call(addressIsOKnNP, addressv56AAI4, {from: accounts[1]});
		const uint256xrnDyp = await NALCvz3kpJ.allowance.call(addressK45iua6, addressu0ZkXyz, {from: "0x0000000000000000000000000000000000000001"});
		const addressv2OTiy3 = await NALCvz3kpJ.notFrozen.call(addressA22PeMM, {from: accounts[3]});
		const uint256WHsqxDo = await NALCvz3kpJ.burn.call(uintGYvPbpJ, {from: accounts[1]});

		await expect(NALCvz3kpJ.burnFrom.call(addressMfTDUPP, uintYChjncL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const addressKZlvwcB = accounts[5]
		const addresscn34Swr = accounts[0]
		const uint256QwMu0zz = await NALlVPard5.balanceOf.call(addressKZlvwcB, {from: accounts[3]});
		const addressHOOripO = await NALlVPard5.removeAdmin.call(addresscn34Swr, {from: accounts[2]});

		assert.equal(uint256QwMu0zz, BigInt("0"))
		await expect(NALlVPard5.removeAdmin.call(addresscn34Swr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlVPard5 = await NAL.new({from: accounts[2]});
		const addressMyL15j = accounts[0]
		const uintk5ACuQO = BigInt("929")
		const addressur9Z8fj = accounts[3]
		const uintt76NXw9 = BigInt("661")
		const addressAxf9HBQ = accounts[2]
		const addressQpyKUdX = accounts[6]
		const addressLC3534k = await NALlVPard5.upgradeTo.call(addressMyL15j, {from: accounts[2]});
		const boolbt3KDR8 = await NALlVPard5.increaseAllowance.call(addressur9Z8fj, uintk5ACuQO, {from: accounts[1]});
		const boolzbuqDGl = await NALlVPard5.transferFrom.call(addressQpyKUdX, addressAxf9HBQ, uintt76NXw9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbt3KDR8, true)
		await expect(NALlVPard5.transferFrom.call(addressQpyKUdX, addressAxf9HBQ, uintt76NXw9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})