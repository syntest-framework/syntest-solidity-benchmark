const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100AeH3wwl = await Token50X100.new({from: accounts[2]});
		const uintcEZEWbJ = BigInt("1488")
		const addressWEp7fZl = accounts[5]
		const uint8cqrPL = BigInt("528")
		const addressKQlAuSF = accounts[2]
		const uint9yFQVs = BigInt("506")
		const addressxDcDyJ0 = "0x0000000000000000000000000000000000000001"
//		const boolUKltNqa = await Token50X100AeH3wwl.transfer.call(addressWEp7fZl, uintcEZEWbJ, {from: accounts[2]});
//		const boola7luCZ0 = await Token50X100AeH3wwl.decreaseApproval.call(addressKQlAuSF, uint8cqrPL, {from: accounts[1]});
//		const boolcgc8zzO = await Token50X100AeH3wwl.transfer.call(addressxDcDyJ0, uint9yFQVs, {from: accounts[2]});

		await expect(Token50X100AeH3wwl.transfer.call(addressWEp7fZl, uintcEZEWbJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eTqTqdn = await Token50X100.new({from: accounts[5]});
		const uintLvadNy = BigInt("319")
		const addressPs6AGky = accounts[3]
		const addressbKiJvhc = accounts[0]
		const uintmmVvYV = BigInt("661")
		const addressUVZSi7R = accounts[4]
		const uintebrKVPd = BigInt("1446")
		const uintQGNGPN = BigInt("638")
		const uintsZZInJG = BigInt("57")
//		const boolB5K0W1G = await Token50X100eTqTqdn.transferFrom.call(addressbKiJvhc, addressPs6AGky, uintLvadNy, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHZQAglL = await Token50X100eTqTqdn.decreaseApproval.call(addressUVZSi7R, uintmmVvYV, {from: accounts[3]});
//		const boolHLydOHL = await Token50X100eTqTqdn.setMaxLockPeriod.call(uintebrKVPd, {from: accounts[2]});
//		const boolRT4mpdE = await Token50X100eTqTqdn.safeLock.call(uintsZZInJG, uintQGNGPN, {from: accounts[3]});

		await expect(Token50X100eTqTqdn.transferFrom.call(addressbKiJvhc, addressPs6AGky, uintLvadNy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100rm4Jq8R = await Token50X100.new({from: accounts[5]});
		const addressSLWyJh0 = accounts[4]
		const addressTONs9PB = accounts[4]
		const addressMLVzuND = accounts[1]
		const addressMO1TF9R = accounts[0]
		const uint256qsdmrXY = await Token50X100rm4Jq8R.allowance.call(addressTONs9PB, addressSLWyJh0, {from: accounts[4]});
		const uint256sIjZsE9 = await Token50X100rm4Jq8R.totalSupply.call({from: accounts[0]});
		const uint256gJXHCX = await Token50X100rm4Jq8R.allowance.call(addressMO1TF9R, addressMLVzuND, {from: accounts[4]});

		assert.equal(uint256gJXHCX, BigInt("0"))
		assert.equal(uint256qsdmrXY, BigInt("0"))
		assert.equal(uint256sIjZsE9, BigInt("4714285714285710"))
	});

	it('test for Token50X100', async () => {
		const Token50X100PCWZ8HF = await Token50X100.new({from: accounts[4]});
		const uintOPtJF8W = BigInt("1568")
		const addressnGoSTFK = accounts[4]
		const uintxRokROx = BigInt("1501")
		const uintIFNk8aH = BigInt("1201")
		const addresskxGAd1j = accounts[0]
		const uintxbUJK0c = BigInt("1723")
		const addressirCqTdJ = accounts[4]
		const addressLO9Fwj = accounts[5]
		const booldrOOLnX = await Token50X100PCWZ8HF.decreaseApproval.call(addressnGoSTFK, uintOPtJF8W, {from: "0x0000000000000000000000000000000000000001"});
//		const boolr8sHNqu = await Token50X100PCWZ8HF.setVesting.call(addresskxGAd1j, uintIFNk8aH, uintxRokROx, {from: accounts[2]});
//		const boolwWJdXtY = await Token50X100PCWZ8HF.transferFrom.call(addressLO9Fwj, addressirCqTdJ, uintxbUJK0c, {from: accounts[4]});

		assert.equal(booldrOOLnX, true)
		await expect(Token50X100PCWZ8HF.setVesting.call(addresskxGAd1j, uintIFNk8aH, uintxRokROx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100D7DUpJY = await Token50X100.new({from: accounts[0]});
		const boolqLKkiYz = true
		const addresssxMkJYG = accounts[0]
		const addressL0ObeN8 = accounts[0]
		const addressshL0wgC = accounts[1]
		const addressCJr3Gbr = accounts[2]
		const boolxhFM8NF = false
		const addressLrXUnb1 = accounts[2]
//		await Token50X100D7DUpJY.setWhiteList.call(addresssxMkJYG, boolqLKkiYz, {from: accounts[0]});
//		const addressL3MF4C6 = await Token50X100D7DUpJY.transferOwnership.call(addressL0ObeN8, {from: accounts[4]});
//		await Token50X100D7DUpJY.setLinkingAddresses.call(addressCJr3Gbr, addressshL0wgC, {from: accounts[3]});
//		await Token50X100D7DUpJY.setWhiteListReceivers.call(addressLrXUnb1, boolxhFM8NF, {from: accounts[2]});

		await expect(Token50X100D7DUpJY.setWhiteList.call(addresssxMkJYG, boolqLKkiYz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TvgDbpd = await Token50X100.new({from: accounts[2]});
		const uintYeFnnRJ = BigInt("215")
		const stringQ065m1q = "ImkT5lWd0H94SS91tYaOCi65I3NgB6fNSy6ig4Cyp8Mg9AAA25DK"
		const stringeQ78rav = "YKyNsEyHbyX4Qt3AAGYJVGJnR0M1dNButOKLmddcrCkSpdLcFhPetwxtzZlKSvV8UTBtaEY2uSqQGCnd2KxKdjy5PgvpdlO58aL"
		const uintYa1TDpo = BigInt("193")
		const addressHK88vUg = accounts[2]
		const uintwZdSUYI = BigInt("1034")
//		await Token50X100TvgDbpd.setSymbolNameDecimals.call(stringeQ78rav, stringQ065m1q, uintYeFnnRJ, {from: accounts[2]});
//		const boolkRTtcMV = await Token50X100TvgDbpd.decreaseApproval.call(addressHK88vUg, uintYa1TDpo, {from: accounts[2]});
//		const booltkwiiL7 = await Token50X100TvgDbpd.setMaxLockPeriod.call(uintwZdSUYI, {from: accounts[3]});

		await expect(Token50X100TvgDbpd.setSymbolNameDecimals.call(stringeQ78rav, stringQ065m1q, uintYeFnnRJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100v64kzt = await Token50X100.new({from: accounts[4]});
		const addressrzKNe5 = accounts[0]
		const uintTi1kAiL = BigInt("1941")
		const uint256YWRA4e4 = await Token50X100v64kzt.balanceOf.call(addressrzKNe5, {from: "0x0000000000000000000000000000000000000001"});
		const boole6nl2im = await Token50X100v64kzt.setMaxLockPeriod.call(uintTi1kAiL, {from: accounts[2]});

		assert.equal(boole6nl2im, false)
		assert.equal(uint256YWRA4e4, BigInt("0"))
	});

	it('test for Token50X100', async () => {
		const Token50X100TvgDbpd = await Token50X100.new({from: accounts[2]});
		const uinttjARiva = BigInt("215")
		const stringQ065m1q = "ImkT5lWd0H94SS91tYaOCi65I3NgB6fNy6ig4Cyp8Mg9AAA25DK"
		const stringeQ78rav = "YKyNsEyHbyX4Qt3AAGYJVGJnR0M1dNButOKLmddcrCkSpdLcFhPetwxtzZlKSvV8UTBtaEY2uSqQGCnd2KxKdjy5PgvpdlO58aL"
		const uintyKHaO0I = BigInt("1429")
		const uintOAUMbEI = BigInt("1977")
		const addresskQN21h5 = "0x0000000000000000000000000000000000000001"
		const uinth74T8bj = BigInt("1521")
		const uintiFsSQOS = BigInt("1159")
		const uintOgV6OfM = BigInt("319")
		const addressd5C3CRt = accounts[1]
		const uintsfysvi9 = BigInt("301")
		const uintswDKfsv = BigInt("193")
		const addressfXfnjUM = accounts[2]
		const uintEBdO1xB = BigInt("1034")
//		await Token50X100TvgDbpd.setSymbolNameDecimals.call(stringeQ78rav, stringQ065m1q, uinttjARiva, {from: accounts[2]});
//		const bool4kT7xl = await Token50X100TvgDbpd.setVesting.call(addresskQN21h5, uintOAUMbEI, uintyKHaO0I, {from: accounts[2]});
//		const boolxXPjakC = await Token50X100TvgDbpd.safeLock.call(uintiFsSQOS, uinth74T8bj, {from: accounts[4]});
//		const boolVfXexyn = await Token50X100TvgDbpd.transfer.call(addressd5C3CRt, uintOgV6OfM, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDDn69g4 = await Token50X100TvgDbpd.setMaxLockPeriod.call(uintsfysvi9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkRTtcMV = await Token50X100TvgDbpd.decreaseApproval.call(addressfXfnjUM, uintswDKfsv, {from: accounts[2]});
//		const booltkwiiL7 = await Token50X100TvgDbpd.setMaxLockPeriod.call(uintEBdO1xB, {from: accounts[3]});

		await expect(Token50X100TvgDbpd.setSymbolNameDecimals.call(stringeQ78rav, stringQ065m1q, uinttjARiva, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100AeH3wwl = await Token50X100.new({from: accounts[2]});
		const uint9lOVTS = BigInt("1041")
		const address3t2AA0 = accounts[4]
		const uintfqhH7mn = BigInt("506")
		const addresssgez57y = "0x0000000000000000000000000000000000000000"
		const boolXGvy9hY = await Token50X100AeH3wwl.decreaseApproval.call(address3t2AA0, uint9lOVTS, {from: accounts[2]});
//		const boolcgc8zzO = await Token50X100AeH3wwl.transfer.call(addresssgez57y, uintfqhH7mn, {from: accounts[2]});

		assert.equal(boolXGvy9hY, true)
		await expect(Token50X100AeH3wwl.transfer.call(addresssgez57y, uintfqhH7mn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100AeH3wwl = await Token50X100.new({from: accounts[2]});
		const uinttZ8Eecp = BigInt("1067")
		const addresscWHBdR = accounts[1]
		const uintAaI7z2T = BigInt("506")
		const addressYvItrOs = "0x0000000000000000000000000000000000000000"
//		await Token50X100AeH3wwl.onlyOwner.call({from: accounts[0]});
//		const boolBrQQT47 = await Token50X100AeH3wwl.approve.call(addresscWHBdR, uinttZ8Eecp, {from: accounts[1]});
//		const boolcgc8zzO = await Token50X100AeH3wwl.transfer.call(addressYvItrOs, uintAaI7z2T, {from: accounts[2]});

		await expect(Token50X100AeH3wwl.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TvgDbpd = await Token50X100.new({from: accounts[2]});
		const uint1giVOj = BigInt("193")
		const addressLmLHokN = accounts[2]
		const uintlLurGbr = BigInt("1063")
		const boolkRTtcMV = await Token50X100TvgDbpd.decreaseApproval.call(addressLmLHokN, uint1giVOj, {from: accounts[2]});
//		await Token50X100TvgDbpd.release.call({from: accounts[2]});
//		const booltkwiiL7 = await Token50X100TvgDbpd.setMaxLockPeriod.call(uintlLurGbr, {from: accounts[3]});

		assert.equal(boolkRTtcMV, true)
		await expect(Token50X100TvgDbpd.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100AeH3wwl = await Token50X100.new({from: accounts[2]});
		const uinte0nrWRz = BigInt("1303")
		const addressiKFRRUY = accounts[2]
		const uintQ5IQWR8 = BigInt("506")
		const addressvEzhqKM = "0x0000000000000000000000000000000000000000"
		const boolIADR3wI = await Token50X100AeH3wwl.increaseApproval.call(addressiKFRRUY, uinte0nrWRz, {from: accounts[4]});
//		const boolcgc8zzO = await Token50X100AeH3wwl.transfer.call(addressvEzhqKM, uintQ5IQWR8, {from: accounts[2]});

		assert.equal(boolIADR3wI, true)
		await expect(Token50X100AeH3wwl.transfer.call(addressvEzhqKM, uintQ5IQWR8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100AeH3wwl = await Token50X100.new({from: accounts[2]});
		const uintXQqmQP = BigInt("506")
		const addressY2tofQx = "0x0000000000000000000000000000000000000001"
		const uintlF0HFfC = BigInt("104")
		const stringWOfWGQ = "XipApBeRzC6PdZfdXHLDiPJcF1vXHHotH59CIbGLFNzu2UDvjW6soeKjnvtAS9xiRhDtB9HdQE"
		const stringDsHwLr = "c4hVlY8CvetCpfWq4jg2jndD1ODcDrOYgl0z9wAHtsTToXRlY"
//		await Token50X100AeH3wwl.lock.call({from: accounts[2]});
//		const boolcgc8zzO = await Token50X100AeH3wwl.transfer.call(addressY2tofQx, uintXQqmQP, {from: accounts[2]});
//		const boola9IR9Wx = await Token50X100AeH3wwl.setSymbolNameDecimals.call(stringDsHwLr, stringWOfWGQ, uintlF0HFfC, {from: accounts[0]});

		await expect(Token50X100AeH3wwl.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TvgDbpd = await Token50X100.new({from: accounts[2]});
		const boolYAqanC = false
		const addressCp5ATck = accounts[1]
		const uintqo2YJjC = BigInt("506")
		const uintOdCciag = BigInt("53")
		const addressk0lGcm1 = accounts[3]
//		await Token50X100TvgDbpd.setWhiteListReceivers.call(addressCp5ATck, boolYAqanC, {from: accounts[2]});
//		const boolVIfAhlx = await Token50X100TvgDbpd.setMaxLockPeriod.call(uintqo2YJjC, {from: accounts[2]});
//		const boolkRTtcMV = await Token50X100TvgDbpd.decreaseApproval.call(addressk0lGcm1, uintOdCciag, {from: accounts[2]});

		await expect(Token50X100TvgDbpd.setWhiteListReceivers.call(addressCp5ATck, boolYAqanC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100AeH3wwl = await Token50X100.new({from: accounts[2]});
		const uintvmrXekf = BigInt("855")
		const addressEVX8XCX = accounts[2]
		const uintYSRHI8O = BigInt("506")
		const addressBnnY0Wq = "0x0000000000000000000000000000000000000001"
		const boolmBqHNC2 = await Token50X100AeH3wwl.approve.call(addressEVX8XCX, uintvmrXekf, {from: accounts[4]});
//		const boolcgc8zzO = await Token50X100AeH3wwl.transfer.call(addressBnnY0Wq, uintYSRHI8O, {from: accounts[2]});

		assert.equal(boolmBqHNC2, true)
		await expect(Token50X100AeH3wwl.transfer.call(addressBnnY0Wq, uintYSRHI8O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RoqInGR = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintc7O8JJ = BigInt("1900")
		const uintB0Tkqdb = BigInt("346")
		const boolHRsudJX = true
		const addresscuKx2uC = accounts[3]
		const boolcUF2Tb8 = await Token50X100RoqInGR.setMaxLockPeriod.call(uintc7O8JJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolbiGusRb = await Token50X100RoqInGR.setMaxLockPeriod.call(uintB0Tkqdb, {from: accounts[4]});
		await Token50X100RoqInGR.setWhiteList.call(addresscuKx2uC, boolHRsudJX, {from: accounts[0]});
		await Token50X100RoqInGR.release.call({from: accounts[0]});
	});

	it('test for Token50X100', async () => {
		const Token50X100AeH3wwl = await Token50X100.new({from: accounts[2]});
		const boolHMPUR7J = false
		const addressCyalAwv = accounts[1]
		const addressZqmqC8J = accounts[4]
		const uinthYHQH3Q = BigInt("528")
		const addressQHVDa6 = "0x0000000000000000000000000000000000000001"
//		await Token50X100AeH3wwl.setWhiteListReceivers.call(addressCyalAwv, boolHMPUR7J, {from: accounts[2]});
//		await Token50X100AeH3wwl.setTokenContract.call(addressZqmqC8J, {from: accounts[2]});
//		const boolcgc8zzO = await Token50X100AeH3wwl.transfer.call(addressQHVDa6, uinthYHQH3Q, {from: accounts[2]});

		await expect(Token50X100AeH3wwl.setWhiteListReceivers.call(addressCyalAwv, boolHMPUR7J, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TvgDbpd = await Token50X100.new({from: accounts[2]});
		const uintPqMfdz = BigInt("0")
		const addressuwlyRUR = accounts[2]
		const uint3AOzBy = BigInt("329")
		const addressIyI75o = "0x0000000000000000000000000000000000000001"
		const boolkRTtcMV = await Token50X100TvgDbpd.decreaseApproval.call(addressuwlyRUR, uintPqMfdz, {from: accounts[2]});
//		await Token50X100TvgDbpd.release.call({from: accounts[2]});
//		await Token50X100TvgDbpd.release.call({from: accounts[1]});
//		const boolrVyKZL9 = await Token50X100TvgDbpd.increaseApproval.call(addressIyI75o, uint3AOzBy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolkRTtcMV, true)
		await expect(Token50X100TvgDbpd.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100AeH3wwl = await Token50X100.new({from: accounts[2]});
		const addressSLNzaRW = accounts[0]
		const uintXktQ1wI = BigInt("506")
		const addressHPPMNj = "0x0000000000000000000000000000000000000000"
		const addressNL5akiZ = await Token50X100AeH3wwl.transferOwnership.call(addressSLNzaRW, {from: accounts[2]});
//		const boolcgc8zzO = await Token50X100AeH3wwl.transfer.call(addressHPPMNj, uintXktQ1wI, {from: accounts[2]});

		await expect(Token50X100AeH3wwl.transfer.call(addressHPPMNj, uintXktQ1wI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100AeH3wwl = await Token50X100.new({from: accounts[2]});
		const uintHVqINbY = BigInt("829")
		const uintPmnnxZB = BigInt("1556")
		const addressI1ZU6kU = "0x0000000000000000000000000000000000000001"
		const addressKB4ZVoD = "0x0000000000000000000000000000000000000001"
		const uintXdnr6Gq = BigInt("506")
		const addressYSQHo96 = "0x0000000000000000000000000000000000000000"
//		const boolhdVfKB5 = await Token50X100AeH3wwl._transfer.call(addressKB4ZVoD, addressI1ZU6kU, uintPmnnxZB, uintHVqINbY, {from: accounts[2]});
//		const boolcgc8zzO = await Token50X100AeH3wwl.transfer.call(addressYSQHo96, uintXdnr6Gq, {from: accounts[2]});

		await expect(Token50X100AeH3wwl._transfer.call(addressKB4ZVoD, addressI1ZU6kU, uintPmnnxZB, uintHVqINbY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100AeH3wwl = await Token50X100.new({from: accounts[2]});
		const uintYLsAVB5 = BigInt("506")
		const addressJ6JrRa = "0x00000000000000000000000000000000000000-1"
//		const boolcgc8zzO = await Token50X100AeH3wwl.transfer.call(addressJ6JrRa, uintYLsAVB5, {from: accounts[2]});

		await expect(Token50X100AeH3wwl.transfer.call(addressJ6JrRa, uintYLsAVB5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})