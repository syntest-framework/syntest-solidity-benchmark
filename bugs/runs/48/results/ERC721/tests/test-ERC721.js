const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractMkQY1a = await ERC721.new({from: accounts[1]});
		const tokenIdl69v1lP = BigInt("1803")
		const operatorW81CEq5 = accounts[2]
		const ownerCakfW4l = accounts[2]
		const approvedPZ71S2E = true
		const toV2dEd5 = accounts[1]
		const tokenIdO4rODZ4 = BigInt("178")
		const approvedP5vxr5m = true
		const tojVkVOTw = accounts[3]
		const tokenIdKylJJw3 = BigInt("808")
		const nulldJwFZYM = await contractMkQY1a.ownerOf.call(tokenIdl69v1lP, {from: "0x0000000000000000000000000000000000000001"});
		const nullxsuPDBK = await contractMkQY1a.isApprovedForAll.call(ownerCakfW4l, operatorW81CEq5, {from: accounts[5]});
		await contractMkQY1a.setApprovalForAll.call(toV2dEd5, approvedPZ71S2E, {from: accounts[4]});
		const nullqEfvgTa = await contractMkQY1a.getApproved.call(tokenIdO4rODZ4, {from: accounts[5]});
		await contractMkQY1a.setApprovalForAll.call(tojVkVOTw, approvedP5vxr5m, {from: accounts[0]});
		const nullbIpsDpc = await contractMkQY1a.ownerOf.call(tokenIdKylJJw3, {from: accounts[2]});

		await expect(contractMkQY1a.ownerOf.call(tokenIdl69v1lP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractE8mCVS2 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const _datal6lHcWm = "0x08090d160403081c0b021b1e12150703141f050b000f1a"
		const tokenIdctu0Yz6 = BigInt("667")
		const tomIlDIu2 = accounts[4]
		const fromLjjMLiA = accounts[4]
		const _dataFQLconO = "0x1a130c0e091c0b12001a"
		const tokenIdzmYiObQ = BigInt("96")
		const toOtLtut0 = accounts[3]
		const fromQ86hs9H = accounts[3]
		const tokenIdbuIlh0 = BigInt("341")
		const toY9Vb3wV = accounts[1]
		const frommMgnrU4 = accounts[4]
		const operatorXDpqnu8 = accounts[5]
		const ownerazd2b9o = accounts[0]
		const tokenIdLiq0YPu = BigInt("38")
		const tokenIdeWyamzz = BigInt("1883")
		await contractE8mCVS2.safeTransferFrom.call(fromLjjMLiA, tomIlDIu2, tokenIdctu0Yz6, _datal6lHcWm, {from: accounts[4]});
		await contractE8mCVS2.safeTransferFrom.call(fromQ86hs9H, toOtLtut0, tokenIdzmYiObQ, _dataFQLconO, {from: accounts[1]});
		await contractE8mCVS2.safeTransferFrom.call(frommMgnrU4, toY9Vb3wV, tokenIdbuIlh0, {from: "0x0000000000000000000000000000000000000001"});
		const nullCAKLDkT = await contractE8mCVS2.isApprovedForAll.call(ownerazd2b9o, operatorXDpqnu8, {from: accounts[3]});
		const nullj4ZLkX = await contractE8mCVS2.ownerOf.call(tokenIdLiq0YPu, {from: accounts[0]});
		const nullYM29cK0 = await contractE8mCVS2.ownerOf.call(tokenIdeWyamzz, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC721', async () => {
		const contractQiuiRYd = await ERC721.new({from: accounts[4]});
		const ownerXM7E4zQ = accounts[3]
		const tokenIdiOngYS3 = BigInt("44")
		const tokenIdDcW0qzA = BigInt("73")
		const toGn4ZdIT = accounts[4]
		const nullZccTJyF = await contractQiuiRYd.balanceOf.call(ownerXM7E4zQ, {from: accounts[4]});
		const nullrB3dkd = await contractQiuiRYd.getApproved.call(tokenIdiOngYS3, {from: accounts[1]});
		await contractQiuiRYd.approve.call(toGn4ZdIT, tokenIdDcW0qzA, {from: accounts[4]});

		assert.equal(nullZccTJyF, 0)
		await expect(contractQiuiRYd.getApproved.call(tokenIdiOngYS3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractn542Rb = await ERC721.new({from: accounts[5]});
		const tokenIdXzTmCOr = BigInt("1533")
		const toXTfWUX = accounts[2]
		const tokenIdQrpTwDD = BigInt("542")
		const toRDVaV9X = accounts[0]
		const fromBGUqGkt = accounts[1]
		const tokenIdMkvObzT = BigInt("421")
		const toqAsHTel = accounts[2]
		const fromjJlgEa = accounts[3]
		const operatorElpzQLJ = accounts[2]
		const ownervD07kDF = accounts[2]
		await contractn542Rb.approve.call(toXTfWUX, tokenIdXzTmCOr, {from: accounts[0]});
		await contractn542Rb.transferFrom.call(fromBGUqGkt, toRDVaV9X, tokenIdQrpTwDD, {from: accounts[5]});
		await contractn542Rb.transferFrom.call(fromjJlgEa, toqAsHTel, tokenIdMkvObzT, {from: accounts[0]});
		const nullw1AQH3W = await contractn542Rb.isApprovedForAll.call(ownervD07kDF, operatorElpzQLJ, {from: accounts[4]});

		await expect(contractn542Rb.approve.call(toXTfWUX, tokenIdXzTmCOr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbm1vAn4 = await ERC721.new({from: accounts[3]});
		const approvedTDNyPF = true
		const todF2gqR = accounts[5]
		const tokenIdLXwazdy = BigInt("537")
		const tokenIdwBvntpT = BigInt("191")
		const tokenIdCsKxnwD = BigInt("1210")
		const toTHUMhqC = accounts[4]
		await contractbm1vAn4.setApprovalForAll.call(todF2gqR, approvedTDNyPF, {from: accounts[5]});
		const nullTZ1IpgZ = await contractbm1vAn4.ownerOf.call(tokenIdLXwazdy, {from: accounts[0]});
		const nullgNCQGfb = await contractbm1vAn4.getApproved.call(tokenIdwBvntpT, {from: "0x0000000000000000000000000000000000000001"});
		await contractbm1vAn4.approve.call(toTHUMhqC, tokenIdCsKxnwD, {from: accounts[3]});

		await expect(contractbm1vAn4.setApprovalForAll.call(todF2gqR, approvedTDNyPF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXZ11obp = await ERC721.new({from: accounts[3]});
		const tokenIdUA9Py6r = BigInt("1434")
		const toFqhXrAw = accounts[1]
		const fromOiFK3uQ = accounts[2]
		const tokenIdmffiG5c = BigInt("552")
		const _dataQRjtCOG = "0x0614020d0606"
		const tokenIdf88e4Nd = BigInt("1439")
		const tokj3DcPe = accounts[5]
		const fromgpDpSZH = accounts[0]
		const tokenIdjEZhLao = BigInt("191")
		const tokenIdPWf16jx = BigInt("1210")
		const toMgxnCB7 = accounts[3]
		await contractXZ11obp.safeTransferFrom.call(fromOiFK3uQ, toFqhXrAw, tokenIdUA9Py6r, {from: accounts[3]});
		const nullnKXfow9 = await contractXZ11obp.ownerOf.call(tokenIdmffiG5c, {from: accounts[0]});
		await contractXZ11obp.safeTransferFrom.call(fromgpDpSZH, tokj3DcPe, tokenIdf88e4Nd, _dataQRjtCOG, {from: "0x0000000000000000000000000000000000000001"});
		const nullURdcBxq = await contractXZ11obp.getApproved.call(tokenIdjEZhLao, {from: "0x0000000000000000000000000000000000000001"});
		await contractXZ11obp.approve.call(toMgxnCB7, tokenIdPWf16jx, {from: accounts[3]});

		await expect(contractXZ11obp.safeTransferFrom.call(fromOiFK3uQ, toFqhXrAw, tokenIdUA9Py6r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMidRxT9 = await ERC721.new({from: accounts[0]});
		const approvedovSWYKF = true
		const tol65Ytrd = accounts[2]
		const tokenIdHN5Ffzs = BigInt("1503")
		const toGb4F0EK = accounts[3]
		const tokenIdL2XL4L0 = BigInt("1263")
		const approved4xtWxX = false
		const touQkuRcw = accounts[0]
		const operatorf0qFQHe = "0x0000000000000000000000000000000000000001"
		const ownerJgIItis = accounts[0]
		const operatorm02mFtK = accounts[3]
		const ownerZc2sns = accounts[4]
		const approvedHZ5wkMi = true
		const toQA5MbOB = accounts[1]
		await contractMidRxT9.setApprovalForAll.call(tol65Ytrd, approvedovSWYKF, {from: accounts[4]});
		await contractMidRxT9.approve.call(toGb4F0EK, tokenIdHN5Ffzs, {from: accounts[2]});
		const nullkaPAxhx = await contractMidRxT9.ownerOf.call(tokenIdL2XL4L0, {from: accounts[3]});
		await contractMidRxT9.setApprovalForAll.call(touQkuRcw, approved4xtWxX, {from: accounts[3]});
		const nullfMX0K9 = await contractMidRxT9.isApprovedForAll.call(ownerJgIItis, operatorf0qFQHe, {from: accounts[3]});
		const nullDkcxRb = await contractMidRxT9.isApprovedForAll.call(ownerZc2sns, operatorm02mFtK, {from: accounts[4]});
		await contractMidRxT9.setApprovalForAll.call(toQA5MbOB, approvedHZ5wkMi, {from: accounts[0]});

		await expect(contractMidRxT9.setApprovalForAll.call(tol65Ytrd, approvedovSWYKF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractQPwsMiW = await ERC721.new({from: accounts[5]});
		const tokenIdVzNOMpn = BigInt("335")
		const toy1NGJvQ = accounts[2]
		const fromSuiIQ6 = "0x0000000000000000000000000000000000000001"
		const tokenIdafxNcYQ = BigInt("533")
		const tovKwUrL = accounts[2]
		const fromzdhet8 = "0x0000000000000000000000000000000000000001"
		const approvedXS8jwzO = true
		const toEUbnFP = accounts[4]
		const approvedOgEu8HK = false
		const tokJeWWUm = accounts[4]
		const tokenIdaqrlGty = BigInt("723")
		await contractQPwsMiW.transferFrom.call(fromSuiIQ6, toy1NGJvQ, tokenIdVzNOMpn, {from: accounts[1]});
		await contractQPwsMiW.safeTransferFrom.call(fromzdhet8, tovKwUrL, tokenIdafxNcYQ, {from: accounts[0]});
		await contractQPwsMiW.setApprovalForAll.call(toEUbnFP, approvedXS8jwzO, {from: accounts[2]});
		await contractQPwsMiW.setApprovalForAll.call(tokJeWWUm, approvedOgEu8HK, {from: accounts[2]});
		const nullDQG0Lw = await contractQPwsMiW.ownerOf.call(tokenIdaqrlGty, {from: accounts[5]});

		await expect(contractQPwsMiW.transferFrom.call(fromSuiIQ6, toy1NGJvQ, tokenIdVzNOMpn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractYWujwc = await ERC721.new({from: accounts[5]});
		const operatoriPn4XuI = accounts[2]
		const ownerjjYlQuA = accounts[2]
		const nullD6f9gY1 = await contractYWujwc.isApprovedForAll.call(ownerjjYlQuA, operatoriPn4XuI, {from: accounts[4]});

		assert.equal(nullD6f9gY1, false)
	});
})