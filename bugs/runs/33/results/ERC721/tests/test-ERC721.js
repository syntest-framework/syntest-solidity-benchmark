const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contracteqYwYG8 = await ERC721.new({from: accounts[2]});
		const operatorDbQc7On = accounts[2]
		const ownervTMYy4Z = accounts[4]
		const ownerpEp5g5h = accounts[3]
		const operatorLGtGUMz = accounts[4]
		const ownerl2it8qJ = accounts[3]
		const nullWE8Oynr = await contracteqYwYG8.isApprovedForAll.call(ownervTMYy4Z, operatorDbQc7On, {from: accounts[4]});
		const nullg3s2K8K = await contracteqYwYG8.balanceOf.call(ownerpEp5g5h, {from: accounts[1]});
		const nullWkwT1yn = await contracteqYwYG8.isApprovedForAll.call(ownerl2it8qJ, operatorLGtGUMz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullWE8Oynr, false)
		assert.equal(nullWkwT1yn, false)
		assert.equal(nullg3s2K8K, 0)
	});

	it('test for ERC721', async () => {
		const contractt8b023y = await ERC721.new({from: accounts[4]});
		const tokenIdZ48znws = BigInt("1456")
		const tokenIdLJRuj1y = BigInt("428")
		const tokenIdYX5ybsT = BigInt("1670")
		const tokenIdJC3Z73B = BigInt("2022")
		const toB1Hwx7U = accounts[2]
		const fromxP16Kj0 = accounts[1]
		const operatorjtYJP0 = accounts[2]
		const ownerFMuseEW = accounts[0]
		const nullUOsAcwU = await contractt8b023y.getApproved.call(tokenIdZ48znws, {from: accounts[5]});
		const nullHvnVo41 = await contractt8b023y.ownerOf.call(tokenIdLJRuj1y, {from: accounts[3]});
		const nullf129bpJ = await contractt8b023y.getApproved.call(tokenIdYX5ybsT, {from: accounts[4]});
		await contractt8b023y.safeTransferFrom.call(fromxP16Kj0, toB1Hwx7U, tokenIdJC3Z73B, {from: accounts[5]});
		const nullen8KxNh = await contractt8b023y.isApprovedForAll.call(ownerFMuseEW, operatorjtYJP0, {from: accounts[1]});

		await expect(contractt8b023y.getApproved.call(tokenIdZ48znws, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractDAkZtO = await ERC721.new({from: accounts[3]});
		const tokenId40GHuW = BigInt("450")
		const tokenIdLpKwUst = BigInt("996")
		const toI8HS38A = accounts[4]
		const nullCoeGc0J = await contractDAkZtO.ownerOf.call(tokenId40GHuW, {from: accounts[2]});
		await contractDAkZtO.approve.call(toI8HS38A, tokenIdLpKwUst, {from: accounts[0]});

		await expect(contractDAkZtO.ownerOf.call(tokenId40GHuW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractodIArIV = await ERC721.new({from: accounts[0]});
		const approvedWpZPvw = true
		const toEn5izRP = accounts[0]
		const tokenIdh2OpC30 = BigInt("1994")
		const toP55CfV1 = accounts[1]
		const tokenIdx9zqBTw = BigInt("616")
		const topI9zEhX = accounts[3]
		const fromhQSsGmD = accounts[2]
		const tokenIdqKS5dsd = BigInt("1184")
		const togg86Z8P = accounts[0]
		await contractodIArIV.setApprovalForAll.call(toEn5izRP, approvedWpZPvw, {from: accounts[4]});
		await contractodIArIV.approve.call(toP55CfV1, tokenIdh2OpC30, {from: accounts[5]});
		await contractodIArIV.transferFrom.call(fromhQSsGmD, topI9zEhX, tokenIdx9zqBTw, {from: accounts[4]});
		await contractodIArIV.approve.call(togg86Z8P, tokenIdqKS5dsd, {from: accounts[4]});

		await expect(contractodIArIV.setApprovalForAll.call(toEn5izRP, approvedWpZPvw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbu5kwVv = await ERC721.new({from: accounts[4]});
		const tokenIdpMZdX1u = BigInt("1706")
		const tooDfIUAy = accounts[1]
		const fromKhFUs6d = accounts[0]
		const ownert8cIufx = accounts[3]
		await contractbu5kwVv.transferFrom.call(fromKhFUs6d, tooDfIUAy, tokenIdpMZdX1u, {from: "0x0000000000000000000000000000000000000001"});
		const nullyXBtppn = await contractbu5kwVv.balanceOf.call(ownert8cIufx, {from: accounts[1]});

		await expect(contractbu5kwVv.transferFrom.call(fromKhFUs6d, tooDfIUAy, tokenIdpMZdX1u, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractnIBhxPK = await ERC721.new({from: accounts[3]});
		const tokenIdhHYRYJP = BigInt("1226")
		const toWCFuRKi = accounts[1]
		const fromzl0wn48 = accounts[2]
		const tokenIdyQLlDBh = BigInt("988")
		const tojAuFXnG = accounts[4]
		await contractnIBhxPK.safeTransferFrom.call(fromzl0wn48, toWCFuRKi, tokenIdhHYRYJP, {from: accounts[3]});
		await contractnIBhxPK.approve.call(tojAuFXnG, tokenIdyQLlDBh, {from: accounts[0]});

		await expect(contractnIBhxPK.safeTransferFrom.call(fromzl0wn48, toWCFuRKi, tokenIdhHYRYJP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractjadWA4 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdKT43JQr = BigInt("558")
		const torzZ0fqT = accounts[1]
		const approvedHDTyAE8 = true
		const toXjK5gl = accounts[0]
		const tokenIdOZODTkr = BigInt("1546")
		const approvedCrrumvM = true
		const togOQ87Rx = accounts[4]
		const _dataai8ZvyH = "0x01080f03081f0411120d061207050a0d1f0814"
		const tokenIdX8pmqDs = BigInt("598")
		const tojcV4NHQ = accounts[0]
		const fromBXJE29 = accounts[5]
		await contractjadWA4.approve.call(torzZ0fqT, tokenIdKT43JQr, {from: accounts[5]});
		await contractjadWA4.setApprovalForAll.call(toXjK5gl, approvedHDTyAE8, {from: accounts[4]});
		const nullzuUiYf1 = await contractjadWA4.ownerOf.call(tokenIdOZODTkr, {from: accounts[5]});
		await contractjadWA4.setApprovalForAll.call(togOQ87Rx, approvedCrrumvM, {from: accounts[1]});
		await contractjadWA4.safeTransferFrom.call(fromBXJE29, tojcV4NHQ, tokenIdX8pmqDs, _dataai8ZvyH, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractjgIdo38 = await ERC721.new({from: accounts[3]});
		const approvedzXtH4Nd = false
		const tojoY27M3 = accounts[0]
		const tokenIdQ7KPiKf = BigInt("1156")
		const tokenId9EfR4s = BigInt("996")
		const tonA5yNsa = accounts[4]
		await contractjgIdo38.setApprovalForAll.call(tojoY27M3, approvedzXtH4Nd, {from: accounts[0]});
		const nullCf1l4he = await contractjgIdo38.ownerOf.call(tokenIdQ7KPiKf, {from: accounts[3]});
		await contractjgIdo38.approve.call(tonA5yNsa, tokenId9EfR4s, {from: accounts[0]});

		await expect(contractjgIdo38.setApprovalForAll.call(tojoY27M3, approvedzXtH4Nd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})