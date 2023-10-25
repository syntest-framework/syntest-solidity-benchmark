const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrpJmHml = accounts[2]
		const FOSTERAddrrgBvOOl = accounts[5]
		const initialRatePKlryZ = BigInt("1733")
		const initialPeriodQF36pZs = BigInt("1620")
		const initialOwneriYColUv = "0x0000000000000000000000000000000000000001"
		const contractzqkaJe = await Reseller.new(USDTAddrpJmHml, FOSTERAddrrgBvOOl, initialRatePKlryZ, initialPeriodQF36pZs, initialOwneriYColUv, {from: accounts[1]});
		const newRatenx2T9S = BigInt("380")
		const newFeeopksiZd = BigInt("251")
		const commentnBvHd8 = "u9YdipacRiiUlBWHb7DuTGkwIsi9QUAYwwXg"
		const _ref5DmzEmIX = accounts[2]
		const _ref4JEGVYoS = accounts[4]
		const _ref3ZOwSlr = accounts[5]
		const _ref2ZOpDmcp = accounts[2]
		const _ref1ayM2BHH = accounts[0]
		const valueal0xSXh = BigInt("1435")
		const newPeriodIqIWD5s = BigInt("1133")
		const newBoss3rPDJmOV = "0x0000000000000000000000000000000000000001"
		await contractzqkaJe.setRate.call(newRatenx2T9S, {from: accounts[1]});
		await contractzqkaJe.setFee.call(newFeeopksiZd, {from: accounts[4]});
		await contractzqkaJe.switchState.call({from: accounts[5]});
		await contractzqkaJe.purchase.call(valueal0xSXh, _ref1ayM2BHH, _ref2ZOpDmcp, _ref3ZOwSlr, _ref4JEGVYoS, _ref5DmzEmIX, commentnBvHd8, {from: accounts[2]});
		await contractzqkaJe.setPeriod.call(newPeriodIqIWD5s, {from: accounts[1]});
		await contractzqkaJe.deposeBoss3.call(newBoss3rPDJmOV, {from: accounts[4]});

		await expect(contractzqkaJe.setRate.call(newRatenx2T9S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdGWQZWs = accounts[3]
		const FOSTERAddrWUq5af = accounts[0]
		const initialRateVsXKKT = BigInt("1945")
		const initialPeriode1DUiAL = BigInt("552")
		const initialOwnerZmp1LG = accounts[1]
		const contractYade5y = await Reseller.new(USDTAddrdGWQZWs, FOSTERAddrWUq5af, initialRateVsXKKT, initialPeriode1DUiAL, initialOwnerZmp1LG, {from: accounts[1]});
		const newBoss1IfEtoZx = accounts[1]
		const valueQgFiOpt = BigInt("1672")
		const newBoss3a9dO3Vm = accounts[4]
		await contractYade5y.deposeBoss1.call(newBoss1IfEtoZx, {from: accounts[1]});
		await contractYade5y.withdraw.call(valueQgFiOpt, {from: accounts[4]});
		await contractYade5y.deposeBoss3.call(newBoss3a9dO3Vm, {from: accounts[0]});

		await expect(contractYade5y.deposeBoss1.call(newBoss1IfEtoZx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddryX97PG6 = accounts[1]
		const FOSTERAddrrmfTonL = accounts[0]
		const initialRateMIfssv = BigInt("507")
		const initialPeriodI6NVVyy = BigInt("1071")
		const initialOwnerDILlBpc = accounts[0]
		const contracto25uEC5 = await Reseller.new(USDTAddryX97PG6, FOSTERAddrrmfTonL, initialRateMIfssv, initialPeriodI6NVVyy, initialOwnerDILlBpc, {from: "0x0000000000000000000000000000000000000001"});
		const newBoss2QDMMUp3 = accounts[1]
		const _ref5NLZUdSg = accounts[2]
		const _ref4veeoIyZ = accounts[5]
		const _ref38Ia6kg = accounts[0]
		const _ref2cUPPuKr = accounts[2]
		const _ref1W6IJADI = accounts[1]
		const valuekyMwtsf = BigInt("1814")
		const newBoss22Pxqpy = accounts[5]
		await contracto25uEC5.deposeBoss2.call(newBoss2QDMMUp3, {from: accounts[3]});
		await contracto25uEC5.buy.call(valuekyMwtsf, _ref1W6IJADI, _ref2cUPPuKr, _ref38Ia6kg, _ref4veeoIyZ, _ref5NLZUdSg, {from: accounts[4]});
		await contracto25uEC5.deposeBoss2.call(newBoss22Pxqpy, {from: accounts[4]});
	});

	it('test for Reseller', async () => {
		const USDTAddrRmyktha = accounts[4]
		const FOSTERAddrp9XXmf6 = accounts[2]
		const initialRateRXdzaCH = BigInt("1329")
		const initialPeriodTa74UYN = BigInt("1924")
		const initialOwnergI3QRCR = accounts[1]
		const contractSoSUqdV = await Reseller.new(USDTAddrRmyktha, FOSTERAddrp9XXmf6, initialRateRXdzaCH, initialPeriodTa74UYN, initialOwnergI3QRCR, {from: accounts[5]});
		const newBoss2a082o7O = accounts[0]
		const accounttkzmfez = accounts[2]
		const newFeeF6nKip6 = BigInt("115")
		await contractSoSUqdV.deposeBoss2.call(newBoss2a082o7O, {from: accounts[0]});
		const nullk85ukMI = await contractSoSUqdV.balanceUSDT.call(accounttkzmfez, {from: accounts[4]});
		await contractSoSUqdV.setFee.call(newFeeF6nKip6, {from: accounts[1]});

		await expect(contractSoSUqdV.deposeBoss2.call(newBoss2a082o7O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtKyLj1j = accounts[2]
		const FOSTERAddrqCVyPCA = accounts[0]
		const initialRatebScUXud = BigInt("396")
		const initialPeriodRzBcNHM = BigInt("102")
		const initialOwnerrsmbmaU = accounts[4]
		const contractXdk8Sc = await Reseller.new(USDTAddrtKyLj1j, FOSTERAddrqCVyPCA, initialRatebScUXud, initialPeriodRzBcNHM, initialOwnerrsmbmaU, {from: accounts[3]});
		const valueaypEPTW = BigInt("1663")
		const commentNgPC6VK = "0AlmsP8i382mkQpMWxQP"
		const _ref5oOCWGuO = accounts[0]
		const _ref4s8xF5en = accounts[2]
		const _ref3X4qC7VB = accounts[5]
		const _ref2vrE9Csv = accounts[2]
		const _ref1YAP4AeJ = accounts[3]
		const valueCo6aeaL = BigInt("1127")
		const valuetXb66Qx = BigInt("63")
		const recipientKbfqcX = accounts[5]
		const ERC20TokenQuVXz8a = accounts[3]
		const commentNvFq5ZT = "UWOU506PYvMjFS4ZOjzSWOic5p6fkSBdKK3smaHoW2scQLpP3yYP3dpo1F2IJjy9qBGJO2SmqzLW"
		const _ref5wsMN7FI = accounts[4]
		const _ref4doDFUaS = accounts[1]
		const _ref3cAlZDQe = accounts[0]
		const _ref2cJDa6oA = accounts[3]
		const _ref1vdmvRI = accounts[2]
		const value3XW8sV = BigInt("209")
		await contractXdk8Sc.withdraw.call(valueaypEPTW, {from: accounts[1]});
		await contractXdk8Sc.purchase.call(valueCo6aeaL, _ref1YAP4AeJ, _ref2vrE9Csv, _ref3X4qC7VB, _ref4s8xF5en, _ref5oOCWGuO, commentNgPC6VK, {from: "0x0000000000000000000000000000000000000001"});
		await contractXdk8Sc.withdrawERC20.call(ERC20TokenQuVXz8a, recipientKbfqcX, valuetXb66Qx, {from: accounts[5]});
		await contractXdk8Sc.purchase.call(value3XW8sV, _ref1vdmvRI, _ref2cJDa6oA, _ref3cAlZDQe, _ref4doDFUaS, _ref5wsMN7FI, commentNvFq5ZT, {from: accounts[1]});

		await expect(contractXdk8Sc.withdraw.call(valueaypEPTW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZIm4V4 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrSEArpzv = accounts[0]
		const initialRateYJC8CDw = BigInt("565")
		const initialPeriodwAgf8xa = BigInt("351")
		const initialOwnerNlmdNeX = accounts[3]
		const contractmzeTzBm = await Reseller.new(USDTAddrZIm4V4, FOSTERAddrSEArpzv, initialRateYJC8CDw, initialPeriodwAgf8xa, initialOwnerNlmdNeX, {from: accounts[3]});
		const accountmNWKBh = accounts[2]
		const newBoss3TsuZ0S = accounts[2]
		const newBoss4eItvVQm = accounts[4]
		await contractmzeTzBm.switchState.call({from: accounts[3]});
		const nullwzTDAuU = await contractmzeTzBm.balanceUSDT.call(accountmNWKBh, {from: accounts[1]});
		await contractmzeTzBm.deposeBoss3.call(newBoss3TsuZ0S, {from: accounts[0]});
		await contractmzeTzBm.deposeBoss4.call(newBoss4eItvVQm, {from: accounts[2]});

		await expect(contractmzeTzBm.switchState.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrM2eHTDT = accounts[3]
		const FOSTERAddrbAYVoLo = accounts[0]
		const initialRateCPRQcOL = BigInt("512")
		const initialPeriodnPa2cZY = BigInt("782")
		const initialOwnercfeowgG = accounts[4]
		const contractsHlFFa = await Reseller.new(USDTAddrM2eHTDT, FOSTERAddrbAYVoLo, initialRateCPRQcOL, initialPeriodnPa2cZY, initialOwnercfeowgG, {from: accounts[1]});
		const newPeriodwvJbfPv = BigInt("1346")
		const _ref5xPxWbfk = accounts[3]
		const _ref4j8nrhe4 = accounts[0]
		const _ref3ZPtzJb = accounts[4]
		const _ref2NgIyaTc = accounts[2]
		const _ref1LHmKGCN = accounts[0]
		const valueVspeNUA = BigInt("1008")
		await contractsHlFFa.setPeriod.call(newPeriodwvJbfPv, {from: accounts[0]});
		await contractsHlFFa.buy.call(valueVspeNUA, _ref1LHmKGCN, _ref2NgIyaTc, _ref3ZPtzJb, _ref4j8nrhe4, _ref5xPxWbfk, {from: accounts[3]});

		await expect(contractsHlFFa.setPeriod.call(newPeriodwvJbfPv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrIg0PYI = accounts[1]
		const FOSTERAddrtWNVUw = accounts[4]
		const initialRateEoaUVzJ = BigInt("284")
		const initialPeriodHuExMPa = BigInt("941")
		const initialOwnerLdcIWH6 = accounts[4]
		const contractVh5B3fR = await Reseller.new(USDTAddrIg0PYI, FOSTERAddrtWNVUw, initialRateEoaUVzJ, initialPeriodHuExMPa, initialOwnerLdcIWH6, {from: accounts[3]});
		const newRateqcBXS7o = BigInt("871")
		const accountWU8lapZ = accounts[1]
		const newBoss4HQxXq6B = accounts[5]
		await contractVh5B3fR.setRate.call(newRateqcBXS7o, {from: accounts[4]});
		const nullB8XCy7 = await contractVh5B3fR.allowanceFOSTER.call(accountWU8lapZ, {from: "0x0000000000000000000000000000000000000001"});
		await contractVh5B3fR.deposeBoss4.call(newBoss4HQxXq6B, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractVh5B3fR.setRate.call(newRateqcBXS7o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrxq5LYAw = accounts[3]
		const FOSTERAddrFFIqVd8 = accounts[0]
		const initialRatek4MZkXW = BigInt("512")
		const initialPeriodU4erDhN = BigInt("782")
		const initialOwnerxwOOgcp = accounts[4]
		const contractd5dXJDw = await Reseller.new(USDTAddrxq5LYAw, FOSTERAddrFFIqVd8, initialRatek4MZkXW, initialPeriodU4erDhN, initialOwnerxwOOgcp, {from: accounts[1]});
		const commentKjxK054 = "nUld3edjAXH8BpncfsrtYQRWaNEph5dmUbizTKUGG0FirXwMm4MlaDRBJgw4O0S1"
		const _ref5GbIG2Lm = accounts[3]
		const _ref4BDXguqT = accounts[4]
		const _ref3Qml5uA = accounts[2]
		const _ref2W2qIPEO = accounts[0]
		const _ref1yTAzKwe = accounts[4]
		const valueg4Crbei = BigInt("144")
		const newPeriodbMgEvJ1 = BigInt("1324")
		const _ref5Ud20WYN = accounts[3]
		const _ref4QZN1I06 = accounts[0]
		const _ref3SlDkra = accounts[4]
		const _ref2qJp3YZ = accounts[2]
		const _ref1SWDJtFZ = accounts[0]
		const valuezojlQ47 = BigInt("1008")
		await contractd5dXJDw.purchase.call(valueg4Crbei, _ref1yTAzKwe, _ref2W2qIPEO, _ref3Qml5uA, _ref4BDXguqT, _ref5GbIG2Lm, commentKjxK054, {from: accounts[2]});
		await contractd5dXJDw.setPeriod.call(newPeriodbMgEvJ1, {from: accounts[0]});
		await contractd5dXJDw.buy.call(valuezojlQ47, _ref1SWDJtFZ, _ref2qJp3YZ, _ref3SlDkra, _ref4QZN1I06, _ref5Ud20WYN, {from: accounts[3]});

		await expect(contractd5dXJDw.purchase.call(valueg4Crbei, _ref1yTAzKwe, _ref2W2qIPEO, _ref3Qml5uA, _ref4BDXguqT, _ref5GbIG2Lm, commentKjxK054, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzfTjABI = accounts[4]
		const FOSTERAddrNjtey8s = accounts[2]
		const initialRateLe1wZs = BigInt("57")
		const initialPeriodNeo6FRS = BigInt("518")
		const initialOwnerT4FAcJr = accounts[0]
		const contracth1mUzB = await Reseller.new(USDTAddrzfTjABI, FOSTERAddrNjtey8s, initialRateLe1wZs, initialPeriodNeo6FRS, initialOwnerT4FAcJr, {from: accounts[0]});
		const newBoss3yYMVBNs = "0x0000000000000000000000000000000000000001"
		const valueF8dF6Gg = BigInt("1469")
		const newBoss1pSX8q8g = accounts[0]
		const valuefJCLu9 = BigInt("1570")
		const recipientWLoNgCl = accounts[1]
		const ERC20TokenQay4SaP = accounts[5]
		const newBoss2khY6Mc = accounts[1]
		const valueYMjYafX = BigInt("1248")
		const recipientby3WN0C = accounts[4]
		const ERC20TokenaJfJ0v = accounts[4]
		const valueU0nFZNo = BigInt("1995")
		const recipientINKKMtS = accounts[5]
		const ERC20TokenzgLeq5a = accounts[1]
		await contracth1mUzB.deposeBoss3.call(newBoss3yYMVBNs, {from: accounts[5]});
		await contracth1mUzB.withdraw.call(valueF8dF6Gg, {from: accounts[5]});
		await contracth1mUzB.deposeBoss1.call(newBoss1pSX8q8g, {from: accounts[2]});
		await contracth1mUzB.withdrawERC20.call(ERC20TokenQay4SaP, recipientWLoNgCl, valuefJCLu9, {from: accounts[3]});
		await contracth1mUzB.deposeBoss2.call(newBoss2khY6Mc, {from: "0x0000000000000000000000000000000000000001"});
		await contracth1mUzB.withdrawERC20.call(ERC20TokenaJfJ0v, recipientby3WN0C, valueYMjYafX, {from: accounts[1]});
		await contracth1mUzB.withdrawERC20.call(ERC20TokenzgLeq5a, recipientINKKMtS, valueU0nFZNo, {from: accounts[1]});

		await expect(contracth1mUzB.deposeBoss3.call(newBoss3yYMVBNs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr1dzCD5 = accounts[3]
		const FOSTERAddrQ5ECvFr = accounts[0]
		const initialRatemvLf6e = BigInt("512")
		const initialPeriodGU76HPe = BigInt("782")
		const initialOwner47yXRU = accounts[4]
		const contracthq507yV = await Reseller.new(USDTAddr1dzCD5, FOSTERAddrQ5ECvFr, initialRatemvLf6e, initialPeriodGU76HPe, initialOwner47yXRU, {from: accounts[1]});
		const _ref5R0PKNx = accounts[3]
		const _ref4ymKAkPg = accounts[1]
		const _ref3cYJUTwU = accounts[4]
		const _ref2jjO50df = accounts[2]
		const _ref1lz480dx = accounts[0]
		const valueWRz97oR = BigInt("1008")
		await contracthq507yV.buy.call(valueWRz97oR, _ref1lz480dx, _ref2jjO50df, _ref3cYJUTwU, _ref4ymKAkPg, _ref5R0PKNx, {from: accounts[3]});

		await expect(contracthq507yV.buy.call(valueWRz97oR, _ref1lz480dx, _ref2jjO50df, _ref3cYJUTwU, _ref4ymKAkPg, _ref5R0PKNx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrm5uNTIf = accounts[3]
		const FOSTERAddrXi6WaBE = "0x0000000000000000000000000000000000000001"
		const initialRateG3Slnua = BigInt("875")
		const initialPeriodk2BO68p = BigInt("79")
		const initialOwnervQrtkmw = accounts[0]
		const contracty5gV3t6 = await Reseller.new(USDTAddrm5uNTIf, FOSTERAddrXi6WaBE, initialRateG3Slnua, initialPeriodk2BO68p, initialOwnervQrtkmw, {from: accounts[0]});
		const accountFyDzbpB = accounts[4]
		const newBoss1wVzORxr = accounts[1]
		const nullV7V6QEt = await contracty5gV3t6.allowanceUSDT.call(accountFyDzbpB, {from: accounts[0]});
		await contracty5gV3t6.deposeBoss1.call(newBoss1wVzORxr, {from: accounts[4]});

		await expect(contracty5gV3t6.allowanceUSDT.call(accountFyDzbpB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjM3xEPD = accounts[3]
		const FOSTERAddrS9mAOHw = accounts[2]
		const initialRategN8kJuX = BigInt("1710")
		const initialPeriodpEv5gjk = BigInt("1775")
		const initialOwnery5OcZFf = accounts[3]
		const contractD3Hhh0z = await Reseller.new(USDTAddrjM3xEPD, FOSTERAddrS9mAOHw, initialRategN8kJuX, initialPeriodpEv5gjk, initialOwnery5OcZFf, {from: accounts[3]});
		const level5HJW2zer = BigInt("80")
		const level4J7I84H = BigInt("215")
		const level3V2EipA5 = BigInt("247")
		const level2bzUuEqs = BigInt("67")
		const level1nGkVjEy = BigInt("185")
		const newPeriodrGVu7Wx = BigInt("1513")
		await contractD3Hhh0z.setRefBonus.call(level1nGkVjEy, level2bzUuEqs, level3V2EipA5, level4J7I84H, level5HJW2zer, {from: accounts[0]});
		await contractD3Hhh0z.setPeriod.call(newPeriodrGVu7Wx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractD3Hhh0z.setRefBonus.call(level1nGkVjEy, level2bzUuEqs, level3V2EipA5, level4J7I84H, level5HJW2zer, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZVmCaHT = accounts[3]
		const FOSTERAddryGFhx6J = accounts[0]
		const initialRateU26KmxG = BigInt("512")
		const initialPeriodFQuxfYg = BigInt("782")
		const initialOwnerInNGBEl = accounts[4]
		const contractA91rfBr = await Reseller.new(USDTAddrZVmCaHT, FOSTERAddryGFhx6J, initialRateU26KmxG, initialPeriodFQuxfYg, initialOwnerInNGBEl, {from: accounts[1]});
		const newMinimumAy1kQcv = BigInt("614")
		const _ref5zeyuDQK = accounts[3]
		const _ref4gKNfaLt = accounts[0]
		const _ref3O37Z0qq = accounts[4]
		const _ref2P4RawH = accounts[2]
		const _ref1E4CGyne = accounts[1]
		const valueV29Q3Es = BigInt("1008")
		await contractA91rfBr.setMinimum.call(newMinimumAy1kQcv, {from: accounts[5]});
		await contractA91rfBr.buy.call(valueV29Q3Es, _ref1E4CGyne, _ref2P4RawH, _ref3O37Z0qq, _ref4gKNfaLt, _ref5zeyuDQK, {from: accounts[3]});

		await expect(contractA91rfBr.setMinimum.call(newMinimumAy1kQcv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNadgp5p = accounts[3]
		const FOSTERAddrDLaBqqs = accounts[0]
		const initialRated9M6IgQ = BigInt("512")
		const initialPeriodXds5rPc = BigInt("782")
		const initialOwnerx60jMQB = accounts[4]
		const contractL2Z7Ra8 = await Reseller.new(USDTAddrNadgp5p, FOSTERAddrDLaBqqs, initialRated9M6IgQ, initialPeriodXds5rPc, initialOwnerx60jMQB, {from: accounts[1]});
		const newBoss4V9w4pOV = "0x0000000000000000000000000000000000000001"
		const newFeeMXY81uL = BigInt("237")
		const _ref5H5crHG2 = accounts[3]
		const _ref4wv3iDmI = accounts[1]
		const _ref3mjoUNLj = accounts[4]
		const _ref2qC5WO0e = accounts[2]
		const _ref1uWAACfK = accounts[1]
		const valueNJcjqkB = BigInt("1008")
		await contractL2Z7Ra8.deposeBoss4.call(newBoss4V9w4pOV, {from: accounts[3]});
		await contractL2Z7Ra8.setFee.call(newFeeMXY81uL, {from: accounts[3]});
		await contractL2Z7Ra8.buy.call(valueNJcjqkB, _ref1uWAACfK, _ref2qC5WO0e, _ref3mjoUNLj, _ref4wv3iDmI, _ref5H5crHG2, {from: accounts[3]});

		await expect(contractL2Z7Ra8.deposeBoss4.call(newBoss4V9w4pOV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrsHxXte6 = accounts[3]
		const FOSTERAddriaV78ls = accounts[0]
		const initialRateFuf39t = BigInt("512")
		const initialPeriodYf5A0Ne = BigInt("782")
		const initialOwnerTCNqCKM = accounts[4]
		const contracttc2GDNJ = await Reseller.new(USDTAddrsHxXte6, FOSTERAddriaV78ls, initialRateFuf39t, initialPeriodYf5A0Ne, initialOwnerTCNqCKM, {from: accounts[1]});
		const valueSDccuJr = BigInt("27")
		const recipientZCKBBS = accounts[2]
		const ERC20TokenB92Hxrd = accounts[3]
		await contracttc2GDNJ.withdrawERC20.call(ERC20TokenB92Hxrd, recipientZCKBBS, valueSDccuJr, {from: accounts[5]});

		await expect(contracttc2GDNJ.withdrawERC20.call(ERC20TokenB92Hxrd, recipientZCKBBS, valueSDccuJr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrEjiu9h3 = accounts[3]
		const FOSTERAddroGj80WI = accounts[0]
		const initialRateFewyb6x = BigInt("512")
		const initialPeriodnshf6tB = BigInt("782")
		const initialOwnerQnd83OL = accounts[4]
		const contractX6aiRE = await Reseller.new(USDTAddrEjiu9h3, FOSTERAddroGj80WI, initialRateFewyb6x, initialPeriodnshf6tB, initialOwnerQnd83OL, {from: accounts[1]});
		const _periodgkKERV1 = BigInt("1375")
		const amountiQd0Ur = BigInt("286")
		const recipientWuKaLMx = accounts[4]
		const newBoss2gWur6pN = accounts[3]
		const commentdtV6O2 = "nUld3edjAXH8BpncfsrtYQRWaNEph5dmUbizTKUGG0FirXwMm4MlaDRBJgw4CO0S1"
		const _ref5I2Qy3OQ = accounts[4]
		const _ref4Cxuyx4j = accounts[4]
		const _ref3KS9tb98 = accounts[2]
		const _ref2vAIoBhD = accounts[0]
		const _ref1opt8vjj = accounts[4]
		const valueF4w6bvt = BigInt("144")
		await contractX6aiRE.freezeAndTransfer.call(recipientWuKaLMx, amountiQd0Ur, _periodgkKERV1, {from: accounts[0]});
		await contractX6aiRE.deposeBoss2.call(newBoss2gWur6pN, {from: accounts[2]});
		await contractX6aiRE.purchase.call(valueF4w6bvt, _ref1opt8vjj, _ref2vAIoBhD, _ref3KS9tb98, _ref4Cxuyx4j, _ref5I2Qy3OQ, commentdtV6O2, {from: accounts[2]});

		await expect(contractX6aiRE.freezeAndTransfer.call(recipientWuKaLMx, amountiQd0Ur, _periodgkKERV1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrj31QJzZ = accounts[3]
		const FOSTERAddrCiZ3H30 = accounts[0]
		const initialRateqzJYRip = BigInt("512")
		const initialPeriodzgpatet = BigInt("782")
		const initialOwnerXK7fYp4 = accounts[4]
		const contracteGHexwn = await Reseller.new(USDTAddrj31QJzZ, FOSTERAddrCiZ3H30, initialRateqzJYRip, initialPeriodzgpatet, initialOwnerXK7fYp4, {from: accounts[1]});
		const amountRVhil0t = BigInt("58")
		const _ref5dhHl7mP = accounts[3]
		const _ref4g4srC7 = accounts[1]
		const _ref3jeSha9v = accounts[4]
		const _ref2uzi5jur = accounts[2]
		const _ref1EFiqKAK = accounts[0]
		const valueJamsEWJ = BigInt("1008")
		const valuexw9Q5e = BigInt("27")
		const recipientHQhlrB = accounts[2]
		const ERC20TokenhbkibQl = accounts[4]
		const accountKTmoEh = accounts[4]
		const valueROzyobZ = BigInt("984")
		const recipientYWawjB0 = accounts[0]
		const ERC20TokenRhMEcLN = accounts[1]
		const nullJioNMP = await contracteGHexwn.getEstimation.call(amountRVhil0t, {from: accounts[0]});
		await contracteGHexwn.buy.call(valueJamsEWJ, _ref1EFiqKAK, _ref2uzi5jur, _ref3jeSha9v, _ref4g4srC7, _ref5dhHl7mP, {from: accounts[3]});
		await contracteGHexwn.withdrawERC20.call(ERC20TokenhbkibQl, recipientHQhlrB, valuexw9Q5e, {from: accounts[5]});
		const nullXwiuSN = await contracteGHexwn.balanceUSDT.call(accountKTmoEh, {from: accounts[1]});
		await contracteGHexwn.withdrawERC20.call(ERC20TokenRhMEcLN, recipientYWawjB0, valueROzyobZ, {from: accounts[0]});

		assert.equal(nullJioNMP, 29696)
		await expect(contracteGHexwn.buy.call(valueJamsEWJ, _ref1EFiqKAK, _ref2uzi5jur, _ref3jeSha9v, _ref4g4srC7, _ref5dhHl7mP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrvdrni7 = accounts[3]
		const FOSTERAddrUtAdxKy = accounts[0]
		const initialRateEh4Vxz1 = BigInt("512")
		const initialPeriodFVSXVdl = BigInt("782")
		const initialOwnerIjPVPvx = accounts[4]
		const contractw0tiiR1 = await Reseller.new(USDTAddrvdrni7, FOSTERAddrUtAdxKy, initialRateEh4Vxz1, initialPeriodFVSXVdl, initialOwnerIjPVPvx, {from: accounts[1]});
		const newFeejIgE4bI = BigInt("171")
		const valueiSqFyVO = BigInt("956")
		const newBoss28bCeSN = accounts[0]
		await contractw0tiiR1.setFee.call(newFeejIgE4bI, {from: accounts[0]});
		await contractw0tiiR1.withdraw.call(valueiSqFyVO, {from: accounts[3]});
		await contractw0tiiR1.deposeBoss2.call(newBoss28bCeSN, {from: accounts[0]});

		await expect(contractw0tiiR1.setFee.call(newFeejIgE4bI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDz005IT = accounts[0]
		const FOSTERAddrjkhNhtk = accounts[2]
		const initialRatemyKJYr = BigInt("661")
		const initialPeriodDdeCS06 = BigInt("680")
		const initialOwnereatV29n = accounts[0]
		const contractoXpj7Ab = await Reseller.new(USDTAddrDz005IT, FOSTERAddrjkhNhtk, initialRatemyKJYr, initialPeriodDdeCS06, initialOwnereatV29n, {from: accounts[1]});
		const accounthP5TbkX = accounts[5]
		const newBoss3ybt1U84 = accounts[2]
		const accountsqYVClE = accounts[4]
		const newBoss1XJU7omW = accounts[0]
		const valuetdtXvEu = BigInt("553")
		const nulleOSUfJT = await contractoXpj7Ab.balanceFOSTER.call(accounthP5TbkX, {from: accounts[3]});
		await contractoXpj7Ab.deposeBoss3.call(newBoss3ybt1U84, {from: accounts[0]});
		const nulllG5Bk8 = await contractoXpj7Ab.allowanceUSDT.call(accountsqYVClE, {from: accounts[0]});
		await contractoXpj7Ab.deposeBoss1.call(newBoss1XJU7omW, {from: "0x0000000000000000000000000000000000000001"});
		await contractoXpj7Ab.withdraw.call(valuetdtXvEu, {from: accounts[0]});
		await contractoXpj7Ab.switchState.call({from: accounts[2]});

		await expect(contractoXpj7Ab.balanceFOSTER.call(accounthP5TbkX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})