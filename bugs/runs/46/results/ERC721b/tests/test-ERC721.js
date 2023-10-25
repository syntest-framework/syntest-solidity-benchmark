const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractYmJlmh2 = await ERC721.new({from: accounts[3]});
		const operatoroQZeEn6 = accounts[0]
		const owneryVMHzz7 = accounts[2]
		const tokenIdzDSkZpE = BigInt("1518")
		const toTI3hrVO = accounts[1]
		const fromhvbZvO = accounts[0]
		const tokenIdFUs1kHR = BigInt("1020")
		const tolLefdPY = accounts[0]
		const frompdqqA3S = accounts[2]
		const nullTvRQ9ka = await contractYmJlmh2.isApprovedForAll.call(owneryVMHzz7, operatoroQZeEn6, {from: accounts[3]});
		await contractYmJlmh2.safeTransferFrom.call(fromhvbZvO, toTI3hrVO, tokenIdzDSkZpE, {from: accounts[4]});
		await contractYmJlmh2.transferFrom.call(frompdqqA3S, tolLefdPY, tokenIdFUs1kHR, {from: accounts[2]});

		assert.equal(nullTvRQ9ka, false)
		await expect(contractYmJlmh2.safeTransferFrom.call(fromhvbZvO, toTI3hrVO, tokenIdzDSkZpE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractsbbBlX = await ERC721.new({from: accounts[2]});
		const operatorxPSTNy = accounts[3]
		const ownerFegP4cX = accounts[4]
		const approvedJb1lxvz = true
		const tozdgoom4 = accounts[3]
		const operatorIuJVS5E = accounts[3]
		const ownerQtPwG8U = accounts[5]
		const ownerAmbwZkb = accounts[4]
		const tokenIdRJhiyAQ = BigInt("1579")
		const totZY2gNH = accounts[2]
		const fromicHpGev = accounts[3]
		const ownerT9zULqr = accounts[0]
		const nullnOnMyXS = await contractsbbBlX.isApprovedForAll.call(ownerFegP4cX, operatorxPSTNy, {from: accounts[0]});
		await contractsbbBlX.setApprovalForAll.call(tozdgoom4, approvedJb1lxvz, {from: accounts[0]});
		const nulli1T38S4 = await contractsbbBlX.isApprovedForAll.call(ownerQtPwG8U, operatorIuJVS5E, {from: "0x0000000000000000000000000000000000000001"});
		const nullTxLrty7 = await contractsbbBlX.balanceOf.call(ownerAmbwZkb, {from: accounts[2]});
		await contractsbbBlX.transferFrom.call(fromicHpGev, totZY2gNH, tokenIdRJhiyAQ, {from: accounts[1]});
		const nullhWfJBgj = await contractsbbBlX.balanceOf.call(ownerT9zULqr, {from: accounts[2]});

		assert.equal(nullTxLrty7, 0)
		assert.equal(nulli1T38S4, false)
		assert.equal(nullnOnMyXS, false)
		await expect(contractsbbBlX.balanceOf.call(ownerAmbwZkb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractK0c77Wo = await ERC721.new({from: accounts[4]});
		const tokenIdd5YhrTJ = BigInt("1565")
		const tokenIds3ig0KH = BigInt("101")
		const tosxwmF0 = accounts[3]
		const tokenIdP8w5FMj = BigInt("1208")
		const operatorChK4uMI = accounts[1]
		const ownerJzER9wY = accounts[5]
		const operatorS9peJxA = "0x0000000000000000000000000000000000000001"
		const owneriKWsPej = "0x0000000000000000000000000000000000000001"
		const nullTXUVrT = await contractK0c77Wo.ownerOf.call(tokenIdd5YhrTJ, {from: accounts[4]});
		await contractK0c77Wo.approve.call(tosxwmF0, tokenIds3ig0KH, {from: accounts[3]});
		const nullxEFSOV0 = await contractK0c77Wo.getApproved.call(tokenIdP8w5FMj, {from: accounts[0]});
		const nullVcXfdMp = await contractK0c77Wo.isApprovedForAll.call(ownerJzER9wY, operatorChK4uMI, {from: accounts[2]});
		const nullTtHlgoo = await contractK0c77Wo.isApprovedForAll.call(owneriKWsPej, operatorS9peJxA, {from: accounts[3]});

		await expect(contractK0c77Wo.ownerOf.call(tokenIdd5YhrTJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractP4oJdi9 = await ERC721.new({from: accounts[1]});
		const tokenIdl6eMsHc = BigInt("1992")
		const approvedrGZVgiA = true
		const tok92kBm6 = accounts[2]
		const tokenIduMxVaFJ = BigInt("1242")
		const nulld5sEHFI = await contractP4oJdi9.getApproved.call(tokenIdl6eMsHc, {from: accounts[4]});
		await contractP4oJdi9.setApprovalForAll.call(tok92kBm6, approvedrGZVgiA, {from: accounts[5]});
		const nullhoDFpmp = await contractP4oJdi9.getApproved.call(tokenIduMxVaFJ, {from: accounts[2]});

		await expect(contractP4oJdi9.getApproved.call(tokenIdl6eMsHc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFFBjDn = await ERC721.new({from: accounts[1]});
		const tokenIdkDAp05b = BigInt("1836")
		const toba3puID = accounts[4]
		const tokenIdxzxcTjc = BigInt("1300")
		await contractFFBjDn.approve.call(toba3puID, tokenIdkDAp05b, {from: accounts[4]});
		const nulldFNPeZh = await contractFFBjDn.getApproved.call(tokenIdxzxcTjc, {from: accounts[2]});

		await expect(contractFFBjDn.approve.call(toba3puID, tokenIdkDAp05b, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractCADMyuI = await ERC721.new({from: accounts[1]});
		const approveddH7hwqw = false
		const toNFGvSK = accounts[1]
		const tokenIdGQoqcl0 = BigInt("1801")
		const tokenIdzeBWfB5 = BigInt("1878")
		const toaPwPwZ = accounts[4]
		const tokenIdjTV1gc = BigInt("1300")
		await contractCADMyuI.setApprovalForAll.call(toNFGvSK, approveddH7hwqw, {from: accounts[1]});
		const nullj4I2jhx = await contractCADMyuI.ownerOf.call(tokenIdGQoqcl0, {from: accounts[1]});
		await contractCADMyuI.approve.call(toaPwPwZ, tokenIdzeBWfB5, {from: accounts[4]});
		const nullUjhPMQL = await contractCADMyuI.getApproved.call(tokenIdjTV1gc, {from: accounts[2]});

		await expect(contractCADMyuI.setApprovalForAll.call(toNFGvSK, approveddH7hwqw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractAUsic5Y = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdWVexK9Z = BigInt("1632")
		const toJEuzNYr = accounts[3]
		const ownerQ6Pxlwl = accounts[2]
		const tokenIdczjHSE6 = BigInt("1743")
		const toMjaKNeh = accounts[0]
		const fromQL1qnuM = accounts[3]
		const approvedusofDwN = false
		const tonHQVsQB = accounts[2]
		const operatorcn5wAwO = accounts[2]
		const ownerxhcs15W = accounts[1]
		await contractAUsic5Y.approve.call(toJEuzNYr, tokenIdWVexK9Z, {from: accounts[2]});
		const nullLK0S2TH = await contractAUsic5Y.balanceOf.call(ownerQ6Pxlwl, {from: accounts[1]});
		await contractAUsic5Y.transferFrom.call(fromQL1qnuM, toMjaKNeh, tokenIdczjHSE6, {from: accounts[5]});
		await contractAUsic5Y.setApprovalForAll.call(tonHQVsQB, approvedusofDwN, {from: accounts[3]});
		const nullt0nWnjK = await contractAUsic5Y.isApprovedForAll.call(ownerxhcs15W, operatorcn5wAwO, {from: accounts[0]});
	});
})