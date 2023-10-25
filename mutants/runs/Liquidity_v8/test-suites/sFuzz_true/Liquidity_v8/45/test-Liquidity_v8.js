const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringeGQRinX = "7uxUV0"
		const addressgGOFfFA = "0x0000000000000000000000000000000000000001"
		const addressNMK3VyN = accounts[4]
		const uintsAzdbOS = BigInt("1465")
		const uintfo3rQyJ = BigInt("486")
		const Liquidity_v8QHzHR4i = await Liquidity_v8.new(stringeGQRinX, addressgGOFfFA, addressNMK3VyN, uintsAzdbOS, uintfo3rQyJ, {from: accounts[2]});
		const uintmK5SgoW = BigInt("180")
		const uintxgZt738 = BigInt("1695")
		await Liquidity_v8QHzHR4i.onlyOwner.call({from: accounts[2]});
		const uint64wOJsGTD = await Liquidity_v8QHzHR4i.setRate.call(uintmK5SgoW, {from: accounts[2]});
		const boolEqCnhz9 = await Liquidity_v8QHzHR4i.withdraw.call({from: accounts[0]});
		const boolyiYGxu = await Liquidity_v8QHzHR4i.addReward.call(uintxgZt738, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringB5kPqyH = "ZtaSAP7D42V5VNDiitD"
		const addressaGctluz = accounts[3]
		const addressxzIVlA = accounts[2]
		const uintaCDmtGq = BigInt("1818")
		const uintnuk17UX = BigInt("894")
		const Liquidity_v8d2hmBLS = await Liquidity_v8.new(stringB5kPqyH, addressaGctluz, addressxzIVlA, uintaCDmtGq, uintnuk17UX, {from: accounts[2]});
		const uintgb5wCrO = BigInt("1141")
		const addressNIk0dr7 = accounts[1]
		const boolvnwMRZy = await Liquidity_v8d2hmBLS.addReward.call(uintgb5wCrO, {from: accounts[5]});
		const boolKB44xWI = await Liquidity_v8d2hmBLS.emergencyWithdraw.call({from: accounts[3]});
		const boolWR0tUsU = await Liquidity_v8d2hmBLS.withdraw.call({from: accounts[0]});
		await Liquidity_v8d2hmBLS.renounceOwnership.call({from: accounts[2]});
		const uint256AW3GlTB = await Liquidity_v8d2hmBLS.calculate.call(addressNIk0dr7, {from: accounts[4]});
		await Liquidity_v8d2hmBLS.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringzAIH57m = "InYp"
		const addressWvvncCZ = accounts[3]
		const addressBuYgql = accounts[1]
		const uintZ4mlASJ = BigInt("1748")
		const uintrI8GWd = BigInt("1637")
		const Liquidity_v8EGBXk0o = await Liquidity_v8.new(stringzAIH57m, addressWvvncCZ, addressBuYgql, uintZ4mlASJ, uintrI8GWd, {from: "0x0000000000000000000000000000000000000001"});
		const boolMPyCRp = await Liquidity_v8EGBXk0o.withdraw.call({from: accounts[1]});
		const boolBM6UgtY = await Liquidity_v8EGBXk0o.emergencyWithdraw.call({from: accounts[3]});
		await Liquidity_v8EGBXk0o.onlyOwner.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringigk3u7f = "VQFV"
		const addresstq76kb7 = accounts[1]
		const addressjj4s3I = accounts[5]
		const uintq6OGyWy = BigInt("1322")
		const uintVwsRiPp = BigInt("55")
		const Liquidity_v8ikR27tO = await Liquidity_v8.new(stringigk3u7f, addresstq76kb7, addressjj4s3I, uintq6OGyWy, uintVwsRiPp, {from: accounts[0]});
		const uintjJK5nKN = BigInt("1651")
		const boolLKTgSl3 = await Liquidity_v8ikR27tO.isOwner.call({from: accounts[0]});
		const uint256bcFW3s = await Liquidity_v8ikR27tO.changeLockDuration.call(uintjJK5nKN, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringhqKqDAD = "3W2idcQ6ETGFKJ0efuVz4wDbeXD8X"
		const addressVMQcLa6 = "0x0000000000000000000000000000000000000001"
		const addressV7Exeb = accounts[3]
		const uinteL7HAB1 = BigInt("1156")
		const uintAphtvJZ = BigInt("1343")
		const Liquidity_v8mNPNK8Z = await Liquidity_v8.new(stringhqKqDAD, addressVMQcLa6, addressV7Exeb, uinteL7HAB1, uintAphtvJZ, {from: accounts[4]});
		const uintoZQ02tt = BigInt("1296")
		const uintGm4HOFm = BigInt("969")
		const addressxP6E6ds = accounts[5]
		const uintwzZUnmu = BigInt("438")
		const addressX54fdio = accounts[0]
		const uint641PFFWc = await Liquidity_v8mNPNK8Z.setRate.call(uintoZQ02tt, {from: accounts[4]});
		const uint256uufWA9x = await Liquidity_v8mNPNK8Z.changeLockDuration.call(uintGm4HOFm, {from: accounts[1]});
		const 
Ui5FOc6 = await Liquidity_v8mNPNK8Z._hasAllowance.call(addressX54fdio, uintwzZUnmu, addressxP6E6ds, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringAvTaa3W = "AweDFt3rFlesSGXOcz47iQHwEGRtQHPiBb4Wdu9YqbJDkU"
		const addressHGxi2pf = accounts[4]
		const addressrzuRmwW = accounts[2]
		const uinth0kBe6q = BigInt("887")
		const uintq7f6FmY = BigInt("509")
		const Liquidity_v8aW7NJSY = await Liquidity_v8.new(stringAvTaa3W, addressHGxi2pf, addressrzuRmwW, uinth0kBe6q, uintq7f6FmY, {from: accounts[2]});
		const booljs4OqUW = await Liquidity_v8aW7NJSY.emergencyWithdraw.call({from: accounts[4]});
		const boolVGwp0Mi = await Liquidity_v8aW7NJSY.isOwner.call({from: accounts[1]});
		const addressEAVxCm = await Liquidity_v8aW7NJSY.owner.call({from: accounts[1]});
		const boolewRWD8S = await Liquidity_v8aW7NJSY.isOwner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringksKUKOu = "GIByHHzpQdaASi2jMZKeH6dUux1Nb8Ltusw8qXzwuSg2DYlNJYJHrTL58EonWquwzHA5st4erRXDJ5epa1zubYMb"
		const addressM0Q9TEo = accounts[4]
		const addressXGj0jzg = accounts[1]
		const uintmNcxcut = BigInt("1268")
		const uintMZ2v3HN = BigInt("1367")
		const Liquidity_v8dKO3jbj = await Liquidity_v8.new(stringksKUKOu, addressM0Q9TEo, addressXGj0jzg, uintmNcxcut, uintMZ2v3HN, {from: accounts[4]});
		const addresssdCZPht = "0x0000000000000000000000000000000000000001"
		const uintTkqhNrD = BigInt("1767")
		const 
dyE0vKj = await Liquidity_v8dKO3jbj.userDeposits.call(addresssdCZPht, {from: accounts[2]});
		const uint256vfVxGjn = await Liquidity_v8dKO3jbj.changeLockDuration.call(uintTkqhNrD, {from: accounts[4]});
		const boolUeKkeB6 = await Liquidity_v8dKO3jbj.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringigk3u7f = "VQFV"
		const addressH8Njzc9 = accounts[1]
		const addressQnrYUZ = accounts[5]
		const uintkAEg9l0 = BigInt("1322")
		const uintcTVw2K4 = BigInt("55")
		const Liquidity_v8ikR27tO = await Liquidity_v8.new(stringigk3u7f, addressH8Njzc9, addressQnrYUZ, uintkAEg9l0, uintcTVw2K4, {from: accounts[0]});
		const addressreTob8K = "0x0000000000000000000000000000000000000001"
		const uintRFvlxLY = BigInt("1651")
		const boolK3xryqf = await Liquidity_v8ikR27tO.withdraw.call({from: accounts[2]});
		const boolLKTgSl3 = await Liquidity_v8ikR27tO.isOwner.call({from: accounts[0]});
		const 
mEmuNoz = await Liquidity_v8ikR27tO.userDeposits.call(addressreTob8K, {from: accounts[2]});
		const uint256bcFW3s = await Liquidity_v8ikR27tO.changeLockDuration.call(uintRFvlxLY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringigk3u7f = "VQFV"
		const addressYrQmp5 = accounts[1]
		const addresstRBz6yI = accounts[5]
		const uintsksA9gq = BigInt("1322")
		const uintR1G2Zqi = BigInt("55")
		const Liquidity_v8ikR27tO = await Liquidity_v8.new(stringigk3u7f, addressYrQmp5, addresstRBz6yI, uintsksA9gq, uintR1G2Zqi, {from: accounts[0]});
		const uintsqO55DT = BigInt("1658")
		const addressmLVPZZF = await Liquidity_v8ikR27tO.owner.call({from: accounts[0]});
		const uint256bcFW3s = await Liquidity_v8ikR27tO.changeLockDuration.call(uintsqO55DT, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringW0ojz7E = "tSG5TvsKY"
		const addresssYpbHFY = accounts[1]
		const addressZYm32SN = accounts[1]
		const uintxAhdO2S = BigInt("1606")
		const uintUlF6us5 = BigInt("648")
		const Liquidity_v8srriKrX = await Liquidity_v8.new(stringW0ojz7E, addresssYpbHFY, addressZYm32SN, uintxAhdO2S, uintUlF6us5, {from: accounts[0]});
		const addressYYmmNbk = "0x0000000000000000000000000000000000000001"
		const addressCeASM2O = accounts[1]
		const uintIzKbxq7 = BigInt("1446")
		const uint256IJWZzkH = await Liquidity_v8srriKrX.calculate.call(addressYYmmNbk, {from: accounts[1]});
		const 
noQ4C5a = await Liquidity_v8srriKrX.userDeposits.call(addressCeASM2O, {from: accounts[0]});
		const uint64hfthwxb = await Liquidity_v8srriKrX.setRate.call(uintIzKbxq7, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringW0ojz7E = "tSG5TvsKY"
		const addressYCdcGdk = accounts[1]
		const addressPkYYZdv = accounts[1]
		const uintgTASDJt = BigInt("1606")
		const uintDRd2lk3 = BigInt("648")
		const Liquidity_v8srriKrX = await Liquidity_v8.new(stringW0ojz7E, addressYCdcGdk, addressPkYYZdv, uintgTASDJt, uintDRd2lk3, {from: accounts[0]});
		const addressMHRrRhI = accounts[2]
		const 
noQ4C5a = await Liquidity_v8srriKrX.userDeposits.call(addressMHRrRhI, {from: accounts[0]});
		await Liquidity_v8srriKrX.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringW0ojz7E = "tSG5TvsKY"
		const addressfajEvud = accounts[1]
		const addressJW9yq13 = accounts[1]
		const uintuAFjY7R = BigInt("1606")
		const uintbPVS6L8 = BigInt("648")
		const Liquidity_v8srriKrX = await Liquidity_v8.new(stringW0ojz7E, addressfajEvud, addressJW9yq13, uintuAFjY7R, uintbPVS6L8, {from: accounts[0]});
		const addressvRlbj0q = accounts[2]
		const addressBtbFgYR = accounts[2]
		const 
noQ4C5a = await Liquidity_v8srriKrX.userDeposits.call(addressvRlbj0q, {from: accounts[0]});
		const addresscWO6lTO = await Liquidity_v8srriKrX.transferOwnership.call(addressBtbFgYR, {from: accounts[0]});
	});
})