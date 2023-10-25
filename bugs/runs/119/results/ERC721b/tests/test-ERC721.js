const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractFIcFkh = await ERC721.new({from: accounts[0]});
		const _dataQeouOd1 = "0x0619050a1517081013051909111c1f061b0f1b"
		const tokenIdUaD23aE = BigInt("99")
		const tocpfprzV = accounts[4]
		const fromvH3EhpL = accounts[2]
		const tokenIdRex1hUv = BigInt("1004")
		const approvedOvmnFjA = true
		const topOizGjQ = accounts[3]
		const tokenIdQhHy4P = BigInt("197")
		const toxgtkEKd = accounts[2]
		const tokenIdbwD5cRH = BigInt("692")
		const tokenIdA0XWYe9 = BigInt("349")
		const toTPUDsyz = accounts[2]
		await contractFIcFkh.safeTransferFrom.call(fromvH3EhpL, tocpfprzV, tokenIdUaD23aE, _dataQeouOd1, {from: accounts[1]});
		const nullfYG1CkE = await contractFIcFkh.getApproved.call(tokenIdRex1hUv, {from: accounts[5]});
		await contractFIcFkh.setApprovalForAll.call(topOizGjQ, approvedOvmnFjA, {from: accounts[0]});
		await contractFIcFkh.approve.call(toxgtkEKd, tokenIdQhHy4P, {from: accounts[0]});
		const nullIhqmEfS = await contractFIcFkh.ownerOf.call(tokenIdbwD5cRH, {from: accounts[2]});
		await contractFIcFkh.approve.call(toTPUDsyz, tokenIdA0XWYe9, {from: accounts[2]});

		await expect(contractFIcFkh.safeTransferFrom.call(fromvH3EhpL, tocpfprzV, tokenIdUaD23aE, _dataQeouOd1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractypJirAn = await ERC721.new({from: accounts[2]});
		const operatorhtcFX0p = accounts[3]
		const ownerP1bW0v8 = accounts[4]
		const tokenIddqfUTtU = BigInt("1775")
		const operatorsX7ffhJ = accounts[1]
		const ownerbXpzmk = accounts[1]
		const tokenIdVJZtdm3 = BigInt("51")
		const toXsBiSwk = "0x0000000000000000000000000000000000000001"
		const fromJbEfovH = accounts[3]
		const nullC4wWCpQ = await contractypJirAn.isApprovedForAll.call(ownerP1bW0v8, operatorhtcFX0p, {from: accounts[0]});
		const nullIX5I9F = await contractypJirAn.ownerOf.call(tokenIddqfUTtU, {from: accounts[3]});
		const nullnT03Bo7 = await contractypJirAn.isApprovedForAll.call(ownerbXpzmk, operatorsX7ffhJ, {from: accounts[1]});
		await contractypJirAn.transferFrom.call(fromJbEfovH, toXsBiSwk, tokenIdVJZtdm3, {from: accounts[2]});

		assert.equal(nullC4wWCpQ, false)
		await expect(contractypJirAn.ownerOf.call(tokenIddqfUTtU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractCKgLW8o = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const owner2l8ixH = accounts[4]
		const tokenIddIseB2K = BigInt("1375")
		const _dataMJ2Wms3 = "0x180f061e0d1e0a0e03191912200c172001020201"
		const tokenIdUU6L8bk = BigInt("1769")
		const toEnVIUBx = accounts[0]
		const fromP0naE4V = accounts[0]
		const tokenIdbvFR5rl = BigInt("608")
		const toriR5b6 = accounts[3]
		const fromBsd0Zdj = accounts[5]
		const nulluqcEfsI = await contractCKgLW8o.balanceOf.call(owner2l8ixH, {from: accounts[2]});
		const nulluWbDWaS = await contractCKgLW8o.ownerOf.call(tokenIddIseB2K, {from: accounts[1]});
		await contractCKgLW8o.safeTransferFrom.call(fromP0naE4V, toEnVIUBx, tokenIdUU6L8bk, _dataMJ2Wms3, {from: accounts[4]});
		await contractCKgLW8o.transferFrom.call(fromBsd0Zdj, toriR5b6, tokenIdbvFR5rl, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractTTK5nx = await ERC721.new({from: accounts[1]});
		const operatorOIxPIM2 = accounts[0]
		const ownervKuBZzf = accounts[2]
		const tokenIdEc0BmxV = BigInt("257")
		const tohpzLtx = accounts[3]
		const fromgi4AGjB = accounts[3]
		const nullFKIf42Z = await contractTTK5nx.isApprovedForAll.call(ownervKuBZzf, operatorOIxPIM2, {from: accounts[5]});
		await contractTTK5nx.transferFrom.call(fromgi4AGjB, tohpzLtx, tokenIdEc0BmxV, {from: accounts[5]});

		assert.equal(nullFKIf42Z, false)
		await expect(contractTTK5nx.transferFrom.call(fromgi4AGjB, tohpzLtx, tokenIdEc0BmxV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractpz5o02G = await ERC721.new({from: accounts[0]});
		const approvedOqHCcfR = true
		const totHYuqr3 = accounts[4]
		const tokenIdUxGlIH5 = BigInt("1878")
		const toca28zMk = accounts[0]
		const fromK4NS39a = accounts[3]
		await contractpz5o02G.setApprovalForAll.call(totHYuqr3, approvedOqHCcfR, {from: accounts[4]});
		await contractpz5o02G.transferFrom.call(fromK4NS39a, toca28zMk, tokenIdUxGlIH5, {from: accounts[2]});

		await expect(contractpz5o02G.setApprovalForAll.call(totHYuqr3, approvedOqHCcfR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractDRsdX5F = await ERC721.new({from: accounts[4]});
		const tokenIdopuXKBn = BigInt("386")
		const operatorS2hKA29 = accounts[5]
		const ownerTaQY9nG = accounts[2]
		const tokenIdend7q8 = BigInt("1725")
		const toF7KsBPl = "0x0000000000000000000000000000000000000001"
		const tokenIdiLB0olo = BigInt("1861")
		const nullnnLwEL5 = await contractDRsdX5F.getApproved.call(tokenIdopuXKBn, {from: accounts[4]});
		const nullPWhW5xZ = await contractDRsdX5F.isApprovedForAll.call(ownerTaQY9nG, operatorS2hKA29, {from: accounts[2]});
		await contractDRsdX5F.approve.call(toF7KsBPl, tokenIdend7q8, {from: accounts[3]});
		const nulli8kdxPi = await contractDRsdX5F.getApproved.call(tokenIdiLB0olo, {from: accounts[2]});

		await expect(contractDRsdX5F.getApproved.call(tokenIdopuXKBn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractl8K1ppX = await ERC721.new({from: accounts[2]});
		const operatordAXdQjR = accounts[3]
		const ownerzC2uzD = accounts[4]
		const tokenIddM5lSw7 = BigInt("2000")
		const toC1RMFlt = accounts[3]
		const tokenIdb5LEHOi = BigInt("1775")
		const operatorIQzcigd = accounts[2]
		const ownerjk7QtbM = accounts[1]
		const tokenIdqQ5pkGv = BigInt("51")
		const towErqrpB = "0x0000000000000000000000000000000000000001"
		const fromj9V3Epl = accounts[3]
		const nullxMgeHon = await contractl8K1ppX.isApprovedForAll.call(ownerzC2uzD, operatordAXdQjR, {from: accounts[0]});
		await contractl8K1ppX.approve.call(toC1RMFlt, tokenIddM5lSw7, {from: accounts[4]});
		const nullUqj0iSw = await contractl8K1ppX.ownerOf.call(tokenIdb5LEHOi, {from: accounts[3]});
		const nullOPWP1nG = await contractl8K1ppX.isApprovedForAll.call(ownerjk7QtbM, operatorIQzcigd, {from: accounts[1]});
		await contractl8K1ppX.transferFrom.call(fromj9V3Epl, towErqrpB, tokenIdqQ5pkGv, {from: accounts[2]});

		assert.equal(nullxMgeHon, false)
		await expect(contractl8K1ppX.approve.call(toC1RMFlt, tokenIddM5lSw7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractDfvACEF = await ERC721.new({from: accounts[2]});
		const approvedYL2tAG7 = false
		const to42iYdA = accounts[3]
		const operatorNDIfkM = accounts[3]
		const ownermJaK8e = accounts[4]
		const tokenIdoTH1uHW = BigInt("1775")
		const operatorTvnzrPD = accounts[2]
		const ownerCgzteQ9 = accounts[1]
		const tokenIdOh2vVtD = BigInt("51")
		const toshVPKWI = "0x0000000000000000000000000000000000000001"
		const fromhOXo6QA = accounts[3]
		await contractDfvACEF.setApprovalForAll.call(to42iYdA, approvedYL2tAG7, {from: accounts[2]});
		const nullJxpSGt = await contractDfvACEF.isApprovedForAll.call(ownermJaK8e, operatorNDIfkM, {from: accounts[0]});
		const nullCXw8EoR = await contractDfvACEF.ownerOf.call(tokenIdoTH1uHW, {from: accounts[3]});
		const nullYMS2Dr0 = await contractDfvACEF.isApprovedForAll.call(ownerCgzteQ9, operatorTvnzrPD, {from: accounts[1]});
		await contractDfvACEF.transferFrom.call(fromhOXo6QA, toshVPKWI, tokenIdOh2vVtD, {from: accounts[2]});

		assert.equal(nullJxpSGt, false)
		await expect(contractDfvACEF.isApprovedForAll.call(ownermJaK8e, operatorNDIfkM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractw0QAuYX = await ERC721.new({from: accounts[1]});
		const tokenIdNTYYIBq = BigInt("541")
		const todojkfqb = accounts[1]
		const fromFpFgsqC = accounts[0]
		const operatormwVADAr = accounts[2]
		const ownerMy0PZqc = accounts[3]
		const tokenIdH6nlvuH = BigInt("1423")
		await contractw0QAuYX.safeTransferFrom.call(fromFpFgsqC, todojkfqb, tokenIdNTYYIBq, {from: accounts[1]});
		const nullzCdeyl5 = await contractw0QAuYX.isApprovedForAll.call(ownerMy0PZqc, operatormwVADAr, {from: accounts[0]});
		const nullqlLcPfa = await contractw0QAuYX.getApproved.call(tokenIdH6nlvuH, {from: accounts[4]});

		await expect(contractw0QAuYX.safeTransferFrom.call(fromFpFgsqC, todojkfqb, tokenIdNTYYIBq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZzwvKTi = await ERC721.new({from: accounts[1]});
		const ownerlhOyHKk = "0x0000000000000000000000000000000000000001"
		const tokenIdftOGc1 = BigInt("1215")
		const tokenIdCFWDVji = BigInt("784")
		const toVnXdcRC = "0x0000000000000000000000000000000000000001"
		const operatorq8P9iqP = accounts[0]
		const owneruKeDUkU = accounts[3]
		const nullNmH89ZN = await contractZzwvKTi.balanceOf.call(ownerlhOyHKk, {from: accounts[0]});
		const nullkxD0sFP = await contractZzwvKTi.ownerOf.call(tokenIdftOGc1, {from: accounts[0]});
		await contractZzwvKTi.approve.call(toVnXdcRC, tokenIdCFWDVji, {from: accounts[2]});
		const nulllbdReFG = await contractZzwvKTi.isApprovedForAll.call(owneruKeDUkU, operatorq8P9iqP, {from: accounts[5]});

		assert.equal(nullNmH89ZN, 0)
		await expect(contractZzwvKTi.ownerOf.call(tokenIdftOGc1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})