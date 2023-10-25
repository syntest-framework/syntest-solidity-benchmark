const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractSbBQyHC = await ERC721.new({from: accounts[2]});
		const tokenIdRnhzF19 = BigInt("480")
		const toC2IIfRk = accounts[1]
		const fromxHxbCS0 = accounts[5]
		const tokenIdCWKE8Uo = BigInt("434")
		const tokenIdyhikfAm = BigInt("396")
		await contractSbBQyHC.transferFrom.call(fromxHxbCS0, toC2IIfRk, tokenIdRnhzF19, {from: accounts[0]});
		const nullheravUE = await contractSbBQyHC.getApproved.call(tokenIdCWKE8Uo, {from: "0x0000000000000000000000000000000000000001"});
		const nullPpQx9Rx = await contractSbBQyHC.getApproved.call(tokenIdyhikfAm, {from: accounts[2]});

		await expect(contractSbBQyHC.transferFrom.call(fromxHxbCS0, toC2IIfRk, tokenIdRnhzF19, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractTXRJZ4r = await ERC721.new({from: accounts[2]});
		const tokenId4ScRJU = BigInt("1633")
		const towa5jKQa = accounts[4]
		const _dataEAPxPKN = "0x030508170d0e111f031315080b0d090e0c1e0b0f0512060f0e0c1f161c14"
		const tokenIdg52d0YW = BigInt("1291")
		const tozdzzCA0 = accounts[0]
		const frompeF7yuX = accounts[4]
		const approveddc51Q6a = false
		const toW4prVOq = accounts[3]
		const _datavVysnc = "0x0007"
		const tokenIdrPddyX = BigInt("1079")
		const toDDSJJZw = "0x0000000000000000000000000000000000000001"
		const fromCHSNlg5 = accounts[1]
		await contractTXRJZ4r.approve.call(towa5jKQa, tokenId4ScRJU, {from: accounts[2]});
		await contractTXRJZ4r.safeTransferFrom.call(frompeF7yuX, tozdzzCA0, tokenIdg52d0YW, _dataEAPxPKN, {from: accounts[4]});
		await contractTXRJZ4r.setApprovalForAll.call(toW4prVOq, approveddc51Q6a, {from: accounts[5]});
		await contractTXRJZ4r.safeTransferFrom.call(fromCHSNlg5, toDDSJJZw, tokenIdrPddyX, _datavVysnc, {from: accounts[1]});

		await expect(contractTXRJZ4r.approve.call(towa5jKQa, tokenId4ScRJU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractwVv7ImS = await ERC721.new({from: accounts[2]});
		const tokenIdt1BFVG = BigInt("737")
		const tokenIdLOdpvSp = BigInt("411")
		const togkPo8V6 = accounts[0]
		const tokenIdg2MRnUL = BigInt("1627")
		const toaxq5fz = accounts[5]
		const tokenIdivOgOUP = BigInt("93")
		const toy8lpfEt = "0x0000000000000000000000000000000000000001"
		const fromjA4qnUc = accounts[4]
		const nullGseUJFL = await contractwVv7ImS.getApproved.call(tokenIdt1BFVG, {from: accounts[0]});
		await contractwVv7ImS.approve.call(togkPo8V6, tokenIdLOdpvSp, {from: accounts[3]});
		await contractwVv7ImS.approve.call(toaxq5fz, tokenIdg2MRnUL, {from: accounts[3]});
		await contractwVv7ImS.safeTransferFrom.call(fromjA4qnUc, toy8lpfEt, tokenIdivOgOUP, {from: accounts[2]});

		await expect(contractwVv7ImS.getApproved.call(tokenIdt1BFVG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractUgR6xAU = await ERC721.new({from: accounts[2]});
		const approvedA9geyeT = false
		const toA2sQxDg = accounts[4]
		const tokenIdZY6RwNF = BigInt("374")
		await contractUgR6xAU.setApprovalForAll.call(toA2sQxDg, approvedA9geyeT, {from: accounts[4]});
		const nullSKxg5MF = await contractUgR6xAU.getApproved.call(tokenIdZY6RwNF, {from: accounts[2]});

		await expect(contractUgR6xAU.setApprovalForAll.call(toA2sQxDg, approvedA9geyeT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})