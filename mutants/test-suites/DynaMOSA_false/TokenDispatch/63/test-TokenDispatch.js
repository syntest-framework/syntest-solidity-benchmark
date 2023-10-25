const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchE4hXzzo = await TokenDispatch.new({from: accounts[5]});
		const uintNMTEDyV = BigInt("135")
		const uintHJVUTKZ = BigInt("22")
		const uintlZAxkKw = BigInt("1614")
		const addresshAc8PfQ = accounts[0]
		const addressw7G4L87 = accounts[5]
		const uinta0zBQwH = BigInt("142")
		const addressWobzLZY = accounts[1]
		const addressrVhHc8m = accounts[3]
		const uintf8O3Lt = BigInt("204")
		const uinte313LqY = BigInt("69")
		const uint256kRKdMrL = await TokenDispatchE4hXzzo.nextClaimHeightOf.call(uintNMTEDyV, {from: accounts[1]});
		const uint256iL2sVMG = await TokenDispatchE4hXzzo.claimedOf.call(uintHJVUTKZ, {from: accounts[3]});
		const addressmKY0Ck = await TokenDispatchE4hXzzo.approve.call(addressw7G4L87, addresshAc8PfQ, uintlZAxkKw, {from: accounts[2]});
		const 
YNK0Zsj = await TokenDispatchE4hXzzo.teamOf.call(uinta0zBQwH, {from: accounts[1]});
		const uint256pk3ub5 = await TokenDispatchE4hXzzo.updateTeam.call(uintf8O3Lt, addressrVhHc8m, addressWobzLZY, {from: accounts[1]});
		const 
