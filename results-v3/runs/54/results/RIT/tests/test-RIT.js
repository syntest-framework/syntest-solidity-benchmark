const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITfYZxrZT = await RIT.new({from: accounts[0]});
		const addressqpEbxSG = "0x0000000000000000000000000000000000000001"
		const addressSoskZ30 = "0x0000000000000000000000000000000000000001"
		const uint256DghDMo2 = await RITfYZxrZT.balanceOf.call(addressqpEbxSG, {from: accounts[0]});
		const uint256gJC6Nez = await RITfYZxrZT.balanceOf.call(addressSoskZ30, {from: accounts[1]});

		assert.equal(uint256DghDMo2, BigInt("0"))
		assert.equal(uint256gJC6Nez, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITJGsspCx = await RIT.new({from: accounts[2]});
		const addressh8KIjLC = accounts[4]
		const uintXMbHT2u = BigInt("724")
		const address9c7ZQC = accounts[4]
		const uintosrSFhO = BigInt("1084")
		const addressQGOg0L = "0x0000000000000000000000000000000000000001"
		const addresswdQ3nOY = accounts[4]
		const uint256ZOwEoK4 = await RITJGsspCx.balanceOf.call(addressh8KIjLC, {from: accounts[4]});
		const boolIxS1j48 = await RITJGsspCx.transfer.call(address9c7ZQC, uintXMbHT2u, {from: accounts[4]});
		const boolfqtKAZ1 = await RITJGsspCx.transferFrom.call(addresswdQ3nOY, addressQGOg0L, uintosrSFhO, {from: accounts[0]});

		assert.equal(uint256ZOwEoK4, BigInt("0"))
		await expect(RITJGsspCx.transfer.call(address9c7ZQC, uintXMbHT2u, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITArkme9e = await RIT.new({from: accounts[1]});
		const addressL9KjNS7 = accounts[5]
		const addressibyrmLO = accounts[0]
		const addressv9EqJZ4 = accounts[0]
		const addressnXGT4r = accounts[0]
		const uint256Bhd8hzY = await RITArkme9e.allowance.call(addressibyrmLO, addressL9KjNS7, {from: accounts[4]});
		const uint256d3m6OJs = await RITArkme9e.totalSupply.call({from: accounts[4]});
		const uint256pcNOfCM = await RITArkme9e.balanceOf.call(addressv9EqJZ4, {from: accounts[1]});
		const uint256IegNfXb = await RITArkme9e.balanceOf.call(addressnXGT4r, {from: accounts[4]});

		assert.equal(uint256Bhd8hzY, BigInt("0"))
		assert.equal(uint256IegNfXb, BigInt("0"))
		assert.equal(uint256d3m6OJs, BigInt("500000000000000000000000000"))
		assert.equal(uint256pcNOfCM, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITGcgT0I0 = await RIT.new({from: accounts[2]});
		const uintTYXQXd8 = BigInt("657")
		const addressvuEoOgd = accounts[3]
		const uintfkIerDD = BigInt("1678")
		const addressnyOLvKS = accounts[4]
		const uintY5jXYTt = BigInt("1776")
		const addressendfWIH = accounts[3]
		const boolj2IT3GG = await RITGcgT0I0.decreaseAllowance.call(addressvuEoOgd, uintTYXQXd8, {from: accounts[1]});
		const boolin8OKL = await RITGcgT0I0.transfer.call(addressnyOLvKS, uintfkIerDD, {from: accounts[0]});
		const booljXtOq2K = await RITGcgT0I0.transfer.call(addressendfWIH, uintY5jXYTt, {from: accounts[2]});

		await expect(RITGcgT0I0.decreaseAllowance.call(addressvuEoOgd, uintTYXQXd8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITEaPVE8R = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressM5eUzmZ = accounts[0]
		const uintihFQ70 = BigInt("760")
		const addressEBVSR45 = accounts[3]
		const uintJUhAFSF = BigInt("841")
		const addressLtC9wao = accounts[0]
		const addressYIzFyec = accounts[0]
		const uint256jaV7b1i = await RITEaPVE8R.balanceOf.call(addressM5eUzmZ, {from: accounts[3]});
		const boolsg7baA6 = await RITEaPVE8R.approve.call(addressEBVSR45, uintihFQ70, {from: accounts[1]});
		const boolgY4z9Fm = await RITEaPVE8R.transferFrom.call(addressYIzFyec, addressLtC9wao, uintJUhAFSF, {from: accounts[1]});
	});

	it('test for RIT', async () => {
		const RITHzu4WLR = await RIT.new({from: accounts[0]});
		const uintFa1acON = BigInt("15")
		const address6nwtmv = accounts[4]
		const addressuUDZrGw = accounts[2]
		const addressAUXvFZ = accounts[1]
		const addressAgjTyVY = accounts[1]
		const addressvnAXsCJ = "0x0000000000000000000000000000000000000001"
		const uintsbPVKG4 = BigInt("770")
		const addressTSPtIV3 = accounts[5]
		const uint256iRGSeR = await RITHzu4WLR.totalSupply.call({from: accounts[5]});
		const boolInvUcn0 = await RITHzu4WLR.increaseAllowance.call(address6nwtmv, uintFa1acON, {from: accounts[1]});
		const uint256FTUerzd = await RITHzu4WLR.allowance.call(addressAUXvFZ, addressuUDZrGw, {from: accounts[3]});
		const uint256ngQ5xYJ = await RITHzu4WLR.allowance.call(addressvnAXsCJ, addressAgjTyVY, {from: accounts[3]});
		const stringqTTVYji = await RITHzu4WLR.symbol.call({from: accounts[0]});
		const boolXSe2noZ = await RITHzu4WLR.transfer.call(addressTSPtIV3, uintsbPVKG4, {from: accounts[5]});

		assert.equal(boolInvUcn0, true)
		assert.equal(stringqTTVYji, "RIT 2.0")
		assert.equal(uint256FTUerzd, BigInt("0"))
		assert.equal(uint256iRGSeR, BigInt("500000000000000000000000000"))
		assert.equal(uint256ngQ5xYJ, BigInt("0"))
		await expect(RITHzu4WLR.transfer.call(addressTSPtIV3, uintsbPVKG4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITFPDTcRH = await RIT.new({from: accounts[2]});
		const uintmcLHHmh = BigInt("1369")
		const uint256w5GKiRu = await RITFPDTcRH._burn.call(uintmcLHHmh, {from: accounts[1]});
		const uint8xg1cVop = await RITFPDTcRH.decimals.call({from: accounts[3]});
		const stringRKnmqhW = await RITFPDTcRH.symbol.call({from: accounts[4]});
		const uint8un7aCTO = await RITFPDTcRH.decimals.call({from: accounts[3]});

		await expect(RITFPDTcRH._burn.call(uintmcLHHmh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITWtIHOFr = await RIT.new({from: accounts[2]});
		const uintlu3L88t = BigInt("1682")
		const addressqUgFBgH = accounts[5]
		const addressRaQFtUt = accounts[5]
		const boolcR0jPbz = await RITWtIHOFr.transferFrom.call(addressRaQFtUt, addressqUgFBgH, uintlu3L88t, {from: accounts[2]});
		const stringaSA9eky = await RITWtIHOFr.name.call({from: accounts[3]});

		await expect(RITWtIHOFr.transferFrom.call(addressRaQFtUt, addressqUgFBgH, uintlu3L88t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITfYZxrZT = await RIT.new({from: accounts[0]});
		const addressxfa3X8g = "0x0000000000000000000000000000000000000002"
		const addressRA6PrrC = "0x0000000000000000000000000000000000000001"
		const uint8jxoVCVW = await RITfYZxrZT.decimals.call({from: accounts[1]});
		const uint256DghDMo2 = await RITfYZxrZT.balanceOf.call(addressxfa3X8g, {from: accounts[0]});
		const uint256gJC6Nez = await RITfYZxrZT.balanceOf.call(addressRA6PrrC, {from: accounts[1]});

		assert.equal(uint256DghDMo2, BigInt("0"))
		assert.equal(uint256gJC6Nez, BigInt("0"))
		assert.equal(uint8jxoVCVW, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITfYZxrZT = await RIT.new({from: accounts[0]});
		const addressDwOXjAW = "0x0000000000000000000000000000000000000001"
		const addressyjHvvjQ = "0x0000000000000000000000000000000000000000"
		const uintYfmpXIo = BigInt("988")
		const addressezdM7QT = accounts[3]
		const addressVe15zYh = accounts[2]
		const uintPW4TdSI = BigInt("1561")
		const addressSP7l7YD = accounts[1]
		const uint256DghDMo2 = await RITfYZxrZT.balanceOf.call(addressDwOXjAW, {from: accounts[0]});
		const stringuRwxe4N = await RITfYZxrZT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gJC6Nez = await RITfYZxrZT.balanceOf.call(addressyjHvvjQ, {from: accounts[1]});
		const booliFwplmZ = await RITfYZxrZT.transferFrom.call(addressVe15zYh, addressezdM7QT, uintYfmpXIo, {from: accounts[0]});
		const boolrNPEgUJ = await RITfYZxrZT.transfer.call(addressSP7l7YD, uintPW4TdSI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringuRwxe4N, "Real Estate Investment Token")
		assert.equal(uint256DghDMo2, BigInt("0"))
		assert.equal(uint256gJC6Nez, BigInt("0"))
		await expect(RITfYZxrZT.transferFrom.call(addressVe15zYh, addressezdM7QT, uintYfmpXIo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITfYZxrZT = await RIT.new({from: accounts[0]});
		const uintti75tmo = BigInt("421")
		const addresseMfVWaj = accounts[3]
		const addressOpJNjy = "0x0000000000000000000000000000000000000001"
		const addressldfmRy6 = "0x0000000000000000000000000000000000000001"
		const boolvtKhwjM = await RITfYZxrZT.approve.call(addresseMfVWaj, uintti75tmo, {from: accounts[4]});
		const uint256DghDMo2 = await RITfYZxrZT.balanceOf.call(addressOpJNjy, {from: accounts[0]});
		const uint256gJC6Nez = await RITfYZxrZT.balanceOf.call(addressldfmRy6, {from: accounts[1]});

		assert.equal(boolvtKhwjM, true)
		assert.equal(uint256DghDMo2, BigInt("0"))
		assert.equal(uint256gJC6Nez, BigInt("0"))
	});
})