const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contracteal6DOX = await ERC721.new({from: accounts[2]});
		const operatorXMkTLIJ = accounts[4]
		const ownerqORqXub = accounts[2]
		const operatorwJyRFho = accounts[4]
		const ownerN0Vqnvq = accounts[3]
		const tokenIdd3du517 = BigInt("914")
		const tokenIdEGhoOAj = BigInt("2036")
		const toJP0dGYK = accounts[3]
		const nulliFuimM = await contracteal6DOX.isApprovedForAll.call(ownerqORqXub, operatorXMkTLIJ, {from: accounts[0]});
		const nullN4SdYBq = await contracteal6DOX.isApprovedForAll.call(ownerN0Vqnvq, operatorwJyRFho, {from: accounts[1]});
		const nulls0iLfXE = await contracteal6DOX.getApproved.call(tokenIdd3du517, {from: accounts[0]});
		await contracteal6DOX.approve.call(toJP0dGYK, tokenIdEGhoOAj, {from: accounts[3]});

		assert.equal(nullN4SdYBq, false)
		assert.equal(nulliFuimM, false)
		await expect(contracteal6DOX.getApproved.call(tokenIdd3du517, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractKSwnk7m = await ERC721.new({from: accounts[2]});
		const tokenIdRqrDIwx = BigInt("1341")
		const tokenIdh9cJ1Tj = BigInt("15")
		const toLE2W3dI = accounts[0]
		const fromax3aNqp = accounts[2]
		const tokenIdAAracgb = BigInt("94")
		const toN5Amy0C = accounts[3]
		const nullRWsFOT = await contractKSwnk7m.ownerOf.call(tokenIdRqrDIwx, {from: accounts[1]});
		await contractKSwnk7m.transferFrom.call(fromax3aNqp, toLE2W3dI, tokenIdh9cJ1Tj, {from: accounts[3]});
		await contractKSwnk7m.approve.call(toN5Amy0C, tokenIdAAracgb, {from: accounts[5]});

		await expect(contractKSwnk7m.ownerOf.call(tokenIdRqrDIwx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractmlP577Q = await ERC721.new({from: accounts[2]});
		const approvedIX6jqk = false
		const toJFMsyam = accounts[4]
		const operatormd6y7AZ = accounts[3]
		const ownerQPdQ2lH = accounts[0]
		const operatorstqiRA = accounts[3]
		const ownerC7m5xvx = accounts[2]
		const tokenIdkQs0ggP = BigInt("1457")
		const togd1OLXR = accounts[0]
		const fromx3KysMo = accounts[4]
		const tokenIdWV8ffge = BigInt("86")
		const toJ9gDNn = accounts[2]
		const fromhBQ03s4 = accounts[0]
		await contractmlP577Q.setApprovalForAll.call(toJFMsyam, approvedIX6jqk, {from: accounts[2]});
		const nullDIdqPTX = await contractmlP577Q.isApprovedForAll.call(ownerQPdQ2lH, operatormd6y7AZ, {from: accounts[2]});
		const nulltpb6AqV = await contractmlP577Q.isApprovedForAll.call(ownerC7m5xvx, operatorstqiRA, {from: accounts[4]});
		await contractmlP577Q.safeTransferFrom.call(fromx3KysMo, togd1OLXR, tokenIdkQs0ggP, {from: accounts[1]});
		await contractmlP577Q.safeTransferFrom.call(fromhBQ03s4, toJ9gDNn, tokenIdWV8ffge, {from: accounts[3]});

		assert.equal(nullDIdqPTX, false)
		assert.equal(nulltpb6AqV, false)
		await expect(contractmlP577Q.isApprovedForAll.call(ownerC7m5xvx, operatorstqiRA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractNEGOLUC = await ERC721.new({from: accounts[1]});
		const approvedQ8rFnqF = false
		const toJs22hvu = accounts[0]
		const owner4kbyvh = accounts[3]
		const tokenIdU7RHelt = BigInt("1424")
		const toOHESDCo = accounts[0]
		const fromAt5cCp = accounts[0]
		const tokenIdPahoPdD = BigInt("1307")
		const toK502BiC = accounts[0]
		const ownerOLQzjCX = accounts[1]
		const tokenIdWWGntsd = BigInt("1619")
		await contractNEGOLUC.setApprovalForAll.call(toJs22hvu, approvedQ8rFnqF, {from: "0x0000000000000000000000000000000000000001"});
		const nullNfTYiv0 = await contractNEGOLUC.balanceOf.call(owner4kbyvh, {from: accounts[5]});
		await contractNEGOLUC.safeTransferFrom.call(fromAt5cCp, toOHESDCo, tokenIdU7RHelt, {from: accounts[0]});
		await contractNEGOLUC.approve.call(toK502BiC, tokenIdPahoPdD, {from: accounts[1]});
		const nulls9L3dU = await contractNEGOLUC.balanceOf.call(ownerOLQzjCX, {from: accounts[1]});
		const nullxJ15gtG = await contractNEGOLUC.getApproved.call(tokenIdWWGntsd, {from: accounts[5]});

		assert.equal(nullNfTYiv0, 0)
		await expect(contractNEGOLUC.balanceOf.call(owner4kbyvh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFCzqMjn = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const _dataBeULho = "0x111a0e0e0800121e02071a100d110c18001d0e1a061e010d05"
		const tokenIdhUXrtjq = BigInt("182")
		const toY16fujS = accounts[3]
		const fromDSD9NHh = accounts[1]
		const approvedthdzvEy = false
		const torL2EgE = "0x0000000000000000000000000000000000000001"
		const tokenIdUWotwx = BigInt("942")
		const toPTuubKz = accounts[2]
		const fromU3SculK = accounts[2]
		await contractFCzqMjn.safeTransferFrom.call(fromDSD9NHh, toY16fujS, tokenIdhUXrtjq, _dataBeULho, {from: accounts[1]});
		await contractFCzqMjn.setApprovalForAll.call(torL2EgE, approvedthdzvEy, {from: accounts[0]});
		await contractFCzqMjn.safeTransferFrom.call(fromU3SculK, toPTuubKz, tokenIdUWotwx, {from: accounts[2]});
	});

	it('test for ERC721', async () => {
		const contractk282lUS = await ERC721.new({from: accounts[2]});
		const operatorOjJjbI = accounts[4]
		const ownerwhgGl5y = accounts[2]
		const operatorujHBQEm = accounts[4]
		const ownernoxnN0n = accounts[3]
		const tokenIdof1S2I0 = BigInt("2036")
		const toRnxQUVG = accounts[3]
		const nullVmPS8X7 = await contractk282lUS.isApprovedForAll.call(ownerwhgGl5y, operatorOjJjbI, {from: accounts[0]});
		const nulleJqXkAh = await contractk282lUS.isApprovedForAll.call(ownernoxnN0n, operatorujHBQEm, {from: accounts[1]});
		await contractk282lUS.approve.call(toRnxQUVG, tokenIdof1S2I0, {from: accounts[3]});

		assert.equal(nullVmPS8X7, false)
		assert.equal(nulleJqXkAh, false)
		await expect(contractk282lUS.approve.call(toRnxQUVG, tokenIdof1S2I0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbyfR3P6 = await ERC721.new({from: accounts[3]});
		const tokenId8vbeqK = BigInt("875")
		const toKrxr1Xg = "0x0000000000000000000000000000000000000001"
		const fromvf4IJDu = "0x0000000000000000000000000000000000000001"
		const _datac4k6XSW = "0x05200402111a0b1c0302071a0d060f17200b040f1c020705141c"
		const tokenIdeIU33fm = BigInt("955")
		const toDYXlTBt = accounts[0]
		const fromchqJsNi = accounts[5]
		const tokenIdbeq7xQ = BigInt("1628")
		const toBCNSrIW = accounts[1]
		const approvedMZjpnjo = true
		const toQ20qKpr = accounts[3]
		await contractbyfR3P6.transferFrom.call(fromvf4IJDu, toKrxr1Xg, tokenId8vbeqK, {from: "0x0000000000000000000000000000000000000001"});
		await contractbyfR3P6.safeTransferFrom.call(fromchqJsNi, toDYXlTBt, tokenIdeIU33fm, _datac4k6XSW, {from: accounts[1]});
		await contractbyfR3P6.approve.call(toBCNSrIW, tokenIdbeq7xQ, {from: accounts[4]});
		await contractbyfR3P6.setApprovalForAll.call(toQ20qKpr, approvedMZjpnjo, {from: accounts[5]});

		await expect(contractbyfR3P6.transferFrom.call(fromvf4IJDu, toKrxr1Xg, tokenId8vbeqK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractjSnNNhf = await ERC721.new({from: accounts[4]});
		const approvedBdyAqxw = false
		const tobhTOa7G = accounts[1]
		const tokenIdCRxst8c = BigInt("1945")
		const tom6ocz0 = accounts[2]
		const fromLkB7DIW = accounts[3]
		const tokenIdBLHwI0 = BigInt("2025")
		const toENXxx0F = accounts[2]
		await contractjSnNNhf.setApprovalForAll.call(tobhTOa7G, approvedBdyAqxw, {from: accounts[1]});
		await contractjSnNNhf.transferFrom.call(fromLkB7DIW, tom6ocz0, tokenIdCRxst8c, {from: accounts[0]});
		await contractjSnNNhf.approve.call(toENXxx0F, tokenIdBLHwI0, {from: accounts[4]});

		await expect(contractjSnNNhf.setApprovalForAll.call(tobhTOa7G, approvedBdyAqxw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})