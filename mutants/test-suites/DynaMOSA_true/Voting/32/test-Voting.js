const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressoQyXQmF = accounts[0]
		const VotingWHbmKqS = await Voting.new(addressoQyXQmF, {from: accounts[3]});
		const uintnvYW9aR = BigInt("507")
		const addresspYoevOH = accounts[3]
		const stringpp2CTnS = "FeIAWF1SpGDOBAGT9w5dHL"
		const stringcMyjz8d = ""
		const strings8FndyE = "nmXEyLutzyIkyg15r0zKUiw4RwmNJOv6v6iFvr"
		const bytejacno0c = "0x1f0917"
		const addressUifOSKx = "0x0000000000000000000000000000000000000001"
		const uintA0XtrPO = BigInt("848")
		const address1uk5E5 = accounts[3]
		const addresstUiL2rm = accounts[0]
		const uintomELpg0 = BigInt("1543")
		const addressQ8Bvw6O = accounts[2]
		const uint256lwu6HzO = await VotingWHbmKqS.totalSupply.call({from: accounts[2]});
		const uint256W4qlW90 = await VotingWHbmKqS.balanceOfAt.call(addresspYoevOH, uintnvYW9aR, {from: accounts[1]});
		const 
PQhLSgv = await VotingWHbmKqS.createProposal.call(addressUifOSKx, bytejacno0c, strings8FndyE, stringcMyjz8d, stringpp2CTnS, {from: accounts[4]});
		const boolCcVr4Y = await VotingWHbmKqS.transferFrom.call(addresstUiL2rm, address1uk5E5, uintA0XtrPO, {from: "0x0000000000000000000000000000000000000001"});
		const boolAaI3lgZ = await VotingWHbmKqS.transfer.call(addressQ8Bvw6O, uintomELpg0, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingNvnyopt = await Voting.new({from: accounts[1]});
		const uintiVkztGo = BigInt("207")
		const uintEsbB7c3 = BigInt("1286")
		const addressiQ8KX5f = "0x0000000000000000000000000000000000000001"
		const addressS5CbiCX = accounts[1]
		const stringNLAeFeD = await VotingNvnyopt.name.call({from: accounts[3]});
		const uint256Z55VI20 = await VotingNvnyopt.approve.call(uintiVkztGo, {from: accounts[2]});
		const stringjEEWMiY = await VotingNvnyopt.name.call({from: accounts[5]});
		const bool2PoVIA = await VotingNvnyopt.transferFrom.call(addressS5CbiCX, addressiQ8KX5f, uintEsbB7c3, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressZUcEmni = accounts[2]
		const Voting2H2ylr = await Voting.new(addressZUcEmni, {from: accounts[4]});
		const addressYrqrcOY = accounts[1]
		const addresso5F9u2y = accounts[2]
		await Voting2H2ylr.onRegistryRefresh.call({from: accounts[0]});
		const boolNlh7L2V = await Voting2H2ylr.isVotingSystem.call(addressYrqrcOY, {from: accounts[2]});
		const addressYSGi3ap = await Voting2H2ylr.addMinter.call(addresso5F9u2y, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressopw1OC6 = accounts[0]
		const VotingBCINVfQ = await Voting.new(addressopw1OC6, {from: accounts[1]});
		const addressZo7lEgP = accounts[0]
		const uintvpzbG3W = BigInt("490")
		const addressW6XZGCD = "0x0000000000000000000000000000000000000001"
		const addressguEsURc = accounts[2]
		const uintu1BfNQC = BigInt("1106")
		const addresseygqiQu = accounts[2]
		const booldbVaGWB = await VotingBCINVfQ.didAddressVote.call(uintvpzbG3W, addressZo7lEgP, {from: accounts[0]});
		const uint256dNpEzwk = await VotingBCINVfQ.allowance.call(addressguEsURc, addressW6XZGCD, {from: accounts[4]});
		await VotingBCINVfQ.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
		const uint256TQcKPjY = await VotingBCINVfQ.balanceOfAt.call(addresseygqiQu, uintu1BfNQC, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressyyxibN5 = accounts[3]
		const Votingfj0p2yg = await Voting.new(addressyyxibN5, {from: accounts[3]});
		const addressAYMqXzB = accounts[2]
		const uintk8e0BQr = BigInt("1282")
		const address2VJU0o = accounts[0]
		const addresseHFxz8o = "0x0000000000000000000000000000000000000001"
		const uintki7Crx = BigInt("930")
		const uintXzzNte = BigInt("1424")
		const addressJ1evfzB = accounts[4]
		const addressh91QC2g = accounts[5]
		const addressvti2ap = await Votingfj0p2yg.ownableUpgrade.call(addressAYMqXzB, {from: accounts[3]});
		await Votingfj0p2yg.onlyExchangeFactory.call({from: accounts[3]});
		const boolhDehHAz = await Votingfj0p2yg.transferFrom.call(addresseHFxz8o, address2VJU0o, uintk8e0BQr, {from: accounts[3]});
		const uint256H7BWNWb = await Votingfj0p2yg.approve.call(uintki7Crx, {from: accounts[0]});
		const boolCtFqo8s = await Votingfj0p2yg.transferFrom.call(addressh91QC2g, addressJ1evfzB, uintXzzNte, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressmQeCTDG = accounts[0]
		const VotingWHbmKqS = await Voting.new(addressmQeCTDG, {from: accounts[3]});
		const uintZohZ223 = BigInt("701")
		const uintOXdZCo = BigInt("507")
		const addressxxuCdeS = accounts[3]
		const stringpp2CTnS = "FeIAWF1SpGDOBAGT9w5dHL"
		const stringcMyjz8d = ""
		const strings8FndyE = "nmXEyLutzyIkyg15r0zKUiw4RwmNJOv6v6iFvr"
		const byteLF3tVlt = "0x1f0917"
		const addressrVa8XwR = "0x0000000000000000000000000000000000000001"
		const uintIu8Y6X = BigInt("1543")
		const addressewW8uSN = accounts[3]
		const uint256kT66V4j = await VotingWHbmKqS.pause.call(uintZohZ223, {from: accounts[2]});
		const uint256lwu6HzO = await VotingWHbmKqS.totalSupply.call({from: accounts[2]});
		const uint256W4qlW90 = await VotingWHbmKqS.balanceOfAt.call(addressxxuCdeS, uintOXdZCo, {from: accounts[1]});
		await VotingWHbmKqS.onlyMessageProcessor.call({from: accounts[5]});
		const 
PQhLSgv = await VotingWHbmKqS.createProposal.call(addressrVa8XwR, byteLF3tVlt, strings8FndyE, stringcMyjz8d, stringpp2CTnS, {from: accounts[4]});
		await VotingWHbmKqS.onlyOwner.call({from: accounts[5]});
		const uint256ixL9Ti1 = await VotingWHbmKqS.totalSupply.call({from: accounts[3]});
		const boolAaI3lgZ = await VotingWHbmKqS.transfer.call(addressewW8uSN, uintIu8Y6X, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressrfPWCgL = accounts[2]
		const Voting2H2ylr = await Voting.new(addressrfPWCgL, {from: accounts[4]});
		const addressFv5jLgv = accounts[1]
		const uintnlguanu = BigInt("1224")
		const addressBjU9OIO = accounts[1]
		const addressuE4uUs6 = accounts[3]
		const uintS8ozK13 = BigInt("461")
		const addressHmCh00 = accounts[3]
		const uintYYMwYIB = BigInt("166")
		const addressaGgXryc = "0x0000000000000000000000000000000000000001"
		const boolvgGRIIu = await Voting2H2ylr.isExchangeFactory.call(addressFv5jLgv, {from: accounts[1]});
		const boolVze27s9 = await Voting2H2ylr.transferFrom.call(addressuE4uUs6, addressBjU9OIO, uintnlguanu, {from: accounts[5]});
		const boolsFqIG4I = await Voting2H2ylr.transfer.call(addressHmCh00, uintS8ozK13, {from: accounts[3]});
		await Voting2H2ylr.onRegistryRefresh.call({from: accounts[0]});
		const addressJVxV1I = await Voting2H2ylr.burnFrom.call(addressaGgXryc, uintYYMwYIB, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingAL1AHWl = await Voting.new({from: accounts[3]});
		const boolqREpCIy = false
		const uintYCKh1W8 = BigInt("1937")
		const uintVrYMJE = BigInt("1419")
		const addressIYpLeaC = accounts[5]
		const addressY4bHi9A = accounts[1]
		const addressxyujlGs = await VotingAL1AHWl.getRegistryAddress.call({from: accounts[0]});
		const uint256LNn50q = await VotingAL1AHWl.vote.call(uintYCKh1W8, boolqREpCIy, {from: accounts[1]});
		const bool1Ey7IP = await VotingAL1AHWl.decreaseAllowance.call(addressIYpLeaC, uintVrYMJE, {from: accounts[0]});
		await VotingAL1AHWl.renounceMinter.call({from: accounts[5]});
		const boolpZuCkoL = await VotingAL1AHWl.isVotingSystem.call(addressY4bHi9A, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressRKAHvMY = accounts[0]
		const VotingJH0Jwra = await Voting.new(addressRKAHvMY, {from: accounts[4]});
		const addressq32ZyO = accounts[5]
		const uintaOsgGiR = BigInt("772")
		const addressagPfycX = accounts[3]
		const addresstzdcuBu = "0x0000000000000000000000000000000000000001"
		const addressmAS8zdA = await VotingJH0Jwra.transferOwnership.call(addressq32ZyO, {from: accounts[4]});
		const stringQmISo3y = await VotingJH0Jwra.symbol.call({from: accounts[3]});
		await VotingJH0Jwra.onlyOwner.call({from: accounts[0]});
		const boolEEihoW7 = await VotingJH0Jwra.transferFrom.call(addresstzdcuBu, addressagPfycX, uintaOsgGiR, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressoBQU5iw = accounts[1]
		const VotingflkeLAb = await Voting.new(addressoBQU5iw, {from: accounts[3]});
		const uintVkmJFgX = BigInt("1222")
		const addressLd6MFM = accounts[0]
		const boolm6UnXpX = await VotingflkeLAb.approve.call(addressLd6MFM, uintVkmJFgX, {from: accounts[0]});
		await VotingflkeLAb.onlyExchangeFactory.call({from: "0x0000000000000000000000000000000000000001"});
		await VotingflkeLAb.onlyRegistry.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressEBQYz1 = accounts[0]
		const VotingJH0Jwra = await Voting.new(addressEBQYz1, {from: accounts[4]});
		const stringqocNvRW = "vfwoa4m6iShbu159n"
		const stringTGBkz0 = "P8xy3EWwF4DmqV723m1oEiQxhmOfDVZCKR421AVSt95O2Pstwhczb8bJXvM9PtnJs7u"
		const stringHQXZvGn = "4y"
		const byteMtQ3eOz = "0x10150b101a"
		const addressKpBR0lT = "0x0000000000000000000000000000000000000001"
		const uintyGpR1wK = BigInt("540")
		const addressvL2X2w = accounts[3]
		const uinthBdUNlj = BigInt("1508")
		const addresssxi23bK = "0x0000000000000000000000000000000000000001"
		const 
YzqyjQ = await VotingJH0Jwra.createProposal.call(addressKpBR0lT, byteMtQ3eOz, stringHQXZvGn, stringTGBkz0, stringqocNvRW, {from: accounts[3]});
		const stringQmISo3y = await VotingJH0Jwra.symbol.call({from: accounts[3]});
		const boolFf3zzhg = await VotingJH0Jwra.transfer.call(addressvL2X2w, uintyGpR1wK, {from: accounts[4]});
		const boolmRvsA8Z = await VotingJH0Jwra.increaseAllowance.call(addresssxi23bK, uinthBdUNlj, {from: accounts[3]});
		await VotingJH0Jwra.onlyOwner.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressFfnicRA = accounts[4]
		const Votingy8Ai1Gf = await Voting.new(addressFfnicRA, {from: accounts[2]});
		const addressNG91e5 = accounts[2]
		const uintrzbFXFW = BigInt("1529")
		const addressVDdz0c = accounts[3]
		const addressl7LiZ2n = "0x0000000000000000000000000000000000000001"
		const addressu26BntD = await Votingy8Ai1Gf.transferOwnership.call(addressNG91e5, {from: accounts[0]});
		const booldlkFmyS = await Votingy8Ai1Gf.transferFrom.call(addressl7LiZ2n, addressVDdz0c, uintrzbFXFW, {from: accounts[1]});
		await Votingy8Ai1Gf.onlyRegistry.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressOweHvDo = accounts[4]
		const VotingAlXvXlR = await Voting.new(addressOweHvDo, {from: accounts[0]});
		const booliKQlfdJ = false
		const uintVAGlsYW = BigInt("1517")
		const stringdJhgsIc = "RKgpmBGjLh"
		const stringkMIEPx = "lGVd4ugOOEyD6Ad9vjbVA1Wj3PejN"
		const stringt5ZHfAd = "puLJTBSo4B"
		const bytepP1KDqD = "0x1a170f121a1f0e"
		const addressKvajz6X = "0x0000000000000000000000000000000000000001"
		const uintRLxopef = BigInt("1871")
		const addressul1v5G3 = accounts[2]
		const uintpnsJRGy = BigInt("1224")
		const addressCUiPsIK = accounts[3]
		const uint256LYK9210 = await VotingAlXvXlR.vote.call(uintVAGlsYW, booliKQlfdJ, {from: accounts[0]});
		const 
TyUBNKB = await VotingAlXvXlR.createProposal.call(addressKvajz6X, bytepP1KDqD, stringt5ZHfAd, stringkMIEPx, stringdJhgsIc, {from: accounts[5]});
		const addresslhHdxXC = await VotingAlXvXlR.getRegistryAddress.call({from: accounts[0]});
		const boolTUhGNyI = await VotingAlXvXlR.increaseAllowance.call(addressul1v5G3, uintRLxopef, {from: accounts[0]});
		const uint256QAhhAsu = await VotingAlXvXlR.balanceOfAt.call(addressCUiPsIK, uintpnsJRGy, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingRl53PAB = await Voting.new({from: accounts[5]});
		const uintBdkyIk4 = BigInt("497")
		const addressmIrXG9q = accounts[0]
		const uintLyJmckK = BigInt("892")
		const uinteEgGrWV = BigInt("825")
		const addressUI80wYa = accounts[5]
		const addressOd5eIMu = accounts[3]
		const uint256HQzoh22 = await VotingRl53PAB.burn.call(uintBdkyIk4, {from: accounts[5]});
		const boolg7FeeUS = await VotingRl53PAB.didAddressVote.call(uintLyJmckK, addressmIrXG9q, {from: accounts[1]});
		await VotingRl53PAB.renounceMinter.call({from: accounts[2]});
		const boolTQCdy4t = await VotingRl53PAB.transferFrom.call(addressOd5eIMu, addressUI80wYa, uinteEgGrWV, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressp4T658Z = accounts[2]
		const VotingR7neBFx = await Voting.new(addressp4T658Z, {from: "0x0000000000000000000000000000000000000001"});
		const uintwQtKjvi = BigInt("985")
		const addressHF82j4x = accounts[2]
		const boolyzeczS2 = true
		const uinthE3msHo = BigInt("599")
		const boolJdS3lSI = await VotingR7neBFx.increaseAllowance.call(addressHF82j4x, uintwQtKjvi, {from: accounts[4]});
		const uint256aOx8tvB = await VotingR7neBFx.snapshot.call({from: accounts[0]});
		const uint256T9uolI = await VotingR7neBFx.vote.call(uinthE3msHo, boolyzeczS2, {from: accounts[5]});
		await VotingR7neBFx.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressIH7gbCj = accounts[1]
		const VotingflkeLAb = await Voting.new(addressIH7gbCj, {from: accounts[3]});
		const addressKvCo1jm = await VotingflkeLAb.owner.call({from: accounts[3]});
		await VotingflkeLAb.onlyExchangeFactory.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingnC7iP0K = await Voting.new({from: accounts[0]});
		const addressrxMKR6Y = accounts[1]
		const uintlvbJLGE = BigInt("502")
		const addressTnsD79Z = accounts[0]
		const boolMRwBUxK = await VotingnC7iP0K.isValidOracleAddress.call(addressrxMKR6Y, {from: accounts[4]});
		const boolOB4Pfrq = await VotingnC7iP0K.increaseAllowance.call(addressTnsD79Z, uintlvbJLGE, {from: accounts[0]});
	});
})