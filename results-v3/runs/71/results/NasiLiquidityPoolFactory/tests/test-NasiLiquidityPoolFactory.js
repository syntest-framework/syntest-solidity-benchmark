const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressWL9PTrl = accounts[2]
		const addressYA293Ou = accounts[2]
		const uintIZr5lO8 = BigInt("1979")
		const uintciFlCLs = BigInt("1773")
		const NasiLiquidityPoolFactoryF62TUo = await NasiLiquidityPoolFactory.new(addressWL9PTrl, addressYA293Ou, uintIZr5lO8, uintciFlCLs, {from: accounts[0]});
		const uintuE639y4 = BigInt("997")
		const uintl25gGXm = BigInt("1659")
		const addressyqxY2Mm = accounts[3]
		const uint256UL9VhWw = await NasiLiquidityPoolFactoryF62TUo.leaveStaking.call(uintuE639y4, {from: accounts[5]});
		const stringwsFOt6 = await NasiLiquidityPoolFactoryF62TUo.symbol.call({from: accounts[5]});
		const booll0HTGGy = await NasiLiquidityPoolFactoryF62TUo.increaseAllowance.call(addressyqxY2Mm, uintl25gGXm, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringH1k2ZX = "tcaMzGImEYGdOJRmtLdmkQkBsjarJHfCm"
		const stringqXSqgT8 = "CoAyGKt4iULRNQuiGvyEksDD4VsnB7vMHNPrMutDwwyZ8HOd7v9fCzRalTq7XPt"
		const uintUgNS63z = BigInt("217")
		const NasiLiquidityPoolFactoryavUFfYZ = await NasiLiquidityPoolFactory.new(stringH1k2ZX, stringqXSqgT8, uintUgNS63z, {from: accounts[1]});
		const uintlKgmKJ = BigInt("698")
		const uint8XArf9IT = await NasiLiquidityPoolFactoryavUFfYZ.decimals.call({from: accounts[1]});
		const uint256BrMjOMt = await NasiLiquidityPoolFactoryavUFfYZ.migrate.call(uintlKgmKJ, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringXmAyQdn = "eSN"
		const stringrcqdm3L = "F04evkP3R5CWTKPAXDTEOH8jVhpRV7LSp52ssVEvEX3ed92DJXzNwrTVUZ9bLwlUUSskrW1PVBLowPQuPUoc1"
		const uintzGoDiMN = BigInt("74")
		const NasiLiquidityPoolFactoryHCkMbfL = await NasiLiquidityPoolFactory.new(stringXmAyQdn, stringrcqdm3L, uintzGoDiMN, {from: accounts[4]});
		const uintJhFfdzd = BigInt("334")
		const addressib96iVR = accounts[3]
		const uintSQDSN2E = BigInt("735")
		const uintmhPRlz = BigInt("569")
		const stringF0HJXxm = await NasiLiquidityPoolFactoryHCkMbfL.symbol.call({from: accounts[0]});
		const booldi8L0bt = await NasiLiquidityPoolFactoryHCkMbfL.mint.call(addressib96iVR, uintJhFfdzd, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FH6isRf = await NasiLiquidityPoolFactoryHCkMbfL.withdraw.call(uintmhPRlz, uintSQDSN2E, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressVyQ64yO = accounts[4]
		const addressbUm77sC = accounts[0]
		const uintNNBfkF2 = BigInt("728")
		const uintB8UI1h7 = BigInt("83")
		const NasiLiquidityPoolFactoryUfNbJ0R = await NasiLiquidityPoolFactory.new(addressVyQ64yO, addressbUm77sC, uintNNBfkF2, uintB8UI1h7, {from: accounts[5]});
		const uintFKUCGXs = BigInt("25")
		const addressQVTZGU = accounts[4]
		const uintIxyzzqR = BigInt("95")
		const addresshULQ6yJ = accounts[5]
		const addresszcroR3 = accounts[1]
		const addressorBu0jm = accounts[1]
		const uintD6Fm1ty = BigInt("135")
		const addresswRcg8DL = accounts[5]
		const boolKb0T5FU = await NasiLiquidityPoolFactoryUfNbJ0R.decreaseAllowance.call(addressQVTZGU, uintFKUCGXs, {from: "0x0000000000000000000000000000000000000001"});
		const boolPB51xe = await NasiLiquidityPoolFactoryUfNbJ0R.transferFrom.call(addresszcroR3, addresshULQ6yJ, uintIxyzzqR, {from: accounts[1]});
		const uint256Tfv1C4L = await NasiLiquidityPoolFactoryUfNbJ0R.balanceOf.call(addressorBu0jm, {from: "0x0000000000000000000000000000000000000001"});
		const boolVc1OIgX = await NasiLiquidityPoolFactoryUfNbJ0R.approve.call(addresswRcg8DL, uintD6Fm1ty, {from: accounts[1]});
		await NasiLiquidityPoolFactoryUfNbJ0R.renouncePauser.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringUwuo56Y = ""
		const stringqjxARx = "k"
		const uintPjbdRe9 = BigInt("175")
		const NasiLiquidityPoolFactoryMwbWyWw = await NasiLiquidityPoolFactory.new(stringUwuo56Y, stringqjxARx, uintPjbdRe9, {from: accounts[0]});
		const uint6rs5zE = BigInt("692")
		const addresshIUDfPB = accounts[4]
		await NasiLiquidityPoolFactoryMwbWyWw.renounceMinter.call({from: accounts[5]});
		await NasiLiquidityPoolFactoryMwbWyWw.renounceMinter.call({from: accounts[4]});
		const boolWHpjKvw = await NasiLiquidityPoolFactoryMwbWyWw.approve.call(addresshIUDfPB, uint6rs5zE, {from: accounts[2]});
		const stringsTvnEF = await NasiLiquidityPoolFactoryMwbWyWw.symbol.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryMwbWyWw.whenPaused.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressEBqy2y8 = "0x0000000000000000000000000000000000000001"
		const addressX4AC1qT = accounts[0]
		const uintKex0QV = BigInt("254")
		const uintx0UUFGI = BigInt("1651")
		const NasiLiquidityPoolFactoryGRWKOCM = await NasiLiquidityPoolFactory.new(addressEBqy2y8, addressX4AC1qT, uintKex0QV, uintx0UUFGI, {from: "0x0000000000000000000000000000000000000001"});
		const uintA9YA7Qs = BigInt("263")
		const addressR7Yl5G8 = accounts[2]
		const addressXwep6uI = accounts[3]
		const uintSxowhSA = BigInt("203")
		const addressbBR8TFv = accounts[1]
		const uinthqNd7eI = BigInt("1236")
		const boolZ375wmT = await NasiLiquidityPoolFactoryGRWKOCM.transferFrom.call(addressXwep6uI, addressR7Yl5G8, uintA9YA7Qs, {from: accounts[3]});
		const booljxMeQWK = await NasiLiquidityPoolFactoryGRWKOCM.approve.call(addressbBR8TFv, uintSxowhSA, {from: "0x0000000000000000000000000000000000000001"});
		const uint25661UZxX = await NasiLiquidityPoolFactoryGRWKOCM.updatePool.call(uinthqNd7eI, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringIM3pwFM = "M8frkSRKDsLN9UryFFyqO6mpCYFkl49VF1OaB5iXX1SFo8NoIJLji4PaVWthnTPHvyTE6Y7ZKo5XvAhegrcoad48DQnwBAq2"
		const stringIcQoqE = "KjnnH5ar4sN6MGbLWG5ANdOLsP1jyLSvIxLSeTsBZnWfRpCPtjW"
		const uintEMZ6GAW = BigInt("187")
		const NasiLiquidityPoolFactoryfFgIXbn = await NasiLiquidityPoolFactory.new(stringIM3pwFM, stringIcQoqE, uintEMZ6GAW, {from: accounts[5]});
		const uintXYEWtyP = BigInt("919")
		const addressiwbzBOk = accounts[3]
		const addressmSw6SoT = accounts[2]
		const addressZlmhWqX = accounts[4]
		const uintgryRisl = BigInt("584")
		const addresspqkOx0a = accounts[3]
		const uintG86FqY0 = BigInt("402")
		const addressl2Bo0wj = accounts[2]
		await NasiLiquidityPoolFactoryfFgIXbn.whenNotPaused.call({from: accounts[1]});
		const boolwreQJvm = await NasiLiquidityPoolFactoryfFgIXbn.increaseAllowance.call(addressiwbzBOk, uintXYEWtyP, {from: accounts[2]});
		const addressc4n9Na = await NasiLiquidityPoolFactoryfFgIXbn._delegate.call(addressZlmhWqX, addressmSw6SoT, {from: accounts[1]});
		const uint256lm0L29 = await NasiLiquidityPoolFactoryfFgIXbn.getPriorVotes.call(addresspqkOx0a, uintgryRisl, {from: accounts[5]});
		const boolZW6BYJY = await NasiLiquidityPoolFactoryfFgIXbn.transfer.call(addressl2Bo0wj, uintG86FqY0, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringTFvOx5J = "oDCXNEw4jbuXxR5vyKBAN0fL1uswUQamDlYzqTtxsB2t5OPjv8XqKOXbzh3272Tn9qTemYCujtsnfIC"
		const stringZVddTmW = "z3PpPC3JMYwbbZipI371yCqHHJDInO5pv4EaCM8sAEPvEkpdLFAjlqmS3OD"
		const uintq2WjwwT = BigInt("5")
		const NasiLiquidityPoolFactoryUoGCrmC = await NasiLiquidityPoolFactory.new(stringTFvOx5J, stringZVddTmW, uintq2WjwwT, {from: accounts[3]});
		const uintJgNwvtj = BigInt("215")
		const addresshVCrQBA = accounts[1]
		const addressMGHwZ5 = accounts[0]
		const addressyITlQZL = accounts[0]
		const uintv6TVEj7 = BigInt("955")
		const addressRpaC1Ud = "0x0000000000000000000000000000000000000001"
		const uintqatfeht = BigInt("1871")
		const addressfjFAu1 = accounts[0]
		const boolP22eLVQ = await NasiLiquidityPoolFactoryUoGCrmC.transfer.call(addresshVCrQBA, uintJgNwvtj, {from: accounts[4]});
		const uint256XgaCaAQ = await NasiLiquidityPoolFactoryUoGCrmC.allowance.call(addressyITlQZL, addressMGHwZ5, {from: accounts[2]});
		const boolZkoC6Cl = await NasiLiquidityPoolFactoryUoGCrmC.increaseAllowance.call(addressRpaC1Ud, uintv6TVEj7, {from: "0x0000000000000000000000000000000000000001"});
		const boolLdidOgo = await NasiLiquidityPoolFactoryUoGCrmC.mint.call(addressfjFAu1, uintqatfeht, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringjZ2Adu = "K33F8pMa4BOcbVyIH9xunfkRdaduEWNnNijvl"
		const stringfLQ1sai = "3oVK2Sz"
		const uinttRed2t8 = BigInt("71")
		const NasiLiquidityPoolFactoryqcJ1FUE = await NasiLiquidityPoolFactory.new(stringjZ2Adu, stringfLQ1sai, uinttRed2t8, {from: accounts[3]});
		const addressQZlJYEO = "0x0000000000000000000000000000000000000001"
		const uintO7kEaVm = BigInt("1686")
		const addressHs5tyQu = accounts[2]
		const addressSYDzHn = await NasiLiquidityPoolFactoryqcJ1FUE.setMigrator.call(addressQZlJYEO, {from: accounts[1]});
		const boolvbklZkE = await NasiLiquidityPoolFactoryqcJ1FUE.mint.call(addressHs5tyQu, uintO7kEaVm, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringyqEsu4a = "gwMGaWAeqaj21k6om2XUanfQCXmBpgklRwUmLSVHjoG9kbcMbic6Nti5vAdgqyiMn7RfINWBCjPXGxOhOJ"
		const stringOGCwx4L = "gmjV1YDNcuOxOI9JuFi6FBWVKwSlZvSzL4TAMGoxAwhDlYYycRFvyaVYmjl3YCkKtumH4RxdHvEb8ZmnJJVMw"
		const uintud2IA2N = BigInt("238")
		const NasiLiquidityPoolFactoryFBI7dOJ = await NasiLiquidityPoolFactory.new(stringyqEsu4a, stringOGCwx4L, uintud2IA2N, {from: accounts[0]});
		const addresssSDHasf = accounts[1]
		await NasiLiquidityPoolFactoryFBI7dOJ.onlyMinter.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryFBI7dOJ.onlyMinter.call({from: accounts[1]});
		const uint256pQu1TiL = await NasiLiquidityPoolFactoryFBI7dOJ.balanceOf.call(addresssSDHasf, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringHo7rgaN = "6mg1tGUFZbJNi92uc6WYBqkgGqx4yuetGoN7LBr71wxwyPxj7IVMO5dmViA2JGT8mC1gvF5x7GseSr4gdYGX5BvU9a"
		const stringcZSy4F = "ngast2Ys9YSUYWAY14qhXeOckVs0EwpMwRmGqWTLV3lecpHbGsrrF"
		const uintKWEzyK = BigInt("159")
		const NasiLiquidityPoolFactoryFZ2uQWf = await NasiLiquidityPoolFactory.new(stringHo7rgaN, stringcZSy4F, uintKWEzyK, {from: accounts[0]});
		const uintgoanV4s = BigInt("523")
		const addresssfPXOVb = accounts[0]
		const addresshaMJ88 = "0x0000000000000000000000000000000000000001"
		const addressZyisxrV = accounts[4]
		const uintFTDpswV = BigInt("1971")
		const addressV8oCUUJ = accounts[1]
		const uintaEkFFUE = BigInt("789")
		const boolGPsa1Qs = await NasiLiquidityPoolFactoryFZ2uQWf.transferFrom.call(addresshaMJ88, addresssfPXOVb, uintgoanV4s, {from: accounts[0]});
		const uint256kryzmjh = await NasiLiquidityPoolFactoryFZ2uQWf.pendingNasi.call(uintFTDpswV, addressZyisxrV, {from: accounts[2]});
		const uint256LlompWL = await NasiLiquidityPoolFactoryFZ2uQWf.totalSupply.call({from: accounts[2]});
		const uint256oOaHW5D = await NasiLiquidityPoolFactoryFZ2uQWf.pendingNasi.call(uintaEkFFUE, addressV8oCUUJ, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringuWpuqqF = "VhX1LqDAqUSjD1Kp406g5NjTiJXcgveoSgx8I5HRlIGCFFhvTIgJnAxxCZeOMo01CEXEw6"
		const stringnrwXh5f = "YOhFiTFL2Ya9GWWQLjimsLeXf"
		const uintnZwNDrR = BigInt("178")
		const NasiLiquidityPoolFactoryYilTou7 = await NasiLiquidityPoolFactory.new(stringuWpuqqF, stringnrwXh5f, uintnZwNDrR, {from: accounts[0]});
		const boolZc0o3mt = true
		const uintjHNXei4 = BigInt("1119")
		const uintqBebs4C = BigInt("1539")
		const address7Mu2Ju = accounts[2]
		const uintJwKCtGh = BigInt("1533")
		const uintOYVd6EC = BigInt("1469")
		const uint256NPtSLEA = await NasiLiquidityPoolFactoryYilTou7.setAllocationPoint.call(uintqBebs4C, uintjHNXei4, boolZc0o3mt, {from: accounts[4]});
		const uint256wxKWAvo = await NasiLiquidityPoolFactoryYilTou7.balanceOf.call(address7Mu2Ju, {from: accounts[0]});
		const uint256C1GgiDN = await NasiLiquidityPoolFactoryYilTou7.enterStaking.call(uintJwKCtGh, {from: accounts[1]});
		const uint256xyfsMRp = await NasiLiquidityPoolFactoryYilTou7.migrate.call(uintOYVd6EC, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringF9nrMVq = "LDEPofF0vdo6zyOgB8KmjPwS3uLN5IqvTOibwpjvXOWh8z0CnRioIqIy"
		const stringzC5a0Ne = "u"
		const uintY6Ju8fQ = BigInt("6")
		const NasiLiquidityPoolFactoryWtLPTvH = await NasiLiquidityPoolFactory.new(stringF9nrMVq, stringzC5a0Ne, uintY6Ju8fQ, {from: accounts[2]});
		const booluWXQZz = true
		const address66q9J2 = accounts[4]
		const uintkX9731j = BigInt("600")
		const addressiLLGT01 = accounts[0]
		const uint256E5lNAnA = await NasiLiquidityPoolFactoryWtLPTvH.addLpToken.call(uintkX9731j, address66q9J2, booluWXQZz, {from: accounts[1]});
		const stringDYjBmIe = await NasiLiquidityPoolFactoryWtLPTvH.symbol.call({from: accounts[1]});
		const addressjSwhezX = await NasiLiquidityPoolFactoryWtLPTvH.delegates.call(addressiLLGT01, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressevSukX5 = accounts[2]
		const addressPcv3yES = accounts[2]
		const uintyY2e1pP = BigInt("1979")
		const uintgZ7Wc5Y = BigInt("1773")
		const NasiLiquidityPoolFactoryF62TUo = await NasiLiquidityPoolFactory.new(addressevSukX5, addressPcv3yES, uintyY2e1pP, uintgZ7Wc5Y, {from: accounts[0]});
		const uintFXHdLRF = BigInt("997")
		await NasiLiquidityPoolFactoryF62TUo.renounceOwnership.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryF62TUo.whenNotPaused.call({from: accounts[0]});
		const uint256UL9VhWw = await NasiLiquidityPoolFactoryF62TUo.leaveStaking.call(uintFXHdLRF, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressFJfOjGu = accounts[2]
		const address2rGuPr = accounts[2]
		const uintygluQhx = BigInt("1979")
		const uintfsuhue8 = BigInt("1773")
		const NasiLiquidityPoolFactoryF62TUo = await NasiLiquidityPoolFactory.new(addressFJfOjGu, address2rGuPr, uintygluQhx, uintfsuhue8, {from: accounts[0]});
		const uinttgpCohM = BigInt("256")
		const uint256t62pVr7 = await NasiLiquidityPoolFactoryF62TUo.enterStaking.call(uinttgpCohM, {from: accounts[3]});
		const stringwsFOt6 = await NasiLiquidityPoolFactoryF62TUo.symbol.call({from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringqoWbH5s = "k4ETWOmhKcUCyET4CHA3stI75FTSI4RB78gwX4Y6BukQtthXB7fk"
		const stringDGBBmmg = "RaG7lWFkfAaklZShR5kT8LqKJdkrrO28Rvk9VG43nJL6uOGwHAS"
		const uintW1KuuWN = BigInt("208")
		const NasiLiquidityPoolFactoryS3WHG5V = await NasiLiquidityPoolFactory.new(stringqoWbH5s, stringDGBBmmg, uintW1KuuWN, {from: accounts[2]});
		const uintVzcoYT9 = BigInt("1770")
		const uintz3LKD4L = BigInt("1836")
		const addressdMokMbD = accounts[0]
		const uintbavSUDc = BigInt("938")
		const uintm5z5tD4 = BigInt("1293")
		const uintNrAYl7p = BigInt("583")
		const uint256j2i0Zxp = await NasiLiquidityPoolFactoryS3WHG5V.migrate.call(uintVzcoYT9, {from: accounts[0]});
		const boolB7bSKng = await NasiLiquidityPoolFactoryS3WHG5V.approve.call(addressdMokMbD, uintz3LKD4L, {from: accounts[0]});
		await NasiLiquidityPoolFactoryS3WHG5V.renounceOwnership.call({from: accounts[1]});
		const uint256Qd4LcmX = await NasiLiquidityPoolFactoryS3WHG5V.getBonusMultiplier.call(uintm5z5tD4, uintbavSUDc, {from: accounts[3]});
		const uint256fZNFAiK = await NasiLiquidityPoolFactoryS3WHG5V.updatePool.call(uintNrAYl7p, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringcAZlsuv = "lnRSu7sGD2al0dzdiigi3tziULijqwDm7Esy7vJ3oQtWDBsi2INjtEh2nOzipl0QAMa7Qxzqf9oFE9l9YyG"
		const stringCBpon08 = "l"
		const uintbvvfVwC = BigInt("232")
		const NasiLiquidityPoolFactoryxWpZAEN = await NasiLiquidityPoolFactory.new(stringcAZlsuv, stringCBpon08, uintbvvfVwC, {from: accounts[0]});
		const addressVDR6hSe = accounts[2]
		const uintHUUceoU = BigInt("308")
		const addressUp9Me1g = accounts[3]
		const addressLc8ATZ3 = accounts[2]
		const addressAHItEi3 = "0x0000000000000000000000000000000000000001"
		const uint256wLeQ2Qe = await NasiLiquidityPoolFactoryxWpZAEN.pendingNasi.call(uintHUUceoU, addressVDR6hSe, {from: accounts[1]});
		const uint256n5iCJcV = await NasiLiquidityPoolFactoryxWpZAEN.allowance.call(addressLc8ATZ3, addressUp9Me1g, {from: accounts[1]});
		await NasiLiquidityPoolFactoryxWpZAEN.whenNotPaused.call({from: accounts[4]});
		const booluwycicW = await NasiLiquidityPoolFactoryxWpZAEN.paused.call({from: accounts[2]});
		const addresszIbT9bY = await NasiLiquidityPoolFactoryxWpZAEN.setMigrator.call(addressAHItEi3, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressmmm5v29 = accounts[2]
		const addressf2dRewx = accounts[2]
		const uintYSBUvQ = BigInt("1979")
		const uinttCoVyIl = BigInt("1773")
		const NasiLiquidityPoolFactoryF62TUo = await NasiLiquidityPoolFactory.new(addressmmm5v29, addressf2dRewx, uintYSBUvQ, uinttCoVyIl, {from: accounts[0]});
		const uintUY5Huad = BigInt("181")
		const uintBjGSHCN = BigInt("1004")
		const uintujzX9rn = BigInt("256")
		const uint256FiAmcZf = await NasiLiquidityPoolFactoryF62TUo.emergencyWithdraw.call(uintUY5Huad, {from: accounts[2]});
		const uint256obWMHZ = await NasiLiquidityPoolFactoryF62TUo.enterStaking.call(uintBjGSHCN, {from: accounts[1]});
		const uint256t62pVr7 = await NasiLiquidityPoolFactoryF62TUo.enterStaking.call(uintujzX9rn, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringUlgRM8v = "ZjvfLJ1ysYBguT8987lSRI6zKQ1qKmqcFK1feBq2esLDWxVLWx9h8Po3m7fQmlNbu"
		const stringvuOXLN = "XKdDXyp3NDtnpmkfuRECkznDSmedKt5aBvAPLc0khMpY"
		const uintslOWVuO = BigInt("107")
		const NasiLiquidityPoolFactoryqvMHWI1 = await NasiLiquidityPoolFactory.new(stringUlgRM8v, stringvuOXLN, uintslOWVuO, {from: "0x0000000000000000000000000000000000000001"});
		const uintjpf1BXt = BigInt("1762")
		const uinteA7Jol4 = BigInt("438")
		await NasiLiquidityPoolFactoryqvMHWI1.massUpdatePools.call({from: accounts[1]});
		await NasiLiquidityPoolFactoryqvMHWI1.massUpdatePools.call({from: accounts[2]});
		await NasiLiquidityPoolFactoryqvMHWI1.renounceOwnership.call({from: accounts[3]});
		const uint256CJtv9Js = await NasiLiquidityPoolFactoryqvMHWI1.deposit.call(uinteA7Jol4, uintjpf1BXt, {from: accounts[1]});
		await NasiLiquidityPoolFactoryqvMHWI1.renouncePauser.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressVeiARUX = accounts[4]
		const addressCWcjdDa = accounts[3]
		const uintveJfYo = BigInt("362")
		const uintSNWJNXz = BigInt("149")
		const NasiLiquidityPoolFactorytmIfuws = await NasiLiquidityPoolFactory.new(addressVeiARUX, addressCWcjdDa, uintveJfYo, uintSNWJNXz, {from: accounts[3]});
		const addressNRla2sq = accounts[0]
		const addressTPxCpmM = accounts[3]
		const uintBBD4ld = BigInt("144")
		const uintkdXqQ9V = BigInt("605")
		const uintfcW2rqb = BigInt("1483")
		const uintFBUM8vU = BigInt("1116")
		const uinttJmeMc8 = BigInt("1960")
		const addressJWzcM9O = "0x0000000000000000000000000000000000000001"
		const uintJqTjuXP = BigInt("971")
		const uintX1SEJG = BigInt("44")
		const addressSNtWLx2 = await NasiLiquidityPoolFactorytmIfuws.setMigrator.call(addressNRla2sq, {from: accounts[1]});
		const uint256YP43sKt = await NasiLiquidityPoolFactorytmIfuws.pendingNasi.call(uintBBD4ld, addressTPxCpmM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ONtV6Q = await NasiLiquidityPoolFactorytmIfuws.emergencyWithdraw.call(uintkdXqQ9V, {from: accounts[0]});
		const 
YHvRJ7H = await NasiLiquidityPoolFactorytmIfuws._writeCheckpoint.call(addressJWzcM9O, uinttJmeMc8, uintFBUM8vU, uintfcW2rqb, {from: accounts[4]});
		const uint256Zat4GZZ = await NasiLiquidityPoolFactorytmIfuws.getBonusMultiplier.call(uintX1SEJG, uintJqTjuXP, {from: accounts[2]});
		await NasiLiquidityPoolFactorytmIfuws.unpause.call({from: accounts[2]});
	});
})