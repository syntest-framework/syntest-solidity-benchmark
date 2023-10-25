const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractyCwawzQ = await ERC721.new({from: accounts[2]});
		const operatorwNW9DQn = accounts[2]
		const ownernsqlX85 = accounts[3]
		const tokenIdLpmcj0a = BigInt("391")
		const totYcTifP = accounts[2]
		const fromfH37QsV = accounts[3]
		const tokenIdoY28Vxq = BigInt("1677")
		const approvedQ8MDH6 = false
		const toXdCrvHb = accounts[3]
		const tokenIdFKRBBTR = BigInt("1875")
		const nullahj99pU = await contractyCwawzQ.isApprovedForAll.call(ownernsqlX85, operatorwNW9DQn, {from: accounts[1]});
		await contractyCwawzQ.transferFrom.call(fromfH37QsV, totYcTifP, tokenIdLpmcj0a, {from: accounts[0]});
		const nullox6DTd1 = await contractyCwawzQ.ownerOf.call(tokenIdoY28Vxq, {from: accounts[3]});
		await contractyCwawzQ.setApprovalForAll.call(toXdCrvHb, approvedQ8MDH6, {from: "0x0000000000000000000000000000000000000001"});
		const nullnL1osex = await contractyCwawzQ.getApproved.call(tokenIdFKRBBTR, {from: accounts[5]});

		assert.equal(nullahj99pU, false)
		await expect(contractyCwawzQ.transferFrom.call(fromfH37QsV, totYcTifP, tokenIdLpmcj0a, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractJia9eSE = await ERC721.new({from: accounts[5]});
		const tokenIdQwToDa8 = BigInt("1129")
		const tokenIdn104lX = BigInt("93")
		const toGNtjwM5 = accounts[2]
		const fromcOjNnnK = "0x0000000000000000000000000000000000000001"
		const operatorRlMmQEa = accounts[2]
		const ownerOPH29yE = accounts[2]
		const nullrT1KRqt = await contractJia9eSE.ownerOf.call(tokenIdQwToDa8, {from: accounts[3]});
		await contractJia9eSE.safeTransferFrom.call(fromcOjNnnK, toGNtjwM5, tokenIdn104lX, {from: accounts[0]});
		const nullGviXNfU = await contractJia9eSE.isApprovedForAll.call(ownerOPH29yE, operatorRlMmQEa, {from: accounts[0]});

		await expect(contractJia9eSE.ownerOf.call(tokenIdQwToDa8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractRMFYhOx = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdHNEH8NC = BigInt("1375")
		const too8ZgtDz = accounts[1]
		const fromqO1irf = accounts[2]
		const tokenIdB3koJDO = BigInt("1838")
		const tok0iAQDD = accounts[3]
		const fromMdf626x = accounts[3]
		const ownerNHhn20G = accounts[4]
		await contractRMFYhOx.safeTransferFrom.call(fromqO1irf, too8ZgtDz, tokenIdHNEH8NC, {from: accounts[1]});
		await contractRMFYhOx.safeTransferFrom.call(fromMdf626x, tok0iAQDD, tokenIdB3koJDO, {from: accounts[0]});
		const nullBJMZv50 = await contractRMFYhOx.balanceOf.call(ownerNHhn20G, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractCXfxo0K = await ERC721.new({from: accounts[2]});
		const tokenIdnxD2mvp = BigInt("1138")
		const tokenIdNiAj7go = BigInt("728")
		const to8argfx = accounts[3]
		const approvedILPbj0a = true
		const toDc5HnF = accounts[0]
		const tokenIdzwdNcU5 = BigInt("48")
		const nullRTlt9kG = await contractCXfxo0K.getApproved.call(tokenIdnxD2mvp, {from: accounts[0]});
		await contractCXfxo0K.approve.call(to8argfx, tokenIdNiAj7go, {from: accounts[2]});
		await contractCXfxo0K.setApprovalForAll.call(toDc5HnF, approvedILPbj0a, {from: accounts[4]});
		const nullf3thHDG = await contractCXfxo0K.ownerOf.call(tokenIdzwdNcU5, {from: accounts[0]});

		await expect(contractCXfxo0K.getApproved.call(tokenIdnxD2mvp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractSgluVX = await ERC721.new({from: accounts[5]});
		const approvedglM03jw = true
		const toJAAzICA = accounts[0]
		const tokenIdWhoO6in = BigInt("93")
		const tob7HBl3O = accounts[4]
		const frommAA2iy8 = "0x0000000000000000000000000000000000000001"
		const ownert15kI4 = accounts[3]
		const operatorKMqP3Z7 = accounts[2]
		const ownerGRanXA1 = accounts[2]
		await contractSgluVX.setApprovalForAll.call(toJAAzICA, approvedglM03jw, {from: accounts[0]});
		await contractSgluVX.safeTransferFrom.call(frommAA2iy8, tob7HBl3O, tokenIdWhoO6in, {from: accounts[0]});
		const nullCyfdsly = await contractSgluVX.balanceOf.call(ownert15kI4, {from: accounts[3]});
		const nullbMyMZLc = await contractSgluVX.isApprovedForAll.call(ownerGRanXA1, operatorKMqP3Z7, {from: accounts[0]});

		await expect(contractSgluVX.setApprovalForAll.call(toJAAzICA, approvedglM03jw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})