ihhQjrp = await TokenDispatchE4hXzzo.teamOf.call(uinte313LqY, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchfV4rmcr = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkRDPds = BigInt("1535")
		const uinttZKzdBS = BigInt("29")
		const uintHqmPsBI = BigInt("1229")
		const addressMVpwQLI = accounts[0]
		const addresscztfh7l = accounts[0]
		const uintFffAAm1 = BigInt("42")
		const uintGEQdPq = await TokenDispatchfV4rmcr.signTransaction.call(uintkRDPds, {from: accounts[3]});
		const uint8ukvZUwr = await TokenDispatchfV4rmcr.claim.call(uinttZKzdBS, {from: accounts[2]});
		const uintsJetHMe = await TokenDispatchfV4rmcr.signTransaction.call(uintHqmPsBI, {from: accounts[1]});
		const uint256p3qt226 = await TokenDispatchfV4rmcr.updateTeam.call(uintFffAAm1, addresscztfh7l, addressMVpwQLI, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchh3ADcEE = await TokenDispatch.new({from: accounts[1]});
		const uintJJbcdU6 = BigInt("145")
		const uintkadDfDD = BigInt("80")
		const uint256WisXA89 = await TokenDispatchh3ADcEE.claimedOf.call(uintJJbcdU6, {from: accounts[4]});
		const uint8GrtEbc9 = await TokenDispatchh3ADcEE.claim.call(uintkadDfDD, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatch0XJVge = await TokenDispatch.new({from: accounts[3]});
		const addressOoA9RH4 = accounts[3]
		const addressWLfpuU5 = accounts[3]
		const uintbr9qoTs = BigInt("159")
		const uintmVdLxT8 = BigInt("206")
		const uint256yTqAHJe = await TokenDispatch0XJVge.updateTeam.call(uintbr9qoTs, addressWLfpuU5, addressOoA9RH4, {from: accounts[4]});
		const 
NoO1Q6A = await TokenDispatch0XJVge.teamOf.call(uintmVdLxT8, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchGmYgWMl = await TokenDispatch.new({from: accounts[0]});
		const uintUxLv4I = BigInt("26")
		const uinth9FMfsK = BigInt("218")
		const addressIqnC2U = accounts[1]
		const addressLxjeHx8 = accounts[4]
		const 
YRz38Fd = await TokenDispatchGmYgWMl.teamOf.call(uintUxLv4I, {from: accounts[4]});
		const addressLvWpb7G = await TokenDispatchGmYgWMl.approve.call(addressLxjeHx8, addressIqnC2U, uinth9FMfsK, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchFOab1Xh = await TokenDispatch.new({from: accounts[1]});
		const uintxt7B3A = BigInt("52")
		const uintfmJMJPa = BigInt("64")
		const uintoaE9UDP = BigInt("173")
		const uint256iHgJroc = await TokenDispatchFOab1Xh.balanceOf.call(uintxt7B3A, {from: "0x0000000000000000000000000000000000000001"});
		const uint8eAHm02d = await TokenDispatchFOab1Xh.claim.call(uintfmJMJPa, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ENIinPM = await TokenDispatchFOab1Xh.balanceOf.call(uintoaE9UDP, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchRPcM5eD = await TokenDispatch.new({from: accounts[4]});
		const uintddnskwc = BigInt("47")
		const uintKtYpPjR = BigInt("250")
		const uintzQT3b0q = BigInt("80")
		const uintAFkBVxh = BigInt("8")
		const uintRSm0u6X = BigInt("213")
		const uint8iC4yTe = await TokenDispatchRPcM5eD.claim.call(uintddnskwc, {from: accounts[1]});
		const uint256wovhR8a = await TokenDispatchRPcM5eD.nextClaimHeightOf.call(uintKtYpPjR, {from: accounts[1]});
		const 
LvaRmKW = await TokenDispatchRPcM5eD.teamOf.call(uintzQT3b0q, {from: accounts[3]});
		const uint256ZmLwRu = await TokenDispatchRPcM5eD.claimedOf.call(uintAFkBVxh, {from: accounts[0]});
		const 
AnvKTDK = await TokenDispatchRPcM5eD.teamOf.call(uintRSm0u6X, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchRPcM5eD = await TokenDispatch.new({from: accounts[4]});
		const uintCoDygE = BigInt("1999")
		const addressBb7iDlV = accounts[1]
		const addressYoC5PdL = accounts[5]
		const uintOH5oWV3 = BigInt("129")
		const uintlAyDKR7 = BigInt("47")
		const uintmAMJBl = BigInt("250")
		const uintGGQdFNg = BigInt("214")
		const uintEzrsdCS = BigInt("189")
		const uintthpAfw = BigInt("88")
		const uinth8oHb8L = BigInt("213")
		const addresszWqz7Tn = await TokenDispatchRPcM5eD.approve.call(addressYoC5PdL, addressBb7iDlV, uintCoDygE, {from: "0x0000000000000000000000000000000000000001"});
		const 
D5WDf9K = await TokenDispatchRPcM5eD.teamOf.call(uintOH5oWV3, {from: "0x0000000000000000000000000000000000000001"});
		const uint8iC4yTe = await TokenDispatchRPcM5eD.claim.call(uintlAyDKR7, {from: accounts[1]});
		const uint256wovhR8a = await TokenDispatchRPcM5eD.nextClaimHeightOf.call(uintmAMJBl, {from: accounts[1]});
		const 
LvaRmKW = await TokenDispatchRPcM5eD.teamOf.call(uintGGQdFNg, {from: accounts[3]});
		const uint256Q9854b1 = await TokenDispatchRPcM5eD.balanceOf.call(uintEzrsdCS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZmLwRu = await TokenDispatchRPcM5eD.claimedOf.call(uintthpAfw, {from: accounts[0]});
		const 
AnvKTDK = await TokenDispatchRPcM5eD.teamOf.call(uinth8oHb8L, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchh3ADcEE = await TokenDispatch.new({from: accounts[1]});
		const uintnbobLK = BigInt("1115")
		const addressGrwD92u = accounts[1]
		const addressTnEjBAJ = accounts[1]
		const uints91XJF = BigInt("93")
		const uinthQF7vqR = BigInt("152")
		const addressAMmPqXX = accounts[0]
		const addressMYVSb52 = "0x0000000000000000000000000000000000000001"
		const uintBuM90Fj = BigInt("185")
		const addressWfUSOj = await TokenDispatchh3ADcEE.approve.call(addressTnEjBAJ, addressGrwD92u, uintnbobLK, {from: accounts[1]});
		const uint256t7evkAJ = await TokenDispatchh3ADcEE.nextClaimHeightOf.call(uints91XJF, {from: accounts[1]});
		const uint8waflrQ4 = await TokenDispatchh3ADcEE.claim.call(uinthQF7vqR, {from: accounts[4]});
		const uint256NmHSdzi = await TokenDispatchh3ADcEE.updateTeam.call(uintBuM90Fj, addressMYVSb52, addressAMmPqXX, {from: "0x0000000000000000000000000000000000000001"});
	});
})