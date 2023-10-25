const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractYKojvB6 = await ERC721.new({from: accounts[4]});
		const operatorEyE4Lkj = accounts[0]
		const ownerfaGs1VF = accounts[1]
		const tokenIdDlbwqvt = BigInt("210")
		const tokenIdkUgnVJi = BigInt("1201")
		const to9O5GON = accounts[3]
		const fromX6RTRf6 = accounts[0]
		const operatorMA9QTJz = accounts[3]
		const ownerNMwmHw = accounts[3]
		const approvedHMcc9kR = true
		const torbXHRdY = accounts[3]
		const operatorG0o74n1 = accounts[2]
		const ownerbciz1B4 = accounts[2]
		const nullPa2REzp = await contractYKojvB6.isApprovedForAll.call(ownerfaGs1VF, operatorEyE4Lkj, {from: accounts[5]});
		const nullSyYjUiw = await contractYKojvB6.getApproved.call(tokenIdDlbwqvt, {from: accounts[4]});
		await contractYKojvB6.safeTransferFrom.call(fromX6RTRf6, to9O5GON, tokenIdkUgnVJi, {from: accounts[4]});
		const nullmibd1DX = await contractYKojvB6.isApprovedForAll.call(ownerNMwmHw, operatorMA9QTJz, {from: accounts[2]});
		await contractYKojvB6.setApprovalForAll.call(torbXHRdY, approvedHMcc9kR, {from: accounts[3]});
		const nulll9sGJtv = await contractYKojvB6.isApprovedForAll.call(ownerbciz1B4, operatorG0o74n1, {from: accounts[2]});

		assert.equal(nullPa2REzp, false)
		await expect(contractYKojvB6.getApproved.call(tokenIdDlbwqvt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZIWK92c = await ERC721.new({from: accounts[3]});
		const tokenIdAk4Gy7x = BigInt("90")
		const tokenIdsVylNTx = BigInt("1792")
		const topCHlXVi = accounts[3]
		const ownerdICMxWh = accounts[0]
		const tokenIdA8KauBI = BigInt("1362")
		const tooiAnRtg = accounts[0]
		const fromtMrFAyy = accounts[2]
		const tokenIdqD8Amsn = BigInt("928")
		const tokenIdtX3DqDm = BigInt("1164")
		const toc37FrRS = accounts[1]
		const fromTbi2d04 = accounts[4]
		const nullGG3b83 = await contractZIWK92c.ownerOf.call(tokenIdAk4Gy7x, {from: accounts[1]});
		await contractZIWK92c.approve.call(topCHlXVi, tokenIdsVylNTx, {from: accounts[2]});
		const nullJNs1uF = await contractZIWK92c.balanceOf.call(ownerdICMxWh, {from: accounts[2]});
		await contractZIWK92c.safeTransferFrom.call(fromtMrFAyy, tooiAnRtg, tokenIdA8KauBI, {from: accounts[3]});
		const nullI4Mlcjk = await contractZIWK92c.getApproved.call(tokenIdqD8Amsn, {from: accounts[5]});
		await contractZIWK92c.transferFrom.call(fromTbi2d04, toc37FrRS, tokenIdtX3DqDm, {from: accounts[0]});

		await expect(contractZIWK92c.ownerOf.call(tokenIdAk4Gy7x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractsublIxn = await ERC721.new({from: accounts[1]});
		const tokenIdTCt7IYZ = BigInt("834")
		const toSF7eige = accounts[5]
		const fromkSMWr4C = "0x0000000000000000000000000000000000000001"
		const operatorvvMyWcF = accounts[0]
		const ownerY7V4R3x = accounts[3]
		await contractsublIxn.transferFrom.call(fromkSMWr4C, toSF7eige, tokenIdTCt7IYZ, {from: accounts[0]});
		const nullPHm5J3K = await contractsublIxn.isApprovedForAll.call(ownerY7V4R3x, operatorvvMyWcF, {from: accounts[2]});

		await expect(contractsublIxn.transferFrom.call(fromkSMWr4C, toSF7eige, tokenIdTCt7IYZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractoedLGmn = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatordIopzph = accounts[4]
		const ownerKS7sx5F = accounts[0]
		const approvedjXpELEo = false
		const torz9YbG7 = accounts[2]
		const tokenIdubrq9VU = BigInt("1591")
		const tokenIdpjlVxV3 = BigInt("1979")
		const to2zX5Jb = accounts[1]
		const tokenIdUKTIWjZ = BigInt("1429")
		const nullh3xS243 = await contractoedLGmn.isApprovedForAll.call(ownerKS7sx5F, operatordIopzph, {from: accounts[1]});
		await contractoedLGmn.setApprovalForAll.call(torz9YbG7, approvedjXpELEo, {from: "0x0000000000000000000000000000000000000001"});
		const nullGKupbar = await contractoedLGmn.getApproved.call(tokenIdubrq9VU, {from: accounts[3]});
		await contractoedLGmn.approve.call(to2zX5Jb, tokenIdpjlVxV3, {from: accounts[2]});
		const nullstxplNv = await contractoedLGmn.ownerOf.call(tokenIdUKTIWjZ, {from: accounts[2]});
	});

	it('test for ERC721', async () => {
		const contractX74ZuQo = await ERC721.new({from: accounts[3]});
		const approvedssaKvF = false
		const toO5CX1vI = accounts[1]
		const ownervskWCOX = accounts[4]
		const tokenIdmoP46R = BigInt("2023")
		await contractX74ZuQo.setApprovalForAll.call(toO5CX1vI, approvedssaKvF, {from: accounts[1]});
		const nullorwyKWd = await contractX74ZuQo.balanceOf.call(ownervskWCOX, {from: accounts[0]});
		const nullwRjHCVx = await contractX74ZuQo.ownerOf.call(tokenIdmoP46R, {from: accounts[5]});

		await expect(contractX74ZuQo.setApprovalForAll.call(toO5CX1vI, approvedssaKvF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})