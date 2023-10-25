const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPARQ8KvNR = await TPA.new({from: accounts[3]});
		const addressXykOJP = accounts[0]
		const addressJd5iZox = await TPARQ8KvNR.notFrozen.call(addressXykOJP, {from: accounts[0]});
		await TPARQ8KvNR.whenNotPaused.call({from: accounts[5]});
		await TPARQ8KvNR.unpause.call({from: accounts[0]});
		await TPARQ8KvNR.pause.call({from: accounts[0]});

		await expect(TPARQ8KvNR.notFrozen.call(addressXykOJP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOpWEGNb = await TPA.new({from: accounts[1]});
		const addressoCb7EU6 = accounts[5]
		const addressiI94OdY = accounts[0]
		const boolPiWOkII = await TPAOpWEGNb.freezeAccount.call(addressoCb7EU6, {from: accounts[1]});
		await TPAOpWEGNb.onlyAdmin.call({from: accounts[2]});
		const stringu5NfE6I = await TPAOpWEGNb.symbol.call({from: accounts[4]});
		const boolblDhsRq = await TPAOpWEGNb.freezeAccount.call(addressiI94OdY, {from: accounts[0]});

		assert.equal(boolPiWOkII, true)
		await expect(TPAOpWEGNb.onlyAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAREzGAv = await TPA.new({from: accounts[4]});
		const uintHWBK2d6 = BigInt("8")
		const addressQA24zrf = accounts[5]
		const addressnXWQGgf = accounts[5]
		const uintXOx4ipH = BigInt("2028")
		const addressPZr4Jv = accounts[5]
		const addressm4JGMJM = accounts[4]
		const uintznrBmK = BigInt("920")
		const addressmXsbRvj = "0x0000000000000000000000000000000000000001"
		const addressLuYsciu = accounts[4]
		const boolybawChA = await TPAREzGAv.decreaseAllowance.call(addressQA24zrf, uintHWBK2d6, {from: accounts[1]});
		const boolPpY8yrU = await TPAREzGAv.isAdmin.call(addressnXWQGgf, {from: accounts[0]});
		const boolayf1c8 = await TPAREzGAv.approve.call(addressPZr4Jv, uintXOx4ipH, {from: accounts[2]});
		const addressDPGGyAV = await TPAREzGAv.removeAdmin.call(addressm4JGMJM, {from: accounts[4]});
		const boolQK1S6t = await TPAREzGAv.transferFrom.call(addressLuYsciu, addressmXsbRvj, uintznrBmK, {from: accounts[2]});

		await expect(TPAREzGAv.decreaseAllowance.call(addressQA24zrf, uintHWBK2d6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringIVepZeQ = "lAWVNUKHjUWwB2"
		const stringFssqIt7 = "UZ0SLkF5SCA63k84FKuzwvstejEItgjUGsRg92sHtdklpV1W"
		const uintGXsWhPm = BigInt("162")
		const TPAqu694fD = await TPA.new(stringIVepZeQ, stringFssqIt7, uintGXsWhPm, {from: accounts[3]});
		const uintdR23ekr = BigInt("56")
		const addresskeMGBh7 = accounts[0]
		const uintCR6G2W = BigInt("90")
		const addressPm8BDPV = accounts[0]
		const uintLfUROzh = BigInt("497")
		const addressqPgP6go = accounts[5]
		const addresstx2QVpv = accounts[3]
		const boolHv1BnOi = await TPAqu694fD.increaseAllowance.call(addresskeMGBh7, uintdR23ekr, {from: accounts[1]});
		const boolN2JkIyC = await TPAqu694fD.approve.call(addressPm8BDPV, uintCR6G2W, {from: accounts[4]});
		const boolM10HV7c = await TPAqu694fD.approve.call(addressqPgP6go, uintLfUROzh, {from: accounts[0]});
		const uint256l9GV3jF = await TPAqu694fD.balanceOf.call(addresstx2QVpv, {from: accounts[1]});
		await TPAqu694fD.whenNotPaused.call({from: accounts[3]});
	});

	it('test for TPA', async () => {
		const TPACgM0PmC = await TPA.new({from: accounts[2]});
		const addressJdsVPLG = accounts[0]
		const addressOFWYcC5 = accounts[0]
		const addressOlewDrM = accounts[2]
		const addressDSvkUa = accounts[0]
		const uint256EgWsXVg = await TPACgM0PmC.allowance.call(addressOFWYcC5, addressJdsVPLG, {from: accounts[5]});
		const boolzMHpyHU = await TPACgM0PmC.isOwner.call(addressOlewDrM, {from: accounts[1]});
		const boolFw1gcA = await TPACgM0PmC.unfreezeAccount.call(addressDSvkUa, {from: accounts[2]});
		await TPACgM0PmC.whenNotPaused.call({from: accounts[4]});
		const uint256j0CiJs = await TPACgM0PmC.totalSupply.call({from: accounts[3]});

		assert.equal(boolzMHpyHU, true)
		assert.equal(uint256EgWsXVg, BigInt("0"))
		await expect(TPACgM0PmC.unfreezeAccount.call(addressDSvkUa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAL1mJE7x = await TPA.new({from: accounts[0]});
		const uintXCjsTJR = BigInt("971")
		const address85QUOb = "0x0000000000000000000000000000000000000001"
		const addressRz5JKeq = accounts[1]
		const uintEfAC89 = BigInt("1536")
		const addresswlcsm7W = accounts[2]
		const addressBagBrDY = accounts[1]
		const boolyJwcFo = await TPAL1mJE7x.unlock.call(address85QUOb, uintXCjsTJR, {from: accounts[1]});
		const boolCRLg6se = await TPAL1mJE7x.freezeAccount.call(addressRz5JKeq, {from: accounts[2]});
		await TPAL1mJE7x.pause.call({from: accounts[5]});
		const boolvYvUT5A = await TPAL1mJE7x.transferFrom.call(addressBagBrDY, addresswlcsm7W, uintEfAC89, {from: accounts[4]});

		await expect(TPAL1mJE7x.unlock.call(address85QUOb, uintXCjsTJR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPALu8Zd3U = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgyt1taT = accounts[0]
		const addressRtbW2ys = accounts[4]
		const addressJ6LQiL0 = accounts[3]
		const uint256kvpBLxK = await TPALu8Zd3U.balanceOf.call(addressgyt1taT, {from: accounts[1]});
		const addressFqkX2iW = await TPALu8Zd3U.transferOwnership.call(addressRtbW2ys, {from: accounts[3]});
		const addressfsxqnhm = await TPALu8Zd3U.transferOwnership.call(addressJ6LQiL0, {from: accounts[0]});
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
		const uintFy83Zk5 = BigInt("1791")
		const addresscHlyr8x = "0x0000000000000000000000000000000000000001"
		const uintOL208ig = BigInt("444")
		const addresshrjDUrp = accounts[0]
		const uintDGjsD3e = BigInt("535")
		const addressktQPXhS = accounts[2]
		const addressInkaef7 = accounts[4]
		const uintY9ocXr9 = BigInt("330")
		const boolgXKLBYL = await TPAlVPard5.increaseAllowance.call(addresscHlyr8x, uintFy83Zk5, {from: accounts[1]});
		const boolStzBcN = await TPAlVPard5.transfer.call(addresshrjDUrp, uintOL208ig, {from: accounts[4]});
		const boolkzT5AHJ = await TPAlVPard5.increaseAllowance.call(addressktQPXhS, uintDGjsD3e, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QwMu0zz = await TPAlVPard5.balanceOf.call(addressInkaef7, {from: accounts[3]});
		const uint256hRex4My = await TPAlVPard5.burn.call(uintY9ocXr9, {from: accounts[4]});

		assert.equal(boolgXKLBYL, true)
		await expect(TPAlVPard5.transfer.call(addresshrjDUrp, uintOL208ig, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
		const uintxtNWzE3 = BigInt("1791")
		const addressRfPI8XV = "0x0000000000000000000000000000000000000001"
		const uintef3MwYj = BigInt("535")
		const addressTox4jrN = accounts[2]
		const addressDodeHZf = accounts[4]
		const uintDQzbzev = BigInt("330")
		const boolgXKLBYL = await TPAlVPard5.increaseAllowance.call(addressRfPI8XV, uintxtNWzE3, {from: accounts[1]});
		const boolkzT5AHJ = await TPAlVPard5.increaseAllowance.call(addressTox4jrN, uintef3MwYj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QwMu0zz = await TPAlVPard5.balanceOf.call(addressDodeHZf, {from: accounts[3]});
		const uint256hRex4My = await TPAlVPard5.burn.call(uintDQzbzev, {from: accounts[4]});

		assert.equal(boolgXKLBYL, true)
		assert.equal(boolkzT5AHJ, true)
		assert.equal(uint256QwMu0zz, BigInt("0"))
		await expect(TPAlVPard5.burn.call(uintDQzbzev, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
		const uintXzgiX4F = BigInt("1791")
		const addressueBTa3o = "0x0000000000000000000000000000000000000001"
		const uintV5O60y7 = BigInt("421")
		const addressVLOsz1M = accounts[0]
		const uintOTSGAIk = BigInt("535")
		const addressSkoeTW3 = accounts[2]
		const addressjxQks78 = accounts[5]
		const addressEW9T8qU = accounts[5]
		await TPAlVPard5.pause.call({from: accounts[2]});
		const boolgXKLBYL = await TPAlVPard5.increaseAllowance.call(addressueBTa3o, uintXzgiX4F, {from: accounts[1]});
		const boolStzBcN = await TPAlVPard5.transfer.call(addressVLOsz1M, uintV5O60y7, {from: accounts[4]});
		const boolkzT5AHJ = await TPAlVPard5.increaseAllowance.call(addressSkoeTW3, uintOTSGAIk, {from: "0x0000000000000000000000000000000000000001"});
		const addressKE5MIbE = await TPAlVPard5.removeAdmin.call(addressjxQks78, {from: accounts[5]});
		const uint256QwMu0zz = await TPAlVPard5.balanceOf.call(addressEW9T8qU, {from: accounts[3]});

		await expect(TPAlVPard5.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
		const uintD8Cjws = BigInt("1791")
		const addressxscoQ5d = "0x0000000000000000000000000000000000000001"
		const uintc0n0QsH = BigInt("535")
		const addressj9oRd5p = accounts[2]
		const addressnBOVpJE = accounts[4]
		const uintqPZcSd9 = BigInt("1525")
		const addressXgulhlb = accounts[0]
		const addressijV1zry = accounts[0]
		const uintt4K6Yzn = BigInt("330")
		const boolgXKLBYL = await TPAlVPard5.increaseAllowance.call(addressxscoQ5d, uintD8Cjws, {from: accounts[1]});
		const boolkzT5AHJ = await TPAlVPard5.increaseAllowance.call(addressj9oRd5p, uintc0n0QsH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QwMu0zz = await TPAlVPard5.balanceOf.call(addressnBOVpJE, {from: accounts[3]});
		const boolmIVuhaW = await TPAlVPard5.transferFrom.call(addressijV1zry, addressXgulhlb, uintqPZcSd9, {from: accounts[0]});
		const uint256hRex4My = await TPAlVPard5.burn.call(uintt4K6Yzn, {from: accounts[4]});

		assert.equal(boolgXKLBYL, true)
		assert.equal(boolkzT5AHJ, true)
		assert.equal(uint256QwMu0zz, BigInt("0"))
		await expect(TPAlVPard5.transferFrom.call(addressijV1zry, addressXgulhlb, uintqPZcSd9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
		const uintW6vVZLk = BigInt("1791")
		const addressuHOdnuC = "0x0000000000000000000000000000000000000001"
		const uintJ0aypE8 = BigInt("4")
		const addressi6bDcsp = accounts[1]
		const addressRNZndWT = accounts[4]
		const uintj6R4ivP = BigInt("330")
		const boolgXKLBYL = await TPAlVPard5.increaseAllowance.call(addressuHOdnuC, uintW6vVZLk, {from: accounts[1]});
		const boolqjOMhtF = await TPAlVPard5.increaseAllowance.call(addressi6bDcsp, uintJ0aypE8, {from: accounts[5]});
		const uint256QwMu0zz = await TPAlVPard5.balanceOf.call(addressRNZndWT, {from: accounts[3]});
		const stringulMgtF2 = await TPAlVPard5.name.call({from: accounts[2]});
		const uint256hRex4My = await TPAlVPard5.burn.call(uintj6R4ivP, {from: accounts[4]});

		assert.equal(boolgXKLBYL, true)
		assert.equal(boolqjOMhtF, true)
		assert.equal(stringulMgtF2, "TPA")
		assert.equal(uint256QwMu0zz, BigInt("0"))
		await expect(TPAlVPard5.burn.call(uintj6R4ivP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
		const uintSyEUV1 = BigInt("1791")
		const addressEUDSqee = "0x0000000000000000000000000000000000000001"
		const uintNkpm6Kp = BigInt("535")
		const addressO7gguxi = accounts[2]
		const addresslLllME = accounts[5]
		const uintcj7vKc0 = BigInt("1525")
		const addresso0JeiU = accounts[0]
		const addressXEg5H1w = accounts[0]
		const uintTP7Nn5m = BigInt("330")
		const boolgXKLBYL = await TPAlVPard5.increaseAllowance.call(addressEUDSqee, uintSyEUV1, {from: accounts[1]});
		const boolkzT5AHJ = await TPAlVPard5.increaseAllowance.call(addressO7gguxi, uintNkpm6Kp, {from: "0x0000000000000000000000000000000000000001"});
		const stringxMuWtCu = await TPAlVPard5.symbol.call({from: accounts[2]});
		await TPAlVPard5.onlyOwner.call({from: accounts[2]});
		const uint256QwMu0zz = await TPAlVPard5.balanceOf.call(addresslLllME, {from: accounts[3]});
		const boolmIVuhaW = await TPAlVPard5.transferFrom.call(addressXEg5H1w, addresso0JeiU, uintcj7vKc0, {from: accounts[0]});
		const uint256hRex4My = await TPAlVPard5.burn.call(uintTP7Nn5m, {from: accounts[4]});

		assert.equal(boolgXKLBYL, true)
		assert.equal(boolkzT5AHJ, true)
		assert.equal(stringxMuWtCu, "TPA")
		await expect(TPAlVPard5.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
		const uintZ7rbXdy = BigInt("1791")
		const addressAxkwjG3 = "0x0000000000000000000000000000000000000001"
		const addressorbzSVf = accounts[5]
		const addressmH8dzAY = "0x0000000000000000000000000000000000000001"
		const boolgXKLBYL = await TPAlVPard5.increaseAllowance.call(addressAxkwjG3, uintZ7rbXdy, {from: accounts[1]});
		const uint256QwMu0zz = await TPAlVPard5.balanceOf.call(addressorbzSVf, {from: accounts[3]});
		const address7ySim7 = await TPAlVPard5.transferOwnership.call(addressmH8dzAY, {from: accounts[2]});

		assert.equal(boolgXKLBYL, true)
		assert.equal(uint256QwMu0zz, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAy8RAJou = await TPA.new({from: accounts[0]});
		const addressFuGBS9 = "0x0000000000000000000000000000000000000001"
		const uint256Raykkxt = await TPAy8RAJou.totalSupply.call({from: accounts[4]});
		const uint256Fv0GkbW = await TPAy8RAJou.balanceOf.call(addressFuGBS9, {from: accounts[4]});

		assert.equal(uint256Fv0GkbW, BigInt("0"))
		assert.equal(uint256Raykkxt, BigInt("10000000000000000000000000000"))
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
		const uintiHlCnyg = BigInt("1791")
		const addressMgft07x = "0x0000000000000000000000000000000000000001"
		const uintNJl6CZ = BigInt("1538")
		const addressJYlYmK = accounts[0]
		const uintmX8ulwA = BigInt("444")
		const addresskrSz6wF = accounts[0]
		const addressEZe6ff = accounts[6]
		const addressL4XNr2Q = accounts[3]
		const boolgXKLBYL = await TPAlVPard5.increaseAllowance.call(addressMgft07x, uintiHlCnyg, {from: accounts[1]});
		const boolbpArIQ = await TPAlVPard5.approve.call(addressJYlYmK, uintNJl6CZ, {from: accounts[0]});
		const boolStzBcN = await TPAlVPard5.transfer.call(addresskrSz6wF, uintmX8ulwA, {from: accounts[4]});
		const uint256QwMu0zz = await TPAlVPard5.balanceOf.call(addressEZe6ff, {from: accounts[3]});
		const addressXlnibHE = await TPAlVPard5.transferOwnership.call(addressL4XNr2Q, {from: accounts[2]});

		assert.equal(boolbpArIQ, true)
		assert.equal(boolgXKLBYL, true)
		await expect(TPAlVPard5.transfer.call(addresskrSz6wF, uintmX8ulwA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
		const uintnRqS9xp = BigInt("1327")
		const uintMUkUfNo = BigInt("753")
		const addressBE6CeC2 = accounts[0]
		const addressQV6FtcX = accounts[0]
		const addressbTH7NE8 = accounts[5]
		const boolPEmGV8r = await TPAlVPard5.transferWithLock.call(addressBE6CeC2, uintMUkUfNo, uintnRqS9xp, {from: accounts[2]});
		const boolV4aazD1 = await TPAlVPard5.isOwner.call(addressQV6FtcX, {from: accounts[1]});
		await TPAlVPard5.whenNotPaused.call({from: accounts[3]});
		const uint256QwMu0zz = await TPAlVPard5.balanceOf.call(addressbTH7NE8, {from: accounts[3]});

		assert.equal(boolPEmGV8r, true)
		assert.equal(boolV4aazD1, false)
		await expect(TPAlVPard5.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
		const uintCT7OjD = BigInt("661")
		const addressTouXjxD = accounts[1]
		const addressNhgE8n7 = accounts[5]
		const addressfTP6Gjz = accounts[4]
		const uint8AkEKHR1 = await TPAlVPard5.decimals.call({from: accounts[3]});
		const boolzbuqDGl = await TPAlVPard5.transferFrom.call(addressNhgE8n7, addressTouXjxD, uintCT7OjD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QwMu0zz = await TPAlVPard5.balanceOf.call(addressfTP6Gjz, {from: accounts[3]});

		assert.equal(uint8AkEKHR1, BigInt("18"))
		await expect(TPAlVPard5.transferFrom.call(addressNhgE8n7, addressTouXjxD, uintCT7OjD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
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
		const boolgXKLBYL = await TPAlVPard5.increaseAllowance.call(addressubWRxZb, uintyzwyYh, {from: accounts[1]});
		const boolWD9oASc = await TPAlVPard5.paused.call({from: accounts[2]});
		const boolkzT5AHJ = await TPAlVPard5.increaseAllowance.call(addressvTn7IeA, uintTJCy8tt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QwMu0zz = await TPAlVPard5.balanceOf.call(addressGjuvLl, {from: accounts[3]});
		const boolmIVuhaW = await TPAlVPard5.transferFrom.call(addressFKFuhqw, addressNZOqlTh, uintsUZTw0k, {from: accounts[0]});
		const bool7E5Wnq = await TPAlVPard5.transferFrom.call(addressvZvA89j, addresscGzuES3, uintMetmWg9, {from: accounts[1]});
		const uint256LJyvU2O = await TPAlVPard5.totalSupply.call({from: accounts[5]});
		const uint256hRex4My = await TPAlVPard5.burn.call(uintdBu7hT, {from: accounts[4]});

		assert.equal(boolWD9oASc, false)
		assert.equal(boolgXKLBYL, true)
		assert.equal(boolkzT5AHJ, true)
		assert.equal(uint256QwMu0zz, BigInt("0"))
		await expect(TPAlVPard5.transferFrom.call(addressFKFuhqw, addressNZOqlTh, uintsUZTw0k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgGJbvFt = await TPA.new({from: accounts[1]});
		const uintAja6V5C = BigInt("1410")
		const uintWYL2Kns = BigInt("440")
		const addressJdsh2Sf = accounts[5]
		await TPAgGJbvFt.renounceAdmin.call({from: accounts[4]});
		await TPAgGJbvFt.onlyAdmin.call({from: accounts[5]});
		const booljVeTvXq = await TPAgGJbvFt.transferWithLock.call(addressJdsh2Sf, uintWYL2Kns, uintAja6V5C, {from: accounts[0]});

		await expect(TPAgGJbvFt.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAQtmSI8h = await TPA.new({from: accounts[2]});
		const uintWmjl3A = BigInt("904")
		const addressAV85oUi = accounts[3]
		const uintYxcBqAc = BigInt("669")
		const addressV2dd0TD = accounts[1]
		const uintuqKaSVk = BigInt("842")
		const addressmnqMZ1X = "0x0000000000000000000000000000000000000001"
		const addressp8ss6R7 = "0x0000000000000000000000000000000000000001"
		const addressDt3dHQ = accounts[4]
		const booljmU0PGd = await TPAQtmSI8h.unlock.call(addressAV85oUi, uintWmjl3A, {from: accounts[2]});
		const booloeplT8q = await TPAQtmSI8h.increaseAllowance.call(addressV2dd0TD, uintYxcBqAc, {from: accounts[1]});
		const addressfqETNrO = await TPAQtmSI8h.burnFrom.call(addressmnqMZ1X, uintuqKaSVk, {from: accounts[4]});
		const uint256wKUIYsq = await TPAQtmSI8h.allowance.call(addressDt3dHQ, addressp8ss6R7, {from: accounts[1]});

		await expect(TPAQtmSI8h.unlock.call(addressAV85oUi, uintWmjl3A, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
		const uintYeoDc37 = BigInt("1725")
		const addressICll8g5 = accounts[0]
		const uinto9J8D7F = BigInt("464")
		const addressRDOAv3g = accounts[0]
		const addressoL2wRae = await TPAlVPard5.burnFrom.call(addressICll8g5, uintYeoDc37, {from: accounts[3]});
		const boolStzBcN = await TPAlVPard5.transfer.call(addressRDOAv3g, uinto9J8D7F, {from: accounts[4]});

		await expect(TPAlVPard5.burnFrom.call(addressICll8g5, uintYeoDc37, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
		const addresspbjOWxL = accounts[1]
		const uintILDhqvG = BigInt("661")
		const addresstWTAbU = accounts[1]
		const addressCNKe3Fh = accounts[5]
		const uint8AkEKHR1 = await TPAlVPard5.decimals.call({from: accounts[3]});
		const addressrH7J9sz = await TPAlVPard5.addAdmin.call(addresspbjOWxL, {from: accounts[2]});
		const boolzbuqDGl = await TPAlVPard5.transferFrom.call(addressCNKe3Fh, addresstWTAbU, uintILDhqvG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8AkEKHR1, BigInt("18"))
		await expect(TPAlVPard5.transferFrom.call(addressCNKe3Fh, addresstWTAbU, uintILDhqvG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlVPard5 = await TPA.new({from: accounts[2]});
		const uinte0Dso9H = BigInt("1267")
		const uintBrdHXNK = BigInt("251")
		const addressg4wfSs = accounts[2]
		const uint3DAey0 = BigInt("661")
		const addressvJMDoA3 = accounts[1]
		const addressOwu51aY = accounts[5]
		const boolQ7fvXh = await TPAlVPard5.lock.call(addressg4wfSs, uintBrdHXNK, uinte0Dso9H, {from: accounts[2]});
		const boolzbuqDGl = await TPAlVPard5.transferFrom.call(addressOwu51aY, addressvJMDoA3, uint3DAey0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolQ7fvXh, true)
		await expect(TPAlVPard5.transferFrom.call(addressOwu51aY, addressvJMDoA3, uint3DAey0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})