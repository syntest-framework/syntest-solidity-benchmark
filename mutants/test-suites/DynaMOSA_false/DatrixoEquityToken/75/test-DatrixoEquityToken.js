const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addresspzik8KR = accounts[0]
		const uintioUO1b = BigInt("1462")
		const DatrixoEquityTokenGilUuk5 = await DatrixoEquityToken.new(addresspzik8KR, uintioUO1b, {from: accounts[0]});
		const uintjYyrvE3 = BigInt("12")
		const addressTAct5NZ = accounts[2]
		const boolEb4dnGG = await DatrixoEquityTokenGilUuk5.transfer.call(addressTAct5NZ, uintjYyrvE3, {from: accounts[0]});
//		await DatrixoEquityTokenGilUuk5.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await DatrixoEquityTokenGilUuk5.onlyOwner.call({from: accounts[3]});
//		await DatrixoEquityTokenGilUuk5.afterStartTime.call({from: accounts[5]});
//		const addressarrayOaVtIgi = await DatrixoEquityTokenGilUuk5.getShareholdersArray.call({from: accounts[1]});

		assert.equal(boolEb4dnGG, true)
		await expect(DatrixoEquityTokenGilUuk5.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressgB1XFD = accounts[4]
		const uintVJkLCEb = BigInt("881")
		const DatrixoEquityTokenWfB5yt9 = await DatrixoEquityToken.new(addressgB1XFD, uintVJkLCEb, {from: accounts[1]});
		const uintKGME77h = BigInt("2022")
		const addressJGG9JxC = "0x0000000000000000000000000000000000000001"
		const addressu6gT4VC = accounts[4]
		const uintT9ZsLNB = BigInt("1608")
		const addresssjhCGgW = accounts[3]
//		const boolDYZ1cnD = await DatrixoEquityTokenWfB5yt9.transferFrom.call(addressu6gT4VC, addressJGG9JxC, uintKGME77h, {from: accounts[5]});
//		const boolRBbd2am = await DatrixoEquityTokenWfB5yt9.transfer.call(addresssjhCGgW, uintT9ZsLNB, {from: accounts[2]});

		await expect(DatrixoEquityTokenWfB5yt9.transferFrom.call(addressu6gT4VC, addressJGG9JxC, uintKGME77h, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressFPG6kW8 = accounts[1]
		const uintyY2pmd9 = BigInt("497")
		const DatrixoEquityTokenjenGBTh = await DatrixoEquityToken.new(addressFPG6kW8, uintyY2pmd9, {from: accounts[5]});
		const addressSLVDfkU = accounts[3]
		const uintSf8QuGJ = BigInt("1391")
		const addressXmi4FwK = accounts[2]
//		const boolBadJFs5 = await DatrixoEquityTokenjenGBTh.removeShareholder.call(addressSLVDfkU, {from: accounts[1]});
//		await DatrixoEquityTokenjenGBTh.afterStartTime.call({from: accounts[0]});
//		const boolQDll3gX = await DatrixoEquityTokenjenGBTh.transfer.call(addressXmi4FwK, uintSf8QuGJ, {from: accounts[1]});

		await expect(DatrixoEquityTokenjenGBTh.removeShareholder.call(addressSLVDfkU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresspS1Neug = accounts[0]
		const uintwrTeKlF = BigInt("1629")
		const DatrixoEquityTokendtQSCAX = await DatrixoEquityToken.new(addresspS1Neug, uintwrTeKlF, {from: "0x0000000000000000000000000000000000000001"});
		const addressarrayKO4oRW = await DatrixoEquityTokendtQSCAX.getShareholdersArray.call({from: accounts[4]});
		const addressarrayo3gptsc = await DatrixoEquityTokendtQSCAX.getShareholdersArray.call({from: accounts[5]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressKu4Vg7M = accounts[3]
		const uintXhFSxPO = BigInt("1446")
		const DatrixoEquityTokenUNOcx09 = await DatrixoEquityToken.new(addressKu4Vg7M, uintXhFSxPO, {from: accounts[1]});
		const uintwMMZzBF = BigInt("51")
		const addressAS6ZAB = accounts[0]
		const addressOk3y9I0 = accounts[3]
		const uintgz26ojv = BigInt("1603")
		const addresshZh6H20 = accounts[1]
		const addressSmA7rEF = accounts[3]
		const boolKNZFJ8Q = await DatrixoEquityTokenUNOcx09.transferFrom.call(addressOk3y9I0, addressAS6ZAB, uintwMMZzBF, {from: accounts[3]});
//		const boolfqJQTsl = await DatrixoEquityTokenUNOcx09.transfer.call(addresshZh6H20, uintgz26ojv, {from: accounts[1]});
//		const addressarraysFyoeON = await DatrixoEquityTokenUNOcx09.getShareholdersArray.call({from: accounts[3]});
//		const boolDvA2Tl1 = await DatrixoEquityTokenUNOcx09.removeShareholder.call(addressSmA7rEF, {from: accounts[1]});

		assert.equal(boolKNZFJ8Q, true)
		await expect(DatrixoEquityTokenUNOcx09.transfer.call(addresshZh6H20, uintgz26ojv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressaxw7QX0 = accounts[1]
		const uintoKgvBEB = BigInt("1885")
		const DatrixoEquityTokenHGy2Z4R = await DatrixoEquityToken.new(addressaxw7QX0, uintoKgvBEB, {from: accounts[3]});
		const uintJpoMcnl = BigInt("304")
		const addressLGdDf9j = accounts[2]
		const uintUQte9Fp = BigInt("1345")
		const addressZskMkhp = accounts[0]
		const addressarrayG1m1nNl = await DatrixoEquityTokenHGy2Z4R.getShareholdersArray.call({from: accounts[1]});
//		const boolg8QDOWs = await DatrixoEquityTokenHGy2Z4R.transfer.call(addressLGdDf9j, uintJpoMcnl, {from: accounts[5]});
//		const addressarrayqgO24lf = await DatrixoEquityTokenHGy2Z4R.getShareholdersArray.call({from: accounts[3]});
//		const bool7PFplW = await DatrixoEquityTokenHGy2Z4R.transfer.call(addressZskMkhp, uintUQte9Fp, {from: accounts[4]});

		assert.equal(addressarrayG1m1nNl, )
		await expect(DatrixoEquityTokenHGy2Z4R.transfer.call(addressLGdDf9j, uintJpoMcnl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressrFuIPhC = accounts[0]
		const uinttvba5vi = BigInt("1462")
		const DatrixoEquityTokenGilUuk5 = await DatrixoEquityToken.new(addressrFuIPhC, uinttvba5vi, {from: accounts[0]});
		const uintDvFrLtq = BigInt("12")
		const addressaB1TjDE = accounts[0]
//		const boolEb4dnGG = await DatrixoEquityTokenGilUuk5.transfer.call(addressaB1TjDE, uintDvFrLtq, {from: accounts[0]});
//		await DatrixoEquityTokenGilUuk5.afterStartTime.call({from: accounts[3]});
//		await DatrixoEquityTokenGilUuk5.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await DatrixoEquityTokenGilUuk5.onlyOwner.call({from: accounts[3]});
//		await DatrixoEquityTokenGilUuk5.afterStartTime.call({from: accounts[5]});
//		const addressarrayOaVtIgi = await DatrixoEquityTokenGilUuk5.getShareholdersArray.call({from: accounts[1]});

		await expect(DatrixoEquityTokenGilUuk5.transfer.call(addressaB1TjDE, uintDvFrLtq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressi8bDlKN = accounts[3]
		const uintY9faqOc = BigInt("1446")
		const DatrixoEquityTokenUNOcx09 = await DatrixoEquityToken.new(addressi8bDlKN, uintY9faqOc, {from: accounts[1]});
		const uintFOWsfo1 = BigInt("51")
		const addressf4r3Z9 = accounts[0]
		const addressY3znNud = accounts[4]
		const addressx33CoE = accounts[2]
		const addressQUY9EA = accounts[5]
		const uintOSNnmQ = BigInt("1514")
		const addressNFpcI1z = accounts[1]
		const uintM76kZQi = BigInt("826")
		const addressRDaWD03 = accounts[4]
		const addressCcEimU = accounts[4]
//		const boolKNZFJ8Q = await DatrixoEquityTokenUNOcx09.transferFrom.call(addressY3znNud, addressf4r3Z9, uintFOWsfo1, {from: accounts[3]});
//		await DatrixoEquityTokenUNOcx09.afterStartTime.call({from: accounts[1]});
//		const boolavrwsi0 = await DatrixoEquityTokenUNOcx09.removeShareholder.call(addressx33CoE, {from: accounts[1]});
//		const addressarraysFyoeON = await DatrixoEquityTokenUNOcx09.getShareholdersArray.call({from: accounts[3]});
//		const boolU3bYFu2 = await DatrixoEquityTokenUNOcx09.removeShareholder.call(addressQUY9EA, {from: accounts[4]});
//		const boolGaxTGOv = await DatrixoEquityTokenUNOcx09.transfer.call(addressNFpcI1z, uintOSNnmQ, {from: accounts[0]});
//		const boolejoksls = await DatrixoEquityTokenUNOcx09.transfer.call(addressRDaWD03, uintM76kZQi, {from: accounts[2]});
//		const boolDvA2Tl1 = await DatrixoEquityTokenUNOcx09.removeShareholder.call(addressCcEimU, {from: accounts[1]});

		await expect(DatrixoEquityTokenUNOcx09.transferFrom.call(addressY3znNud, addressf4r3Z9, uintFOWsfo1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressPbYXSAB = accounts[1]
		const uintom68T80 = BigInt("497")
		const DatrixoEquityTokenjenGBTh = await DatrixoEquityToken.new(addressPbYXSAB, uintom68T80, {from: accounts[5]});
		const addressEEREM8V = "0x0000000000000000000000000000000000000000"
		const uints8KMcEM = BigInt("1360")
//		const boolBadJFs5 = await DatrixoEquityTokenjenGBTh.removeShareholder.call(addressEEREM8V, {from: accounts[1]});
//		const uinteUfNmw = await DatrixoEquityTokenjenGBTh.setStart.call(uints8KMcEM, {from: accounts[1]});
//		await DatrixoEquityTokenjenGBTh.afterStartTime.call({from: accounts[0]});

		await expect(DatrixoEquityTokenjenGBTh.removeShareholder.call(addressEEREM8V, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const address0S0sFu = accounts[0]
		const uintzj1sTuq = BigInt("1390")
		const DatrixoEquityTokenQtrVhs = await DatrixoEquityToken.new(address0S0sFu, uintzj1sTuq, {from: accounts[3]});
		const uintG8HoZ1e = BigInt("410")
		const addressvDN9XHH = "0x0000000000000000000000000000000000000001"
		const uintxvvcA2c = await DatrixoEquityTokenQtrVhs.setStart.call(uintG8HoZ1e, {from: accounts[0]});
		const addressarrayR5i7B52 = await DatrixoEquityTokenQtrVhs.getShareholdersArray.call({from: accounts[2]});
//		await DatrixoEquityTokenQtrVhs.afterStartTime.call({from: accounts[4]});
//		await DatrixoEquityTokenQtrVhs.onlyOwner.call({from: accounts[2]});
//		const boolZmwrOgs = await DatrixoEquityTokenQtrVhs.removeShareholder.call(addressvDN9XHH, {from: accounts[5]});

		assert.equal(addressarrayR5i7B52, )
		await expect(DatrixoEquityTokenQtrVhs.afterStartTime.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressbNDl6Ta = accounts[3]
		const uintFGpq9Vu = BigInt("1446")
		const DatrixoEquityTokenUNOcx09 = await DatrixoEquityToken.new(addressbNDl6Ta, uintFGpq9Vu, {from: accounts[1]});
		const uinttnrWGPO = BigInt("1960")
		const uintocDpWiT = BigInt("51")
		const addressimzlb14 = accounts[3]
		const addressGIbaPh = accounts[3]
		const addressd1m5BYY = accounts[3]
		const uintkGbn6I = BigInt("504")
		const addressKJkmbYe = accounts[3]
		const uintf0vHSyd = BigInt("1626")
		const addressU5993Fz = accounts[2]
		const addressW0UE2N3 = accounts[5]
//		const uintiNIhmuy = await DatrixoEquityTokenUNOcx09.setStart.call(uinttnrWGPO, {from: accounts[3]});
//		const boolKNZFJ8Q = await DatrixoEquityTokenUNOcx09.transferFrom.call(addressGIbaPh, addressimzlb14, uintocDpWiT, {from: accounts[3]});
//		const boolIpcMg3H = await DatrixoEquityTokenUNOcx09.removeShareholder.call(addressd1m5BYY, {from: accounts[3]});
//		await DatrixoEquityTokenUNOcx09.afterStartTime.call({from: accounts[1]});
//		const boolPyXKDjN = await DatrixoEquityTokenUNOcx09.transfer.call(addressKJkmbYe, uintkGbn6I, {from: accounts[0]});
//		const boolMenx2qX = await DatrixoEquityTokenUNOcx09.transfer.call(addressU5993Fz, uintf0vHSyd, {from: accounts[1]});
//		const boolDvA2Tl1 = await DatrixoEquityTokenUNOcx09.removeShareholder.call(addressW0UE2N3, {from: accounts[1]});

		await expect(DatrixoEquityTokenUNOcx09.setStart.call(uinttnrWGPO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})