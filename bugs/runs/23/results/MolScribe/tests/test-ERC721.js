const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractd12i2R3 = await ERC721.new({from: accounts[1]});
		const tokenIdIVRaAuj = BigInt("1007")
		const toAwYiZ07 = accounts[0]
		const tokenIdncDzQry = BigInt("1692")
		const tokenIdwwfheV7 = BigInt("1489")
		const tof16ThIg = accounts[2]
		const fromGJ1sOef = accounts[0]
		const approvedipNktoe = false
		const toZPqHU4w = accounts[3]
		await contractd12i2R3.approve.call(toAwYiZ07, tokenIdIVRaAuj, {from: accounts[5]});
		const nulll3ei3q = await contractd12i2R3.ownerOf.call(tokenIdncDzQry, {from: accounts[0]});
		await contractd12i2R3.transferFrom.call(fromGJ1sOef, tof16ThIg, tokenIdwwfheV7, {from: accounts[5]});
		await contractd12i2R3.setApprovalForAll.call(toZPqHU4w, approvedipNktoe, {from: accounts[0]});

		await expect(contractd12i2R3.approve.call(toAwYiZ07, tokenIdIVRaAuj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractCi8Wxc = await ERC721.new({from: accounts[2]});
		const tokenIdMSg9ksF = BigInt("301")
		const to94snhF = accounts[1]
		const fromtnIBry = accounts[0]
		const tokenIdh4hjuF = BigInt("342")
		const tomOErgA4 = accounts[0]
		await contractCi8Wxc.transferFrom.call(fromtnIBry, to94snhF, tokenIdMSg9ksF, {from: accounts[1]});
		await contractCi8Wxc.approve.call(tomOErgA4, tokenIdh4hjuF, {from: accounts[4]});

		await expect(contractCi8Wxc.transferFrom.call(fromtnIBry, to94snhF, tokenIdMSg9ksF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractDjla4GY = await ERC721.new({from: accounts[2]});
		const tokenIdLrQAndc = BigInt("1988")
		const tokenIdIWIt45J = BigInt("23")
		const tokenIdHw2dumy = BigInt("1795")
		const toZFaobvr = accounts[4]
		const nullJNSIHwZ = await contractDjla4GY.getApproved.call(tokenIdLrQAndc, {from: accounts[2]});
		const nullxjfE5zs = await contractDjla4GY.getApproved.call(tokenIdIWIt45J, {from: accounts[4]});
		await contractDjla4GY.approve.call(toZFaobvr, tokenIdHw2dumy, {from: accounts[1]});

		await expect(contractDjla4GY.getApproved.call(tokenIdLrQAndc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractoVOJjow = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdgyEgQX0 = BigInt("1190")
		const toP9p9FA = accounts[0]
		const _datatmiQ5hc = "0x0f1a201c111d1018110520051b1c"
		const tokenIdtB6TfqE = BigInt("1670")
		const tortwuG4z = accounts[0]
		const fromwYXYzv3 = accounts[3]
		await contractoVOJjow.approve.call(toP9p9FA, tokenIdgyEgQX0, {from: accounts[3]});
		await contractoVOJjow.safeTransferFrom.call(fromwYXYzv3, tortwuG4z, tokenIdtB6TfqE, _datatmiQ5hc, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractCGh4N4 = await ERC721.new({from: accounts[2]});
		const approved1JbxKF = true
		const toE6aDikr = accounts[2]
		const tokenIdnRfNP1h = BigInt("897")
		const tokenIdM6nCVHZ = BigInt("301")
		const toAdUx3z = accounts[2]
		const fromSTaY5S = accounts[0]
		await contractCGh4N4.setApprovalForAll.call(toE6aDikr, approved1JbxKF, {from: accounts[2]});
		const nullThVexX5 = await contractCGh4N4.ownerOf.call(tokenIdnRfNP1h, {from: accounts[3]});
		await contractCGh4N4.transferFrom.call(fromSTaY5S, toAdUx3z, tokenIdM6nCVHZ, {from: accounts[1]});

		await expect(contractCGh4N4.setApprovalForAll.call(toE6aDikr, approved1JbxKF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})