const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractIaVDAJv = await ERC721.new({from: accounts[0]});
		const tokenIdz92n7Xv = BigInt("487")
		const tokenIdEgChnqW = BigInt("884")
		const tokenIdU7W37fl = BigInt("860")
		const toaJFwZrr = accounts[4]
		const tokenIdHewOgUt = BigInt("1440")
		const toVaYlOMG = "0x0000000000000000000000000000000000000001"
		const fromz5Cc1bR = accounts[3]
		const operatorQHFJFAd = accounts[1]
		const ownerJkj65EW = accounts[4]
		const approvedMhZVvys = false
		const toUqUnFzm = accounts[2]
		const nullBTqRGpS = await contractIaVDAJv.ownerOf.call(tokenIdz92n7Xv, {from: accounts[2]});
		const nullUUlnZXM = await contractIaVDAJv.ownerOf.call(tokenIdEgChnqW, {from: accounts[3]});
		await contractIaVDAJv.approve.call(toaJFwZrr, tokenIdU7W37fl, {from: accounts[1]});
		await contractIaVDAJv.transferFrom.call(fromz5Cc1bR, toVaYlOMG, tokenIdHewOgUt, {from: accounts[1]});
		const nullNPSCd3c = await contractIaVDAJv.isApprovedForAll.call(ownerJkj65EW, operatorQHFJFAd, {from: "0x0000000000000000000000000000000000000001"});
		await contractIaVDAJv.setApprovalForAll.call(toUqUnFzm, approvedMhZVvys, {from: accounts[5]});

		await expect(contractIaVDAJv.ownerOf.call(tokenIdz92n7Xv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractEI74p2j = await ERC721.new({from: accounts[2]});
		const tokenIdam8E7kK = BigInt("1567")
		const toJ6NNntR = accounts[1]
		const fromiD97afs = accounts[4]
		const tokenIdW9Ar79y = BigInt("1469")
		const toGX4wG6Y = accounts[5]
		const frompQFyS5s = accounts[3]
		const tokenIdz3A4AW9 = BigInt("1371")
		await contractEI74p2j.transferFrom.call(fromiD97afs, toJ6NNntR, tokenIdam8E7kK, {from: accounts[4]});
		await contractEI74p2j.safeTransferFrom.call(frompQFyS5s, toGX4wG6Y, tokenIdW9Ar79y, {from: accounts[1]});
		const nullsysYIqi = await contractEI74p2j.ownerOf.call(tokenIdz3A4AW9, {from: accounts[0]});

		await expect(contractEI74p2j.transferFrom.call(fromiD97afs, toJ6NNntR, tokenIdam8E7kK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracti9Y1vL8 = await ERC721.new({from: accounts[5]});
		const _dataq7XNeWb = "0x17040a150d0f101402060d0b0f1119190b0005161c0e1b17060f1215"
		const tokenIdRD05Wj = BigInt("1285")
		const tooXhHGfA = accounts[2]
		const frompO216fw = accounts[3]
		const tokenIdV8t2vix = BigInt("665")
		const tojDwgatk = accounts[3]
		await contracti9Y1vL8.safeTransferFrom.call(frompO216fw, tooXhHGfA, tokenIdRD05Wj, _dataq7XNeWb, {from: accounts[1]});
		await contracti9Y1vL8.approve.call(tojDwgatk, tokenIdV8t2vix, {from: accounts[4]});

		await expect(contracti9Y1vL8.safeTransferFrom.call(frompO216fw, tooXhHGfA, tokenIdRD05Wj, _dataq7XNeWb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractcb1KLwM = await ERC721.new({from: accounts[2]});
		const approvedTcUMvIZ = false
		const tonLvcUee = accounts[5]
		const operatorwJnrTp = accounts[0]
		const ownerco9hiNJ = accounts[4]
		const operatorexezPJp = "0x0000000000000000000000000000000000000001"
		const owneruYfRZAY = "0x0000000000000000000000000000000000000001"
		const tokenIdcaf47Z2 = BigInt("1920")
		const toUJ0jR2H = accounts[2]
		const fromIfhwvB7 = accounts[0]
		await contractcb1KLwM.setApprovalForAll.call(tonLvcUee, approvedTcUMvIZ, {from: accounts[4]});
		const nulltgT7utC = await contractcb1KLwM.isApprovedForAll.call(ownerco9hiNJ, operatorwJnrTp, {from: accounts[0]});
		const null9nZwFD = await contractcb1KLwM.isApprovedForAll.call(owneruYfRZAY, operatorexezPJp, {from: accounts[2]});
		await contractcb1KLwM.transferFrom.call(fromIfhwvB7, toUJ0jR2H, tokenIdcaf47Z2, {from: accounts[4]});

		assert.equal(null9nZwFD, false)
		assert.equal(nulltgT7utC, false)
		await expect(contractcb1KLwM.isApprovedForAll.call(owneruYfRZAY, operatorexezPJp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractT019wyF = await ERC721.new({from: accounts[3]});
		const tokenIdyJyvYr1 = BigInt("1356")
		const tokenIdbyzjsP = BigInt("631")
		const nullKeMK3ge = await contractT019wyF.getApproved.call(tokenIdyJyvYr1, {from: accounts[0]});
		const nullpIAsHKg = await contractT019wyF.getApproved.call(tokenIdbyzjsP, {from: accounts[4]});

		await expect(contractT019wyF.getApproved.call(tokenIdyJyvYr1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractoAVPPh = await ERC721.new({from: accounts[3]});
		const tokenIdYOQixi8 = BigInt("362")
		const toFwlD0oC = "0x0000000000000000000000000000000000000001"
		const frompyKLRJP = accounts[5]
		const tokenIdo8yFmGD = BigInt("1055")
		await contractoAVPPh.safeTransferFrom.call(frompyKLRJP, toFwlD0oC, tokenIdYOQixi8, {from: accounts[2]});
		const nullMBD2oW = await contractoAVPPh.ownerOf.call(tokenIdo8yFmGD, {from: accounts[4]});

		await expect(contractoAVPPh.safeTransferFrom.call(frompyKLRJP, toFwlD0oC, tokenIdYOQixi8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractmfIPugM = await ERC721.new({from: accounts[1]});
		const approvedVw0XBHW = false
		const toDRdq0MO = accounts[5]
		const approvedAZxmZGj = false
		const tovziwg0S = accounts[1]
		const tokenIdxJNTeKW = BigInt("167")
		await contractmfIPugM.setApprovalForAll.call(toDRdq0MO, approvedVw0XBHW, {from: accounts[4]});
		await contractmfIPugM.setApprovalForAll.call(tovziwg0S, approvedAZxmZGj, {from: accounts[1]});
		const nullirKXsNF = await contractmfIPugM.getApproved.call(tokenIdxJNTeKW, {from: accounts[1]});

		await expect(contractmfIPugM.setApprovalForAll.call(toDRdq0MO, approvedVw0XBHW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracto9eO500 = await ERC721.new({from: accounts[1]});
		const ownerOfoyZ4 = accounts[2]
		const tokenIdhgVQ34W = BigInt("283")
		const top82hgBB = accounts[0]
		const frommF6sZoS = accounts[1]
		const approvedKokKxu7 = false
		const toUqRhx57 = accounts[1]
		const ownerSA6x3QE = accounts[0]
		const nullgwRd4ft = await contracto9eO500.balanceOf.call(ownerOfoyZ4, {from: accounts[3]});
		await contracto9eO500.safeTransferFrom.call(frommF6sZoS, top82hgBB, tokenIdhgVQ34W, {from: accounts[4]});
		await contracto9eO500.setApprovalForAll.call(toUqRhx57, approvedKokKxu7, {from: accounts[2]});
		const nullS9amgbQ = await contracto9eO500.balanceOf.call(ownerSA6x3QE, {from: accounts[1]});

		assert.equal(nullgwRd4ft, 0)
		await expect(contracto9eO500.safeTransferFrom.call(frommF6sZoS, top82hgBB, tokenIdhgVQ34W, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractWJe91og = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdSp058xw = BigInt("1700")
		const toRRT5W2m = "0x0000000000000000000000000000000000000001"
		const from4jzExc = accounts[1]
		const tokenIdbi62BbN = BigInt("287")
		const ownerlH4FFnd = accounts[3]
		await contractWJe91og.safeTransferFrom.call(from4jzExc, toRRT5W2m, tokenIdSp058xw, {from: accounts[4]});
		const nulls125a9B = await contractWJe91og.getApproved.call(tokenIdbi62BbN, {from: accounts[4]});
		const nullhPwh1eL = await contractWJe91og.balanceOf.call(ownerlH4FFnd, {from: accounts[1]});
	});

	it('test for ERC721', async () => {
		const contractpk3Hjsj = await ERC721.new({from: accounts[5]});
		const tokenIdBZ8aizV = BigInt("1407")
		const tohnkKzHW = accounts[4]
		const _dataJmrdBRM = "0x17040a150d0f101402060d0b0f1119190b0005161c0e1b17060f1215"
		const tokenIdTgJ0fe = BigInt("1285")
		const toiXJNzwY = accounts[2]
		const fromWft5oic = accounts[4]
		const tokenIdx7QgXyv = BigInt("5")
		const _datalBY8Di = "0x1f0716080e"
		const tokenIdEY3FGkF = BigInt("1362")
		const tolp6XOv5 = accounts[3]
		const fromSVFTRH9 = accounts[1]
		const tokenIdVyS6dsf = BigInt("665")
		const toADRsiOU = accounts[3]
		const tokenIdfZ8g45n = BigInt("1272")
		const toCFX2U1a = accounts[1]
		const fromB1xF4BO = "0x0000000000000000000000000000000000000001"
		await contractpk3Hjsj.approve.call(tohnkKzHW, tokenIdBZ8aizV, {from: accounts[0]});
		await contractpk3Hjsj.safeTransferFrom.call(fromWft5oic, toiXJNzwY, tokenIdTgJ0fe, _dataJmrdBRM, {from: accounts[1]});
		const nullQd7EOFq = await contractpk3Hjsj.ownerOf.call(tokenIdx7QgXyv, {from: accounts[1]});
		await contractpk3Hjsj.safeTransferFrom.call(fromSVFTRH9, tolp6XOv5, tokenIdEY3FGkF, _datalBY8Di, {from: accounts[1]});
		await contractpk3Hjsj.approve.call(toADRsiOU, tokenIdVyS6dsf, {from: accounts[4]});
		await contractpk3Hjsj.safeTransferFrom.call(fromB1xF4BO, toCFX2U1a, tokenIdfZ8g45n, {from: accounts[4]});

		await expect(contractpk3Hjsj.approve.call(tohnkKzHW, tokenIdBZ8aizV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})