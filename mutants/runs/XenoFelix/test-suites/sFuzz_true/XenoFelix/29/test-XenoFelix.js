const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringOKRDXbG = "8sq3XVJjIdQqB9VqBPyfiG9hkaNIWt"
		const stringRjocDuh = "NgLcVJH1azIuNhbGrx7s6wVQyxXDr9G6q2VqOBBXG1HVH2fAGq2x22iGINBgpVtoWqLOa1y"
		const uintzqBWeFH = BigInt("247")
		const XenoFelixyiAErF = await XenoFelix.new(stringOKRDXbG, stringRjocDuh, uintzqBWeFH, {from: accounts[5]});
		const uinta8vNpS = BigInt("1581")
		const uintKcC4d7j = BigInt("824")
		const addresspc42rE6 = accounts[0]
		const addressewR5O5Q = accounts[2]
		const uint256OQFDPmj = await XenoFelixyiAErF.burn.call(uinta8vNpS, {from: accounts[1]});
		const booljASLsT = await XenoFelixyiAErF.transfer.call(addresspc42rE6, uintKcC4d7j, {from: accounts[3]});
		const addressDzdXsRN = await XenoFelixyiAErF.addPauser.call(addressewR5O5Q, {from: accounts[2]});
		await XenoFelixyiAErF.onlyPauser.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringMry11H2 = "6qW1tkg2dXDtSi77VQ32LXerKeGJLSKF8PEm6MUTdKyf3nhkHSleTQcfpgF6ecAlNBWhEfgmQdQSX2iiPOyNoXSp9dM14r9H"
		const stringtWWdtC = "sp"
		const uintOv0vJtR = BigInt("216")
		const XenoFelixrFDfw6c = await XenoFelix.new(stringMry11H2, stringtWWdtC, uintOv0vJtR, {from: accounts[2]});
		const addressV4XPG3 = "0x0000000000000000000000000000000000000001"
		const uint256IjmOpuQ = await XenoFelixrFDfw6c.totalSupply.call({from: accounts[3]});
		const uint256XRCXfkV = await XenoFelixrFDfw6c.totalSupply.call({from: accounts[2]});
		const boolMDqdvyD = await XenoFelixrFDfw6c.isOwner.call(addressV4XPG3, {from: accounts[3]});
		const stringgerYZv4 = await XenoFelixrFDfw6c.name.call({from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixWQNyGoG = await XenoFelix.new({from: accounts[3]});
		const address64RA7n = accounts[0]
		const addressI2VPgoY = accounts[0]
		const addressVBj7lyP = await XenoFelixWQNyGoG.addPauser.call(address64RA7n, {from: accounts[2]});
		const boolQN4T93U = await XenoFelixWQNyGoG.freezeAccount.call(addressI2VPgoY, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringRWA4pnI = "GU7KmfIqZkf6DYY3EXPoLElKUYDOaL7yb9t18sKx8UG4"
		const stringfBZwwU = "R79aWbTsRUrJwY1ByXlEhJn25Tb6Yf33pLtU1CitwNB59SajK79EQ7dWm13vahAwcE"
		const uintr6OBXSo = BigInt("860")
		const uintp1Gxwgv = BigInt("123")
		const XenoFelixfaMGvs7 = await XenoFelix.new(stringRWA4pnI, stringfBZwwU, uintr6OBXSo, uintp1Gxwgv, {from: "0x0000000000000000000000000000000000000001"});
		const uintx0Rhfky = BigInt("1902")
		const addressPtRSOxO = accounts[0]
		const uintbQ7ZRFB = BigInt("1670")
		const addressPWPh174 = accounts[2]
		const addressOICpQCd = accounts[2]
		await XenoFelixfaMGvs7.renouncePauser.call({from: accounts[4]});
		await XenoFelixfaMGvs7.onlyNewOwner.call({from: accounts[3]});
		const addressJ3P2aYK = await XenoFelixfaMGvs7.burnFrom.call(addressPtRSOxO, uintx0Rhfky, {from: accounts[1]});
		const boolgRcssd2 = await XenoFelixfaMGvs7.increaseAllowance.call(addressPWPh174, uintbQ7ZRFB, {from: accounts[2]});
		const uint256qKJQIw = await XenoFelixfaMGvs7.balanceOf.call(addressOICpQCd, {from: accounts[3]});
		const uint82kqtXm = await XenoFelixfaMGvs7.decimals.call({from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringuO0mpjn = "IRTnYi2GFwF4MYLl"
		const stringV1KzQJy = "RlvhSPUu7jstmfECWjbVoPbkQqij"
		const uintX4eO2sa = BigInt("101")
		const XenoFelixJBtevvj = await XenoFelix.new(stringuO0mpjn, stringV1KzQJy, uintX4eO2sa, {from: accounts[4]});
		const addresszznQ508 = "0x0000000000000000000000000000000000000001"
		const uinttwYkKTd = BigInt("236")
		const addressTv3SuU = accounts[2]
		const addressolq3TPn = accounts[3]
		const boolrRafWh = await XenoFelixJBtevvj.isPauser.call(addresszznQ508, {from: accounts[3]});
		const boolqYZWqUT = await XenoFelixJBtevvj.transfer.call(addressTv3SuU, uinttwYkKTd, {from: "0x0000000000000000000000000000000000000001"});
		const boolMfLGv8e = await XenoFelixJBtevvj.acceptOwnership.call({from: accounts[1]});
		const addressquFzRF = await XenoFelixJBtevvj.notFrozen.call(addressolq3TPn, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringml2Qzxv = "xgPKdwXtfJwN7GP7xUcpPvCLVTMwaXQI2YEq7n3TrsNyq0ljG7JOisQOGV1merTCluy61u8ZlswzZWwm3a5nDKLtKl8aiWUBTn"
		const stringQRlWiwH = "KDbgwyzM3C2Him"
		const uintIPbhHck = BigInt("182")
		const XenoFelixylkZ8EX = await XenoFelix.new(stringml2Qzxv, stringQRlWiwH, uintIPbhHck, {from: accounts[1]});
		const addressxZm5swY = accounts[1]
		const uinty4URZB = BigInt("1018")
		const addressqK3gVf3 = accounts[0]
		const addresszz6EdGl = accounts[1]
		const boolJhxKz2k = await XenoFelixylkZ8EX.isPauser.call(addressxZm5swY, {from: accounts[0]});
		const boolUzyofHJ = await XenoFelixylkZ8EX.transferFrom.call(addresszz6EdGl, addressqK3gVf3, uinty4URZB, {from: "0x0000000000000000000000000000000000000001"});
		const stringvtOE62O = await XenoFelixylkZ8EX.name.call({from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringxZInkB0 = "eHWqS4OC9fTRTVfA545JdmuByp2cl5YryAHws4NEntx"
		const stringptyy6Rx = "7luOp"
		const uintMuK2H2D = BigInt("204")
		const XenoFelixuyUOSpd = await XenoFelix.new(stringxZInkB0, stringptyy6Rx, uintMuK2H2D, {from: accounts[0]});
		const addressbhT5z7C = accounts[1]
		const uintah30ta = BigInt("166")
		const addressgjOPpb9 = accounts[0]
		const boolkDe7Xw = await XenoFelixuyUOSpd.isPauser.call(addressbhT5z7C, {from: accounts[0]});
		const uint8a8fQgj = await XenoFelixuyUOSpd.decimals.call({from: accounts[3]});
		const addressE17FUKJ = await XenoFelixuyUOSpd.burnFrom.call(addressgjOPpb9, uintah30ta, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringIf6D5XO = "AgGsbnH7VyfyZwmId6kHkaM1fxwCezFIYSn6o8gKdz"
		const stringID5pxVK = "dGzDVGSIaJwwvlxXHa1L7eDl24vxEg45ncF4UkmDNfdD19pZq5gtAsu82RIPK7dV3K2"
		const uintZfmVuu = BigInt("520")
		const uintoAABazj = BigInt("86")
		const XenoFelixAgTImYW = await XenoFelix.new(stringIf6D5XO, stringID5pxVK, uintZfmVuu, uintoAABazj, {from: accounts[3]});
		const uintVz3wTZr = BigInt("243")
		const addresslbLZaLt = accounts[3]
		const addressTbX0SAD = await XenoFelixAgTImYW.burnFrom.call(addresslbLZaLt, uintVz3wTZr, {from: accounts[4]});
		const boolUTweKLf = await XenoFelixAgTImYW.acceptOwnership.call({from: accounts[4]});

		await expect(XenoFelixAgTImYW.burnFrom.call(addresslbLZaLt, uintVz3wTZr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIf6D5XO = "AgGsbnH7VyfyZwmId6kHkaM1fxwCezFIYSn6o8gKdz"
		const stringID5pxVK = "dGzDVGSIaJwwvlxXHa1L7eDl24vxEg45ncF4UkmDNfdD19pZq5gtAsu82RIPK7dV3K2"
		const uintVW1xqJR = BigInt("520")
		const uintp1joOw = BigInt("86")
		const XenoFelixAgTImYW = await XenoFelix.new(stringIf6D5XO, stringID5pxVK, uintVW1xqJR, uintp1joOw, {from: accounts[3]});
		const addressNu3L2U = "0x0000000000000000000000000000000000000001"
		const boolwx8eGIL = await XenoFelixAgTImYW.isPauser.call(addressNu3L2U, {from: accounts[1]});
		const boolUTweKLf = await XenoFelixAgTImYW.acceptOwnership.call({from: accounts[4]});

		assert.equal(boolwx8eGIL, false)
		await expect(XenoFelixAgTImYW.acceptOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringajpkL6q = "tRwJqBRubkMmNN2DQmLleK8ENw2XGxwMox"
		const stringsFA3hkI = "GvuhO7LUc2T5pfnqepFU2PtgD9V75xZEDHlIrhov4zaYg4la8PzmIQAyVHbePixmU69idFB0QfqAqsidoxU"
		const uintU4YpJEv = BigInt("197")
		const XenoFelixM0crIXv = await XenoFelix.new(stringajpkL6q, stringsFA3hkI, uintU4YpJEv, {from: accounts[3]});
		const addressOnxU8rZ = accounts[4]
		const uintX2XAeEA = BigInt("1348")
		const uintdIionP1 = BigInt("705")
		const addressRpC1AoD = accounts[2]
		const boolMNrbq8M = await XenoFelixM0crIXv.freezeAccount.call(addressOnxU8rZ, {from: accounts[4]});
		const booleKYysb = await XenoFelixM0crIXv.lock.call(addressRpC1AoD, uintdIionP1, uintX2XAeEA, {from: accounts[2]});
		const uint256x8KMsVa = await XenoFelixM0crIXv.totalSupply.call({from: accounts[1]});
		await XenoFelixM0crIXv.pause.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixM0crIXv.onlyNewOwner.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringIf6D5XO = "AgGsbnH7VyfyZwmId6kHkaM1fxwCezFIYSn6o8gKdz"
		const stringID5pxVK = "dGzDVGSIaJwwvlxXHa1L7eDl24vxEg45ncF4UkmDNfdD19pZq5gtAsu82RIPK7dV3K2"
		const uintNgc32mF = BigInt("520")
		const uintaGapnHz = BigInt("86")
		const XenoFelixAgTImYW = await XenoFelix.new(stringIf6D5XO, stringID5pxVK, uintNgc32mF, uintaGapnHz, {from: accounts[3]});
		const uintcqZWvL = BigInt("634")
		const addressZVY5RmK = accounts[2]
		const uintAmjvyr8 = BigInt("1008")
		const addressQeaA5vH = accounts[1]
		const addressiHwlkq7 = accounts[4]
		const uintxXzCORn = BigInt("243")
		const addressh7W2gYR = accounts[3]
		const boolEJPp9yM = await XenoFelixAgTImYW.burnOwner.call(addressZVY5RmK, uintcqZWvL, {from: accounts[3]});
		const boolT5Le1vR = await XenoFelixAgTImYW.transferFrom.call(addressiHwlkq7, addressQeaA5vH, uintAmjvyr8, {from: accounts[1]});
		const addressTbX0SAD = await XenoFelixAgTImYW.burnFrom.call(addressh7W2gYR, uintxXzCORn, {from: accounts[4]});
		const boolUTweKLf = await XenoFelixAgTImYW.acceptOwnership.call({from: accounts[4]});

		await expect(XenoFelixAgTImYW.burnOwner.call(addressZVY5RmK, uintcqZWvL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIf6D5XO = "AgGsbnH7VyfyZwmId6kHkaM1fxwCezFIYSn6o8gKdz"
		const stringID5pxVK = "dGzDVGSIaJwwvlxXHa1L7eDl24vxEg45ncF4UkmDNfdD19pZq5gtAsu82RIPK7dV3K2"
		const uintN5vfYYL = BigInt("520")
		const uintsDBzNS = BigInt("86")
		const XenoFelixAgTImYW = await XenoFelix.new(stringIf6D5XO, stringID5pxVK, uintN5vfYYL, uintsDBzNS, {from: accounts[3]});
		const addresstraWGzM = accounts[5]
		const uintfhJA0EQ = BigInt("243")
		const addressNixdKG = accounts[3]
		const uintCl86Tqz = BigInt("854")
		const addressPL8UXL = accounts[1]
		const addressgtrISNB = accounts[5]
		const addressHfdKm9e = accounts[4]
		const addressmNqOB9 = await XenoFelixAgTImYW.notFrozen.call(addresstraWGzM, {from: "0x0000000000000000000000000000000000000001"});
		const addressTbX0SAD = await XenoFelixAgTImYW.burnFrom.call(addressNixdKG, uintfhJA0EQ, {from: accounts[4]});
		const boola9QohJE = await XenoFelixAgTImYW.increaseAllowance.call(addressPL8UXL, uintCl86Tqz, {from: accounts[1]});
		const boolUTweKLf = await XenoFelixAgTImYW.acceptOwnership.call({from: accounts[4]});
		const boolutbuIhh = await XenoFelixAgTImYW.unfreezeAccount.call(addressgtrISNB, {from: accounts[1]});
		const addressrEosYte = await XenoFelixAgTImYW.addPauser.call(addressHfdKm9e, {from: accounts[2]});

		await expect(XenoFelixAgTImYW.notFrozen.call(addresstraWGzM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringIf6D5XO = "AgGsbnH7VyfyZwmId6kHkaM1fxwCezFIYSn6o8gKdz"
		const stringID5pxVK = "dGzDVGSIaJwwvlxXHa1L7eDl24vxEg45ncF4UkmDNfdD19pZq5gtAsu82RIPK7dV3K2"
		const uintDsS6yFs = BigInt("520")
		const uintevEQXxp = BigInt("86")
		const XenoFelixAgTImYW = await XenoFelix.new(stringIf6D5XO, stringID5pxVK, uintDsS6yFs, uintevEQXxp, {from: accounts[3]});
		const addressTYLXkrr = accounts[4]
		const addressu4PTzku = accounts[4]
		const uintPbJB4xo = BigInt("429")
		const addressCToTZ0l = accounts[5]
		const uint256V5Kxi4O = await XenoFelixAgTImYW.allowance.call(addressu4PTzku, addressTYLXkrr, {from: accounts[5]});
		const addressLeR7Y2J = await XenoFelixAgTImYW.burnFrom.call(addressCToTZ0l, uintPbJB4xo, {from: accounts[4]});
		const boolUTweKLf = await XenoFelixAgTImYW.acceptOwnership.call({from: accounts[4]});

		assert.equal(uint256V5Kxi4O, BigInt("0"))
		await expect(XenoFelixAgTImYW.burnFrom.call(addressCToTZ0l, uintPbJB4xo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uinttWJYn0W = BigInt("1938")
		const uintf5dLiI3 = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uinttWJYn0W, uintf5dLiI3, {from: accounts[2]});
		const addressYUxqFxl = accounts[0]
		const uint256V7ovz7G = await XenoFelixiJT0aZL.balanceOf.call(addressYUxqFxl, {from: accounts[4]});
		await XenoFelixiJT0aZL.unpause.call({from: accounts[4]});

		assert.equal(uint256V7ovz7G, BigInt("0"))
		await expect(XenoFelixiJT0aZL.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintmaXVQaA = BigInt("1938")
		const uintZFNp3lE = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintmaXVQaA, uintZFNp3lE, {from: accounts[2]});
		const addressZwgUFg1 = accounts[0]
		const addressbTEAMd3 = accounts[4]
		await XenoFelixiJT0aZL.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256V7ovz7G = await XenoFelixiJT0aZL.balanceOf.call(addressZwgUFg1, {from: accounts[4]});
		await XenoFelixiJT0aZL.whenNotPaused.call({from: accounts[5]});
		const addresstdNV9Qd = await XenoFelixiJT0aZL.notFrozen.call(addressbTEAMd3, {from: accounts[3]});

		await expect(XenoFelixiJT0aZL.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintHxuJDjL = BigInt("1938")
		const uintpfJFPQO = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintHxuJDjL, uintpfJFPQO, {from: accounts[2]});
		const address3tuvac = accounts[1]
		const boolZmBTOxE = await XenoFelixiJT0aZL.paused.call({from: accounts[2]});
		const uint256V7ovz7G = await XenoFelixiJT0aZL.balanceOf.call(address3tuvac, {from: accounts[4]});

		assert.equal(boolZmBTOxE, false)
		assert.equal(uint256V7ovz7G, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintuIjvufG = BigInt("1938")
		const uintkVWKzu5 = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintuIjvufG, uintkVWKzu5, {from: accounts[2]});
		const uintMr8XfwQ = BigInt("983")
		const addressauotMty = accounts[4]
		const addressbkJxUUx = accounts[1]
		const boolleIpDf9 = await XenoFelixiJT0aZL.transfer.call(addressauotMty, uintMr8XfwQ, {from: accounts[3]});
		const uint256V7ovz7G = await XenoFelixiJT0aZL.balanceOf.call(addressbkJxUUx, {from: accounts[4]});

		await expect(XenoFelixiJT0aZL.transfer.call(addressauotMty, uintMr8XfwQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintLMMe99S = BigInt("1938")
		const uintw5Tt02a = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintLMMe99S, uintw5Tt02a, {from: accounts[2]});
		const addressfQN58Of = accounts[0]
		const uintr7EvaX0 = BigInt("986")
		const addressRuZveb = accounts[5]
		const addressirr99az = accounts[3]
		const addressww0xyda = accounts[5]
		const string5OPBho = await XenoFelixiJT0aZL.name.call({from: accounts[4]});
		await XenoFelixiJT0aZL.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256V7ovz7G = await XenoFelixiJT0aZL.balanceOf.call(addressfQN58Of, {from: accounts[4]});
		const boolM1UutvY = await XenoFelixiJT0aZL.transferFrom.call(addressirr99az, addressRuZveb, uintr7EvaX0, {from: accounts[3]});
		await XenoFelixiJT0aZL.whenNotPaused.call({from: accounts[5]});
		const addresstdNV9Qd = await XenoFelixiJT0aZL.notFrozen.call(addressww0xyda, {from: accounts[3]});

		assert.equal(string5OPBho, "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ")
		await expect(XenoFelixiJT0aZL.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintcjY1ZPb = BigInt("1938")
		const uintXKFQEn = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintcjY1ZPb, uintXKFQEn, {from: accounts[2]});
		const addressSl9VhOJ = accounts[0]
		const uintF876aOg = BigInt("1953")
		const addressPoR3Lai = accounts[0]
		const addressJfuXrqc = accounts[3]
		const uint256V7ovz7G = await XenoFelixiJT0aZL.balanceOf.call(addressSl9VhOJ, {from: accounts[4]});
		const booliAnvxvb = await XenoFelixiJT0aZL.transferFrom.call(addressJfuXrqc, addressPoR3Lai, uintF876aOg, {from: accounts[1]});

		assert.equal(uint256V7ovz7G, BigInt("0"))
		await expect(XenoFelixiJT0aZL.transferFrom.call(addressJfuXrqc, addressPoR3Lai, uintF876aOg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintYnY86AJ = BigInt("1938")
		const uintFitiYbz = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintYnY86AJ, uintFitiYbz, {from: accounts[2]});
		const addressf3Me4zv = accounts[1]
		const addressDQxldJq = "0x0000000000000000000000000000000000000001"
		const uint256V7ovz7G = await XenoFelixiJT0aZL.balanceOf.call(addressf3Me4zv, {from: accounts[4]});
		const uint8JWc99hQ = await XenoFelixiJT0aZL.decimals.call({from: accounts[1]});
		const addresslvkWo6a = await XenoFelixiJT0aZL.transferOwnership.call(addressDQxldJq, {from: accounts[3]});

		assert.equal(uint256V7ovz7G, BigInt("0"))
		assert.equal(uint8JWc99hQ, BigInt("204"))
		await expect(XenoFelixiJT0aZL.transferOwnership.call(addressDQxldJq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintphTNsZw = BigInt("1938")
		const uintwshw2jG = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintphTNsZw, uintwshw2jG, {from: accounts[2]});
		const uintffQgM14 = BigInt("176")
		const addresslAA7HdK = accounts[5]
		const boolGBLl2b0 = await XenoFelixiJT0aZL.decreaseAllowance.call(addresslAA7HdK, uintffQgM14, {from: accounts[0]});
		await XenoFelixiJT0aZL.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixiJT0aZL.decreaseAllowance.call(addresslAA7HdK, uintffQgM14, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintV9IgxOI = BigInt("1938")
		const uintRnpbBQD = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintV9IgxOI, uintRnpbBQD, {from: accounts[2]});
		const uintJe5eFK0 = BigInt("605")
		const uinto8zckS4 = BigInt("982")
		const addressaLhjbPn = accounts[4]
		const addressW6u8b2u = accounts[1]
		const uintmyhVxWN = BigInt("906")
		const addressqrlUwM7 = accounts[1]
		const uint256exTdPeb = await XenoFelixiJT0aZL.burn.call(uintJe5eFK0, {from: accounts[3]});
		const boolleIpDf9 = await XenoFelixiJT0aZL.transfer.call(addressaLhjbPn, uinto8zckS4, {from: accounts[3]});
		const addresshSvB3rH = await XenoFelixiJT0aZL.transferOwnership.call(addressW6u8b2u, {from: accounts[4]});
		const boolgKsyjvv = await XenoFelixiJT0aZL.decreaseAllowance.call(addressqrlUwM7, uintmyhVxWN, {from: accounts[3]});

		await expect(XenoFelixiJT0aZL.burn.call(uintJe5eFK0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringOagexB = "QOHLL4lzrJZikoTNhjApDtraxi7xwETCND1WuTrQa76a6555QNO5i5xzakEg4DFn1QavTxigj6jtdgzSwo7fpMJOr3wFe9C"
		const stringcrX9lde = "yUBkksbrccfizGc82FrCHqK0Xj26SAE8h4rogEIE"
		const uintXCtnTa7 = BigInt("1512")
		const uintkSdTTo5 = BigInt("17")
		const XenoFelixohaiCcq = await XenoFelix.new(stringOagexB, stringcrX9lde, uintXCtnTa7, uintkSdTTo5, {from: accounts[1]});
		const uintOFc2nQJ = BigInt("631")
		const addressx1r8xFZ = accounts[2]
		const addressm09N0t = accounts[3]
		const addressZR5BGZS = accounts[5]
		const boolKPXY20k = await XenoFelixohaiCcq.approve.call(addressx1r8xFZ, uintOFc2nQJ, {from: accounts[0]});
		const booldpN0rbQ = await XenoFelixohaiCcq.isOwner.call(addressm09N0t, {from: accounts[4]});
		const boolCaXu9xv = await XenoFelixohaiCcq.unfreezeAccount.call(addressZR5BGZS, {from: accounts[4]});

		assert.equal(boolKPXY20k, true)
		assert.equal(booldpN0rbQ, false)
		await expect(XenoFelixohaiCcq.unfreezeAccount.call(addressZR5BGZS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintce2j7o = BigInt("1938")
		const uintsDlR6I = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintce2j7o, uintsDlR6I, {from: accounts[2]});
		const addressgGuXvDQ = accounts[3]
		const stringB4Chkqz = await XenoFelixiJT0aZL.symbol.call({from: accounts[1]});
		await XenoFelixiJT0aZL.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		const addressxgqXozH = await XenoFelixiJT0aZL.removePauser.call(addressgGuXvDQ, {from: accounts[0]});

		assert.equal(stringB4Chkqz, "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o")
		await expect(XenoFelixiJT0aZL.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintQSI9zT = BigInt("1938")
		const uinteYDMtT = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintQSI9zT, uinteYDMtT, {from: accounts[2]});
		const addressA6qAo0g = accounts[2]
		const uintfODxgs6 = BigInt("1953")
		const addressR79Y8Tc = accounts[1]
		const addressRrsM7wu = accounts[3]
		const boolrPzjftf = await XenoFelixiJT0aZL.isOwner.call(addressA6qAo0g, {from: accounts[0]});
		const booliAnvxvb = await XenoFelixiJT0aZL.transferFrom.call(addressRrsM7wu, addressR79Y8Tc, uintfODxgs6, {from: accounts[1]});

		assert.equal(boolrPzjftf, true)
		await expect(XenoFelixiJT0aZL.transferFrom.call(addressRrsM7wu, addressR79Y8Tc, uintfODxgs6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintBEaAnZx = BigInt("1938")
		const uintQx4opup = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintBEaAnZx, uintQx4opup, {from: accounts[2]});
		const uintg6U0AiW = BigInt("853")
		const uintT9g64sI = BigInt("1547")
		const addressalRKQZw = accounts[2]
		const boolR67jKj0 = await XenoFelixiJT0aZL.transferWithLock.call(addressalRKQZw, uintT9g64sI, uintg6U0AiW, {from: accounts[2]});
		await XenoFelixiJT0aZL.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolR67jKj0, true)
		await expect(XenoFelixiJT0aZL.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintZDmSCz = BigInt("1938")
		const uintcEHjx7M = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintZDmSCz, uintcEHjx7M, {from: accounts[2]});
		const addressiAvy1qM = accounts[1]
		const addressvong9PE = accounts[1]
		const boolllB1HS1 = await XenoFelixiJT0aZL.freezeAccount.call(addressiAvy1qM, {from: accounts[2]});
		await XenoFelixiJT0aZL.whenNotPaused.call({from: accounts[4]});
		const uint256V7ovz7G = await XenoFelixiJT0aZL.balanceOf.call(addressvong9PE, {from: accounts[4]});

		assert.equal(boolllB1HS1, true)
		await expect(XenoFelixiJT0aZL.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintrIbeK8 = BigInt("1938")
		const uintryKxXwn = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintrIbeK8, uintryKxXwn, {from: accounts[2]});
		const uinteahi2gD = BigInt("1008")
		const addressK5IKbMe = "0x0000000000000000000000000000000000000001"
		const addressDEsG8Lp = accounts[3]
		const addressjSdqEFz = accounts[0]
		const boolNumGfrm = await XenoFelixiJT0aZL.increaseAllowance.call(addressK5IKbMe, uinteahi2gD, {from: accounts[0]});
		const addresslXITDKE = await XenoFelixiJT0aZL.transferOwnership.call(addressDEsG8Lp, {from: accounts[2]});
		const uint256V7ovz7G = await XenoFelixiJT0aZL.balanceOf.call(addressjSdqEFz, {from: accounts[4]});

		assert.equal(boolNumGfrm, true)
		assert.equal(uint256V7ovz7G, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringztSUYm2 = "vLI5wdtWEvwlCmQNNI2rzUMendCWtSE4n2w0rou8A7FFwlAlLxAWclrXtNsD2vYt9ENgNMAQHxXGEbwMtSOP2C1"
		const stringJTE9OEl = "Y1KpQ6CiHfu6HO5dzaf1grxMCbTX6RPaFmDW"
		const uintdMQgSkq = BigInt("142")
		const XenoFelixeX65OD4 = await XenoFelix.new(stringztSUYm2, stringJTE9OEl, uintdMQgSkq, {from: "0x0000000000000000000000000000000000000001"});
		const uintg27tmQY = BigInt("1171")
		const addressJ2ScBue = accounts[3]
		const addressEXlnaG = "0x0000000000000000000000000000000000000001"
		const uint256t8HrLPG = await XenoFelixeX65OD4.burn.call(uintg27tmQY, {from: accounts[4]});
		await XenoFelixeX65OD4.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixeX65OD4.pause.call({from: accounts[3]});
		const stringZ6HAnA4 = await XenoFelixeX65OD4.name.call({from: accounts[5]});
		const uint256QlNNbvX = await XenoFelixeX65OD4.allowance.call(addressEXlnaG, addressJ2ScBue, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintl6nUZzl = BigInt("1938")
		const uintNiQgVs6 = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintl6nUZzl, uintNiQgVs6, {from: accounts[2]});
		const uintweCxuBi = BigInt("1936")
		const addressYJKmCIp = accounts[4]
		const boolnOfjCl = await XenoFelixiJT0aZL.unlock.call(addressYJKmCIp, uintweCxuBi, {from: accounts[2]});
		await XenoFelixiJT0aZL.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixiJT0aZL.unlock.call(addressYJKmCIp, uintweCxuBi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj3xJVM1 = "6FwCnEV9nFuQMQ8TjOn97p76YGKRIlywH3FfEerZ"
		const stringp5Nm0Kz = "lZPVaZAuDeVudTplLNfB3KvPYMSefSk2f1VCrnQ70usImccq39mTWGdIBIN2l8hmJFgumtfs1o"
		const uintPexe5Hv = BigInt("1938")
		const uintasY378M = BigInt("204")
		const XenoFelixiJT0aZL = await XenoFelix.new(stringj3xJVM1, stringp5Nm0Kz, uintPexe5Hv, uintasY378M, {from: accounts[2]});
		const uintDi7MAwO = BigInt("1953")
		const addressikbD4CC = accounts[1]
		const addressRd3YwCd = accounts[3]
		const uint256wL48IqU = await XenoFelixiJT0aZL.totalSupply.call({from: accounts[5]});
		const booliAnvxvb = await XenoFelixiJT0aZL.transferFrom.call(addressRd3YwCd, addressikbD4CC, uintDi7MAwO, {from: accounts[1]});

		assert.equal(uint256wL48IqU, BigInt("111196612962473541889210723267391333497031871986584062996369776070520588992512"))
		await expect(XenoFelixiJT0aZL.transferFrom.call(addressRd3YwCd, addressikbD4CC, uintDi7MAwO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})