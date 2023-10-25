const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractbOwcyPy = await ERC721.new({from: accounts[5]});
		const tokenIdSYtNK8 = BigInt("650")
		const toRlt0Z8G = accounts[3]
		const fromyu0xZkb = accounts[0]
		const tokenIdj3MFdRH = BigInt("869")
		const toTEiPn8C = accounts[4]
		const fromhHjnRw6 = accounts[0]
		const approvedoPwQE7 = true
		const toEBFhlfj = accounts[3]
		const operatorM1OOqE = accounts[1]
		const ownermjWFUp = accounts[0]
		const operatorC7xnAPS = accounts[1]
		const ownerR1YhoBS = accounts[4]
		await contractbOwcyPy.transferFrom.call(fromyu0xZkb, toRlt0Z8G, tokenIdSYtNK8, {from: accounts[0]});
		await contractbOwcyPy.transferFrom.call(fromhHjnRw6, toTEiPn8C, tokenIdj3MFdRH, {from: accounts[4]});
		await contractbOwcyPy.setApprovalForAll.call(toEBFhlfj, approvedoPwQE7, {from: accounts[2]});
		const nullnTUhBb8 = await contractbOwcyPy.isApprovedForAll.call(ownermjWFUp, operatorM1OOqE, {from: accounts[3]});
		const nullp6cEWyo = await contractbOwcyPy.isApprovedForAll.call(ownerR1YhoBS, operatorC7xnAPS, {from: accounts[5]});

		await expect(contractbOwcyPy.transferFrom.call(fromyu0xZkb, toRlt0Z8G, tokenIdSYtNK8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracti2T6vKE = await ERC721.new({from: accounts[1]});
		const tokenIdMvqF8HP = BigInt("1827")
		const operatorfE5bSUp = accounts[1]
		const ownerpK9jO0W = accounts[0]
		const operatoryXqaco = accounts[0]
		const ownerg1HPO3W = accounts[2]
		const operatorefVJRPY = accounts[3]
		const ownerotCcBw4 = accounts[2]
		const tokenIdCB346Jp = BigInt("1913")
		const operatorkFEPxJT = accounts[4]
		const owneraNpNwDE = accounts[4]
		const nullEnXalOT = await contracti2T6vKE.getApproved.call(tokenIdMvqF8HP, {from: accounts[2]});
		const nulllPpttF = await contracti2T6vKE.isApprovedForAll.call(ownerpK9jO0W, operatorfE5bSUp, {from: "0x0000000000000000000000000000000000000001"});
		const nullrsZXz0G = await contracti2T6vKE.isApprovedForAll.call(ownerg1HPO3W, operatoryXqaco, {from: accounts[2]});
		const nullGx9VpPb = await contracti2T6vKE.isApprovedForAll.call(ownerotCcBw4, operatorefVJRPY, {from: accounts[2]});
		const nullBSeEYLq = await contracti2T6vKE.ownerOf.call(tokenIdCB346Jp, {from: accounts[3]});
		const nullwpx9m7e = await contracti2T6vKE.isApprovedForAll.call(owneraNpNwDE, operatorkFEPxJT, {from: accounts[1]});

		await expect(contracti2T6vKE.getApproved.call(tokenIdMvqF8HP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractwSS1pBM = await ERC721.new({from: accounts[5]});
		const operatorUweoSx = accounts[0]
		const ownermJWMiEO = accounts[5]
		const operatoreBWJbB1 = accounts[2]
		const ownerlNu8U2S = accounts[1]
		const operatorrB9201H = accounts[3]
		const ownergQHphM2 = accounts[3]
		const tokenIddknUrGt = BigInt("1465")
		const nullnoie5gp = await contractwSS1pBM.isApprovedForAll.call(ownermJWMiEO, operatorUweoSx, {from: accounts[0]});
		const nullCPHNSIt = await contractwSS1pBM.isApprovedForAll.call(ownerlNu8U2S, operatoreBWJbB1, {from: accounts[3]});
		const nullws5Adin = await contractwSS1pBM.isApprovedForAll.call(ownergQHphM2, operatorrB9201H, {from: accounts[4]});
		const nullcmFbLjE = await contractwSS1pBM.getApproved.call(tokenIddknUrGt, {from: accounts[3]});

		assert.equal(nullCPHNSIt, false)
		assert.equal(nullnoie5gp, false)
		assert.equal(nullws5Adin, false)
		await expect(contractwSS1pBM.getApproved.call(tokenIddknUrGt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractjzC0wAx = await ERC721.new({from: accounts[2]});
		const tokenIdfRMcaTS = BigInt("1378")
		const tokenIdlShPfqS = BigInt("1198")
		const toRmc6w5s = accounts[1]
		const nulllAg6I7 = await contractjzC0wAx.ownerOf.call(tokenIdfRMcaTS, {from: accounts[0]});
		await contractjzC0wAx.approve.call(toRmc6w5s, tokenIdlShPfqS, {from: accounts[0]});

		await expect(contractjzC0wAx.ownerOf.call(tokenIdfRMcaTS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractz9P33mR = await ERC721.new({from: accounts[5]});
		const tokenIdJqyUJXZ = BigInt("345")
		const tobRhWshz = accounts[4]
		const fromkXAdsyZ = accounts[3]
		const tokenIdcceBmzQ = BigInt("393")
		const tooVxO3eQ = accounts[5]
		const fromOyzUxZv = accounts[3]
		const tokenId6mlsIb = BigInt("1932")
		const tookSzrfQ = accounts[0]
		const tokenIdTOdzosW = BigInt("1295")
		const tophFJ6JL = accounts[0]
		const fromwtuUeGn = accounts[3]
		await contractz9P33mR.safeTransferFrom.call(fromkXAdsyZ, tobRhWshz, tokenIdJqyUJXZ, {from: accounts[3]});
		await contractz9P33mR.safeTransferFrom.call(fromOyzUxZv, tooVxO3eQ, tokenIdcceBmzQ, {from: accounts[3]});
		await contractz9P33mR.approve.call(tookSzrfQ, tokenId6mlsIb, {from: accounts[5]});
		await contractz9P33mR.transferFrom.call(fromwtuUeGn, tophFJ6JL, tokenIdTOdzosW, {from: accounts[2]});

		await expect(contractz9P33mR.safeTransferFrom.call(fromkXAdsyZ, tobRhWshz, tokenIdJqyUJXZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractOleTwEz = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdI7iHfB = BigInt("1716")
		const tokenIdh4w2cE = BigInt("1746")
		const tor8TkRDt = accounts[2]
		const ownerYlo9jTB = accounts[1]
		const tokenIdKubMNI = BigInt("1104")
		const nullMyzsoqb = await contractOleTwEz.ownerOf.call(tokenIdI7iHfB, {from: accounts[0]});
		await contractOleTwEz.approve.call(tor8TkRDt, tokenIdh4w2cE, {from: "0x0000000000000000000000000000000000000001"});
		const nulliXORa7E = await contractOleTwEz.balanceOf.call(ownerYlo9jTB, {from: accounts[2]});
		const nullh0czgF1 = await contractOleTwEz.getApproved.call(tokenIdKubMNI, {from: accounts[1]});
	});

	it('test for ERC721', async () => {
		const contractF6k4SPj = await ERC721.new({from: accounts[5]});
		const operatorBBDDb1m = accounts[0]
		const ownerz4t9XEF = accounts[5]
		const operatortY5jchS = accounts[2]
		const ownercKGbj0G = accounts[1]
		const operatorYaW8Rdb = accounts[3]
		const ownerYnkmar = accounts[3]
		const approvedlEM3BF2 = false
		const toeiMvRjX = "0x0000000000000000000000000000000000000001"
		const tokenIdi2TEfSl = BigInt("1465")
		const nullzbKAbg6 = await contractF6k4SPj.isApprovedForAll.call(ownerz4t9XEF, operatorBBDDb1m, {from: accounts[0]});
		const nullTMaFkp = await contractF6k4SPj.isApprovedForAll.call(ownercKGbj0G, operatortY5jchS, {from: accounts[3]});
		const nullQTWJO3L = await contractF6k4SPj.isApprovedForAll.call(ownerYnkmar, operatorYaW8Rdb, {from: accounts[4]});
		await contractF6k4SPj.setApprovalForAll.call(toeiMvRjX, approvedlEM3BF2, {from: accounts[1]});
		const nullUANbJiO = await contractF6k4SPj.getApproved.call(tokenIdi2TEfSl, {from: accounts[3]});

		assert.equal(nullQTWJO3L, false)
		assert.equal(nullTMaFkp, false)
		assert.equal(nullzbKAbg6, false)
		await expect(contractF6k4SPj.setApprovalForAll.call(toeiMvRjX, approvedlEM3BF2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVq0c3l1 = await ERC721.new({from: accounts[5]});
		const tokenIdMmCgI0R = BigInt("517")
		const tox5vi5yw = accounts[0]
		const tokenIdTenBKDd = BigInt("650")
		const toAsETobw = accounts[3]
		const fromo0vRtV = accounts[0]
		const tokenIdczg5Obf = BigInt("1411")
		const tokenIdlSPCoBt = BigInt("869")
		const toecwv3Mg = accounts[5]
		const fromFvnrQZq = accounts[0]
		const approvedAq4blab = true
		const toe2Ok4X1 = accounts[3]
		const operatorZUYs5VI = accounts[1]
		const ownerikf7IPU = accounts[0]
		const operatorop0ASOX = accounts[1]
		const ownergzi2hQd = accounts[4]
		await contractVq0c3l1.approve.call(tox5vi5yw, tokenIdMmCgI0R, {from: accounts[3]});
		await contractVq0c3l1.transferFrom.call(fromo0vRtV, toAsETobw, tokenIdTenBKDd, {from: accounts[0]});
		const nullnGymKn = await contractVq0c3l1.getApproved.call(tokenIdczg5Obf, {from: accounts[3]});
		await contractVq0c3l1.transferFrom.call(fromFvnrQZq, toecwv3Mg, tokenIdlSPCoBt, {from: accounts[4]});
		await contractVq0c3l1.setApprovalForAll.call(toe2Ok4X1, approvedAq4blab, {from: accounts[2]});
		const nullDeC6xO6 = await contractVq0c3l1.isApprovedForAll.call(ownerikf7IPU, operatorZUYs5VI, {from: accounts[3]});
		const nullazx9JUY = await contractVq0c3l1.isApprovedForAll.call(ownergzi2hQd, operatorop0ASOX, {from: accounts[5]});

		await expect(contractVq0c3l1.approve.call(tox5vi5yw, tokenIdMmCgI0R, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracty7ewuGO = await ERC721.new({from: accounts[2]});
		const owneraRQpUpw = accounts[3]
		const tokenIdJW6b9EI = BigInt("614")
		const todhw4PT = accounts[3]
		const fromlfuvMdv = accounts[5]
		const nullebFKD0x = await contracty7ewuGO.balanceOf.call(owneraRQpUpw, {from: accounts[2]});
		await contracty7ewuGO.transferFrom.call(fromlfuvMdv, todhw4PT, tokenIdJW6b9EI, {from: accounts[1]});

		assert.equal(nullebFKD0x, 0)
		await expect(contracty7ewuGO.transferFrom.call(fromlfuvMdv, todhw4PT, tokenIdJW6b9EI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxF876i = await ERC721.new({from: accounts[2]});
		const approvedYWC9xdV = false
		const toQDdQYto = accounts[1]
		const tokenIddISoTEi = BigInt("604")
		const toIVXB0XX = accounts[3]
		const fromTIZ1uCS = accounts[6]
		await contractxF876i.setApprovalForAll.call(toQDdQYto, approvedYWC9xdV, {from: accounts[1]});
		await contractxF876i.transferFrom.call(fromTIZ1uCS, toIVXB0XX, tokenIddISoTEi, {from: accounts[1]});

		await expect(contractxF876i.setApprovalForAll.call(toQDdQYto, approvedYWC9xdV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})