const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractnjBN7Or = await ERC721.new({from: accounts[2]});
		const ownerXs844p8 = accounts[2]
		const operatorlqAFV7R = accounts[4]
		const ownerf4FC7Vs = accounts[4]
		const tokenIdlm0HP4b = BigInt("101")
		const tolRZy7nZ = accounts[2]
		const frombTksi81 = "0x0000000000000000000000000000000000000001"
		const nullwTKSqZY = await contractnjBN7Or.balanceOf.call(ownerXs844p8, {from: accounts[3]});
		const nullr4ZZJRf = await contractnjBN7Or.isApprovedForAll.call(ownerf4FC7Vs, operatorlqAFV7R, {from: accounts[5]});
		await contractnjBN7Or.safeTransferFrom.call(frombTksi81, tolRZy7nZ, tokenIdlm0HP4b, {from: accounts[2]});

		assert.equal(nullr4ZZJRf, false)
		assert.equal(nullwTKSqZY, 0)
		await expect(contractnjBN7Or.safeTransferFrom.call(frombTksi81, tolRZy7nZ, tokenIdlm0HP4b, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractARa7UNJ = await ERC721.new({from: accounts[1]});
		const tokenIdhrGoNBA = BigInt("686")
		const approvedxOeQXqR = false
		const toMbgA73M = accounts[0]
		const tokenIdtZmgUHy = BigInt("1907")
		const nullG3XGuki = await contractARa7UNJ.getApproved.call(tokenIdhrGoNBA, {from: accounts[0]});
		await contractARa7UNJ.setApprovalForAll.call(toMbgA73M, approvedxOeQXqR, {from: accounts[2]});
		const nullHVF9xl = await contractARa7UNJ.ownerOf.call(tokenIdtZmgUHy, {from: accounts[3]});

		await expect(contractARa7UNJ.getApproved.call(tokenIdhrGoNBA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractNC3P7o = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerlNZHAkv = accounts[4]
		const tokenIdEFrLgOn = BigInt("1181")
		const toVRFFHqN = accounts[1]
		const fromxZgSgK1 = "0x0000000000000000000000000000000000000001"
		const tokenIdGct951J = BigInt("245")
		const tohV3bXVV = accounts[5]
		const fromDMk6nQD = accounts[1]
		const tokenIdAt6R4zg = BigInt("1132")
		const toduy6IMa = accounts[4]
		const fromuFB8WAv = accounts[0]
		const tokenId5GgL6I = BigInt("909")
		const toyrHpgWL = accounts[4]
		const nullU8Orh8Y = await contractNC3P7o.balanceOf.call(ownerlNZHAkv, {from: "0x0000000000000000000000000000000000000001"});
		await contractNC3P7o.safeTransferFrom.call(fromxZgSgK1, toVRFFHqN, tokenIdEFrLgOn, {from: accounts[5]});
		await contractNC3P7o.safeTransferFrom.call(fromDMk6nQD, tohV3bXVV, tokenIdGct951J, {from: accounts[0]});
		await contractNC3P7o.transferFrom.call(fromuFB8WAv, toduy6IMa, tokenIdAt6R4zg, {from: accounts[0]});
		await contractNC3P7o.approve.call(toyrHpgWL, tokenId5GgL6I, {from: accounts[5]});
	});

	it('test for ERC721', async () => {
		const contractGKwerOu = await ERC721.new({from: accounts[2]});
		const approveda3EOcRF = false
		const toMnQ5Yu1 = "0x0000000000000000000000000000000000000001"
		const tokenIdLa5LYx2 = BigInt("1470")
		const tokenIdM6jqBGH = BigInt("1006")
		const tokenIdnuvFdqr = BigInt("568")
		await contractGKwerOu.setApprovalForAll.call(toMnQ5Yu1, approveda3EOcRF, {from: "0x0000000000000000000000000000000000000001"});
		const nullz6YPlm4 = await contractGKwerOu.ownerOf.call(tokenIdLa5LYx2, {from: accounts[4]});
		const nullAm7XLmr = await contractGKwerOu.ownerOf.call(tokenIdM6jqBGH, {from: accounts[1]});
		const nullaRwAdAF = await contractGKwerOu.getApproved.call(tokenIdnuvFdqr, {from: accounts[1]});

		await expect(contractGKwerOu.setApprovalForAll.call(toMnQ5Yu1, approveda3EOcRF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractJZGu6wi = await ERC721.new({from: accounts[5]});
		const tokenIdYhV0LD9 = BigInt("1708")
		const tojvnD0zV = accounts[4]
		const tokenIdo9JXDSp = BigInt("1406")
		const tof4zWaHA = accounts[2]
		const fromJx7Tzff = accounts[3]
		const tokenIddSSbUKr = BigInt("623")
		const toHm7GkN = accounts[5]
		const tokenIdtYldW66 = BigInt("1013")
		await contractJZGu6wi.approve.call(tojvnD0zV, tokenIdYhV0LD9, {from: accounts[2]});
		await contractJZGu6wi.safeTransferFrom.call(fromJx7Tzff, tof4zWaHA, tokenIdo9JXDSp, {from: "0x0000000000000000000000000000000000000001"});
		await contractJZGu6wi.approve.call(toHm7GkN, tokenIddSSbUKr, {from: accounts[3]});
		const nullyiqMBM = await contractJZGu6wi.getApproved.call(tokenIdtYldW66, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractJZGu6wi.approve.call(tojvnD0zV, tokenIdYhV0LD9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})