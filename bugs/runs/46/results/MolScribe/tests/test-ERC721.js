const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractNPb1bfu = await ERC721.new({from: accounts[3]});
		const ownerRIah2E8 = accounts[5]
		const tokenIdJW2E7M1 = BigInt("28")
		const toJRiDYmr = accounts[1]
		const operatordmSdp0V = accounts[1]
		const ownerseoukE = accounts[1]
		const ownerycY4PkY = accounts[3]
		const approvedib6mGaR = true
		const totiF9QuC = accounts[2]
		const nullRufDsKG = await contractNPb1bfu.balanceOf.call(ownerRIah2E8, {from: "0x0000000000000000000000000000000000000001"});
		await contractNPb1bfu.approve.call(toJRiDYmr, tokenIdJW2E7M1, {from: accounts[4]});
		const nullsuMChQ5 = await contractNPb1bfu.isApprovedForAll.call(ownerseoukE, operatordmSdp0V, {from: accounts[5]});
		const nullhwJ5kHo = await contractNPb1bfu.balanceOf.call(ownerycY4PkY, {from: accounts[4]});
		await contractNPb1bfu.setApprovalForAll.call(totiF9QuC, approvedib6mGaR, {from: accounts[1]});

		assert.equal(nullRufDsKG, 0)
		await expect(contractNPb1bfu.approve.call(toJRiDYmr, tokenIdJW2E7M1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractEQRhH0n = await ERC721.new({from: accounts[3]});
		const tokenIdCtQxmBd = BigInt("1514")
		const toSslUNCM = accounts[2]
		const fromuMdvBHO = accounts[1]
		const approvedjQ6AUxc = false
		const toC8z3zpM = accounts[2]
		const tokenIdlaI2HOq = BigInt("1351")
		const toNV1uKHb = accounts[3]
		const fromkE2gMHB = accounts[3]
		await contractEQRhH0n.transferFrom.call(fromuMdvBHO, toSslUNCM, tokenIdCtQxmBd, {from: "0x0000000000000000000000000000000000000001"});
		await contractEQRhH0n.setApprovalForAll.call(toC8z3zpM, approvedjQ6AUxc, {from: accounts[5]});
		await contractEQRhH0n.safeTransferFrom.call(fromkE2gMHB, toNV1uKHb, tokenIdlaI2HOq, {from: accounts[2]});

		await expect(contractEQRhH0n.transferFrom.call(fromuMdvBHO, toSslUNCM, tokenIdCtQxmBd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractGDdChhc = await ERC721.new({from: accounts[2]});
		const operatornzIwrqX = accounts[1]
		const ownervf4S3uR = accounts[4]
		const tokenIdBG67zEX = BigInt("930")
		const tokenIdbiX6Doo = BigInt("56")
		const tobWwfuGg = accounts[1]
		const fromYe1UftA = accounts[1]
		const nulltMVdtLg = await contractGDdChhc.isApprovedForAll.call(ownervf4S3uR, operatornzIwrqX, {from: accounts[4]});
		const nullkoYOcnU = await contractGDdChhc.getApproved.call(tokenIdBG67zEX, {from: accounts[2]});
		await contractGDdChhc.safeTransferFrom.call(fromYe1UftA, tobWwfuGg, tokenIdbiX6Doo, {from: accounts[2]});

		assert.equal(nulltMVdtLg, false)
		await expect(contractGDdChhc.getApproved.call(tokenIdBG67zEX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfestpSL = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenId0q3n8V = BigInt("1127")
		const tokenIdeqLXkgr = BigInt("176")
		const toqZcGaw = accounts[3]
		const fromVZMvnAV = accounts[0]
		const nullmYQRIp3 = await contractfestpSL.getApproved.call(tokenId0q3n8V, {from: accounts[3]});
		await contractfestpSL.safeTransferFrom.call(fromVZMvnAV, toqZcGaw, tokenIdeqLXkgr, {from: accounts[2]});
	});
})