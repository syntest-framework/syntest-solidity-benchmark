const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAVq9JNoM = await TPA.new({from: accounts[5]});
		const addresske4dTJq = "0x0000000000000000000000000000000000000001"
		const uintFlR4yAb = BigInt("482")
		const addresstbCY02 = accounts[3]
		const uint256AD886rD = await TPAVq9JNoM.balanceOf.call(addresske4dTJq, {from: accounts[0]});
		const uint256gDGQR3k = await TPAVq9JNoM.burn.call(uintFlR4yAb, {from: accounts[3]});
		await TPAVq9JNoM.unpause.call({from: accounts[3]});
		const addressg7VUHzX = await TPAVq9JNoM.transferOwnership.call(addresstbCY02, {from: accounts[0]});

		assert.equal(uint256AD886rD, BigInt("0"))
		await expect(TPAVq9JNoM.burn.call(uintFlR4yAb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringXLZr1TQ = "7yV336Z9fmBMM75IWQR4M4RBWrS4i6aDjgHIaApxS9LGXOSAP5s8krEW6zdG5GtVb8bBulOWQpdK4EbuMMfm"
		const stringVZZNoUN = "Q"
		const uintrAufM1b = BigInt("181")
		const TPAHHVJUp8 = await TPA.new(stringXLZr1TQ, stringVZZNoUN, uintrAufM1b, {from: accounts[0]});
		const addresso3kRBc = accounts[3]
		const addressHZ2rMAO = accounts[2]
		const addressIVA4O83 = "0x0000000000000000000000000000000000000001"
		const stringkDr4J65 = await TPAHHVJUp8.symbol.call({from: accounts[2]});
		const boolXeHEpyx = await TPAHHVJUp8.freezeAccount.call(addresso3kRBc, {from: accounts[2]});
		const addressxej37DT = await TPAHHVJUp8.removeAdmin.call(addressHZ2rMAO, {from: accounts[4]});
		const boolxtN0jPs = await TPAHHVJUp8.isAdmin.call(addressIVA4O83, {from: accounts[1]});
	});

	it('test for TPA', async () => {
		const TPAByXGFj = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintE84H84U = BigInt("48")
		const addressHEPX3Gn = "0x0000000000000000000000000000000000000001"
		const addressyiNO6rf = accounts[5]
		const addresswh1TVJl = accounts[1]
		await TPAByXGFj.whenPaused.call({from: accounts[2]});
		const boollqlM8JX = await TPAByXGFj.transferFrom.call(addressyiNO6rf, addressHEPX3Gn, uintE84H84U, {from: accounts[4]});
		const addressSDYCZ3a = await TPAByXGFj.removeAdmin.call(addresswh1TVJl, {from: accounts[0]});
		await TPAByXGFj.unpause.call({from: accounts[2]});
	});

	it('test for TPA', async () => {
		const TPAMW9bEI = await TPA.new({from: accounts[1]});
		const uintRac4MEY = BigInt("1174")
		const addressecup4t2 = accounts[1]
		const uinth6FHBtv = BigInt("1785")
		const uintaZOkgEo = BigInt("482")
		const addressXtsIgZT = accounts[3]
		const addressIV4oBPr = accounts[1]
		const addresso5XphY = accounts[0]
		const uintrLN5OBe = BigInt("24")
		const addressNkq23bQ = accounts[5]
		const addressdByNQ8P = accounts[4]
		const boolHOKS2nb = await TPAMW9bEI.transfer.call(addressecup4t2, uintRac4MEY, {from: accounts[4]});
		const boolNrOH1qS = await TPAMW9bEI.lock.call(addressXtsIgZT, uintaZOkgEo, uinth6FHBtv, {from: accounts[1]});
		const uint256aqW2g83 = await TPAMW9bEI.allowance.call(addresso5XphY, addressIV4oBPr, {from: "0x0000000000000000000000000000000000000001"});
		const boolslQUBFZ = await TPAMW9bEI.transferFrom.call(addressdByNQ8P, addressNkq23bQ, uintrLN5OBe, {from: accounts[4]});
		await TPAMW9bEI.whenPaused.call({from: accounts[0]});

		await expect(TPAMW9bEI.transfer.call(addressecup4t2, uintRac4MEY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAQmPOdox = await TPA.new({from: accounts[0]});
		const uintKSYSSta = BigInt("1698")
		const addressMM6lZJC = accounts[3]
		const uintHLcEMlm = BigInt("389")
		const addressKhz5Zuh = accounts[0]
		const uintJXc0O4m = BigInt("663")
		const addresswbIGKLN = accounts[1]
		const address1TUi27 = accounts[4]
		await TPAQmPOdox.onlyAdmin.call({from: accounts[1]});
		const uint256hwp6v4T = await TPAQmPOdox.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolS8gddB = await TPAQmPOdox.increaseAllowance.call(addressMM6lZJC, uintKSYSSta, {from: accounts[0]});
		const boolM8KRZ39 = await TPAQmPOdox.transfer.call(addressKhz5Zuh, uintHLcEMlm, {from: accounts[0]});
		const boolWEv8vI8 = await TPAQmPOdox.unlock.call(addresswbIGKLN, uintJXc0O4m, {from: accounts[3]});
		const bool03oxl5 = await TPAQmPOdox.freezeAccount.call(address1TUi27, {from: accounts[5]});

		await expect(TPAQmPOdox.onlyAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIYtwxyI = await TPA.new({from: accounts[1]});
		const uintmOgKyYC = BigInt("546")
		const addressLrZh7pW = accounts[1]
		const uintHE00I3x = BigInt("612")
		const addressUQ1LCE3 = accounts[0]
		const addresskNb06uO = accounts[1]
		const addressVrOE93J = accounts[3]
		const booloIKDbg = await TPAIYtwxyI.unlock.call(addressLrZh7pW, uintmOgKyYC, {from: accounts[2]});
		const booluhlLP6b = await TPAIYtwxyI.transfer.call(addressUQ1LCE3, uintHE00I3x, {from: accounts[0]});
		const addressaApBd4s = await TPAIYtwxyI.notFrozen.call(addresskNb06uO, {from: accounts[2]});
		const addressFZOQcQ2 = await TPAIYtwxyI.transferOwnership.call(addressVrOE93J, {from: accounts[4]});
		await TPAIYtwxyI.renounceAdmin.call({from: accounts[4]});

		await expect(TPAIYtwxyI.unlock.call(addressLrZh7pW, uintmOgKyYC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIYtwxyI = await TPA.new({from: accounts[1]});
		const uints2SUOEY = BigInt("546")
		const addressNK2ZFIj = accounts[1]
		const uintGntnUhV = BigInt("612")
		const addressBBcLZO = accounts[0]
		const addressTxnHOS = accounts[1]
		const addresswzto2PO = accounts[4]
		const uint256P4tZE6O = await TPAIYtwxyI.totalSupply.call({from: accounts[2]});
		const booloIKDbg = await TPAIYtwxyI.unlock.call(addressNK2ZFIj, uints2SUOEY, {from: accounts[2]});
		const booluhlLP6b = await TPAIYtwxyI.transfer.call(addressBBcLZO, uintGntnUhV, {from: accounts[0]});
		const addressaApBd4s = await TPAIYtwxyI.notFrozen.call(addressTxnHOS, {from: accounts[2]});
		const addressFZOQcQ2 = await TPAIYtwxyI.transferOwnership.call(addresswzto2PO, {from: accounts[4]});
		await TPAIYtwxyI.renounceAdmin.call({from: accounts[4]});

		assert.equal(uint256P4tZE6O, BigInt("10000000000000000000000000000"))
		await expect(TPAIYtwxyI.unlock.call(addressNK2ZFIj, uints2SUOEY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAVq9JNoM = await TPA.new({from: accounts[5]});
		const addressHXXGZH0 = "0x0000000000000000000000000000000000000002"
		const uintqgvZObv = BigInt("1319")
		const addressmL3yl4l = accounts[4]
		const uintc4U02gb = BigInt("1764")
		const uintrUXCPW1 = BigInt("1983")
		const address6g7tCc = accounts[3]
		const addressRQzTQZn = "0x0000000000000000000000000000000000000001"
		const addresscBpiRMc = accounts[0]
		const addresssFojHIZ = accounts[3]
		const uint256AD886rD = await TPAVq9JNoM.balanceOf.call(addressHXXGZH0, {from: accounts[0]});
		const boolVwaN6an = await TPAVq9JNoM.decreaseAllowance.call(addressmL3yl4l, uintqgvZObv, {from: accounts[3]});
		const uint256gDGQR3k = await TPAVq9JNoM.burn.call(uintc4U02gb, {from: accounts[3]});
		const boolZjlfSsL = await TPAVq9JNoM.decreaseAllowance.call(address6g7tCc, uintrUXCPW1, {from: accounts[3]});
		const uint256OjZT7h3 = await TPAVq9JNoM.allowance.call(addresscBpiRMc, addressRQzTQZn, {from: accounts[1]});
		await TPAVq9JNoM.unpause.call({from: accounts[3]});
		const addressg7VUHzX = await TPAVq9JNoM.transferOwnership.call(addresssFojHIZ, {from: accounts[0]});

		assert.equal(uint256AD886rD, BigInt("0"))
		await expect(TPAVq9JNoM.decreaseAllowance.call(addressmL3yl4l, uintqgvZObv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIYtwxyI = await TPA.new({from: accounts[1]});
		const uintCpW4tz5 = BigInt("546")
		const addressIK6CFhI = accounts[1]
		const uintAZzY6m = BigInt("612")
		const addressptlCBAy = accounts[0]
		const addressQkHwNma = accounts[3]
		await TPAIYtwxyI.renounceAdmin.call({from: accounts[3]});
		const booloIKDbg = await TPAIYtwxyI.unlock.call(addressIK6CFhI, uintCpW4tz5, {from: accounts[2]});
		const booluhlLP6b = await TPAIYtwxyI.transfer.call(addressptlCBAy, uintAZzY6m, {from: accounts[0]});
		const addressFZOQcQ2 = await TPAIYtwxyI.transferOwnership.call(addressQkHwNma, {from: accounts[4]});
		await TPAIYtwxyI.renounceAdmin.call({from: accounts[4]});

		await expect(TPAIYtwxyI.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASLsyVDF = await TPA.new({from: accounts[4]});
		const uintCMZnPpY = BigInt("1641")
		const addressG9yNg3S = accounts[5]
		const addressNWDXnau = accounts[2]
		const addresscxdfrSS = accounts[3]
		const addressDGnuwBK = accounts[4]
		const booltmLObuL = await TPASLsyVDF.transferFrom.call(addressNWDXnau, addressG9yNg3S, uintCMZnPpY, {from: accounts[2]});
		const uint256oHDV7mv = await TPASLsyVDF.balanceOf.call(addresscxdfrSS, {from: accounts[4]});
		const uint256DotT5uW = await TPASLsyVDF.totalSupply.call({from: accounts[2]});
		const uint256qAsenaI = await TPASLsyVDF.balanceOf.call(addressDGnuwBK, {from: accounts[5]});

		await expect(TPASLsyVDF.transferFrom.call(addressNWDXnau, addressG9yNg3S, uintCMZnPpY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAVq9JNoM = await TPA.new({from: accounts[5]});
		const addressehptdBi = "0x0000000000000000000000000000000000000001"
		const addressMcWFQBO = accounts[4]
		const addressPaztbrE = accounts[4]
		const uint256AD886rD = await TPAVq9JNoM.balanceOf.call(addressehptdBi, {from: accounts[0]});
		const stringz4JebLl = await TPAVq9JNoM.name.call({from: accounts[4]});
		const boolEWlI9GY = await TPAVq9JNoM.isOwner.call(addressMcWFQBO, {from: accounts[3]});
		await TPAVq9JNoM.unpause.call({from: accounts[3]});
		const addressg7VUHzX = await TPAVq9JNoM.transferOwnership.call(addressPaztbrE, {from: accounts[0]});

		assert.equal(boolEWlI9GY, false)
		assert.equal(stringz4JebLl, "TPA")
		assert.equal(uint256AD886rD, BigInt("0"))
		await expect(TPAVq9JNoM.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAVq9JNoM = await TPA.new({from: accounts[5]});
		const addressv4ADHrM = "0x0000000000000000000000000000000000000000"
		const addresstUWQw3T = accounts[0]
		const addresseaQTSBy = accounts[3]
		const uintSBrvDRu = BigInt("1368")
		const addressg34oKSs = accounts[3]
		const addresstSSXt9H = accounts[5]
		const addressFcs4ywb = accounts[4]
		const addressCYbnj75 = accounts[0]
		const uint256AD886rD = await TPAVq9JNoM.balanceOf.call(addressv4ADHrM, {from: accounts[0]});
		const uint256Z2QBwHJ = await TPAVq9JNoM.allowance.call(addresseaQTSBy, addresstUWQw3T, {from: accounts[5]});
		const boolrfYqVF = await TPAVq9JNoM.transfer.call(addressg34oKSs, uintSBrvDRu, {from: accounts[2]});
		const addressg7VUHzX = await TPAVq9JNoM.transferOwnership.call(addresstSSXt9H, {from: accounts[0]});
		const uint256G7qgRGQ = await TPAVq9JNoM.allowance.call(addressCYbnj75, addressFcs4ywb, {from: accounts[0]});

		assert.equal(uint256AD886rD, BigInt("0"))
		assert.equal(uint256Z2QBwHJ, BigInt("0"))
		await expect(TPAVq9JNoM.transfer.call(addressg34oKSs, uintSBrvDRu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAVq9JNoM = await TPA.new({from: accounts[5]});
		const addressxXpKt7X = "0x00000000000000000000000000000000000000-1"
		const uint256AD886rD = await TPAVq9JNoM.balanceOf.call(addressxXpKt7X, {from: accounts[0]});
		await TPAVq9JNoM.unpause.call({from: accounts[3]});

		await expect(TPAVq9JNoM.balanceOf.call(addressxXpKt7X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAVq9JNoM = await TPA.new({from: accounts[5]});
		const addresslWVA8zC = "0x0000000000000000000000000000000000000000"
		const addressdaLSHRS = accounts[5]
		const addressVv2bU07 = accounts[0]
		const addressP96sLlC = accounts[3]
		const uinttMs3a8Z = BigInt("1368")
		const addressOk3mVEg = accounts[3]
		const addressO1KPDW1 = accounts[5]
		const addressodjCD5B = accounts[4]
		const addresso4c13Cg = accounts[0]
		const uint256AD886rD = await TPAVq9JNoM.balanceOf.call(addresslWVA8zC, {from: accounts[0]});
		const boolH3GpRuO = await TPAVq9JNoM.isOwner.call(addressdaLSHRS, {from: accounts[1]});
		const uint256Z2QBwHJ = await TPAVq9JNoM.allowance.call(addressP96sLlC, addressVv2bU07, {from: accounts[5]});
		const boolrfYqVF = await TPAVq9JNoM.transfer.call(addressOk3mVEg, uinttMs3a8Z, {from: accounts[2]});
		await TPAVq9JNoM.pause.call({from: accounts[4]});
		const addressg7VUHzX = await TPAVq9JNoM.transferOwnership.call(addressO1KPDW1, {from: accounts[0]});
		const uint256G7qgRGQ = await TPAVq9JNoM.allowance.call(addresso4c13Cg, addressodjCD5B, {from: accounts[0]});

		assert.equal(boolH3GpRuO, true)
		assert.equal(uint256AD886rD, BigInt("0"))
		assert.equal(uint256Z2QBwHJ, BigInt("0"))
		await expect(TPAVq9JNoM.transfer.call(addressOk3mVEg, uinttMs3a8Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAVq9JNoM = await TPA.new({from: accounts[5]});
		const uintGu8rWSI = BigInt("464")
		const addressFIoZVVv = accounts[3]
		const uintUvw7DAa = BigInt("1219")
		const addressvdHJ5DI = accounts[3]
		const boolPnOCVDF = await TPAVq9JNoM.approve.call(addressFIoZVVv, uintGu8rWSI, {from: accounts[5]});
		await TPAVq9JNoM.unpause.call({from: accounts[3]});
		const boolg3GTO3k = await TPAVq9JNoM.transfer.call(addressvdHJ5DI, uintUvw7DAa, {from: accounts[2]});

		assert.equal(boolPnOCVDF, true)
		await expect(TPAVq9JNoM.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAk4DJXPE = await TPA.new({from: accounts[3]});
		const addressFJHAaI = accounts[0]
		const uintAUuLJtA = BigInt("1756")
		const addresscZ8a7UC = accounts[4]
		const addressh7b3PZ = accounts[3]
		const stringtD4d5En = await TPAk4DJXPE.symbol.call({from: accounts[2]});
		await TPAk4DJXPE.pause.call({from: accounts[4]});
		const addressDBMCQcT = await TPAk4DJXPE.notFrozen.call(addressFJHAaI, {from: accounts[3]});
		await TPAk4DJXPE.onlyAdmin.call({from: accounts[5]});
		const boolx2Aak9k = await TPAk4DJXPE.transferFrom.call(addressh7b3PZ, addresscZ8a7UC, uintAUuLJtA, {from: "0x0000000000000000000000000000000000000001"});
		await TPAk4DJXPE.unpause.call({from: accounts[4]});

		assert.equal(stringtD4d5En, "TPA")
		await expect(TPAk4DJXPE.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAVq9JNoM = await TPA.new({from: accounts[5]});
		const addresswO9NMK9 = "0x0000000000000000000000000000000000000000"
		const addressxrN1YWy = accounts[2]
		const addressKNkkwgj = accounts[3]
		const uinteR8F0A = BigInt("1368")
		const addressXyVD1tG = accounts[3]
		const addressdEj0rUy = accounts[5]
		const addressKGOTRQt = accounts[4]
		const addressA2Asood = accounts[0]
		const uint8ooQxETs = await TPAVq9JNoM.decimals.call({from: accounts[1]});
		const uint256AD886rD = await TPAVq9JNoM.balanceOf.call(addresswO9NMK9, {from: accounts[0]});
		const uint256Z2QBwHJ = await TPAVq9JNoM.allowance.call(addressKNkkwgj, addressxrN1YWy, {from: accounts[5]});
		const boolrfYqVF = await TPAVq9JNoM.transfer.call(addressXyVD1tG, uinteR8F0A, {from: accounts[2]});
		const addressg7VUHzX = await TPAVq9JNoM.transferOwnership.call(addressdEj0rUy, {from: accounts[0]});
		const uint256G7qgRGQ = await TPAVq9JNoM.allowance.call(addressA2Asood, addressKGOTRQt, {from: accounts[0]});

		assert.equal(uint256AD886rD, BigInt("0"))
		assert.equal(uint256Z2QBwHJ, BigInt("0"))
		assert.equal(uint8ooQxETs, BigInt("18"))
		await expect(TPAVq9JNoM.transfer.call(addressXyVD1tG, uinteR8F0A, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAVq9JNoM = await TPA.new({from: accounts[5]});
		const addressym21u64 = "0x0000000000000000000000000000000000000000"
		const booly9ZBNEl = await TPAVq9JNoM.paused.call({from: accounts[4]});
		const uint256AD886rD = await TPAVq9JNoM.balanceOf.call(addressym21u64, {from: accounts[0]});
		await TPAVq9JNoM.unpause.call({from: accounts[3]});

		assert.equal(booly9ZBNEl, false)
		assert.equal(uint256AD886rD, BigInt("0"))
		await expect(TPAVq9JNoM.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAVq9JNoM = await TPA.new({from: accounts[5]});
		const addressBfxudkC = "0x00000000000000000000000000000000000000-1"
		await TPAVq9JNoM.pause.call({from: accounts[5]});
		await TPAVq9JNoM.unpause.call({from: accounts[0]});
		const uint256AD886rD = await TPAVq9JNoM.balanceOf.call(addressBfxudkC, {from: accounts[0]});
		await TPAVq9JNoM.unpause.call({from: accounts[3]});

		await expect(TPAVq9JNoM.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAVq9JNoM = await TPA.new({from: accounts[5]});
		const uintz8Ot3AQ = BigInt("754")
		const addressXfadgtI = accounts[2]
		const uintHH3oCD5 = BigInt("137")
		const addressCMctAfW = accounts[4]
		const addressA0n6vLz = accounts[2]
		const uintOYfjhLV = BigInt("239")
		const addressNoQMB1v = accounts[4]
		const addressJGNWfSy = await TPAVq9JNoM.burnFrom.call(addressXfadgtI, uintz8Ot3AQ, {from: accounts[2]});
		const boolCfo6RSe = await TPAVq9JNoM.transferFrom.call(addressA0n6vLz, addressCMctAfW, uintHH3oCD5, {from: accounts[4]});
		const boolbnWDPx = await TPAVq9JNoM.transfer.call(addressNoQMB1v, uintOYfjhLV, {from: accounts[5]});
		await TPAVq9JNoM.unpause.call({from: accounts[3]});

		await expect(TPAVq9JNoM.burnFrom.call(addressXfadgtI, uintz8Ot3AQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAVq9JNoM = await TPA.new({from: accounts[5]});
		const addressc6eET5s = "0x0000000000000000000000000000000000000000"
		const uintHalP0xY = BigInt("353")
		const addresssVbVyzW = "0x0000000000000000000000000000000000000001"
		const uint66FxwU = BigInt("373")
		const addressiukMf99 = accounts[1]
		const addressElV8XDg = accounts[5]
		const uintKRDVngp = BigInt("332")
		const addressSXMrGc = accounts[4]
		const addressDO5Vma8 = accounts[3]
		const uint256jPaL8lQ = await TPAVq9JNoM.totalSupply.call({from: accounts[3]});
		const uint256AD886rD = await TPAVq9JNoM.balanceOf.call(addressc6eET5s, {from: accounts[0]});
		const booleA5q9lr = await TPAVq9JNoM.increaseAllowance.call(addresssVbVyzW, uintHalP0xY, {from: accounts[1]});
		const boollR4ckLG = await TPAVq9JNoM.transferFrom.call(addressElV8XDg, addressiukMf99, uint66FxwU, {from: accounts[0]});
		await TPAVq9JNoM.unpause.call({from: accounts[3]});
		const bool0tbwu1 = await TPAVq9JNoM.transferFrom.call(addressDO5Vma8, addressSXMrGc, uintKRDVngp, {from: accounts[5]});

		assert.equal(booleA5q9lr, true)
		assert.equal(uint256AD886rD, BigInt("0"))
		assert.equal(uint256jPaL8lQ, BigInt("10000000000000000000000000000"))
		await expect(TPAVq9JNoM.transferFrom.call(addressElV8XDg, addressiukMf99, uint66FxwU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASLsyVDF = await TPA.new({from: accounts[4]});
		const addressSncHunl = "0x0000000000000000000000000000000000000001"
		const addressVoQifL8 = accounts[5]
		const booli6ZRYyJ = await TPASLsyVDF.freezeAccount.call(addressSncHunl, {from: accounts[4]});
		const uint256qAsenaI = await TPASLsyVDF.balanceOf.call(addressVoQifL8, {from: accounts[5]});

		assert.equal(booli6ZRYyJ, true)
		assert.equal(uint256qAsenaI, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPASLsyVDF = await TPA.new({from: accounts[4]});
		const uintCM9dLS = BigInt("1050")
		const addressxAq1jeq = accounts[2]
		const addressf8h8II = accounts[5]
		const uintNfPANGi = BigInt("683")
		const addressj2HsOCc = accounts[2]
		const uintSqLs4JX = BigInt("332")
		const addressHoavgO = accounts[2]
		const boolXtZvD1P = await TPASLsyVDF.unlock.call(addressxAq1jeq, uintCM9dLS, {from: accounts[4]});
		const uint256qAsenaI = await TPASLsyVDF.balanceOf.call(addressf8h8II, {from: accounts[5]});
		const boolzUjy96O = await TPASLsyVDF.transfer.call(addressj2HsOCc, uintNfPANGi, {from: "0x0000000000000000000000000000000000000001"});
		const boolOhyYoBr = await TPASLsyVDF.transfer.call(addressHoavgO, uintSqLs4JX, {from: accounts[1]});

		await expect(TPASLsyVDF.unlock.call(addressxAq1jeq, uintCM9dLS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASLsyVDF = await TPA.new({from: accounts[4]});
		const addressZabT4ue = accounts[5]
		const addresssDoYoJL = accounts[4]
		const uintjTdIMvI = BigInt("1389")
		const addressYYNDUL9 = accounts[0]
		const uintZ3qVCem = BigInt("646")
		const addressRbHKRqC = accounts[1]
		const addresskKeMSfG = accounts[2]
		const uint256qAsenaI = await TPASLsyVDF.balanceOf.call(addressZabT4ue, {from: accounts[5]});
		const addressgKk0AmD = await TPASLsyVDF.addAdmin.call(addresssDoYoJL, {from: accounts[4]});
		const boolMZT9VdW = await TPASLsyVDF.increaseAllowance.call(addressYYNDUL9, uintjTdIMvI, {from: accounts[0]});
		const boolieQ6pe0 = await TPASLsyVDF.transferFrom.call(addresskKeMSfG, addressRbHKRqC, uintZ3qVCem, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256qAsenaI, BigInt("0"))
		await expect(TPASLsyVDF.addAdmin.call(addresssDoYoJL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASLsyVDF = await TPA.new({from: accounts[4]});
		const addressn5yBBEX = accounts[5]
		const addressCwHfQP = accounts[0]
		const uint256qAsenaI = await TPASLsyVDF.balanceOf.call(addressn5yBBEX, {from: accounts[5]});
		const addressCUHBh6h = await TPASLsyVDF.transferOwnership.call(addressCwHfQP, {from: accounts[4]});

		assert.equal(uint256qAsenaI, BigInt("0"))
	});
})