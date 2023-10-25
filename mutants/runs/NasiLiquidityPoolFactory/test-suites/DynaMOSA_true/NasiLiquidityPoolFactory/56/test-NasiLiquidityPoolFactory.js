const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressU6mj6Oa = accounts[4]
		const addressvM1oMLy = accounts[3]
		const uintkOZmeQ5 = BigInt("579")
		const uintQSaj6qb = BigInt("677")
		const NasiLiquidityPoolFactoryBceIrh5 = await NasiLiquidityPoolFactory.new(addressU6mj6Oa, addressvM1oMLy, uintkOZmeQ5, uintQSaj6qb, {from: accounts[1]});
		const byte5jXU38 = "0x08070e1618021b0f131c0801051e0d031114060510160a110b161c131e160110"
		const byteKXOnOdV = "0x131f061920130709081c0f1a0e1a0f010d0e12040118040f011b11001e180d1d"
		const uintf54LfSe = BigInt("113")
		const uintabs0RU1 = BigInt("626")
		const uintOWzOyMz = BigInt("1201")
		const addressVKgSroC = accounts[3]
		const uintM7pc56d = BigInt("1024")
		const addressp4l6vwq = accounts[4]
		const 
nOlyq70 = await NasiLiquidityPoolFactoryBceIrh5.delegateBySig.call(addressVKgSroC, uintOWzOyMz, uintabs0RU1, uintf54LfSe, byteKXOnOdV, byte5jXU38, {from: accounts[4]});
		const uint256rAqPkDz = await NasiLiquidityPoolFactoryBceIrh5.updatePool.call(uintM7pc56d, {from: accounts[3]});
		const addressCEVUdaC = await NasiLiquidityPoolFactoryBceIrh5.addMinter.call(addressp4l6vwq, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresspUn7HVS = accounts[3]
		const addressCSBMl1o = accounts[1]
		const uintvaxfhWx = BigInt("1638")
		const uintqEpPtpf = BigInt("1765")
		const NasiLiquidityPoolFactorycaYv2FL = await NasiLiquidityPoolFactory.new(addresspUn7HVS, addressCSBMl1o, uintvaxfhWx, uintqEpPtpf, {from: "0x0000000000000000000000000000000000000001"});
		const uintmRhsNzx = BigInt("2014")
		const addresstgUbNKE = accounts[1]
		const uint8A7dtT0g = await NasiLiquidityPoolFactorycaYv2FL.decimals.call({from: accounts[3]});
		const stringdmpPVas = await NasiLiquidityPoolFactorycaYv2FL.symbol.call({from: accounts[5]});
		await NasiLiquidityPoolFactorycaYv2FL.onlyMinter.call({from: accounts[1]});
		const stringputeKSL = await NasiLiquidityPoolFactorycaYv2FL.name.call({from: accounts[1]});
		const boolnKZaeO = await NasiLiquidityPoolFactorycaYv2FL.decreaseAllowance.call(addresstgUbNKE, uintmRhsNzx, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const string28FPCc = "uCL1qChSaEZmkJpykr8RSHH9ll2Nf2K5KVHtFAjhS1ib189kHzg4cmu8y2y4yXnTDGBkAuC3vTU1"
		const stringmIDa03R = "by1JPxy6Q6yDu3CdPzMN1iffd9gTysSRzpoc"
		const uintf50MtyV = BigInt("73")
		const NasiLiquidityPoolFactoryQuWbAad = await NasiLiquidityPoolFactory.new(string28FPCc, stringmIDa03R, uintf50MtyV, {from: accounts[2]});
		const addressZOXlyg = accounts[4]
		const uintRrjpOAv = BigInt("778")
		const addresstgMKTku = accounts[4]
		const addressqeg2RaT = accounts[2]
		const addressURUAky4 = accounts[4]
		await NasiLiquidityPoolFactoryQuWbAad.onlyPauser.call({from: accounts[4]});
		const boolFORRe3l = await NasiLiquidityPoolFactoryQuWbAad.isPauser.call(addressZOXlyg, {from: accounts[2]});
		const addressLYSywE = await NasiLiquidityPoolFactoryQuWbAad.burnFrom.call(addresstgMKTku, uintRrjpOAv, {from: accounts[2]});
		const uint256vZa0oOL = await NasiLiquidityPoolFactoryQuWbAad.balanceOf.call(addressqeg2RaT, {from: accounts[4]});
		const boolS497Ha = await NasiLiquidityPoolFactoryQuWbAad.isMinter.call(addressURUAky4, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringOsb9w9I = "tjo3EhZDpEXf1ShAMVU"
		const stringCMklj0J = "Dmv7RzcTIAZQS6fnkHoKySMCgI8vVXuksPnLGpTz7rVRmsG87K32sMAoIamPaFMGKdXKLUOovkPOKRej9b5"
		const uintZhPDVlA = BigInt("106")
		const NasiLiquidityPoolFactoryuhYwiVt = await NasiLiquidityPoolFactory.new(stringOsb9w9I, stringCMklj0J, uintZhPDVlA, {from: accounts[2]});
		const addressU9QBybx = await NasiLiquidityPoolFactoryuhYwiVt.owner.call({from: accounts[5]});
		await NasiLiquidityPoolFactoryuhYwiVt.onlyPauser.call({from: accounts[5]});
		await NasiLiquidityPoolFactoryuhYwiVt.massUpdatePools.call({from: accounts[1]});
		const uint256ILAN9VR = await NasiLiquidityPoolFactoryuhYwiVt.totalSupply.call({from: accounts[2]});
		const boolfKM6vM = await NasiLiquidityPoolFactoryuhYwiVt.paused.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringjGwFoHH = "NO416LLPw9P9qKoSuFNGUO8Kp"
		const stringRJnAAIW = "Zc8jWu6B1SJkN1QIL6eetg3PxZOUH55KPUUACCg2glkH7lt4dfUixSvcMv0idsZfs8B6vAcJ2oyimRLjGLXV1ecm5yXb"
		const uintoNvYnKa = BigInt("211")
		const NasiLiquidityPoolFactoryVhDXtrB = await NasiLiquidityPoolFactory.new(stringjGwFoHH, stringRJnAAIW, uintoNvYnKa, {from: accounts[0]});
		const uintX6YIP5f = BigInt("541")
		const addressGfPLfA2 = accounts[3]
		const uinteFnxrok = BigInt("1300")
		await NasiLiquidityPoolFactoryVhDXtrB.renounceMinter.call({from: accounts[2]});
		const addresstZuxYxa = await NasiLiquidityPoolFactoryVhDXtrB.burnFrom.call(addressGfPLfA2, uintX6YIP5f, {from: accounts[0]});
		const uint256FTnqwF3 = await NasiLiquidityPoolFactoryVhDXtrB.leaveStaking.call(uinteFnxrok, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringQvxal6a = "Xj7HPCxzSqYluWKKdQWcTabhSTroysdatFnqEALR1Lw1LjDVVlygyZSKLNekvyIVM50osiCCAjDMoa"
		const stringiF51nqw = "xECT87CtARAglkUehoqVUVk"
		const uintxxACcce = BigInt("183")
		const NasiLiquidityPoolFactorysn66dKL = await NasiLiquidityPoolFactory.new(stringQvxal6a, stringiF51nqw, uintxxACcce, {from: accounts[2]});
		const uintFKD9MS0 = BigInt("1482")
		const addressWsYdzXv = accounts[3]
		const uintIqhpIdw = BigInt("81")
		const uintIb9iIRI = BigInt("445")
		const addressWxWUl6J = accounts[2]
		const addresswNqS144 = accounts[3]
		const addressEagHxco = accounts[4]
		const boolipFSGKQ = await NasiLiquidityPoolFactorysn66dKL.approve.call(addressWsYdzXv, uintFKD9MS0, {from: accounts[3]});
		await NasiLiquidityPoolFactorysn66dKL.onlyMinter.call({from: accounts[4]});
		const uint256cMTUQbz = await NasiLiquidityPoolFactorysn66dKL.deposit.call(uintIb9iIRI, uintIqhpIdw, {from: accounts[5]});
		const address0TzfNA = await NasiLiquidityPoolFactorysn66dKL.dev.call(addressWxWUl6J, {from: accounts[0]});
		const addresswU28pqK = await NasiLiquidityPoolFactorysn66dKL._delegate.call(addressEagHxco, addresswNqS144, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringPRTUNL = "gJpRfk1TOMiBkvJJv"
		const stringmPy6YF = "WvkYirv5ICFUYVLTsxG3iqelJhHMeuzn0nvbTveo2z01WEhOjVlDNafH324nBdLhDs51"
		const uintdnbaWRF = BigInt("56")
		const NasiLiquidityPoolFactoryWgXDmZH = await NasiLiquidityPoolFactory.new(stringPRTUNL, stringmPy6YF, uintdnbaWRF, {from: accounts[4]});
		const uintJFy8IsU = BigInt("815")
		const addressiskKoe4 = "0x0000000000000000000000000000000000000001"
		const boolblpecTv = await NasiLiquidityPoolFactoryWgXDmZH.mint.call(addressiskKoe4, uintJFy8IsU, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryWgXDmZH.onlyPauser.call({from: accounts[5]});
		await NasiLiquidityPoolFactoryWgXDmZH.whenNotPaused.call({from: accounts[2]});
		const uint256waa6kMS = await NasiLiquidityPoolFactoryWgXDmZH.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringWac5UTW = "w3BCowkFQZJZxg"
		const stringuG0GL18 = "ewJ04QXQ4HuP4bJ"
		const uintEaJTlvi = BigInt("245")
		const NasiLiquidityPoolFactoryp7vQqb3 = await NasiLiquidityPoolFactory.new(stringWac5UTW, stringuG0GL18, uintEaJTlvi, {from: accounts[2]});
		const uintsxhMamu = BigInt("1225")
		const addressqZJZT5N = accounts[4]
		const addressnhKvCYT = "0x0000000000000000000000000000000000000001"
		const uintTcUXkW = BigInt("193")
		const addressQm2VYIR = accounts[5]
		const addressOk2Dot6 = accounts[5]
		const uintezVw4fq = BigInt("1955")
		const uintbfyvrJ = BigInt("181")
		const addressgtmwrCY = accounts[1]
		const boolVZdD27X = await NasiLiquidityPoolFactoryp7vQqb3.transferFrom.call(addressnhKvCYT, addressqZJZT5N, uintsxhMamu, {from: accounts[4]});
		const boolkgbdrGG = await NasiLiquidityPoolFactoryp7vQqb3.decreaseAllowance.call(addressQm2VYIR, uintTcUXkW, {from: accounts[1]});
		const uint256qwhmReQ = await NasiLiquidityPoolFactoryp7vQqb3.pendingNasi.call(uintezVw4fq, addressOk2Dot6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NYLkBtt = await NasiLiquidityPoolFactoryp7vQqb3.emergencyWithdraw.call(uintbfyvrJ, {from: accounts[2]});
		const boolS755psW = await NasiLiquidityPoolFactoryp7vQqb3.isMinter.call(addressgtmwrCY, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressl08ZFBU = accounts[4]
		const addressUXbqxVs = accounts[4]
		const uinteMbcJuh = BigInt("1459")
		const uintdJ0LjR = BigInt("989")
		const NasiLiquidityPoolFactoryN1F8RBv = await NasiLiquidityPoolFactory.new(addressl08ZFBU, addressUXbqxVs, uinteMbcJuh, uintdJ0LjR, {from: accounts[0]});
		const uintDNsB1Zv = BigInt("1436")
		const uintzhmSXKu = BigInt("404")
		const addresssRh9RV = accounts[3]
		const uint256cr7Q2Gm = await NasiLiquidityPoolFactoryN1F8RBv.withdraw.call(uintzhmSXKu, uintDNsB1Zv, {from: accounts[4]});
		const addressGMCo86d = await NasiLiquidityPoolFactoryN1F8RBv.addPauser.call(addresssRh9RV, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringmiALE03 = "jjNBlkQbvTi"
		const stringfP6eDJx = "26BIrKmfXyuqHKRJJkkrB26KYILt"
		const uintCBWEYxs = BigInt("26")
		const NasiLiquidityPoolFactoryzDVebq = await NasiLiquidityPoolFactory.new(stringmiALE03, stringfP6eDJx, uintCBWEYxs, {from: accounts[3]});
		const uintvNpoJTE = BigInt("302")
		const uintekm3j1O = BigInt("866")
		const uintdPPKVwB = BigInt("302")
		const addressp0bKiDo = accounts[1]
		const uintu2F7B95 = BigInt("137")
		const uintLArgptP = BigInt("223")
		const 
KA1FJ5A = await NasiLiquidityPoolFactoryzDVebq._writeCheckpoint.call(addressp0bKiDo, uintdPPKVwB, uintekm3j1O, uintvNpoJTE, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryzDVebq.renouncePauser.call({from: accounts[1]});
		await NasiLiquidityPoolFactoryzDVebq.renouncePauser.call({from: accounts[4]});
		const uint256OVxbCCp = await NasiLiquidityPoolFactoryzDVebq.withdraw.call(uintLArgptP, uintu2F7B95, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresse9yO1F = accounts[4]
		const addressjH2dmFS = accounts[4]
		const uintKoBPyvH = BigInt("1459")
		const uintd953GaS = BigInt("989")
		const NasiLiquidityPoolFactoryN1F8RBv = await NasiLiquidityPoolFactory.new(addresse9yO1F, addressjH2dmFS, uintKoBPyvH, uintd953GaS, {from: accounts[0]});
		const addressUdxfmz = accounts[1]
		const uintNhSE2kY = BigInt("1452")
		const uintIjJ718 = BigInt("404")
		const addressBCjCkpC = accounts[4]
		const addressCr7VpzX = await NasiLiquidityPoolFactoryN1F8RBv.dev.call(addressUdxfmz, {from: accounts[4]});
		const uint256cr7Q2Gm = await NasiLiquidityPoolFactoryN1F8RBv.withdraw.call(uintIjJ718, uintNhSE2kY, {from: accounts[4]});
		await NasiLiquidityPoolFactoryN1F8RBv.renounceOwnership.call({from: accounts[1]});
		const booltgnRrz = await NasiLiquidityPoolFactoryN1F8RBv.isOwner.call({from: accounts[0]});
		const addressGMCo86d = await NasiLiquidityPoolFactoryN1F8RBv.addPauser.call(addressBCjCkpC, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressGLAMHUs = accounts[4]
		const addressQgjkb4p = accounts[4]
		const uintFcAPBVo = BigInt("1459")
		const uintrFQZyGK = BigInt("989")
		const NasiLiquidityPoolFactoryN1F8RBv = await NasiLiquidityPoolFactory.new(addressGLAMHUs, addressQgjkb4p, uintFcAPBVo, uintrFQZyGK, {from: accounts[0]});
		const uintVW9Wq9 = BigInt("480")
		const uintuQA02OZ = BigInt("1125")
		const uintRqfEBJY = BigInt("788")
		const uintv38O03O = BigInt("1436")
		const uintM3595rr = BigInt("1383")
		const uint256GabxYPj = await NasiLiquidityPoolFactoryN1F8RBv.emergencyWithdraw.call(uintVW9Wq9, {from: accounts[2]});
		const uint256bnIl9RW = await NasiLiquidityPoolFactoryN1F8RBv.deposit.call(uintRqfEBJY, uintuQA02OZ, {from: accounts[5]});
		await NasiLiquidityPoolFactoryN1F8RBv.unpause.call({from: accounts[2]});
		const uint256cr7Q2Gm = await NasiLiquidityPoolFactoryN1F8RBv.withdraw.call(uintM3595rr, uintv38O03O, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringcigwkY = "Fw9UQz7DpIZlIlqMVID65g6zjE6qsU6HdMkX3As2zfkQdI7MsbRPEJDYTRYGwqVCJweEm1bsbvF1kMptFbyAWE"
		const stringYETpHr = "PpqYPTq38PjjpYc119d7eF1b8pKKFrDIrk8VqC2Kfxip0gQsMExOOhylU"
		const uintGddw2ly = BigInt("165")
		const NasiLiquidityPoolFactorySpxi4vh = await NasiLiquidityPoolFactory.new(stringcigwkY, stringYETpHr, uintGddw2ly, {from: accounts[1]});
		const addressKTLso9p = accounts[2]
		const uintDt6tYaW = BigInt("49")
		const uintNEMorv = BigInt("539")
		const addressxBhRwS = accounts[0]
		await NasiLiquidityPoolFactorySpxi4vh.renounceMinter.call({from: accounts[1]});
		const addressLfrgFoR = await NasiLiquidityPoolFactorySpxi4vh.delegate.call(addressKTLso9p, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nJpkh97 = await NasiLiquidityPoolFactorySpxi4vh.leaveStaking.call(uintDt6tYaW, {from: accounts[5]});
		const addressy5DXj5p = await NasiLiquidityPoolFactorySpxi4vh.burnFrom.call(addressxBhRwS, uintNEMorv, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresspcBawzM = accounts[4]
		const addressIGmkleV = accounts[4]
		const uintd3WO8D = BigInt("1459")
		const uintGf4mKvX = BigInt("989")
		const NasiLiquidityPoolFactoryN1F8RBv = await NasiLiquidityPoolFactory.new(addresspcBawzM, addressIGmkleV, uintd3WO8D, uintGf4mKvX, {from: accounts[0]});
		const uintnOXIwN = BigInt("1519")
		const uintWFC9ITU = BigInt("1389")
		const uintG9pzqYj = BigInt("1076")
		const uintTBvJ3Yq = BigInt("1436")
		const uinthDsAdwH = BigInt("404")
		const uint256ZH9ppgt = await NasiLiquidityPoolFactoryN1F8RBv.updatePool.call(uintnOXIwN, {from: accounts[0]});
		const uint256G6Jgi2z = await NasiLiquidityPoolFactoryN1F8RBv.getBonusMultiplier.call(uintG9pzqYj, uintWFC9ITU, {from: accounts[3]});
		await NasiLiquidityPoolFactoryN1F8RBv.massUpdatePools.call({from: accounts[2]});
		const uint256cr7Q2Gm = await NasiLiquidityPoolFactoryN1F8RBv.withdraw.call(uinthDsAdwH, uintTBvJ3Yq, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressTSrBAr3 = accounts[4]
		const addresstRQUUfR = accounts[4]
		const uintMZyrrLE = BigInt("1459")
		const uintrGSGIUb = BigInt("989")
		const NasiLiquidityPoolFactoryN1F8RBv = await NasiLiquidityPoolFactory.new(addressTSrBAr3, addresstRQUUfR, uintMZyrrLE, uintrGSGIUb, {from: accounts[0]});
		const uint9ZPQum = BigInt("1153")
		const uintHS2c4Kd = BigInt("1342")
		const addressvbMymuR = accounts[5]
		const uintVssXq7J = BigInt("1436")
		const uintaegGOm8 = BigInt("1443")
		const uint256bbXrZ2o = await NasiLiquidityPoolFactoryN1F8RBv.getBonusMultiplier.call(uintHS2c4Kd, uint9ZPQum, {from: accounts[4]});
		const addressA2AMpB = await NasiLiquidityPoolFactoryN1F8RBv.transferOwnership.call(addressvbMymuR, {from: accounts[3]});
		const uint256cr7Q2Gm = await NasiLiquidityPoolFactoryN1F8RBv.withdraw.call(uintaegGOm8, uintVssXq7J, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringGzcFPnu = "8IuAR84qmcn"
		const stringggeXv4f = "3cbMAueH12PQFkely7qRDlpQON2nvNFW29zV1B"
		const uintorZKQy = BigInt("163")
		const NasiLiquidityPoolFactoryK7ubBwk = await NasiLiquidityPoolFactory.new(stringGzcFPnu, stringggeXv4f, uintorZKQy, {from: accounts[2]});
		const uintHG3FdA4 = BigInt("595")
		const uintlBymuE = BigInt("1031")
		const addressBGDDPx = accounts[4]
		const uint256MRuchAN = await NasiLiquidityPoolFactoryK7ubBwk.migrate.call(uintHG3FdA4, {from: accounts[3]});
		const uint256PhhomWt = await NasiLiquidityPoolFactoryK7ubBwk.getPriorVotes.call(addressBGDDPx, uintlBymuE, {from: accounts[0]});
		await NasiLiquidityPoolFactoryK7ubBwk.whenPaused.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresshReS4fx = accounts[4]
		const addressE2rdHVd = accounts[4]
		const uintkeSl5Th = BigInt("1459")
		const uintIN2ndil = BigInt("989")
		const NasiLiquidityPoolFactoryN1F8RBv = await NasiLiquidityPoolFactory.new(addresshReS4fx, addressE2rdHVd, uintkeSl5Th, uintIN2ndil, {from: accounts[0]});
		const uintuveBTNu = BigInt("1125")
		const uintRF8gwLN = BigInt("744")
		const uint256bnIl9RW = await NasiLiquidityPoolFactoryN1F8RBv.deposit.call(uintRF8gwLN, uintuveBTNu, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressRdoJVIN = accounts[4]
		const addresswzdHutl = accounts[2]
		const uintFCeR0Sc = BigInt("1793")
		const uintkim6qU = BigInt("293")
		const NasiLiquidityPoolFactoryrZBMC40 = await NasiLiquidityPoolFactory.new(addressRdoJVIN, addresswzdHutl, uintFCeR0Sc, uintkim6qU, {from: accounts[1]});
		const uintsnWK4fb = BigInt("1792")
		const uintes8ihCx = BigInt("1425")
		const uintsC4hLUa = BigInt("1646")
		const uintJQr3SHT = BigInt("404")
		const boolHjGKSD = await NasiLiquidityPoolFactoryrZBMC40.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256KxtHTKr = await NasiLiquidityPoolFactoryrZBMC40.deposit.call(uintes8ihCx, uintsnWK4fb, {from: accounts[1]});
		const uint256bLh6ixJ = await NasiLiquidityPoolFactoryrZBMC40.deposit.call(uintJQr3SHT, uintsC4hLUa, {from: accounts[2]});
	});
})