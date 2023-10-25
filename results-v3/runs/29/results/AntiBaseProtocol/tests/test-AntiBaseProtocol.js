const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringvbvp2XV = "wOyP9w7e5vVbeExXlQDgFoBek1Xo8hBGZZF2HQwaVZTzHBTVXyEKNd865FpQxa6aZOX9mHg1Wufwr8V"
		const stringqY9WHrI = "9kCbfrBPyxFxyYVtkzZoYEYlYfNe8KLysRbmZsbQTCwJNgxQgz"
		const uintECfd4LF = BigInt("68")
		const AntiBaseProtocolMqZWhDb = await AntiBaseProtocol.new(stringvbvp2XV, stringqY9WHrI, uintECfd4LF, {from: accounts[3]});
		const addressUnRYItH = accounts[2]
		const addressM6DKMdh = accounts[2]
		const uintf2ttUw7 = BigInt("1094")
		const addresswO0s7u2 = accounts[1]
		const uintw9cl94M = BigInt("1436")
		const addressJ5ieNLv = accounts[4]
		const uint256uyhzMdb = await AntiBaseProtocolMqZWhDb.allowance.call(addressM6DKMdh, addressUnRYItH, {from: accounts[3]});
		const boolh5gJ9BG = await AntiBaseProtocolMqZWhDb.transfer.call(addresswO0s7u2, uintf2ttUw7, {from: accounts[2]});
		const addressypryzW8 = await AntiBaseProtocolMqZWhDb._burn.call(addressJ5ieNLv, uintw9cl94M, {from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolMzP50qS = await AntiBaseProtocol.new({from: accounts[0]});
		const addressBYwDK9m = accounts[5]
		const uintVIMVzO4 = BigInt("512")
		const addressU290p5h = accounts[1]
		const stringWivFU8b = await AntiBaseProtocolMzP50qS.symbol.call({from: accounts[3]});
		const uint256a6852tF = await AntiBaseProtocolMzP50qS.totalSupply.call({from: accounts[0]});
		const boolPNtNqH = await AntiBaseProtocolMzP50qS.isOwner.call({from: accounts[3]});
		const uint256C7kY6UN = await AntiBaseProtocolMzP50qS.balanceOf.call(addressBYwDK9m, {from: accounts[1]});
		const boolUupc2wp = await AntiBaseProtocolMzP50qS.transfer.call(addressU290p5h, uintVIMVzO4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPNtNqH, false)
		assert.equal(stringWivFU8b, "ABASE")
		assert.equal(uint256C7kY6UN, BigInt("0"))
		assert.equal(uint256a6852tF, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolMzP50qS.transfer.call(addressU290p5h, uintVIMVzO4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRjip28l = await AntiBaseProtocol.new({from: accounts[1]});
		const boolNrt6sFh = await AntiBaseProtocolRjip28l.isOwner.call({from: accounts[4]});
		await AntiBaseProtocolRjip28l.renounceOwnership.call({from: accounts[0]});

		assert.equal(boolNrt6sFh, false)
		await expect(AntiBaseProtocolRjip28l.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolHlKKh57 = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPWgPaH8 = BigInt("1983")
		const addresshcVpuw1 = accounts[2]
		const address4egt27 = accounts[0]
		const uintdWqPBY1 = BigInt("935")
		const addressRwFAQJw = accounts[5]
		const uintae9oWPS = BigInt("1839")
		const addressUkGl4v1 = "0x0000000000000000000000000000000000000001"
		const booleYqLoY1 = await AntiBaseProtocolHlKKh57.approve.call(addresshcVpuw1, uintPWgPaH8, {from: accounts[1]});
		const uint256RU66azs = await AntiBaseProtocolHlKKh57.balanceOf.call(address4egt27, {from: accounts[4]});
		const addressOdygCUg = await AntiBaseProtocolHlKKh57._burn.call(addressRwFAQJw, uintdWqPBY1, {from: accounts[0]});
		const addresskK30rNi = await AntiBaseProtocolHlKKh57._mint.call(addressUkGl4v1, uintae9oWPS, {from: accounts[1]});
		const uint8p1lmKly = await AntiBaseProtocolHlKKh57.decimals.call({from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCM0IbSY = await AntiBaseProtocol.new({from: accounts[1]});
		const uintE1VIa95 = BigInt("1089")
		const addresshDfpmVw = accounts[0]
		const uinty1xLrXS = BigInt("2022")
		const addressA7j7Q4 = accounts[4]
		const addressBQfB5QA = accounts[2]
		const bool4ZopJS = await AntiBaseProtocolCM0IbSY.increaseAllowance.call(addresshDfpmVw, uintE1VIa95, {from: accounts[4]});
		const addressb4E3Ak = await AntiBaseProtocolCM0IbSY._burn.call(addressA7j7Q4, uinty1xLrXS, {from: accounts[0]});
		const addressMvECNR = await AntiBaseProtocolCM0IbSY.transferOwnership.call(addressBQfB5QA, {from: accounts[3]});

		assert.equal(bool4ZopJS, true)
		await expect(AntiBaseProtocolCM0IbSY._burn.call(addressA7j7Q4, uinty1xLrXS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolgn550NM = await AntiBaseProtocol.new({from: accounts[3]});
		const uintkwZAa0 = BigInt("757")
		const addressHt3xTOR = accounts[4]
		const uintnX446QE = BigInt("60")
		const uintvuNeruB = BigInt("971")
		const addressweuaJ4F = accounts[1]
		const addressG2gsBhE = accounts[2]
		const addressWZcG0lY = await AntiBaseProtocolgn550NM.burnFrom.call(addressHt3xTOR, uintkwZAa0, {from: accounts[4]});
		const uint256NgVFMT = await AntiBaseProtocolgn550NM.burn.call(uintnX446QE, {from: accounts[0]});
		const boolFt9p60P = await AntiBaseProtocolgn550NM.decreaseAllowance.call(addressweuaJ4F, uintvuNeruB, {from: accounts[5]});
		const uint256Pwnlp86 = await AntiBaseProtocolgn550NM.balanceOf.call(addressG2gsBhE, {from: accounts[0]});

		await expect(AntiBaseProtocolgn550NM.burnFrom.call(addressHt3xTOR, uintkwZAa0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolJESbTv4 = await AntiBaseProtocol.new({from: accounts[0]});
		const uintV8HTqJl = BigInt("831")
		const uint256SeCW2UR = await AntiBaseProtocolJESbTv4.burn.call(uintV8HTqJl, {from: accounts[1]});
		await AntiBaseProtocolJESbTv4.renounceOwnership.call({from: accounts[0]});

		await expect(AntiBaseProtocolJESbTv4.burn.call(uintV8HTqJl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolMDkcHh7 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintcpuo2aE = BigInt("420")
		const addressOxp4IRt = accounts[3]
		const addressQDPMF1M = accounts[4]
		const uintnamfxr6 = BigInt("574")
		const addressLkE7k9 = accounts[1]
		const uintYP9gG20 = BigInt("1121")
		const addressryKelk = accounts[1]
		const addressyv2ObOF = accounts[3]
		const boolnSRfAjz = await AntiBaseProtocolMDkcHh7.transferFrom.call(addressQDPMF1M, addressOxp4IRt, uintcpuo2aE, {from: accounts[1]});
		const stringkJtbUk = await AntiBaseProtocolMDkcHh7.symbol.call({from: accounts[4]});
		const boolrPiXwnS = await AntiBaseProtocolMDkcHh7.transfer.call(addressLkE7k9, uintnamfxr6, {from: accounts[0]});
		const uint8G4l1cdu = await AntiBaseProtocolMDkcHh7.decimals.call({from: accounts[4]});
		const addressxeoIYIn = await AntiBaseProtocolMDkcHh7._approve.call(addressyv2ObOF, addressryKelk, uintYP9gG20, {from: accounts[1]});
		const uint256VjJ2rZ = await AntiBaseProtocolMDkcHh7.totalSupply.call({from: accounts[5]});

		await expect(AntiBaseProtocolMDkcHh7.transferFrom.call(addressQDPMF1M, addressOxp4IRt, uintcpuo2aE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolMzP50qS = await AntiBaseProtocol.new({from: accounts[0]});
		const uintFWURt0D = BigInt("1932")
		const addressxdq1pHf = accounts[1]
		const uintj4geOeG = BigInt("512")
		const addressdXdV3OG = accounts[1]
		const stringWivFU8b = await AntiBaseProtocolMzP50qS.symbol.call({from: accounts[3]});
		const uint256a6852tF = await AntiBaseProtocolMzP50qS.totalSupply.call({from: accounts[0]});
		const boolPNtNqH = await AntiBaseProtocolMzP50qS.isOwner.call({from: accounts[3]});
		const booly4QNJ4 = await AntiBaseProtocolMzP50qS.approve.call(addressxdq1pHf, uintFWURt0D, {from: accounts[0]});
		const boolUupc2wp = await AntiBaseProtocolMzP50qS.transfer.call(addressdXdV3OG, uintj4geOeG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPNtNqH, false)
		assert.equal(booly4QNJ4, true)
		assert.equal(stringWivFU8b, "ABASE")
		assert.equal(uint256a6852tF, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolMzP50qS.transfer.call(addressdXdV3OG, uintj4geOeG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolMzP50qS = await AntiBaseProtocol.new({from: accounts[0]});
		const uintcuQwZqv = BigInt("512")
		const addressU8UdMn8 = accounts[1]
		const stringWivFU8b = await AntiBaseProtocolMzP50qS.symbol.call({from: accounts[3]});
		const uint256a6852tF = await AntiBaseProtocolMzP50qS.totalSupply.call({from: accounts[0]});
		const addressSYVxrus = await AntiBaseProtocolMzP50qS.owner.call({from: accounts[4]});
		const boolPNtNqH = await AntiBaseProtocolMzP50qS.isOwner.call({from: accounts[3]});
		const boolUupc2wp = await AntiBaseProtocolMzP50qS.transfer.call(addressU8UdMn8, uintcuQwZqv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressSYVxrus, 0x2b5057e2fD72e0362303a75d3E58C2dF0E6f9782)
		assert.equal(boolPNtNqH, false)
		assert.equal(stringWivFU8b, "ABASE")
		assert.equal(uint256a6852tF, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolMzP50qS.transfer.call(addressU8UdMn8, uintcuQwZqv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolJESbTv4 = await AntiBaseProtocol.new({from: accounts[0]});
		const uintMnr7jqx = BigInt("1197")
		const addressNgGEIjR = "0x0000000000000000000000000000000000000001"
		const uintE4cuead = BigInt("847")
		const uintPeha3hX = BigInt("1509")
		const addressCGDxDXm = accounts[1]
		const boolilfT7eu = await AntiBaseProtocolJESbTv4.decreaseAllowance.call(addressNgGEIjR, uintMnr7jqx, {from: accounts[4]});
		const uint256SeCW2UR = await AntiBaseProtocolJESbTv4.burn.call(uintE4cuead, {from: accounts[1]});
		await AntiBaseProtocolJESbTv4.renounceOwnership.call({from: accounts[0]});
		const addresssu5V5RI = await AntiBaseProtocolJESbTv4.burnFrom.call(addressCGDxDXm, uintPeha3hX, {from: accounts[4]});

		await expect(AntiBaseProtocolJESbTv4.decreaseAllowance.call(addressNgGEIjR, uintMnr7jqx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolMzP50qS = await AntiBaseProtocol.new({from: accounts[0]});
		const uintyKG2aYE = BigInt("1676")
		const addresshLGaiEV = accounts[2]
		const addressEvArwr2 = accounts[0]
		const uintU3E6fpr = BigInt("512")
		const addressuscyZru = accounts[1]
		const uintjAgK31 = BigInt("1120")
		const addressUilRL6 = accounts[4]
		const stringWivFU8b = await AntiBaseProtocolMzP50qS.symbol.call({from: accounts[3]});
		const uint256a6852tF = await AntiBaseProtocolMzP50qS.totalSupply.call({from: accounts[0]});
		const uint256VCBw3kI = await AntiBaseProtocolMzP50qS.findRewardFee.call(uintyKG2aYE, {from: accounts[3]});
		const uint256F55kDOf = await AntiBaseProtocolMzP50qS.allowance.call(addressEvArwr2, addresshLGaiEV, {from: accounts[1]});
		const boolUupc2wp = await AntiBaseProtocolMzP50qS.transfer.call(addressuscyZru, uintU3E6fpr, {from: "0x0000000000000000000000000000000000000001"});
		const boolVg6Qn4H = await AntiBaseProtocolMzP50qS.decreaseAllowance.call(addressUilRL6, uintjAgK31, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringWivFU8b, "ABASE")
		assert.equal(uint256F55kDOf, BigInt("0"))
		assert.equal(uint256VCBw3kI, BigInt("85"))
		assert.equal(uint256a6852tF, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolMzP50qS.transfer.call(addressuscyZru, uintU3E6fpr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolMzP50qS = await AntiBaseProtocol.new({from: accounts[0]});
		const uintfUCL0br = BigInt("599")
		const addressj49Ctn = accounts[2]
		const address9qW5eY = accounts[5]
		const uintzLp1eC = BigInt("528")
		const addressEGenWqi = accounts[1]
		await AntiBaseProtocolMzP50qS.renounceOwnership.call({from: accounts[0]});
		const stringWivFU8b = await AntiBaseProtocolMzP50qS.symbol.call({from: accounts[3]});
		await AntiBaseProtocolMzP50qS.onlyOwner.call({from: accounts[5]});
		const boolcfW5Ezh = await AntiBaseProtocolMzP50qS.transferFrom.call(address9qW5eY, addressj49Ctn, uintfUCL0br, {from: accounts[3]});
		const uint256a6852tF = await AntiBaseProtocolMzP50qS.totalSupply.call({from: accounts[0]});
		const boolUupc2wp = await AntiBaseProtocolMzP50qS.transfer.call(addressEGenWqi, uintzLp1eC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolMzP50qS.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolMzP50qS = await AntiBaseProtocol.new({from: accounts[0]});
		const uintwkMlVB = BigInt("1101")
		const uintIabbpRJ = BigInt("1676")
		const uintdX9z2v2 = BigInt("785")
		const addressko2xzvJ = accounts[5]
		const addressmYPYd9G = accounts[2]
		const addressn9qwMBK = accounts[0]
		const uintHeHZzLT = BigInt("512")
		const addressYekVsx2 = accounts[1]
		const uintL9BSJD = BigInt("1120")
		const addressRU23uEa = accounts[4]
		const stringWivFU8b = await AntiBaseProtocolMzP50qS.symbol.call({from: accounts[3]});
		const uint256qIb8jxw = await AntiBaseProtocolMzP50qS.findBurnFee.call(uintwkMlVB, {from: accounts[4]});
		const uint256a6852tF = await AntiBaseProtocolMzP50qS.totalSupply.call({from: accounts[0]});
		const uint256VCBw3kI = await AntiBaseProtocolMzP50qS.findRewardFee.call(uintIabbpRJ, {from: accounts[3]});
		const addressG3Lj9yu = await AntiBaseProtocolMzP50qS._mint.call(addressko2xzvJ, uintdX9z2v2, {from: accounts[1]});
		const uint256F55kDOf = await AntiBaseProtocolMzP50qS.allowance.call(addressn9qwMBK, addressmYPYd9G, {from: accounts[1]});
		const boolUupc2wp = await AntiBaseProtocolMzP50qS.transfer.call(addressYekVsx2, uintHeHZzLT, {from: "0x0000000000000000000000000000000000000001"});
		const boolVg6Qn4H = await AntiBaseProtocolMzP50qS.decreaseAllowance.call(addressRU23uEa, uintL9BSJD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringWivFU8b, "ABASE")
		assert.equal(uint256VCBw3kI, BigInt("85"))
		assert.equal(uint256a6852tF, BigInt("31250000000000000000"))
		assert.equal(uint256qIb8jxw, BigInt("180"))
		await expect(AntiBaseProtocolMzP50qS._mint.call(addressko2xzvJ, uintdX9z2v2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRjip28l = await AntiBaseProtocol.new({from: accounts[1]});
		const addressdmM26Ft = accounts[1]
		const uintw1jULvA = BigInt("1751")
		const addressR39NmX = accounts[0]
		const uint256xKuBRvh = await AntiBaseProtocolRjip28l.balanceOf.call(addressdmM26Ft, {from: accounts[1]});
		const stringW0JNJ0i = await AntiBaseProtocolRjip28l.name.call({from: accounts[0]});
		await AntiBaseProtocolRjip28l.renounceOwnership.call({from: accounts[0]});
		const boolyNDlfB3 = await AntiBaseProtocolRjip28l.decreaseAllowance.call(addressR39NmX, uintw1jULvA, {from: accounts[1]});

		assert.equal(stringW0JNJ0i, "https://t.me/antibaseprotocol")
		assert.equal(uint256xKuBRvh, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolRjip28l.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolJM35qfw = await AntiBaseProtocol.new({from: accounts[5]});
		const uintfdvqlmu = BigInt("956")
		const addressuFr0cHb = accounts[4]
		const addressCl8jTjr = accounts[5]
		const addressM43G70P = accounts[2]
		const uint76Yz7F = BigInt("125")
		const boolkpu7uE2 = await AntiBaseProtocolJM35qfw.isOwner.call({from: accounts[2]});
		const boolbdDEX9K = await AntiBaseProtocolJM35qfw.transferFrom.call(addressCl8jTjr, addressuFr0cHb, uintfdvqlmu, {from: accounts[5]});
		const addressEtexlE1 = await AntiBaseProtocolJM35qfw.transferOwnership.call(addressM43G70P, {from: accounts[5]});
		const uint256obGS2iw = await AntiBaseProtocolJM35qfw.findBurnFee.call(uint76Yz7F, {from: accounts[5]});

		assert.equal(boolkpu7uE2, false)
		await expect(AntiBaseProtocolJM35qfw.transferFrom.call(addressCl8jTjr, addressuFr0cHb, uintfdvqlmu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRjip28l = await AntiBaseProtocol.new({from: accounts[1]});
		const uint8hT24FNG = await AntiBaseProtocolRjip28l.decimals.call({from: accounts[2]});
		await AntiBaseProtocolRjip28l.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint8hT24FNG, BigInt("18"))
		await expect(AntiBaseProtocolRjip28l.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRjip28l = await AntiBaseProtocol.new({from: accounts[1]});
		const uintK2dkgUZ = BigInt("879")
		const addressvYP5Xx = accounts[0]
		const uintlWUoFOz = BigInt("923")
		const addressOWjKcgK = accounts[1]
		const bool8Q0rwE = await AntiBaseProtocolRjip28l.approve.call(addressvYP5Xx, uintK2dkgUZ, {from: accounts[3]});
		const addressHUUFVsp = await AntiBaseProtocolRjip28l.burnFrom.call(addressOWjKcgK, uintlWUoFOz, {from: accounts[0]});
		await AntiBaseProtocolRjip28l.renounceOwnership.call({from: accounts[0]});
		const addresslCFDlYf = await AntiBaseProtocolRjip28l.owner.call({from: accounts[5]});

		assert.equal(bool8Q0rwE, true)
		await expect(AntiBaseProtocolRjip28l.burnFrom.call(addressOWjKcgK, uintlWUoFOz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolJM35qfw = await AntiBaseProtocol.new({from: accounts[5]});
		const addressahGdmrA = "0x0000000000000000000000000000000000000001"
		const uintaTb2O36 = BigInt("841")
		const addressZqo8TC = accounts[1]
		const uintJRX4n7l = BigInt("96")
		const addressxEUcaxh = await AntiBaseProtocolJM35qfw.transferOwnership.call(addressahGdmrA, {from: accounts[5]});
		const addressjNStHFz = await AntiBaseProtocolJM35qfw.burnFrom.call(addressZqo8TC, uintaTb2O36, {from: accounts[3]});
		const uint256obGS2iw = await AntiBaseProtocolJM35qfw.findBurnFee.call(uintJRX4n7l, {from: accounts[5]});

		await expect(AntiBaseProtocolJM35qfw.burnFrom.call(addressZqo8TC, uintaTb2O36, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolLUHQZNo = await AntiBaseProtocol.new({from: accounts[0]});
		const uintMjL0qHw = BigInt("596")
		const addressNJdNkRi = "0x00000000000000000000000000000000000000-1"
		const uintUSIjEFg = BigInt("382")
		const addressqoZQbt6 = accounts[3]
		const uintY33f6ZP = BigInt("517")
		const addressxRTyE4v = accounts[4]
		const addressK6E0fJB = accounts[0]
		const uintj6yoMDn = BigInt("1405")
		const addresszRFjsdz = accounts[0]
		const boolhA4qDOh = await AntiBaseProtocolLUHQZNo.transfer.call(addressNJdNkRi, uintMjL0qHw, {from: accounts[4]});
		const addresskqcUwMC = await AntiBaseProtocolLUHQZNo._mint.call(addressqoZQbt6, uintUSIjEFg, {from: accounts[3]});
		const boolOrruV0 = await AntiBaseProtocolLUHQZNo.transferFrom.call(addressK6E0fJB, addressxRTyE4v, uintY33f6ZP, {from: "0x0000000000000000000000000000000000000001"});
		const boolFKsbr7W = await AntiBaseProtocolLUHQZNo.transfer.call(addresszRFjsdz, uintj6yoMDn, {from: accounts[0]});

		await expect(AntiBaseProtocolLUHQZNo.transfer.call(addressNJdNkRi, uintMjL0qHw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})