const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractTM0xjzp = await ERC721.new({from: accounts[0]});
		const tokenIdqI76p4y = BigInt("1403")
		const todLSbzXR = accounts[3]
		const tokenIdVJX3Cr9 = BigInt("998")
		const toFqGLAzK = accounts[2]
		const approvedo2XRaz = true
		const toGIUPxsE = accounts[4]
		const tokenIdQqzdQtg = BigInt("1165")
		const togF6xVEg = accounts[3]
		const operator46lUYY = accounts[2]
		const ownerozApznw = accounts[2]
		await contractTM0xjzp.approve.call(todLSbzXR, tokenIdqI76p4y, {from: accounts[4]});
		await contractTM0xjzp.approve.call(toFqGLAzK, tokenIdVJX3Cr9, {from: accounts[1]});
		await contractTM0xjzp.setApprovalForAll.call(toGIUPxsE, approvedo2XRaz, {from: accounts[1]});
		await contractTM0xjzp.approve.call(togF6xVEg, tokenIdQqzdQtg, {from: accounts[4]});
		const nullGvEIVxX = await contractTM0xjzp.isApprovedForAll.call(ownerozApznw, operator46lUYY, {from: accounts[1]});

		await expect(contractTM0xjzp.approve.call(todLSbzXR, tokenIdqI76p4y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFDmq2Jz = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdKOR59Yo = BigInt("1849")
		const toXlfiuEG = accounts[2]
		const fromrJChPz = accounts[2]
		const tokenIdZNo2HbR = BigInt("1390")
		const tokdvc5VF = accounts[1]
		const fromoyOXcch = "0x0000000000000000000000000000000000000001"
		const _dataJETGYtg = "0x111c0c07060e1e"
		const tokenIdNFFlcCv = BigInt("476")
		const toR7IuXTh = accounts[1]
		const fromIC0gAmD = accounts[0]
		const tokenIdjQ4E2Ph = BigInt("793")
		const toxcWK4vD = accounts[4]
		await contractFDmq2Jz.safeTransferFrom.call(fromrJChPz, toXlfiuEG, tokenIdKOR59Yo, {from: accounts[3]});
		await contractFDmq2Jz.transferFrom.call(fromoyOXcch, tokdvc5VF, tokenIdZNo2HbR, {from: "0x0000000000000000000000000000000000000001"});
		await contractFDmq2Jz.safeTransferFrom.call(fromIC0gAmD, toR7IuXTh, tokenIdNFFlcCv, _dataJETGYtg, {from: accounts[2]});
		await contractFDmq2Jz.approve.call(toxcWK4vD, tokenIdjQ4E2Ph, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractTgi85LI = await ERC721.new({from: accounts[4]});
		const _dataA41BdAq = "0x0d0c070e181100"
		const tokenIdz8ybajL = BigInt("886")
		const towq0GRIH = accounts[3]
		const fromCsfFjrt = accounts[2]
		const tokenIdbgRtLp5 = BigInt("488")
		const tokenIditkhSSU = BigInt("1878")
		await contractTgi85LI.safeTransferFrom.call(fromCsfFjrt, towq0GRIH, tokenIdz8ybajL, _dataA41BdAq, {from: accounts[2]});
		const nullXMjCdc = await contractTgi85LI.getApproved.call(tokenIdbgRtLp5, {from: accounts[1]});
		const nullqarJzg8 = await contractTgi85LI.ownerOf.call(tokenIditkhSSU, {from: accounts[3]});

		await expect(contractTgi85LI.safeTransferFrom.call(fromCsfFjrt, towq0GRIH, tokenIdz8ybajL, _dataA41BdAq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracto6nSo85 = await ERC721.new({from: accounts[0]});
		const ownernGXSlkW = accounts[4]
		const approvednllurgO = true
		const toPG2c5RP = accounts[0]
		const ownerCBKSscM = accounts[1]
		const operatorXhkR2Kd = "0x0000000000000000000000000000000000000001"
		const ownerZX36fc = accounts[3]
		const operatorXLn2DmI = accounts[2]
		const ownerwFdpaeQ = accounts[3]
		const nullTDPSQyi = await contracto6nSo85.balanceOf.call(ownernGXSlkW, {from: "0x0000000000000000000000000000000000000001"});
		await contracto6nSo85.setApprovalForAll.call(toPG2c5RP, approvednllurgO, {from: "0x0000000000000000000000000000000000000001"});
		const nullLWx9Cg7 = await contracto6nSo85.balanceOf.call(ownerCBKSscM, {from: "0x0000000000000000000000000000000000000001"});
		const nulltJAAJR4 = await contracto6nSo85.isApprovedForAll.call(ownerZX36fc, operatorXhkR2Kd, {from: accounts[4]});
		const nullfA4cl7 = await contracto6nSo85.isApprovedForAll.call(ownerwFdpaeQ, operatorXLn2DmI, {from: accounts[4]});

		assert.equal(nullLWx9Cg7, 0)
		assert.equal(nullTDPSQyi, 0)
		assert.equal(nullfA4cl7, false)
		assert.equal(nulltJAAJR4, false)
	});

	it('test for ERC721', async () => {
		const contractrqLe3tf = await ERC721.new({from: accounts[1]});
		const tokenIdp9k3Iyn = BigInt("868")
		const toq37k5s9 = accounts[1]
		const fromhdik5zn = "0x0000000000000000000000000000000000000001"
		const tokenIdl94ESWf = BigInt("1040")
		const totFXjg6s = accounts[5]
		const tokenIdmo3DzNR = BigInt("1887")
		const toXdaba9G = accounts[0]
		const fromgM8Cibp = accounts[0]
		const _datal7ZLdlZ = "0x121b091e06"
		const tokenIdoOkn7mI = BigInt("558")
		const tozE1XpEs = accounts[1]
		const fromRWldbqi = accounts[1]
		await contractrqLe3tf.safeTransferFrom.call(fromhdik5zn, toq37k5s9, tokenIdp9k3Iyn, {from: accounts[4]});
		await contractrqLe3tf.approve.call(totFXjg6s, tokenIdl94ESWf, {from: accounts[0]});
		await contractrqLe3tf.safeTransferFrom.call(fromgM8Cibp, toXdaba9G, tokenIdmo3DzNR, {from: accounts[3]});
		await contractrqLe3tf.safeTransferFrom.call(fromRWldbqi, tozE1XpEs, tokenIdoOkn7mI, _datal7ZLdlZ, {from: accounts[1]});

		await expect(contractrqLe3tf.safeTransferFrom.call(fromhdik5zn, toq37k5s9, tokenIdp9k3Iyn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractrsegMwZ = await ERC721.new({from: accounts[1]});
		const ownerAV6f2bK = accounts[0]
		const operatorMC7Hgag = accounts[3]
		const ownerfteof4V = accounts[4]
		const tokenIdDr3Bmjv = BigInt("592")
		const toDyHuHTF = accounts[0]
		const fromdp6wy9 = accounts[3]
		const tokenIdFwbhOUi = BigInt("876")
		const toTSm6YH = accounts[2]
		const fromNfMNnz = accounts[4]
		const nullMu81K6X = await contractrsegMwZ.balanceOf.call(ownerAV6f2bK, {from: accounts[1]});
		const nullaSAp8R2 = await contractrsegMwZ.isApprovedForAll.call(ownerfteof4V, operatorMC7Hgag, {from: accounts[1]});
		await contractrsegMwZ.transferFrom.call(fromdp6wy9, toDyHuHTF, tokenIdDr3Bmjv, {from: accounts[0]});
		await contractrsegMwZ.safeTransferFrom.call(fromNfMNnz, toTSm6YH, tokenIdFwbhOUi, {from: accounts[3]});

		assert.equal(nullMu81K6X, 0)
		assert.equal(nullaSAp8R2, false)
		await expect(contractrsegMwZ.transferFrom.call(fromdp6wy9, toDyHuHTF, tokenIdDr3Bmjv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractU1MzeKq = await ERC721.new({from: accounts[0]});
		const tokenIdupOXAUr = BigInt("1500")
		const tokenIdjiRbFcu = BigInt("1342")
		const approvedbSso6bX = true
		const towXcpxf9 = accounts[1]
		const ownerG8bxJ20 = accounts[2]
		const tokenIdbM8QLYT = BigInt("1608")
		const tox8rTqM2 = accounts[4]
		const nullPWRPk92 = await contractU1MzeKq.getApproved.call(tokenIdupOXAUr, {from: accounts[1]});
		const nullphSCob = await contractU1MzeKq.ownerOf.call(tokenIdjiRbFcu, {from: accounts[4]});
		await contractU1MzeKq.setApprovalForAll.call(towXcpxf9, approvedbSso6bX, {from: accounts[3]});
		const nullfePrcBK = await contractU1MzeKq.balanceOf.call(ownerG8bxJ20, {from: accounts[0]});
		await contractU1MzeKq.approve.call(tox8rTqM2, tokenIdbM8QLYT, {from: accounts[3]});

		await expect(contractU1MzeKq.getApproved.call(tokenIdupOXAUr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractJHChTW = await ERC721.new({from: accounts[3]});
		const approvedH0kdFKn = false
		const togo20Yze = accounts[0]
		const approvedQZECL4o = false
		const toKoZPUjJ = accounts[0]
		const tokenIdTKRkMk = BigInt("1714")
		const tokenIdeJz9FkK = BigInt("1235")
		const toX8G7ljJ = accounts[5]
		const fromEV5GBHl = accounts[2]
		const tokenIdf70tYY = BigInt("1404")
		const operatorP3wefzM = accounts[0]
		const owneru7TIqP = accounts[1]
		const tokenIdLiNBSJP = BigInt("157")
		await contractJHChTW.setApprovalForAll.call(togo20Yze, approvedH0kdFKn, {from: "0x0000000000000000000000000000000000000001"});
		await contractJHChTW.setApprovalForAll.call(toKoZPUjJ, approvedQZECL4o, {from: accounts[0]});
		const nullNcv3Ej = await contractJHChTW.getApproved.call(tokenIdTKRkMk, {from: accounts[3]});
		await contractJHChTW.transferFrom.call(fromEV5GBHl, toX8G7ljJ, tokenIdeJz9FkK, {from: "0x0000000000000000000000000000000000000001"});
		const nullqWBI7s = await contractJHChTW.ownerOf.call(tokenIdf70tYY, {from: accounts[1]});
		const nullbYUeGMs = await contractJHChTW.isApprovedForAll.call(owneru7TIqP, operatorP3wefzM, {from: accounts[0]});
		const nullU6zZdPA = await contractJHChTW.ownerOf.call(tokenIdLiNBSJP, {from: accounts[0]});

		await expect(contractJHChTW.setApprovalForAll.call(togo20Yze, approvedH0kdFKn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})