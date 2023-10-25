const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractnXvhjG3 = await ERC721.new({from: accounts[0]});
		const ownerwORJNC = accounts[3]
		const _dataifTjXX1 = "0x121b020812171e0f"
		const tokenIdJ2v9FSg = BigInt("1921")
		const towq7iKGe = accounts[0]
		const fromU9oKT95 = "0x0000000000000000000000000000000000000001"
		const operatorlJqtXGC = accounts[4]
		const ownerbL3DFu = accounts[0]
		const nullh7H16j = await contractnXvhjG3.balanceOf.call(ownerwORJNC, {from: accounts[3]});
		await contractnXvhjG3.safeTransferFrom.call(fromU9oKT95, towq7iKGe, tokenIdJ2v9FSg, _dataifTjXX1, {from: accounts[0]});
		const nullil8TWZ = await contractnXvhjG3.isApprovedForAll.call(ownerbL3DFu, operatorlJqtXGC, {from: accounts[3]});

		assert.equal(nullh7H16j, 0)
		await expect(contractnXvhjG3.safeTransferFrom.call(fromU9oKT95, towq7iKGe, tokenIdJ2v9FSg, _dataifTjXX1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractSwohNvY = await ERC721.new({from: accounts[0]});
		const tokenIdvPcCCFO = BigInt("1620")
		const approvedd8PvXS = true
		const toMH1DOw = accounts[3]
		const approvediadFuxb = true
		const totoMb0Vk = accounts[2]
		const tokenIdDnNvuY = BigInt("1967")
		const toIrb7k4n = accounts[0]
		const nulldTHzrwW = await contractSwohNvY.getApproved.call(tokenIdvPcCCFO, {from: accounts[3]});
		await contractSwohNvY.setApprovalForAll.call(toMH1DOw, approvedd8PvXS, {from: accounts[1]});
		await contractSwohNvY.setApprovalForAll.call(totoMb0Vk, approvediadFuxb, {from: accounts[3]});
		await contractSwohNvY.approve.call(toIrb7k4n, tokenIdDnNvuY, {from: accounts[0]});

		await expect(contractSwohNvY.getApproved.call(tokenIdvPcCCFO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFVq48G8 = await ERC721.new({from: accounts[2]});
		const approvedh6dgn3C = false
		const toiwmHJwo = accounts[1]
		const operatorsivRTAe = accounts[4]
		const ownerbXfNBTf = accounts[3]
		const approvedEoZ6mYV = true
		const toVOwNPnw = accounts[2]
		const tokenIdtyTr5sD = BigInt("272")
		await contractFVq48G8.setApprovalForAll.call(toiwmHJwo, approvedh6dgn3C, {from: accounts[4]});
		const nullkvMuzuC = await contractFVq48G8.isApprovedForAll.call(ownerbXfNBTf, operatorsivRTAe, {from: accounts[4]});
		await contractFVq48G8.setApprovalForAll.call(toVOwNPnw, approvedEoZ6mYV, {from: accounts[0]});
		const nullt3uZsTo = await contractFVq48G8.ownerOf.call(tokenIdtyTr5sD, {from: accounts[1]});

		assert.equal(nullkvMuzuC, false)
		await expect(contractFVq48G8.isApprovedForAll.call(ownerbXfNBTf, operatorsivRTAe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractKx5EwU5 = await ERC721.new({from: accounts[3]});
		const tokenIdi6Brvg = BigInt("1033")
		const toHgrFEoF = accounts[0]
		const fromS4SSmOt = accounts[0]
		const tokenIdI2CWNVk = BigInt("765")
		const tokenIdSNn0Epm = BigInt("1207")
		const tokenIdxSchR1 = BigInt("1038")
		const toabMqoDX = accounts[3]
		const fromKxnLs1q = accounts[4]
		const ownerNEySXHg = accounts[3]
		const tokenIdyXwqHSq = BigInt("1")
		const toEhuS7Wu = accounts[1]
		const fromoEZ3SBt = accounts[2]
		await contractKx5EwU5.safeTransferFrom.call(fromS4SSmOt, toHgrFEoF, tokenIdi6Brvg, {from: accounts[0]});
		const nullRq9Bpz = await contractKx5EwU5.getApproved.call(tokenIdI2CWNVk, {from: accounts[1]});
		const nullCcKBNu3 = await contractKx5EwU5.ownerOf.call(tokenIdSNn0Epm, {from: accounts[0]});
		await contractKx5EwU5.transferFrom.call(fromKxnLs1q, toabMqoDX, tokenIdxSchR1, {from: accounts[1]});
		const nullet5trZ8 = await contractKx5EwU5.balanceOf.call(ownerNEySXHg, {from: accounts[0]});
		await contractKx5EwU5.safeTransferFrom.call(fromoEZ3SBt, toEhuS7Wu, tokenIdyXwqHSq, {from: accounts[1]});

		await expect(contractKx5EwU5.safeTransferFrom.call(fromS4SSmOt, toHgrFEoF, tokenIdi6Brvg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractb96dHNI = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdqZXPzOm = BigInt("96")
		const torKOZxS2 = accounts[5]
		const tokenIdAMCLWdI = BigInt("287")
		const tokenIdfIf4oeB = BigInt("986")
		const toiPPqpg = accounts[0]
		const fromzsgthm2 = accounts[3]
		const approved8XS7jk = false
		const totXZyOV = accounts[1]
		const tokenIdJ8voyJC = BigInt("213")
		const tojOKUdF5 = accounts[5]
		await contractb96dHNI.approve.call(torKOZxS2, tokenIdqZXPzOm, {from: accounts[1]});
		const nullEo7MVgk = await contractb96dHNI.ownerOf.call(tokenIdAMCLWdI, {from: accounts[2]});
		await contractb96dHNI.transferFrom.call(fromzsgthm2, toiPPqpg, tokenIdfIf4oeB, {from: accounts[2]});
		await contractb96dHNI.setApprovalForAll.call(totXZyOV, approved8XS7jk, {from: accounts[0]});
		await contractb96dHNI.approve.call(tojOKUdF5, tokenIdJ8voyJC, {from: accounts[1]});
	});

	it('test for ERC721', async () => {
		const contractJkngReO = await ERC721.new({from: accounts[4]});
		const ownerbrKFtsK = accounts[4]
		const operatorHRKBVrQ = accounts[2]
		const ownerUSTUHbx = accounts[0]
		const tokenIdw24luz9 = BigInt("660")
		const toJ5OzhwZ = accounts[0]
		const approvedTLZ2914 = true
		const toyoEY7Ke = accounts[1]
		const nullCtAYXKV = await contractJkngReO.balanceOf.call(ownerbrKFtsK, {from: accounts[1]});
		const nullf5IHr09 = await contractJkngReO.isApprovedForAll.call(ownerUSTUHbx, operatorHRKBVrQ, {from: accounts[0]});
		await contractJkngReO.approve.call(toJ5OzhwZ, tokenIdw24luz9, {from: accounts[3]});
		await contractJkngReO.setApprovalForAll.call(toyoEY7Ke, approvedTLZ2914, {from: accounts[2]});

		assert.equal(nullCtAYXKV, 0)
		assert.equal(nullf5IHr09, false)
		await expect(contractJkngReO.approve.call(toJ5OzhwZ, tokenIdw24luz9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractUeWEWXq = await ERC721.new({from: accounts[5]});
		const tokenIdt7Q8fQk = BigInt("1722")
		const toKUTrU2S = accounts[2]
		const fromjKrtuZE = accounts[3]
		await contractUeWEWXq.transferFrom.call(fromjKrtuZE, toKUTrU2S, tokenIdt7Q8fQk, {from: accounts[4]});

		await expect(contractUeWEWXq.transferFrom.call(fromjKrtuZE, toKUTrU2S, tokenIdt7Q8fQk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractyjP7Tkz = await ERC721.new({from: accounts[1]});
		const approvedWcXmYeV = false
		const toxC0mqIa = accounts[3]
		const operatorTI5IIiD = accounts[5]
		const ownerSCnS0U7 = accounts[4]
		await contractyjP7Tkz.setApprovalForAll.call(toxC0mqIa, approvedWcXmYeV, {from: accounts[3]});
		const nulldom9Avc = await contractyjP7Tkz.isApprovedForAll.call(ownerSCnS0U7, operatorTI5IIiD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractyjP7Tkz.setApprovalForAll.call(toxC0mqIa, approvedWcXmYeV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})