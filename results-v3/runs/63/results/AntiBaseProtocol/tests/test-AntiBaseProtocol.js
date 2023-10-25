const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolA7Z5w2n = await AntiBaseProtocol.new({from: accounts[0]});
		const uintI81bCc = BigInt("105")
		const addressygZOQt = accounts[3]
		const uintuvm5ywx = BigInt("1947")
		const addresssJssCqm = accounts[2]
		const addressbbrGMet = await AntiBaseProtocolA7Z5w2n.burnFrom.call(addressygZOQt, uintI81bCc, {from: accounts[3]});
		const stringm41Lfk = await AntiBaseProtocolA7Z5w2n.symbol.call({from: accounts[3]});
		const boolM4DxGz6 = await AntiBaseProtocolA7Z5w2n.approve.call(addresssJssCqm, uintuvm5ywx, {from: accounts[3]});

		await expect(AntiBaseProtocolA7Z5w2n.burnFrom.call(addressygZOQt, uintI81bCc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const string1iGVvn = "4HSvJmyQ8bBjrxBARL28cwdxzQGmzXyECFCPqUIPDlJecGSiGMwBpnhWPCBlKLhIVnhqsGKq5nfTg1oW3K"
		const stringZb66XMz = "zXvnr2o7976jvxonjc2UQQtwReReClZRryfSyx1Cjrb8M"
		const uintlHYPtng = BigInt("241")
		const AntiBaseProtocolS5lIp4V = await AntiBaseProtocol.new(string1iGVvn, stringZb66XMz, uintlHYPtng, {from: accounts[0]});
		const addressGoqyaGX = accounts[4]
		const uintzHo9Xc4 = BigInt("1037")
		const addresseHXKSTe = accounts[2]
		const uint83Laig = BigInt("1227")
		const addresspT8PeNw = accounts[2]
		const stringELtjdOE = await AntiBaseProtocolS5lIp4V.symbol.call({from: accounts[2]});
		const uint256KMf6hcf = await AntiBaseProtocolS5lIp4V.balanceOf.call(addressGoqyaGX, {from: accounts[2]});
		const addresssHfFpNv = await AntiBaseProtocolS5lIp4V._mint.call(addresseHXKSTe, uintzHo9Xc4, {from: accounts[3]});
		const boolaQvSFWA = await AntiBaseProtocolS5lIp4V.transfer.call(addresspT8PeNw, uint83Laig, {from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolQEq1OQr = await AntiBaseProtocol.new({from: accounts[2]});
		const uintsadGc4 = BigInt("878")
		const addressYN5Oatl = accounts[1]
		const uintNRJTUYC = BigInt("23")
		const addressX28z04l = accounts[2]
		const boolijuhMX = await AntiBaseProtocolQEq1OQr.isOwner.call({from: accounts[0]});
		const boolNAJoZwf = await AntiBaseProtocolQEq1OQr.transfer.call(addressYN5Oatl, uintsadGc4, {from: accounts[2]});
		const addressuYm6azg = await AntiBaseProtocolQEq1OQr._burn.call(addressX28z04l, uintNRJTUYC, {from: accounts[2]});

		assert.equal(boolNAJoZwf, true)
		assert.equal(boolijuhMX, false)
		await expect(AntiBaseProtocolQEq1OQr._burn.call(addressX28z04l, uintNRJTUYC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZdJ3CkW = await AntiBaseProtocol.new({from: accounts[3]});
		const addressMT6ZSir = accounts[4]
		const uintauLYeQs = BigInt("824")
		const uintBPKW0N5 = BigInt("1965")
		const addressQfMH8FY = accounts[1]
		const addressEzugxpF = accounts[3]
		const uint256Snh5VPb = await AntiBaseProtocolZdJ3CkW.balanceOf.call(addressMT6ZSir, {from: accounts[5]});
		const uint256SJAiiAx = await AntiBaseProtocolZdJ3CkW.burn.call(uintauLYeQs, {from: accounts[0]});
		const addressHRUbPuU = await AntiBaseProtocolZdJ3CkW._approve.call(addressEzugxpF, addressQfMH8FY, uintBPKW0N5, {from: accounts[4]});

		assert.equal(uint256Snh5VPb, BigInt("0"))
		await expect(AntiBaseProtocolZdJ3CkW.burn.call(uintauLYeQs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolaHuxdWx = await AntiBaseProtocol.new({from: accounts[4]});
		const uintwb9TO80 = BigInt("1229")
		const uintqyFVvy3 = BigInt("1383")
		const uint256Cn8FIMY = await AntiBaseProtocolaHuxdWx.findBurnFee.call(uintwb9TO80, {from: accounts[2]});
		await AntiBaseProtocolaHuxdWx.renounceOwnership.call({from: accounts[3]});
		const uint2565mi2BY = await AntiBaseProtocolaHuxdWx.burn.call(uintqyFVvy3, {from: accounts[1]});

		assert.equal(uint256Cn8FIMY, BigInt("195"))
		await expect(AntiBaseProtocolaHuxdWx.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolaHuxdWx = await AntiBaseProtocol.new({from: accounts[4]});
		const uintXlrNmwF = BigInt("960")
		const addressc43OhbF = accounts[0]
		const uintH2b4xVX = BigInt("1229")
		const uintZOuQuU = BigInt("1383")
		const boolJ3SeF9 = await AntiBaseProtocolaHuxdWx.decreaseAllowance.call(addressc43OhbF, uintXlrNmwF, {from: accounts[0]});
		await AntiBaseProtocolaHuxdWx.renounceOwnership.call({from: accounts[4]});
		const addressfHgfpMz = await AntiBaseProtocolaHuxdWx.owner.call({from: accounts[2]});
		const uint256Cn8FIMY = await AntiBaseProtocolaHuxdWx.findBurnFee.call(uintH2b4xVX, {from: accounts[2]});
		await AntiBaseProtocolaHuxdWx.renounceOwnership.call({from: accounts[3]});
		const uint2565mi2BY = await AntiBaseProtocolaHuxdWx.burn.call(uintZOuQuU, {from: accounts[1]});

		await expect(AntiBaseProtocolaHuxdWx.decreaseAllowance.call(addressc43OhbF, uintXlrNmwF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolQEq1OQr = await AntiBaseProtocol.new({from: accounts[2]});
		const uintpiUo50x = BigInt("878")
		const addresssbIgGi = accounts[1]
		const uintvpFOWcu = BigInt("23")
		const addressBUlALzH = accounts[2]
		const addressrZTkMFo = accounts[4]
		const boolijuhMX = await AntiBaseProtocolQEq1OQr.isOwner.call({from: accounts[0]});
		const uint256UMbWDWd = await AntiBaseProtocolQEq1OQr.totalSupply.call({from: accounts[0]});
		const boolNAJoZwf = await AntiBaseProtocolQEq1OQr.transfer.call(addresssbIgGi, uintpiUo50x, {from: accounts[2]});
		const addressuYm6azg = await AntiBaseProtocolQEq1OQr._burn.call(addressBUlALzH, uintvpFOWcu, {from: accounts[2]});
		const addressHPVjnpV = await AntiBaseProtocolQEq1OQr._transferOwnership.call(addressrZTkMFo, {from: accounts[0]});

		assert.equal(boolNAJoZwf, true)
		assert.equal(boolijuhMX, false)
		assert.equal(uint256UMbWDWd, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolQEq1OQr._burn.call(addressBUlALzH, uintvpFOWcu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolQEq1OQr = await AntiBaseProtocol.new({from: accounts[2]});
		const addressWBElL4I = accounts[5]
		const uintwWpfWr5 = BigInt("878")
		const addressdCceqG0 = accounts[1]
		const uintQY9amAb = BigInt("23")
		const addressMnCdngv = accounts[2]
		const addressXr2Mlm9 = accounts[4]
		const boolijuhMX = await AntiBaseProtocolQEq1OQr.isOwner.call({from: accounts[0]});
		const uint256UMbWDWd = await AntiBaseProtocolQEq1OQr.totalSupply.call({from: accounts[0]});
		const uint256kta1ZIO = await AntiBaseProtocolQEq1OQr.balanceOf.call(addressWBElL4I, {from: accounts[0]});
		const boolNAJoZwf = await AntiBaseProtocolQEq1OQr.transfer.call(addressdCceqG0, uintwWpfWr5, {from: accounts[2]});
		await AntiBaseProtocolQEq1OQr.renounceOwnership.call({from: accounts[2]});
		const addressuYm6azg = await AntiBaseProtocolQEq1OQr._burn.call(addressMnCdngv, uintQY9amAb, {from: accounts[2]});
		const addressHPVjnpV = await AntiBaseProtocolQEq1OQr._transferOwnership.call(addressXr2Mlm9, {from: accounts[0]});

		assert.equal(boolNAJoZwf, true)
		assert.equal(boolijuhMX, false)
		assert.equal(uint256UMbWDWd, BigInt("31250000000000000000"))
		assert.equal(uint256kta1ZIO, BigInt("0"))
		await expect(AntiBaseProtocolQEq1OQr.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolQEq1OQr = await AntiBaseProtocol.new({from: accounts[2]});
		const uintp7F6mKR = BigInt("1177")
		const addressYE3bR78 = accounts[0]
		const uintRoatimY = BigInt("43")
		const addressGjB9MCg = accounts[3]
		const boolRJYV2j = await AntiBaseProtocolQEq1OQr.increaseAllowance.call(addressYE3bR78, uintp7F6mKR, {from: accounts[5]});
		const boolijuhMX = await AntiBaseProtocolQEq1OQr.isOwner.call({from: accounts[0]});
		const addressuYm6azg = await AntiBaseProtocolQEq1OQr._burn.call(addressGjB9MCg, uintRoatimY, {from: accounts[2]});

		assert.equal(boolRJYV2j, true)
		assert.equal(boolijuhMX, false)
		await expect(AntiBaseProtocolQEq1OQr._burn.call(addressGjB9MCg, uintRoatimY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolaHuxdWx = await AntiBaseProtocol.new({from: accounts[4]});
		const uintNYYBZr5 = BigInt("707")
		const uintSEczTwo = BigInt("1368")
		const uint256Cn8FIMY = await AntiBaseProtocolaHuxdWx.findBurnFee.call(uintNYYBZr5, {from: accounts[2]});
		const stringNm3fUMI = await AntiBaseProtocolaHuxdWx.symbol.call({from: accounts[0]});
		await AntiBaseProtocolaHuxdWx.renounceOwnership.call({from: accounts[3]});
		const uint2565mi2BY = await AntiBaseProtocolaHuxdWx.burn.call(uintSEczTwo, {from: accounts[1]});
		await AntiBaseProtocolaHuxdWx.renounceOwnership.call({from: accounts[0]});

		assert.equal(stringNm3fUMI, "ABASE")
		assert.equal(uint256Cn8FIMY, BigInt("120"))
		await expect(AntiBaseProtocolaHuxdWx.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolaHuxdWx = await AntiBaseProtocol.new({from: accounts[4]});
		const uintinWebq = BigInt("707")
		const uintfSHD1j5 = BigInt("188")
		const addresscSFpqHd = accounts[1]
		const uintV6H0Ye = BigInt("1368")
		const uint256Cn8FIMY = await AntiBaseProtocolaHuxdWx.findBurnFee.call(uintinWebq, {from: accounts[2]});
		const uint8PY8KVV = await AntiBaseProtocolaHuxdWx.decimals.call({from: accounts[2]});
		const addresskKrCe69 = await AntiBaseProtocolaHuxdWx.burnFrom.call(addresscSFpqHd, uintfSHD1j5, {from: accounts[5]});
		const stringNm3fUMI = await AntiBaseProtocolaHuxdWx.symbol.call({from: accounts[0]});
		await AntiBaseProtocolaHuxdWx.renounceOwnership.call({from: accounts[3]});
		const uint2565mi2BY = await AntiBaseProtocolaHuxdWx.burn.call(uintV6H0Ye, {from: accounts[1]});
		await AntiBaseProtocolaHuxdWx.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256Cn8FIMY, BigInt("120"))
		assert.equal(uint8PY8KVV, BigInt("18"))
		await expect(AntiBaseProtocolaHuxdWx.burnFrom.call(addresscSFpqHd, uintfSHD1j5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolQEq1OQr = await AntiBaseProtocol.new({from: accounts[2]});
		const uintHygLmbp = BigInt("878")
		const addressZJVlvIv = accounts[1]
		const uintN0TrtD = BigInt("1532")
		const uinth500Bc1 = BigInt("23")
		const address9KwtDZ = accounts[2]
		const boolNAJoZwf = await AntiBaseProtocolQEq1OQr.transfer.call(addressZJVlvIv, uintHygLmbp, {from: accounts[2]});
		const stringyPjEmS = await AntiBaseProtocolQEq1OQr.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256SMxroFw = await AntiBaseProtocolQEq1OQr.burn.call(uintN0TrtD, {from: accounts[1]});
		const addressuYm6azg = await AntiBaseProtocolQEq1OQr._burn.call(address9KwtDZ, uinth500Bc1, {from: accounts[2]});

		assert.equal(boolNAJoZwf, true)
		assert.equal(stringyPjEmS, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolQEq1OQr.burn.call(uintN0TrtD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolQEq1OQr = await AntiBaseProtocol.new({from: accounts[2]});
		const uintiuxHjBa = BigInt("878")
		const addressOWt7aaB = accounts[1]
		const uintjXlEEYd = BigInt("23")
		const addressmOxqTTs = accounts[2]
		const boolNAJoZwf = await AntiBaseProtocolQEq1OQr.transfer.call(addressOWt7aaB, uintiuxHjBa, {from: accounts[2]});
		const addressk158FU7 = await AntiBaseProtocolQEq1OQr.owner.call({from: accounts[3]});
		const addressuYm6azg = await AntiBaseProtocolQEq1OQr._burn.call(addressmOxqTTs, uintjXlEEYd, {from: accounts[2]});

		assert.equal(addressk158FU7, 0x73F335Ce7c44af5430ac1BC4a040e8cDfaB4fC20)
		assert.equal(boolNAJoZwf, true)
		await expect(AntiBaseProtocolQEq1OQr._burn.call(addressmOxqTTs, uintjXlEEYd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolGYsh8DN = await AntiBaseProtocol.new({from: accounts[0]});
		const addresstjCGCrj = "0x0000000000000000000000000000000000000001"
		const uintKKuB9s = BigInt("793")
		const addressmZPiSBT = accounts[4]
		const uintAqkUajb = BigInt("27")
		const addresskqSDDyw = await AntiBaseProtocolGYsh8DN.transferOwnership.call(addresstjCGCrj, {from: accounts[0]});
		const addressN8wak4o = await AntiBaseProtocolGYsh8DN._burnFrom.call(addressmZPiSBT, uintKKuB9s, {from: accounts[0]});
		const uint256pkeoRlI = await AntiBaseProtocolGYsh8DN.burn.call(uintAqkUajb, {from: accounts[2]});

		await expect(AntiBaseProtocolGYsh8DN._burnFrom.call(addressmZPiSBT, uintKKuB9s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolaHuxdWx = await AntiBaseProtocol.new({from: accounts[4]});
		const uintgQRhdM = BigInt("751")
		const addresswRPbXvS = accounts[3]
		const addresslXXp1OH = accounts[4]
		const uintLmTEzO5 = BigInt("498")
		const uintcPfGAA = BigInt("1402")
		const boolmEmLmZD = await AntiBaseProtocolaHuxdWx.transferFrom.call(addresslXXp1OH, addresswRPbXvS, uintgQRhdM, {from: accounts[5]});
		const uint256gDhdjry = await AntiBaseProtocolaHuxdWx.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Cn8FIMY = await AntiBaseProtocolaHuxdWx.findBurnFee.call(uintLmTEzO5, {from: accounts[2]});
		await AntiBaseProtocolaHuxdWx.renounceOwnership.call({from: accounts[3]});
		const uint2565mi2BY = await AntiBaseProtocolaHuxdWx.burn.call(uintcPfGAA, {from: accounts[1]});
		const uint256Ih5LOu5 = await AntiBaseProtocolaHuxdWx.totalSupply.call({from: accounts[1]});
		const addressEQ2K03H = await AntiBaseProtocolaHuxdWx.owner.call({from: accounts[2]});
		await AntiBaseProtocolaHuxdWx.renounceOwnership.call({from: accounts[0]});

		await expect(AntiBaseProtocolaHuxdWx.transferFrom.call(addresslXXp1OH, addresswRPbXvS, uintgQRhdM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolQEq1OQr = await AntiBaseProtocol.new({from: accounts[2]});
		const uintquYmokg = BigInt("878")
		const addressRsCZk5Y = accounts[1]
		const uintGStaDhz = BigInt("941")
		const addressRM8AqZ4 = accounts[5]
		const uintrJ0jrw = BigInt("23")
		const addressnN3MhOu = accounts[3]
		const uint256yJnFeyG = await AntiBaseProtocolQEq1OQr.totalSupply.call({from: accounts[3]});
		const boolNAJoZwf = await AntiBaseProtocolQEq1OQr.transfer.call(addressRsCZk5Y, uintquYmokg, {from: accounts[2]});
		const boolcj2GGza = await AntiBaseProtocolQEq1OQr.approve.call(addressRM8AqZ4, uintGStaDhz, {from: accounts[2]});
		const addressuYm6azg = await AntiBaseProtocolQEq1OQr._burn.call(addressnN3MhOu, uintrJ0jrw, {from: accounts[2]});

		assert.equal(boolNAJoZwf, true)
		assert.equal(boolcj2GGza, true)
		assert.equal(uint256yJnFeyG, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolQEq1OQr._burn.call(addressnN3MhOu, uintrJ0jrw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolQEq1OQr = await AntiBaseProtocol.new({from: accounts[2]});
		const uintRAChOSc = BigInt("855")
		const addressLpuIIKu = accounts[1]
		const uintR2Wl2rI = BigInt("817")
		const addressBn5PqiT = accounts[1]
		const addressrzuw9hf = accounts[3]
		const uintaTwH1Vt = BigInt("23")
		const addressNfSUoMc = accounts[2]
		const boolNAJoZwf = await AntiBaseProtocolQEq1OQr.transfer.call(addressLpuIIKu, uintRAChOSc, {from: accounts[2]});
		const boolIzdsPBv = await AntiBaseProtocolQEq1OQr.transferFrom.call(addressrzuw9hf, addressBn5PqiT, uintR2Wl2rI, {from: accounts[0]});
		const addressuYm6azg = await AntiBaseProtocolQEq1OQr._burn.call(addressNfSUoMc, uintaTwH1Vt, {from: accounts[2]});

		assert.equal(boolNAJoZwf, true)
		await expect(AntiBaseProtocolQEq1OQr.transferFrom.call(addressrzuw9hf, addressBn5PqiT, uintR2Wl2rI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolQEq1OQr = await AntiBaseProtocol.new({from: accounts[2]});
		const addressCbNWlxQ = accounts[4]
		const addressRADDKOG = accounts[3]
		const uintCFyfRGe = BigInt("1002")
		const addressa8FwYx9 = accounts[3]
		const boolijuhMX = await AntiBaseProtocolQEq1OQr.isOwner.call({from: accounts[0]});
		const uint256HtaIDUP = await AntiBaseProtocolQEq1OQr.allowance.call(addressRADDKOG, addressCbNWlxQ, {from: accounts[3]});
		const addressWmPhA4I = await AntiBaseProtocolQEq1OQr.burnFrom.call(addressa8FwYx9, uintCFyfRGe, {from: accounts[3]});

		assert.equal(boolijuhMX, false)
		assert.equal(uint256HtaIDUP, BigInt("0"))
		await expect(AntiBaseProtocolQEq1OQr.burnFrom.call(addressa8FwYx9, uintCFyfRGe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolQEq1OQr = await AntiBaseProtocol.new({from: accounts[2]});
		const uintaHZhGv = BigInt("854")
		const addressopc86M5 = accounts[1]
		const uintdQ8R8W = BigInt("1065")
		const addressb9jhFAr = accounts[2]
		const uintEjiRN3L = BigInt("677")
		const addressdqqltKy = accounts[1]
		const boolNAJoZwf = await AntiBaseProtocolQEq1OQr.transfer.call(addressopc86M5, uintaHZhGv, {from: accounts[2]});
		const addresszg37Aif = await AntiBaseProtocolQEq1OQr.burnFrom.call(addressb9jhFAr, uintdQ8R8W, {from: accounts[0]});
		const addressDNV9DId = await AntiBaseProtocolQEq1OQr.burnFrom.call(addressdqqltKy, uintEjiRN3L, {from: accounts[3]});
		await AntiBaseProtocolQEq1OQr.onlyOwner.call({from: accounts[5]});

		assert.equal(boolNAJoZwf, true)
		await expect(AntiBaseProtocolQEq1OQr.burnFrom.call(addressb9jhFAr, uintdQ8R8W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolQEq1OQr = await AntiBaseProtocol.new({from: accounts[2]});
		const uintp5lWZ2w = BigInt("1950")
		const uintaQfE8Zx = BigInt("14")
		const addressKsXtq4F = accounts[1]
		const uint256WZi5bm7 = await AntiBaseProtocolQEq1OQr.findRewardFee.call(uintp5lWZ2w, {from: accounts[4]});
		const stringcEkzjT1 = await AntiBaseProtocolQEq1OQr.name.call({from: accounts[1]});
		const boolNAJoZwf = await AntiBaseProtocolQEq1OQr.transfer.call(addressKsXtq4F, uintaQfE8Zx, {from: accounts[2]});

		assert.equal(stringcEkzjT1, "https://t.me/antibaseprotocol")
		assert.equal(uint256WZi5bm7, BigInt("100"))
		await expect(AntiBaseProtocolQEq1OQr.transfer.call(addressKsXtq4F, uintaQfE8Zx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolVehRFIP = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const addressjxZc5DT = accounts[5]
		const uinttMzZGn4 = BigInt("264")
		const addressrLCPtdo = accounts[5]
		const addresssWKLK0B = accounts[1]
		const uintRmShWz9 = BigInt("1592")
		const address6ZoWt0 = accounts[2]
		const uintDYlnoxq = BigInt("1608")
		const addressruQRrEN = "0x0000000000000000000000000000000000000001"
		const addresshZpSG6e = await AntiBaseProtocolVehRFIP._transferOwnership.call(addressjxZc5DT, {from: accounts[0]});
		const addressTS8ivWD = await AntiBaseProtocolVehRFIP._approve.call(addresssWKLK0B, addressrLCPtdo, uinttMzZGn4, {from: accounts[0]});
		const addressjh14Oi3 = await AntiBaseProtocolVehRFIP.burnFrom.call(address6ZoWt0, uintRmShWz9, {from: accounts[4]});
		const boolDtoo8b8 = await AntiBaseProtocolVehRFIP.decreaseAllowance.call(addressruQRrEN, uintDYlnoxq, {from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolQEq1OQr = await AntiBaseProtocol.new({from: accounts[2]});
		const uintU9lRIoi = BigInt("0")
		const addressCGDSRTj = accounts[1]
		const addressnMsHOWh = accounts[2]
		const uintjr4InY = BigInt("526")
		const addressW3FcBHl = "0x0000000000000000000000000000000000000001"
		const addressBdRvRCm = accounts[2]
		const uintOHzw3XK = BigInt("483")
		const addressYwApqK = accounts[4]
		const uintaaykwfg = BigInt("1551")
		const addressA8oDni7 = accounts[3]
		const addressc2ypZLi = accounts[1]
		const uinth392hU7 = BigInt("1459")
		const addressTu267Py = accounts[1]
		const boolijuhMX = await AntiBaseProtocolQEq1OQr.isOwner.call({from: accounts[0]});
		const boolya5vMV = await AntiBaseProtocolQEq1OQr.transferFrom.call(addressnMsHOWh, addressCGDSRTj, uintU9lRIoi, {from: accounts[0]});
		const addressbh0llPE = await AntiBaseProtocolQEq1OQr._approve.call(addressBdRvRCm, addressW3FcBHl, uintjr4InY, {from: "0x0000000000000000000000000000000000000001"});
		const addressZIhqoPt = await AntiBaseProtocolQEq1OQr._burn.call(addressYwApqK, uintOHzw3XK, {from: accounts[0]});
		const boolvx0dcFR = await AntiBaseProtocolQEq1OQr.transferFrom.call(addressc2ypZLi, addressA8oDni7, uintaaykwfg, {from: accounts[3]});
		const stringXMfZHjm = await AntiBaseProtocolQEq1OQr.symbol.call({from: accounts[3]});
		const booleK49mYd = await AntiBaseProtocolQEq1OQr.transfer.call(addressTu267Py, uinth392hU7, {from: accounts[2]});

		assert.equal(boolijuhMX, false)
		assert.equal(boolya5vMV, true)
		await expect(AntiBaseProtocolQEq1OQr._approve.call(addressBdRvRCm, addressW3FcBHl, uintjr4InY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})