const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisHfS2GOV = await Ledgis.new({from: accounts[2]});
		const uintCsOQ5Cs = BigInt("226")
		const addresszA6y0r5 = accounts[3]
		const uintgcGNk4w = BigInt("1981")
		const addressx76L3z6 = accounts[2]
		const uintaQz4xiy = BigInt("1403")
		const uinto2WmfT9 = BigInt("643")
		const addressrRJNaMj = accounts[0]
		const addresszHxVOLB = accounts[5]
		const boolYepe77 = await LedgisHfS2GOV.transfer.call(addresszA6y0r5, uintCsOQ5Cs, {from: accounts[2]});
		const boolJibjEKX = await LedgisHfS2GOV.transfer.call(addressx76L3z6, uintgcGNk4w, {from: accounts[2]});
		const addressMe8toQd = await LedgisHfS2GOV.lockAfter.call(addressrRJNaMj, uinto2WmfT9, uintaQz4xiy, {from: accounts[0]});
		const addressm22cy4V = await LedgisHfS2GOV.freeze.call(addresszHxVOLB, {from: accounts[2]});
		await LedgisHfS2GOV.whenPaused.call({from: accounts[5]});

		assert.equal(boolJibjEKX, true)
		assert.equal(boolYepe77, true)
		await expect(LedgisHfS2GOV.lockAfter.call(addressrRJNaMj, uinto2WmfT9, uintaQz4xiy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKsXRG8S = await Ledgis.new({from: accounts[4]});
		const addressCxF8V6 = accounts[3]
		const uintCL4Kp1V = BigInt("1587")
		const uint256Gz5837R = await LedgisKsXRG8S.currentTime.call({from: accounts[1]});
		const uint256FQcsiXE = await LedgisKsXRG8S.balanceOf.call(addressCxF8V6, {from: accounts[4]});
		const uint256E5P0TM = await LedgisKsXRG8S.afterTime.call(uintCL4Kp1V, {from: accounts[2]});
		const uint256IGmnCdk = await LedgisKsXRG8S.totalSupply.call({from: accounts[1]});

		assert.equal(uint256E5P0TM, BigInt("1630232822"))
		assert.equal(uint256FQcsiXE, BigInt("0"))
		assert.equal(uint256Gz5837R, BigInt("1630231235"))
		assert.equal(uint256IGmnCdk, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisNS8iAZ = await Ledgis.new({from: accounts[3]});
		const uintTvV3ATL = BigInt("1608")
		const addressztCkU1A = "0x0000000000000000000000000000000000000001"
		const addressMyBP18b = accounts[0]
		const uintnqmD7S0 = BigInt("818")
		const addresssrjmio1 = accounts[4]
		const uintHnSbVSV = BigInt("787")
		const addressTOcSJWP = accounts[3]
		const boolYCvSmc5 = await LedgisNS8iAZ.transferFrom.call(addressMyBP18b, addressztCkU1A, uintTvV3ATL, {from: accounts[1]});
		await LedgisNS8iAZ.lockState.call(addresssrjmio1, uintnqmD7S0, {from: accounts[4]});
		const addressnNcY3vf = await LedgisNS8iAZ.burn.call(addressTOcSJWP, uintHnSbVSV, {from: accounts[4]});

		await expect(LedgisNS8iAZ.transferFrom.call(addressMyBP18b, addressztCkU1A, uintTvV3ATL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisC7Vwmbj = await Ledgis.new({from: accounts[4]});
		const addressguu3Ddo = accounts[2]
		const uintYEmfVci = BigInt("465")
		const uintHybe5B3 = BigInt("38")
		const addressRvPjIpR = accounts[0]
		const uintkwJHWLS = BigInt("418")
		const addressmePzAkz = accounts[0]
		const uintSN6iOFw = BigInt("986")
		const addressp0urGfS = accounts[1]
		const addresshhgSPf = await LedgisC7Vwmbj.unfreeze.call(addressguu3Ddo, {from: accounts[4]});
		const boolqnCN9IV = await LedgisC7Vwmbj.transferWithLockAfter.call(addressRvPjIpR, uintHybe5B3, uintYEmfVci, {from: accounts[0]});
		const boolxuLInKu = await LedgisC7Vwmbj.mint.call(addressmePzAkz, uintkwJHWLS, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisC7Vwmbj.renounceOwnership.call({from: accounts[4]});
		await LedgisC7Vwmbj.pause.call({from: accounts[3]});
		const booljd2Lzlt = await LedgisC7Vwmbj.mint.call(addressp0urGfS, uintSN6iOFw, {from: accounts[3]});

		await expect(LedgisC7Vwmbj.transferWithLockAfter.call(addressRvPjIpR, uintHybe5B3, uintYEmfVci, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKsXRG8S = await Ledgis.new({from: accounts[4]});
		const uintA3s7Ti2 = BigInt("1587")
		const uintTxOHQqj = BigInt("243")
		const addressNkfwWP = accounts[3]
		const uint256Gz5837R = await LedgisKsXRG8S.currentTime.call({from: accounts[1]});
		const uint256E5P0TM = await LedgisKsXRG8S.afterTime.call(uintA3s7Ti2, {from: accounts[2]});
		await LedgisKsXRG8S.whenNotFrozen.call({from: accounts[1]});
		const boole2R0KJ = await LedgisKsXRG8S.increaseAllowance.call(addressNkfwWP, uintTxOHQqj, {from: accounts[1]});
		const uint256IGmnCdk = await LedgisKsXRG8S.totalSupply.call({from: accounts[1]});

		assert.equal(uint256E5P0TM, BigInt("1630232827"))
		assert.equal(uint256Gz5837R, BigInt("1630231240"))
		await expect(LedgisKsXRG8S.whenNotFrozen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKsXRG8S = await Ledgis.new({from: accounts[4]});
		const addressDLUeVkn = accounts[4]
		const addressVfoaPKg = accounts[0]
		const addressGkuVS1X = "0x0000000000000000000000000000000000000001"
		const uint256FQcsiXE = await LedgisKsXRG8S.balanceOf.call(addressDLUeVkn, {from: accounts[4]});
		const uint256rA8qXX7 = await LedgisKsXRG8S.allowance.call(addressGkuVS1X, addressVfoaPKg, {from: accounts[3]});

		assert.equal(uint256FQcsiXE, BigInt("10000000000000"))
		assert.equal(uint256rA8qXX7, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisI7dyp6S = await Ledgis.new({from: accounts[5]});
		const uint5T5ZGa = BigInt("1151")
		const addressqpsI9u = accounts[0]
		const uintNJnBwMw = BigInt("397")
		const addressiQyNkN = accounts[4]
		const booln7vGGu = await LedgisI7dyp6S.decreaseAllowance.call(addressqpsI9u, uint5T5ZGa, {from: accounts[2]});
		await LedgisI7dyp6S.whenNotFrozen.call({from: accounts[4]});
		const boolgJs7OT3 = await LedgisI7dyp6S.transfer.call(addressiQyNkN, uintNJnBwMw, {from: accounts[5]});

		await expect(LedgisI7dyp6S.decreaseAllowance.call(addressqpsI9u, uint5T5ZGa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNS8iAZ = await Ledgis.new({from: accounts[3]});
		const uintsbQHm5 = BigInt("451")
		const addressSlkZLGS = accounts[3]
		const uintzejrO9n = BigInt("1608")
		const addressiEC69iD = "0x0000000000000000000000000000000000000000"
		const addressFjSmYZc = accounts[1]
		const boolaK2zMRq = await LedgisNS8iAZ.approve.call(addressSlkZLGS, uintsbQHm5, {from: accounts[2]});
		const boolYCvSmc5 = await LedgisNS8iAZ.transferFrom.call(addressFjSmYZc, addressiEC69iD, uintzejrO9n, {from: accounts[1]});

		assert.equal(boolaK2zMRq, true)
		await expect(LedgisNS8iAZ.transferFrom.call(addressFjSmYZc, addressiEC69iD, uintzejrO9n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNS8iAZ = await Ledgis.new({from: accounts[3]});
		const addressGZvZza3 = accounts[0]
		const uintV36IkXP = BigInt("1608")
		const addressU2ED8Sh = "0x0000000000000000000000000000000000000000"
		const addressiJjO9Ck = accounts[1]
		const boolFYnZ5Gy = await LedgisNS8iAZ.isFrozen.call(addressGZvZza3, {from: accounts[2]});
		await LedgisNS8iAZ.renounceOwnership.call({from: accounts[0]});
		const boolYCvSmc5 = await LedgisNS8iAZ.transferFrom.call(addressiJjO9Ck, addressU2ED8Sh, uintV36IkXP, {from: accounts[1]});

		assert.equal(boolFYnZ5Gy, false)
		await expect(LedgisNS8iAZ.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisU2RKvMB = await Ledgis.new({from: accounts[0]});
		const addressIIRgyC = accounts[0]
		const addressSAGwts2 = accounts[4]
		const uintMMIDAQ = BigInt("1942")
		const uintrJAnKMh = BigInt("915")
		const addressbqAqYwv = accounts[4]
		const uintNb89XJf = BigInt("595")
		const addressugyypnw = accounts[3]
		const uintGaUcCv = BigInt("1365")
		const addressDIUdzP8 = accounts[0]
		await LedgisU2RKvMB.renounceOwnership.call({from: accounts[0]});
		const uint256iXEostZ = await LedgisU2RKvMB.allowance.call(addressSAGwts2, addressIIRgyC, {from: accounts[3]});
		const addressysIgeA = await LedgisU2RKvMB.lockAfter.call(addressbqAqYwv, uintrJAnKMh, uintMMIDAQ, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisU2RKvMB.lockState.call(addressugyypnw, uintNb89XJf, {from: accounts[2]});
		const boollHflc6G = await LedgisU2RKvMB.increaseAllowance.call(addressDIUdzP8, uintGaUcCv, {from: accounts[1]});

		await expect(LedgisU2RKvMB.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNS8iAZ = await Ledgis.new({from: accounts[3]});
		const uintxbT47L0 = BigInt("1879")
		const addressT4tvtWc = accounts[3]
		const uintTzR6vMz = BigInt("1608")
		const addresslq3iK6F = "0x0000000000000000000000000000000000000001"
		const address6emZcM = accounts[2]
		const addressK57602t = await LedgisNS8iAZ.unlock.call(addressT4tvtWc, uintxbT47L0, {from: accounts[3]});
		const boolYCvSmc5 = await LedgisNS8iAZ.transferFrom.call(address6emZcM, addresslq3iK6F, uintTzR6vMz, {from: accounts[1]});

		await expect(LedgisNS8iAZ.unlock.call(addressT4tvtWc, uintxbT47L0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKsXRG8S = await Ledgis.new({from: accounts[4]});
		const uintjoECz0W = BigInt("1549")
		const addresssWGppTU = accounts[0]
		const uintzUwsAvI = BigInt("1483")
		const addressoqEOmdz = "0x0000000000000000000000000000000000000001"
		const uinthIx8YNv = BigInt("1135")
		const addressjaGgLA = accounts[4]
		const addressdNdXZg = accounts[5]
		const boolbY9cVIu = await LedgisKsXRG8S.increaseAllowance.call(addresssWGppTU, uintjoECz0W, {from: accounts[2]});
		const addressXbVosAY = await LedgisKsXRG8S.burn.call(addressoqEOmdz, uintzUwsAvI, {from: accounts[5]});
		const boolHwhHkwG = await LedgisKsXRG8S.mint.call(addressjaGgLA, uinthIx8YNv, {from: accounts[1]});
		const uint256FQcsiXE = await LedgisKsXRG8S.balanceOf.call(addressdNdXZg, {from: accounts[4]});

		assert.equal(boolbY9cVIu, true)
		await expect(LedgisKsXRG8S.burn.call(addressoqEOmdz, uintzUwsAvI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKsXRG8S = await Ledgis.new({from: accounts[4]});
		const uintTSZiKOW = BigInt("1815")
		const addressovrLwXg = accounts[1]
		const addressE6RnxAv = accounts[4]
		await LedgisKsXRG8S.lockState.call(addressovrLwXg, uintTSZiKOW, {from: accounts[3]});
		const uint256rv2fBHh = await LedgisKsXRG8S.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256FQcsiXE = await LedgisKsXRG8S.balanceOf.call(addressE6RnxAv, {from: accounts[4]});
		await LedgisKsXRG8S.whenNotPaused.call({from: accounts[5]});

		await expect(LedgisKsXRG8S.lockState.call(addressovrLwXg, uintTSZiKOW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKsXRG8S = await Ledgis.new({from: accounts[4]});
		const uinttWDYygo = BigInt("1474")
		const uinttZFek1w = BigInt("2033")
		const addressc2f55v = accounts[1]
		const addressQbCphms = accounts[5]
		const addressvrxXaYJ = accounts[2]
		const boolHCaWK38 = await LedgisKsXRG8S.transferWithLock.call(addressc2f55v, uinttZFek1w, uinttWDYygo, {from: accounts[4]});
		const uint256FQcsiXE = await LedgisKsXRG8S.balanceOf.call(addressQbCphms, {from: accounts[4]});
		const addressfKPIZXc = await LedgisKsXRG8S.unfreeze.call(addressvrxXaYJ, {from: accounts[1]});

		assert.equal(boolHCaWK38, true)
		assert.equal(uint256FQcsiXE, BigInt("0"))
		await expect(LedgisKsXRG8S.unfreeze.call(addressvrxXaYJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNS8iAZ = await Ledgis.new({from: accounts[3]});
		const addressc6zfm0h = accounts[5]
		const uintIbFqhVM = BigInt("1608")
		const addressfIdhYPL = "0x0000000000000000000000000000000000000000"
		const addressjI7B2BV = accounts[2]
		const uintj3BAYsn = BigInt("1450")
		const uintKqmoRL6 = BigInt("1340")
		const addresshTMVi60 = "0x0000000000000000000000000000000000000001"
		const uint256QtftIN4 = await LedgisNS8iAZ.lockCount.call(addressc6zfm0h, {from: accounts[5]});
		const boolYCvSmc5 = await LedgisNS8iAZ.transferFrom.call(addressjI7B2BV, addressfIdhYPL, uintIbFqhVM, {from: accounts[1]});
		const boolTxpjsjS = await LedgisNS8iAZ.transferWithLock.call(addresshTMVi60, uintKqmoRL6, uintj3BAYsn, {from: accounts[1]});

		assert.equal(uint256QtftIN4, BigInt("0"))
		await expect(LedgisNS8iAZ.transferFrom.call(addressjI7B2BV, addressfIdhYPL, uintIbFqhVM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKsXRG8S = await Ledgis.new({from: accounts[4]});
		const addressIWp9hCA = accounts[4]
		const addressyvKqxkf = "0x0000000000000000000000000000000000000001"
		const uint256FQcsiXE = await LedgisKsXRG8S.balanceOf.call(addressIWp9hCA, {from: accounts[4]});
		const addressrw48hZN = await LedgisKsXRG8S.transferOwnership.call(addressyvKqxkf, {from: accounts[4]});

		assert.equal(uint256FQcsiXE, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisKsXRG8S = await Ledgis.new({from: accounts[4]});
		const addresskCGBdSL = accounts[5]
		const uint256FQcsiXE = await LedgisKsXRG8S.balanceOf.call(addresskCGBdSL, {from: accounts[4]});
		await LedgisKsXRG8S.pause.call({from: accounts[4]});

		assert.equal(uint256FQcsiXE, BigInt("0"))
		await expect(LedgisKsXRG8S.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNS8iAZ = await Ledgis.new({from: accounts[3]});
		const uintvusY51r = BigInt("1608")
		const addressBcu9LmO = "0x00000000000000000000000000000000000000-1"
		const addressd3NPE3G = accounts[1]
		const boolYCvSmc5 = await LedgisNS8iAZ.transferFrom.call(addressd3NPE3G, addressBcu9LmO, uintvusY51r, {from: accounts[1]});

		await expect(LedgisNS8iAZ.transferFrom.call(addressd3NPE3G, addressBcu9LmO, uintvusY51r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKsXRG8S = await Ledgis.new({from: accounts[4]});
		const uintiVMSZ3w = BigInt("521")
		const addressY9HqCQF = accounts[2]
		const addressb20IMo8 = accounts[4]
		const addressuacMYDm = accounts[4]
		const boolsm7LlKi = await LedgisKsXRG8S.mint.call(addressY9HqCQF, uintiVMSZ3w, {from: accounts[4]});
		const uint256lT637jx = await LedgisKsXRG8S.balanceOf.call(addressb20IMo8, {from: accounts[3]});
		const uint256FQcsiXE = await LedgisKsXRG8S.balanceOf.call(addressuacMYDm, {from: accounts[4]});

		assert.equal(boolsm7LlKi, true)
		assert.equal(uint256FQcsiXE, BigInt("10000000000000"))
		assert.equal(uint256lT637jx, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisNS8iAZ = await Ledgis.new({from: accounts[3]});
		const uintdaT2CF = BigInt("599")
		const addressxXisNgO = "0x0000000000000000000000000000000000000001"
		const uintGqyRg3S = BigInt("1326")
		const addressZwSMPTm = accounts[4]
		const addressdH7T2ym = accounts[1]
		const uinttGwocKL = BigInt("1608")
		const addressb3CRV0Q = "0x00000000000000000000000000000000000000-1"
		const addresshYonIkk = accounts[1]
		const address1jISSo = await LedgisNS8iAZ.burn.call(addressxXisNgO, uintdaT2CF, {from: accounts[3]});
		const boolDUHjhxx = await LedgisNS8iAZ.transferFrom.call(addressdH7T2ym, addressZwSMPTm, uintGqyRg3S, {from: accounts[1]});
		const boolYCvSmc5 = await LedgisNS8iAZ.transferFrom.call(addresshYonIkk, addressb3CRV0Q, uinttGwocKL, {from: accounts[1]});

		await expect(LedgisNS8iAZ.burn.call(addressxXisNgO, uintdaT2CF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisK6NLaSZ = await Ledgis.new({from: accounts[1]});
		const addressXRxsbcK = accounts[3]
		const addressyYl4aps = accounts[4]
		const addressvzkUTbJ = "0x0000000000000000000000000000000000000001"
		const addressSYpheQx = await LedgisK6NLaSZ.freeze.call(addressXRxsbcK, {from: accounts[1]});
		const uint256rw6Xuiq = await LedgisK6NLaSZ.allowance.call(addressvzkUTbJ, addressyYl4aps, {from: accounts[1]});
		await LedgisK6NLaSZ.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256rw6Xuiq, BigInt("0"))
		await expect(LedgisK6NLaSZ.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNS8iAZ = await Ledgis.new({from: accounts[3]});
		const uintdFMem4A = BigInt("355")
		const uintUf04Q0u = BigInt("1884")
		const addressDHayKby = accounts[0]
		const addressqyNSoh1 = accounts[1]
		const uintkFwuq3X = BigInt("1592")
		const addressjQIWLFA = "0x0000000000000000000000000000000000000000"
		const addressqcX6kDj = accounts[1]
		const addressiX72fO = await LedgisNS8iAZ.lockAfter.call(addressDHayKby, uintUf04Q0u, uintdFMem4A, {from: accounts[3]});
		const addressPbFb27 = await LedgisNS8iAZ.unfreeze.call(addressqyNSoh1, {from: accounts[0]});
		const boolYCvSmc5 = await LedgisNS8iAZ.transferFrom.call(addressqcX6kDj, addressjQIWLFA, uintkFwuq3X, {from: accounts[1]});

		await expect(LedgisNS8iAZ.lockAfter.call(addressDHayKby, uintUf04Q0u, uintdFMem4A, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKsXRG8S = await Ledgis.new({from: accounts[4]});
		const addressD4RIb7 = accounts[5]
		await LedgisKsXRG8S.unpause.call({from: accounts[4]});
		const uint256FQcsiXE = await LedgisKsXRG8S.balanceOf.call(addressD4RIb7, {from: accounts[4]});

		await expect(LedgisKsXRG8S.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisqEyH7Af = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUhWLy0x = BigInt("1098")
		const addressZzH3zKK = accounts[3]
		const addressKL6srVS = accounts[4]
		await LedgisqEyH7Af.onlyOwner.call({from: accounts[0]});
		await LedgisqEyH7Af.lockState.call(addressZzH3zKK, uintUhWLy0x, {from: accounts[1]});
		const uint256rC2XtTu = await LedgisqEyH7Af.balanceOf.call(addressKL6srVS, {from: accounts[1]});
		await LedgisqEyH7Af.onlyOwner.call({from: accounts[4]});
		await LedgisqEyH7Af.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Ledgis', async () => {
		const LedgisNS8iAZ = await Ledgis.new({from: accounts[3]});
		const uint0U2YoQ = BigInt("1136")
		const uintDvadas = BigInt("814")
		const addressnU4X6j = accounts[0]
		const uintKPNCEzD = BigInt("1608")
		const addressRhkoMb3 = "0x0000000000000000000000000000000000000001"
		const addressgkXjMr = accounts[1]
		const addressIvPCMz = await LedgisNS8iAZ.lock.call(addressnU4X6j, uintDvadas, uint0U2YoQ, {from: accounts[3]});
		const boolYCvSmc5 = await LedgisNS8iAZ.transferFrom.call(addressgkXjMr, addressRhkoMb3, uintKPNCEzD, {from: accounts[1]});

		await expect(LedgisNS8iAZ.lock.call(addressnU4X6j, uintDvadas, uint0U2YoQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKsXRG8S = await Ledgis.new({from: accounts[4]});
		const uintq0ceXcF = BigInt("697")
		const uint5lBLwb = BigInt("461")
		const addressOpNiAec = accounts[4]
		const addressRl1VN4p = accounts[5]
		const boolmRfgJm = await LedgisKsXRG8S.transferWithLockAfter.call(addressOpNiAec, uint5lBLwb, uintq0ceXcF, {from: accounts[4]});
		const uint256FQcsiXE = await LedgisKsXRG8S.balanceOf.call(addressRl1VN4p, {from: accounts[4]});

		assert.equal(boolmRfgJm, true)
		assert.equal(uint256FQcsiXE, BigInt("0"))
	});
})