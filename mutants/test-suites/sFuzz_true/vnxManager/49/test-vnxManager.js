const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerEM3GmKC = await vnxManager.new({from: accounts[4]});
		const uintPzIG3s9 = BigInt("1875")
		const addressCDRlSHz = accounts[2]
		const stringrOqasz = "MmHA2DYZSRpaxIGMlsxRKYwqMsBDfR8QHXlSCgycpQnQ9wLWH"
		const uintfAY8oQz = BigInt("1476")
		const addresssgPtGri = accounts[4]
		const boolsNuxuxz = await vnxManagerEM3GmKC.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressGPbjac = await vnxManagerEM3GmKC.addBearer.call(addressCDRlSHz, uintPzIG3s9, {from: accounts[4]});
//		await vnxManagerEM3GmKC.renounceOwnership.call({from: accounts[4]});
//		const uint256R0aeyXO = await vnxManagerEM3GmKC.addRootRole.call(stringrOqasz, {from: accounts[3]});
//		const booln8BnwQU = await vnxManagerEM3GmKC.hasRole.call(addresssgPtGri, uintfAY8oQz, {from: accounts[3]});
//		await vnxManagerEM3GmKC.renounceOwnership.call({from: accounts[0]});

		assert.equal(boolsNuxuxz, false)
		await expect(vnxManagerEM3GmKC.addBearer.call(addressCDRlSHz, uintPzIG3s9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageralZxUtJ = await vnxManager.new({from: accounts[3]});
		const uinttbLimy8 = BigInt("1946")
		const stringhA2jKU = "Qd1cb4oOQgfNVAEmWOLqnRjypGlvj9TWCG6FPNfVDgwrkSWlUNR2LjjonOL5fQfpY91QJdY6corAo6"
		const stringsnXJcei = "DEigo4VcombTCs7xnllFctVki30Qirdvxtt9My4pYWkzwPeMIT1IAssXXiu9Ih4R4hHiPXrmK1c3HkYaYjZwhCN2pf"
		const uintdV7CFca = BigInt("543")
		const addressTiJLYxd = accounts[3]
//		await vnxManageralZxUtJ.onlyAdmin.call({from: accounts[3]});
//		const uint256dkxtwYu = await vnxManageralZxUtJ.addRole.call(stringhA2jKU, uinttbLimy8, {from: accounts[1]});
//		const uint256NzNCQqK = await vnxManageralZxUtJ.addRootRole.call(stringsnXJcei, {from: accounts[0]});
//		const addressyDVQwOr = await vnxManageralZxUtJ.addBearer.call(addressTiJLYxd, uintdV7CFca, {from: accounts[5]});

		await expect(vnxManageralZxUtJ.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerUaWIFzP = await vnxManager.new({from: accounts[0]});
		const addressDnuIMDu = accounts[1]
		const addressjVNiQ6a = accounts[4]
		const uintbVmZEEt = BigInt("1688")
		const stringb7foMJH = "pc9Pv3rqhizux"
//		const boolUODk9qS = await vnxManagerUaWIFzP.transferContractOwnership.call(addressjVNiQ6a, addressDnuIMDu, {from: accounts[5]});
//		await vnxManagerUaWIFzP.renounceOwnership.call({from: accounts[2]});
//		const uint256xrHDmqd = await vnxManagerUaWIFzP.addRole.call(stringb7foMJH, uintbVmZEEt, {from: accounts[5]});
//		const boolal3DYxV = await vnxManagerUaWIFzP.isAdmin.call({from: accounts[4]});

		await expect(vnxManagerUaWIFzP.transferContractOwnership.call(addressjVNiQ6a, addressDnuIMDu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerAM0f7E = await vnxManager.new({from: accounts[3]});
		const uintuAwy5Oo = BigInt("1441")
		const stringy41h9ZZ = "UMiu49pdTrgDhj8qlTjNhzQDhQ6LgRh6am"
		const addresslFzEyYp = accounts[1]
		const addressH6Xvoa1 = accounts[0]
//		const uint256Yz6JKpo = await vnxManagerAM0f7E.addRole.call(stringy41h9ZZ, uintuAwy5Oo, {from: "0x0000000000000000000000000000000000000001"});
//		const boolX7vETHG = await vnxManagerAM0f7E.isOwner.call({from: accounts[5]});
//		const boolvWO7T3R = await vnxManagerAM0f7E.transferContractOwnership.call(addressH6Xvoa1, addresslFzEyYp, {from: accounts[3]});

		await expect(vnxManagerAM0f7E.addRole.call(stringy41h9ZZ, uintuAwy5Oo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerR3clOdZ = await vnxManager.new({from: accounts[5]});
		const stringqMrziEy = "sX6kKo1CxThRrA3oINA53AMJXzJvOs7gkep7qbqnz4XewzNaHohYaIELcFjwGRnvzqvbT5CW"
		const stringFpTRmTc = "yVLTUHuT1NP2Qw9LwalIHdAkixxq7WNEFVSq79B7MkeWFqlXd1ZvotF10JS3QQA13yiHyk1FpgbstgUJLthDtjtYQWt"
		const addressn6IqB3n = accounts[2]
		const addressIrxT9Ch = accounts[1]
		const uint256IrxskTl = await vnxManagerR3clOdZ.totalRoles.call({from: "0x0000000000000000000000000000000000000001"});
		const boollXyOnn1 = await vnxManagerR3clOdZ.isAdmin.call({from: accounts[4]});
		const addressspG6ys1 = await vnxManagerR3clOdZ.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ZIglfY = await vnxManagerR3clOdZ.addRootRole.call(stringqMrziEy, {from: accounts[2]});
		const uint256bAKCb0W = await vnxManagerR3clOdZ.addRootRole.call(stringFpTRmTc, {from: accounts[3]});
//		const boolj2oc9Xi = await vnxManagerR3clOdZ.transferContractOwnership.call(addressIrxT9Ch, addressn6IqB3n, {from: accounts[4]});

		assert.equal(addressspG6ys1, 0x99F27C1Aa7F34326fAFA30cBcB8a1C5880b0978A)
		assert.equal(boollXyOnn1, false)
		assert.equal(uint256IrxskTl, BigInt("1"))
		assert.equal(uint256ZIglfY, BigInt("0"))
		assert.equal(uint256bAKCb0W, BigInt("0"))
		await expect(vnxManagerR3clOdZ.transferContractOwnership.call(addressIrxT9Ch, addressn6IqB3n, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerSCbgFr = await vnxManager.new({from: accounts[2]});
		const uinttcMNgao = BigInt("566")
		const addressCQUx7Zo = accounts[2]
		const uintJ89ibFm = BigInt("499")
		const addressqKAbvvx = accounts[0]
		const stringnc8GH5V = "nCiN8gtIPbsVXvI4JpOqRBQIKSrabCSeG6f0rlJygOTKmkVUkkrTOI0GC83XrWWJGT5yGOlgSee1L6V0CFhrZ4RTQkJmtodh3Q1"
		const stringyzAZ1aQ = "3"
		const boolFTpjLEe = await vnxManagerSCbgFr.hasRole.call(addressCQUx7Zo, uinttcMNgao, {from: accounts[1]});
//		const addressGYWT02Z = await vnxManagerSCbgFr.removeBearer.call(addressqKAbvvx, uintJ89ibFm, {from: accounts[1]});
//		const uint256va4Beor = await vnxManagerSCbgFr.addRootRole.call(stringnc8GH5V, {from: accounts[4]});
//		const uint256qyUNJpw = await vnxManagerSCbgFr.totalRoles.call({from: accounts[4]});
//		const boolKF0hRtk = await vnxManagerSCbgFr.isOwner.call({from: accounts[0]});
//		const uint256XZglDXK = await vnxManagerSCbgFr.addRootRole.call(stringyzAZ1aQ, {from: accounts[4]});

		assert.equal(boolFTpjLEe, false)
		await expect(vnxManagerSCbgFr.removeBearer.call(addressqKAbvvx, uintJ89ibFm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerI5dddtr = await vnxManager.new({from: accounts[2]});
		const addresswDd7jH = accounts[3]
		const addresseyG4PjD = accounts[2]
		const addressbthbnHm = accounts[1]
//		const addressWDsFNs5 = await vnxManagerI5dddtr.transferOwnership.call(addresswDd7jH, {from: accounts[0]});
//		const boolTkrGqU9 = await vnxManagerI5dddtr.transferContractOwnership.call(addressbthbnHm, addresseyG4PjD, {from: accounts[2]});
//		await vnxManagerI5dddtr.onlyAdmin.call({from: accounts[3]});
//		await vnxManagerI5dddtr.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		await vnxManagerI5dddtr.renounceOwnership.call({from: accounts[5]});

		await expect(vnxManagerI5dddtr.transferOwnership.call(addresswDd7jH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageraOKWvc = await vnxManager.new({from: accounts[2]});
		const stringgx0xdJk = "oRjrjHHWHq8sl5AVZEF6O8pL4R7KjS181OUX62UM4LCsqbMU5KxAswhcl9lHYhWzSm4Kg"
		const addressDS9RJu7 = accounts[1]
		const uintMTU1bZH = BigInt("886")
		const addressqPPez4y = accounts[4]
		const uint256XEc6y4B = await vnxManageraOKWvc.totalRoles.call({from: accounts[1]});
		const uint256QKshf6 = await vnxManageraOKWvc.addRootRole.call(stringgx0xdJk, {from: accounts[4]});
		const addressNg6Ccer = await vnxManageraOKWvc.transferOwnership.call(addressDS9RJu7, {from: accounts[2]});
//		const addressY8EbSAH = await vnxManageraOKWvc.addBearer.call(addressqPPez4y, uintMTU1bZH, {from: accounts[2]});

		assert.equal(uint256QKshf6, BigInt("0"))
		assert.equal(uint256XEc6y4B, BigInt("1"))
		await expect(vnxManageraOKWvc.addBearer.call(addressqPPez4y, uintMTU1bZH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerMkloHHs = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsuxmHMr = BigInt("498")
		const addressMvHMMPr = accounts[1]
		const stringmSwWepo = "lTR6XtEGfXWYruirS8nNovH"
		const addressHqbsPb = accounts[3]
		const boolYdpA1EH = await vnxManagerMkloHHs.isAdmin.call({from: accounts[4]});
		const uint256YMStjzk = await vnxManagerMkloHHs.totalRoles.call({from: accounts[0]});
		const addresstruLTAS = await vnxManagerMkloHHs.addBearer.call(addressMvHMMPr, uintsuxmHMr, {from: accounts[0]});
		const uint256mmuFn7z = await vnxManagerMkloHHs.addRootRole.call(stringmSwWepo, {from: accounts[0]});
		const addresse4ngFdW = await vnxManagerMkloHHs.transferOwnership.call(addressHqbsPb, {from: accounts[3]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerFuHUNwt = await vnxManager.new({from: accounts[2]});
		const addresseFGopwO = accounts[3]
		const addressmTNwZxo = accounts[0]
		const uintJGIDtDM = BigInt("1568")
		const addressyoL3olR = accounts[1]
		const uintJ8UArMe = BigInt("975")
		const addressIL8zqkL = accounts[4]
//		const booldlUdVZz = await vnxManagerFuHUNwt.transferContractOwnership.call(addressmTNwZxo, addresseFGopwO, {from: accounts[2]});
//		const boolK4Px5Q7 = await vnxManagerFuHUNwt.hasRole.call(addressyoL3olR, uintJGIDtDM, {from: accounts[3]});
//		const uint256D5nvjOT = await vnxManagerFuHUNwt.totalRoles.call({from: accounts[2]});
//		const addressh4MvW6T = await vnxManagerFuHUNwt.addBearer.call(addressIL8zqkL, uintJ8UArMe, {from: accounts[3]});
//		await vnxManagerFuHUNwt.onlyAdmin.call({from: accounts[0]});

		await expect(vnxManagerFuHUNwt.transferContractOwnership.call(addressmTNwZxo, addresseFGopwO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageraOKWvc = await vnxManager.new({from: accounts[2]});
		const stringgx0xdJk = "ojrjHHWHq8s5AVZEF6O8pL4R7KjS181OUX62UM4LCsqbMU5KxAswhcl9lHYhWzSm4Kg"
		const uintDsBBmwV = BigInt("353")
		const stringmrbO687 = "8H77DHoNW1Ne5BzC7Am8TCYb2wQQOFrxFIlELVj1Kf8rxUak9A"
		const uintGZwL4du = BigInt("205")
		const addressnqlpp7V = accounts[0]
		const uintbidGYwZ = BigInt("824")
		const addressv4Elo9d = accounts[3]
		const uint256QKshf6 = await vnxManageraOKWvc.addRootRole.call(stringgx0xdJk, {from: accounts[4]});
//		await vnxManageraOKWvc.renounceOwnership.call({from: accounts[2]});
//		const uint256cBIsys = await vnxManageraOKWvc.addRole.call(stringmrbO687, uintDsBBmwV, {from: accounts[2]});
//		const addressiRSSeQl = await vnxManageraOKWvc.removeBearer.call(addressnqlpp7V, uintGZwL4du, {from: accounts[3]});
//		const boolkYKM3nD = await vnxManageraOKWvc.hasRole.call(addressv4Elo9d, uintbidGYwZ, {from: accounts[0]});

		assert.equal(uint256QKshf6, BigInt("0"))
		await expect(vnxManageraOKWvc.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})