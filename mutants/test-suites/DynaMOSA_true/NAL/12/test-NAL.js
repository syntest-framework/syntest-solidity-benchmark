const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALWymDeE = await NAL.new({from: accounts[4]});
		const uintlN8QFWk = BigInt("904")
		const addressbPWaSwX = accounts[0]
		const addressG2E8xNP = accounts[1]
		const uintqKcsTp = BigInt("1892")
		const addressMPTamyF = accounts[2]
		const addressSg7qe9 = accounts[4]
		const uints5QzuTg = BigInt("1810")
		const addressSNTfMJD = accounts[3]
//		const boolna5xAcE = await NALWymDeE.transferFrom.call(addressG2E8xNP, addressbPWaSwX, uintlN8QFWk, {from: accounts[0]});
//		const boolyqygnln = await NALWymDeE.transferFrom.call(addressSg7qe9, addressMPTamyF, uintqKcsTp, {from: accounts[1]});
//		const booldzafn7R = await NALWymDeE.approve.call(addressSNTfMJD, uints5QzuTg, {from: accounts[3]});

		await expect(NALWymDeE.transferFrom.call(addressG2E8xNP, addressbPWaSwX, uintlN8QFWk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringbz1E9W = "IMQsuexQqlogPDOW5xFCQWF1Fn9FmQYeA52BavFfHwhXwCwC0xHT8l"
		const stringqDR3TrW = "nNveQt5niTzFPuQz2ozzyWtmoIItefDwtckboQo0TRWYs9GwRdUXmYtARDyeBNlg"
		const uintcAVqKYD = BigInt("154")
		const NALZXSSfAP = await NAL.new(stringbz1E9W, stringqDR3TrW, uintcAVqKYD, {from: accounts[0]});
		const addressZhDTNB0 = accounts[4]
		const uintNYLgyQI = BigInt("30")
		const address94fo9b = accounts[5]
		const uintqCU56xk = BigInt("1110")
		const addressujLg2w7 = accounts[4]
		const booloHbPiSB = await NALZXSSfAP.freezeAccount.call(addressZhDTNB0, {from: accounts[0]});
		const boolrpjprI5 = await NALZXSSfAP.transfer.call(address94fo9b, uintNYLgyQI, {from: accounts[1]});
		const stringliCD9yI = await NALZXSSfAP.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolGKNUqO3 = await NALZXSSfAP.transfer.call(addressujLg2w7, uintqCU56xk, {from: "0x0000000000000000000000000000000000000001"});
		const stringaaJ7BUV = await NALZXSSfAP.name.call({from: accounts[0]});
		const stringkTMByHe = await NALZXSSfAP.name.call({from: accounts[3]});
	});

	it('test for NAL', async () => {
		const NALkNtpog2 = await NAL.new({from: accounts[4]});
		const addressr26hC7J = accounts[1]
		const uintirP2Qm3 = BigInt("1119")
		const addressigpssYS = accounts[5]
		const addresso0IXBq3 = accounts[0]
		const addressGxFyB4 = await NALkNtpog2.addAdmin.call(addressr26hC7J, {from: accounts[4]});
		const boolaIg1CJZ = await NALkNtpog2.approve.call(addressigpssYS, uintirP2Qm3, {from: accounts[4]});
//		await NALkNtpog2.onlyAdmin.call({from: accounts[0]});
//		const bool7gTRk0 = await NALkNtpog2.isAdmin.call(addresso0IXBq3, {from: accounts[1]});
//		await NALkNtpog2.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolaIg1CJZ, true)
		await expect(NALkNtpog2.onlyAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL05dG48 = await NAL.new({from: accounts[0]});
		const uintfKiQGM1 = BigInt("1713")
		const uintbDby7Yf = BigInt("1803")
		const addresskytWbWB = accounts[0]
		const uintG0nlyqk = BigInt("1764")
		const uintsT0Xe7o = BigInt("301")
		const addresstZYtYfs = accounts[0]
		const uintNa5XQI = BigInt("377")
		const addressUkDdeEM = accounts[3]
		const addressTBl0BQ = accounts[1]
		const addressUI44HMe = accounts[4]
		const uintIsW5vUO = BigInt("314")
		const addressmAALWGK = accounts[3]
//		const boold1AtDRH = await NAL05dG48.transferWithLock.call(addresskytWbWB, uintbDby7Yf, uintfKiQGM1, {from: accounts[4]});
//		const boolYMQ7EIo = await NAL05dG48.lock.call(addresstZYtYfs, uintsT0Xe7o, uintG0nlyqk, {from: accounts[2]});
//		const boolbHNgPfy = await NAL05dG48.transfer.call(addressUkDdeEM, uintNa5XQI, {from: accounts[1]});
//		await NAL05dG48.whenPaused.call({from: accounts[4]});
//		const uint256nIKpHY = await NAL05dG48.allowance.call(addressUI44HMe, addressTBl0BQ, {from: accounts[1]});
//		const boolxfBMIRa = await NAL05dG48.increaseAllowance.call(addressmAALWGK, uintIsW5vUO, {from: accounts[4]});

		await expect(NAL05dG48.transferWithLock.call(addresskytWbWB, uintbDby7Yf, uintfKiQGM1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlozRHTg = await NAL.new({from: accounts[5]});
		const uintPDRbPP = BigInt("659")
		const addressMQILxV2 = accounts[3]
		const addressnmzyQgU = accounts[1]
		const addresssbJJJAv = accounts[4]
		const boolef4hhgz = await NALlozRHTg.increaseAllowance.call(addressMQILxV2, uintPDRbPP, {from: "0x0000000000000000000000000000000000000001"});
//		const addressOMurDV1 = await NALlozRHTg.notFrozen.call(addressnmzyQgU, {from: accounts[5]});
//		await NALlozRHTg.whenNotPaused.call({from: accounts[4]});
//		const stringVR8153T = await NALlozRHTg.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolv5bNvMT = await NALlozRHTg.freezeAccount.call(addresssbJJJAv, {from: accounts[5]});

		assert.equal(boolef4hhgz, true)
		await expect(NALlozRHTg.notFrozen.call(addressnmzyQgU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtuSiT0I = await NAL.new({from: accounts[0]});
		const addressJWcLdO4 = accounts[0]
		const uintNqtJ8ZZ = BigInt("1965")
		const addresszZtP6BG = accounts[2]
		const addressAPzfgNL = accounts[4]
		const uintj6Hat8 = BigInt("1022")
		const uintX8vKp0s = BigInt("445")
		const addresslSyqD1d = accounts[3]
		const uintM74oyef = BigInt("2043")
		const addressNfxd41i = accounts[3]
//		const boolIpDnq6 = await NALtuSiT0I.unfreezeAccount.call(addressJWcLdO4, {from: accounts[0]});
//		const boolIWODcaS = await NALtuSiT0I.transferFrom.call(addressAPzfgNL, addresszZtP6BG, uintNqtJ8ZZ, {from: accounts[2]});
//		await NALtuSiT0I.whenNotPaused.call({from: accounts[4]});
//		const booldJB4KGP = await NALtuSiT0I.lock.call(addresslSyqD1d, uintX8vKp0s, uintj6Hat8, {from: accounts[2]});
//		const boolsnYR8vg = await NALtuSiT0I.approve.call(addressNfxd41i, uintM74oyef, {from: accounts[3]});

		await expect(NALtuSiT0I.unfreezeAccount.call(addressJWcLdO4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkNtpog2 = await NAL.new({from: accounts[4]});
		const addressE8Ka7hX = accounts[1]
		const uintnJVR4GU = BigInt("1140")
		const addressPk9jtoO = accounts[5]
		const uintugFiWmg = BigInt("2001")
		const addressgkvmZdg = accounts[0]
		const addressEndQtqu = accounts[0]
		const addressGxFyB4 = await NALkNtpog2.addAdmin.call(addressE8Ka7hX, {from: accounts[4]});
		const boolaIg1CJZ = await NALkNtpog2.approve.call(addressPk9jtoO, uintnJVR4GU, {from: accounts[4]});
//		const boolziASchN = await NALkNtpog2.decreaseAllowance.call(addressgkvmZdg, uintugFiWmg, {from: "0x0000000000000000000000000000000000000001"});
//		await NALkNtpog2.onlyAdmin.call({from: accounts[0]});
//		const bool7gTRk0 = await NALkNtpog2.isAdmin.call(addressEndQtqu, {from: accounts[1]});
//		await NALkNtpog2.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolaIg1CJZ, true)
		await expect(NALkNtpog2.decreaseAllowance.call(addressgkvmZdg, uintugFiWmg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWymDeE = await NAL.new({from: accounts[4]});
		const uintgCkest = BigInt("10")
		const addressmK9dWQ = accounts[0]
		const uintA2amXm = BigInt("1892")
		const addressK2xV9qX = accounts[2]
		const addresso0eBKuT = accounts[5]
		const addressTxJVcPT = accounts[4]
		const uintmz5Y0h = BigInt("1810")
		const addresswNaJDjp = accounts[3]
//		const boolpLGFKUa = await NALWymDeE.transfer.call(addressmK9dWQ, uintgCkest, {from: accounts[5]});
//		const boolyqygnln = await NALWymDeE.transferFrom.call(addresso0eBKuT, addressK2xV9qX, uintA2amXm, {from: accounts[1]});
//		const addresssrqP29q = await NALWymDeE.transferOwnership.call(addressTxJVcPT, {from: accounts[0]});
//		const booldzafn7R = await NALWymDeE.approve.call(addresswNaJDjp, uintmz5Y0h, {from: accounts[3]});

		await expect(NALWymDeE.transfer.call(addressmK9dWQ, uintgCkest, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtuSiT0I = await NAL.new({from: accounts[0]});
		const addressKQb1i49 = accounts[0]
		const uintH1fAYcd = BigInt("1022")
		const uintgqPguCU = BigInt("2027")
		const addresseweQCFa = accounts[3]
		const uintSoHifMQ = BigInt("2043")
		const addressfQWO590 = accounts[3]
		const addressuPqLwu = accounts[3]
		const uint256DDKSlsw = await NALtuSiT0I.totalSupply.call({from: accounts[0]});
//		const boolIpDnq6 = await NALtuSiT0I.unfreezeAccount.call(addressKQb1i49, {from: accounts[0]});
//		await NALtuSiT0I.whenNotPaused.call({from: accounts[4]});
//		const booldJB4KGP = await NALtuSiT0I.lock.call(addresseweQCFa, uintgqPguCU, uintH1fAYcd, {from: accounts[2]});
//		const boolsnYR8vg = await NALtuSiT0I.approve.call(addressfQWO590, uintSoHifMQ, {from: accounts[3]});
//		const boolaxYMQmi = await NALtuSiT0I.unfreezeAccount.call(addressuPqLwu, {from: accounts[5]});
//		await NALtuSiT0I.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256DDKSlsw, BigInt("2000000000000000000000000000"))
		await expect(NALtuSiT0I.unfreezeAccount.call(addressKQb1i49, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWymDeE = await NAL.new({from: accounts[4]});
		const addresstzBc98J = accounts[2]
		const addressQwYV62 = accounts[0]
		const uintR3HKSw0 = BigInt("904")
		const addressUFMOO0 = accounts[1]
		const addressZniSxX3 = accounts[1]
		const uintfoVZVO = BigInt("1877")
		const addresspz7iIdD = accounts[2]
		const addressbFtLYDm = accounts[4]
		const booloeiIly0 = await NALWymDeE.freezeAccount.call(addresstzBc98J, {from: accounts[4]});
//		const boolCCDBvUU = await NALWymDeE.freezeAccount.call(addressQwYV62, {from: accounts[3]});
//		const boolna5xAcE = await NALWymDeE.transferFrom.call(addressZniSxX3, addressUFMOO0, uintR3HKSw0, {from: accounts[0]});
//		const boolyqygnln = await NALWymDeE.transferFrom.call(addressbFtLYDm, addresspz7iIdD, uintfoVZVO, {from: accounts[1]});

		assert.equal(booloeiIly0, true)
		await expect(NALWymDeE.freezeAccount.call(addressQwYV62, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtuSiT0I = await NAL.new({from: accounts[0]});
		const uintXnX2iWV = BigInt("540")
		const uintYE887HB = BigInt("563")
		const addressQ76ygr = accounts[3]
		const addressWJkCd7A = accounts[0]
		const uintViT87o = BigInt("1022")
		const uintoCv0GIl = BigInt("464")
		const addressc8IVAqi = accounts[3]
		const bool1PgQi5 = await NALtuSiT0I.transferWithLock.call(addressQ76ygr, uintYE887HB, uintXnX2iWV, {from: accounts[0]});
		const stringnGeHORZ = await NALtuSiT0I.name.call({from: accounts[3]});
//		await NALtuSiT0I.pause.call({from: accounts[3]});
//		const boolIpDnq6 = await NALtuSiT0I.unfreezeAccount.call(addressWJkCd7A, {from: accounts[0]});
//		const booldJB4KGP = await NALtuSiT0I.lock.call(addressc8IVAqi, uintoCv0GIl, uintViT87o, {from: accounts[2]});

		assert.equal(bool1PgQi5, true)
		assert.equal(stringnGeHORZ, "Personal Token")
		await expect(NALtuSiT0I.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALrniIe8f = await NAL.new({from: accounts[3]});
		const addressRLdlAmr = accounts[3]
		const addressDtEtcnL = accounts[1]
		const addressYVfHKT = accounts[2]
		const uintKuYELV = BigInt("1162")
		const addressSMGwYeJ = accounts[2]
		const uintWGyywoU = BigInt("319")
		const addresshXQQAg2 = accounts[5]
		const stringTPkq4e = await NALrniIe8f.symbol.call({from: accounts[2]});
//		const addresstgFqNw9 = await NALrniIe8f.addAdmin.call(addressRLdlAmr, {from: accounts[1]});
//		const uint256OpYf6Ie = await NALrniIe8f.allowance.call(addressYVfHKT, addressDtEtcnL, {from: accounts[4]});
//		const uint2563JMzWF = await NALrniIe8f.burn.call(uintKuYELV, {from: accounts[4]});
//		const uint256oObIxJ = await NALrniIe8f.balanceOf.call(addressSMGwYeJ, {from: accounts[4]});
//		const boolTC97ED8 = await NALrniIe8f.transfer.call(addresshXQQAg2, uintWGyywoU, {from: accounts[2]});

		assert.equal(stringTPkq4e, "NAL")
		await expect(NALrniIe8f.addAdmin.call(addressRLdlAmr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALs3M88Tm = await NAL.new({from: accounts[4]});
		const uintbbKyIxN = BigInt("1492")
		const addressEuTdeK = accounts[3]
		const uintM6IBMvA = BigInt("985")
		const uintwdenhy = BigInt("672")
		const addressxAJ2NQy = accounts[2]
//		await NALs3M88Tm.renounceAdmin.call({from: accounts[5]});
//		const boolfnx8eLI = await NALs3M88Tm.transfer.call(addressEuTdeK, uintbbKyIxN, {from: accounts[1]});
//		const stringrS9G5yq = await NALs3M88Tm.name.call({from: accounts[2]});
//		await NALs3M88Tm.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolx3ongO = await NALs3M88Tm.lock.call(addressxAJ2NQy, uintwdenhy, uintM6IBMvA, {from: accounts[1]});

		await expect(NALs3M88Tm.renounceAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWymDeE = await NAL.new({from: accounts[4]});
		const addressYqWlcvD = "0x0000000000000000000000000000000000000001"
		const uintr3uxPn1 = BigInt("64")
		const addressAWzxRVR = accounts[1]
		const uintbrU4gqo = BigInt("904")
		const addressAsKD9qS = accounts[1]
		const addressEgYMMU8 = accounts[1]
		const addressspqp5z = await NALWymDeE.upgradeTo.call(addressYqWlcvD, {from: accounts[4]});
//		const boolZHQfWi = await NALWymDeE.unlock.call(addressAWzxRVR, uintr3uxPn1, {from: accounts[0]});
//		const boolna5xAcE = await NALWymDeE.transferFrom.call(addressEgYMMU8, addressAsKD9qS, uintbrU4gqo, {from: accounts[0]});

		await expect(NALWymDeE.unlock.call(addressAWzxRVR, uintr3uxPn1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtuSiT0I = await NAL.new({from: accounts[0]});
		const addressXh18hR5 = accounts[1]
		const uintG9fJxdB = BigInt("1022")
		const uintBjWSXWk = BigInt("420")
		const addressg1uTgCo = accounts[3]
		const uint256sfvDdf2 = await NALtuSiT0I.balanceOf.call(addressXh18hR5, {from: accounts[0]});
//		const booldJB4KGP = await NALtuSiT0I.lock.call(addressg1uTgCo, uintBjWSXWk, uintG9fJxdB, {from: accounts[2]});

		assert.equal(uint256sfvDdf2, BigInt("0"))
		await expect(NALtuSiT0I.lock.call(addressg1uTgCo, uintBjWSXWk, uintG9fJxdB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWymDeE = await NAL.new({from: accounts[4]});
		const uintWPWl0SY = BigInt("1810")
		const addressn58Socn = accounts[3]
		const uintvQ5eVjD = BigInt("1692")
		const booldzafn7R = await NALWymDeE.approve.call(addressn58Socn, uintWPWl0SY, {from: accounts[3]});
//		const uint256MCvKahc = await NALWymDeE.burn.call(uintvQ5eVjD, {from: accounts[1]});

		assert.equal(booldzafn7R, true)
		await expect(NALWymDeE.burn.call(uintvQ5eVjD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtuSiT0I = await NAL.new({from: accounts[0]});
		const addressxTZLmSA = accounts[0]
		const addressx6SnZze = accounts[3]
		const uintpCvAGcC = BigInt("1022")
		const uintwiVXHUU = BigInt("459")
		const addressBZ9xdZ0 = accounts[3]
		const uint256SzAnMTV = await NALtuSiT0I.allowance.call(addressx6SnZze, addressxTZLmSA, {from: accounts[2]});
//		const booldJB4KGP = await NALtuSiT0I.lock.call(addressBZ9xdZ0, uintwiVXHUU, uintpCvAGcC, {from: accounts[2]});

		assert.equal(uint256SzAnMTV, BigInt("0"))
		await expect(NALtuSiT0I.lock.call(addressBZ9xdZ0, uintwiVXHUU, uintpCvAGcC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtuSiT0I = await NAL.new({from: accounts[0]});
		const addressKCiJFqM = accounts[1]
		const uintrQT6jqN = BigInt("512")
		const addresskp8OQzw = accounts[2]
		const addressZGlhsBS = "0x0000000000000000000000000000000000000001"
		const uintfv3SOrK = BigInt("1048")
		const uinti61WIKs = BigInt("420")
		const addressdXqr0m2 = accounts[3]
		const uint256sfvDdf2 = await NALtuSiT0I.balanceOf.call(addressKCiJFqM, {from: accounts[0]});
//		const addressc7hcN6 = await NALtuSiT0I.burnFrom.call(addresskp8OQzw, uintrQT6jqN, {from: accounts[3]});
//		const uint256t1fZkot = await NALtuSiT0I.balanceOf.call(addressZGlhsBS, {from: accounts[1]});
//		const booldJB4KGP = await NALtuSiT0I.lock.call(addressdXqr0m2, uinti61WIKs, uintfv3SOrK, {from: accounts[2]});

		assert.equal(uint256sfvDdf2, BigInt("0"))
		await expect(NALtuSiT0I.burnFrom.call(addresskp8OQzw, uintrQT6jqN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWymDeE = await NAL.new({from: accounts[4]});
		const uintVD8EQN7 = BigInt("1831")
		const addressqCfaos0 = accounts[5]
		const uintxnbrXNs = BigInt("10")
		const addressXQGPkW9 = accounts[1]
		const uintSFPYWkX = BigInt("1810")
		const addressT4EQ2oP = accounts[3]
//		await NALWymDeE.pause.call({from: accounts[4]});
//		const boolVa8fB54 = await NALWymDeE.transfer.call(addressqCfaos0, uintVD8EQN7, {from: "0x0000000000000000000000000000000000000001"});
//		const boolpLGFKUa = await NALWymDeE.transfer.call(addressXQGPkW9, uintxnbrXNs, {from: accounts[5]});
//		const booldzafn7R = await NALWymDeE.approve.call(addressT4EQ2oP, uintSFPYWkX, {from: accounts[3]});

		await expect(NALWymDeE.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWymDeE = await NAL.new({from: accounts[4]});
		const addressUGJp24J = accounts[2]
		const uintCoy9eA = BigInt("193")
		const addressYUx2Jo1 = accounts[0]
		const addressvQLcFf5 = accounts[1]
		const boolyENyirb = await NALWymDeE.isAdmin.call(addressUGJp24J, {from: accounts[5]});
		const boollX6Z230 = await NALWymDeE.paused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolna5xAcE = await NALWymDeE.transferFrom.call(addressvQLcFf5, addressYUx2Jo1, uintCoy9eA, {from: accounts[0]});
//		const uint8lnoZ5fD = await NALWymDeE.decimals.call({from: accounts[5]});

		assert.equal(boollX6Z230, false)
		assert.equal(boolyENyirb, false)
		await expect(NALWymDeE.transferFrom.call(addressvQLcFf5, addressYUx2Jo1, uintCoy9eA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtuSiT0I = await NAL.new({from: accounts[0]});
		const addressdEh5It = accounts[2]
		const addressSeAroY4 = accounts[2]
		const addresswk7XcY3 = accounts[1]
		const uintgt3kS3j = BigInt("1022")
		const uintuHHrTQU = BigInt("420")
		const addressolVudnO = accounts[3]
		const uintr54Tn5X = BigInt("221")
		const uinteSiYN9 = BigInt("47")
		const addressQMLy7p0 = accounts[1]
		const uintithyD1U = BigInt("1934")
		const addressBznSpL = accounts[1]
		const uint256SD2v2ou = await NALtuSiT0I.totalSupply.call({from: accounts[4]});
		const booljsKjhN4 = await NALtuSiT0I.isOwner.call(addressdEh5It, {from: accounts[1]});
		const address2NbMzG = await NALtuSiT0I.transferOwnership.call(addressSeAroY4, {from: accounts[0]});
		const uint256sfvDdf2 = await NALtuSiT0I.balanceOf.call(addresswk7XcY3, {from: accounts[0]});
//		const booldJB4KGP = await NALtuSiT0I.lock.call(addressolVudnO, uintuHHrTQU, uintgt3kS3j, {from: accounts[2]});
//		const boolU5x3YGm = await NALtuSiT0I.transferWithLock.call(addressQMLy7p0, uinteSiYN9, uintr54Tn5X, {from: accounts[0]});
//		const addressoisuim3 = await NALtuSiT0I.burnFrom.call(addressBznSpL, uintithyD1U, {from: accounts[1]});
//		await NALtuSiT0I.onlyAdmin.call({from: accounts[3]});

		assert.equal(booljsKjhN4, false)
		assert.equal(uint256SD2v2ou, BigInt("2000000000000000000000000000"))
		assert.equal(uint256sfvDdf2, BigInt("0"))
		await expect(NALtuSiT0I.lock.call(addressolVudnO, uintuHHrTQU, uintgt3kS3j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtuSiT0I = await NAL.new({from: accounts[0]});
		const addressNyhZ6vJ = accounts[4]
		const addressHMfmeUS = accounts[2]
		const address1k9dCR = accounts[1]
//		const addressrU9GqqB = await NALtuSiT0I.removeAdmin.call(addressNyhZ6vJ, {from: accounts[0]});
//		const uint256sfvDdf2 = await NALtuSiT0I.balanceOf.call(addressHMfmeUS, {from: accounts[0]});
//		const boolBhzidIo = await NALtuSiT0I.isAdmin.call(address1k9dCR, {from: accounts[0]});

		await expect(NALtuSiT0I.removeAdmin.call(addressNyhZ6vJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWymDeE = await NAL.new({from: accounts[4]});
		const addressrb1GqcW = accounts[0]
		const uintYYzOryi = BigInt("923")
		const addressD34PRGf = accounts[0]
		const address9ISHYP = accounts[1]
		const uint8IzeMUr = await NALWymDeE.decimals.call({from: accounts[1]});
		const uint256gTvu9Bw = await NALWymDeE.balanceOf.call(addressrb1GqcW, {from: accounts[0]});
//		const boolna5xAcE = await NALWymDeE.transferFrom.call(address9ISHYP, addressD34PRGf, uintYYzOryi, {from: accounts[0]});

		assert.equal(uint256gTvu9Bw, BigInt("0"))
		assert.equal(uint8IzeMUr, BigInt("18"))
		await expect(NALWymDeE.transferFrom.call(address9ISHYP, addressD34PRGf, uintYYzOryi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALvXqhTCD = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintR7qw05k = BigInt("871")
		const addressMQ6HWA = accounts[3]
		const addresscYMEZy = accounts[0]
		const addressAteJwnn = accounts[1]
		const boolk907Axe = await NALvXqhTCD.transferFrom.call(addresscYMEZy, addressMQ6HWA, uintR7qw05k, {from: accounts[2]});
		const boolN3zdVUd = await NALvXqhTCD.isOwner.call(addressAteJwnn, {from: accounts[4]});
		const uint8ppxgvhz = await NALvXqhTCD.decimals.call({from: accounts[3]});
	});

	it('test for NAL', async () => {
		const NALrpvt5j3 = await NAL.new({from: accounts[2]});
		const addressF0jjJN7 = accounts[2]
		const uint8md0wd8J = await NALrpvt5j3.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolx8mF6cS = await NALrpvt5j3.isOwner.call(addressF0jjJN7, {from: accounts[3]});

		assert.equal(boolx8mF6cS, true)
		assert.equal(uint8md0wd8J, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALCv947TF = await NAL.new({from: accounts[1]});
		const uintx0NfPH = BigInt("1332")
		const uintShG9dCv = BigInt("2027")
		const addressHxnSQEm = "0x0000000000000000000000000000000000000001"
		const uintAzivADC = BigInt("1813")
		const addressBJpR9H = accounts[5]
//		const boolycZ9ACK = await NALCv947TF.lock.call(addressHxnSQEm, uintShG9dCv, uintx0NfPH, {from: accounts[1]});
//		const boollG8klGD = await NALCv947TF.increaseAllowance.call(addressBJpR9H, uintAzivADC, {from: accounts[1]});

		await expect(NALCv947TF.lock.call(addressHxnSQEm, uintShG9dCv, uintx0NfPH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALF6fw3yX = await NAL.new({from: accounts[0]});
		const uintAuBQxsL = BigInt("1455")
		const addresssiOhF77 = accounts[1]
//		const boolCYPy8Mn = await NALF6fw3yX.unlock.call(addresssiOhF77, uintAuBQxsL, {from: accounts[0]});
//		const uint8EuwzPUX = await NALF6fw3yX.decimals.call({from: accounts[2]});

		await expect(NALF6fw3yX.unlock.call(addresssiOhF77, uintAuBQxsL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCv947TF = await NAL.new({from: accounts[1]});
		const uintjCHwqeX = BigInt("1332")
		const uintlSL1Si = BigInt("2052")
		const addressCOD5Iy4 = "0x0000000000000000000000000000000000000001"
//		await NALCv947TF.renounceAdmin.call({from: accounts[1]});
//		const boolycZ9ACK = await NALCv947TF.lock.call(addressCOD5Iy4, uintlSL1Si, uintjCHwqeX, {from: accounts[1]});

		await expect(NALCv947TF.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})