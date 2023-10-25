const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractmRFoXe = await ERC721.new({from: accounts[0]});
		const tokenIdYu7imhM = BigInt("1828")
		const toUON2MDL = accounts[5]
		const frompL6LTBE = accounts[4]
		const tokenIdo9gWrVm = BigInt("102")
		const tokenIdDa1CtIm = BigInt("1167")
		const toPAJbWuG = accounts[2]
		const fromonCGcu = accounts[2]
		const approvedwm31YD = false
		const totSqOXl1 = accounts[0]
		const _datatJt8jHl = "0x0c17111a0c090a1c111a"
		const tokenIdWocpwhS = BigInt("311")
		const toHcVofiP = accounts[2]
		const fromPECYuXx = accounts[3]
		await contractmRFoXe.safeTransferFrom.call(frompL6LTBE, toUON2MDL, tokenIdYu7imhM, {from: accounts[5]});
		const nullr20HOS = await contractmRFoXe.getApproved.call(tokenIdo9gWrVm, {from: accounts[0]});
		await contractmRFoXe.safeTransferFrom.call(fromonCGcu, toPAJbWuG, tokenIdDa1CtIm, {from: accounts[2]});
		await contractmRFoXe.setApprovalForAll.call(totSqOXl1, approvedwm31YD, {from: accounts[0]});
		await contractmRFoXe.safeTransferFrom.call(fromPECYuXx, toHcVofiP, tokenIdWocpwhS, _datatJt8jHl, {from: accounts[5]});

		await expect(contractmRFoXe.safeTransferFrom.call(frompL6LTBE, toUON2MDL, tokenIdYu7imhM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractoXhHhlX = await ERC721.new({from: accounts[3]});
		const tokenIdIkhCCR3 = BigInt("1881")
		const tojK04wZl = accounts[2]
		const tokenIdxN7UJkq = BigInt("550")
		const totQQtyjT = accounts[3]
		const fromQtaLYnx = accounts[4]
		const tokenIdAZAGYDN = BigInt("384")
		await contractoXhHhlX.approve.call(tojK04wZl, tokenIdIkhCCR3, {from: accounts[4]});
		await contractoXhHhlX.safeTransferFrom.call(fromQtaLYnx, totQQtyjT, tokenIdxN7UJkq, {from: accounts[1]});
		const nullCv8SbCH = await contractoXhHhlX.getApproved.call(tokenIdAZAGYDN, {from: accounts[2]});

		await expect(contractoXhHhlX.approve.call(tojK04wZl, tokenIdIkhCCR3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractdCErA70 = await ERC721.new({from: accounts[5]});
		const operatorZVNo3Sk = "0x0000000000000000000000000000000000000001"
		const ownerDAWflZ0 = accounts[3]
		const operatorItTPson = accounts[1]
		const ownerapckmlO = accounts[0]
		const approvediuVw5eY = true
		const tonkmoqLV = accounts[3]
		const nullu5qlBj9 = await contractdCErA70.isApprovedForAll.call(ownerDAWflZ0, operatorZVNo3Sk, {from: accounts[0]});
		const nullAj9w8Ik = await contractdCErA70.isApprovedForAll.call(ownerapckmlO, operatorItTPson, {from: accounts[3]});
		await contractdCErA70.setApprovalForAll.call(tonkmoqLV, approvediuVw5eY, {from: accounts[0]});

		assert.equal(nullAj9w8Ik, false)
		assert.equal(nullu5qlBj9, false)
	});

	it('test for ERC721', async () => {
		const contracthQAUR0 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const approved4CbUOr = false
		const toVdn4T4J = accounts[3]
		const tokenIdXMOQDio = BigInt("937")
		const torlmwHf2 = accounts[0]
		const _dataS0PSYJh = "0x171e050d1113061d18171b12020c001d0405111e0c0720111f1d1b11131c"
		const tokenIdSGf7t0E = BigInt("912")
		const tohllC8lw = accounts[1]
		const fromU2w4sk6 = accounts[0]
		const approvedLlI1lCN = false
		const toJN8FsBV = accounts[4]
		await contracthQAUR0.setApprovalForAll.call(toVdn4T4J, approved4CbUOr, {from: accounts[0]});
		await contracthQAUR0.approve.call(torlmwHf2, tokenIdXMOQDio, {from: accounts[1]});
		await contracthQAUR0.safeTransferFrom.call(fromU2w4sk6, tohllC8lw, tokenIdSGf7t0E, _dataS0PSYJh, {from: accounts[3]});
		await contracthQAUR0.setApprovalForAll.call(toJN8FsBV, approvedLlI1lCN, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractZxdp2yR = await ERC721.new({from: accounts[5]});
		const operatormm7fIA = "0x0000000000000000000000000000000000000001"
		const ownerYZjztIU = accounts[3]
		const approvedzMmflc = true
		const toFmzci4Y = accounts[0]
		const operatorfen2X5Q = accounts[1]
		const ownerprapihl = accounts[0]
		const tokenIdQTzYGv4 = BigInt("1099")
		const toN24DX8o = accounts[3]
		const fromfBgozf6 = accounts[3]
		const approvedKPtX4bh = true
		const toAZejwLg = accounts[3]
		const nullgjplIH = await contractZxdp2yR.isApprovedForAll.call(ownerYZjztIU, operatormm7fIA, {from: accounts[0]});
		await contractZxdp2yR.setApprovalForAll.call(toFmzci4Y, approvedzMmflc, {from: accounts[1]});
		const nullOYj3TwB = await contractZxdp2yR.isApprovedForAll.call(ownerprapihl, operatorfen2X5Q, {from: accounts[3]});
		await contractZxdp2yR.transferFrom.call(fromfBgozf6, toN24DX8o, tokenIdQTzYGv4, {from: accounts[3]});
		await contractZxdp2yR.setApprovalForAll.call(toAZejwLg, approvedKPtX4bh, {from: accounts[0]});

		assert.equal(nullOYj3TwB, false)
		assert.equal(nullgjplIH, false)
		await expect(contractZxdp2yR.isApprovedForAll.call(ownerprapihl, operatorfen2X5Q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractWkHTWsJ = await ERC721.new({from: accounts[2]});
		const approvedsgrSOLU = true
		const torgX6fZI = accounts[3]
		const approvedDWzUlkX = true
		const tolY18gBg = accounts[0]
		const approvedqkn2Atx = false
		const tortYZ3fR = "0x0000000000000000000000000000000000000001"
		const tokenIdMJvHUQ4 = BigInt("949")
		const tonaKWi1 = "0x0000000000000000000000000000000000000001"
		await contractWkHTWsJ.setApprovalForAll.call(torgX6fZI, approvedsgrSOLU, {from: accounts[1]});
		await contractWkHTWsJ.setApprovalForAll.call(tolY18gBg, approvedDWzUlkX, {from: accounts[0]});
		await contractWkHTWsJ.setApprovalForAll.call(tortYZ3fR, approvedqkn2Atx, {from: accounts[0]});
		await contractWkHTWsJ.approve.call(tonaKWi1, tokenIdMJvHUQ4, {from: accounts[0]});

		await expect(contractWkHTWsJ.setApprovalForAll.call(torgX6fZI, approvedsgrSOLU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZ4IOJg = await ERC721.new({from: accounts[5]});
		const operatorfmOvJK = "0x0000000000000000000000000000000000000000"
		const ownerF1FxNDn = accounts[3]
		const tokenIdLGRNDrs = BigInt("1590")
		const approvedZOk0DYK = false
		const todMss7LK = accounts[3]
		const operatoreU5VN18 = accounts[1]
		const ownerNxxDOxi = accounts[0]
		const approvedPb4QDCK = true
		const toR9RC3fv = accounts[3]
		const nullLshdmSU = await contractZ4IOJg.isApprovedForAll.call(ownerF1FxNDn, operatorfmOvJK, {from: accounts[0]});
		const nullJokyug = await contractZ4IOJg.getApproved.call(tokenIdLGRNDrs, {from: accounts[0]});
		await contractZ4IOJg.setApprovalForAll.call(todMss7LK, approvedZOk0DYK, {from: accounts[0]});
		const nullXW3ivVY = await contractZ4IOJg.isApprovedForAll.call(ownerNxxDOxi, operatoreU5VN18, {from: accounts[3]});
		await contractZ4IOJg.setApprovalForAll.call(toR9RC3fv, approvedPb4QDCK, {from: accounts[0]});

		assert.equal(nullLshdmSU, false)
		await expect(contractZ4IOJg.getApproved.call(tokenIdLGRNDrs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractasvqpaT = await ERC721.new({from: accounts[1]});
		const ownerjSblmk = accounts[2]
		const tokenIdZ1JDz1b = BigInt("487")
		const toJCZ1QY0 = accounts[3]
		const fromADvyVtT = accounts[5]
		const nullpEFsNSA = await contractasvqpaT.balanceOf.call(ownerjSblmk, {from: accounts[4]});
		await contractasvqpaT.transferFrom.call(fromADvyVtT, toJCZ1QY0, tokenIdZ1JDz1b, {from: accounts[4]});

		assert.equal(nullpEFsNSA, 0)
		await expect(contractasvqpaT.transferFrom.call(fromADvyVtT, toJCZ1QY0, tokenIdZ1JDz1b, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractcvs16E3 = await ERC721.new({from: accounts[5]});
		const operatore7obLk = "0x00000000000000000000000000000000000000-1"
		const ownerzXo6VLv = accounts[3]
		const tokenIdWWWmYX1 = BigInt("825")
		const _datalnBTNOF = "0x09151105160500111c0d0c130a101f13"
		const tokenIdZF3pkjN = BigInt("1532")
		const topDQGLaF = "0x0000000000000000000000000000000000000001"
		const fromXELJKps = accounts[1]
		const nullKgZ88av = await contractcvs16E3.isApprovedForAll.call(ownerzXo6VLv, operatore7obLk, {from: accounts[0]});
		const nullYaPYVLE = await contractcvs16E3.ownerOf.call(tokenIdWWWmYX1, {from: accounts[2]});
		await contractcvs16E3.safeTransferFrom.call(fromXELJKps, topDQGLaF, tokenIdZF3pkjN, _datalnBTNOF, {from: accounts[4]});

		await expect(contractcvs16E3.isApprovedForAll.call(ownerzXo6VLv, operatore7obLk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})