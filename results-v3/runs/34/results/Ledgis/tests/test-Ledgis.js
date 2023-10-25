const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisBpwTXq = await Ledgis.new({from: accounts[4]});
		const uintIxGHYSu = BigInt("831")
		const address76JSe4 = accounts[5]
		const uintFRg5DN = BigInt("728")
		const uintktOGxot = BigInt("405")
		const addressfqDHhEV = accounts[2]
		const uintJVyJ0A1 = BigInt("92")
		const addressZF3IMKy = accounts[3]
		const boolvZm6xnJ = await LedgisBpwTXq.transfer.call(address76JSe4, uintIxGHYSu, {from: accounts[5]});
		const boolWAsd2rh = await LedgisBpwTXq.transferWithLock.call(addressfqDHhEV, uintktOGxot, uintFRg5DN, {from: "0x0000000000000000000000000000000000000001"});
		const boolove8Pgo = await LedgisBpwTXq.transfer.call(addressZF3IMKy, uintJVyJ0A1, {from: accounts[3]});
		await LedgisBpwTXq.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisBpwTXq.transfer.call(address76JSe4, uintIxGHYSu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const uintPoYsMl9 = BigInt("500")
		const addressvmDMQq = accounts[2]
		const addressEHDKUPP = accounts[1]
		const addressHYM9Tkb = accounts[3]
		const addressEbFkZbe = await LedgiswHfnSSE.unlock.call(addressvmDMQq, uintPoYsMl9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jDEESn = await LedgiswHfnSSE.allowance.call(addressHYM9Tkb, addressEHDKUPP, {from: accounts[1]});

		await expect(LedgiswHfnSSE.unlock.call(addressvmDMQq, uintPoYsMl9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissONzjxK = await Ledgis.new({from: accounts[1]});
		const uintAJyfxwQ = BigInt("620")
		const addressIEFjxhN = accounts[2]
		const addressc1qh0V = accounts[1]
		const uintNNSx3Es = BigInt("1387")
		const uinteyY0TU = BigInt("1209")
		const addressumKb2Nk = accounts[5]
		const boolkQx97lP = await LedgissONzjxK.transferFrom.call(addressc1qh0V, addressIEFjxhN, uintAJyfxwQ, {from: accounts[4]});
		const boolqRcW7cP = await LedgissONzjxK.transferWithLock.call(addressumKb2Nk, uinteyY0TU, uintNNSx3Es, {from: accounts[0]});
		await LedgissONzjxK.whenNotFrozen.call({from: accounts[3]});

		await expect(LedgissONzjxK.transferFrom.call(addressc1qh0V, addressIEFjxhN, uintAJyfxwQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisb3TkhJh = await Ledgis.new({from: accounts[5]});
		const uintmiVEWz7 = BigInt("1750")
		const addressWMW7gZF = accounts[3]
		const addressSyl2RWm = accounts[2]
		const uintUy0vMs = BigInt("969")
		const addressSZXyz0z = accounts[3]
		await Ledgisb3TkhJh.pause.call({from: accounts[5]});
		const boolNhWUTNw = await Ledgisb3TkhJh.transfer.call(addressWMW7gZF, uintmiVEWz7, {from: accounts[0]});
		const boolfd3rOK = await Ledgisb3TkhJh.isFrozen.call(addressSyl2RWm, {from: accounts[1]});
		const uint256aI83br8 = await Ledgisb3TkhJh.afterTime.call(uintUy0vMs, {from: "0x0000000000000000000000000000000000000001"});
		const addressyEUy7NV = await Ledgisb3TkhJh.transferOwnership.call(addressSZXyz0z, {from: accounts[1]});
		await Ledgisb3TkhJh.unpause.call({from: accounts[0]});

		await expect(Ledgisb3TkhJh.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisBgpRehB = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzbJbcx5 = BigInt("1324")
		const uintg9kFxR4 = BigInt("471")
		const addressDsHp5EI = accounts[0]
		const addresskiOcFrG = accounts[4]
		const uintnLEgG7q = BigInt("428")
		const uintnv7peZw = BigInt("325")
		const addressqk2fN2K = accounts[4]
		const boolVSIFHV = await LedgisBgpRehB.transferWithLockAfter.call(addressDsHp5EI, uintg9kFxR4, uintzbJbcx5, {from: accounts[4]});
		const addressaCpWd2G = await LedgisBgpRehB.freeze.call(addresskiOcFrG, {from: accounts[2]});
		await LedgisBgpRehB.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const booleW02n4m = await LedgisBgpRehB.transferWithLockAfter.call(addressqk2fN2K, uintnv7peZw, uintnLEgG7q, {from: accounts[1]});
	});

	it('test for Ledgis', async () => {
		const LedgisRxjixOP = await Ledgis.new({from: accounts[1]});
		const addresstNGlJAv = accounts[3]
		const addressC4K9Yv0 = accounts[0]
		const uintza8RlfS = BigInt("1305")
		const uintzK5rKUN = BigInt("1002")
		const addressmsV4kt = "0x0000000000000000000000000000000000000001"
		const uint256ChE9u3a = await LedgisRxjixOP.currentTime.call({from: accounts[3]});
		await LedgisRxjixOP.pause.call({from: accounts[1]});
		const uint256MUPi2Pl = await LedgisRxjixOP.allowance.call(addressC4K9Yv0, addresstNGlJAv, {from: accounts[5]});
		const boolzH7p3qE = await LedgisRxjixOP.transferWithLock.call(addressmsV4kt, uintzK5rKUN, uintza8RlfS, {from: accounts[2]});

		assert.equal(uint256ChE9u3a, BigInt("1630231633"))
		await expect(LedgisRxjixOP.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const addressZSpuKo1 = accounts[0]
		const addressYQ9oYud = accounts[1]
		const addressr5wyRo = accounts[3]
		const booluY2WMCD = await LedgiswHfnSSE.isFrozen.call(addressZSpuKo1, {from: accounts[4]});
		const uint256QNAu2gW = await LedgiswHfnSSE.currentTime.call({from: accounts[0]});
		await LedgiswHfnSSE.pause.call({from: accounts[1]});
		const uint256jDEESn = await LedgiswHfnSSE.allowance.call(addressr5wyRo, addressYQ9oYud, {from: accounts[1]});

		assert.equal(booluY2WMCD, false)
		assert.equal(uint256QNAu2gW, BigInt("1630231630"))
		await expect(LedgiswHfnSSE.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const uintjemQrCP = BigInt("455")
		const addresszCrbNP = accounts[0]
		const uintIZ0HzZ2 = BigInt("500")
		const addressGSBW5Qi = accounts[2]
		const addressp09hWiY = accounts[1]
		const addressQ28y1Qc = accounts[1]
		const addressldAAar1 = accounts[3]
		const addressvbWRF2b = await LedgiswHfnSSE.burn.call(addresszCrbNP, uintjemQrCP, {from: accounts[0]});
		const addressEbFkZbe = await LedgiswHfnSSE.unlock.call(addressGSBW5Qi, uintIZ0HzZ2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256aHN7Wr6 = await LedgiswHfnSSE.lockCount.call(addressp09hWiY, {from: accounts[4]});
		const uint256jDEESn = await LedgiswHfnSSE.allowance.call(addressldAAar1, addressQ28y1Qc, {from: accounts[1]});

		await expect(LedgiswHfnSSE.unlock.call(addressGSBW5Qi, uintIZ0HzZ2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const uintx6dJUky = BigInt("500")
		const addressvrw9WXw = accounts[2]
		const addressB7RsWrq = accounts[1]
		const addresshCW0nyP = accounts[3]
		await LedgiswHfnSSE.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const addressEbFkZbe = await LedgiswHfnSSE.unlock.call(addressvrw9WXw, uintx6dJUky, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jDEESn = await LedgiswHfnSSE.allowance.call(addresshCW0nyP, addressB7RsWrq, {from: accounts[1]});

		await expect(LedgiswHfnSSE.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissONzjxK = await Ledgis.new({from: accounts[1]});
		const uintwWOo4lD = BigInt("429")
		const addressltmtMwG = accounts[1]
		const uinttVL5OXF = BigInt("620")
		const addressXV8jYW1 = accounts[3]
		const addressE3HmhId = accounts[1]
		const uintsxi3h4 = BigInt("1387")
		const uintnEDJxkj = BigInt("1209")
		const addressIcpPxQ0 = accounts[5]
		const uint256JD2JePt = await LedgissONzjxK.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const boolxf8pYuz = await LedgissONzjxK.mint.call(addressltmtMwG, uintwWOo4lD, {from: accounts[1]});
		const boolkQx97lP = await LedgissONzjxK.transferFrom.call(addressE3HmhId, addressXV8jYW1, uinttVL5OXF, {from: accounts[4]});
		await LedgissONzjxK.pause.call({from: accounts[2]});
		const boolqRcW7cP = await LedgissONzjxK.transferWithLock.call(addressIcpPxQ0, uintnEDJxkj, uintsxi3h4, {from: accounts[0]});

		assert.equal(boolxf8pYuz, true)
		assert.equal(uint256JD2JePt, BigInt("1630231627"))
		await expect(LedgissONzjxK.transferFrom.call(addressE3HmhId, addressXV8jYW1, uinttVL5OXF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZf6KJDv = await Ledgis.new({from: accounts[0]});
		const addressEquC5ab = accounts[4]
		const uintFibNR0X = BigInt("1107")
		const addressXPcs7Cf = accounts[2]
		const uintSVVGGce = BigInt("1837")
		const addressfschupZ = accounts[4]
		const uintaKF9pb4 = BigInt("391")
		const address4hQn4W = accounts[3]
		const uint256JLe4oWb = await LedgisZf6KJDv.lockCount.call(addressEquC5ab, {from: accounts[5]});
		await LedgisZf6KJDv.pause.call({from: accounts[1]});
		const boolP3yYBH7 = await LedgisZf6KJDv.decreaseAllowance.call(addressXPcs7Cf, uintFibNR0X, {from: accounts[2]});
		const boolX21RMyo = await LedgisZf6KJDv.mint.call(addressfschupZ, uintSVVGGce, {from: accounts[1]});
		const addressQ5HCxqu = await LedgisZf6KJDv.unlock.call(address4hQn4W, uintaKF9pb4, {from: accounts[1]});

		assert.equal(uint256JLe4oWb, BigInt("0"))
		await expect(LedgisZf6KJDv.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const uintrVjiriS = BigInt("244")
		const address9P3dcC = accounts[2]
		const addressft78vjI = accounts[2]
		const addressSwA2SD4 = accounts[3]
		const boolyXoJWXK = await LedgiswHfnSSE.decreaseAllowance.call(address9P3dcC, uintrVjiriS, {from: accounts[3]});
		const uint256jDEESn = await LedgiswHfnSSE.allowance.call(addressSwA2SD4, addressft78vjI, {from: accounts[1]});

		await expect(LedgiswHfnSSE.decreaseAllowance.call(address9P3dcC, uintrVjiriS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const addressv8qHniO = accounts[2]
		const uintGVXZw1 = BigInt("216")
		const addressBZCBgPs = accounts[2]
		const addresspMAyGA = accounts[3]
		const uint256fIoTue = await LedgiswHfnSSE.lockCount.call(addressv8qHniO, {from: accounts[3]});
		const uint256hs35FKB = await LedgiswHfnSSE.afterTime.call(uintGVXZw1, {from: accounts[1]});
		const uint256jDEESn = await LedgiswHfnSSE.allowance.call(addresspMAyGA, addressBZCBgPs, {from: accounts[1]});

		assert.equal(uint256fIoTue, BigInt("0"))
		assert.equal(uint256hs35FKB, BigInt("1630231827"))
		assert.equal(uint256jDEESn, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgissONzjxK = await Ledgis.new({from: accounts[1]});
		const uintKBOUgFR = BigInt("82")
		const addressKmdVFim = accounts[2]
		const uintDJvId3 = BigInt("620")
		const addressny2Rewg = accounts[2]
		const addressTWsFFg6 = accounts[1]
		const boolVl9xPI = await LedgissONzjxK.approve.call(addressKmdVFim, uintKBOUgFR, {from: accounts[2]});
		const boolkQx97lP = await LedgissONzjxK.transferFrom.call(addressTWsFFg6, addressny2Rewg, uintDJvId3, {from: accounts[4]});

		assert.equal(boolVl9xPI, true)
		await expect(LedgissONzjxK.transferFrom.call(addressTWsFFg6, addressny2Rewg, uintDJvId3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const addressZCyfFRb = accounts[5]
		const addressixsrbNW = accounts[2]
		const addressxwZ302K = accounts[3]
		const uint256SzHx65d = await LedgiswHfnSSE.balanceOf.call(addressZCyfFRb, {from: accounts[1]});
		const uint256jDEESn = await LedgiswHfnSSE.allowance.call(addressxwZ302K, addressixsrbNW, {from: accounts[1]});

		assert.equal(uint256SzHx65d, BigInt("0"))
		assert.equal(uint256jDEESn, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgissONzjxK = await Ledgis.new({from: accounts[1]});
		const addressPo6rWQk = accounts[0]
		const uintJJ4rY2T = BigInt("620")
		const addresseExAHB6 = accounts[2]
		const addressRt1KQV = accounts[1]
		const uintpRIyLKF = BigInt("173")
		const uintjqk7vun = BigInt("916")
		const addressb6Pw7h = accounts[4]
		const addressHHsTTTG = await LedgissONzjxK.transferOwnership.call(addressPo6rWQk, {from: accounts[1]});
		const boolkQx97lP = await LedgissONzjxK.transferFrom.call(addressRt1KQV, addresseExAHB6, uintJJ4rY2T, {from: accounts[4]});
		const addresswwxmz43 = await LedgissONzjxK.lock.call(addressb6Pw7h, uintjqk7vun, uintpRIyLKF, {from: accounts[0]});

		await expect(LedgissONzjxK.transferFrom.call(addressRt1KQV, addresseExAHB6, uintJJ4rY2T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const uintqrOtdyl = BigInt("1682")
		const addressy5aE5bh = accounts[4]
		const addressrYYLv4 = accounts[5]
		const addressUMtpTyZ = accounts[1]
		const addresspevB2t = accounts[3]
		await LedgiswHfnSSE.unpause.call({from: accounts[0]});
		const bools2BjQJj = await LedgiswHfnSSE.transferFrom.call(addressrYYLv4, addressy5aE5bh, uintqrOtdyl, {from: accounts[3]});
		const uint256jDEESn = await LedgiswHfnSSE.allowance.call(addresspevB2t, addressUMtpTyZ, {from: accounts[1]});

		await expect(LedgiswHfnSSE.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissONzjxK = await Ledgis.new({from: accounts[1]});
		const uintrBrCCgM = BigInt("620")
		const addressKSmsNn = accounts[3]
		const addressKmFTJ6w = accounts[1]
		await LedgissONzjxK.renounceOwnership.call({from: accounts[1]});
		const boolkQx97lP = await LedgissONzjxK.transferFrom.call(addressKmFTJ6w, addressKSmsNn, uintrBrCCgM, {from: accounts[4]});

		await expect(LedgissONzjxK.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissONzjxK = await Ledgis.new({from: accounts[1]});
		const uintWIEHgV = BigInt("1582")
		const uintRI5K9uC = BigInt("1368")
		const addressYdGUKd = accounts[0]
		const uintiqIZPt = BigInt("620")
		const addressedqilC0 = accounts[2]
		const addressKHH0BpF = accounts[1]
		const uintkJa11f = BigInt("1985")
		const addressaNPCVmA = accounts[0]
		const addressTkGmcpB = accounts[4]
		const booldQsToWe = await LedgissONzjxK.transferWithLock.call(addressYdGUKd, uintRI5K9uC, uintWIEHgV, {from: accounts[1]});
		await LedgissONzjxK.whenPaused.call({from: accounts[1]});
		const boolkQx97lP = await LedgissONzjxK.transferFrom.call(addressKHH0BpF, addressedqilC0, uintiqIZPt, {from: accounts[4]});
		const booltzicaKE = await LedgissONzjxK.transferFrom.call(addressTkGmcpB, addressaNPCVmA, uintkJa11f, {from: accounts[1]});

		assert.equal(booldQsToWe, true)
		await expect(LedgissONzjxK.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const addressjRGOP5k = accounts[2]
		const addressyEjPuoJ = accounts[3]
		const uintEEcNgaY = BigInt("127")
		const addressBXEVFF7 = accounts[0]
		const uint256jDEESn = await LedgiswHfnSSE.allowance.call(addressyEjPuoJ, addressjRGOP5k, {from: accounts[1]});
		await LedgiswHfnSSE.lockState.call(addressBXEVFF7, uintEEcNgaY, {from: accounts[2]});

		assert.equal(uint256jDEESn, BigInt("0"))
		await expect(LedgiswHfnSSE.lockState.call(addressBXEVFF7, uintEEcNgaY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissONzjxK = await Ledgis.new({from: accounts[1]});
		const uintiCBT5GS = BigInt("1204")
		const addressuUTeaD = "0x0000000000000000000000000000000000000001"
		const uintWuvcycx = BigInt("620")
		const addressmbHgir = accounts[2]
		const addressawXhUCM = accounts[1]
		const boolR0dcvXg = await LedgissONzjxK.increaseAllowance.call(addressuUTeaD, uintiCBT5GS, {from: accounts[2]});
		const boolkQx97lP = await LedgissONzjxK.transferFrom.call(addressawXhUCM, addressmbHgir, uintWuvcycx, {from: accounts[4]});

		assert.equal(boolR0dcvXg, true)
		await expect(LedgissONzjxK.transferFrom.call(addressawXhUCM, addressmbHgir, uintWuvcycx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissONzjxK = await Ledgis.new({from: accounts[1]});
		const uintgjGXkZ6 = BigInt("1831")
		const addresssWku6i4 = accounts[0]
		const uintyqudez = BigInt("620")
		const addressSUh2kxx = accounts[3]
		const addresskuejptJ = accounts[1]
		const addressZYUSkYP = accounts[2]
		const addressCfhUc5z = await LedgissONzjxK.burn.call(addresssWku6i4, uintgjGXkZ6, {from: accounts[1]});
		await LedgissONzjxK.whenNotPaused.call({from: accounts[4]});
		const boolkQx97lP = await LedgissONzjxK.transferFrom.call(addresskuejptJ, addressSUh2kxx, uintyqudez, {from: accounts[4]});
		const uint256fieb6JF = await LedgissONzjxK.balanceOf.call(addressZYUSkYP, {from: accounts[3]});

		await expect(LedgissONzjxK.burn.call(addresssWku6i4, uintgjGXkZ6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const addressRFivLkR = accounts[1]
		const address9VyVIl = accounts[3]
		const uint256ZdUgoy3 = await LedgiswHfnSSE.totalSupply.call({from: accounts[2]});
		const uint256jDEESn = await LedgiswHfnSSE.allowance.call(address9VyVIl, addressRFivLkR, {from: accounts[1]});

		assert.equal(uint256ZdUgoy3, BigInt("10000000000000"))
		assert.equal(uint256jDEESn, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const addressk0PBtXr = accounts[6]
		const uintEtgMtz = BigInt("1028")
		const uintsO1oswu = BigInt("166")
		const addressy3naa01 = accounts[2]
		const uint256SzHx65d = await LedgiswHfnSSE.balanceOf.call(addressk0PBtXr, {from: accounts[1]});
		const boolr4XcvFK = await LedgiswHfnSSE.transferWithLockAfter.call(addressy3naa01, uintsO1oswu, uintEtgMtz, {from: accounts[0]});

		assert.equal(boolr4XcvFK, true)
		assert.equal(uint256SzHx65d, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const addressACB8rpb = accounts[1]
		const address77BFp9 = accounts[4]
		const uintrtN9Y3B = BigInt("1208")
		const uintnkrv0ke = BigInt("1604")
		const addresskZgZ9Q = "0x0000000000000000000000000000000000000001"
		const uint256jDEESn = await LedgiswHfnSSE.allowance.call(address77BFp9, addressACB8rpb, {from: accounts[1]});
		const addressH5CnFc2 = await LedgiswHfnSSE.lockAfter.call(addresskZgZ9Q, uintnkrv0ke, uintrtN9Y3B, {from: accounts[0]});

		assert.equal(uint256jDEESn, BigInt("0"))
		await expect(LedgiswHfnSSE.lockAfter.call(addresskZgZ9Q, uintnkrv0ke, uintrtN9Y3B, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUa2qyQR = await Ledgis.new({from: accounts[3]});
		const addressTm6pKwK = accounts[5]
		const addressjl2HUrP = await LedgisUa2qyQR.unfreeze.call(addressTm6pKwK, {from: accounts[3]});
		await LedgisUa2qyQR.whenNotFrozen.call({from: accounts[1]});
		await LedgisUa2qyQR.pause.call({from: accounts[1]});
		const uint256xKcp6wA = await LedgisUa2qyQR.currentTime.call({from: accounts[2]});
		await LedgisUa2qyQR.renounceOwnership.call({from: accounts[4]});

		await expect(LedgisUa2qyQR.whenNotFrozen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const addresssuIDnhz = accounts[1]
		const uintRrG0RSi = BigInt("701")
		const uintLMj87ay = BigInt("1588")
		const addressmWKvbg = accounts[4]
		const addressPPySRXF = accounts[5]
		const uintMCxLHdX = BigInt("2020")
		const addressHjk14mR = accounts[2]
		const addressNK9wXZM = accounts[2]
		const addresscVjBv33 = await LedgiswHfnSSE.freeze.call(addresssuIDnhz, {from: accounts[0]});
		const addressUWOgyd = await LedgiswHfnSSE.lockAfter.call(addressmWKvbg, uintLMj87ay, uintRrG0RSi, {from: "0x0000000000000000000000000000000000000001"});
		const uint256SzHx65d = await LedgiswHfnSSE.balanceOf.call(addressPPySRXF, {from: accounts[1]});
		const boolEv8thym = await LedgiswHfnSSE.transferFrom.call(addressNK9wXZM, addressHjk14mR, uintMCxLHdX, {from: accounts[5]});

		await expect(LedgiswHfnSSE.lockAfter.call(addressmWKvbg, uintLMj87ay, uintRrG0RSi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswHfnSSE = await Ledgis.new({from: accounts[0]});
		const uintBwrvym3 = BigInt("1502")
		const uintS0IZdmf = BigInt("854")
		const address3LnREx = accounts[4]
		const addressvz97Ej = accounts[4]
		const addressyNBpES = accounts[3]
		const addressBDENhAL = accounts[6]
		const uint256m9B13yX = await LedgiswHfnSSE.totalSupply.call({from: accounts[3]});
		const addressgPdE44x = await LedgiswHfnSSE.lock.call(address3LnREx, uintS0IZdmf, uintBwrvym3, {from: accounts[0]});
		const uint2563XpRBp = await LedgiswHfnSSE.allowance.call(addressyNBpES, addressvz97Ej, {from: accounts[4]});
		const uint256SzHx65d = await LedgiswHfnSSE.balanceOf.call(addressBDENhAL, {from: accounts[1]});

		assert.equal(uint256m9B13yX, BigInt("10000000000000"))
		await expect(LedgiswHfnSSE.lock.call(address3LnREx, uintS0IZdmf, uintBwrvym3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissONzjxK = await Ledgis.new({from: accounts[1]});
		const addresscUkljf = accounts[5]
		const uintad2gqmV = BigInt("733")
		const addressl4Weg4D = accounts[5]
		const uintgjnSvU = BigInt("620")
		const addressm5pEnEJ = accounts[3]
		const addressht0e68 = accounts[1]
		const uintSZ1jHkg = BigInt("1850")
		const addressZUoIRf = accounts[2]
		const addressGGwUGCf = accounts[1]
		const uint256sS3A0i0 = await LedgissONzjxK.lockCount.call(addresscUkljf, {from: accounts[3]});
		const addressdhTNuHW = await LedgissONzjxK.unlock.call(addressl4Weg4D, uintad2gqmV, {from: accounts[1]});
		const boolkQx97lP = await LedgissONzjxK.transferFrom.call(addressht0e68, addressm5pEnEJ, uintgjnSvU, {from: accounts[4]});
		const boolAJhYu4U = await LedgissONzjxK.transferFrom.call(addressGGwUGCf, addressZUoIRf, uintSZ1jHkg, {from: accounts[3]});

		assert.equal(uint256sS3A0i0, BigInt("0"))
		await expect(LedgissONzjxK.unlock.call(addressl4Weg4D, uintad2gqmV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})